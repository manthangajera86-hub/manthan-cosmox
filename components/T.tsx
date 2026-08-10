"use client";

/* Wraps one English string so it can be swapped for its translation.

       <h4>Company</h4>   →   <h4><T>Company</T></h4>

   Deliberately the smallest thing that could work. It takes text and returns
   text — no element, no wrapper, no class — so it can go anywhere a string can,
   including inside a heading that is already styled, and it changes nothing
   about the surrounding markup.

   A server component may render it: the child is a string, which crosses the
   boundary fine. What it must not be handed is JSX. For a sentence with a
   `<b>` or a link in the middle, wrap each text run separately, or use `useT()`
   from LocaleProvider in a component that is already a client component.

   The English is still the source of truth and still what prerenders: the child
   *is* the dictionary key, so an untranslated string renders as itself. */

import { useT } from "./LocaleProvider";

export default function T({ children }: { children: string | string[] }) {
  const t = useT();
  const text = Array.isArray(children) ? children.join("") : children;
  return <>{t(text)}</>;
}
