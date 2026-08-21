import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Expandable Graphite — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Intercalated graphite that expands into an insulating char, for intumescent seals, foams and coatings.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="expandable-graphite" />;
}
