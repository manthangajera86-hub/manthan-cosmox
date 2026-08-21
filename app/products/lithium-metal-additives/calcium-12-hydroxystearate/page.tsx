import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Calcium 12-Hydroxystearate — Lithium & Metal Additives — Cosmox Chemicals" },
  description: "Calcium soap thickener for water-resistant greases, and a lubricant and acid scavenger in plastics processing.",
};

export default function Page() {
  return <GradePage category="lithium-metal-additives" slug="calcium-12-hydroxystearate" />;
}
