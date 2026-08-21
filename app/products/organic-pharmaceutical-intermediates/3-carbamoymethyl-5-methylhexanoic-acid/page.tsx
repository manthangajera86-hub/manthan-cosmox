import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "3-Carbamoymethyl-5-methylhexanoic acid — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Racemic carbamoyl acid intermediate for chiral resolution in pharmaceutical synthesis.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="3-carbamoymethyl-5-methylhexanoic-acid" />;
}
