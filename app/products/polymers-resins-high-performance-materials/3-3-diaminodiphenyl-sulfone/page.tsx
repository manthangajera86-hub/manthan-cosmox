import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "3,3′-Diaminodiphenyl sulfone — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "Meta-isomer curing agent giving epoxy systems a longer pot life and greater toughness.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="3-3-diaminodiphenyl-sulfone" />;
}
