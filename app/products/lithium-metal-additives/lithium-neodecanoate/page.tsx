import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Neodecanoate — Lithium & Metal Additives — Cosmox Chemicals" },
  description: "Oil-soluble branched-chain lithium carboxylate for grease formulation and as a metal-carboxylate catalyst in coatings.",
};

export default function Page() {
  return <GradePage category="lithium-metal-additives" slug="lithium-neodecanoate" />;
}
