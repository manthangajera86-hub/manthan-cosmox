import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Coatings & Composites — Industries — Cosmox Chemicals" },
  description: "Hypophosphite salts · Organic & pharmaceutical intermediates",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="coatings-composites">
      <div><h4>Applications</h4><ul className="list"><li>Flame-retardant coatings for industrial, commercial and construction use</li><li>Laminates and composites with thermal, mechanical and fire-resistant properties</li><li>Materials engineered for low smoke and reduced toxicity</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>Compliance with fire safety regulations</li><li>Enhanced durability and performance</li><li>Environmentally responsible solutions</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>Guidance for resin, polymer and composite integration</li><li>Application-specific testing and optimisation</li><li>Supports sustainable construction and high-performance coatings</li></ul></div>
    </TopicPage>
  );
}
