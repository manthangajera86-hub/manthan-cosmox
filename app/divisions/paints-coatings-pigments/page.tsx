import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Paints, Coatings & Pigments — Business Units — Cosmox Chemicals" },
  description: "High-value pigments, coatings intermediates and additive solutions.",
};

export default function Page() {
  return (
    <TopicPage family="divisions" slug="paints-coatings-pigments">
      <div><h4>Products</h4><ul className="list"><li>Pyrrole Orange</li><li>Pigment Red 202</li><li>Quinacridone Violet 19</li><li>Quinacridone Magenta</li><li>Benzimidazolone Yellow 180</li><li>Bismuth Vanadate Yellow</li><li>2-(2H-Benzotriazol-2-yl)-4,6-bis(1-methyl-1-phenylethyl)phenol</li><li>HALS-944</li><li>Pigment Violet 23</li><li>Pigment Red 264</li></ul></div>
      <div><h4>Applications</h4><ul className="list"><li>Industrial and decorative coatings</li><li>Automotive and protective coatings</li><li>Specialty industrial applications</li></ul></div>
      <div><h4>Capabilities</h4><ul className="list"><li>Custom colour formulations</li><li>Optimised pigment dispersion</li><li>Consistent quality control</li></ul></div>
    </TopicPage>
  );
}
