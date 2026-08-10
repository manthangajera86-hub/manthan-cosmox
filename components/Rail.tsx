"use client";

/* Horizontal rails — the applications strip and the industry scroller.
   Scrolling is native (CSS scroll-snap), so this only drives the arrows and
   disables them at the ends; with JavaScript off the rail still swipes.

   With `loop`, the slides are rendered twice and the scroll position is kept
   inside a one-set-wide window: step outside it and the position jumps by a
   whole set, which is invisible because the two sets are identical. That is
   what keeps a slide in both peeks — a centred rail with a single set leaves
   the panel vacant at either end. The jump only happens once scrolling has
   settled, so it never lands mid-animation.

   With `spotlight`, whichever slide is nearest the middle carries `is-centre`
   and the stylesheet sits the rest back — the class is all this component
   decides, the size difference is entirely CSS.

   With `autoplay`, the rail steps itself. It holds whenever advancing would be
   rude or pointless: pointer over it, focus inside it, section off screen, tab
   in the background — and it never starts at all under `prefers-reduced-motion`.

   The heading comes in as nodes rather than a render function: this is a
   client component, and a server component cannot pass it a callback. */

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  /** class on the scrolling element */
  className: string;
  /** selector for one item, used to size a step */
  itemSelector: string;
  /** gap between items, added to the step */
  gap: number;
  /** used in the arrows' labels: "Next {label}" */
  label: string;
  focusable?: boolean;
  /** repeat the slides and wrap the scroll position, so the rail never ends */
  loop?: boolean;
  /** mark the slide nearest the middle with `is-centre` */
  spotlight?: boolean;
  /** ms between self-advancing steps; omit to leave the rail still */
  autoplay?: number;
  heading: ReactNode;
  headClassName: string;
  ctrlClassName: string;
  /** class on each arrow; the scroller styles its own via .scroller-nav button */
  btnClassName?: string;
  children: ReactNode;
};

