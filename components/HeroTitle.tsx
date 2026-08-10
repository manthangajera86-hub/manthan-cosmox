"use client";

/* The two-tone banner headline — "Industries **We Serve**", light then bold —
   and what to do with it in another language.

   The split is typographic, not grammatical: it falls where the line looks
   right in English, and there is no reason the same two words survive
   translation in the same order. "Search for a **Product**" is four words and a
   noun in English, one verb phrase in Japanese. Translating the halves
   separately would produce fragments no translator could work with.

   So the dictionary key is the *whole* headline, and the two-tone treatment is
   an English-only affordance: if the active dictionary has the full phrase, it
   is rendered as one bold run — which is exactly what the five single-word
   banners (`page-hero__title--solo`) already look like, so nothing new appears
   on the page. If it does not, the English pair renders untouched. Both halves
   still go in as written, so the English markup is unchanged. */

import { useT } from "./LocaleProvider";

export default function HeroTitle({ light, bold }: { light: string; bold: string }) {
  const t = useT();
  const whole = `${light} ${bold}`;
  const translated = t(whole);

  /* `t` hands back its argument on a miss, so an unchanged string means this
     locale has no entry — fall through to the English two-tone. */
  if (translated !== whole) return <b>{translated}</b>;

  return (
    <>
      {light} <b>{bold}</b>
    </>
  );
}
