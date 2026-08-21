import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Huntite — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Natural magnesium-calcium carbonate mineral releasing carbon dioxide on heating, for halogen-free compounds and cables.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="huntite" />;
}
