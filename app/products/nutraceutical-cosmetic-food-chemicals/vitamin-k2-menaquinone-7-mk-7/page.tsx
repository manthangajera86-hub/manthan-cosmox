import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Vitamin K2 (Menaquinone-7 / MK-7) — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Fermentation-derived MK-7 for bone and cardiovascular supplement formulation.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="vitamin-k2-menaquinone-7-mk-7" />;
}
