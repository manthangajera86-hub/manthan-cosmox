import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Hexafluoroisopropylidene Bisphenol — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "Bisphenol AF: fluorinated monomer for fluoroelastomer cure systems and high-performance polymers.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="hexafluoroisopropylidene-bisphenol" />;
}
