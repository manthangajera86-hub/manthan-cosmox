import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Melamine Cyanurate — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Nitrogen-based flame retardant for unfilled polyamides, also serving as a solid lubricant.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="melamine-cyanurate" />;
}
