import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Diphenyl ether — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Thermally stable aromatic ether used as a heat-transfer fluid and as an intermediate in fine-chemical synthesis.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="diphenyl-ether" />;
}
