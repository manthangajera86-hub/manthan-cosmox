"use client";

/* Two capsules floating over the hero: the utility group in row 1, the ten nav
   links in row 2. Transparent over a hero or banner, solid white once that has
   scrolled past. Every route opens with one or the other, so the bar is always
   floating; if a page is ever added without one, it needs the bar in normal
   flow instead or the content will start underneath it.

   There is no hamburger, by design — below 940px the links wrap inside their
   capsule, and the dropdowns switch off. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV, NAV_MENU } from "@/lib/nav";
import BrandMark from "./BrandMark";
import RegionMenu from "./RegionMenu";
import { useT } from "./LocaleProvider";

const SHUT_DELAY = 160;

/* The logo opens the same panel the Home tab does — it is the same link. It
   needs a key of its own all the same, or hovering it would light the Home tab
   up too and render both panels at once. */
const BRAND_KEY = "brand";

/* The country panel shares the one `open` slot with the nav panels, so only one
   thing is ever down at a time — and moving the pointer onto a nav link puts
   the country list away, which is what you would expect it to do. */
const REGION_KEY = "region";

export default function Header() {
  const pathname = usePathname();
  const t = useT();

  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [wide, setWide] = useState(false);
  const shutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* transparent over the hero, solid once it has scrolled past — and solid from
     the start if there is no banner to be transparent over, or no observer */
  useEffect(() => {
    const hero = document.querySelector(".hero, .page-hero");
    if (!hero || !("IntersectionObserver" in window)) {
      setSolid(true);
      return;
    }
    setSolid(false);
    const io = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: "-90px 0px 0px 0px" },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  /* the dropdowns are desktop-only — below 940px the nav wraps and they would
     cover the page */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 941px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => setOpen(null), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const show = (href: string) => {
    if (shutTimer.current) clearTimeout(shutTimer.current);
    setOpen(href);
  };
  const scheduleHide = () => {
    if (shutTimer.current) clearTimeout(shutTimer.current);
    shutTimer.current = setTimeout(() => setOpen(null), SHUT_DELAY);
  };

  /* the country panel is click-driven, so it cancels the hover timer outright
     rather than scheduling against it */
  const toggleRegion = useCallback(() => {
    if (shutTimer.current) clearTimeout(shutTimer.current);
    setOpen((o) => (o === REGION_KEY ? null : REGION_KEY));
  }, []);
  const closeRegion = useCallback(() => {
    setOpen((o) => (o === REGION_KEY ? null : o));
  }, []);

  /* Clicking the tab you are already on is not a navigation, so the router
     does not scroll — you would stay wherever you had read to. Every tab
     should open its page at the top, so send it there by hand. */
  const toTop = (href: string) => () => {
    if (href === pathname) window.scrollTo({ top: 0, behavior: "instant" });
  };

  const cls = ["hdr", solid && "is-solid"].filter(Boolean).join(" ");

  const brandMenu = NAV_MENU["/"];
  const brandOpen = open === BRAND_KEY;

  return (
    <header className={cls} id="hdr">
      <div className="hdr__top">
        <div
          className={brandMenu && wide ? `brand-item${brandOpen ? " is-open" : ""}` : "brand-item"}
          onMouseEnter={brandMenu && wide ? () => show(BRAND_KEY) : undefined}
          onMouseLeave={brandMenu && wide ? scheduleHide : undefined}
          onFocus={brandMenu && wide ? () => show(BRAND_KEY) : undefined}
          onBlur={
            brandMenu && wide
              ? (e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
                }
              : undefined
          }
        >
          <Link
            className="brand"
            href="/"
            onClick={toTop("/")}
            aria-expanded={brandMenu && wide ? brandOpen : undefined}
            aria-controls={brandMenu && wide ? "navmenu-brand" : undefined}
          >
            <BrandMark />
            <span className="brand__name">
              Cosmox<span>Chemicals</span>
            </span>
            {/* a logo is not normally a menu — the caret is what says it is */}
            {brandMenu && wide && (
              <svg className="brand__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}
          </Link>

          {brandMenu && wide && (
            <div className="navmenu navmenu--brand" id="navmenu-brand" hidden={!brandOpen}>
              <div className="navmenu__about">
                <p className="navmenu__kicker">Cosmox Chemicals</p>
                <p className="navmenu__lede">{t(brandMenu.about)}</p>
                <Link className="navmenu__go" href="/" onClick={toTop("/")}>
                  {t("Visit page")}<span aria-hidden="true">&#8594;</span>
                </Link>
              </div>
              <ul className="navmenu__links">
                {brandMenu.links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href}>{t(label)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="util cap">
          <Link
            className="cap-btn"
            href="/contact"
            onClick={toTop("/contact")}
            aria-label={t("Contact")}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16v12H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span>{t("Contact")}</span>
          </Link>
          {/* the magnifier says "search", the words say what it searches — the
              aria-label repeats the visible text because the span is hidden on
              a phone, which would otherwise leave the link with no name */}
          <Link
            className="cap-btn"
            href="/finder"
            onClick={toTop("/finder")}
            aria-label={t("Product Finder")}
            aria-current={pathname === "/finder" ? "page" : undefined}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span>{t("Product Finder")}</span>
          </Link>
          <RegionMenu open={open === REGION_KEY} onToggle={toggleRegion} onClose={closeRegion} />
        </div>
      </div>

      <nav className="hdr__nav" aria-label="Primary">
        <ul className="nav-list cap">
          {NAV.map((item) => {
            const menu = NAV_MENU[item.href];
            const isOpen = open === item.href;
            const id = "navmenu-" + item.href.replace(/\W/g, "") ;
            return (
              <li
                key={item.href}
                className={menu && wide ? `nav-item${isOpen ? " is-open" : ""}` : undefined}
                onMouseEnter={menu && wide ? () => show(item.href) : undefined}
                onMouseLeave={menu && wide ? scheduleHide : undefined}
                onFocus={menu && wide ? () => show(item.href) : undefined}
                onBlur={
                  menu && wide
                    ? (e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
                      }
                    : undefined
                }
              >
                <Link
                  className="cap-btn"
                  href={item.href}
                  onClick={toTop(item.href)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  aria-expanded={menu && wide ? isOpen : undefined}
                  aria-controls={menu && wide ? id : undefined}
                >
                  {t(item.label)}
                </Link>

                {menu && wide && (
                  <div className="navmenu" id={id} hidden={!isOpen}>
                    <div className="navmenu__about">
                      <p className="navmenu__kicker">{t(item.label)}</p>
                      <p className="navmenu__lede">{t(menu.about)}</p>
                      <Link className="navmenu__go" href={item.href} onClick={toTop(item.href)}>
                        {t("Visit page")}<span aria-hidden="true">&#8594;</span>
                      </Link>
                    </div>
                    <ul className="navmenu__links">
                      {menu.links.map(([href, label]) => (
                        <li key={href}>
                          <Link href={href}>{t(label)}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
