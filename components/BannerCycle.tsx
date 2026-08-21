"use client";

/* A family index page's banner, cycling its own topics' photographs with a
   line under the copy that names the one on screen.

   The landing hero (`HeroCycle`) changes the heavy word of the headline and
   the picture behind it. A family banner cannot do that: its `<h1>` is the
   page's name — "Industries We Serve" — and the ten titles that would take its
   place run to "Industrial Machinery & Equipment", which is ~1250px of 63px
   type and wraps the headline onto a second line for some words and not
   others. So here the headline holds still and a caption changes instead:
   `01 · Automotive & Transportation`, the number and title the grid further
   down the page shows under the same photograph, linking to the same page.

   Nothing about the frames is invented. They come from `bannerFrames()` in
   `lib/topics.ts` — the family's own topics, in the grid's order — so the
   banner cannot name a picture the register does not agree with, and adding a
   topic adds a frame.

   Four things it has to get right; the first three are `HeroCycle`'s and the
   fourth is this component's own:

   · **Frame 0 is what prerenders.** The first topic's picture and caption are
     in the server's HTML, `is-on`, so the banner is a still of topic 01 with
     JavaScript off and under `prefers-reduced-motion`.
   · **Nothing reflows.** All the captions live in one grid cell, so the row is
     as wide as the longest of them and the arrows at the far end do not shift
     as the line changes. The off frames are `visibility: hidden`, which is
     also what keeps their links out of the tab order.
   · **The pictures load as they are needed.** A layer takes its `.bg-*` class
     only once it is the current frame or the next one, so the banner's first
     paint asks for one photograph rather than ten. (The grid below the fold
     asks for all of them anyway — this is about what competes with the LCP
     image, not about total bytes.)
   · **Reaching for it stops it.** Pointer or focus on the caption row holds
     the cycle, so the link never steps out from under the pointer mid-click.
     Hovering the *picture* does not hold it: a banner this tall would then sit
     frozen for anyone whose pointer happens to rest on it while reading.

   It also holds while the tab is in the background and once the banner is
   scrolled past, and it never starts at all under `prefers-reduced-motion` —
   where the arrows still work, because a control the visitor asks for is not
   motion the visitor did not. */

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useT } from "./LocaleProvider";

export type BannerFrame = {
  /** the topic's number, as the grid prints it */
  num: string;
  /** its title — the caption, and the dictionary key for it */
  title: string;
  /** its photograph: a `.bg-*` class from the block in globals.css */
  img: string;
  /** its own page */
  href: string;
};

/** ms a frame holds before the next one takes over. Longer than the hero's
    3600: that cycles a word to glance at, this one a line to read. */
const DWELL = 4500;

export default function BannerCycle({
  frames,
  children,
}: {
  frames: BannerFrame[];
  children: ReactNode;
}) {
  const t = useT();
  const [i, setI] = useState(0);
  /* which layers may carry their picture yet — see the note above */
  const [primed, setPrimed] = useState<number[]>([0]);
  /* every reason to hold, so that releasing one does not clear another's */
  const held = useRef({ pointer: false, focus: false, offscreen: true, hidden: false });
  /* when the banner last moved, by any cause: the wait is measured from here,
     so an arrow press resets the cadence instead of being followed a moment
     later by a step nobody asked for. Same clock as `Rail`'s. */
  const last = useRef(0);
  const band = useRef<HTMLElement>(null);

  const go = useCallback((n: number) => {
    setI((cur) => (cur + n + frames.length) % frames.length);
    last.current = Date.now();
  }, [frames.length]);

  /* Priming, in an effect rather than inside the step: effects run after
     paint, so the *server's* markup asks for exactly one photograph, and the
     one after the current frame starts arriving a whole dwell before it is
     needed. */
  useEffect(() => {
    setPrimed((p) => {
      const next = (i + 1) % frames.length;
      if (p.includes(i) && p.includes(next)) return p;
      return [...new Set([...p, i, next])];
    });
  }, [i, frames.length]);

  useEffect(() => {
    const el = band.current;
    if (frames.length < 2 || !el) return;
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
      if (Date.now() - last.current < DWELL) return;
      go(1);
    }, 250);

    return () => {
      clearInterval(tick);
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [frames.length, go]);

  const hold = (key: "pointer" | "focus", on: boolean) => () => { held.current[key] = on; };

  return (
    <section className="page-hero page-hero--cycle" ref={band}>
      {frames.map((f, n) => (
        <div
          key={f.href}
          className={[
            "page-hero__media",
            primed.includes(n) ? f.img : "",
            n === i ? "is-on" : "",
          ].filter(Boolean).join(" ")}
          aria-hidden="true"
        ></div>
      ))}
      <div className="page-hero__scrim" aria-hidden="true"></div>

      <div className="page-hero__inner">
        {children}

        <div
          className="page-hero__now"
          onPointerEnter={hold("pointer", true)}
          onPointerLeave={hold("pointer", false)}
          onFocusCapture={hold("focus", true)}
          onBlurCapture={hold("focus", false)}
        >
          <p className="page-hero__now-stack">
            {frames.map((f, n) => (
              <span
                key={f.href}
                className={`page-hero__now-item${n === i ? " is-on" : ""}`}
                aria-hidden={n === i ? undefined : "true"}
              >
                <span className="page-hero__now-num">{f.num}</span>
                <Link href={f.href}>{t(f.title)}</Link>
              </span>
            ))}
          </p>

          <div className="page-hero__now-nav">
            <button type="button" aria-label={t("Previous picture")} onClick={() => go(-1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M19 12H6M11 6l-6 6 6 6" />
              </svg>
            </button>
            <button type="button" aria-label={t("Next picture")} onClick={() => go(1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
