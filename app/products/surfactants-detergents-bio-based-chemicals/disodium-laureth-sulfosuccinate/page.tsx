import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Disodium Laureth Sulfosuccinate — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Low-irritation secondary surfactant that softens the profile of anionic cleansing systems.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="disodium-laureth-sulfosuccinate" />;
}
