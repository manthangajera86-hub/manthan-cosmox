import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Aluminium Hypophosphite — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Halogen-free flame retardant for engineering plastics (PA, PBT, PET), with uniform particle size for predictable dispersion.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="aluminium-hypophosphite" />;
}
