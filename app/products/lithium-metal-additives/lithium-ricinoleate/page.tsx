import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Ricinoleate — Lithium & Metal Additives — Cosmox Chemicals" },
  description: "Castor-derived lithium soap used as a lubricant and internal release additive in greases and polymer processing.",
};

export default function Page() {
  return <GradePage category="lithium-metal-additives" slug="lithium-ricinoleate" />;
}
