import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Oleyl Imidazoline — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "Filming amine corrosion inhibitor for carbon steel in oilfield and process water.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="oleyl-imidazoline" />;
}
