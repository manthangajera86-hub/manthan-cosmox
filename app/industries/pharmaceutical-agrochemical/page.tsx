import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Pharmaceutical & Agrochemical — Industries — Cosmox Chemicals" },
  description: "1-Phenyl Oxide · Triazolo Pyridione",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="pharmaceutical-agrochemical">
      <div><h4>Applications</h4><ul className="list"><li>High-purity intermediates for drug synthesis and crop protection chemicals</li><li>Precision molecules for research and industrial applications</li><li>Lab-to-commercial scale-up support</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>Consistent, high-purity intermediates for reliable production</li><li>Accelerated pharmaceutical R&amp;D and agrochemical development</li><li>Reproducibility and regulatory compliance</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>Custom synthesis and process development</li><li>Application-specific testing and optimisation</li><li>R&amp;D collaboration for product enhancement</li></ul></div>
    </TopicPage>
  );
}
