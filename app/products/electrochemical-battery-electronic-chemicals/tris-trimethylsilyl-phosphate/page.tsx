import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Tris(trimethylsilyl) Phosphate — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Electrolyte additive scavenging acidic species and stabilising the cathode interface in high-voltage cells.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="tris-trimethylsilyl-phosphate" />;
}
