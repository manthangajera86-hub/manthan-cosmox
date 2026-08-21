import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "N-Methyl-2-pyrrolidone — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "High-boiling polar aprotic solvent for pharmaceutical synthesis, electronics cleaning and polymer processing.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="n-methyl-2-pyrrolidone" />;
}
