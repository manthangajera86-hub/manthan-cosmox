import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "(R)-(-)-3-Carbamoymethyl-5-methylhexanoic acid — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Single-enantiomer carbamoyl acid intermediate supplied to a defined optical purity for chiral API routes.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="r-3-carbamoymethyl-5-methylhexanoic-acid" />;
}
