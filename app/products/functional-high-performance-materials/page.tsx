import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Functional & High-Performance Materials — Products — Cosmox Chemicals" },
  description: "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="functional-high-performance-materials">
      <div><h4>Products</h4><ul className="list"><li>Specialty coatings and films</li><li>Graphene and nano additives</li><li>Fluorosilicone fluids</li><li>High-performance polymers</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Aerospace, automotive, electronics and advanced industrial applications</li><li>Research and high-value industrial processes</li></ul></div>
    </TopicPage>
  );
}
