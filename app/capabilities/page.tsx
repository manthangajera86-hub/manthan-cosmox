import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import BannerCycle from "@/components/BannerCycle";
import { bannerFrames } from "@/lib/topics";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Capabilities — Cosmox Chemicals" },
  description: "Advanced manufacturing, application-focused R&D, quality assurance and global compliance, technical support and worldwide export logistics.",
};

export default function CapabilitiesPage() {
  return (
    <>


    {/* The banner cycles this family’s own topics — the picture and the
        line naming it — rather than standing on one still. See
        components/BannerCycle.tsx; the frames are lib/topics.ts’ order. */}
    <BannerCycle frames={bannerFrames("capabilities")}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/"><T>Home</T></Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page"><T>Capabilities</T></span>
      </nav>
      <h1 className="page-hero__title page-hero__title--solo"><b><T>Capabilities</T></b></h1>
      <p className="page-hero__lede">Advanced manufacturing, specialised R&amp;D, quality assurance, technical support and global logistics — designed for precision, efficiency, scalability and sustainability.</p>
    </BannerCycle>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="capabilities" />
      </div>
    </section>

    <section className="pad bg-night">
      <div className="wrap feature">
        <div className="rise">
          <span className="eyebrow">Integrated advantage</span>
          <h2>Every product, process and partnership</h2>
          <p className="lede">World-class capabilities that empower industries worldwide with precision chemical solutions, operational efficiency and sustainable growth.</p>
          <div className="btn-row"><Link className="btn btn--ghost" href="/contact">Discuss your requirement</Link></div>
        </div>
        <div className="rise">
          <ul className="list list--check">
            <li>Advanced, scalable manufacturing for diverse chemical products</li>
            <li>R&amp;D-driven innovation and application-specific solutions</li>
            <li>Rigorous quality assurance and global compliance</li>
            <li>Expert technical support and collaborative development</li>
            <li>Robust global export infrastructure and logistics management</li>
            <li>Sustainability embedded across all operational aspects</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
