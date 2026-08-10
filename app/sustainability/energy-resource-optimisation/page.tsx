import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Energy & Resource Optimisation — Sustainability — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="sustainability" slug="energy-resource-optimisation">
      <div><h4>Key initiatives</h4><ul className="list"><li><strong>Renewable energy integration</strong> — solar, wind and other renewable sources in manufacturing</li><li><strong>Energy-efficient manufacturing</strong> — smart process design, automation and energy monitoring</li><li><strong>Raw material efficiency</strong> — optimised reaction yields and responsible sourcing</li><li><strong>Sustainable supply chain</strong> — suppliers meeting rigorous ESG and environmental standards</li></ul></div>
      <div><h4>Global impact</h4><ul className="list list--check"><li>Reduced energy consumption and operational costs</li><li>Responsible, traceable and ethical supply chains</li><li>Significant reduction in resource impact across the value chain</li></ul></div>
    </TopicPage>
  );
}
