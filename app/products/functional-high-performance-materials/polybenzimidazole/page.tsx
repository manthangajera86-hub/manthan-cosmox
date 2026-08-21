import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polybenzimidazole — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "PBI: the highest-temperature engineering polymer, holding mechanical strength where other thermoplastics soften.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="polybenzimidazole" />;
}
