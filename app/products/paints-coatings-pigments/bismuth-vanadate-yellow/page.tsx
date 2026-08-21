import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Bismuth Vanadate Yellow — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Bright, opaque inorganic yellow replacing lead and cadmium pigments in durable coatings.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="bismuth-vanadate-yellow" />;
}
