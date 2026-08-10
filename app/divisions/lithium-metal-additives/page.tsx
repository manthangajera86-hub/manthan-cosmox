import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Lithium & Metal Additives — Business Units — Cosmox Chemicals" },
  description: "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="lithium-metal-additives">
      <div><h4>Products</h4><ul className="list"><li>Lithium Myristate</li><li>12-Hydroxy Lithium Stearate</li><li>Calcium Stearate</li><li>Aluminum Stearate</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Automotive greases and industrial lubrication systems</li><li>High-temperature and heavy-duty machinery greases</li><li>Polymers and plastics processing additives</li><li>Industrial lubrication and specialty equipment</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Custom formulations for industrial requirements</li><li>Thermal stability optimisation</li><li>Scale-up from pilot to commercial production</li><li>Quality-controlled batch production</li></ul></div>
      <div><h4>Export &amp; R&amp;D</h4><ul className="list"><li>Export-ready with full TDS/SDS and packaging options</li><li>Dedicated logistics and client support</li><li>Development of next-generation greases and additives</li><li>Technical guidance and formulation collaboration</li></ul></div>
    </TopicPage>
  );
}
