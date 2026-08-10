import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Electronic-Grade Solvents — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Ultra-high-purity solvents with trace-metal specifications for device manufacture.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="electronic-grade-solvents" />;
}
