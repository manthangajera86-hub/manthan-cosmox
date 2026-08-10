import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Polymers, Resins & High-Performance Materials — Business Units — Cosmox Chemicals" },
  description: "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="polymers-resins-high-performance-materials">
      <div><h4>Products</h4><ul className="list"><li>Epoxy and phenolic resins</li><li>Polyurethane and polyamide intermediates</li><li>PTFE and fluoropolymer intermediates</li><li>Heat-resistant and high-performance polymers</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Coatings, adhesives and composites</li><li>Automotive and aerospace components</li><li>Industrial and specialty materials</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Scalable, consistent polymer production</li><li>Custom formulations for performance optimisation</li><li>Lab-to-commercial batch support</li><li>Application-specific material development</li></ul></div>
    </TopicPage>
  );
}
