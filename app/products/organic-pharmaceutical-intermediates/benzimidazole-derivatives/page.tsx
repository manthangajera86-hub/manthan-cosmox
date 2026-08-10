import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Benzimidazole Derivatives — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Building blocks for active pharmaceutical ingredients and crop-protection chemistry.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="benzimidazole-derivatives" />;
}
