import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Paints, Coatings & Pigments — Products — Cosmox Chemicals" },
  description: "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.",
};

export default function Page() {
  return (
    <TopicPage family="products" slug="paints-coatings-pigments">
      <div><h4>Applications</h4><ul className="list"><li>Industrial and decorative coatings</li><li>Automotive and protective coatings</li></ul></div>
    </TopicPage>
  );
}
