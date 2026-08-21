import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Surfactants, Detergents & Bio-Based Chemicals — Business Units — Cosmox Chemicals" },
  description: "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="surfactants-detergents-bio-based-chemicals">
      <div><h4>Products</h4><ul className="list"><li>Monorhamnolipid R95</li><li>Mannosylerythritol Lipid-B (MEL-B)</li><li>Lactonic Sophorolipid</li><li>Mannosylerythritol Lipid-A</li><li>Sodium Methyl Cocoyl Taurate</li><li>Sodium Cocoyl Isethionate</li><li>Disodium Laureth Sulfosuccinate</li><li>Cocamidopropyl Hydroxysultaine</li><li>Cetearyl Glucoside</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Industrial and consumer cleaning formulations</li><li>Wetting and emulsification for polymers and coatings</li><li>Green chemistry and sustainable products</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Custom surfactant blends and formulations</li><li>Bio-based chemistry process development</li><li>Scale-up for commercial production</li></ul></div>
    </TopicPage>
  );
}
