import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Hydroxide — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "High-purity precursor for nickel-rich cathode chemistries.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="lithium-hydroxide" />;
}
