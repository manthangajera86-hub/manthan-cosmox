import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Integrated Innovation Advantage — Innovation — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="innovation" slug="integrated-innovation-advantage">
      <div><h4>What underpins it</h4><ul className="list"><li><strong>World-class laboratories</strong> — advanced facilities for research, development and testing</li><li><strong>Expert teams</strong> — chemists, engineers and industrial specialists</li><li><strong>Application-focused solutions</strong> — tailored to diverse requirements and global standards</li><li><strong>Sustainability integration</strong> — eco-friendly, low-toxicity, responsible innovation</li><li><strong>Global scalability</strong> — designed for industrial-scale production and international markets</li></ul></div>
    </TopicPage>
  );
}
