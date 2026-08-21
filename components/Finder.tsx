"use client";

/* DuPont's solution finder, driven by the real range in lib/products.ts.
   Industry values here must match the `ind` keys on each product.

   Routing: /finder?q=&industry=&division= seeds the form, so anything can link
   into a pre-filtered result set. Unknown values are ignored rather than
   throwing, because they are compared against the option values instead of
   being turned into a selector. */

import Link from "next/link";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { INDUSTRIES, PRODUCTS, gradeHref } from "@/lib/products";
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
  const [division, setDivision] = useState("");
  const [shown, setShown] = useState(PAGE);
  const [openFacet, setOpenFacet] = useState({ industry: true, division: true });
  const input = useRef<HTMLInputElement>(null);

  /* Seeded after mount rather than from useSearchParams, which would opt the
     whole page out of prerendering — the facets and the first page of results
     belong in the static HTML. */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
    setIndustry(known(INDUSTRIES, params.get("industry")));
    setDivision(known(DIVISIONS, params.get("division")));
  }, []);

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (industry && !p.ind.includes(industry)) return false;
      if (division && p.d !== division) return false;
      if (q && !(p.n + " " + p.c + " " + p.t).toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, industry, division]);

  const page = hits.slice(0, shown);

  const reset = <T,>(setter: (v: T) => void) => (value: T) => {
    setter(value);
    setShown(PAGE);
  };

  const clearFilters = () => {
    setQuery("");
    setIndustry("");
    setDivision("");
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
                  onChange={() => reset(setDivision)(value)}
                />{" "}
                {value && `${value} · `}{t(label)}
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
