import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polyvinylidene Fluoride — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "PVDF: binder and membrane resin with chemical resistance and piezoelectric behaviour.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="polyvinylidene-fluoride" />;
}
