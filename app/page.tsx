import Link from "next/link";
import Rail from "@/components/Rail";
import HeroCycle from "@/components/HeroCycle";
import { BUSINESS_ASPECTS, BUSINESS_LINES } from "@/lib/business";
import { FAMILY } from "@/lib/topics";

/* A row of the business-operations table as one line. The products lists are
   the real range now — 23 chemicals for the intermediates division, some of
   them 100-character IUPAC names — and a cell that long stops being a glance
   and starts being a page. So the line takes names until it has filled its
   measure and counts the rest; the row's own link goes to the division page,
   which lists them all. Applications and capabilities run to four short
   phrases and are never cut. */
const MEASURE = 96;
const line = (items: string[]) => {
  const shown: string[] = [];
  let width = 0;
  for (const item of items) {
    if (shown.length && width + item.length > MEASURE) break;
    shown.push(item);
    width += item.length + 3;
  }
  const rest = items.length - shown.length;
  return rest ? `${shown.join(" · ")} · +${rest} more` : shown.join(" · ");
};

export default function HomePage() {
  return (
    <>


    {/* ========================================================================
         Hero — Aditya Birla: full-bleed image, headline low-left, two weights
         split by a hairline. Swap `.hero__media` for a photograph when one
         exists; everything else keeps working.
         ==================================================================== */}
    <section className="hero">
      {/* The heavy word of the headline cycles, and the photograph behind it
          changes with it — see components/HeroCycle.tsx for what that costs
          and what it refuses to do. The words are the hero's own lede read
          back: it names metal soaps, halogen-free flame retardants and
          high-purity intermediates, and those are the three that follow the
          "Speciality" the headline already carried. `null` is the hero's own
          photograph, so index 0 is exactly the hero as it was — which is also
          what prerenders. */}
      <HeroCycle
        lead="Cosmox Chemicals"
        words={[
          { word: "Speciality", bg: null },
          { word: "Metal Soaps", bg: "bg-div-01-lithium" },
          { word: "Flame Retardants", bg: "bg-div-02-flame" },
          { word: "Intermediates", bg: "bg-div-03-pharma" },
        ]}
        above={<p className="hero__eyebrow">Surat · Gujarat · India</p>}
        below={
          <>
            <p className="hero__lede">
              Metal soaps, halogen-free flame retardants and high-purity intermediates —
              manufactured to specification and exported worldwide.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--gold" href="/finder">
                Find a product
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              </Link>
              <Link className="btn btn--ghost" href="/contact">Talk to a chemist</Link>
            </div>
          </>
        }
      />

      <dl className="hero__stats">
        <div><dt>10</dt><dd>Business divisions</dd></div>
        <div><dt>40+</dt><dd>Product grades</dd></div>
        <div><dt>ISO · REACH</dt><dd>Aligned quality systems</dd></div>
        <div><dt>Global</dt><dd>Export &amp; documentation</dd></div>
      </dl>

      <a className="hero__cue" href="#statement" aria-label="Scroll to content">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
      </a>
    </section>

    {/* ========================================================================
         Statement — Lilly: one enormous sentence, near-black on white
         ==================================================================== */}
    <section className="statement" id="statement">
      <div className="wrap">
        <p className="statement__text rise">A chemicals company that puts <em>specification</em> above all.</p>
        <div className="statement__foot rise">
          <p>
            From state-of-the-art facilities in India, we combine modern process technology,
            stringent quality control and deep chemical expertise so that every batch meets
            the standard it was ordered against — not the one that was convenient to make.
          </p>
          <p>
            Chemists, engineers and quality professionals work as one team to innovate,
            optimise and scale — backed by application-specific R&amp;D and a logistics
            network built for export.
          </p>
        </div>

        {/* What "above all" looks like in practice. Both photographs are
             placeholders — see the Photography note in the README. */}
        <div className="proof rise">
          <figure className="proof__item">
            <div className="proof__img bg-proof-qc">            </div>
            <figcaption>
              <p className="proof__kicker">Quality assurance &amp; compliance</p>
              <h3>Every batch tested against the order, not the average</h3>
              <p>Quality control runs across raw materials, intermediates and finished
              product, aligned to ISO, REACH and OSHA, with documentation traceable
              end to end.</p>
              <Link className="proof__link" href="/capabilities/quality-assurance-compliance">
                How we test<span aria-hidden="true">&#8594;</span></Link>
            </figcaption>
          </figure>

          <figure className="proof__item">
            <div className="proof__img bg-proof-manufacturing">            </div>
            <figcaption>
              <p className="proof__kicker">Advanced manufacturing</p>
              <h3>From an R&amp;D flask to a full industrial batch</h3>
              <p>Automated plant, advanced reactors and precision instrumentation,
              with real-time process control holding quality consistent at every
              scale we run.</p>
              <Link className="proof__link" href="/capabilities/advanced-manufacturing">
                See the plant<span aria-hidden="true">&#8594;</span></Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    {/* ========================================================================
         Three-up actions — Lilly's task row with pill CTAs
         ==================================================================== */}
    <section className="pad-xs">
      <div className="wrap">
        {/* Set centred and balanced rather than hard-broken: in Inter at
             106px the tapering line breaks no longer fit the measure — see
             `.tri__head` in globals.css for the numbers. */}
        <h2 className="tri__head rise">A <em>trusted partner</em> for industries that demand quality, innovation and reliability.</h2>
        <div className="tri">
          <div className="tri__item rise">
            <h3>Find a grade</h3>
            <p>Search 40+ grades by industry and chemistry, with technical data and packaging options for each.</p>
            <Link className="btn btn--ink" href="/finder">Search products</Link>
          </div>
          <div className="tri__item rise">
            <h3>Request a sample</h3>
            <p>Pilot quantities with full TDS and SDS, shipped with the documentation your compliance team needs.</p>
            <Link className="btn btn--ink" href="/contact">Request TDS / SDS</Link>
          </div>
          <div className="tri__item rise">
            <h3>Develop with us</h3>
            <p>Custom formulations and process development, from laboratory batch through to commercial supply.</p>
            <Link className="btn btn--ink" href="/rnd">Start a project</Link>
          </div>
        </div>
      </div>
    </section>

    {/* ========================================================================
         Business operations — the ten business units as one table, read three
         ways: what each division makes, what it is used for, what it can do.
         The tabs are radio buttons and the switch is CSS (`:has()`), so all
         three tables ship in the static HTML and the section works with
         JavaScript off — no seventh client component for a control this
         small. Lists come from `lib/business.ts`, the numbers, titles and
         slugs from `lib/topics.ts`.
         ==================================================================== */}
    <section className="pad-sm bg-sand" id="business-operations">
      <div className="bleed">
        <div className="sec-head">
          <h2>Business operations</h2>
          <p>Ten advanced chemical divisions, each a centre of excellence with its own
          chemistry, engineering and quality team.</p>
        </div>

        <div className="btabs rise">
          <div className="btabs__bar">
            <div className="btabs__nav" role="group" aria-label="Choose a view of the ten business units">
              {BUSINESS_ASPECTS.map((aspect, i) => (
                <label className="btab-pill" key={aspect.key}>
                  <input type="radio" name="bizview" id={`biz-${aspect.key}`} defaultChecked={i === 0} />
                  <span>{aspect.label}</span>
                </label>
              ))}
            </div>
            <Link className="link-arrow" href="/divisions">All ten business units <span aria-hidden="true">→</span></Link>
          </div>

          {BUSINESS_ASPECTS.map((aspect) => (
            <div className="btabs__panel" data-view={aspect.key} key={aspect.key}>
              <table className="btab">
                <thead>
                  <tr>
                    <th scope="col">Division</th>
                    <th scope="col">{aspect.label}</th>
                  </tr>
                </thead>
                <tbody>
                  {FAMILY.divisions.topics.map((topic) => (
                    <tr key={topic.slug}>
                      <th scope="row">
                        <span className="btab__num">{topic.num}</span>
                        <Link href={`/divisions/${topic.slug}`}>{topic.title}</Link>
                      </th>
                      <td>{line(BUSINESS_LINES[topic.slug][aspect.key])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ========================================================================
         Products → finder — two full-bleed photographs stacked with nothing
         between them, both running window edge to window edge with square
         corners like the heroes. The band names the portfolio and lists the
         ten groups; the panel under it opens the search. In that order on
         purpose — a visitor is shown what there is before being asked to
         search it. Swap either `.bg-*` class to change a picture.
         ==================================================================== */}
    <section className="pad-sm" id="products">
      <div className="pband bg-products-band">
        <div className="pband__media" aria-hidden="true"></div>
        <div className="pband__scrim" aria-hidden="true"></div>

        <div className="pband__inner rise">
          <p className="pband__kicker">Products</p>
          <h2 className="pband__title">Technically superior, safe and environmentally responsible.</h2>
          <p className="pband__lede">
            Ten advanced chemical divisions — lithium and metal additives, flame-retardant
            salts, organic and pharmaceutical intermediates, polymers, surfactants, battery
            chemicals, coatings, nutraceuticals, water treatment and functional materials —
            a comprehensive offering for industrial clients worldwide.
          </p>

          <nav className="pband__nav" aria-label="Product groups">
            <Link href="/products/lithium-metal-additives">Lithium &amp; metal additives</Link>
            <Link href="/products/flame-retardant-inorganic-salts">Flame retardants</Link>
            <Link href="/products/organic-pharmaceutical-intermediates">Intermediates</Link>
            <Link href="/products/polymers-resins-high-performance-materials">Polymers &amp; resins</Link>
            <Link href="/products/surfactants-detergents-bio-based-chemicals">Surfactants</Link>
            <Link href="/products/electrochemical-battery-electronic-chemicals">Battery &amp; electronic</Link>
            <Link href="/products/paints-coatings-pigments">Pigments</Link>
            <Link href="/products/nutraceutical-cosmetic-food-chemicals">Nutraceutical &amp; cosmetic</Link>
            <Link href="/products/water-treatment-industrial-additives">Water treatment</Link>
            <Link href="/products/functional-high-performance-materials">Functional materials</Link>
          </nav>

          <div className="pband__actions">
            <Link className="btn btn--gold" href="/products">
              All products
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Product finder — the second half of the same picture stack, joined to
           the band above with no paper between them: the band names the
           portfolio, this one opens the search. The whole panel is the link.
           It lives inside this section rather than its own so there is no
           page padding between the two photographs to cancel. */}
      <Link className="fcta rise bg-finder-panel" href="/finder" id="finder">
        <div className="fcta__body">
          <p className="fcta__kicker">Product finder</p>
          <h2>Search for a product</h2>
          <p>112 grades across ten divisions, filtered by the industry you are
          formulating for or searched by chemistry name — every one with
          technical and safety documentation.</p>
          <span className="btn btn--gold">Explore the finder
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
          </span>
        </div>
      </Link>
    </section>

    {/* ========================================================================
         Divisions — Aditya Birla's dark editorial tile grid
         ==================================================================== */}
    <section className="pad bg-night band--full" id="divisions">
      <div className="bleed">
        <div className="sec-head">
          <h2>Divisions</h2>
          <p>Ten centres of excellence, each with its own chemistry, engineering and quality team.</p>
        </div>
      </div>

      {/* the grid sits outside `.bleed` so the nine pictures run window edge to
           window edge — square, gapless, one wall of doors rather than nine
           rounded cards on a dark panel */}
      <div className="tiles">
          <Link className="tile rise rise--repeat bg-div-01-lithium" href="/divisions/lithium-metal-additives">
            <span className="tile__idx">01</span>
            <h3>Lithium &amp; Metal Additives</h3>
            <p>Thickeners for greases running under extreme temperature and load.</p>
            <span className="tile__go">Explore division →</span>
          </Link>
          <Link className="tile rise rise--repeat bg-div-02-flame" href="/divisions/inorganic-flame-retardant-chemicals">
            <span className="tile__idx">02</span>
            <h3>Flame Retardants</h3>
            <p>Halogen-free hypophosphites for plastics, cables and coatings.</p>
            <span className="tile__go">Explore division →</span>
          </Link>
          <Link className="tile rise rise--repeat bg-div-03-pharma" href="/divisions/organic-pharmaceutical-intermediates">
            <span className="tile__idx">03</span>
            <h3>Pharmaceutical Intermediates</h3>
            <p>High-purity compounds, reproducible from lab bench to plant.</p>
            <span className="tile__go">Explore division →</span>
          </Link>
          <Link className="tile rise rise--repeat bg-div-04-polymers" href="/divisions/polymers-resins-high-performance-materials">
            <span className="tile__idx">04</span>
            <h3>Polymers &amp; Resins</h3>
            <p>Heat-resistant grades for aerospace, automotive and industry.</p>
            <span className="tile__go">Explore division →</span>
          </Link>
          <Link className="tile rise rise--repeat bg-div-05-surfactants" href="/divisions/surfactants-detergents-bio-based-chemicals">
            <span className="tile__idx">05</span>
            <h3>Surfactants &amp; Bio-Based</h3>
            <p>Industrial and plant-derived emulsifiers, wetting agents, solvents.</p>
            <span className="tile__go">Explore division →</span>
          </Link>
          <Link className="tile rise rise--repeat bg-div-06-battery" href="/divisions/electrochemical-battery-electronic-chemicals">
            <span className="tile__idx">06</span>
            <h3>Battery &amp; Electronic</h3>
            <p>Electrolyte salts and electronic-grade solvents at ultra-high purity.</p>
            <span className="tile__go">Explore division →</span>
          </Link>
          <Link className="tile rise rise--repeat bg-div-07-pigments" href="/divisions/paints-coatings-pigments">
            <span className="tile__idx">07</span>
            <h3>Paints, Coatings &amp; Pigments</h3>
            <p>Consistent colour, dispersion and UV performance.</p>
            <span className="tile__go">Explore division →</span>
          </Link>
          <Link className="tile rise rise--repeat bg-div-08-nutra" href="/divisions/nutraceutical-cosmetic-food-chemicals">
            <span className="tile__idx">08</span>
            <h3>Nutraceutical &amp; Cosmetic</h3>
            <p>Vitamin intermediates and actives for regulated formulations.</p>
            <span className="tile__go">Explore division →</span>
          </Link>
          <Link className="tile rise rise--repeat bg-div-09-water" href="/divisions/water-treatment-industrial-additives">
            <span className="tile__idx">09</span>
            <h3>Water Treatment</h3>
            <p>Anti-scalants and inhibitors for cooling towers and process plant.</p>
            <span className="tile__go">Explore division →</span>
          </Link>
      </div>

      <div className="bleed">
        <p style={{ marginTop: "2rem" }}>
          <Link className="link-arrow" href="/divisions">All ten divisions <span aria-hidden="true">→</span></Link>
        </p>
      </div>
    </section>

    {/* ========================================================================
         Industries — Lilly's horizontal card scroller, advancing itself.
         It loops rather than running to a stop: seven cards and three in view
         is four steps before the rail is against its end, and an autoplay that
         parks there has spent the section's whole attention getting stuck. The
         repeated set makes it endless, and `align="start"` is what keeps the
         first card on the page inset — the applications strip below centres
         its slides, this one starts them, and the loop's resting position has
         to say which.
         ==================================================================== */}
    <section className="pad" id="industries">
      <Rail
        className="scroller"
        itemSelector=".icard"
        gap={20}
        label="industries"
        loop
        align="start"
        autoplay={4000}
        headClassName="scroller-head"
        ctrlClassName="scroller-nav"
        heading={<h2>Get a closer look at an industry.</h2>}
      >
        <Link className="icard bg-ind-automotive" href="/industries/automotive-transportation">
          <h3>Automotive</h3><span>Explore industry</span>
        </Link>
        <Link className="icard bg-ind-polymers" href="/industries/polymers-engineering-plastics">
          <h3>Polymers</h3><span>Explore industry</span>
        </Link>
        <Link className="icard bg-ind-electronics" href="/industries/electrical-electronics">
          <h3>Electronics</h3><span>Explore industry</span>
        </Link>
        <Link className="icard bg-ind-coatings" href="/industries/coatings-composites">
          <h3>Coatings</h3><span>Explore industry</span>
        </Link>
        <Link className="icard bg-ind-pharma" href="/industries/pharmaceutical-agrochemical">
          <h3>Pharma</h3><span>Explore industry</span>
        </Link>
        <Link className="icard bg-ind-energy" href="/industries/energy-storage-electronics">
          <h3>Energy Storage</h3><span>Explore industry</span>
        </Link>
        <Link className="icard bg-ind-construction" href="/industries/construction-infrastructure">
          <h3>Construction</h3><span>Explore industry</span>
        </Link>
      </Rail>
    </section>

    {/* ========================================================================
         Applications — a big centred title over a centred peek rail: the
         snapped slide sits large in the middle with a sliver of its
         neighbours showing either side. The
         backgrounds are gradient stand-ins: swap a slide's `--a-bg` for
         url("photo.jpg") center / cover no-repeat and it keeps working.
         ==================================================================== */}
    <section className="pad-sm apps" id="applications-strip">
      <Rail
        className="apps__rail"
        itemSelector=".aslide"
        gap={18}
        label="application"
        focusable
        loop
        spotlight
        autoplay={2800}
        headClassName="sec-head apps__head"
        ctrlClassName="apps__ctrl"
        btnClassName="rail-btn"
        heading={
          <div className="apps__title">
            <h2>Solutions that enhance performance, <em>ensure safety</em> and meet international compliance standards.</h2>
            <p className="apps__sub">Our products serve a wide range of industrial applications — automotive,
              polymers, electronics, industrial machinery, coatings, energy storage, nutraceuticals and
              research-driven sectors.</p>
          </div>
        }
      >
        <article className="aslide bg-app-01-lubrication">
          <div className="aslide__art" aria-hidden="true"><span>01</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">01 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Lubrication &amp; Grease</h3>
            <p>Lithium myristate, 12-hydroxy lithium stearate and calcium stearate — thickeners for greases running under extreme temperature and load.</p>
            <Link className="btn btn--ghost" href="/applications/lubrication-grease">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
        <article className="aslide bg-app-02-flame">
          <div className="aslide__art" aria-hidden="true"><span>02</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">02 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Flame Retardancy</h3>
            <p>Aluminium, calcium and magnesium hypophosphite — halogen-free retardancy for plastics, cables, coatings and construction materials.</p>
            <Link className="btn btn--ghost" href="/applications/flame-retardancy">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
        <article className="aslide bg-app-03-polymers">
          <div className="aslide__art" aria-hidden="true"><span>03</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">03 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Polymers &amp; Engineering</h3>
            <p>Lithium soaps and hypophosphite salts working as processing aids and stabilisers across engineering plastics.</p>
            <Link className="btn btn--ghost" href="/applications/polymers-engineering">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
        <article className="aslide bg-app-04-electronics">
          <div className="aslide__art" aria-hidden="true"><span>04</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">04 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Electrical &amp; Electronics</h3>
            <p>Aluminium and magnesium hypophosphite for consumer electronics, electrical appliances and industrial electronics.</p>
            <Link className="btn btn--ghost" href="/applications/electrical-electronics">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
        <article className="aslide bg-app-05-automotive">
          <div className="aslide__art" aria-hidden="true"><span>05</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">05 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Automotive</h3>
            <p>Lithium greases, hypophosphite salts and polymer additives for vehicle components, commercial fleets and heavy machinery.</p>
            <Link className="btn btn--ghost" href="/applications/automotive">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
        <article className="aslide bg-app-06-machinery">
          <div className="aslide__art" aria-hidden="true"><span>06</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">06 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Industrial Machinery</h3>
            <p>Lithium soaps and intermediates keeping heavy machinery, manufacturing plant and industrial equipment in service.</p>
            <Link className="btn btn--ghost" href="/applications/industrial-machinery-equipment">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
        <article className="aslide bg-app-07-coatings">
          <div className="aslide__art" aria-hidden="true"><span>07</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">07 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Coatings &amp; Composites</h3>
            <p>Hypophosphite salts and intermediates for construction, industrial coatings and composites manufacturing.</p>
            <Link className="btn btn--ghost" href="/applications/coatings-composites">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
        <article className="aslide bg-app-08-pharma">
          <div className="aslide__art" aria-hidden="true"><span>08</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">08 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Pharmaceutical &amp; Agrochemical</h3>
            <p>1-Phenyl oxide and triazolo pyridione — high-purity intermediates for drug synthesis, agrochemicals and industrial R&amp;D.</p>
            <Link className="btn btn--ghost" href="/applications/pharmaceutical-agrochemical">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
        <article className="aslide bg-app-09-energy">
          <div className="aslide__art" aria-hidden="true"><span>09</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">09 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Energy Storage</h3>
            <p>Lithium carbonate, electrolyte salts, TMAH and electronic-grade solvents for batteries, storage and semiconductors.</p>
            <Link className="btn btn--ghost" href="/applications/energy-storage-electronics">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
        <article className="aslide bg-app-10-nutra">
          <div className="aslide__art" aria-hidden="true"><span>10</span></div>
          <div className="aslide__body">
            <p className="aslide__idx">10 <span aria-hidden="true">/</span> 10 &middot; Application</p>
            <h3>Nutraceutical, Cosmetic &amp; Food</h3>
            <p>Ascorbic acid, niacinamide, hyaluronic acid and PABA for nutraceuticals, cosmetics and functional foods.</p>
            <Link className="btn btn--ghost" href="/applications/nutraceutical-cosmetic-food">Explore application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </article>
      </Rail>
    </section>

    {/* ========================================================================
         Capabilities — DuPont's index: a title column that holds its place
         beside six numbered rows, one per capability. Type only at rest, so
         the page draws breath after the photographic rail above it; each row
         carries its own `.bg-*` picture, which opens behind the copy under the
         pointer. Copy is the lead of each numbered section in
         `7 capabilities.rtf`; the six rows and their pictures match
         `lib/topics.ts`, which is what `/capabilities` lists.
         ==================================================================== */}
    <section className="pad" id="capabilities-strip">
      {/* The band the section opens on — the products band's own block, with
          the section's copy on the photograph rather than in a column beside
          the rows. It is a plain `.pband` for that reason: it now carries a
          kicker, a headline, a lede and a button, so it holds its own height
          exactly the way the products band does, including on a phone where
          `.pband`'s minimum drops to nothing because the copy has taken over.
          It lives inside this section rather than taking one of its own, the
          way the products band and the finder panel do, so there is no page
          padding to cancel between the picture and the rows it heads. The
          photograph is the one `/capabilities` banners with. */}
      <div className="pband pband--caps bg-media-capabilities">
        <div className="pband__media" aria-hidden="true"></div>
        <div className="pband__scrim" aria-hidden="true"></div>
        <div className="pband__inner rise">
          <p className="pband__kicker">Capabilities</p>
          <h2 className="pband__title">Capabilities designed for <em>precision</em>, efficiency, scalability and sustainability.</h2>
          <p className="pband__lede">
            Advanced manufacturing, specialised R&amp;D, quality assurance, technical
            support and global logistics — operational excellence combined with
            continuous innovation, for industries worldwide.
          </p>
          <div className="pband__actions">
            <Link className="btn btn--gold" href="/capabilities">
              All capabilities
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="bleed">
        <ol className="caps__list rise">
          <li>
            <Link className="crow bg-proof-manufacturing" href="/capabilities/advanced-manufacturing">
              <span className="crow__num">01</span>
              <div className="crow__text">
                <h3>Advanced Manufacturing</h3>
                <p>Modern plants with automated systems, advanced reactors and precision
                instrumentation — a small R&amp;D batch and a full industrial run held to
                the same specification.</p>
              </div>
              <span className="crow__go" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
              </span>
            </Link>
          </li>
          <li>
            <Link className="crow bg-media-rnd" href="/capabilities/research-development-excellence">
              <span className="crow__num">02</span>
              <div className="crow__text">
                <h3>Research &amp; Development Excellence</h3>
                <p>Application-focused development, innovation laboratories for synthesis
                and process optimisation, and tailored formulations worked out with the
                customer.</p>
              </div>
              <span className="crow__go" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
              </span>
            </Link>
          </li>
          <li>
            <Link className="crow bg-proof-qc" href="/capabilities/quality-assurance-compliance">
              <span className="crow__num">03</span>
              <div className="crow__text">
                <h3>Quality Assurance &amp; Compliance</h3>
                <p>Multi-stage testing of raw materials, intermediates and finished
                product, aligned to ISO, REACH and OSHA, with TDS and SDS documentation
                traceable end to end.</p>
              </div>
              <span className="crow__go" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
              </span>
            </Link>
          </li>
          <li>
            <Link className="crow bg-media-capabilities" href="/capabilities/technical-application-support">
              <span className="crow__num">04</span>
              <div className="crow__text">
                <h3>Technical &amp; Application Support</h3>
                <p>Application engineering, laboratory and on-site performance evaluation,
                and knowledge transfer on processing, safety and efficiency.</p>
              </div>
              <span className="crow__go" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
              </span>
            </Link>
          </li>
          <li>
            <Link className="crow bg-media-industries" href="/capabilities/global-export-logistics">
              <span className="crow__num">05</span>
              <div className="crow__text">
                <h3>Global Export &amp; Logistics</h3>
                <p>Compliant packaging, export documentation and a reliable logistics
                network, with assistance on international chemical regulation and
                customs.</p>
              </div>
              <span className="crow__go" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
              </span>
            </Link>
          </li>
          <li>
            <Link className="crow bg-media-sustain" href="/capabilities/sustainability-integration">
              <span className="crow__num">06</span>
              <div className="crow__text">
                <h3>Sustainability Integration</h3>
                <p>Eco-friendly production and waste minimisation, energy- and
                water-efficient practice, and circular-economy principles adopted across
                operations.</p>
              </div>
              <span className="crow__go" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
              </span>
            </Link>
          </li>
        </ol>
      </div>
    </section>

    {/* ========================================================================
         R&D and Innovation — the two families that answer the same question,
         paired in one section: a pair of dark picture panels on the sand
         ground, each naming its own six themes in the capsule language the
         products band uses. A panel is not a link — it holds seven of them —
         so the CTA at its foot is the way into the family page. Copy is the
         overview opening of `8 r & d.rtf` and `6 innovations.rtf`; the themes
         and their order are `lib/topics.ts`.
         ==================================================================== */}
    <section className="pad bg-sand" id="research-innovation">
      <div className="bleed">
        <div className="sec-head">
          <h2>Research &amp; Innovation</h2>
          <p>Where the next grade comes from — the laboratory that develops it, and
          the innovation programme that carries it into production.</p>
        </div>

        <div className="duo rise">
          <article className="dpan bg-media-rnd">
            <div className="dpan__body">
              <p className="dpan__kicker">Research &amp; Development</p>
              <h3>The cornerstone of innovation, quality and industrial leadership.</h3>
              <p className="dpan__lede">
                Dedicated teams develop new chemical solutions, optimise existing
                formulations and deliver application-specific innovations — from
                state-of-the-art laboratories with advanced analytical instruments
                and cutting-edge synthesis.
              </p>

              <nav className="dpan__nav" aria-label="Research &amp; development themes">
                <Link href="/rnd/product-innovation-development">Product Innovation &amp; Development</Link>
                <Link href="/rnd/advanced-analytical-testing">Advanced Analytical &amp; Testing</Link>
                <Link href="/rnd/application-specific-research">Application-Specific Research</Link>
                <Link href="/rnd/sustainable-green-chemistry">Sustainable &amp; Green Chemistry</Link>
                <Link href="/rnd/collaboration-knowledge-sharing">Collaboration &amp; Knowledge Sharing</Link>
                <Link href="/rnd/integrated-r-d-excellence">Integrated R&amp;D Excellence</Link>
              </nav>

              <Link className="btn btn--ghost" href="/rnd">
                Inside R&amp;D
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </article>

          <article className="dpan bg-media-innovation">
            <div className="dpan__body">
              <p className="dpan__kicker">Innovation</p>
              <h3>Innovation drives our growth and our global leadership.</h3>
              <p className="dpan__lede">
                Technological advancement, creative problem-solving and sustainability
                principles integrated into every product, process and solution — so
                what we ship stays at the front of the industry it serves.
              </p>

              <nav className="dpan__nav" aria-label="Innovation themes">
                <Link href="/innovation/product-innovation">Product Innovation</Link>
                <Link href="/innovation/process-manufacturing-innovation">Process &amp; Manufacturing Innovation</Link>
                <Link href="/innovation/application-industry-specific-innovation">Application &amp; Industry-Specific Innovation</Link>
                <Link href="/innovation/sustainable-green-innovation">Sustainable &amp; Green Innovation</Link>
                <Link href="/innovation/collaboration-knowledge-innovation">Collaboration &amp; Knowledge Innovation</Link>
                <Link href="/innovation/integrated-innovation-advantage">Integrated Innovation Advantage</Link>
              </nav>

              <Link className="btn btn--ghost" href="/innovation">
                Inside innovation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* ========================================================================
         Force-for-good band — Aditya Birla's two-tone statement
         ==================================================================== */}
    <section className="pad bg-night force" id="force">
      <div className="wrap">
        <h2 className="rise"><b>A Force</b> For Good</h2>
        <p className="rise">
          Halogen-free chemistry, bio-based intermediates, solvent recovery and
          effluent treatment — environmental responsibility built into the process,
          not bolted on after it.
        </p>
        <Link className="btn btn--ghost rise" href="/sustainability">Our commitments</Link>

        <div className="pillars rise">
          <div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v18M5 8h14M7 13h10M9 18h6" /></svg>
            <h3>Manufacturing</h3>
            <p>Advanced reactors, precision control and continuous monitoring in environmentally compliant plants.</p>
          </div>
          <div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3v6l-5 9a3 3 0 0 0 3 4h10a3 3 0 0 0 3-4l-5-9V3M8 3h8M7.5 15h9" /></svg>
            <h3>Research</h3>
            <p>New molecules, optimised processes and customised solutions with industry and academic partners.</p>
          </div>
          <div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></svg>
            <h3>Export</h3>
            <p>Compliant packaging, TDS and SDS for every grade, coordinated shipping worldwide.</p>
          </div>
          <div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l8 4v5c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V7z" /><path d="m9 12 2 2 4-4" /></svg>
            <h3>Quality</h3>
            <p>Multi-stage testing in in-house laboratories, aligned with ISO, REACH and global safety norms.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ========================================================================
         Media row — Aditya Birla's five-up strip
         ==================================================================== */}
    <section className="pad-sm" id="media">
      <div className="bleed">
        <div className="sec-head">
          <h2>Media</h2>
          <p><Link className="link-arrow" href="/innovation">All updates <span aria-hidden="true">→</span></Link></p>
        </div>
        <div className="media rise">
          <Link className="mcard bg-media-innovation" href="/innovation">
            <div className="mcard__img"></div>
            <time dateTime="2026-07">July 2026</time>
            <h3>Halogen-free hypophosphites reach uniform particle-size spec</h3>
          </Link>
          <Link className="mcard bg-media-rnd" href="/rnd">
            <div className="mcard__img"></div>
            <time dateTime="2026-06">June 2026</time>
            <h3>Inside the lab-to-plant scale-up of 12-hydroxy lithium stearate</h3>
          </Link>
          <Link className="mcard bg-media-sustain" href="/sustainability">
            <div className="mcard__img"></div>
            <time dateTime="2026-05">May 2026</time>
            <h3>Solvent recovery closes the loop on intermediate synthesis</h3>
          </Link>
          <Link className="mcard bg-media-capabilities" href="/capabilities">
            <div className="mcard__img"></div>
            <time dateTime="2026-04">April 2026</time>
            <h3>Battery-grade solvents: what ultra-high purity actually requires</h3>
          </Link>
          <Link className="mcard bg-media-industries" href="/industries">
            <div className="mcard__img"></div>
            <time dateTime="2026-03">March 2026</time>
            <h3>Eight grades rewriting the flame-retardancy rulebook</h3>
          </Link>
        </div>
      </div>
    </section>

    {/* ========================================================================
         Closing CTA
         ==================================================================== */}
    <section className="pad-sm">
      <div className="wrap">
        <div className="cta rise">
          <div>
            <h2>Tell us what you need to make.</h2>
            <p>Custom grades, tailored formulations and technical collaboration — from pilot batch to commercial supply.</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--gold" href="/contact">Talk to our team</Link>
            <Link className="btn btn--outline" href="/capabilities">Our capabilities</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
