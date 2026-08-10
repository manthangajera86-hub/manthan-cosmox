import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Iron Oxide Pigments — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Inorganic pigments for durable colour in construction and protective coatings.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="iron-oxide-pigments" />;
}
