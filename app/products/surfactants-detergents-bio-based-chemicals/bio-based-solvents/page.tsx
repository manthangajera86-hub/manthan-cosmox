import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Bio-Based Solvents — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Renewable-feedstock solvents replacing petrochemical equivalents in process chemistry.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="bio-based-solvents" />;
}
