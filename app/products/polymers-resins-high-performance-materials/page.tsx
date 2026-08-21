import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Polymers, Resins & High-Performance Materials — Products — Cosmox Chemicals" },
  description: "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="polymers-resins-high-performance-materials">
      <div><h4>Applications</h4><ul className="list"><li>Adhesives, coatings and composites</li><li>Aerospace, automotive and industrial materials</li><li>Custom formulations for industrial and research use</li></ul></div>
    </TopicPage>
  );
}
