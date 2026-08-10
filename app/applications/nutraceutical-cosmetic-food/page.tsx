import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Nutraceutical, Cosmetic & Food — Applications — Cosmox Chemicals" },
  description: "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="nutraceutical-cosmetic-food">
      <div><h4>Detailed applications</h4><ul className="list"><li>Vitamins, cosmetic actives and functional food additives</li><li>Intermediates for nutraceutical and pharmaceutical R&amp;D and production</li><li>Support for lab-to-industrial scale-up</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>Custom formulation and application guidance</li><li>Compliance and technical documentation support</li></ul></div>
    </TopicPage>
  );
}
