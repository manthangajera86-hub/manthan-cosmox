import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Surfactants, Detergents & Bio-Based Chemicals — Products — Cosmox Chemicals" },
  description: "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="surfactants-detergents-bio-based-chemicals">
      <div><h4>Products</h4><ul className="list"><li>Sodium Lauryl Sulfate (SLS)</li><li>Tween 80, Span 60</li><li>Plant-derived surfactants</li><li>Bio-based solvents and intermediates</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Industrial cleaning formulations</li><li>Wetting and emulsification for polymers and coatings</li><li>Sustainable and green chemical processes</li></ul></div>
    </TopicPage>
  );
}