export default function Rail({
  className,
  itemSelector,
  gap,
  label,
  focusable,
  loop,
  spotlight,
  autoplay,
  heading,
  headClassName,
  ctrlClassName,
  btnClassName,
  children,
}: Props) {
  const rail = useRef<HTMLDivElement>(null);
  const settle = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frame = useRef(0);
  const [atStart, setAtStart] = useState(!loop);
  const [atEnd, setAtEnd] = useState(false);

  /* every reason autoplay might be holding, so no one of them can clear a hold
     another still wants — `offscreen` starts true and the observer lowers it */
  const held = useRef({ pointer: false, focus: false, offscreen: true, hidden: false });
  /* when the rail last moved, by any cause; autoplay measures its wait from
     here, so pressing an arrow resets the cadence instead of being followed a
     moment later by a step the visitor did not ask for */
  const last = useRef(0);

  /* `period` is one set of slides in pixels; `home` is the offset that centres
     the first slide of the second set — the position the rail opens at and the
     middle of the window the wrap keeps it inside. */
  const metrics = useCallback(() => {
    const el = rail.current;
    if (!el) return null;
    const items = el.querySelectorAll<HTMLElement>(itemSelector);
    if (items.length < 4) return null;
    const half = items.length / 2;
    const first = items[half];
    return {
      period: (items[1].offsetLeft - items[0].offsetLeft) * half,
      home: first.offsetLeft - (el.clientWidth - first.offsetWidth) / 2,
    };
  }, [itemSelector]);

  /* pull the position back to the set nearest home; the picture doesn't move */
  const wrap = useCallback(() => {
    const el = rail.current;
    const m = loop ? metrics() : null;
    if (!el || !m) return;
    const sets = Math.round((el.scrollLeft - m.home) / m.period);
    if (sets) el.scrollLeft -= sets * m.period;
  }, [loop, metrics]);

  const sync = useCallback(() => {
    const el = rail.current;
    if (!el || loop) return;   /* a looping rail has no ends to disable at */
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, [loop]);

  /* One slide plus one gap, measured from the layout box. It has to be
     `offsetLeft`/`offsetWidth` rather than `getBoundingClientRect()`: under
     `spotlight` the slides carry a `scale()`, and a rect reports the scaled
     width — a step short by that factor, every time. */
  const move = useCallback((dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(itemSelector);
    const step = items.length > 1
      ? items[1].offsetLeft - items[0].offsetLeft
      : items[0] ? items[0].offsetWidth + gap : el.clientWidth;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    last.current = Date.now();
    el.scrollBy({ left: dir * step, behavior: calm ? "auto" : "smooth" });
  }, [gap, itemSelector]);

  /* Whichever slide's middle is nearest the rail's middle wins. Rects rather
     than offsets here on purpose — this one wants where things actually are on
     screen, and both sides of the comparison are measured the same way, so the
     scale the class itself applies cancels out. */
  const markCentre = useCallback(() => {
    const el = rail.current;
    if (!el || !spotlight) return;
    const items = el.querySelectorAll<HTMLElement>(itemSelector);
    if (!items.length) return;
    const mid = el.getBoundingClientRect().left + el.clientWidth / 2;
    let win = 0;
    let best = Infinity;
    items.forEach((it, i) => {
      const r = it.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - mid);
      if (d < best) { best = d; win = i; }
    });
    items.forEach((it, i) => it.classList.toggle("is-centre", i === win));
  }, [itemSelector, spotlight]);

  useEffect(() => {
    const el = rail.current;
    if (loop && el) {
      const m = metrics();
      if (m) el.scrollLeft = m.home;
      /* the second set is decoration — it stays clickable, but it is hidden
         from assistive tech, so it must be out of the tab order too */
      el.querySelectorAll<HTMLElement>(".rail-clone a").forEach((a) => { a.tabIndex = -1; });
    }
    sync();
    markCentre();
    const onResize = () => { sync(); wrap(); markCentre(); };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (settle.current) clearTimeout(settle.current);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [loop, metrics, sync, wrap, markCentre]);

  const onScroll = () => {
    sync();
    /* scroll fires far more often than the centre can change — one read per
       frame is enough, and it keeps the measuring out of the event itself */
    if (!frame.current) {
      frame.current = requestAnimationFrame(() => { frame.current = 0; markCentre(); });
    }
    if (!loop) return;
    if (settle.current) clearTimeout(settle.current);
    settle.current = setTimeout(wrap, 150);
  };

  /* Auto-advance. A short poll rather than an interval of `autoplay`: the wait
     is measured from the last movement, so an arrow press or a previous step
     both reset it, and releasing a hold gives a full fresh delay rather than an
     immediate jump. Holding pushes the clock forward for the same reason. */
  useEffect(() => {
    const el = rail.current;
    if (!autoplay || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = "IntersectionObserver" in window
      ? new IntersectionObserver(([e]) => { held.current.offscreen = !e.isIntersecting; },
                                 { threshold: 0.35 })
      : null;
    if (io) io.observe(el);
    else held.current.offscreen = false;   /* no observer: never hold on this */

    const onVisibility = () => { held.current.hidden = document.hidden; };
    document.addEventListener("visibilitychange", onVisibility);

    last.current = Date.now();
    const tick = setInterval(() => {
      if (Object.values(held.current).some(Boolean)) { last.current = Date.now(); return; }
      if (Date.now() - last.current < autoplay) return;
      move(1);
    }, 250);

    return () => {
      clearInterval(tick);
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [autoplay, move]);

  const hold = (key: "pointer" | "focus", on: boolean) => () => { held.current[key] = on; };

  return (
    <>
      <div className="bleed">
        <div className={headClassName}>
          {heading}
          {/* the arrows hold it too: reaching for one should not be answered by
              the rail stepping out from under the pointer */}
          <div
            className={ctrlClassName}
            onPointerEnter={autoplay ? hold("pointer", true) : undefined}
            onPointerLeave={autoplay ? hold("pointer", false) : undefined}
            onFocusCapture={autoplay ? hold("focus", true) : undefined}
            onBlurCapture={autoplay ? hold("focus", false) : undefined}
          >
            <button className={btnClassName} type="button" aria-label={`Previous ${label}`} disabled={atStart} onClick={() => move(-1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M19 12H6M11 6l-6 6 6 6" />
              </svg>
            </button>
            <button className={btnClassName} type="button" aria-label={`Next ${label}`} disabled={atEnd} onClick={() => move(1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={[className, loop && "is-loop", spotlight && "is-spotlight"].filter(Boolean).join(" ")}
        ref={rail}
        onScroll={onScroll}
        onPointerEnter={autoplay ? hold("pointer", true) : undefined}
        onPointerLeave={autoplay ? hold("pointer", false) : undefined}
        onFocusCapture={autoplay ? hold("focus", true) : undefined}
        onBlurCapture={autoplay ? hold("focus", false) : undefined}
        tabIndex={focusable ? 0 : undefined}
        role="region"
        aria-label={`${label}, scrollable`}
      >
        {loop ? <div className="rail-clone" aria-hidden="true">{children}</div> : null}
        {children}
      </div>
    </>
  );
}
