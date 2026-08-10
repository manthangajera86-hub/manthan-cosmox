import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Automotive & Transportation — Industries — Cosmox Chemicals" },
  description: "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="automotive-transportation">
      <div><h4>Applications</h4><ul className="list"><li>High-performance greases for engines, bearings, gears and chassis</li><li>Flame-retardant additives for interiors, wiring and electronic modules</li><li>Polymer additives for automotive plastics and composites</li><li>Lubricants for commercial vehicles and off-road machinery</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>Enhanced durability and component longevity</li><li>Reduced friction, wear and energy consumption</li><li>Compliance with global automotive safety and environmental standards</li><li>Optimised performance under extreme temperatures and loads</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>Custom formulations for OEM and aftermarket requirements</li><li>Performance benchmarking and application testing</li><li>Solutions supporting electric and hybrid mobility</li><li>Battery safety, thermal management and power electronics reliability</li></ul></div>
    </TopicPage>
  );
}
