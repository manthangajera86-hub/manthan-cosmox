import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Pyrrole Orange — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Diketopyrrolopyrrole orange with high opacity and weatherfastness for automotive and industrial finishes.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="pyrrole-orange" />;
}
