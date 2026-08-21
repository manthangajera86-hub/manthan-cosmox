import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Toluene-2,5-diamine sulfate — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Aromatic diamine sulfate for oxidative hair-colour and dye intermediate manufacture.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="toluene-2-5-diamine-sulfate" />;
}
