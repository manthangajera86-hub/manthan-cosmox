import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Sustainability Integration — Capabilities — Cosmox Chemicals" },
  description: "Environmental responsibility built into how we produce, not bolted on afterwards.",
};

export default function Page() {
  return (
    <TopicPage family="capabilities" slug="sustainability-integration">
      <div><h4>Key features</h4><ul className="list"><li>Eco-friendly production processes and waste minimisation</li><li>Energy- and water-efficient manufacturing practices</li><li>Development of low-toxicity, recyclable and sustainable products</li><li>Adoption of circular economy principles in operations</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Reduced environmental footprint aligned with global sustainability goals</li><li>Environmentally responsible chemical solutions for clients</li><li>Recognition as a leader in sustainable chemical manufacturing</li></ul></div>
    </TopicPage>
  );
}
