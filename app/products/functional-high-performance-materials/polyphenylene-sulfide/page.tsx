import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polyphenylene Sulfide — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "PPS: dimensionally stable engineering thermoplastic for under-bonnet and electrical parts.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="polyphenylene-sulfide" />;
}
