import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Tween 80 / Span 60 — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Non-ionic emulsifiers for stable oil-in-water and water-in-oil systems.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="tween-80-span-60" />;
}
