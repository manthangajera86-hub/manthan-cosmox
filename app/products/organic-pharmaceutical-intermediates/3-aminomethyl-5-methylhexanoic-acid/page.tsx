import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "3-(Aminomethyl)-5-methylhexanoic acid — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Branched-chain amino acid intermediate for pharmaceutical manufacture.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="3-aminomethyl-5-methylhexanoic-acid" />;
}
