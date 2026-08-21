import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Tolyltriazole — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "Yellow-metal corrosion inhibitor forming a passivating film on copper and brass.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="tolyltriazole" />;
}
