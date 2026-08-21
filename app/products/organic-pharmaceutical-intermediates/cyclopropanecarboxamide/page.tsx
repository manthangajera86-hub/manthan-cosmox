import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Cyclopropanecarboxamide — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Strained-ring amide building block for pharmaceutical and agrochemical synthesis.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="cyclopropanecarboxamide" />;
}
