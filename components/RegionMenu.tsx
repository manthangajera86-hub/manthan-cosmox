"use client";

/* The globe capsule in the header, and the panel of countries it opens.

   It replaces a dead <button> that said "India" and did nothing. The panel is
   the nav dropdown's surface — same near-black, same radius, same entry — so it
   reads as another thing the header opens rather than as a modal.

   Opened by click, not hover, unlike the nav panels: this one commits to a
   choice, and a list of seventy countries that appears because the pointer
   crossed it is a nuisance. It closes on Escape, on a click outside, and on
   choosing a country.

   It anchors to the right edge because the utility capsule sits hard right, the
   mirror of `.navmenu--brand` dropping from the left under the logo.

   Two things the list earned when it went from twelve countries to seventy.
   It **filters**: seventy rows is past the point where scanning six region
   columns is faster than typing three letters, so the panel opens with the
   field focused and Enter takes the first match. And it says when the country
   was **detected** rather than chosen — the site switches itself on a first
   visit (see `LocaleProvider`), and a visitor who did not do that is owed an
   explanation of what did, next to the control that undoes it. */

import { useEffect, useMemo, useRef, useState } from "react";
import { LOCALES, REGIONS, localesIn, type Locale } from "@/lib/i18n/locales";
import { useLocale } from "./LocaleProvider";

/* Folded for searching: case away, and accents away with it, so "espanol"
   finds Español and "turkiye" would find Türkiye. NFD splits a letter from its
   mark and the mark is what gets dropped. */
