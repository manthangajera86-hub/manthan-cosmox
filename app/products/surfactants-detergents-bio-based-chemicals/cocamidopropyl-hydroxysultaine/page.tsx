import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Cocamidopropyl Hydroxysultaine — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Amphoteric surfactant boosting foam and viscosity, and tolerant of high electrolyte loads.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="cocamidopropyl-hydroxysultaine" />;
}
