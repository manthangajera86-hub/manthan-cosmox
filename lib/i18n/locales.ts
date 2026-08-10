/* The countries the globe capsule in the header opens onto, and the language
   each one switches the site into.

   A locale here is a *country* first and a language second, because that is
   what an export business's visitors are picking: "I am buying from Germany",
   not "I read German". Two entries can therefore share a country — India is
   listed twice, once for English and once for हिन्दी — which is why `id` is the
   key and `lang` is only the BCP-47 tag that goes on <html lang>.

   `code` is the ISO 3166-1 alpha-2 country code, shown as the small chip in the
   menu. There are deliberately no flag emoji: Windows renders them as bare
   letter pairs, and nothing else on this site is an emoji.

   Adding a locale means an entry here and a dictionary in `lib/i18n/dict/`,
   registered in `lib/i18n/index.ts`. A locale with no dictionary falls back to
   English string by string, so a half-finished translation degrades to English
   rather than to blank space or a raw key. */

export type Locale = {
  /** dictionary key and stored preference — country code + language tag */
  id: string;
  /** BCP-47 tag for <html lang> */
  lang: string;
  /** ISO 3166-1 alpha-2, shown as the chip */
  code: string;
  /** country, in English — what the menu is sorted and searched by */
  country: string;
  /** the language, written in itself */
  language: string;
  region: RegionKey;
};

export type RegionKey = "asia-pacific" | "europe";

export const REGIONS: [key: RegionKey, label: string][] = [
  ["asia-pacific", "Asia Pacific"],
  ["europe", "Europe"],
];

export const LOCALES: Locale[] = [
  { id: "in-en", lang: "en", code: "IN", country: "India", language: "English", region: "asia-pacific" },
  { id: "in-hi", lang: "hi", code: "IN", country: "India", language: "हिन्दी", region: "asia-pacific" },
  { id: "cn-zh", lang: "zh-Hans", code: "CN", country: "China", language: "中文", region: "asia-pacific" },
  { id: "jp-ja", lang: "ja", code: "JP", country: "Japan", language: "日本語", region: "asia-pacific" },
  { id: "kr-ko", lang: "ko", code: "KR", country: "South Korea", language: "한국어", region: "asia-pacific" },
  { id: "vn-vi", lang: "vi", code: "VN", country: "Vietnam", language: "Tiếng Việt", region: "asia-pacific" },
  { id: "id-id", lang: "id", code: "ID", country: "Indonesia", language: "Bahasa Indonesia", region: "asia-pacific" },
  { id: "de-de", lang: "de", code: "DE", country: "Germany", language: "Deutsch", region: "europe" },
  { id: "fr-fr", lang: "fr", code: "FR", country: "France", language: "Français", region: "europe" },
  { id: "es-es", lang: "es", code: "ES", country: "Spain", language: "Español", region: "europe" },
  { id: "it-it", lang: "it", code: "IT", country: "Italy", language: "Italiano", region: "europe" },
  { id: "nl-nl", lang: "nl", code: "NL", country: "Netherlands", language: "Nederlands", region: "europe" },
];

/* The one the site is written in, and what every page prerenders as. */
export const DEFAULT_LOCALE = "in-en";

export const LOCALE: Record<string, Locale> = Object.fromEntries(
  LOCALES.map((l) => [l.id, l]),
);

export const findLocale = (id: string | null | undefined): Locale =>
  (id && LOCALE[id]) || LOCALE[DEFAULT_LOCALE];

export const localesIn = (region: RegionKey) =>
  LOCALES.filter((l) => l.region === region);
