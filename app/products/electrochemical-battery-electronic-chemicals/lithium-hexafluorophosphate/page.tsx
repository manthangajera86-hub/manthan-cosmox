import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Hexafluorophosphate — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "LiPF6: the standard lithium-ion conducting salt, moisture-controlled throughout packing.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="lithium-hexafluorophosphate" />;
}
