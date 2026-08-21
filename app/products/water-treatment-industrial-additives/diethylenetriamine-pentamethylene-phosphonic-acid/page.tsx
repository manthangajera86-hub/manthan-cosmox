import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Diethylenetriamine Pentamethylene Phosphonic Acid — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "DTPMP: high-efficiency chelant and threshold inhibitor for hard, high-alkalinity waters.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="diethylenetriamine-pentamethylene-phosphonic-acid" />;
}
