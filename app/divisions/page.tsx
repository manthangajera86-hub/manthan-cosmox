import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import HeroTitle from "@/components/HeroTitle";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Business Units — Cosmox Chemicals" },
  description: "Ten specialised chemical divisions covering lithium and metal additives, flame retardants, intermediates, polymers, surfactants, battery chemicals, pigments and functional materials.",
};

export default function DivisionsPage() {
  return (
    <>


    <section className="page-hero bg-page-divisions">
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__scrim" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/"><T>Home</T></Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page"><T>Business units</T></span>
        </nav>
        <h1 className="page-hero__title"><HeroTitle light="Business" bold="Units" /></h1>
        <p className="page-hero__lede">Ten advanced chemical divisions, each a centre of excellence with dedicated expertise, advanced manufacturing capability and tailored support for diverse industrial applications.</p>
      </div>
    </section>

    <section className="pad-xs">
      <div className="wrap">
        <div className="feature feature--center">
          <div>
            <span className="eyebrow">The model</span>
            <h2>Specialised teams, harmonised operations</h2>
            <p>Our divisions serve automotive, polymers, electronics, lubricants, pharmaceuticals, coatings, energy storage and research-driven industrial applications. The structured business unit approach enables efficient management of a broad portfolio, harmonised global operations and dedicated R&amp;D support for application-specific requirements.</p>
            <div className="figure figure--wide bg-proof-manufacturing" aria-hidden="true"></div>
          </div>
          <div>
            <span className="eyebrow">Key advantages</span>
            <ul className="list list--check">
              <li><strong>Dedicated expertise</strong> — specialised chemistry, engineering and QA teams per division</li>
              <li><strong>Optimised manufacturing</strong> — scalable, consistent batch production</li>
              <li><strong>Global export capability</strong> — tailored logistics, documentation and compliance</li>
              <li><strong>Application-specific R&amp;D</strong> — focused innovation for new products and formulations</li>
              <li><strong>Customer-centric solutions</strong> — custom formulations, grades and technical support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="divisions" />
      </div>
    </section>

    <section className="pad bg-night">
      <div className="wrap feature">
        <div>
          <span className="eyebrow">Across every division</span>
          <h2>Integrated advantages</h2>
          <p className="lede">From concept to delivery, our structured approach guarantees high performance, safety and innovation.</p>
        </div>
        <div>
          <ul className="list">
            <li>Expertise-driven manufacturing and technical support</li>
            <li>Harmonised quality control and international compliance</li>
            <li>Streamlined global export and logistics support</li>
            <li>R&amp;D-led innovation for product development</li>
            <li>Application-focused client support</li>
            <li>Sustainable, environmentally responsible operations</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
