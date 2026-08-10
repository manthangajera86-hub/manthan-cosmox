import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Energy Storage & Electronics — Industries — Cosmox Chemicals" },
  description: "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="energy-storage-electronics">
      <div><h4>Applications</h4><ul className="list"><li>Lithium-ion batteries and energy storage systems</li><li>Semiconductors and electronic components</li><li>High-purity materials for industrial electronics</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>Reliable, high-performance materials for advanced electronics</li><li>Compliance with global safety and quality standards</li><li>Improved energy efficiency and device lifespan</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>Guidance on battery chemistry and material integration</li><li>Custom formulations for electronic and energy storage applications</li></ul></div>
    </TopicPage>
  );
}
