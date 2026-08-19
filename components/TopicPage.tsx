/* The frame every topic page shares: the family's banner with the topic's own
   title, its picture beside its description, then whatever the page passes as
   children — the Products / Applications / Capabilities columns transcribed
   from the source copy — and the walk to the topics either side of it.

   A server component, like the copy pages: a topic page is text and pictures,
   and none of it needs the browser. `family` and `slug` are all it takes,
   because `lib/topics.ts` holds the rest. */

import Link from "next/link";
import { notFound } from "next/navigation";
import { findTopic } from "@/lib/topics";
import { gradeHref, gradesIn } from "@/lib/products";
import T from "./T";

export default function TopicPage({
  family,
  slug,
  children,
}: {
  family: string;
  slug: string;
  children: React.ReactNode;
}) {
  const found = findTopic(family, slug);
  if (!found) notFound();
  const { family: fam, topic, prev, next } = found;
  const grades = fam.key === "products" ? gradesIn(topic.slug) : [];

  return (
    <>
      <section className={`page-hero page-hero--topic ${fam.banner}`}>
        <div className="page-hero__media" aria-hidden="true"></div>
        <div className="page-hero__scrim" aria-hidden="true"></div>
        <div className="page-hero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/"><T>Home</T></Link>
            <span aria-hidden="true">/</span>
            <Link href={fam.href}><T>{fam.label}</T></Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page"><T>{topic.title}</T></span>
          </nav>
          <p className="page-hero__num">{topic.num}</p>
          <h1 className="page-hero__title page-hero__title--solo">
            <b><T>{topic.title}</T></b>
          </h1>
        </div>
      </section>

      {/* the topic's own picture, beside its description where the source copy
          gave it one and on its own where it did not */}
      <section className="pad-xs">
        {topic.blurb ? (
          <div className="wrap feature feature--center">
            <p className="lede"><T>{topic.blurb}</T></p>
            <div className={`figure figure--wide ${topic.img}`} aria-hidden="true"></div>
          </div>
        ) : (
          <div className="wrap">
            <div className={`figure figure--band ${topic.img}`} aria-hidden="true"></div>
          </div>
        )}
      </section>

      <section className="pad-sm bg-sand">
        <div className="wrap topic-body">{children}</div>
      </section>

      {/* a product group is the one family whose topics have something beneath
          them — the grades in `lib/products.ts`, each with a page of its own */}
      {grades.length > 0 && (
        <section className="pad-sm">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow"><T>The range</T></span>
              <h2><T>Grades in this group</T></h2>
            </div>
            <ul className="grade-list">
              {grades.map((grade) => (
                <li key={grade.s}>
                  <Link href={gradeHref(grade)}>
                    <span className="grade-list__name">{grade.n}</span>
                    <span className="grade-list__teaser">{grade.t}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="pad-sm">
        <div className="wrap">
          <nav className="topic-walk" aria-label={`More in ${fam.label}`}>
            <Link className="topic-walk__link" href={`${fam.href}/${prev.slug}`}>
              <span className="topic-walk__dir">
                <span aria-hidden="true">&#8592;</span> <T>Previous</T>
              </span>
              <span className="topic-walk__title"><T>{prev.title}</T></span>
            </Link>
            {/* "All applications" is one phrase in English and two words in a
                different order elsewhere, so the family goes in as a slot
                rather than being concatenated onto a translated "All" */}
            <Link className="topic-walk__all" href={fam.href}>
              <T>{`All ${fam.label.toLowerCase()}`}</T>
            </Link>
            <Link className="topic-walk__link topic-walk__link--next" href={`${fam.href}/${next.slug}`}>
              <span className="topic-walk__dir">
                <T>Next</T> <span aria-hidden="true">&#8594;</span>
              </span>
              <span className="topic-walk__title"><T>{next.title}</T></span>
            </Link>
          </nav>
        </div>
      </section>

      <section className="pad-sm">
        <div className="wrap">
          {/* the one piece of wording on a topic page that is not transcribed
              from the source copy — the same register as the CTAs the index
              pages already carry, and deliberately the same on every topic */}
          <div className="cta">
            <div>
              <h2><T>Talk to our technical team</T></h2>
              <p><T>Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.</T></p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--gold" href="/contact"><T>Start a conversation</T></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
