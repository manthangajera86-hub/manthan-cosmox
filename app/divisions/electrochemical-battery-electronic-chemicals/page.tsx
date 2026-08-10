import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Electrochemical, Battery & Electronic Chemicals — Business Units — Cosmox Chemicals" },
  description: "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="electrochemical-battery-electronic-chemicals">
      <div><h4>Products</h4><ul className="list"><li>Lithium Carbonate, Lithium Hydroxide</li><li>Electrolyte salts (LiPF<sub>6</sub>, LiBF<sub>4</sub>)</li><li>TMAH (Tetramethylammonium Hydroxide)</li><li>Electronic-grade solvents</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Energy storage systems and batteries</li><li>Semiconductor manufacturing</li><li>Electronics and high-tech applications</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Ultra-high purity synthesis</li><li>Application-specific material development</li><li>Global export-ready products</li></ul></div>
    </TopicPage>
  );
}
