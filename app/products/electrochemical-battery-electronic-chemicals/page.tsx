import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Electrochemical, Battery & Electronic Chemicals — Products — Cosmox Chemicals" },
  description: "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="electrochemical-battery-electronic-chemicals">
      <div><h4>Products</h4><ul className="list"><li>Lithium Carbonate, Lithium Hydroxide</li><li>Electrolyte salts (LiPF<sub>6</sub>, LiBF<sub>4</sub>)</li><li>TMAH (Tetramethylammonium Hydroxide)</li><li>Electronic-grade solvents</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Energy storage systems</li><li>Electronics and semiconductor manufacturing</li></ul></div>
    </TopicPage>
  );
}
