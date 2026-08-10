import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Organic & Pharmaceutical Intermediates — Business Units — Cosmox Chemicals" },
  description: "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="organic-pharmaceutical-intermediates">
      <div><h4>Products</h4><ul className="list"><li>1-Phenyl Oxide</li><li>Triazolo Pyridione</li><li>Benzimidazole derivatives</li><li>2-Aminopyridine</li><li>Indole derivatives</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Pharmaceutical synthesis and research</li><li>Agrochemical intermediate production</li><li>Fine chemicals and industrial formulations</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>High-purity chemical synthesis</li><li>Custom molecular and batch development</li><li>Lab-to-commercial scale-up</li><li>Process optimisation for reproducibility</li></ul></div>
      <div><h4>Export &amp; R&amp;D</h4><ul className="list"><li>Fully export-ready with international compliance</li><li>Custom packaging for sensitive or high-value chemicals</li><li>Tailored research support for client-specific intermediates</li><li>Innovation in high-purity, application-specific molecules</li></ul></div>
    </TopicPage>
  );
}
