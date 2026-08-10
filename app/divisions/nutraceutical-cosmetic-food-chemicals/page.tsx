import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Nutraceutical, Cosmetic & Food Chemicals — Business Units — Cosmox Chemicals" },
  description: "Vitamins, nutraceuticals, cosmetic actives and functional food additives.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="nutraceutical-cosmetic-food-chemicals">
      <div><h4>Products</h4><ul className="list"><li>Ascorbic Acid and derivatives</li><li>Niacinamide and other vitamin intermediates</li><li>Hyaluronic acid derivatives</li><li>PABA and cosmetic actives</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Nutraceutical and functional food production</li><li>Cosmetic formulations</li><li>Pharmaceutical actives</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>High-purity, application-ready intermediates</li><li>Custom formulations to client specification</li><li>R&amp;D collaboration for novel bioactive molecules</li></ul></div>
    </TopicPage>
  );
}
