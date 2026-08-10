import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Lubrication & Grease — Applications — Cosmox Chemicals" },
  description: "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="lubrication-grease">
      <div><h4>Detailed applications</h4><ul className="list"><li><strong>Automotive greases</strong> — high-temperature stability for engines, bearings, chassis and transmission components; reduces wear, friction and energy loss</li><li><strong>Industrial machinery lubricants</strong> — lithium-based greases improve efficiency in rolling mills, compressors and heavy machinery</li><li><strong>Polymer &amp; plastics additives</strong> — processing aids that improve melt flow, material stability and product consistency</li><li><strong>Industrial formulations</strong> — custom greases for aerospace, precision engineering and specialised manufacturing</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>Optimised formulations and performance guidance</li><li>Compatibility testing with machinery and polymer systems</li><li>Performance benchmarking and batch consistency assurance</li></ul></div>
    </TopicPage>
  );
}
