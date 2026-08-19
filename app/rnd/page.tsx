import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import HeroTitle from "@/components/HeroTitle";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Research & Development — Cosmox Chemicals" },
  description: "Our R&D division develops new intermediates, optimises formulations and delivers application-specific innovation from state-of-the-art laboratories.",
};

export default function RndPage() {
  return (
    <>


    <section className="page-hero bg-page-rnd">
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__scrim" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/"><T>Home</T></Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page"><T>Research &amp; development</T></span>
        </nav>
        <h1 className="page-hero__title"><HeroTitle light="Research &amp;" bold="Development" /></h1>
        <p className="page-hero__lede">The cornerstone of our innovation, quality and industrial leadership — developing new chemical solutions, optimising existing formulations and delivering application-specific innovation.</p>
      </div>
    </section>

    <section className="pad-xs">
      <div className="wrap feature feature--center">
        <p className="lede">Equipped with state-of-the-art laboratories, advanced analytical instruments and cutting-edge synthesis capabilities, our R&amp;D division keeps Cosmox Chemicals at the forefront of the global chemical industry. We focus on innovative, sustainable, safe and performance-driven solutions across automotive, polymers, electronics, pharmaceuticals, agrochemicals, coatings and industrial applications.</p>
        <div className="figure figure--wide bg-media-rnd" aria-hidden="true"></div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="rnd" />
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>Collaborate with our R&amp;D team</h2>
            <p>Joint development, custom synthesis and application testing — from first concept to validated commercial supply.</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--gold" href="/contact">Propose a project</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
