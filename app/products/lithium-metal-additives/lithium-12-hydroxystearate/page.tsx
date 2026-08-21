import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium 12-Hydroxystearate — Lithium & Metal Additives — Cosmox Chemicals" },
  description: "The standard lithium soap thickener for multipurpose greases, holding structure and drop point under sustained load and heat.",
};

export default function Page() {
  return <GradePage category="lithium-metal-additives" slug="lithium-12-hydroxystearate" />;
}
