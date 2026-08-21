import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Pigment Violet 23 — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Dioxazine violet with very high tinting strength for inks, coatings and plastics colouration.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="pigment-violet-23" />;
}
