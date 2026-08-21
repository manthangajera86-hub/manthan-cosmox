import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Single-Walled Carbon Nanotubes — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "Conductive nanomaterial for transparent electrodes, sensors and battery electrodes.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="single-walled-carbon-nanotubes" />;
}
