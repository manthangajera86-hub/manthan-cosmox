import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Hyaluronic Acid Derivatives — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Humectant actives supplied across molecular-weight grades.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="hyaluronic-acid-derivatives" />;
}
