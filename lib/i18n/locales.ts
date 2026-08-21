/* The countries the globe capsule in the header opens onto, and the language
   each one switches the site into.

   A locale here is a *country* first and a language second, because that is
   what an export business's visitors are picking: "I am buying from Germany",
   not "I read German". Two entries can therefore share a country — India is
   listed twice, once for English and once for हिन्दी — which is why `id` is the
   key and `lang` is only the BCP-47 tag that goes on <html lang>.

   `code` is the ISO 3166-1 alpha-2 country code, shown as the small chip in the
   menu, and it is also what location detection resolves to — see `./detect.ts`,
   which maps an IANA time zone to one of these codes. There are deliberately no
   flag emoji: Windows renders them as bare letter pairs, and nothing else on
   this site is an emoji.

   **A country's `language` is the language this site can actually show it in,
   not the country's own first language.** There are eleven dictionaries, so
   Brazil, Poland and Saudi Arabia are listed as English — which is the truth of
   how speciality chemicals are bought across those desks, and is better than
   offering "Português" and then rendering an English page. Where a market does
   have one of the eleven, it gets it: Español covers five Latin American
   countries, Deutsch covers Austria and Switzerland, Nederlands covers Belgium,
   and Français covers Morocco and Algeria as well as France. Taiwan is English
   rather than 中文 because the one Chinese dictionary is Simplified.

   Adding a locale means an entry here and, if its language is new, a dictionary
   in `lib/i18n/dict/` registered in `lib/i18n/index.ts`. A locale with no
   dictionary falls back to English string by string, so a half-finished
   translation degrades to English rather than to blank space or a raw key. */

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

export type RegionKey =
  | "asia-pacific"
  | "europe"
  | "americas"
  | "middle-east"
  | "africa"
  | "central-asia";

/* Order is the order the panel lists them in: the two biggest markets first,
   then west to east. Each label is a dictionary key of its own. */
export const REGIONS: [key: RegionKey, label: string][] = [
  ["asia-pacific", "Asia Pacific"],
  ["europe", "Europe"],
  ["americas", "Americas"],
  ["middle-east", "Middle East"],
  ["africa", "Africa"],
  ["central-asia", "Central Asia & Caucasus"],
];

