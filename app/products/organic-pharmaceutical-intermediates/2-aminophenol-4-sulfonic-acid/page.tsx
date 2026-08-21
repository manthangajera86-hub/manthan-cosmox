import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2-Aminophenol-4-sulfonic acid — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Amino-phenol sulfonic acid for dye, pigment and speciality intermediate synthesis.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="2-aminophenol-4-sulfonic-acid" />;
}
