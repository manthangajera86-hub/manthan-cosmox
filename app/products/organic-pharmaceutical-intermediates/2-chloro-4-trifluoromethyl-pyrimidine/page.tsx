import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2-Chloro-4-(trifluoromethyl)pyrimidine — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Trifluoromethylated pyrimidine for crop-protection and pharmaceutical synthesis.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="2-chloro-4-trifluoromethyl-pyrimidine" />;
}
