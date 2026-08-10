import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Calcium Stearate — Lithium & Metal Additives — Cosmox Chemicals" },
  description: "Metal stearate acting as a lubricant, release agent and acid scavenger in plastics processing.",
};

export default function Page() {
  return <GradePage category="lithium-metal-additives" slug="calcium-stearate" />;
}
