import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "PABA — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Para-aminobenzoic acid for pharmaceutical and personal-care formulation.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="paba" />;
}
