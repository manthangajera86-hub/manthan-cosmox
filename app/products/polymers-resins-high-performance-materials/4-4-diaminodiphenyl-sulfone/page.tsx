import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "4,4′-Diaminodiphenyl Sulfone — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "DDS: high-temperature epoxy curing agent for aerospace prepregs and structural composites.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="4-4-diaminodiphenyl-sulfone" />;
}
