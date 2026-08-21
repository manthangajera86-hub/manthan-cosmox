import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "1-(2-Bromoethoxy)-2-ethoxybenzene — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Bromoalkyl aryl ether intermediate for alkylation steps in API synthesis.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="1-2-bromoethoxy-2-ethoxybenzene" />;
}
