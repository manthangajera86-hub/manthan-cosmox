import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "HALS-944 — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "High-molecular-weight hindered amine light stabiliser for polyolefins in long-term outdoor service.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="hals-944" />;
}
