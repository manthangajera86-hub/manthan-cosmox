import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Electrolyte Salts (LiPF₆, LiBF₄) — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Conductive salts for lithium-ion cell electrolytes, moisture-controlled throughout packing.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="electrolyte-salts-lipf-libf" />;
}
