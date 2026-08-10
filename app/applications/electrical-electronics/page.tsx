import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Electrical & Electronics — Applications — Cosmox Chemicals" },
  description: "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="electrical-electronics">
      <div><h4>Detailed applications</h4><ul className="list"><li>Flame-retardant housings, insulation, circuit boards and connectors</li><li>Thermal stability, fire safety and long-term durability</li><li>Low-smoke, low-toxicity materials for safer electronic systems</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>Polymer matrix and electronic material integration</li><li>Performance testing for international standards</li><li>Regulatory compliance guidance</li></ul></div>
    </TopicPage>
  );
}
