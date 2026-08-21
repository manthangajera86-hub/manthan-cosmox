import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Electrochemical, Battery & Electronic Chemicals — Business Units — Cosmox Chemicals" },
  description: "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="electrochemical-battery-electronic-chemicals">
      <div><h4>Products</h4><ul className="list"><li>Lithium Bis(fluorosulfonyl)imide</li><li>Lithium Difluoro(oxalato)borate (LIODFB)</li><li>Tris(trimethylsilyl) Phosphate</li><li>Lithium Bis(trifluoromethanesulfonyl)imide</li><li>1,3,2-Dioxathiolane-2,2-dioxide</li><li>Tris(trimethylsilyl) Borate</li><li>Fluoroethylene Carbonate (FEC)</li><li>Silicon-Carbon Composite</li><li>Tetramethylammonium Hydroxide</li><li>Lithium Hexafluorophosphate</li><li>Carbon Nanotube</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Energy storage systems and batteries</li><li>Semiconductor manufacturing</li><li>Electronics and high-tech applications</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Ultra-high purity synthesis</li><li>Application-specific material development</li><li>Global export-ready products</li></ul></div>
    </TopicPage>
  );
}
