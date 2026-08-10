import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Epoxy & Phenolic Resins — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "Structural resins for adhesives, composites and protective coatings.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="epoxy-phenolic-resins" />;
}
