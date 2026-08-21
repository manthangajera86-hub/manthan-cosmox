"use client";

/* The nav capsule, folded up for phones and small tablets.

   Below 940px the nine links used to wrap inside their capsule — three rows at
   phone widths, which made the header 199px tall and opaque, floating over the
   top quarter of every page for the whole of a scroll. Nine links is a section
   list, not a bar, so below that width it becomes one: a button in the utility
   capsule, and a panel that names every section with the glyph `NAV` already
   carries for it. Row 2 goes away entirely and `--header-h` drops to the one
   row the capsules actually occupy.

   It borrows `RegionMenu`'s manners, not the nav panels': click to open, not
   hover, because a phone has no hover; Escape and a click outside put it away;
   focus goes back to the button that opened it. It shares the header's one
   `open` slot, so the country panel and this one are never down together.

   The dropdowns stay off down here — `Header` gates them on `wide`, and this
   panel deliberately does not reproduce them. A topic list inside a section
   list inside a panel is most of the screen twice over; the section's own page
   is one tap away and carries the same list with room to read it. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAV } from "@/lib/nav";
import { useT } from "./LocaleProvider";

export default function MobileMenu({
  open,
  onToggle,
  onClose,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const t = useT();
  const pathname = usePathname();
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  /* a press anywhere else puts it away — `pointerdown` rather than `click`, so
     it closes on the press and not after whatever is underneath has acted */
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) onClose();
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open, onClose]);

  /* Closing hands focus back to the button, or Escape drops a keyboard user at
     the top of the document. `wasOpen` is what stops that firing on mount,
     when the panel has never been open. */
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (wasOpen.current) button.current?.focus();
  }, [open]);

  /* Tapping the section you are already on is not a navigation, so the router
     does not scroll and you would be left wherever you had read to — with the
     panel shut over the same place you started. Send it to the top by hand,
     the same way the bar's own links do. */
  const go = (href: string) => () => {
    if (href === pathname) window.scrollTo({ top: 0, behavior: "instant" });
    onClose();
  };

  return (
    <div className={`menu-item${open ? " is-open" : ""}`} ref={wrap}>
      <button
        className="cap-btn menu-btn"
        type="button"
        ref={button}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls="mobilemenu"
        aria-label={t("Sections")}
      >
        {/* two bars, not three: the third is decoration, and at 17px the
            middle one closes the gaps that make the glyph read as a menu */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 8h16M4 16h16" />
        </svg>
      </button>

      <div className="navmenu navmenu--menu" id="mobilemenu" hidden={!open}>
        <p className="navmenu__kicker">{t("Sections")}</p>
        <ul className="menumenu__list">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={go(item.href)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <span className="brandmenu__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon.map((d) => (
                      <path key={d} d={d} />
                    ))}
                  </svg>
                </span>
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>

        {/* both of these are in the utility capsule too, but as bare glyphs —
            the labels are hidden below 640px, so this is the only place on a
            phone where the two of them are named */}
        <div className="menumenu__foot">
          <Link className="menumenu__cta" href="/finder" onClick={go("/finder")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            {t("Product Finder")}
          </Link>
          <Link className="menumenu__cta menumenu__cta--gold" href="/contact" onClick={go("/contact")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            {t("Contact")}
          </Link>
        </div>
      </div>
    </div>
  );
}
