import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2-Phosphonobutane-1,2,4-tricarboxylic acid — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "PBTC: scale and corrosion inhibitor holding up under chlorine and high-temperature duty.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="2-phosphonobutane-1-2-4-tricarboxylic-acid" />;
}
