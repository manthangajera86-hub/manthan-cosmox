/* The frame every grade page shares. A grade is the smallest thing the site
   describes — the record in `lib/products.ts` is its name, its group, its
   division, the industries it is filtered under and one line of description,
   and that is all this page claims. No specification is invented: the numbers a
   buyer needs come on the TDS/SDS, which is what the CTA asks for.

   The picture is the product group's, since the photography is placeholder
   imagery and there is none of the grade itself. */

import Link from "next/link";
import { notFound } from "next/navigation";
import { findGrade, gradeHref, gradesIn, industryLabel } from "@/lib/products";
import { FAMILY } from "@/lib/topics";
import T from "./T";

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
        <div className="wrap feature feature--center">
          <p className="lede">{grade.t}</p>
          <div className={`figure figure--wide ${group.img}`} aria-hidden="true"></div>
        </div>
      </section>

      <section className="pad-sm bg-sand">
        <div className="wrap topic-body">
          <div>
            <h4><T>Product group</T></h4>
            <p className="grade-fact">
              <Link href={`/products/${group.slug}`}><T>{group.title}</T></Link>
            </p>
            <p className="grade-fact grade-fact--mute"><T>Division</T> {grade.d}</p>
          </div>
          <div>
            <h4><T>Filtered under</T></h4>
            <ul className="pills">
              {grade.ind.map((value) => (
                <li key={value}>
                  <Link href={`/finder?industry=${value}`}><T>{industryLabel(value)}</T></Link>
                </li>
              ))}
            </ul>
          </div>
          {siblings.length > 0 && (
            <div>
              <h4><T>Also in this group</T></h4>
              <ul className="list">
                {siblings.map((p) => (
                  <li key={p.s}>
                    <Link href={gradeHref(p)}>{p.n}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="pad-sm">
        <div className="wrap">
          <div className="cta">
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
