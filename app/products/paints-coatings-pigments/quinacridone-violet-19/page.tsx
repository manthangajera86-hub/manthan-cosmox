import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Quinacridone Violet 19 — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Quinacridone violet offering clean transparent shades and outstanding weather resistance.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="quinacridone-violet-19" />;
}
