import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Plant-Derived Surfactants — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Bio-based wetting agents for greener cleaning and coating formulations.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="plant-derived-surfactants" />;
}
