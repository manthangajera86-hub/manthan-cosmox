import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Water Treatment & Industrial Additives — Business Units — Cosmox Chemicals" },
  description: "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="water-treatment-industrial-additives">
      <div><h4>Products</h4><ul className="list"><li>Phosphonates and polyphosphates</li><li>Anti-scalants</li><li>Corrosion inhibitors</li><li>Specialty industrial additives</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Industrial water systems</li><li>Power plants, cooling towers and processing industries</li><li>Surface treatment and process enhancement</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Custom formulations for specific industrial conditions</li><li>Lab-to-commercial scale support</li><li>Global export-ready with compliance documentation</li></ul></div>
    </TopicPage>
  );
}
