import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Fluoroethylene Carbonate (FEC) — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Film-forming solvent additive central to silicon-anode cycling stability.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="fluoroethylene-carbonate-fec" />;
}
