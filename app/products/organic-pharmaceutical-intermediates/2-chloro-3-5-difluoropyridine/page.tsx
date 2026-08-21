import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2-Chloro-3,5-difluoropyridine — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Halogenated pyridine for cross-coupling and nucleophilic substitution in pharma and agrochemical routes.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="2-chloro-3-5-difluoropyridine" />;
}