const fold = (s: string) =>
  s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export default function RegionMenu({
  open,
  onToggle,
  onClose,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const { locale, t, setLocale, detected } = useLocale();
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  /* a click anywhere else puts it away — `pointerdown` rather than `click` so
     it closes on the press, before the thing underneath acts on it */
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) onClose();
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open, onClose]);

  /* Opening does two things and closing does a third.

     The country in force is put on screen: it can be sixty rows down, and a
     panel that opens on Asia Pacific when you are in Ghana has hidden the one
     row you came to check. The scroll is done by hand rather than with
     `scrollIntoView`, which would walk up and move the page behind the panel
     too.

     Then the caret goes in the field — but only on a pointer device. Focusing
     a text input on a phone raises the on-screen keyboard over the list it was
     meant to help you read, which is the opposite of a shortcut.

     Closing hands focus back to the button that opened it, or Escape would drop
     a keyboard user at the top of the page. The `wasOpen` guard is what keeps
     that from stealing focus on first mount, when the panel has never been
     open. */
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      const panel = wrap.current?.querySelector<HTMLElement>(".regionmenu");
      const current = panel?.querySelector<HTMLElement>(".regionmenu__opt.is-current");
      if (panel && current) {
        const p = panel.getBoundingClientRect();
        const c = current.getBoundingClientRect();
        panel.scrollTop += c.top - p.top - panel.clientHeight / 2 + c.height / 2;
      }
      if (window.matchMedia?.("(pointer: fine)").matches) {
        field.current?.focus({ preventScroll: true });
      }
      return;
    }
    setQuery("");
    if (wasOpen.current) button.current?.focus();
  }, [open]);

  /* A new query is a new list; whatever the panel was scrolled to belonged to
     the old one. */
  useEffect(() => {
    if (query) wrap.current?.querySelector(".regionmenu")?.scrollTo(0, 0);
  }, [query]);

  /* Matched against the English name, the translated name and the ISO code —
     a German visitor may well type "Spanien", and a logistics desk types "AE". */
  const matches = useMemo(() => {
    const q = fold(query.trim());
    if (!q) return null;
    return LOCALES.filter(
      (l) =>
        fold(l.country).includes(q) ||
        fold(t(l.country)).includes(q) ||
        fold(l.language).includes(q) ||
        l.code.toLowerCase().startsWith(q),
    );
  }, [query, t]);

  const hits = (region: (typeof REGIONS)[number][0]) =>
    matches ? matches.filter((l) => l.region === region) : localesIn(region);

  const choose = (id: string) => {
    setLocale(id);
    onClose();
  };

  const option = (l: Locale) => {
    const current = l.id === locale.id;
    return (
      <li key={l.id}>
        <button
          type="button"
          className={`regionmenu__opt${current ? " is-current" : ""}`}
          aria-current={current ? "true" : undefined}
          onClick={() => choose(l.id)}
        >
          <span className="regionmenu__code" aria-hidden="true">{l.code}</span>
          <span className="regionmenu__names">
            <span className="regionmenu__country">{t(l.country)}</span>
            {/* the language is written in itself, never translated — someone
                looking for their own language is scanning for the word they
                know */}
            <span className="regionmenu__lang" lang={l.lang}>{l.language}</span>
          </span>
          {/* the badge stands in for the tick rather than sitting beside it —
              the row is already highlighted, and three markers of the same
              fact is two too many in a 240px column */}
          {current && (detected ? (
            <span className="regionmenu__auto">{t("Detected")}</span>
          ) : (
            <svg className="regionmenu__tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 13 4 4L19 7" />
            </svg>
          ))}
        </button>
      </li>
    );
  };

  return (
    <div className={`region${open ? " is-open" : ""}`} ref={wrap}>
      <button
        className="cap-btn"
        type="button"
        ref={button}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls="regionmenu"
        aria-label={`${t("Change country and language")} — ${t(locale.country)}, ${locale.language}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
        </svg>
        <span>{t(locale.country)}</span>
      </button>

      <div className="navmenu regionmenu" id="regionmenu" hidden={!open}>
        <div className="navmenu__about">
          <p className="navmenu__kicker">{t("Region & language")}</p>
          <p className="navmenu__lede">
            {t(
              "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.",
            )}
          </p>
          {/* said plainly, beside the control that changes it: nobody should
              have to wonder why the site is in German */}
          {detected && (
            <p className="regionmenu__detected">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>
                {detected.via === "zone"
                  ? t("Set from your device's time zone. Change it here at any time.")
                  : t("Set from your browser's language. Change it here at any time.")}
              </span>
            </p>
          )}
        </div>

        <div className="regionmenu__body">
          <div className="regionmenu__search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.6-3.6" />
            </svg>
            <input
              ref={field}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                /* Enter is the whole point of the field: type three letters,
                   take the first match, panel shut */
                if (e.key === "Enter" && matches?.length) {
                  e.preventDefault();
                  choose(matches[0].id);
                }
              }}
              placeholder={t("Search {n} countries").replace("{n}", String(COUNTRY_COUNT))}
              aria-label={t("Search countries")}
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <div className="regionmenu__regions">
            {REGIONS.map(([key, label]) => {
              const list = hits(key);
              /* a region with nothing in it is not an empty column, it is gone
                 — six headings over one result is worse than no headings */
              if (!list.length) return null;
              return (
                <section key={key} className="regionmenu__region">
                  <h3 className="regionmenu__head">{t(label)}</h3>
                  <ul className="regionmenu__list">{list.map(option)}</ul>
                </section>
              );
            })}
            {matches?.length === 0 && (
              <p className="regionmenu__empty" role="status">
                {t("No country matches “{q}”. We export worldwide — write to us and we will route your enquiry.")
                  .replace("{q}", query.trim())}
              </p>
            )}
          </div>
        </div>

        {/* the honest note: the chrome is translated, the transcribed page copy
            is not — better said here than discovered halfway down a page */}
        <p className="regionmenu__note">
          {t("Navigation and product titles are translated. Detailed page copy remains in English.")}
        </p>
      </div>
    </div>
  );
}

export const LOCALE_COUNT = LOCALES.length;

/* Countries, not locales — India holds two entries and the placeholder counts
   places, not rows. */
export const COUNTRY_COUNT = new Set(LOCALES.map((l) => l.code)).size;
