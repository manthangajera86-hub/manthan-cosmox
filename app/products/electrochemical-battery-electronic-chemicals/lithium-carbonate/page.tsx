import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Carbonate — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Battery-grade lithium salt for cathode and electrolyte manufacture.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="lithium-carbonate" />;
}
