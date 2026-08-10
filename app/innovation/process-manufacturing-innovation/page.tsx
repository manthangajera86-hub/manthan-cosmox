import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Process & Manufacturing Innovation — Innovation — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="innovation" slug="process-manufacturing-innovation">
      <div><h4>Key initiatives</h4><ul className="list"><li>State-of-the-art automated manufacturing and advanced reactors</li><li>Optimisation of synthesis for higher yield, lower waste and energy efficiency</li><li>Real-time monitoring, AI and analytics integrated into process control</li><li>Scalable production methods for industrial and high-value chemicals</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Consistent, high-quality products at industrial scale</li><li>Improved operational efficiency and reduced production costs</li><li>Support for sustainable and responsible manufacturing</li></ul></div>
    </TopicPage>
  );
}
