import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Research-Driven Specialty Industries — Industries — Cosmox Chemicals" },
  description: "Graphene & nano additives · High-performance polymers · Functional coatings",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="research-driven-specialty-industries">
      <div><h4>Applications</h4><ul className="list"><li>Advanced materials for aerospace, automotive and industrial research</li><li>Functional films, specialty coatings and high-performance composites</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>Enables innovation in cutting-edge industrial applications</li><li>Custom solutions for R&amp;D and high-value industrial processes</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>Collaborative R&amp;D support</li><li>Scale-up and formulation optimisation for advanced applications</li></ul></div>
    </TopicPage>
  );
}
