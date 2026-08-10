import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Anti-Scalants — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "Threshold inhibitors keeping heat-transfer surfaces clean under hard-water duty.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="anti-scalants" />;
}
