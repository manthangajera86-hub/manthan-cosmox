import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Zinc Hypophosphite — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Hypophosphite salt combining flame retardancy with heat-stabilising action in polyamide and polyester compounds.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="zinc-hypophosphite" />;
}
