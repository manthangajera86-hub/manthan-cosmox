import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Circular Economy & Waste — Sustainability — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="sustainability" slug="circular-economy-waste">
      <div><h4>Key initiatives</h4><ul className="list"><li><strong>Recycling &amp; reuse</strong> — recovery of solvents, water and chemical intermediates</li><li><strong>Eco-friendly packaging</strong> — minimal, recyclable and reusable solutions</li><li><strong>Energy recovery</strong> — capturing and reusing waste energy streams</li><li><strong>Advanced waste treatment</strong> — safe disposal of by-products and sustainable landfill management</li></ul></div>
      <div><h4>Global impact</h4><ul className="list list--check"><li>Significant reduction in environmental pollution</li><li>Conservation of resources and optimised material usage</li><li>Support for global circular economy practice</li></ul></div>
    </TopicPage>
  );
}
