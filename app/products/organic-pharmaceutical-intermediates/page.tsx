import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Organic & Pharmaceutical Intermediates — Products — Cosmox Chemicals" },
  description: "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="organic-pharmaceutical-intermediates">
      <div><h4>Products</h4><ul className="list"><li><strong>1-Phenyl Oxide</strong> — intermediate for pharma, agrochemicals and industrial applications</li><li><strong>Triazolo Pyridione</strong> — heterocyclic compound for R&amp;D and industrial use</li><li>Benzimidazole derivatives</li><li>2-Aminopyridine</li><li>Indole derivatives</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Pharmaceutical synthesis and R&amp;D</li><li>Agrochemical production</li><li>Industrial formulations</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>High-purity synthesis and custom batch development</li><li>Lab-to-commercial scale-up</li><li>Process optimisation and reproducibility</li></ul></div>
    </TopicPage>
  );
}
