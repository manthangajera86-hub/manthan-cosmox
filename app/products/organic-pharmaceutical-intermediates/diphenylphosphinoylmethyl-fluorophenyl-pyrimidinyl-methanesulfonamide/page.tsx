import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "N-[5-(Diphenylphosphinoylmethyl)-4-(4-fluorophenyl)-6-isopropylpyrimidin-2-yl]-N-methylmethanesulfonamide — Organic & Pharmaceutical Intermediates — Cosmox Chemicals" },
  description: "Fluorophenyl-pyrimidine phosphine oxide intermediate for API manufacture, controlled for purity and isomer content.",
};

export default function Page() {
  return <GradePage category="organic-pharmaceutical-intermediates" slug="diphenylphosphinoylmethyl-fluorophenyl-pyrimidinyl-methanesulfonamide" />;
}
