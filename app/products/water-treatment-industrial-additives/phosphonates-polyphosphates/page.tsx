import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Phosphonates & Polyphosphates — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "Scale control for cooling towers, boilers and process water systems.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="phosphonates-polyphosphates" />;
}
