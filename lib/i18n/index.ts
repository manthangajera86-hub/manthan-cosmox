/* The translation layer.

   Dictionaries are keyed by the *English string itself*, not by an invented key
   name. `t("Products")` looks up "Products" and returns "Produkte", or hands
   back "Products" unchanged when the locale has no entry for it. Three things
   fall out of that, and all three matter here:

   - Wrapping existing markup costs nothing. `<T>Products</T>` needs no key
     registry, and no page can render a bare `nav.products` because a miss is
     the English word.
   - A partial dictionary is a working dictionary. Untranslated strings stay
     English instead of disappearing.
   - The English copy is still what ships in the static HTML, so all 188 routes
     prerender exactly as they did and search engines see the transcribed copy.

   Each dictionary is its own chunk, fetched only when someone picks a country
   that uses it — an English visitor downloads none of them. The map below is
   written out rather than built from a template literal so the bundler can see
   every target statically. */

import type { Dict } from "./dict/types";

export type { Dict };

/* Keyed by **language**, not by locale id. A dictionary is a language, and one
   language serves many countries: Español is Spain and five Latin American
   markets, Deutsch is Germany, Austria and Switzerland, Français is France,
   Morocco and Algeria. Keying this by `id` — which it was, back when every
   locale happened to have a dictionary of its own — meant `at-de` found nothing
   and Austria got a German `<html lang>` over an English page. */
const LOADERS: Record<string, () => Promise<{ default: Dict }>> = {
  hi: () => import("./dict/hi"),
  zh: () => import("./dict/zh"),
  ja: () => import("./dict/ja"),
  ko: () => import("./dict/ko"),
  vi: () => import("./dict/vi"),
  id: () => import("./dict/id"),
  de: () => import("./dict/de"),
  fr: () => import("./dict/fr"),
  es: () => import("./dict/es"),
  it: () => import("./dict/it"),
  nl: () => import("./dict/nl"),
};

/* The primary subtag is what names the dictionary: `zh-Hans` is `zh`. */
const primary = (lang: string) => lang.split("-")[0];

/* Takes a locale's `lang`, not its `id`. Resolves to an empty dictionary for
   English and for anything unknown — the identity translation, which is what
   `t` already does on a miss. */
export async function loadDict(lang: string): Promise<Dict> {
  const load = LOADERS[primary(lang)];
  if (!load) return {};
  try {
    return (await load()).default;
  } catch {
    /* a chunk that fails to arrive leaves the page in English rather than
       half-translated — the same failure mode as no dictionary at all */
    return {};
  }
}

export const hasDict = (lang: string) => primary(lang) in LOADERS;

/* Whitespace in JSX is not always the whitespace in the dictionary: a string
   broken across source lines arrives with a newline and the indent in it. Trim
   and collapse before looking up, then give back the translation with the
   original's leading and trailing space so inline text keeps its spacing. */
export function translate(dict: Dict, text: string): string {
  const key = text.trim().replace(/\s+/g, " ");
  if (!key) return text;
  const hit = dict[key];
  if (hit === undefined) return text;
  const lead = /^\s*/.exec(text)![0];
  const tail = /\s*$/.exec(text)![0];
  return lead + hit + tail;
}
