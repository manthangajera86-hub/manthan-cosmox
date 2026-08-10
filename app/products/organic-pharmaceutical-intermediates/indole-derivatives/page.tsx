import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Indole Derivatives — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "High-purity heterocyclics for pharmaceutical research and commercial-scale production.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="indole-derivatives" />;
}
