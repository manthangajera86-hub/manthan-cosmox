import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Pigment Red 264 — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Diketopyrrolopyrrole red delivering deep blue-shade reds with high weather and heat stability.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="pigment-red-264" />;
}
