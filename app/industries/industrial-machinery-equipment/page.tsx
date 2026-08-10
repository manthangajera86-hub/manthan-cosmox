import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Industrial Machinery & Equipment — Industries — Cosmox Chemicals" },
  description: "Lithium soaps · Organic & pharmaceutical intermediates",
};

export default function Page() {
  return (
    <TopicPage family="industries" slug="industrial-machinery-equipment">
      <div><h4>Applications</h4><ul className="list"><li>High-performance lubricants and greases that reduce friction and wear</li><li>Specialty chemical intermediates for industrial processes</li><li>Custom formulations for rolling mills, compressors and heavy machinery</li></ul></div>
      <div><h4>Benefits</h4><ul className="list"><li>Reduced downtime and maintenance costs</li><li>Improved operational efficiency and energy savings</li><li>Extended machinery life under extreme conditions</li></ul></div>
      <div><h4>Support &amp; insight</h4><ul className="list"><li>On-site guidance for chemical integration</li><li>Batch consistency and quality control</li><li>Critical for Industry 4.0 and automated manufacturing systems</li></ul></div>
    </TopicPage>
  );
}
