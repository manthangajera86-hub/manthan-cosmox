import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Surfactants, Detergents & Bio-Based Chemicals — Products — Cosmox Chemicals" },
  description: "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="surfactants-detergents-bio-based-chemicals">
      <div><h4>Applications</h4><ul className="list"><li>Industrial cleaning formulations</li><li>Wetting and emulsification for polymers and coatings</li><li>Sustainable and green chemical processes</li></ul></div>
    </TopicPage>
  );
}
