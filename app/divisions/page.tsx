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
        {/* The model and what it buys, in one panel. The five advantages used
            to be a column of their own beside a column that also carried a
            photograph, so neither column agreed with the other; they run under
            the copy now and the picture stretches to whatever that comes to. */}
        <div className="pintro rise">
          <div className="pintro__copy">
            <span className="eyebrow">The model</span>
            <h2>Specialised teams, harmonised operations</h2>
            <p className="pintro__lede">Our divisions serve automotive, polymers, electronics, lubricants, pharmaceuticals, coatings, energy storage and research-driven industrial applications. The structured business unit approach enables efficient management of a broad portfolio, harmonised global operations and dedicated R&amp;D support for application-specific requirements.</p>
            <div className="pintro__meta">
              <div className="pintro__fact pintro__fact--wide">
                <span className="pintro__k">Key advantages</span>
                <div className="pintro__v">
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
          </div>
          <div className="pintro__media bg-proof-manufacturing">
            <span className="pintro__tag"><T>Business units</T></span>
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
        <div className="rise">
          <span className="eyebrow">Across every division</span>
          <h2>Integrated advantages</h2>
          <p className="lede">From concept to delivery, our structured approach guarantees high performance, safety and innovation.</p>
        </div>
        <div className="rise">
          <ul className="list list--check">
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
