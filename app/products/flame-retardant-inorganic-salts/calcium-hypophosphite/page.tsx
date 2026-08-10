import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Calcium Hypophosphite — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Halogen-free additive raising fire resistance in cables and coatings while reducing smoke and toxicity.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="calcium-hypophosphite" />;
}
