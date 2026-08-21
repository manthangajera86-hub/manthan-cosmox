import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2,3-Dichlorobenzoyl chloride — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Reactive acyl chloride for amide and ester formation in pharmaceutical and agrochemical routes.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="2-3-dichlorobenzoyl-chloride" />;
}
