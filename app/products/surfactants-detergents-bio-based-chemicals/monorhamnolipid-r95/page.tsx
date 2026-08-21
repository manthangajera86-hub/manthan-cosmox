import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Monorhamnolipid R95 — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Fermentation-derived biosurfactant at 95% monorhamnolipid, readily biodegradable and mild in use.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="monorhamnolipid-r95" />;
}
