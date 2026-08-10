import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Myristate — Lithium & Metal Additives — Cosmox Chemicals" },
  description: "High-purity lithium soap thickener for industrial and automotive lubricants, with excellent thermal stability and water resistance.",
};

export default function Page() {
  return <GradePage category="lithium-metal-additives" slug="lithium-myristate" />;
}
