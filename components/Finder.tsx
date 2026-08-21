"use client";

/* DuPont's solution finder, driven by the real range in lib/products.ts.
   Five facets, each one axis of the site: what a grade is used for
   (Applications), who buys it (Industries), the two names for where it comes
   from (Product group, Division), and the grade itself (Product name).
   Industry and application values here must match the `ind` and `app` keys on
   each product.

   Product group and Division are the same ten things — the unit, and what that
   unit makes — so they move together: picking either sets the other from the
   maps in lib/products.ts. Left independent they would be a trap, since every
   mismatched pair of the two is an empty result with nothing to explain it.
   Product name is the third face of that same filter, one level finer: a grade
   belongs to exactly one group, so picking a name sets the group and the
   division under it, and changing the group drops a name that no longer sits
   in it. That is what keeps a 112-row facet from producing an empty result.

   The product facet is flat and alphabetical rather than headed by group: the
   two facets above it are already that filter, and what this one is for is
   finding one named chemical.

   Routing: /finder?q=&industry=&application=&group=&division=&product= seeds
   the form, so anything can link into a pre-filtered result set. Unknown values
   are ignored rather than throwing, because they are compared against the
   option values instead of being turned into a selector; `product` wins over
   `group`, which wins over `division`, when a link carries more than one of the
   three and they disagree. */

import Link from "next/link";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
  APPLICATIONS,
  DIVISION_OF_GROUP,
  GRADES,
  GROUPS,
  GROUP_OF_DIVISION,
  INDUSTRIES,
  PRODUCTS,
  gradeHref,
  gradeKey,
  groupOfGrade,
} from "@/lib/products";
import { useT } from "./LocaleProvider";

const PAGE = 8;

/* The division number is data, not words, so it is not part of the label — it
   is prefixed at render time. That keeps the dictionary entry the name alone
   ("Flame retardants") instead of "02 · Flame retardants", which no translator
   should have to carry a number through. */
const DIVISIONS: [string, string][] = [
  ["", "All divisions"],
  ["01", "Lithium & metal additives"],
  ["02", "Flame retardants"],
  ["03", "Intermediates"],
  ["04", "Polymers & resins"],
  ["05", "Surfactants"],
  ["06", "Battery & electronic"],
  ["07", "Pigments"],
  ["08", "Nutraceutical & cosmetic"],
  ["09", "Water treatment"],
  ["10", "Functional materials"],
];

const known = (pairs: [string, string][], value: string | null) =>
  value && pairs.some(([v]) => v === value) ? value : "";

/* "Displaying 1 - 8 of 40 Results" puts its numbers in a different place in
   most other languages, so the whole sentence is one dictionary entry with
   `{slots}` in it, and the bold numbers are dropped into the slots after
   translation. Building it by concatenating "Displaying" + numbers + "of"
   would hard-code English word order into the markup. */
function fill(template: string, slots: Record<string, React.ReactNode>) {
  return template.split(/(\{\w+\})/).map((part, i) => {
    const slot = /^\{(\w+)\}$/.exec(part);
    return <Fragment key={i}>{slot ? slots[slot[1]] : part}</Fragment>;
  });
}

