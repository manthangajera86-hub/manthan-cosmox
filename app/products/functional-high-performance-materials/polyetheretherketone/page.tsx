import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polyetheretherketone — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "PEEK: semi-crystalline thermoplastic for metal-replacement parts under load, heat and chemical attack.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="polyetheretherketone" />;
}
