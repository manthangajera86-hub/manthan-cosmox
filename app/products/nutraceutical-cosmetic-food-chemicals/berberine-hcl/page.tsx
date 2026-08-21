import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Berberine HCl — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Plant alkaloid supplied as the hydrochloride for metabolic-health supplement formulation.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="berberine-hcl" />;
}
