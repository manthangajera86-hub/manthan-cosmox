import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Mannosylerythritol Lipid-A — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Glycolipid biosurfactant forming stable vesicles for cosmetic and formulation work.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="mannosylerythritol-lipid-a" />;
}
