import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Polymers & Engineering — Applications — Cosmox Chemicals" },
  description: "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="polymers-engineering">
      <div><h4>Detailed applications</h4><ul className="list"><li><strong>Processing aids</strong> — facilitate flow and moulding, reducing defects and improving surface finish</li><li><strong>Reinforced plastics</strong> — improve mechanical properties, dimensional stability and heat resistance</li><li><strong>Functional additives</strong> — lubrication, stabilisation and flame-retardant properties in polymer formulations</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>Material compatibility testing and optimisation</li><li>Customised additive formulations</li><li>Batch consistency for industrial-scale production</li></ul></div>
    </TopicPage>
  );
}
