import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polyimide — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "High-temperature polymer for flexible circuits, films and parts in continuous thermal service.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="polyimide" />;
}
