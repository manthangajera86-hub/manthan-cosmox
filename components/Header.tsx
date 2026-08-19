"use client";

/* Two capsules floating over the hero: the utility group in row 1, the nine nav
   links in row 2. There is no Home tab — the brand capsule is the way home, and
   what it opens is the whole site: a full-width panel of every section with its
   glyph, beside the home page's own headings. Transparent over a hero or banner,
   solid white once that has scrolled past. Every route opens with one or the
   other, so the bar is always floating; if a page is ever added without one, it
   needs the bar in normal flow instead or the content will start underneath it.

   There is no hamburger, by design — the dropdowns switch off below 940px and
   the links wrap inside their capsule below 860px (they used to wrap at 940
   too, until the Home tab came out). The brand stays a plain link to `/` under
   940, so home is still one tap away with no panel involved. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV, NAV_MENU } from "@/lib/nav";
import BrandMark from "./BrandMark";
import RegionMenu from "./RegionMenu";
import { useT } from "./LocaleProvider";

const SHUT_DELAY = 160;

/* The logo is the only link to `/` in the header, and it opens the home panel,
   `NAV_MENU['/']`. That panel keys off "brand" rather than "/" because `NAV`
   no longer holds a `/` entry to key against. */
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

  /* the dropdowns are desktop-only — below 940px a panel is most of the screen
     and would cover the page it describes */
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
     should open its page at the top, so send it there by hand. The brand does
     the same, which is what takes you back up when you are already on `/`. */
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
            aria-current={pathname === "/" ? "page" : undefined}
            aria-expanded={brandMenu && wide ? brandOpen : undefined}
            aria-controls={brandMenu && wide ? "navmenu-brand" : undefined}
          >
            <BrandMark id="hdr" />
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

              {/* every section of the site, each with its glyph from `NAV`. The
                  glyphs live here rather than on the bar: nine of them in one
                  row is a row of pictograms, while here each has a tile of its
                  own and room to be read. They are decoration beside a word
                  that already names the page, so they stay `aria-hidden`. */}
              <div className="brandmenu__col">
                <p className="navmenu__kicker">{t("Sections")}</p>
                <ul className="brandmenu__sections">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={toTop(item.href)}>
                        <span className="brandmenu__icon" aria-hidden="true">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
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
              </div>

              <div className="brandmenu__col">
                <p className="navmenu__kicker">{t("On the home page")}</p>
                <ul className="navmenu__links navmenu__links--single">
                  {brandMenu.links.map(([href, label]) => (
                    <li key={href}>
                      <Link href={href}>{t(label)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
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
