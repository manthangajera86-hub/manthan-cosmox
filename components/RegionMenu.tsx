"use client";

/* The globe capsule in the header, and the panel of countries it opens.

   It replaces a dead <button> that said "India" and did nothing. The panel is
   the nav dropdown's surface — same near-black, same radius, same entry — so it
   reads as another thing the header opens rather than as a modal.

   Opened by click, not hover, unlike the nav panels: this one commits to a
   choice, and a list of twelve countries that appears because the pointer
   crossed it is a nuisance. It closes on Escape, on a click outside, and on
   choosing a country.

   It anchors to the right edge because the utility capsule sits hard right, the
   mirror of `.navmenu--brand` dropping from the left under the logo. */

import { useEffect, useRef } from "react";
import { LOCALES, REGIONS, localesIn } from "@/lib/i18n/locales";
import { useLocale } from "./LocaleProvider";

export default function RegionMenu({
  open,
  onToggle,
  onClose,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const { locale, t, setLocale } = useLocale();
  const wrap = useRef<HTMLDivElement>(null);

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

  return (
    <div className={`region${open ? " is-open" : ""}`} ref={wrap}>
      <button
        className="cap-btn"
        type="button"
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
        </div>

        <div className="regionmenu__regions">
          {REGIONS.map(([key, label]) => (
            <section key={key} className="regionmenu__region">
              <h3 className="regionmenu__head">{t(label)}</h3>
              <ul className="regionmenu__list">
                {localesIn(key).map((l) => {
                  const current = l.id === locale.id;
                  return (
                    <li key={l.id}>
                      <button
                        type="button"
                        className={`regionmenu__opt${current ? " is-current" : ""}`}
                        aria-current={current ? "true" : undefined}
                        onClick={() => {
                          setLocale(l.id);
                          onClose();
                        }}
                      >
                        <span className="regionmenu__code" aria-hidden="true">{l.code}</span>
                        <span className="regionmenu__names">
                          <span className="regionmenu__country">{t(l.country)}</span>
                          {/* the language is written in itself, never
                              translated — someone looking for their own
                              language is scanning for the word they know */}
                          <span className="regionmenu__lang" lang={l.lang}>{l.language}</span>
                        </span>
                        {current && (
                          <svg className="regionmenu__tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m5 13 4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
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
