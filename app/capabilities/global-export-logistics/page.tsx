import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Global Export & Logistics — Capabilities — Cosmox Chemicals" },
  description: "Compliant packaging, documentation and a reliable worldwide shipping network.",
};

export default function Page() {
  return (
    <TopicPage family="capabilities" slug="global-export-logistics">
      <div><h4>Key features</h4><ul className="list"><li><strong>Worldwide export readiness</strong> — compliant packaging, documentation and shipping</li><li><strong>Custom packaging</strong> — for bulk, industrial or sensitive shipments</li><li><strong>Reliable logistics network</strong> — partnerships with leading providers for timely, safe delivery</li><li><strong>Regulatory assistance</strong> — support for international chemical regulations and customs</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Seamless global supply chain management</li><li>Safe and timely delivery worldwide</li><li>Strong international market access</li></ul></div>
    </TopicPage>
  );
}
