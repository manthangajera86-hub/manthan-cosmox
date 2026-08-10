import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: { absolute: "Advanced Manufacturing — Capabilities — Cosmox Chemicals" },
  description: "Modern plants with automated systems, advanced reactors and precision instrumentation.",
};

export default function Page() {
  return (
    <TopicPage family="capabilities" slug="advanced-manufacturing">
      <div><h4>Key features</h4><ul className="list"><li><strong>State-of-the-art facilities</strong> — automation, advanced reactors, precision instrumentation</li><li><strong>Multi-scale production</strong> — from small R&amp;D batches to large-scale industrial manufacturing</li><li><strong>Precision process control</strong> — real-time monitoring for consistent quality and yield</li><li><strong>Dedicated divisions</strong> — specialised units for lithium products, hypophosphite salts, flame retardants, organic intermediates and functional chemicals</li></ul></div>
      <div><h4>Impact</h4><ul className="list list--check"><li>Consistent, high-quality products across all industrial applications</li><li>Efficient processes with minimal waste and energy consumption</li><li>Scalable operations to meet diverse global demand</li></ul></div>
    </TopicPage>
  );
}
