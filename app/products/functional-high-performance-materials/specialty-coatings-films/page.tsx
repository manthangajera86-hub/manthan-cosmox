import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Specialty Coatings & Films — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "Thin-film chemistries for barrier, release and functional surface properties.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="specialty-coatings-films" />;
}
