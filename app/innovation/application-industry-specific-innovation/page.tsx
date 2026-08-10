import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Application & Industry-Specific Innovation — Innovation — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="innovation" slug="application-industry-specific-innovation">
      <div><h4>Key initiatives</h4><ul className="list"><li>Tailored solutions for automotive, electronics, machinery, coatings, energy and R&amp;D sectors</li><li>Simulation and testing under real-world industrial conditions</li><li>High-purity intermediates such as 1-Phenyl Oxide and Triazolo Pyridione</li><li>Continuous improvement programmes for performance, safety and compliance</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Optimised processes for maximum industrial efficiency</li><li>Reduced time-to-market for new formulations</li><li>Client-specific innovations that create competitive advantage</li></ul></div>
    </TopicPage>
  );
}
