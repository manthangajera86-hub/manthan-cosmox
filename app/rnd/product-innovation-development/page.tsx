import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Product Innovation & Development — Research & Development — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="rnd" slug="product-innovation-development">
      <div><h4>Key initiatives</h4><ul className="list"><li>Development of new chemical intermediates and industrial products</li><li>Enhancement of existing lines to improve efficiency, stability and performance</li><li>Design of eco-friendly, low-toxicity formulations aligned with global sustainability standards</li><li>Application-specific solutions for automotive, polymers, electronics and industrial sectors</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Access to innovative, high-performance chemical solutions</li><li>Support for safer, sustainable products</li><li>Enables industries to meet stringent global standards</li></ul></div>
    </TopicPage>
  );
}
