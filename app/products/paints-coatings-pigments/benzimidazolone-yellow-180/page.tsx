import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Benzimidazolone Yellow 180 — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "High-performance organic yellow with the heat stability plastics and industrial coatings demand.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="benzimidazolone-yellow-180" />;
}
