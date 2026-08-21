import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Methyl 2-[(3S)-3-[3-[(1E)-2-(7-chloro-2-quinolinyl)ethenyl]phenyl]-3-hydroxypropyl]benzoate — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Chiral quinoline benzoate ester intermediate for API synthesis, supplied with defined stereochemistry.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="methyl-3s-3-hydroxypropyl-quinolinyl-benzoate" />;
}
