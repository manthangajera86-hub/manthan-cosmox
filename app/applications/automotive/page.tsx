import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Automotive — Applications — Cosmox Chemicals" },
  description: "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="automotive">
      <div><h4>Detailed applications</h4><ul className="list"><li>High-performance greases for bearings, chassis, engines and gears</li><li>Flame-retardant materials for interiors, wiring, insulation and electronics</li><li>Polymer additives for plastics, composites and functional materials</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>Component-specific testing and optimisation</li><li>Thermal, mechanical and fire performance support</li><li>Guidance on global export specifications</li></ul></div>
    </TopicPage>
  );
}
