import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Surfactants, Detergents & Bio-Based Chemicals — Business Units — Cosmox Chemicals" },
  description: "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="surfactants-detergents-bio-based-chemicals">
      <div><h4>Products</h4><ul className="list"><li>Sodium Lauryl Sulfate (SLS)</li><li>Tween 80, Span 60</li><li>Plant-derived surfactants</li><li>Bio-based solvents and intermediates</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Industrial and consumer cleaning formulations</li><li>Wetting and emulsification for polymers and coatings</li><li>Green chemistry and sustainable products</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Custom surfactant blends and formulations</li><li>Bio-based chemistry process development</li><li>Scale-up for commercial production</li></ul></div>
    </TopicPage>
  );
}
