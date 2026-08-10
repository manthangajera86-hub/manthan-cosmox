import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Technical & Application Support — Capabilities — Cosmox Chemicals" },
  description: "Application engineering, performance evaluation and knowledge transfer.",
};

export default function Page() {
  return (
    <TopicPage family="capabilities" slug="technical-application-support">
      <div><h4>Key features</h4><ul className="list"><li><strong>Application engineering</strong> — guidance on product integration, processing and optimisation</li><li><strong>Performance evaluation</strong> — laboratory and on-site testing</li><li><strong>Custom solutions</strong> — tailored formulations and grades</li><li><strong>Training &amp; knowledge transfer</strong> — process efficiency, safety and sustainability practices</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Optimal product performance and industrial efficiency</li><li>Reduced downtime and operational risk</li><li>Long-term partnerships built on technical excellence</li></ul></div>
    </TopicPage>
  );
}
