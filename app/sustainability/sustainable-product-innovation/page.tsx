import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Sustainable Product Innovation — Sustainability — Cosmox Chemicals" },
};

export default function Page() {
  return (
    <TopicPage family="sustainability" slug="sustainable-product-innovation">
      <div><h4>Key initiatives</h4><ul className="list"><li><strong>Eco-friendly formulations</strong> — halogen-free flame retardants, biodegradable intermediates, low-toxicity additives</li><li><strong>Circular chemistry</strong> — chemicals designed for minimal impact and recycling compatibility</li><li><strong>Lifecycle assessment</strong> — full environmental footprint from sourcing to disposal</li><li><strong>Green chemistry principles</strong> — resource efficiency, safety and renewable feedstocks</li></ul></div>
      <div><h4>Global impact</h4><ul className="list list--check"><li>Safer, environmentally compatible products across industries</li><li>Reduction of hazardous waste and environmental risk</li><li>Support for clients pursuing global sustainability certifications</li></ul></div>
    </TopicPage>
  );
}
