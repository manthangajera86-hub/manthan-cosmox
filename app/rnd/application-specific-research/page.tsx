import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Application-Specific Research — Research & Development — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="rnd" slug="application-specific-research">
      <div><h4>Key initiatives</h4><ul className="list"><li>Collaboration with clients to create custom solutions for industrial applications</li><li>Simulation and testing under real-world conditions for polymers, electronics, automotive and machinery</li><li>Development of advanced chemicals such as 1-Phenyl Oxide and Triazolo Pyridione</li><li>Innovation in flame-retardant and lubrication applications</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Optimised chemical solutions for precise industrial requirements</li><li>Reduced time-to-market for new products and formulations</li><li>Industrial performance and compliance with global standards</li></ul></div>
    </TopicPage>
  );
}
