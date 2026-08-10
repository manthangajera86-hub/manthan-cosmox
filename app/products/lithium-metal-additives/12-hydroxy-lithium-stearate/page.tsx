import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "12-Hydroxy Lithium Stearate — Lithium & Metal Additives — Cosmox Chemicals" },
  description: "Lithium soap for high-temperature, heavy-duty greases running under sustained mechanical load.",
};

export default function Page() {
  return <GradePage category="lithium-metal-additives" slug="12-hydroxy-lithium-stearate" />;
}
