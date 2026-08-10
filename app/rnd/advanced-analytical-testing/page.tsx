import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Advanced Analytical & Testing — Research & Development — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="rnd" slug="advanced-analytical-testing">
      <div><h4>Key initiatives</h4><ul className="list"><li>Cutting-edge instruments for chemical characterisation, purity assessment and performance evaluation</li><li>Comprehensive protocols for stability, reactivity, thermal performance and flame retardancy</li><li>Continuous quality monitoring at laboratory and production scale</li><li>Predictive analytics for process optimisation and faster development</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Precise, reliable and consistent product performance</li><li>Rapid troubleshooting and quality assurance</li><li>Data-driven innovation for complex industrial applications</li></ul></div>
    </TopicPage>
  );
}
