import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Industrial Machinery & Equipment — Applications — Cosmox Chemicals" },
  description: "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment",
};

export default function Page() {
  return (
    <TopicPage family="applications" slug="industrial-machinery-equipment">
      <div><h4>Detailed applications</h4><ul className="list"><li>Lubricants and greases that reduce friction, wear and energy consumption</li><li>Intermediates for process and functional chemical applications</li><li>Customised formulations for heavy-duty environments</li></ul></div>
      <div><h4>Technical support</h4><ul className="list"><li>On-site chemical integration guidance</li><li>Batch consistency and quality assurance</li><li>Formulation optimisation for specialised processes</li></ul></div>
    </TopicPage>
  );
}
