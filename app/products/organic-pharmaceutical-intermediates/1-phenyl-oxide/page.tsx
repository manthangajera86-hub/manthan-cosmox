import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "1-Phenyl Oxide — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Intermediate for pharmaceutical, agrochemical and industrial applications, supplied at controlled purity.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="1-phenyl-oxide" />;
}
