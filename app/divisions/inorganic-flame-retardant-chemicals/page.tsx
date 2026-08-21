import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Inorganic & Flame-Retardant Chemicals — Business Units — Cosmox Chemicals" },
  description: "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="inorganic-flame-retardant-chemicals">
      <div><h4>Products</h4><ul className="list"><li>Aluminium Hypophosphite</li><li>Calcium Hypophosphite</li><li>Magnesium Hypophosphite</li><li>Aluminium Diethyl Phosphinate</li><li>Melamine Polyphosphate</li><li>Zinc Hydroxystannate</li><li>Magnesium Oxysulfate Whisker</li><li>Expandable Graphite</li><li>Zinc Borate</li><li>Melamine Cyanurate</li><li>Huntite</li><li>Zinc Hypophosphite</li><li>Zinc Stannate</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Engineering plastics (PA, PBT, PET)</li><li>Electrical and electronic housings</li><li>Industrial coatings and composites</li><li>Flame-retardant cables</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Halogen-free, environmentally safe production</li><li>Optimised thermal and mechanical performance</li><li>Uniform particle size for consistent behaviour</li><li>Custom grades for industrial and regulatory needs</li></ul></div>
      <div><h4>Export &amp; R&amp;D</h4><ul className="list"><li>Worldwide shipping with compliance documentation</li><li>Technical support for global clients</li><li>Application-specific testing and optimisation</li><li>Sustainable flame-retardant solutions</li></ul></div>
    </TopicPage>
  );
}
