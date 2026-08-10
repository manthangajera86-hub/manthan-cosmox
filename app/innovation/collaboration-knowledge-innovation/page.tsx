import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Collaboration & Knowledge Innovation — Innovation — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="innovation" slug="collaboration-knowledge-innovation">
      <div><h4>Key initiatives</h4><ul className="list"><li>Partnerships with academic institutions, industry leaders and clients on joint projects</li><li>Knowledge-sharing programmes, workshops and webinars on emerging technologies</li><li>Open innovation approach to co-develop solutions and accelerate development</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Cutting-edge research with practical industrial application</li><li>Stronger client partnerships and collaborative growth</li><li>A culture of creativity and continuous learning</li></ul></div>
    </TopicPage>
  );
}
