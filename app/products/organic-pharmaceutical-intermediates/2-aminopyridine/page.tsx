import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2-Aminopyridine — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Versatile intermediate for drug synthesis and fine-chemical manufacture.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="2-aminopyridine" />;
}
