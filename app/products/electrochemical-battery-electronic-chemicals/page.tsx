import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Electrochemical, Battery & Electronic Chemicals — Products — Cosmox Chemicals" },
  description: "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="electrochemical-battery-electronic-chemicals">
      <div><h4>Applications</h4><ul className="list"><li>Energy storage systems</li><li>Electronics and semiconductor manufacturing</li></ul></div>
    </TopicPage>
  );
}
