import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polyether Ketone Ketone — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "PEKK: high-temperature PAEK with a tunable melt window for composites and additive manufacture.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="polyether-ketone-ketone" />;
}
