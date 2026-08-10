import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "PTFE & Fluoropolymer Intermediates — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "Low-friction, chemically inert materials for demanding industrial environments.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="ptfe-fluoropolymer-intermediates" />;
}
