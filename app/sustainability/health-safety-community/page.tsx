import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Health, Safety & Community — Sustainability — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="sustainability" slug="health-safety-community">
      <div><h4>Key initiatives</h4><ul className="list"><li><strong>Employee safety excellence</strong> — comprehensive training, PPE programmes and process safety management</li><li><strong>Operational safety</strong> — hazard analysis, continuous monitoring, ISO 45001 and OSHA adherence</li><li><strong>Community engagement</strong> — supporting local education, healthcare and infrastructure</li><li><strong>Ethical business practice</strong> — transparency, integrity and global ESG principles</li></ul></div>
      <div><h4>Global impact</h4><ul className="list list--check"><li>No compromise on employee, community and stakeholder safety</li><li>Enhanced corporate responsibility and societal trust</li><li>Contribution to the UN Sustainable Development Goals</li></ul></div>
    </TopicPage>
  );
}
