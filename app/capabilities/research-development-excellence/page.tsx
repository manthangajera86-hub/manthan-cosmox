import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Research & Development Excellence — Capabilities — Cosmox Chemicals" },
  description: "Application-focused development, innovation laboratories and collaborative formulation work.",
};

export default function Page() {
  return (
    <TopicPage family="capabilities" slug="research-development-excellence">
      <div><h4>Key features</h4><ul className="list"><li><strong>Application-focused R&amp;D</strong> — custom development for automotive, polymers, electronics, pharma, agrochemicals and coatings</li><li><strong>Innovation laboratories</strong> — synthesis, testing and process optimisation</li><li><strong>Collaborative development</strong> — tailored formulations built with clients</li><li><strong>Sustainability-oriented innovation</strong> — eco-friendly, low-toxicity, halogen-free products</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Continuous development of new chemical solutions</li><li>Formulations tailored to specific industrial needs</li><li>Enhanced performance, safety and regulatory compliance</li></ul></div>
    </TopicPage>
  );
}
