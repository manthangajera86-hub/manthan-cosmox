import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Green Tea Extract - EGCG standardized — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Camellia sinensis extract standardised to EGCG content for supplements and cosmetics.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="green-tea-extract-egcg-standardized" />;
}
