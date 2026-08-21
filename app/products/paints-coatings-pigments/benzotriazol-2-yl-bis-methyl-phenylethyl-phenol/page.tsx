import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "2-(2H-Benzotriazol-2-yl)-4,6-bis(1-methyl-1-phenylethyl)phenol — Paints, Coatings & Pigments — Cosmox Chemicals" },
  description: "Benzotriazole UV absorber protecting coatings and polymers from photo-degradation and colour shift.",
};

export default function Page() {
  return <GradePage category="paints-coatings-pigments" slug="benzotriazol-2-yl-bis-methyl-phenylethyl-phenol" />;
}
