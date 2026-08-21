import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Ethyl 2-bromopropionate — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Alkylating ester used to introduce the propionate unit in pharmaceutical and agrochemical routes.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="ethyl-2-bromopropionate" />;
}
