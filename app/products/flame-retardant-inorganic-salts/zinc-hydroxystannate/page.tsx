import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Zinc Hydroxystannate — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Smoke suppressant and flame-retardant synergist for PVC and other halogenated polymer systems.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="zinc-hydroxystannate" />;
}
