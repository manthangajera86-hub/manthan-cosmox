import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "4-Chloro-2,6-Diaminopyrimidine — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Chlorinated diaminopyrimidine for nucleoside and heterocyclic drug synthesis.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="4-chloro-2-6-diaminopyrimidine" />;
}
