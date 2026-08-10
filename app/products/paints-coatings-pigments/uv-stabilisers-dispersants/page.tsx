import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "UV Stabilisers & Dispersants — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Coating additives extending service life and keeping pigment loads stable.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="uv-stabilisers-dispersants" />;
}
