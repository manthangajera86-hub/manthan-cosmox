import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Aluminum Stearate — Lithium & Metal Additives — Cosmox Chemicals" },
  description: "Gelling and water-repellent additive for paints, inks and industrial coatings.",
};

export default function Page() {
  return <GradePage category="lithium-metal-additives" slug="aluminum-stearate" />;
}
