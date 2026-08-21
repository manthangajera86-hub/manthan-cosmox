/* Working out which of the seventy countries a visitor is in, without asking
   them and without asking anyone else.

   Three ways to do this and only one of them fits a site that prerenders to
   static HTML and has no backend:

   - `navigator.geolocation` is the precise one, and it puts an operating-system
     permission dialog on a marketing site's first paint. Most people decline,
     and the ones who do not have been interrupted for a country name.
   - An IP lookup means a network round-trip to a third party on every first
     visit, and every visitor's IP handed to a host that is not ours. It also
     fails closed the day the free tier rate-limits.
   - The browser already knows. `Intl.DateTimeFormat().resolvedOptions()
     .timeZone` is the IANA zone the device is set to — `Europe/Warsaw`,
     `America/Sao_Paulo` — which names a country directly. No request, no
     prompt, no third party, and it works offline and behind a VPN that has not
     also moved the clock.

   So: the zone names the country, and `navigator.languages` breaks the tie when
   a country has more than one locale (India has two) or when the zone is one we
   do not carry. A zone we have never heard of is not a guess — it returns null
   and the site stays in English.

   The table below is written country-first because that is how it is checked
   against `locales.ts`; it is inverted into the zone lookup once, at import. */

import { DEFAULT_LOCALE, LOCALES, localesFor } from "./locales";

/* IANA zones per ISO 3166-1 alpha-2 code, for the seventy countries in the
   register. Legacy aliases are listed beside their canonical names because a
   browser may still report either — `Asia/Calcutta`, `Europe/Kiev`,
   `Asia/Saigon` and `Asia/Rangoon` are all still in the wild. Countries whose
   zone is unambiguous get one line; the wide ones (the US, Russia, Brazil,
   Australia) get all of theirs, since a Perth visitor is no less in Australia
   than a Sydney one. */
