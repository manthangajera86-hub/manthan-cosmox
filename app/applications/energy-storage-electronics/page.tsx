import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Energy Storage & Electronics — Applications — Cosmox Chemicals" },
  description: "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="energy-storage-electronics">
      <div><h4>Detailed applications</h4><ul className="list"><li>Lithium-ion batteries and energy storage systems</li><li>Semiconductor and electronic-grade chemical manufacturing</li><li>High-purity materials for industrial and consumer electronics</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>Battery chemistry and material integration guidance</li><li>Custom formulations for electronic and energy storage applications</li></ul></div>
    </TopicPage>
  );
}
