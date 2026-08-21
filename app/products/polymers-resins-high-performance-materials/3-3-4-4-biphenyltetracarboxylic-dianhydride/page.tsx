import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "3,3′,4,4′-Biphenyltetracarboxylic dianhydride — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "BPDA: rigid dianhydride for low-expansion polyimide films and coatings.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="3-3-4-4-biphenyltetracarboxylic-dianhydride" />;
}
