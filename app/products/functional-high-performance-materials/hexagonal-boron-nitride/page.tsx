import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Hexagonal Boron Nitride — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "Lubricious, thermally conductive ceramic powder for thermal management and release coatings.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="hexagonal-boron-nitride" />;
}
