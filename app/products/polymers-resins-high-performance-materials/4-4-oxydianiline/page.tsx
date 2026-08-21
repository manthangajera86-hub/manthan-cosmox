import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "4,4′-Oxydianiline — Polymers, Resins & High-Performance Materials — Cosmox Chemicals" },
  description: "ODA: aromatic diamine paired with dianhydrides in classical polyimide synthesis.",
};

export default function Page() {
  return <GradePage category="polymers-resins-high-performance-materials" slug="4-4-oxydianiline" />;
}
