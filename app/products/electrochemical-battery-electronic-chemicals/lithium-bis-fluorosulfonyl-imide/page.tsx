import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Bis(fluorosulfonyl)imide — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "LiFSI: conductive lithium salt raising cycle life and low-temperature performance in lithium-ion electrolytes.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="lithium-bis-fluorosulfonyl-imide" />;
}
