import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Triazolo Pyridione — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Heterocyclic compound for R&D and industrial synthesis, reproducible batch to batch.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="triazolo-pyridione" />;
}
