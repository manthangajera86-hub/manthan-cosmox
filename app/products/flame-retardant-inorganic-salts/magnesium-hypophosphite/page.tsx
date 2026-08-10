import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Magnesium Hypophosphite — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Thermally stable hypophosphite for flame-retardant polymer compounds and electrical components.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="magnesium-hypophosphite" />;
}
