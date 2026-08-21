import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Melamine Polyphosphate — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Nitrogen-phosphorus synergist for intumescent systems and engineering-plastic flame-retardant packages.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="melamine-polyphosphate" />;
}
