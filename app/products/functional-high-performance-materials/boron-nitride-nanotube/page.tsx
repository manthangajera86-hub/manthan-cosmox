import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Boron Nitride Nanotube — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "Thermally conductive, electrically insulating nanotube for advanced composites and thermal management.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="boron-nitride-nanotube" />;
}
