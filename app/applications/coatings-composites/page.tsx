import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Coatings & Composites — Applications — Cosmox Chemicals" },
  description: "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="coatings-composites">
      <div><h4>Detailed applications</h4><ul className="list"><li>Flame-retardant coatings for industrial, commercial and construction use</li><li>Enhanced thermal, mechanical and fire-resistant properties in composites</li><li>Reduced smoke and toxic gas emissions for safer environments</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>Integration with resins, polymers and composite matrices</li><li>Application-specific performance and safety testing</li><li>Regulatory compliance and global market support</li></ul></div>
    </TopicPage>
  );
}