export default function Finder() {
  const t = useT();
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState("");
  const [application, setApplication] = useState("");
  const [group, setGroup] = useState("");
  const [division, setDivision] = useState("");
  const [product, setProduct] = useState("");
  const [shown, setShown] = useState(PAGE);
  /* The product facet is the only one that starts closed, at every width: it is
     the whole range, and 112 rows open by default would bury the four facets
     above it. The initial state is what prerenders, so it is closed in the
     static HTML too — the mount effect below only opens it when a link has
     already picked a grade. */
  const [openFacet, setOpenFacet] = useState({
    industry: true,
    application: true,
    group: true,
    division: true,
    product: false,
  });
  const input = useRef<HTMLInputElement>(null);

  /* Seeded after mount rather than from useSearchParams, which would opt the
     whole page out of prerendering — the facets and the first page of results
     belong in the static HTML. */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
    const seededIndustry = known(INDUSTRIES, params.get("industry"));
    const seededApplication = known(APPLICATIONS, params.get("application"));
    setIndustry(seededIndustry);
    setApplication(seededApplication);

    /* One filter in three skins, so one value seeds all of them — a named
       grade carries its own group, which is why it is read first. */
    const seededProduct = known(GRADES, params.get("product"));
    const seeded =
      groupOfGrade(seededProduct) ||
      known(GROUPS, params.get("group")) ||
      GROUP_OF_DIVISION[known(DIVISIONS, params.get("division"))] ||
      "";
    setProduct(seededProduct);
    setGroup(seeded);
    setDivision(seeded ? DIVISION_OF_GROUP[seeded] ?? "" : "");

    /* Four facets of ten options is a 1,800px column. Beside the results, on
       the sticky sidebar, that scrolls inside itself and costs nothing; below
       900px the sidebar stacks *above* the results instead, and four open
       facets put two screens of radio buttons between the search box and the
       first hit. So on a narrow viewport they start closed — except any facet
       the query string has already set, which has to show what it did.

       It runs here rather than in the initial state because the prerendered
       HTML has the first four open and the two must match; landing it in the
       same effect as the seeding puts it well before the reader has scrolled
       past the banner. The product facet is the mirror image: closed in that
       HTML at every width, so it only ever opens here, and for the same
       reason — a link that picked a grade has to show which one. */
    if (window.matchMedia("(max-width: 900px)").matches) {
      setOpenFacet({
        industry: !!seededIndustry,
        application: !!seededApplication,
        group: !!seeded,
        division: !!seeded,
        product: !!seededProduct,
      });
    } else if (seededProduct) {
      setOpenFacet((s) => ({ ...s, product: true }));
    }
  }, []);

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (industry && !p.ind.includes(industry)) return false;
      if (application && !p.app.includes(application)) return false;
      if (group && p.cs !== group) return false;
      if (division && p.d !== division) return false;
      if (product && gradeKey(p) !== product) return false;
      if (q && !(p.n + " " + p.c + " " + p.t).toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, industry, application, group, division, product]);

  const page = hits.slice(0, shown);

  const reset = <T,>(setter: (v: T) => void) => (value: T) => {
    setter(value);
    setShown(PAGE);
  };

  /* The three faces of the same filter. Every radio sets the other two, so the
     set is never in a state the range cannot satisfy. Group and division are
     the same ten things, and a named grade sits inside exactly one of them —
     which is why moving the coarse pair drops a name that has been left
     behind by it, "All products" included. */
  const pickGroup = (value: string) => {
    setGroup(value);
    setDivision(value ? DIVISION_OF_GROUP[value] ?? "" : "");
    setProduct("");
    setShown(PAGE);
  };

  const pickDivision = (value: string) => {
    setDivision(value);
    setGroup(value ? GROUP_OF_DIVISION[value] ?? "" : "");
    setProduct("");
    setShown(PAGE);
  };

  const pickProduct = (value: string) => {
    setProduct(value);
    const owner = groupOfGrade(value);
    setGroup(owner);
    setDivision(owner ? DIVISION_OF_GROUP[owner] ?? "" : "");
    setShown(PAGE);
  };

  const clearFilters = () => {
    setQuery("");
    setIndustry("");
    setApplication("");
    setGroup("");
    setDivision("");
    setProduct("");
    setShown(PAGE);
  };

  return (
    <div className="finder">
      <form className="facets" id="facets" onSubmit={(e) => e.preventDefault()}>
        <div className="facets__head">
          <h3>{t("Filter by")}</h3>
          <button className="facets__clear" type="button" onClick={clearFilters}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="11" />
              <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {t("Clear filters")}
          </button>
        </div>

        <div className="facet" data-open={String(openFacet.industry)}>
          <button
            className="facet__btn"
            type="button"
            onClick={() => setOpenFacet((s) => ({ ...s, industry: !s.industry }))}
          >
            {t("Industries")} <span aria-hidden="true">{openFacet.industry ? "−" : "+"}</span>
          </button>
          <div className="facet__body">
            {INDUSTRIES.map(([value, label]) => (
              <label key={value || "all"}>
                <input
                  type="radio"
                  name="industry"
                  value={value}
                  checked={industry === value}
                  onChange={() => reset(setIndustry)(value)}
                />{" "}
                {t(label)}
              </label>
            ))}
          </div>
        </div>

        <div className="facet" data-open={String(openFacet.application)}>
          <button
            className="facet__btn"
            type="button"
            onClick={() => setOpenFacet((s) => ({ ...s, application: !s.application }))}
          >
            {t("Applications")} <span aria-hidden="true">{openFacet.application ? "−" : "+"}</span>
          </button>
          <div className="facet__body">
            {APPLICATIONS.map(([value, label]) => (
              <label key={value || "all"}>
                <input
                  type="radio"
                  name="application"
                  value={value}
                  checked={application === value}
                  onChange={() => reset(setApplication)(value)}
                />{" "}
                {t(label)}
              </label>
            ))}
          </div>
        </div>

        <div className="facet" data-open={String(openFacet.group)}>
          <button
            className="facet__btn"
            type="button"
            onClick={() => setOpenFacet((s) => ({ ...s, group: !s.group }))}
          >
            {t("Product group")} <span aria-hidden="true">{openFacet.group ? "−" : "+"}</span>
          </button>
          <div className="facet__body">
            {GROUPS.map(([value, label]) => (
              <label key={value || "all"}>
                <input
                  type="radio"
                  name="group"
                  value={value}
                  checked={group === value}
                  onChange={() => pickGroup(value)}
                />{" "}
                {t(label)}
              </label>
            ))}
          </div>
        </div>

        <div className="facet" data-open={String(openFacet.division)}>
          <button
            className="facet__btn"
            type="button"
            onClick={() => setOpenFacet((s) => ({ ...s, division: !s.division }))}
          >
            {t("Division")} <span aria-hidden="true">{openFacet.division ? "−" : "+"}</span>
          </button>
          <div className="facet__body">
            {DIVISIONS.map(([value, label]) => (
              <label key={value || "all"}>
                <input
                  type="radio"
                  name="division"
                  value={value}
                  checked={division === value}
                  onChange={() => pickDivision(value)}
                />{" "}
                {value && `${value} · `}{t(label)}
              </label>
            ))}
          </div>
        </div>

        {/* The range by name, A to Z. It is the only facet whose options run
            past ten, so it scrolls inside itself (`.facet--wall`). Nothing here
            goes through `t` — a chemical name is the same in every market, the
            same rule the products dropdown follows. */}
        <div className="facet facet--wall" data-open={String(openFacet.product)}>
          <button
            className="facet__btn"
            type="button"
            onClick={() => setOpenFacet((s) => ({ ...s, product: !s.product }))}
          >
            {t("Product name")} <span aria-hidden="true">{openFacet.product ? "−" : "+"}</span>
          </button>
          <div className="facet__body">
            <label>
              <input
                type="radio"
                name="product"
                value=""
                checked={product === ""}
                onChange={() => pickProduct("")}
              />{" "}
              {t("All product names")}
            </label>
            {GRADES.map(([value, name]) => (
              <label key={value}>
                <input
                  type="radio"
                  name="product"
                  value={value}
                  checked={product === value}
                  onChange={() => pickProduct(value)}
                />{" "}
                {name}
              </label>
            ))}
          </div>
        </div>
      </form>

      <div>
        <div className={`finder__search${query ? " has-value" : ""}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={input}
            type="search"
            id="finder-input"
            placeholder={t("Search…")}
            aria-label={t("Search products")}
            value={query}
            onChange={(e) => reset(setQuery)(e.target.value)}
          />
          <button
            className="finder__clear"
            type="button"
            aria-label={t("Clear search")}
            onClick={() => {
              reset(setQuery)("");
              input.current?.focus();
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <p className="finder__count">
          {hits.length
            ? fill(t("Displaying {range} of {total} Results"), {
                range: <b>1 - {page.length}</b>,
                total: <b>{hits.length}</b>,
              })
            : fill(t("Displaying {total} Results"), { total: <b>0</b> })}
        </p>

        <ul className="results">
          {page.length ? (
            /* Keyed on the group and the slug together, never on the name
               alone: one chemistry can sit in two divisions — Polybenzimidazole
               is in both 04 and 10 — and two rows under one key is a duplicate
               key warning and a dropped row. */
            page.map((p) => (
              <li key={`${p.cs}/${p.s}`}>
                <h4>
                  <Link href={gradeHref(p)}>
                    {p.n} | Cosmox™ {p.c}
                  </Link>
                </h4>
                <p>{p.t}</p>
                <span className="tag">{t("Division")} {p.d}</span>
              </li>
            ))
          ) : (
            <li className="results__empty">
              {fill(t("No products match those filters. Clear a filter, or {ask}."), {
                ask: <Link href="/contact">{t("ask us about a custom grade")}</Link>,
              })}
            </li>
          )}
        </ul>

        {hits.length > page.length && (
          <div className="finder__more">
            <button className="btn btn--outline" type="button" onClick={() => setShown((s) => s + PAGE)}>
              {t("Show more results")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
