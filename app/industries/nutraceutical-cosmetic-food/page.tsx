import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Nutraceutical, Cosmetic & Food — Industries — Cosmox Chemicals" },
  description: "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="nutraceutical-cosmetic-food">
      <div><h4>Applications</h4><ul className="list"><li>Vitamins, cosmetic actives and functional food additives</li><li>Nutraceutical and pharmaceutical intermediates</li><li>R&amp;D and industrial-scale formulations</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>High-purity, application-ready intermediates</li><li>Accelerated product development in nutrition and personal care</li><li>Regulatory compliance and reproducibility</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>Custom formulation support</li><li>Application-specific guidance and technical documentation</li></ul></div>
    </TopicPage>
  );
}
