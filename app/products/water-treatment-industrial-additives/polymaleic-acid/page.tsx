import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Polymaleic Acid — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "High-temperature antiscalant for boilers, evaporators and desalination service.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="polymaleic-acid" />;
}
