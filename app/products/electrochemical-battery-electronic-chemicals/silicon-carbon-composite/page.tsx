import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Silicon-Carbon Composite — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "High-capacity anode material pairing silicon's capacity with a carbon matrix that buffers expansion.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="silicon-carbon-composite" />;
}
