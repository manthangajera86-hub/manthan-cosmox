import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Glutathione — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Tripeptide antioxidant for supplements, functional foods and skin-brightening formulations.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="glutathione" />;
}
