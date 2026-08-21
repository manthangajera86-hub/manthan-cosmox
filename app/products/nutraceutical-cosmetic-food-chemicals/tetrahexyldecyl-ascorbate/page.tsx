import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Tetrahexyldecyl Ascorbate — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Oil-soluble, stable vitamin C ester for brightening and antioxidant skincare.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="tetrahexyldecyl-ascorbate" />;
}
