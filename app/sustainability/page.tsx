import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import BannerCycle from "@/components/BannerCycle";
import { bannerFrames } from "@/lib/topics";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Sustainability — Cosmox Chemicals" },
  description: "Environmental stewardship, sustainable product innovation, resource optimisation, health and safety, and circular economy practice across our value chain.",
};

export default function SustainabilityPage() {
  return (
    <>


    {/* The banner cycles this family’s own topics — the picture and the
        line naming it — rather than standing on one still. See
        components/BannerCycle.tsx; the frames are lib/topics.ts’ order. */}
    <BannerCycle frames={bannerFrames("sustainability")}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/"><T>Home</T></Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page"><T>Sustainability</T></span>
      </nav>
      <h1 className="page-hero__title page-hero__title--solo"><b><T>Sustainability</T></b></h1>
      <p className="page-hero__lede">A strategic pillar and a core value — integrated across the entire value chain, from raw material sourcing through manufacturing, R&amp;D, packaging, logistics and global distribution.</p>
    </BannerCycle>

    <section className="pad-xs">
      <div className="wrap">
        {/* the page's opening panel: the copy and the photograph are two cells
            of one box, so the picture is exactly as tall as the paragraph
            beside it and the panel is full whatever the copy runs to */}
        <div className="pintro rise">
          <div className="pintro__copy">
            <p className="pintro__lede">As a manufacturer and exporter of chemical solutions, we are committed to transforming the industry through responsible practices, innovation and environmental stewardship — ensuring products, processes and partnerships contribute to a sustainable, safe and prosperous future for industries, communities and the planet.</p>
          </div>
          <div className="pintro__media bg-app-09-energy">
            <span className="pintro__tag"><T>Sustainability</T></span>
          </div>
        </div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="sustainability" />
      </div>
    </section>

    <section className="pad bg-night">
      <div className="wrap wrap--narrow center rise">
        <span className="eyebrow">Our commitment</span>
        <h2>Building a sustainable future for the chemical industry</h2>
        <p className="lede">By integrating innovation, operational excellence and environmental responsibility, our sustainability programmes drive global impact, ensure long-term growth and position Cosmox Chemicals as a leader in responsible chemical manufacturing and export.</p>
      </div>
    </section>
    </>
  );
}
