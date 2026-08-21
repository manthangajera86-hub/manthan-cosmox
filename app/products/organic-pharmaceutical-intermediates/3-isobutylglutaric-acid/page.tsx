import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "3-Isobutylglutaric acid — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Branched diacid starting material for amino-acid API routes.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="3-isobutylglutaric-acid" />;
}
