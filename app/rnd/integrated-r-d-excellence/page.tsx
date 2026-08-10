import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Integrated R&D Excellence — Research & Development — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="rnd" slug="integrated-r-d-excellence">
      <div><h4>Key advantages</h4><ul className="list"><li>World-class laboratories and analytical infrastructure</li><li>Expert chemists and engineers focused on innovation and quality</li><li>Application-driven research across diverse industrial sectors</li><li>Commitment to sustainability, green chemistry and safe industrial practice</li><li>Rapid development cycles and scalable solutions for global markets</li></ul></div>
    </TopicPage>
  );
}
