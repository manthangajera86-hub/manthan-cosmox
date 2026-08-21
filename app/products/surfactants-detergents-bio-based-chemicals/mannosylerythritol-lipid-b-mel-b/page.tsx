import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Mannosylerythritol Lipid-B (MEL-B) — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Glycolipid biosurfactant with strong moisturising and emulsifying performance in personal care.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="mannosylerythritol-lipid-b-mel-b" />;
}
