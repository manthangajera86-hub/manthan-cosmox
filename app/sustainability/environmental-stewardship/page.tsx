import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Environmental Stewardship — Sustainability — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="sustainability" slug="environmental-stewardship">
      <div><h4>Key initiatives</h4><ul className="list"><li><strong>Carbon neutrality roadmap</strong> — energy-efficient operations and renewable energy to minimise greenhouse gas emissions</li><li><strong>Advanced waste minimisation</strong> — zero-waste initiatives, solvent recovery and responsible by-product management</li><li><strong>Water sustainability</strong> — closed-loop systems, wastewater treatment and recycling</li><li><strong>Air &amp; emission control</strong> — advanced filtration, scrubbers and monitoring systems</li></ul></div>
      <div><h4>Global impact</h4><ul className="list list--check"><li>Reduced carbon footprint across operations</li><li>Compliance with ISO 14001, REACH and international environmental standards</li><li>Continuous improvement programmes ensuring environmental excellence</li></ul></div>
    </TopicPage>
  );
}
