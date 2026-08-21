import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Astaxanthin — Nutraceutical, Cosmetic & Food Chemicals — Cosmox Chemicals" },
  description: "Carotenoid antioxidant for supplements, functional foods and cosmetic formulation.",
};

export default function Page() {
  return <GradePage category="nutraceutical-cosmetic-food-chemicals" slug="astaxanthin" />;
}
