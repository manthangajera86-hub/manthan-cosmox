import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Perfluoropolyether — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "Chemically inert PFPE fluid for vacuum, oxygen-service and extreme-temperature lubrication.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="perfluoropolyether" />;
}
