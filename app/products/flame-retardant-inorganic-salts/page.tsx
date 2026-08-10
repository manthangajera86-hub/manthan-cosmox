import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Flame-Retardant & Inorganic Salts — Products — Cosmox Chemicals" },
  description: "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="flame-retardant-inorganic-salts">
      <div><h4>Products</h4><ul className="list"><li>Aluminium Hypophosphite</li><li>Calcium Hypophosphite</li><li>Magnesium Hypophosphite</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Engineering plastics (PA, PBT, PET)</li><li>Electrical and electronic components</li><li>Industrial coatings and flame-retardant cables</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Halogen-free, environmentally responsible production</li><li>Thermal and mechanical optimisation</li><li>Uniform particle size and custom grades</li></ul></div>
    </TopicPage>
  );
}
