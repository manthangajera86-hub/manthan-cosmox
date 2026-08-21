import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Ceramide 3 — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Skin-identical lipid restoring barrier function in moisturisers and treatment products.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="ceramide-3" />;
}
