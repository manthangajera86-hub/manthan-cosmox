"use client";

/* Reveal-on-scroll for every `.rise` in the tree. Without an observer, or
   under prefers-reduced-motion, everything is marked `is-in` up front — the
   content must never be left hidden by a failed observer. Re-runs per route so
   a client-side navigation gets its own elements.

   A `.rise` reveals once and is then let go. `.rise--repeat` opts an element
   into replaying instead: it keeps its place in the observer and drops `is-in`
   again when it leaves, so the reveal runs every time it scrolls back in. That
   is only for elements whose reveal is motion on a decorative layer — the
   division tiles, whose `::before` swings shut — never for copy, which would
   mean text disappearing behind the reader. */

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const rises = Array.from(document.querySelectorAll<HTMLElement>(".rise"));
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (calm || !("IntersectionObserver" in window)) {
      rises.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const repeats = e.target.classList.contains("rise--repeat");
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            if (!repeats) io.unobserve(e.target);
          } else if (repeats) {
            e.target.classList.remove("is-in");
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    rises.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
