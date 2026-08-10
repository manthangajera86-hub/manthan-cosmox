import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polyurethane & Polyamide Intermediates — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "Intermediates for flexible and rigid systems across coatings, adhesives and mouldings.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="polyurethane-polyamide-intermediates" />;
}
