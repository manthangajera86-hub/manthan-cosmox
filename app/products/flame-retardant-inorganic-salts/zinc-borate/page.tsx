import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Zinc Borate — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Multi-functional flame retardant, smoke suppressant and anti-tracking additive for polymers and coatings.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="zinc-borate" />;
}
