import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Phthalocyanine Blue — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Strong, stable organic blue for coatings, inks and plastics.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="phthalocyanine-blue" />;
}
