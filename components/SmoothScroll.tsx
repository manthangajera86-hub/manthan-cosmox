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

   THE WHEEL RUNS ON `lerp`, AND THE NUMBER IS MEASURED, NOT PICKED. Lenis
   takes either a `lerp` or a `duration`+`easing` and runs one or the other in
   `Animate.advance` — duration wins if both are set, which is worth knowing
   because it is easy to set a lerp that never runs. `lerp` damps towards a
   moving target every frame, frame-rate independently (Lenis damps with
   `1 - e^(-lerp * 60 * dt)`, so a 120Hz display gets the same curve as a
   60Hz one), which is the right shape for a wheel: the target keeps moving
   while the hand is still turning.

   Driving 30 wheel ticks of 100px 33ms apart over CDP and sampling `scrollY`
   every frame — how far behind the input the page is when the last tick
   lands, and how long after it the page comes to rest:

       duration 1.05 + expo-out   201px    834ms   ← what this used to be
       lerp 0.10 (Lenis default)  224px   1018ms
       lerp 0.14                  153px    669ms
       lerp 0.16                  130px    567ms   ← here
       lerp 0.20                  100px    435ms

   0.16 closes 90% of the gap in ~240ms. Below about 0.12 the page visibly
   trails the hand on a long flick; above about 0.22 the glide is gone and it
   may as well be the native wheel. Move it if the feel is wrong — that is the
   one knob — and re-measure rather than guessing, because the old 1.05s
   duration did not read as slow from the source either.

   The anchor jumps are the one place a fixed travel time is right — a jump
   from the footer to the top should not take proportionally longer than a
   short one — so `anchors` carries its own `duration`/`easing` and runs on the
   duration path while the wheel stays on lerp. Lenis resolves an anchor
   through the same `scroll-margin` / `scroll-padding` the browser uses, so the
   headings still land under the header. */

import { useEffect } from "react";
import Lenis from "lenis";

/* expo-out, Lenis's own default curve. Named here because a `duration` without
   an `easing` falls back to the lerp path and loses the fixed travel time. */
const expoOut = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export default function SmoothScroll() {
  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (calm.matches) return;

    const lenis = new Lenis({
      lerp: 0.16,
      anchors: { duration: 1.1, easing: expoOut },

      /* touch is left native. `syncTouch` re-drives a phone's scroll from JS,
         which costs the browser its own off-thread scrolling and reads as lag
         on exactly the devices that can least afford it. */
      syncTouch: false,

      /* anything that can actually scroll in the gesture's direction — the
         country panel when it scrolls inside itself below 640px, the rails,
         any overflow box — takes the wheel itself instead of having it stolen
         for the page. Without this, a pointer over an inner scroller still
         moves the window. */
      allowNestedScroll: true,

      /* clicking an internal link drops the inertia instead of carrying it
         into the next route, so a page cannot land part-way down because the
         wheel was still coasting when the router moved. */
      stopInertiaOnNavigate: true,
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
