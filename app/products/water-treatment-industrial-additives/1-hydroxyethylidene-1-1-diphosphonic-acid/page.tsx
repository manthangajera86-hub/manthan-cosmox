import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "1-Hydroxyethylidene-1,1-Diphosphonic Acid — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "HEDP: scale and corrosion inhibitor stable against chlorine and oxidising biocides.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="1-hydroxyethylidene-1-1-diphosphonic-acid" />;
}
