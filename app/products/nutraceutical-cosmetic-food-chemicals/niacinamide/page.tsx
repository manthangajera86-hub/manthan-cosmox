import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Niacinamide — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Vitamin B3 intermediate widely used in cosmetic and nutraceutical products.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="niacinamide" />;
}
