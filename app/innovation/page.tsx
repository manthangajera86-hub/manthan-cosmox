import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Innovation — Cosmox Chemicals" },
  description: "Product, process, application, sustainable and collaborative innovation across the Cosmox Chemicals portfolio.",
};

export default function InnovationPage() {
  return (
    <>


    <section className="page-hero bg-page-innovation">
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__scrim" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/"><T>Home</T></Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page"><T>Innovation</T></span>
        </nav>
        <h1 className="page-hero__title page-hero__title--solo"><b><T>Innovation</T></b></h1>
        <p className="page-hero__lede">Technological advancement, creative problem-solving and sustainability principles integrated into every aspect of our operations.</p>
      </div>
    </section>

    <section className="pad-xs">
      <div className="wrap feature feature--center">
        <p className="lede">Our commitment to innovation enables us to enhance industrial performance, provide sustainable solutions and address complex challenges across automotive, polymers, electronics, industrial machinery, pharmaceuticals, agrochemicals, coatings, energy storage and research-driven industries.</p>
        <div className="figure figure--wide bg-media-capabilities" aria-hidden="true"></div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="innovation" />
      </div>
    </section>
    </>
  );
}
