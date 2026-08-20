/* The frame every grade page shares. A grade is the smallest thing the site
   describes — the record in `lib/products.ts` is its name, its group, its
   division, the industries it is filtered under and one line of description,
   and that is all this page claims. No specification is invented: the numbers a
   buyer needs come on the TDS/SDS, which is what the CTA asks for.

   That is a thin record for a whole page, and the page used to look it: a line
   of copy beside a picture, then three short cards adrift in a band sized for
   ten. What it holds is arranged now rather than listed — the record's own
   facts run along the foot of the opening panel where a reader is already
   looking, the industries are the filters they actually are, and the rest of
   the group is the full-width list it is on the group's own page.

   The picture is the product group's, since the photography is placeholder
   imagery and there is none of the grade itself. */

import Link from "next/link";
import { notFound } from "next/navigation";
import { findGrade, gradeHref, gradesIn, industryLabel } from "@/lib/products";
import { FAMILY } from "@/lib/topics";
import T from "./T";

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function GradePage({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) {
  const grade = findGrade(category, slug);
  const group = FAMILY.products.topics.find((t) => t.slug === category);
  if (!grade || !group) notFound();

  const siblings = gradesIn(category).filter((p) => p.s !== grade.s);

  return (
    <>
      <section className={`page-hero page-hero--topic ${FAMILY.products.banner}`}>
        <div className="page-hero__media" aria-hidden="true"></div>
        <div className="page-hero__scrim" aria-hidden="true"></div>
        <div className="page-hero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/"><T>Home</T></Link>
            <span aria-hidden="true">/</span>
            <Link href="/products"><T>Products</T></Link>
            <span aria-hidden="true">/</span>
            <Link href={`/products/${group.slug}`}><T>{group.title}</T></Link>
            <span aria-hidden="true">/</span>
            {/* the grade's own name is never translated — it is what a buyer
                searches for, and it is the same word in every market */}
            <span aria-current="page">{grade.n}</span>
          </nav>
          <p className="page-hero__num"><T>Division</T> {grade.d}</p>
          <h1 className="page-hero__title page-hero__title--solo">
            <b>{grade.n}</b>
          </h1>
        </div>
      </section>

      <section className="pad-xs">
        <div className="wrap">
          <div className="pintro pintro--statement rise">
            <div className="pintro__copy">
              <span className="eyebrow"><T>Products</T></span>
              <p className="pintro__lede">{grade.t}</p>
              {/* Everything the record holds, on the hairline along the foot of
                  the column — the place a datasheet puts it, and the reason
                  this page no longer needs a band of its own for two pills.
                  Each industry is the finder with that facet already chosen. */}
              <dl className="pintro__meta">
                <div className="pintro__fact">
                  <dt><T>Product group</T></dt>
                  <dd><Link href={`/products/${group.slug}`}><T>{group.title}</T></Link></dd>
                </div>
                <div className="pintro__fact">
                  <dt><T>Division</T></dt>
                  <dd>{grade.d}</dd>
                </div>
                <div className="pintro__fact pintro__fact--wide">
                  <dt><T>Filtered under</T></dt>
                  <dd>
                    <ul className="pills">
                      {grade.ind.map((value) => (
                        <li key={value}>
                          <Link href={`/finder?industry=${value}`}><T>{industryLabel(value)}</T></Link>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
            <div className={`pintro__media ${group.img}`}>
              <span className="pintro__tag"><T>Division</T> {grade.d}</span>
            </div>
          </div>
        </div>
      </section>

      {/* the rest of the group, and the page's closing panel under it. The
          panel shares this band rather than taking a `pad-sm` section of its
          own — two of those in a row is a screen of nothing. */}
      <section className="pad-sm bg-sand">
        <div className="wrap">
          {siblings.length > 0 && (
            <>
              <div className="section-head rise">
                <span className="eyebrow"><T>The range</T></span>
                <h2><T>Also in this group</T></h2>
              </div>
              <ul className="grade-list rise">
                {siblings.map((p) => (
                  <li key={p.s}>
                    <Link href={gradeHref(p)}>
                      <span className="grade-list__name">{p.n}</span>
                      <span className="grade-list__teaser">{p.t}</span>
                      <span className="grade-list__go" aria-hidden="true"><Chevron /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className={`cta cta--night rise${siblings.length > 0 ? " cta--close" : ""}`}>
            <div>
              <h2><T>Request technical data</T></h2>
              <p><T>Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.</T></p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--gold" href="/contact"><T>Request TDS / SDS</T></Link>
              <Link className="btn btn--outline" href="/finder"><T>Back to the finder</T></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
