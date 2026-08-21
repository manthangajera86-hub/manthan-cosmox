import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Carboxymethyl Inulin — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "Biodegradable, plant-derived antiscalant for phosphorus-restricted treatment programmes.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="carboxymethyl-inulin" />;
}
