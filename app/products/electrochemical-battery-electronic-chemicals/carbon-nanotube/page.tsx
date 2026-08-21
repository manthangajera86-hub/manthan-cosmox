import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Carbon Nanotube — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Conductive additive raising electrode conductivity at a fraction of carbon-black loading.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="carbon-nanotube" />;
}
