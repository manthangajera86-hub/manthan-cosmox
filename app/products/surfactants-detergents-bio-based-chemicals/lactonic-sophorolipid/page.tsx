import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lactonic Sophorolipid — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Yeast-fermented biosurfactant used for cleaning, emulsification and antimicrobial support.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="lactonic-sophorolipid" />;
}
