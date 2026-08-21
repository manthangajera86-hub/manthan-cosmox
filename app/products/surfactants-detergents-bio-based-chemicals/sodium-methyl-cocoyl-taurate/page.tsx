import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Sodium Methyl Cocoyl Taurate — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Mild anionic surfactant giving a dense, creamy lather in facial and body cleansers.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="sodium-methyl-cocoyl-taurate" />;
}
