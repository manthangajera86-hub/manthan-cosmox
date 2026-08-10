import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Graphene & Nano Additives — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "Conductive and reinforcing additives for next-generation composites.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="graphene-nano-additives" />;
}
