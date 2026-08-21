import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Alpha-Lipoic Acid — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Amphiphilic antioxidant used in metabolic-support supplements and topical formulations.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="alpha-lipoic-acid" />;
}
