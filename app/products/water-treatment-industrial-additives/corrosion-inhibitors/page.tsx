import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Corrosion Inhibitors — Water Treatment & Industrial Additives — Cosmox Chemicals" },
  description: "Filming and passivating chemistries protecting carbon steel and mixed-metallurgy loops.",
};

export default function Page() {
  return <GradePage category="water-treatment-industrial-additives" slug="corrosion-inhibitors" />;
}