const ZONES: Record<string, string[]> = {
  // --- Asia Pacific ---------------------------------------------------------
  IN: ["Asia/Kolkata", "Asia/Calcutta"],
  CN: ["Asia/Shanghai", "Asia/Urumqi", "Asia/Chongqing", "Asia/Harbin", "Asia/Kashgar", "Asia/Chungking", "Asia/Macau", "Asia/Hong_Kong"],
  JP: ["Asia/Tokyo"],
  KR: ["Asia/Seoul"],
  TW: ["Asia/Taipei"],
  VN: ["Asia/Ho_Chi_Minh", "Asia/Saigon"],
  ID: ["Asia/Jakarta", "Asia/Pontianak", "Asia/Makassar", "Asia/Jayapura"],
  MY: ["Asia/Kuala_Lumpur", "Asia/Kuching"],
  SG: ["Asia/Singapore"],
  TH: ["Asia/Bangkok"],
  PH: ["Asia/Manila"],
  PK: ["Asia/Karachi"],
  BD: ["Asia/Dhaka"],
  NP: ["Asia/Kathmandu", "Asia/Katmandu"],
  LK: ["Asia/Colombo"],
  MM: ["Asia/Yangon", "Asia/Rangoon"],
  KH: ["Asia/Phnom_Penh"],
  AU: [
    "Australia/Sydney", "Australia/Melbourne", "Australia/Brisbane", "Australia/Perth",
    "Australia/Adelaide", "Australia/Darwin", "Australia/Hobart", "Australia/Canberra",
    "Australia/Broken_Hill", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Eucla",
    "Australia/Currie", "Antarctica/Macquarie",
  ],
  NZ: ["Pacific/Auckland", "Pacific/Chatham"],

  // --- Europe ---------------------------------------------------------------
  GB: ["Europe/London"],
  IE: ["Europe/Dublin"],
  DE: ["Europe/Berlin", "Europe/Busingen"],
  FR: ["Europe/Paris"],
  IT: ["Europe/Rome"],
  ES: ["Europe/Madrid", "Africa/Ceuta", "Atlantic/Canary"],
  PT: ["Europe/Lisbon", "Atlantic/Madeira", "Atlantic/Azores"],
  NL: ["Europe/Amsterdam"],
  BE: ["Europe/Brussels"],
  CH: ["Europe/Zurich"],
  AT: ["Europe/Vienna"],
  SE: ["Europe/Stockholm"],
  NO: ["Europe/Oslo"],
  DK: ["Europe/Copenhagen"],
  FI: ["Europe/Helsinki", "Europe/Mariehamn"],
  PL: ["Europe/Warsaw"],
  CZ: ["Europe/Prague"],
  HU: ["Europe/Budapest"],
  RO: ["Europe/Bucharest"],
  GR: ["Europe/Athens"],
  RU: [
    "Europe/Moscow", "Europe/Kaliningrad", "Europe/Samara", "Europe/Volgograd",
    "Europe/Saratov", "Europe/Astrakhan", "Europe/Ulyanovsk", "Europe/Kirov",
    "Asia/Yekaterinburg", "Asia/Omsk", "Asia/Novosibirsk", "Asia/Barnaul",
    "Asia/Tomsk", "Asia/Novokuznetsk", "Asia/Krasnoyarsk", "Asia/Irkutsk",
    "Asia/Chita", "Asia/Yakutsk", "Asia/Khandyga", "Asia/Vladivostok",
    "Asia/Ust-Nera", "Asia/Magadan", "Asia/Sakhalin", "Asia/Srednekolymsk",
    "Asia/Kamchatka", "Asia/Anadyr",
  ],
  UA: ["Europe/Kyiv", "Europe/Kiev", "Europe/Uzhgorod", "Europe/Zaporozhye", "Europe/Simferopol"],
  TR: ["Europe/Istanbul", "Asia/Istanbul"],

  // --- Americas -------------------------------------------------------------
  US: [
    "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
    "America/Phoenix", "America/Anchorage", "America/Adak", "America/Detroit",
    "America/Boise", "America/Juneau", "America/Sitka", "America/Nome",
    "America/Metlakatla", "America/Yakutat", "America/Menominee",
    "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo",
    "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay",
    "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Kentucky/Louisville",
    "America/Kentucky/Monticello", "America/North_Dakota/Beulah",
    "America/North_Dakota/Center", "America/North_Dakota/New_Salem",
    "America/Indianapolis", "America/Fort_Wayne", "America/Knox_IN",
    "America/Louisville", "America/Shiprock", "America/Atka", "Pacific/Johnston",
    "Pacific/Honolulu",
  ],
  CA: [
    "America/Toronto", "America/Vancouver", "America/Edmonton", "America/Winnipeg",
    "America/Halifax", "America/St_Johns", "America/Regina", "America/Montreal",
    "America/Moncton", "America/Whitehorse", "America/Dawson_Creek", "America/Dawson",
    "America/Fort_Nelson", "America/Inuvik", "America/Yellowknife", "America/Iqaluit",
    "America/Rankin_Inlet", "America/Resolute", "America/Cambridge_Bay",
    "America/Swift_Current", "America/Glace_Bay", "America/Goose_Bay",
    "America/Atikokan", "America/Coral_Harbour", "America/Nipigon",
    "America/Thunder_Bay", "America/Rainy_River", "America/Pangnirtung",
    "America/Creston",
  ],
  MX: [
    "America/Mexico_City", "America/Monterrey", "America/Tijuana", "America/Cancun",
    "America/Chihuahua", "America/Merida", "America/Hermosillo", "America/Mazatlan",
    "America/Matamoros", "America/Ojinaga", "America/Bahia_Banderas", "America/Ciudad_Juarez",
  ],
  BR: [
    "America/Sao_Paulo", "America/Bahia", "America/Fortaleza", "America/Recife",
    "America/Manaus", "America/Belem", "America/Cuiaba", "America/Campo_Grande",
    "America/Porto_Velho", "America/Boa_Vista", "America/Rio_Branco", "America/Eirunepe",
    "America/Maceio", "America/Araguaina", "America/Santarem", "America/Noronha",
    "America/Porto_Acre",
  ],
  AR: [
    "America/Argentina/Buenos_Aires", "America/Argentina/Cordoba", "America/Argentina/Mendoza",
    "America/Argentina/Salta", "America/Argentina/Tucuman", "America/Argentina/Jujuy",
    "America/Argentina/Catamarca", "America/Argentina/La_Rioja", "America/Argentina/San_Juan",
    "America/Argentina/San_Luis", "America/Argentina/Rio_Gallegos", "America/Argentina/Ushuaia",
    "America/Buenos_Aires", "America/Cordoba", "America/Mendoza",
    "America/Jujuy", "America/Catamarca", "America/Rosario",
  ],
  CL: ["America/Santiago", "America/Punta_Arenas", "Pacific/Easter"],
  CO: ["America/Bogota"],
  PE: ["America/Lima"],

  // --- Middle East ----------------------------------------------------------
  AE: ["Asia/Dubai"],
  SA: ["Asia/Riyadh"],
  QA: ["Asia/Qatar"],
  KW: ["Asia/Kuwait"],
  OM: ["Asia/Muscat"],
  BH: ["Asia/Bahrain"],
  IL: ["Asia/Jerusalem", "Asia/Tel_Aviv"],

  // --- Africa ---------------------------------------------------------------
  EG: ["Africa/Cairo"],
  MA: ["Africa/Casablanca", "Africa/El_Aaiun"],
  DZ: ["Africa/Algiers"],
  NG: ["Africa/Lagos"],
  GH: ["Africa/Accra"],
  KE: ["Africa/Nairobi"],
  TZ: ["Africa/Dar_es_Salaam"],
  ET: ["Africa/Addis_Ababa"],
  ZA: ["Africa/Johannesburg"],

  // --- Central Asia & Caucasus ----------------------------------------------
  KZ: ["Asia/Almaty", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Atyrau", "Asia/Oral", "Asia/Qostanay", "Asia/Qyzylorda"],
  UZ: ["Asia/Tashkent", "Asia/Samarkand"],
  AZ: ["Asia/Baku"],
  GE: ["Asia/Tbilisi"],
};

const ZONE_TO_CODE: Record<string, string> = {};
for (const [code, zones] of Object.entries(ZONES)) {
  for (const zone of zones) ZONE_TO_CODE[zone.toLowerCase()] = code;
}

/** How the guess was arrived at — the menu says which, rather than presenting a
    switched language as something the visitor did. */
export type DetectedVia = "zone" | "language";

export type Detected = { id: string; via: DetectedVia };

/* The browser's language list, primary subtags first ("en-GB" → "en"), with the
   region subtag kept beside it where there is one. Wrapped because Safari in
   some lockdown configurations throws on `navigator.languages`. */
function preferredLanguages(): { lang: string; region: string | null }[] {
  let tags: readonly string[] = [];
  try {
    tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  } catch {
    return [];
  }
  return tags.filter(Boolean).map((tag) => {
    const parts = tag.split("-");
    /* the region is the 2-letter part, which is not always parts[1] —
       "zh-Hans-CN" puts the script there */
    const region = parts.slice(1).find((p) => /^[A-Za-z]{2}$/.test(p)) ?? null;
    return { lang: parts[0].toLowerCase(), region: region ? region.toUpperCase() : null };
  });
}

/* Zone names are renamed over time and the two spellings both stay valid —
   `Europe/Kiev` became `Europe/Kyiv`, `Asia/Calcutta` became `Asia/Kolkata` —
   and which one a browser reports depends on its ICU vintage, not on the
   visitor. Both spellings are in the table above, and this runs the reported
   name through the engine's own canonicaliser as a second chance, which catches
   a rename the table has not been told about yet. Engines disagree on the
   *direction* they canonicalise in, which is exactly why both are tried. */
function canonicalZone(zone: string): string | null {
  try {
    return Intl.DateTimeFormat("en", { timeZone: zone }).resolvedOptions().timeZone;
  } catch {
    return null;
  }
}

/** The country the device's time zone names, or null if it is not one of ours. */
export function detectCountry(): string | null {
  let zone: string | undefined;
  try {
    zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    /* no Intl, or a locked-down browser that refuses to say — English it is */
    return null;
  }
  if (!zone) return null;

  const direct = ZONE_TO_CODE[zone.toLowerCase()];
  if (direct) return direct;

  const canonical = canonicalZone(zone);
  return (canonical && ZONE_TO_CODE[canonical.toLowerCase()]) || null;
}

/* Of a country's locales, the one whose language the visitor's browser asks
   for — India's two entries are the whole reason this exists — falling back to
   the first, which the register orders as that country's default. */
function pickForCountry(code: string, prefs: ReturnType<typeof preferredLanguages>) {
  const candidates = localesFor(code);
  if (!candidates.length) return null;
  if (candidates.length === 1) return candidates[0].id;
  for (const { lang } of prefs) {
    const hit = candidates.find((l) => l.lang.split("-")[0] === lang);
    if (hit) return hit.id;
  }
  return candidates[0].id;
}

/** The locale to open in, worked out from the device — or null to stay English.

    The time zone decides the country; the browser's languages only break ties
    within it. If the zone is unknown, a region subtag on a browser language
    ("de-AT") is the second chance and the bare language ("de") the third, since
    someone whose browser is set to German is better served by Germany than by
    the default. */
export function detectLocale(): Detected | null {
  const prefs = preferredLanguages();

  const code = detectCountry();
  if (code) {
    const id = pickForCountry(code, prefs);
    if (id) return { id, via: "zone" };
  }

  for (const { region } of prefs) {
    if (!region) continue;
    const id = pickForCountry(region, prefs);
    if (id) return { id, via: "language" };
  }

  for (const { lang } of prefs) {
    /* English is the default already, and matching it here would name an
       arbitrary one of the forty-odd English-speaking countries */
    if (lang === "en") return null;
    const hit = LOCALES.find((l) => l.lang.split("-")[0] === lang);
    if (hit) return { id: hit.id, via: "language" };
  }

  return null;
}

export { DEFAULT_LOCALE };
