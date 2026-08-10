import type { Metadata } from "next";
import Finder from "@/components/Finder";
import Link from "next/link";
import T from "@/components/T";
import HeroTitle from "@/components/HeroTitle";

export const metadata: Metadata = {
  title: { absolute: "Search for a product — Cosmox Chemicals" },
  description: "Search the Cosmox Chemicals range — 40 grades across ten divisions, filtered by industry and chemistry, with technical data available for every product.",
};

export default function FinderPage() {
  return (
    <>

    <section className="page-hero bg-page-finder">
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__scrim" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/"><T>Home</T></Link>
          <span aria-hidden="true">/</span>
          <Link href="/products">Products</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page"><T>Search</T></span>
        </nav>
        <h1 className="page-hero__title"><HeroTitle light="Search for a" bold="Product" /></h1>
        <p className="page-hero__lede">Forty grades across ten divisions. Filter by the
        industry you are formulating for, or search by product and chemistry name.
        Every grade ships with technical and safety documentation.</p>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <Finder />
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="cta cta--media">
          <div>
            <h2>Not finding the grade you need?</h2>
            <p>Custom formulations and specification work — tell us the property you are trying to hit and we will come back with options.</p>
            <div className="btn-row">
              <Link className="btn btn--red" href="/contact">Request a grade</Link>
              <Link className="btn btn--outline" href="/products">Browse by division</Link>
            </div>
          </div>
          <div className="figure figure--wide bg-media-rnd" aria-hidden="true"></div>
        </div>
      </div>
    </section>
    </>
  );
}
