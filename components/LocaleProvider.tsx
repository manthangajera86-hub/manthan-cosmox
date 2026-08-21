"use client";

/* Holds the chosen country/language for the whole tree, and hands the active
   dictionary to every <T>.

   Why the translation is applied in the browser rather than on the server: the
   site's value is that all 188 routes prerender to static HTML, and the page
   copy *is* the product. Reading a locale cookie in a server component would
   make every route dynamic, and a `/[locale]/` segment would multiply those
   routes by seventy. So English is what is built and what search engines and
   no-JS visitors get; a visitor who has picked another country has the chrome
   swapped after hydration. That means one frame of English on load for them —
   the accepted cost of keeping the build static.

   The first render is always English, on the server and in the browser alike:
   the stored preference is read in an effect, never during render, or the
   markup would not match what was prerendered.

   A visitor with nothing stored gets their country worked out from the device
   instead — see `lib/i18n/detect.ts`, which reads the time zone and asks
   nobody. That guess is applied but deliberately *not* written to storage:
   `localStorage` here means "this visitor chose this", so a stored value always
   wins over detection, and a guess stays a guess that re-runs next visit if
   they have moved. `detected` is passed down so the menu can say the country
   was worked out rather than presenting a switched language as something the
   visitor did. */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LOCALE, findLocale, type Locale } from "@/lib/i18n/locales";
import { detectLocale, type Detected } from "@/lib/i18n/detect";
import { loadDict, translate, type Dict } from "@/lib/i18n";

const STORAGE_KEY = "cosmox.locale";

type Ctx = {
  locale: Locale;
  t: (text: string) => string;
  setLocale: (id: string) => void;
  /** set while the country in force was worked out from the device rather than
      chosen — cleared the moment the visitor picks one themselves */
  detected: Detected | null;
};

const LocaleCtx = createContext<Ctx | null>(null);

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState(DEFAULT_LOCALE);
  const [dict, setDict] = useState<Dict>({});
  const [detected, setDetected] = useState<Detected | null>(null);

  const apply = useCallback((next: string) => {
    const locale = findLocale(next);
    let live = true;
    /* by language, not by id — ten countries share a dictionary with another */
    loadDict(locale.lang).then((d) => {
      if (!live) return;
      setDict(d);
      setId(locale.id);
      document.documentElement.lang = locale.lang;
    });
    return () => {
      live = false;
    };
  }, []);

  /* the stored preference, applied after mount so the prerendered English
     markup is what hydrates — and, for a first-time visitor, the country the
     device gives away instead */
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* Safari private mode throws on localStorage — English is a fine
         fallback, and the menu still works for the session */
    }
    if (stored) {
      /* a choice already made outranks anything we could work out */
      if (stored === DEFAULT_LOCALE) return;
      return apply(stored);
    }

    const guess = detectLocale();
    if (!guess) return;
    setDetected(guess);
    /* the guess is India English often enough that this is the common path,
       and there is nothing to swap when it is */
    if (guess.id === DEFAULT_LOCALE) return;
    return apply(guess.id);
  }, [apply]);

  const setLocale = useCallback(
    (next: string) => {
      const locale = findLocale(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, locale.id);
      } catch {
        /* not being able to remember it does not stop us honouring it now */
      }
      setDetected(null);
      apply(locale.id);
    },
    [apply],
  );

  const value = useMemo<Ctx>(
    () => ({
      locale: findLocale(id),
      t: (text: string) => translate(dict, text),
      setLocale,
      detected,
    }),
    [id, dict, setLocale, detected],
  );

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

/* Every consumer is inside the provider — it wraps the whole body — but the
   fallback keeps a component usable in isolation, and keeps `t` total. */
export function useLocale(): Ctx {
  return (
    useContext(LocaleCtx) ?? {
      locale: findLocale(DEFAULT_LOCALE),
      t: (text: string) => text,
      setLocale: () => {},
      detected: null,
    }
  );
}

export const useT = () => useLocale().t;
