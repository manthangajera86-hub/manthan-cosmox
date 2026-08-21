import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Aluminium Diethyl Phosphinate — Flame-Retardant & Inorganic Salts — Cosmox Chemicals" },
  description: "Halogen-free phosphinate flame retardant for glass-filled PA, PBT and PET, effective at low loadings.",
};

export default function Page() {
  return <GradePage category="flame-retardant-inorganic-salts" slug="aluminium-diethyl-phosphinate" />;
}
