import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "N,N-Dimethylformamide dimethyl acetal — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Formylating and cyclisation reagent for heterocyclic synthesis.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="n-n-dimethylformamide-dimethyl-acetal" />;
}
