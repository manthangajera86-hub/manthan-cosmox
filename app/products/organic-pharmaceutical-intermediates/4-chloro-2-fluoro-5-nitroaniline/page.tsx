import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "4-Chloro-2-fluoro-5-nitroaniline — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Substituted nitroaniline intermediate for heterocyclic, dye and crop-protection chemistry.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="4-chloro-2-fluoro-5-nitroaniline" />;
}
