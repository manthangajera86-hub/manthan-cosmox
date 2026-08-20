import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";
import HeroTitle from "@/components/HeroTitle";
import { FAMILY } from "@/lib/topics";

export const metadata: Metadata = {
  title: { absolute: "About Cosmox Chemicals — Advanced Chemical Manufacturing & Export" },
  description: "Cosmox Chemicals combines modern manufacturing, in-house R&D and stringent quality control across ten specialty chemical divisions, exporting worldwide from Surat, India.",
};

/* The ten units as /about names them. `num`, `name` and `slug` are
   `lib/topics.ts`'s — looked up rather than retyped, so a division is never
   named twice — and `what` is the line the source copy gives each of them
   here, which is this page's alone and shorter than the blurb the register
   carries. Ordered by number, which the source copy is not. */
const DIVISION_COPY: Record<string, string> = {
  "lithium-metal-additives": "lithium soaps, metal additives and grease components",
  "inorganic-flame-retardant-chemicals": "metal salts, hypophosphite salts, pigments and flame retardants",
  "organic-pharmaceutical-intermediates": "high-purity intermediates for pharma, agrochemicals and fine chemicals",
  "polymers-resins-high-performance-materials": "advanced polymers, resins, adhesives, sealants and heat-resistant materials",
  "surfactants-detergents-bio-based-chemicals": "industrial and green surfactants, emulsifiers and bio-based chemicals",
  "electrochemical-battery-electronic-chemicals": "lithium-ion, battery, semiconductor and high-purity electronic chemicals",
  "paints-coatings-pigments": "organic and inorganic pigments, coating additives and specialty solutions",
  "nutraceutical-cosmetic-food-chemicals": "vitamins, cosmetic actives, nutraceuticals and food additives",
  "water-treatment-industrial-additives": "corrosion inhibitors, anti-scalants, phosphonates and functional additives",
  "functional-high-performance-materials": "specialty chemicals for aerospace, automotive, electronics and industrial applications",
};

const DIVISIONS = FAMILY.divisions.topics.map((unit) => ({
  slug: unit.slug,
  num: unit.num,
  name: unit.title,
  what: DIVISION_COPY[unit.slug] ?? "",
}));

