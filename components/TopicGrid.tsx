/* The showcase a family's index page opens onto: every topic as a picture, its
   number, its title and the one-line description the source copy gave it, with
   the detail one click away on the topic's own page. Reads `lib/topics.ts`, so
   the grid, the nav dropdown and the previous/next walk can never disagree. */

import Link from "next/link";
import { FAMILY } from "@/lib/topics";
import T from "./T";

export default function TopicGrid({ family }: { family: string }) {
  const fam = FAMILY[family];
  if (!fam) return null;

  return (
    <div className="topic-grid">
      {fam.topics.map((topic) => (
        <Link key={topic.slug} className="card tcard rise" href={`${fam.href}/${topic.slug}`}>
          <div className={`card__img ${topic.img}`} aria-hidden="true"></div>
          <span className="tcard__num">{topic.num}</span>
          <h3><T>{topic.title}</T></h3>
          {topic.blurb && <p><T>{topic.blurb}</T></p>}
          <span className="tcard__go">
            <T>Explore</T>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h13M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
