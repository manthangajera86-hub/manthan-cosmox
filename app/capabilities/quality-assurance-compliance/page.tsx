import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Quality Assurance & Compliance — Capabilities — Cosmox Chemicals" },
  description: "Multi-stage testing, global standards and full documentation traceability.",
};

export default function Page() {
  return (
    <TopicPage family="capabilities" slug="quality-assurance-compliance">
      <div><h4>Key features</h4><ul className="list"><li><strong>Rigorous quality control</strong> — testing across raw materials, intermediates and finished products</li><li><strong>Global compliance</strong> — ISO, REACH, OSHA and other international chemical standards</li><li><strong>Advanced analytics</strong> — instruments for purity, stability and performance verification</li><li><strong>Full traceability</strong> — comprehensive TDS/SDS documentation and export certifications</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Products that consistently meet global quality standards</li><li>Reliable, predictable performance in industrial use</li><li>Trust and confidence from clients worldwide</li></ul></div>
    </TopicPage>
  );
}
