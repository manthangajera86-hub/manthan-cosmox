import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Sodium Cocoyl Isethionate — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Sulfate-free surfactant for syndet bars and gentle cleansers, stable in hard water.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="sodium-cocoyl-isethionate" />;
}
