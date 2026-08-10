import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "TMAH (Tetramethylammonium Hydroxide) — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Semiconductor-grade developer and etchant for photolithography.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="tmah-tetramethylammonium-hydroxide" />;
}
