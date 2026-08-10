import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Fluorosilicone Fluids — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "Fuel- and solvent-resistant fluids for sealing and lubrication in aggressive service.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="fluorosilicone-fluids" />;
}
