import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Quinacridone Pigments — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Organic pigment with high lightfastness for automotive and industrial finishes.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="quinacridone-pigments" />;
}
