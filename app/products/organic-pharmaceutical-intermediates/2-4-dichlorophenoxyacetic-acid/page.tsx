import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2,4-Dichlorophenoxyacetic acid — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Phenoxy acid herbicide active and intermediate, supplied to agrochemical specification.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="2-4-dichlorophenoxyacetic-acid" />;
}
