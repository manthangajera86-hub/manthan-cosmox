import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Lithium Bis(trifluoromethanesulfonyl)imide — Electrochemical, Battery & Electronic Chemicals — Cosmox Chemicals" },
  description: "LiTFSI: thermally stable imide salt for electrolytes, ionic liquids and antistatic formulations.",
};

export default function Page() {
  return <GradePage category="electrochemical-battery-electronic-chemicals" slug="lithium-bis-trifluoromethanesulfonyl-imide" />;
}
