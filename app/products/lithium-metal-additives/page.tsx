import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Lithium & Metal Additives — Products — Cosmox Chemicals" },
  description: "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="lithium-metal-additives">
      <div><h4>Applications</h4><ul className="list"><li>Automotive and industrial greases</li><li>Polymers and plastics processing</li><li>Industrial lubrication systems</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Custom formulations and high-temperature stability</li><li>Scale-up from lab to industrial production</li><li>Quality-controlled batch consistency</li></ul></div>
    </TopicPage>
  );
}
