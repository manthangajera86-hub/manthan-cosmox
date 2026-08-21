import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Tris(trimethylsilyl) Borate — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Electrolyte additive trapping fluoride species and protecting high-nickel cathodes.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="tris-trimethylsilyl-borate" />;
}
