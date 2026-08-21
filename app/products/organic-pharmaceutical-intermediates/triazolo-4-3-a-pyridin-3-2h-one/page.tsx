import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "[1,2,4]Triazolo[4,3-a]pyridin-3(2H)-one — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Fused heterocyclic building block for pharmaceutical synthesis, supplied at controlled purity.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="triazolo-4-3-a-pyridin-3-2h-one" />;
}
