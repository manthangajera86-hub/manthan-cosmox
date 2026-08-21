import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Magnesium Oxysulfate Whisker — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Needle-form reinforcing filler adding stiffness and fire performance to boards and compounds.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="magnesium-oxysulfate-whisker" />;
}
