import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Zinc Stannate — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Halogen-free smoke suppressant and char promoter for demanding cable and construction compounds.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="zinc-stannate" />;
}
