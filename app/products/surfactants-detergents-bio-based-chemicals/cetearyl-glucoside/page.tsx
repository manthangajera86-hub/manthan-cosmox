import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Cetearyl Glucoside — Surfactants, Detergents & Bio-Based Chemicals — Cosmox Chemicals" },
  description: "Sugar-based non-ionic emulsifier for stable oil-in-water creams and lotions.",
};

export default function Page() {
  return <GradePage category="surfactants-detergents-bio-based-chemicals" slug="cetearyl-glucoside" />;
}
