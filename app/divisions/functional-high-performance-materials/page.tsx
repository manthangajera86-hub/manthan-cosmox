import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Functional & High-Performance Materials — Business Units — Cosmox Chemicals" },
  description: "Niche chemicals for aerospace, automotive, electronics and industrial applications.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="functional-high-performance-materials">
      <div><h4>Products</h4><ul className="list"><li>Specialty coatings and films</li><li>Graphene and nano additives</li><li>Fluorosilicone fluids</li><li>High-performance polymers</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Advanced materials for industrial and research applications</li><li>Aerospace, automotive and electronics sectors</li><li>High-performance specialty applications</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>R&amp;D-driven innovation for next-generation materials</li><li>Scalable manufacturing of advanced chemicals</li><li>Tailored solutions for high-value industrial use</li></ul></div>
    </TopicPage>
  );
}
