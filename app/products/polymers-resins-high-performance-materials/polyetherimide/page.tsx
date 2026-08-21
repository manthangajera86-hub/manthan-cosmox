import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polyetherimide — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "PEI: amorphous high-heat thermoplastic with inherent flame retardance and dimensional stability.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="polyetherimide" />;
}
