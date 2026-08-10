import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Flame Retardancy — Applications — Cosmox Chemicals" },
  description: "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="flame-retardancy">
      <div><h4>Detailed applications</h4><ul className="list"><li><strong>Engineering plastics</strong> — enhance fire resistance of PA, PBT, PET and other polymers without compromising mechanical strength</li><li><strong>Electrical components</strong> — flame-retardant housings, insulation, circuit boards and connectors</li><li><strong>Coatings &amp; composites</strong> — improve safety in industrial coatings, laminates and composites</li><li><strong>Cables &amp; wire insulation</strong> — low smoke, low toxicity and fire safety across residential, commercial and industrial use</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>Polymer, plastic and composite integration guidance</li><li>Thermal stability and performance optimisation</li><li>Regulatory compliance and global testing support</li></ul></div>
    </TopicPage>
  );
}
