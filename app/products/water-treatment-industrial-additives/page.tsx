import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Water Treatment & Industrial Additives — Products — Cosmox Chemicals" },
  description: "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="water-treatment-industrial-additives">
      <div><h4>Applications</h4><ul className="list"><li>Industrial water treatment systems</li><li>Surface treatment and process efficiency</li></ul></div>
    </TopicPage>
  );
}
