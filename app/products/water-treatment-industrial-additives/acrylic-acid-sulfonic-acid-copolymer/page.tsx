import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Acrylic Acid-Sulfonic Acid Copolymer — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "Dispersant copolymer keeping iron, silt and phosphate scales suspended in cooling loops.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="acrylic-acid-sulfonic-acid-copolymer" />;
}
