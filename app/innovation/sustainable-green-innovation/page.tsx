import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Sustainable & Green Innovation — Innovation — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="innovation" slug="sustainable-green-innovation">
      <div><h4>Key initiatives</h4><ul className="list"><li>Eco-friendly, biodegradable and low-toxicity chemicals</li><li>Process innovations reducing energy consumption, waste and carbon footprint</li><li>Renewable raw materials and circular economy principles</li><li>Lifecycle assessment and environmental impact analysis for all products</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Environmentally responsible solutions for global industries</li><li>Compliance with ESG standards and sustainability certifications</li><li>Promotes a sustainable future for the chemical sector</li></ul></div>
    </TopicPage>
  );
}
