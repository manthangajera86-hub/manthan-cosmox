"use client";

/* The landing hero's last word, and the photograph behind it.

   "COSMOX CHEMICALS ｜ SPECIALITY" holds its first two words and cycles the
   heavy one, and the picture changes with it. The words are not a new piece of
   copy: the hero's own lede names three things — metal soaps, halogen-free
   flame retardants and high-purity intermediates — and those are the three,
   after the "Speciality" the headline already said. Each takes the division
   photograph the rest of the page shows it under, so the hero says the same
   thing in a picture that `#divisions` says in a tile.

   Four things it has to get right, in order of how badly they bite:

   · **"Speciality" is what prerenders.** Index 0 is the server's, and the
     cycle starts in an effect — this is the site's h1, and the first frame a
     visitor and a crawler see is the headline the page has always had.
   · **Nothing may reflow.** The words are stacked in one grid cell, so the
     heavy run is always as wide as the longest of them and the lede and
     buttons under it never move as the word changes. That is also why the
     stack sits inside the `<b>` rather than replacing it: `b::before` draws
     the hairline rule, and a grid on the `<b>` itself would make that rule a
     grid item and lay it over the words.
   · **The pictures load as they are needed.** Every layer rendered with its
     `.bg-*` class up front would pull three more photographs into the hero's
     own load. A layer gets its class once it is about to be shown — the one
     on screen and the one after it — so the first paint costs exactly what it
     costs today, and each picture has a whole word's turn to arrive.
   · **It stands down.** No cycle at all under `prefers-reduced-motion`; it
     holds while the tab is in the background and once the hero is scrolled
     past, both for the same reason the rails do.

   The pieces around the headline come in as nodes, not as a render function —
   a server component cannot hand a client one a callback. */

import { useEffect, useRef, useState, type ReactNode } from "react";

/** ms a word holds before the next one takes over */
const DWELL = 3600;

export type HeroWord = {
  /** the word itself — the heavy run of the headline */
  word: string;
  /** its photograph: a `.bg-*` class, or null for the hero's own picture */
  bg: string | null;
};

export default function HeroCycle({
  lead,
  words,
  above,
  below,
}: {
  lead: string;
  words: HeroWord[];
  above: ReactNode;
  below: ReactNode;
}) {
  const [i, setI] = useState(0);
  /* Which layers may carry their picture yet. It starts at the hero's own
     photograph alone, so the *server's* markup asks for exactly what the hero
     asked for before any of this — one image. The effect below primes the
     second one after paint, a whole word's turn before it is needed, and each
     step primes the one after that. */
  const [primed, setPrimed] = useState<number[]>([0]);
  const hero = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* every reason to hold, so no one of them clears a hold another wants —
       the same shape as the rails' `held`, and `offscreen` starts false
       because the hero is what the page opens on */
    const held = { hidden: false, offscreen: false };

    const io = "IntersectionObserver" in window && hero.current
      ? new IntersectionObserver(([e]) => { held.offscreen = !e.isIntersecting; },
                                 { threshold: 0.25 })
      : null;
    if (io && hero.current) io.observe(hero.current);

    const onVisibility = () => { held.hidden = document.hidden; };
    document.addEventListener("visibilitychange", onVisibility);

    /* the next photograph starts arriving now rather than at the cross-fade */
    setPrimed((p) => (p.includes(1) ? p : [...p, 1]));

    const tick = setInterval(() => {
      if (held.hidden || held.offscreen) return;
      setI((n) => {
        const next = (n + 1) % words.length;
        setPrimed((p) => (p.includes(next + 1) ? p : [...p, next, (next + 1) % words.length]));
        return next;
      });
    }, DWELL);

    return () => {
      clearInterval(tick);
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [words.length]);

  return (
    <div className="hero__cycle-root" ref={hero}>
      {words.map((w, n) => (
        <div
          key={w.word}
          className={[
            "hero__media",
            w.bg ? "hero__media--alt" : "",
            w.bg && primed.includes(n) ? w.bg : "",
            n === i ? "is-on" : "",
          ].filter(Boolean).join(" ")}
          aria-hidden="true"
        ></div>
      ))}
      <div className="hero__scrim"></div>

      <div className="hero__inner">
        <div>
          {above}
          <h1 className="hero__title">
            {lead}{" "}
            <b>
              <span className="hero__words">
                {words.map((w, n) => (
                  <span
                    key={w.word}
                    className={`hero__word${n === i ? " is-on" : ""}`}
                    /* the headline reads "Cosmox Chemicals Speciality" to a
                       screen reader whatever is on screen: the rotation is a
                       picture of the range, not four different h1s */
                    aria-hidden={n === 0 ? undefined : "true"}
                  >
                    {w.word}
                  </span>
                ))}
              </span>
            </b>
          </h1>
          {below}
        </div>
      </div>
    </div>
  );
}
