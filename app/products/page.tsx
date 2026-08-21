import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import BannerCycle from "@/components/BannerCycle";
import { bannerFrames } from "@/lib/topics";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Products — Cosmox Chemicals" },
  description: "Lithium soaps, halogen-free hypophosphite flame retardants, high-purity pharmaceutical intermediates, resins, surfactants, battery salts, pigments and functional materials.",
};

export default function ProductsPage() {
  return (
    <>


    {/* The banner cycles this family’s own topics — the picture and the
        line naming it — rather than standing on one still. See
        components/BannerCycle.tsx; the frames are lib/topics.ts’ order. */}
    <BannerCycle frames={bannerFrames("products")}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/"><T>Home</T></Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page"><T>Products</T></span>
      </nav>
      <h1 className="page-hero__title page-hero__title--solo"><b><T>Products</T></b></h1>
      <p className="page-hero__lede">A portfolio designed to meet the diverse and evolving needs of modern industries — combining high performance, reliability and global compliance across every product line.</p>
    </BannerCycle>

    <section className="pad-xs">
      <div className="wrap">
        {/* The philosophy and the ten doors into the range, as one panel. The
            categories used to be a column of pills beside a column of copy,
            which left a page-wide gap under the shorter of the two; they are
            the panel's own foot now, on the hairline where a grade page puts
            its facts. */}
        <div className="pintro rise">
          <div className="pintro__copy">
            <span className="eyebrow">Product philosophy</span>
            <h2>Technically superior, safe, environmentally responsible</h2>
            <p className="pintro__lede">Every product undergoes rigorous testing for purity, thermal stability, chemical performance and industrial compatibility. Whether enhancing machinery lubrication, improving fire resistance, supporting high-performance polymers or providing high-purity intermediates for research and production, our products are engineered for excellence.</p>
            <div className="pintro__meta">
              <div className="pintro__fact pintro__fact--wide">
                <span className="pintro__k">Browse by category</span>
                <div className="pintro__v">
                  <ul className="pills">
                    <li><Link href="/products/lithium-metal-additives">Lithium &amp; metal additives</Link></li>
                    <li><Link href="/products/flame-retardant-inorganic-salts">Flame retardants</Link></li>
                    <li><Link href="/products/organic-pharmaceutical-intermediates">Intermediates</Link></li>
                    <li><Link href="/products/polymers-resins-high-performance-materials">Polymers &amp; resins</Link></li>
                    <li><Link href="/products/surfactants-detergents-bio-based-chemicals">Surfactants</Link></li>
                    <li><Link href="/products/electrochemical-battery-electronic-chemicals">Battery &amp; electronic</Link></li>
                    <li><Link href="/products/paints-coatings-pigments">Pigments</Link></li>
                    <li><Link href="/products/nutraceutical-cosmetic-food-chemicals">Nutraceutical &amp; cosmetic</Link></li>
                    <li><Link href="/products/water-treatment-industrial-additives">Water treatment</Link></li>
                    <li><Link href="/products/functional-high-performance-materials">Functional materials</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pintro__media bg-proof-qc">
            <span className="pintro__tag"><T>Products</T></span>
          </div>
        </div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="products" />
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="cta cta--night rise">
          <div>
            <h2>Need a specific grade or specification?</h2>
            <p>Share your requirement and we'll come back with technical data, packaging options and export documentation.</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--gold" href="/contact">Request TDS / SDS</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
