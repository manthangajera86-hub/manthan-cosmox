import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Coenzyme Q10 — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Ubiquinone active for energy-support supplements and anti-ageing cosmetics.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="coenzyme-q10" />;
}
