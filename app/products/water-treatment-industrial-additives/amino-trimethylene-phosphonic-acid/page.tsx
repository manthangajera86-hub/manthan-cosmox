import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Amino Trimethylene Phosphonic Acid — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "ATMP: carbonate scale inhibitor and metal-ion chelant for cooling and boiler systems.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="amino-trimethylene-phosphonic-acid" />;
}
