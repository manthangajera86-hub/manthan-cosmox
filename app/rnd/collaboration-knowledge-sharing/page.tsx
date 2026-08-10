import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Collaboration & Knowledge Sharing — Research & Development — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="rnd" slug="collaboration-knowledge-sharing">
      <div><h4>Key initiatives</h4><ul className="list"><li>Partnerships with academic institutions, industrial research centres and clients</li><li>Knowledge transfer programmes to implement advanced chemical solutions</li><li>Workshops, seminars and webinars on emerging trends and sustainable chemistry</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Fosters a culture of innovation and continuous learning</li><li>Provides clients with actionable insights and cutting-edge solutions</li><li>Strengthens our position as a leader in chemical research</li></ul></div>
    </TopicPage>
  );
}
