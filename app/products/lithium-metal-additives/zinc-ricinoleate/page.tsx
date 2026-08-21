import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Zinc Ricinoleate — Lithium & Metal Additives — Cosmox Chemicals" },
  description: "Zinc soap of ricinoleic acid, used as an odour-absorbing active in personal care and as a processing additive.",
};

export default function Page() {
  return <GradePage category="lithium-metal-additives" slug="zinc-ricinoleate" />;
}
