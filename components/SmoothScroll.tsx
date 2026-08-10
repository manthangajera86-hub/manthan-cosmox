"use client";

/* Wheel smoothing, and anchor jumps, both from Lenis. Disabled outright under
   prefers-reduced-motion — inertia is exactly the kind of motion that setting
   exists to switch off — and torn down on unmount so a route change never
   leaves two loops running.

   `.has-lenis` on <html> is what turns the native `scroll-behavior: smooth`
   off while this is running, and it is set here rather than relying on Lenis's
   own `.lenis-smooth`: that class is only present *during* a smooth scroll, so
   at rest the native behaviour was still live and it fought every programmatic
   scroll — including the one the router does on navigation, which is why a
   route could land part-way down the page instead of at the top.

   `anchors: true` gives the jump links back the easing the native behaviour
   used to provide. Lenis resolves an anchor through the same `scroll-margin` /
   `scroll-padding` the browser uses, so the headings land where they did. */

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (calm.matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
      anchors: true,
    });

    const root = document.documentElement;
    root.classList.add("has-lenis");

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      root.classList.remove("has-lenis");
    };
  }, []);

  return null;
}
