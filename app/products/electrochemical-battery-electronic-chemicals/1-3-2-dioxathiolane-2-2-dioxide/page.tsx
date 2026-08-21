import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "1,3,2-Dioxathiolane-2,2-dioxide — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Cyclic sulfate additive forming a stable interface film and lowering cell impedance.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="1-3-2-dioxathiolane-2-2-dioxide" />;
}
