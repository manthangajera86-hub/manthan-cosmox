import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polybenzimidazole — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "PBI resin for compression-moulded parts and high-temperature membranes and fibres.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="polybenzimidazole" />;
}
