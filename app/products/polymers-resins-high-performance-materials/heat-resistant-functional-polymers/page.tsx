import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Heat-Resistant Functional Polymers — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "Grades engineered to hold mechanical properties at elevated service temperatures.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="heat-resistant-functional-polymers" />;
}
