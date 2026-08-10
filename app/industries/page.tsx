import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import HeroTitle from "@/components/HeroTitle";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Industries — Cosmox Chemicals" },
  description: "Chemical solutions for automotive, polymers, electronics, industrial machinery, coatings, pharmaceutical, construction, energy storage and nutraceutical industries.",
};

export default function IndustriesPage() {
  return (
    <>


    <section className="page-hero bg-page-industries">
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__scrim" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/"><T>Home</T></Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page"><T>Industries</T></span>
        </nav>
        <h1 className="page-hero__title"><HeroTitle light="Industries" bold="We Serve" /></h1>
        <p className="page-hero__lede">High-performance, innovative and environmentally responsible solutions engineered to meet the complex and evolving demands of modern industry.</p>
      </div>
    </section>

    <section className="pad-xs">
      <div className="wrap feature feature--center">
        <p className="lede">Every product undergoes rigorous quality control and is backed by our dedicated R&amp;D and technical teams, ensuring clients receive application-specific guidance and optimised chemical solutions. By combining advanced manufacturing technologies, application-focused research and global export capabilities, Cosmox Chemicals empowers industries to achieve efficiency, safety and sustainable growth.</p>
        <div className="figure figure--wide bg-media-industries" aria-hidden="true"></div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="industries" />
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>Working in one of these sectors?</h2>
            <p>Our technical team can benchmark performance against your current material and recommend a grade.</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--red" href="/contact">Speak to a specialist</Link>
            <Link className="btn btn--outline" href="/applications">See applications</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
