import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import TopicGrid from "@/components/TopicGrid";

export const metadata: Metadata = {
  title: { absolute: "Products — Cosmox Chemicals" },
  description: "Lithium soaps, halogen-free hypophosphite flame retardants, high-purity pharmaceutical intermediates, resins, surfactants, battery salts, pigments and functional materials.",
};

export default function ProductsPage() {
  return (
    <>


    <section className="page-hero bg-page-products">
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__scrim" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/"><T>Home</T></Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page"><T>Products</T></span>
        </nav>
        <h1 className="page-hero__title page-hero__title--solo"><b><T>Products</T></b></h1>
        <p className="page-hero__lede">A portfolio designed to meet the diverse and evolving needs of modern industries — combining high performance, reliability and global compliance across every product line.</p>
      </div>
    </section>

    <section className="pad-xs">
      <div className="wrap feature feature--center">
        <div>
          <span className="eyebrow">Product philosophy</span>
          <h2>Technically superior, safe, environmentally responsible</h2>
          <p>Every product undergoes rigorous testing for purity, thermal stability, chemical performance and industrial compatibility. Whether enhancing machinery lubrication, improving fire resistance, supporting high-performance polymers or providing high-purity intermediates for research and production, our products are engineered for excellence.</p>
          <div className="figure figure--wide bg-proof-qc" aria-hidden="true"></div>
        </div>
        <div>
          <span className="eyebrow">Browse by category</span>
          <ul className="pills" style={{ marginTop: ".4rem" }}>
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
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <TopicGrid family="products" />
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>Need a specific grade or specification?</h2>
            <p>Share your requirement and we'll come back with technical data, packaging options and export documentation.</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--red" href="/contact">Request TDS / SDS</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
