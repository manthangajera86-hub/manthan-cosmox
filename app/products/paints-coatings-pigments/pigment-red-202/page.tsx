import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Pigment Red 202 — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Quinacridone magenta-red with high lightfastness for automotive topcoats, inks and plastics.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="pigment-red-202" />;
}
