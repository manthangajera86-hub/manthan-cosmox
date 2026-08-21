import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Nutraceutical, Cosmetic & Food Chemicals — Products — Cosmox Chemicals" },
  description: "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="nutraceutical-cosmetic-food-chemicals">
      <div><h4>Applications</h4><ul className="list"><li>Nutraceuticals and functional foods</li><li>Cosmetic formulations</li><li>Pharmaceutical actives</li></ul></div>
    </TopicPage>
  );
}
