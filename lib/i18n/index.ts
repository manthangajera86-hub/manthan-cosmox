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
   - The English copy is still what ships in the static HTML, so all 117 routes
     prerender exactly as they did and search engines see the transcribed copy.

   Each dictionary is its own chunk, fetched only when someone picks that
   country — an English visitor downloads none of them. The map below is
   written out rather than built from a template literal so the bundler can see
   every target statically. */

import type { Dict } from "./dict/types";

export type { Dict };

const LOADERS: Record<string, () => Promise<{ default: Dict }>> = {
  "in-hi": () => import("./dict/hi"),
  "cn-zh": () => import("./dict/zh"),
  "jp-ja": () => import("./dict/ja"),
  "kr-ko": () => import("./dict/ko"),
  "vn-vi": () => import("./dict/vi"),
  "id-id": () => import("./dict/id"),
  "de-de": () => import("./dict/de"),
  "fr-fr": () => import("./dict/fr"),
  "es-es": () => import("./dict/es"),
  "it-it": () => import("./dict/it"),
  "nl-nl": () => import("./dict/nl"),
};

/* Resolves to an empty dictionary for English and for anything unknown — the
   identity translation, which is what `t` already does on a miss. */
export async function loadDict(id: string): Promise<Dict> {
  const load = LOADERS[id];
  if (!load) return {};
  try {
    return (await load()).default;
  } catch {
    /* a chunk that fails to arrive leaves the page in English rather than
       half-translated — the same failure mode as no dictionary at all */
    return {};
  }
}

export const hasDict = (id: string) => id in LOADERS;

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
