import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Titanium Dioxide — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Opacifying white pigment with controlled dispersion behaviour.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="titanium-dioxide" />;
}
