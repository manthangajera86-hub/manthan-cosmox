import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import BannerCycle from "@/components/BannerCycle";
import { bannerFrames } from "@/lib/topics";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Innovation — Cosmox Chemicals" },
  description: "Product, process, application, sustainable and collaborative innovation across the Cosmox Chemicals portfolio.",
};

export default function InnovationPage() {
  return (
    <>


    {/* The banner cycles this family’s own topics — the picture and the
        line naming it — rather than standing on one still. See
        components/BannerCycle.tsx; the frames are lib/topics.ts’ order. */}
    <BannerCycle frames={bannerFrames("innovation")}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/"><T>Home</T></Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page"><T>Innovation</T></span>
      </nav>
      <h1 className="page-hero__title page-hero__title--solo"><b><T>Innovation</T></b></h1>
      <p className="page-hero__lede">Technological advancement, creative problem-solving and sustainability principles integrated into every aspect of our operations.</p>
    </BannerCycle>

    <section className="pad-xs">
      <div className="wrap">
        {/* the page's opening panel: the copy and the photograph are two cells
            of one box, so the picture is exactly as tall as the paragraph
            beside it and the panel is full whatever the copy runs to */}
        <div className="pintro rise">
          <div className="pintro__copy">
            <p className="pintro__lede">Our commitment to innovation enables us to enhance industrial performance, provide sustainable solutions and address complex challenges across automotive, polymers, electronics, industrial machinery, pharmaceuticals, agrochemicals, coatings, energy storage and research-driven industries.</p>
          </div>
          <div className="pintro__media bg-media-capabilities">
            <span className="pintro__tag"><T>Innovation</T></span>
          </div>
        </div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="innovation" />
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        {/* the same closing panel every topic page carries, so a family index
            ends where the pages under it end */}
        <div className="cta cta--night rise">
          <div>
            <h2><T>Talk to our technical team</T></h2>
            <p><T>Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.</T></p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--gold" href="/contact"><T>Start a conversation</T></Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
