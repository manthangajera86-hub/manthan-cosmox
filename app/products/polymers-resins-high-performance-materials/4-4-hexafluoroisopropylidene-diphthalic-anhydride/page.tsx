import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "4,4′-(Hexafluoroisopropylidene)diphthalic anhydride — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "6FDA: fluorinated dianhydride for soluble, low-dielectric polyimides and gas-separation membranes.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="4-4-hexafluoroisopropylidene-diphthalic-anhydride" />;
}
