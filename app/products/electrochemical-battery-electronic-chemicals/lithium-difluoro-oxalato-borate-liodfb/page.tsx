import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Difluoro(oxalato)borate (LIODFB) — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "Film-forming electrolyte salt improving interface stability and high-temperature cycling.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="lithium-difluoro-oxalato-borate-liodfb" />;
}
