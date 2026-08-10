import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Construction & Infrastructure — Industries — Cosmox Chemicals" },
  description: "Hypophosphite salts · Organic & pharmaceutical intermediates",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="construction-infrastructure">
      <div><h4>Applications</h4><ul className="list"><li>Flame-retardant coatings, laminates and composites</li><li>Materials engineered for thermal stability, strength and fire safety</li><li>Low-smoke, low-toxicity building solutions</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>Compliance with building and fire safety regulations</li><li>Improved durability and performance of construction materials</li><li>Environmentally responsible building solutions</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>Formulation guidance and integration with polymers and resins</li><li>Performance testing and regulatory documentation</li><li>Supports sustainable, high-performance infrastructure projects</li></ul></div>
    </TopicPage>
  );
}
