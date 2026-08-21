import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Lanthanum Zirconium Oxide — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "LLZO garnet solid electrolyte for solid-state lithium battery development.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="lithium-lanthanum-zirconium-oxide" />;
}
