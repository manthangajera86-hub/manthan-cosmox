import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Pyromellitic Dianhydride — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "PMDA: the classical dianhydride for thermally stable polyimides, epoxies and curing agents.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="pyromellitic-dianhydride" />;
}
