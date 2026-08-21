import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2,2'-Methylenebis(4-chlorophenol) — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "Bisphenolic biocide controlling microbial fouling in industrial water systems.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="2-2-methylenebis-4-chlorophenol" />;
}
