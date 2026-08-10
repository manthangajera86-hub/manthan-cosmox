import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Sodium Lauryl Sulfate (SLS) — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Anionic surfactant for industrial cleaning and formulation work.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="sodium-lauryl-sulfate-sls" />;
}