export const LOCALES: Locale[] = [
  // --- Asia Pacific ---------------------------------------------------------
  { id: "in-en", lang: "en", code: "IN", country: "India", language: "English", region: "asia-pacific" },
  { id: "in-hi", lang: "hi", code: "IN", country: "India", language: "हिन्दी", region: "asia-pacific" },
  { id: "cn-zh", lang: "zh-Hans", code: "CN", country: "China", language: "中文", region: "asia-pacific" },
  { id: "jp-ja", lang: "ja", code: "JP", country: "Japan", language: "日本語", region: "asia-pacific" },
  { id: "kr-ko", lang: "ko", code: "KR", country: "South Korea", language: "한국어", region: "asia-pacific" },
  { id: "tw-en", lang: "en", code: "TW", country: "Taiwan", language: "English", region: "asia-pacific" },
  { id: "vn-vi", lang: "vi", code: "VN", country: "Vietnam", language: "Tiếng Việt", region: "asia-pacific" },
  { id: "id-id", lang: "id", code: "ID", country: "Indonesia", language: "Bahasa Indonesia", region: "asia-pacific" },
  { id: "my-en", lang: "en", code: "MY", country: "Malaysia", language: "English", region: "asia-pacific" },
  { id: "sg-en", lang: "en", code: "SG", country: "Singapore", language: "English", region: "asia-pacific" },
  { id: "th-en", lang: "en", code: "TH", country: "Thailand", language: "English", region: "asia-pacific" },
  { id: "ph-en", lang: "en", code: "PH", country: "Philippines", language: "English", region: "asia-pacific" },
  { id: "pk-en", lang: "en", code: "PK", country: "Pakistan", language: "English", region: "asia-pacific" },
  { id: "bd-en", lang: "en", code: "BD", country: "Bangladesh", language: "English", region: "asia-pacific" },
  { id: "np-en", lang: "en", code: "NP", country: "Nepal", language: "English", region: "asia-pacific" },
  { id: "lk-en", lang: "en", code: "LK", country: "Sri Lanka", language: "English", region: "asia-pacific" },
  { id: "mm-en", lang: "en", code: "MM", country: "Myanmar", language: "English", region: "asia-pacific" },
  { id: "kh-en", lang: "en", code: "KH", country: "Cambodia", language: "English", region: "asia-pacific" },
  { id: "au-en", lang: "en", code: "AU", country: "Australia", language: "English", region: "asia-pacific" },
  { id: "nz-en", lang: "en", code: "NZ", country: "New Zealand", language: "English", region: "asia-pacific" },

  // --- Europe ---------------------------------------------------------------
  { id: "gb-en", lang: "en", code: "GB", country: "United Kingdom", language: "English", region: "europe" },
  { id: "ie-en", lang: "en", code: "IE", country: "Ireland", language: "English", region: "europe" },
  { id: "de-de", lang: "de", code: "DE", country: "Germany", language: "Deutsch", region: "europe" },
  { id: "fr-fr", lang: "fr", code: "FR", country: "France", language: "Français", region: "europe" },
  { id: "it-it", lang: "it", code: "IT", country: "Italy", language: "Italiano", region: "europe" },
  { id: "es-es", lang: "es", code: "ES", country: "Spain", language: "Español", region: "europe" },
  { id: "pt-en", lang: "en", code: "PT", country: "Portugal", language: "English", region: "europe" },
  { id: "nl-nl", lang: "nl", code: "NL", country: "Netherlands", language: "Nederlands", region: "europe" },
  { id: "be-nl", lang: "nl", code: "BE", country: "Belgium", language: "Nederlands", region: "europe" },
  { id: "ch-de", lang: "de", code: "CH", country: "Switzerland", language: "Deutsch", region: "europe" },
  { id: "at-de", lang: "de", code: "AT", country: "Austria", language: "Deutsch", region: "europe" },
  { id: "se-en", lang: "en", code: "SE", country: "Sweden", language: "English", region: "europe" },
  { id: "no-en", lang: "en", code: "NO", country: "Norway", language: "English", region: "europe" },
  { id: "dk-en", lang: "en", code: "DK", country: "Denmark", language: "English", region: "europe" },
  { id: "fi-en", lang: "en", code: "FI", country: "Finland", language: "English", region: "europe" },
  { id: "pl-en", lang: "en", code: "PL", country: "Poland", language: "English", region: "europe" },
  { id: "cz-en", lang: "en", code: "CZ", country: "Czech Republic", language: "English", region: "europe" },
  { id: "hu-en", lang: "en", code: "HU", country: "Hungary", language: "English", region: "europe" },
  { id: "ro-en", lang: "en", code: "RO", country: "Romania", language: "English", region: "europe" },
  { id: "gr-en", lang: "en", code: "GR", country: "Greece", language: "English", region: "europe" },
  { id: "ru-en", lang: "en", code: "RU", country: "Russia", language: "English", region: "europe" },
  { id: "ua-en", lang: "en", code: "UA", country: "Ukraine", language: "English", region: "europe" },
  { id: "tr-en", lang: "en", code: "TR", country: "Turkey", language: "English", region: "europe" },

  // --- Americas -------------------------------------------------------------
  { id: "us-en", lang: "en", code: "US", country: "United States", language: "English", region: "americas" },
  { id: "ca-en", lang: "en", code: "CA", country: "Canada", language: "English", region: "americas" },
  { id: "mx-es", lang: "es", code: "MX", country: "Mexico", language: "Español", region: "americas" },
  { id: "br-en", lang: "en", code: "BR", country: "Brazil", language: "English", region: "americas" },
  { id: "ar-es", lang: "es", code: "AR", country: "Argentina", language: "Español", region: "americas" },
  { id: "cl-es", lang: "es", code: "CL", country: "Chile", language: "Español", region: "americas" },
  { id: "co-es", lang: "es", code: "CO", country: "Colombia", language: "Español", region: "americas" },
  { id: "pe-es", lang: "es", code: "PE", country: "Peru", language: "Español", region: "americas" },

  // --- Middle East ----------------------------------------------------------
  { id: "ae-en", lang: "en", code: "AE", country: "United Arab Emirates", language: "English", region: "middle-east" },
  { id: "sa-en", lang: "en", code: "SA", country: "Saudi Arabia", language: "English", region: "middle-east" },
  { id: "qa-en", lang: "en", code: "QA", country: "Qatar", language: "English", region: "middle-east" },
  { id: "kw-en", lang: "en", code: "KW", country: "Kuwait", language: "English", region: "middle-east" },
  { id: "om-en", lang: "en", code: "OM", country: "Oman", language: "English", region: "middle-east" },
  { id: "bh-en", lang: "en", code: "BH", country: "Bahrain", language: "English", region: "middle-east" },
  { id: "il-en", lang: "en", code: "IL", country: "Israel", language: "English", region: "middle-east" },

  // --- Africa ---------------------------------------------------------------
  { id: "eg-en", lang: "en", code: "EG", country: "Egypt", language: "English", region: "africa" },
  { id: "ma-fr", lang: "fr", code: "MA", country: "Morocco", language: "Français", region: "africa" },
  { id: "dz-fr", lang: "fr", code: "DZ", country: "Algeria", language: "Français", region: "africa" },
  { id: "ng-en", lang: "en", code: "NG", country: "Nigeria", language: "English", region: "africa" },
  { id: "gh-en", lang: "en", code: "GH", country: "Ghana", language: "English", region: "africa" },
  { id: "ke-en", lang: "en", code: "KE", country: "Kenya", language: "English", region: "africa" },
  { id: "tz-en", lang: "en", code: "TZ", country: "Tanzania", language: "English", region: "africa" },
  { id: "et-en", lang: "en", code: "ET", country: "Ethiopia", language: "English", region: "africa" },
  { id: "za-en", lang: "en", code: "ZA", country: "South Africa", language: "English", region: "africa" },

  // --- Central Asia & Caucasus ----------------------------------------------
  { id: "kz-en", lang: "en", code: "KZ", country: "Kazakhstan", language: "English", region: "central-asia" },
  { id: "uz-en", lang: "en", code: "UZ", country: "Uzbekistan", language: "English", region: "central-asia" },
  { id: "az-en", lang: "en", code: "AZ", country: "Azerbaijan", language: "English", region: "central-asia" },
  { id: "ge-en", lang: "en", code: "GE", country: "Georgia", language: "English", region: "central-asia" },
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

/* Every locale for a country code, in register order. Detection resolves to a
   code, and a code is not unique — India has two — so the first entry is the
   default for that country and the rest are what a language preference can
   pick out of. */
export const localesFor = (code: string) =>
  LOCALES.filter((l) => l.code === code.toUpperCase());
