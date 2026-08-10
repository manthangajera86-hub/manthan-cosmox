import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Sustainable & Green Chemistry — Research & Development — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="rnd" slug="sustainable-green-chemistry">
      <div><h4>Key initiatives</h4><ul className="list"><li>Development of eco-friendly, biodegradable and halogen-free chemicals</li><li>Process optimisation to reduce energy consumption and waste</li><li>Integration of renewable raw materials wherever feasible</li><li>Lifecycle assessment from synthesis to disposal</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Supports sustainable industrial practices globally</li><li>Reduces the environmental footprint of chemical manufacturing</li><li>Provides clients with green solutions aligned to ESG initiatives</li></ul></div>
    </TopicPage>
  );
}
