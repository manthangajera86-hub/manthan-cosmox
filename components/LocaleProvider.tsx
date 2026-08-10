"use client";

/* Holds the chosen country/language for the whole tree, and hands the active
   dictionary to every <T>.

   Why the translation is applied in the browser rather than on the server: the
   site's value is that all 117 routes prerender to static HTML, and the page
   copy *is* the product. Reading a locale cookie in a server component would
   make every route dynamic, and a `/[locale]/` segment would multiply 117
   routes by twelve. So English is what is built and what search engines and
   no-JS visitors get; a visitor who has picked another country has the chrome
   swapped after hydration. That means one frame of English on load for them —
   the accepted cost of keeping the build static.

   The first render is always English, on the server and in the browser alike:
   the stored preference is read in an effect, never during render, or the
   markup would not match what was prerendered. */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LOCALE, findLocale, type Locale } from "@/lib/i18n/locales";
import { loadDict, translate, type Dict } from "@/lib/i18n";

const STORAGE_KEY = "cosmox.locale";

type Ctx = {
  locale: Locale;
  t: (text: string) => string;
  setLocale: (id: string) => void;
};

const LocaleCtx = createContext<Ctx | null>(null);

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState(DEFAULT_LOCALE);
  const [dict, setDict] = useState<Dict>({});

  const apply = useCallback((next: string) => {
    const locale = findLocale(next);
    let live = true;
    loadDict(locale.id).then((d) => {
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
     markup is what hydrates */
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* Safari private mode throws on localStorage — English is a fine
         fallback, and the menu still works for the session */
    }
    if (!stored || stored === DEFAULT_LOCALE) return;
    return apply(stored);
  }, [apply]);

  const setLocale = useCallback(
    (next: string) => {
      const locale = findLocale(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, locale.id);
      } catch {
        /* not being able to remember it does not stop us honouring it now */
      }
      apply(locale.id);
    },
    [apply],
  );

  const value = useMemo<Ctx>(
    () => ({
      locale: findLocale(id),
      t: (text: string) => translate(dict, text),
      setLocale,
    }),
    [id, dict, setLocale],
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
    }
  );
}

export const useT = () => useLocale().t;
