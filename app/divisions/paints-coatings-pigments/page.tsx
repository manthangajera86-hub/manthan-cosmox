import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Paints, Coatings & Pigments — Business Units — Cosmox Chemicals" },
  description: "High-value pigments, coatings intermediates and additive solutions.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="paints-coatings-pigments">
      <div><h4>Products</h4><ul className="list"><li>Organic pigments (Quinacridone, Phthalocyanine Blue)</li><li>Inorganic pigments (Iron Oxides, Titanium Dioxide)</li><li>Coating additives (UV stabilisers, dispersants)</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Industrial and decorative coatings</li><li>Automotive and protective coatings</li><li>Specialty industrial applications</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Custom colour formulations</li><li>Optimised pigment dispersion</li><li>Consistent quality control</li></ul></div>
    </TopicPage>
  );
}
