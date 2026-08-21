import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import BannerCycle from "@/components/BannerCycle";
import { bannerFrames } from "@/lib/topics";
import HeroTitle from "@/components/HeroTitle";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Industries — Cosmox Chemicals" },
  description: "Chemical solutions for automotive, polymers, electronics, industrial machinery, coatings, pharmaceutical, construction, energy storage and nutraceutical industries.",
};

export default function IndustriesPage() {
  return (
    <>


    {/* The banner cycles this family’s own topics — the picture and the
        line naming it — rather than standing on one still. See
        components/BannerCycle.tsx; the frames are lib/topics.ts’ order. */}
    <BannerCycle frames={bannerFrames("industries")}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/"><T>Home</T></Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page"><T>Industries</T></span>
      </nav>
      <h1 className="page-hero__title"><HeroTitle light="Industries" bold="We Serve" /></h1>
      <p className="page-hero__lede">High-performance, innovative and environmentally responsible solutions engineered to meet the complex and evolving demands of modern industry.</p>
    </BannerCycle>

    <section className="pad-xs">
      <div className="wrap">
        {/* the page's opening panel: the copy and the photograph are two cells
            of one box, so the picture is exactly as tall as the paragraph
            beside it and the panel is full whatever the copy runs to */}
        <div className="pintro rise">
          <div className="pintro__copy">
            <p className="pintro__lede">Every product undergoes rigorous quality control and is backed by our dedicated R&amp;D and technical teams, ensuring clients receive application-specific guidance and optimised chemical solutions. By combining advanced manufacturing technologies, application-focused research and global export capabilities, Cosmox Chemicals empowers industries to achieve efficiency, safety and sustainable growth.</p>
          </div>
          <div className="pintro__media bg-media-industries">
            <span className="pintro__tag"><T>Industries</T></span>
          </div>
        </div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="industries" />
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="cta cta--night rise">
          <div>
            <h2>Working in one of these sectors?</h2>
            <p>Our technical team can benchmark performance against your current material and recommend a grade.</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--gold" href="/contact">Speak to a specialist</Link>
            <Link className="btn btn--outline" href="/applications">See applications</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
