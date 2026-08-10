import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Polymers & Engineering Plastics — Industries — Cosmox Chemicals" },
  description: "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="polymers-engineering-plastics">
      <div><h4>Applications</h4><ul className="list"><li>Processing aids for extrusion, injection moulding and compounding</li><li>Flame-retardant additives for PA, PBT, PET and thermoplastic composites</li><li>Reinforcement for thermal, mechanical and dimensional stability</li><li>Functional additives for industrial, automotive and electronic uses</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>Enhanced processability and reduced material defects</li><li>Improved material performance and heat resistance</li><li>Compliance with international fire safety standards</li><li>Halogen-free solutions for reduced environmental impact</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>Material compatibility analysis and optimisation</li><li>Custom additive formulations</li><li>Scale-up support for industrial production</li><li>Formulation guidance and regulatory documentation</li></ul></div>
    </TopicPage>
  );
}
