import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Quinacridone Magenta — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Blue-shade quinacridone for high-chroma magentas in coatings, inks and masterbatch.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="quinacridone-magenta" />;
}
