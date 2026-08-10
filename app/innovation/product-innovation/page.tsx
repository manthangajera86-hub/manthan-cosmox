import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Product Innovation — Innovation — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="innovation" slug="product-innovation">
      <div><h4>Key initiatives</h4><ul className="list"><li>New chemical compounds, intermediates and additives for automotive, polymers, electronics, pharmaceuticals and agrochemicals</li><li>Enhancement of existing products for performance, stability and efficiency</li><li>Eco-friendly, halogen-free and low-toxicity formulations</li><li>Tailored innovations for specific client and industry requirements</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Clients access high-performance, application-ready solutions</li><li>Compliance with stringent global quality, safety and environmental standards</li><li>Reduced environmental footprint through sustainable chemistry</li></ul></div>
    </TopicPage>
  );
}
