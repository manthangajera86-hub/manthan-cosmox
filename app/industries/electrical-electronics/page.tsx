import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Electrical & Electronics — Industries — Cosmox Chemicals" },
  description: "Aluminium Hypophosphite · Magnesium Hypophosphite",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="electrical-electronics">
      <div><h4>Applications</h4><ul className="list"><li>Flame-retardant housings, insulation, circuit boards, connectors and wiring</li><li>Thermally stable materials for consumer and industrial electronics</li><li>Low-smoke, low-toxicity formulations for safer environments</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>Compliance with UL, IEC and REACH standards</li><li>Improved component reliability and lifespan</li><li>Enhanced workplace safety and environmental protection</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>Guidance on polymer integration and compatibility</li><li>Performance testing and certification assistance</li><li>Supports IoT components, EV electronics and automation systems</li></ul></div>
    </TopicPage>
  );
}
