import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Pharmaceutical & Agrochemical — Applications — Cosmox Chemicals" },
  description: "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="pharmaceutical-agrochemical">
      <div><h4>Detailed applications</h4><ul className="list"><li>High-purity intermediates for drug development, APIs and agrochemical products</li><li>Precision molecules for R&amp;D and specialty formulations</li><li>Lab-to-commercial scale-up for pharmaceutical and agrochemical synthesis</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>Custom synthesis and process development</li><li>Application-specific testing and optimisation</li><li>Collaboration with client R&amp;D teams</li></ul></div>
    </TopicPage>
  );
}
