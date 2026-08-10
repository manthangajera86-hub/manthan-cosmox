import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Ascorbic Acid & Derivatives — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Vitamin C actives for functional foods, supplements and topical formulations.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="ascorbic-acid-derivatives" />;
}
