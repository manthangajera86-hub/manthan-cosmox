import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Integrated Sustainability Excellence — Sustainability — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="sustainability" slug="integrated-sustainability-excellence">
      <div><h4>Key advantages</h4><ul className="list"><li>World-class environmental management and compliance</li><li>Sustainable and safe product innovations</li><li>Efficient energy, water and resource utilisation</li><li>Ethical, socially responsible and transparent operations</li><li>Global export-ready solutions aligned with ESG and sustainability standards</li></ul></div>
    </TopicPage>
  );
}