export default function AboutPage() {
  return (
    <>


    <section className="page-hero bg-page-about">
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__scrim" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/"><T>Home</T></Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page"><T>About</T></span>
        </nav>
        <h1 className="page-hero__title"><HeroTitle light="About" bold="Cosmox Chemicals" /></h1>
        <p className="page-hero__lede">A leading advanced chemical manufacturing and export company, delivering high-performance chemical solutions to clients worldwide.</p>
      </div>
    </section>

    {/* Two panels, alternating, rather than one row with a picture stacked on
        a card in its second column: each is copy against a photograph that
        stretches to the copy's own height, so neither leaves a hole. */}
    <section className="pad-sm">
      <div className="wrap grid">
        <div className="pintro rise">
          <div className="pintro__copy">
            <span className="eyebrow">Overview</span>
            <h2>Chemistry as the foundation of industrial progress</h2>
            <p className="pintro__lede">Our operations span a broad spectrum of chemical segments — metal soaps, hypophosphite salts, organic and inorganic intermediates, functional materials and advanced polymers — positioning us as a trusted partner for industries that demand quality, innovation and reliability.</p>
            <p>From our state-of-the-art manufacturing facilities in India, we combine modern technology, stringent quality control and deep chemical process expertise to ensure every product meets the highest international standards. Our team of chemists, engineers and quality professionals works collaboratively to innovate, optimise and scale chemical solutions for both domestic and global markets.</p>
          </div>
          <div className="pintro__media bg-media-capabilities">
            <span className="pintro__tag"><T>About us</T></span>
          </div>
        </div>

        <div className="pintro pintro--flip rise">
          <div className="pintro__copy">
            <span className="eyebrow">Our approach</span>
            <p className="pintro__lede">We approach every project with meticulous planning, technical expertise and a deep understanding of client needs. By integrating research, manufacturing, quality and logistics, we provide a seamless experience from concept to delivery.</p>
            <p>Our solutions are designed not only to meet today's requirements but to anticipate future industrial challenges.</p>
          </div>
          <div className="pintro__media bg-media-innovation" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <section className="pad-sm bg-sand">
      <div className="wrap">
        <div className="grid grid-pair">
          <div className="card rise">
            <div className="card__img bg-media-industries" aria-hidden="true"></div>
            <h3 id="global-presence">Global presence</h3>
            <p>Cosmox Chemicals serves clients across North America, Europe, Asia and the Middle East. Through our export network we provide timely delivery, full regulatory compliance and customised solutions tailored to each client's needs. Our logistics team coordinates closely with production and R&amp;D to manage global shipments efficiently.</p>
          </div>
          <div className="card rise">
            <div className="card__img bg-proof-manufacturing" aria-hidden="true"></div>
            <h3 id="manufacturing-excellence">Manufacturing excellence</h3>
            <p>Our capabilities are built on environmentally compliant, modern plants equipped with advanced reactors, precision control systems and continuous monitoring technologies. Facilities are designed to handle both large-scale commercial production and specialised batch processes for high-value chemicals.</p>
          </div>
          <div className="card rise">
            <div className="card__img bg-media-rnd" aria-hidden="true"></div>
            <h3 id="research-and-development">Research &amp; development</h3>
            <p>Our R&amp;D centre develops new molecules, optimises processes and creates customised chemical solutions. Collaborating with industry partners and academic institutions, we continuously improve existing products, discover new applications and develop next-generation solutions.</p>
          </div>
          <div className="card rise">
            <div className="card__img bg-proof-qc" aria-hidden="true"></div>
            <h3 id="quality-and-compliance">Quality &amp; compliance</h3>
            <p>Every product undergoes rigorous testing and validation in our advanced in-house laboratories. Cosmox Chemicals complies with international standards including ISO certifications, REACH regulations and global safety norms.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap feature">
        <div className="rise">
          <span className="eyebrow">Mission</span>
          <h2>Why we exist</h2>
          <p className="lede">To manufacture and export advanced chemical products that enable safer, more efficient and sustainable industrial solutions worldwide. We are committed to delivering excellence, building long-term client partnerships and contributing positively to society and the environment.</p>
          <h3 className="mt-lg" id="our-vision">Our vision</h3>
          <p>To be a globally recognised leader in advanced chemicals — known for innovation, quality, sustainability and unmatched customer support.</p>
        </div>
        <div className="rise">
          <span className="eyebrow">Core values</span>
          <dl className="value-grid">
            <dt>Quality</dt>
            <dd>Every product meets rigorous standards and exceeds client expectations.</dd>
            <dt>Innovation</dt>
            <dd>Continuous development of new products, processes and technologies.</dd>
            <dt>Integrity</dt>
            <dd>Transparent, ethical and accountable operations.</dd>
            <dt>Sustainability</dt>
            <dd>Commitment to environmentally responsible practices.</dd>
            <dt>Customer focus</dt>
            <dd>Building long-term, collaborative relationships.</dd>
          </dl>
        </div>
      </div>
    </section>

    <section className="pad bg-night">
      <div className="wrap">
        <div className="section-head rise">
          <span className="eyebrow">Structure</span>
          <h2>Ten strategic divisions</h2>
          <p className="lede">Covering the full spectrum of advanced chemical solutions.</p>
        </div>
        {/* The one place on the site that names all ten units and the one
            place they were not links: twenty lines of bullets in two columns.
            Each is a row of its own now, carrying the number it has everywhere
            else — which is also why the order changed, since the source copy
            lists them 03, 02, 01, 04… and a numbered list out of order reads
            as a mistake. The wording after each name is the source copy's,
            unchanged. */}
        <ul className="roster rise">
          {DIVISIONS.map((unit) => (
            <li key={unit.slug}>
              <Link href={`/divisions/${unit.slug}`}>
                <span className="roster__num">{unit.num}</span>
                <span className="roster__name">{unit.name}</span>
                <span className="roster__what">{unit.what}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="btn-row rise">
          <Link className="btn btn--ghost" href="/divisions">Explore each division</Link>
        </div>
      </div>
    </section>

    <section className="pad-sm">
      <div className="wrap">
        <div className="cta cta--night rise">
          <div>
            <h2>More than a manufacturer</h2>
            <p>We are your strategic partner in advanced chemical solutions — dedicated to enabling industrial efficiency, safety and sustainability worldwide.</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--gold" href="/contact">Start a conversation</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
