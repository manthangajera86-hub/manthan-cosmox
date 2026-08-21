import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2-Azaspiro[4.5]decan-3-one — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Spirocyclic lactam building block for pharmaceutical synthesis, supplied at controlled purity.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="2-azaspiro-4-5-decan-3-one" />;
}
