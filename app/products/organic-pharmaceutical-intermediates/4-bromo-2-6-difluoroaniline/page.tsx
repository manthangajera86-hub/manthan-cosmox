import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "4-Bromo-2,6-difluoroaniline — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Halogenated aniline for coupling chemistry in agrochemical and pharmaceutical manufacture.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="4-bromo-2-6-difluoroaniline" />;
}
