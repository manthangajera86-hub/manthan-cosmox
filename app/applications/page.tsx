import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Applications — Cosmox Chemicals" },
  description: "Application areas for our chemistry: lubrication and grease, flame retardancy, polymer processing, electronics, automotive, coatings, pharma synthesis and energy storage.",
};

export default function ApplicationsPage() {
  return (
    <>


    <section className="page-hero bg-page-applications">
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__scrim" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/"><T>Home</T></Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page"><T>Applications</T></span>
        </nav>
        <h1 className="page-hero__title page-hero__title--solo"><b><T>Applications</T></b></h1>
        <p className="page-hero__lede">Solutions that enhance performance, ensure safety and meet international compliance standards — across lubrication, fire safety, polymers, electronics, energy storage and more.</p>
      </div>
    </section>

    <section className="pad-xs">
      <div className="wrap feature feature--center">
        <p className="lede">Each application is supported by our R&amp;D, technical teams and global export infrastructure, so clients receive not only high-quality chemicals but expert guidance for optimal use. Our approach integrates innovation, rigorous testing and sustainability practices to deliver products that meet the highest global standards.</p>
        <div className="figure figure--wide bg-media-capabilities" aria-hidden="true"></div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="applications" />
      </div>
    </section>
    </>
  );
}
