/* The frame every topic page shares: the family's banner with the topic's own
   title, the panel its description opens on, then whatever the page passes as
   children — the Products / Applications / Capabilities columns transcribed
   from the source copy — the grades under it where it has any, and the walk to
   the topics either side of it.

   A server component, like the copy pages: a topic page is text and pictures,
   and none of it needs the browser. `family` and `slug` are all it takes,
   because `lib/topics.ts` holds the rest. */

import Link from "next/link";
import { notFound } from "next/navigation";
import { findTopic } from "@/lib/topics";
import { gradeHref, gradesIn } from "@/lib/products";
import T from "./T";

/* the chevron a grade row ends on. Written out here rather than imported so a
   server component stays one file's worth of markup. */
function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

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

      {/* The topic's own picture and its description, as one panel: the
          picture is a wall of the panel rather than a card floating beside two
          lines of copy, so the two halves are the same height whatever the
          copy runs to. Eighteen topics — the innovation, R&D and
          sustainability programmes — were given no description by the source
          copy; those take the picture on its own as a band, rather than a
          panel with an empty half. */}
      <section className="pad-xs">
        <div className="wrap">
          {topic.blurb ? (
            <div className="pintro pintro--statement rise">
              <div className="pintro__copy">
                <span className="eyebrow"><T>{fam.label}</T></span>
                <p className="pintro__lede"><T>{topic.blurb}</T></p>
                {/* the panel's floor, and the way back out of it: the family
                    this topic belongs to, in the same words the walk at the
                    foot of the page uses */}
                <p className="pintro__meta">
                  <Link className="link-arrow" href={fam.href}>
                    <T>{`All ${fam.label.toLowerCase()}`}</T>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M5 12h13M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </p>
              </div>
              <div className={`pintro__media ${topic.img}`}>
                <span className="pintro__tag"><T>{fam.label}</T> {topic.num}</span>
              </div>
            </div>
          ) : (
            <div className="pintro pintro--band rise">
              <div className={`pintro__media ${topic.img}`}>
                <span className="pintro__tag"><T>{fam.label}</T> {topic.num}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="pad-sm bg-sand">
        <div className="wrap topic-body rise">{children}</div>
      </section>

      {/* a product group is the one family whose topics have something beneath
          them — the grades in `lib/products.ts`, each with a page of its own */}
      {grades.length > 0 && (
        <section className="pad-sm">
          <div className="wrap">
            <div className="section-head rise">
              <span className="eyebrow"><T>The range</T></span>
              <h2><T>Grades in this group</T></h2>
            </div>
            <ul className="grade-list rise">
              {grades.map((grade) => (
                <li key={grade.s}>
                  <Link href={gradeHref(grade)}>
                    <span className="grade-list__name">{grade.n}</span>
                    <span className="grade-list__teaser">{grade.t}</span>
                    <span className="grade-list__go" aria-hidden="true"><Chevron /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="pad-sm">
        <div className="wrap">
          {/* Previous and next are cards carrying their own topic's picture —
              the same one the family's grid shows it under, so the walk reads
              as that grid rather than as two footnotes on a rule. */}
          <nav className="topic-walk rise" aria-label={`More in ${fam.label}`}>
            <Link className="topic-walk__link" href={`${fam.href}/${prev.slug}`}>
              <span className={`topic-walk__thumb ${prev.img}`} aria-hidden="true"></span>
              <span>
                <span className="topic-walk__dir">
                  <span aria-hidden="true">&#8592;</span> <T>Previous</T>
                </span>
                <span className="topic-walk__title"><T>{prev.title}</T></span>
              </span>
            </Link>
            <Link className="topic-walk__link topic-walk__link--next" href={`${fam.href}/${next.slug}`}>
              <span className={`topic-walk__thumb ${next.img}`} aria-hidden="true"></span>
              <span>
                <span className="topic-walk__dir">
                  <T>Next</T> <span aria-hidden="true">&#8594;</span>
                </span>
                <span className="topic-walk__title"><T>{next.title}</T></span>
              </span>
            </Link>
            {/* "All applications" is one phrase in English and two words in a
                different order elsewhere, so the family goes in as a slot
                rather than being concatenated onto a translated "All" */}
            <Link className="topic-walk__all" href={fam.href}>
              <T>{`All ${fam.label.toLowerCase()}`}</T>
            </Link>
          </nav>

          {/* the one piece of wording on a topic page that is not transcribed
              from the source copy — the same register as the CTAs the index
              pages already carry, and deliberately the same on every topic.
              It shares the walk's band: two `pad-sm` sections in a row put a
              screen of nothing between the last card and the last panel. */}
          <div className="cta cta--night cta--close rise">
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
