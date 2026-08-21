/* Primary navigation, and the dropdown panel each link opens.
   There is no Home link: the brand capsule is the way home, and it opens
   `NAV_MENU['/']` — so that entry stays here even though no `NAV` item points
   at it.
   The eight topic families list their topics — those hrefs must match a folder
   under `app/<family>/`, and `lib/topics.ts` is the list they come from, so add
   a topic in both places. `/` and `/about` still list headings on their own
   page, and those slugs must match the `id` attributes there — but they carry
   the page in front of the fragment, because the panels open from every route,
   not only from the page they describe. */

/* `icon` is the `d` of one or more `<path>`s on a 24×24 grid, stroked in
   `currentColor` — data rather than markup, like everything else in this file,
   so the nav can stay one list and `Header` stays the only thing that renders.
   They are drawn on the panel's terms, not the bar's: the logo's dropdown gives
   each one a 34px tile at 19px, where two or three strokes read cleanly. They
   were briefly on the nav capsule itself at 14px, which is what proved the
   point — nine thin glyphs in one row read as a strip of pictograms, and they
   cost the row ~200px, pushing its wrap from 860px up to 1008px. */
export type NavLink = { href: string; label: string; icon: string[] };

export const NAV: NavLink[] = [
  { href: "/about", label: "About us",
    /* the company: an office block */
    icon: ["M4 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15", "M14 11h4a2 2 0 0 1 2 2v8",
           "M3 21h18", "M7.5 9h3", "M7.5 13h3"] },
  { href: "/divisions", label: "Divisions",
    /* ten units under one roof: a grid of separate squares */
    icon: ["M4 4h6v6H4z", "M14 4h6v6h-6z", "M4 14h6v6H4z", "M14 14h6v6h-6z"] },
  { href: "/products", label: "Products",
    /* the range, shipped: a box */
    icon: ["m12 3 8 4.5v9L12 21l-8-4.5v-9z", "m4 7.5 8 4.5 8-4.5", "M12 12v9"] },
  { href: "/industries", label: "Industries",
    /* the sectors we supply: a plant skyline */
    icon: ["M3 21h18", "M4 21V10l5.5 3.5V10L15 13.5V6l5 3v12"] },
  { href: "/applications", label: "Applications",
    /* what the chemistry does in service: layers of end use */
    icon: ["m12 3 9 4.6-9 4.6-9-4.6z", "m3 13 9 4.6 9-4.6"] },
  { href: "/capabilities", label: "Capabilities",
    /* what we can run and control: sliders */
    icon: ["M4 8h16", "M4 16h16", "M9 5.5v5", "M15 13.5v5"] },
  { href: "/rnd", label: "R&D",
    /* the laboratory: a flask with its liquid line */
    icon: ["M10 3v6.4L5 18.5A1.5 1.5 0 0 0 6.3 21h11.4a1.5 1.5 0 0 0 1.3-2.5L14 9.4V3",
           "M9 3h6", "M7.8 15h8.4"] },
  { href: "/innovation", label: "Innovation",
    /* where the next product comes from: a bulb */
    icon: ["M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z",
           "M10 19h4", "M10.5 21h3"] },
  { href: "/sustainability", label: "Sustainability",
    /* a lower footprint: a leaf on its stem */
    icon: ["M11.5 20.5A7.5 7.5 0 0 1 10 6.2C15.5 5 17.2 4.4 19.2 2c1 2 1.8 4.3 1.8 8 0 5.8-4.4 10.5-9.5 10.5z",
           "M3 21c0-3.2 2-5.7 5.4-6.4 2.6-.5 5.2-2.1 6.6-3.6"] },
];

/* A dropdown link is a whole href, never a bare fragment: most point at a
   topic's own page under its family's folder, while `/` (the brand panel) and
   `/about` jump to a heading on the page itself. A bare `#slug` would resolve
   against whatever route the panel was opened from — the home menu used to hold
   six of them, so from `/about` "What we make" went to `/about#statement`,
   which is nothing. */
/* `links` is optional, and `/products` is the one entry without it: its panel
   is a different thing from the others — the ten groups with their division
   number and how many grades each holds, built from `lib/topics.ts` and
   `lib/products.ts` on the server (see `productMenu()`), so the names cannot
   drift from the register the way a second copy typed out here could. Every
   other family still lists its topics as hrefs. */
export type NavMenu = { about: string; links?: [href: string, label: string][] };

export const NAV_MENU: Record<string, NavMenu> = {
  '/': {
    about: "Speciality chemistry manufactured and exported from Surat — ten divisions, 112 grades, one integrated plant.",
    links: [
    ['/#statement', "What we make"],
    ['/#products', "Our products"],
    ['/#finder', "Find a product"],
    ['/#divisions', "Ten divisions"],
    ['/#industries', "Industries served"],
    ['/#force', "A force for good"],
    ['/#media', "Latest media"],
    ]
  },
  '/about': {
    about: "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.",
    links: [
    ['/about#global-presence', "Global presence"],
    ['/about#manufacturing-excellence', "Manufacturing excellence"],
    ['/about#research-and-development', "Research & development"],
    ['/about#quality-and-compliance', "Quality & compliance"],
    ['/about#our-vision', "Our vision"],
    ]
  },
  '/divisions': {
    about: "Ten specialised divisions under one roof, structured so scale never costs you technical attention.",
    links: [
    ['/divisions/lithium-metal-additives', "Lithium & Metal Additives"],
    ['/divisions/inorganic-flame-retardant-chemicals', "Inorganic & Flame-Retardant Chemicals"],
    ['/divisions/organic-pharmaceutical-intermediates', "Organic & Pharmaceutical Intermediates"],
    ['/divisions/polymers-resins-high-performance-materials', "Polymers, Resins & High-Performance Materials"],
    ['/divisions/surfactants-detergents-bio-based-chemicals', "Surfactants, Detergents & Bio-Based Chemicals"],
    ['/divisions/electrochemical-battery-electronic-chemicals', "Electrochemical, Battery & Electronic Chemicals"],
    ['/divisions/paints-coatings-pigments', "Paints, Coatings & Pigments"],
    ['/divisions/nutraceutical-cosmetic-food-chemicals', "Nutraceutical, Cosmetic & Food Chemicals"],
    ['/divisions/water-treatment-industrial-additives', "Water Treatment & Industrial Additives"],
    ['/divisions/functional-high-performance-materials', "Functional & High-Performance Materials"],
    ]
  },
  '/products': {
    /* no `links`: the products panel is built from the register — see NavMenu */
    about: "The full range — 112 grades built for high performance, consistency and regulatory confidence.",
  },
  '/industries': {
    about: "The sectors we formulate for, and what each one asks of a speciality chemical supplier.",
    links: [
    ['/industries/automotive-transportation', "Automotive & Transportation"],
    ['/industries/polymers-engineering-plastics', "Polymers & Engineering Plastics"],
    ['/industries/electrical-electronics', "Electrical & Electronics"],
    ['/industries/industrial-machinery-equipment', "Industrial Machinery & Equipment"],
    ['/industries/coatings-composites', "Coatings & Composites"],
    ['/industries/pharmaceutical-agrochemical', "Pharmaceutical & Agrochemical"],
    ['/industries/construction-infrastructure', "Construction & Infrastructure"],
    ['/industries/energy-storage-electronics', "Energy Storage & Electronics"],
    ['/industries/nutraceutical-cosmetic-food', "Nutraceutical, Cosmetic & Food"],
    ['/industries/research-driven-specialty-industries', "Research-Driven Specialty Industries"],
    ]
  },
  '/applications': {
    about: "What our chemistry actually does in service — the end uses each grade was developed for.",
    links: [
    ['/applications/lubrication-grease', "Lubrication & Grease"],
    ['/applications/flame-retardancy', "Flame Retardancy"],
    ['/applications/polymers-engineering', "Polymers & Engineering"],
    ['/applications/electrical-electronics', "Electrical & Electronics"],
    ['/applications/automotive', "Automotive"],
    ['/applications/industrial-machinery-equipment', "Industrial Machinery & Equipment"],
    ['/applications/coatings-composites', "Coatings & Composites"],
    ['/applications/pharmaceutical-agrochemical', "Pharmaceutical & Agrochemical"],
    ['/applications/energy-storage-electronics', "Energy Storage & Electronics"],
    ['/applications/nutraceutical-cosmetic-food', "Nutraceutical, Cosmetic & Food"],
    ]
  },
  '/capabilities': {
    about: "Manufacturing, laboratory, quality and export capability, described plainly.",
    links: [
    ['/capabilities/advanced-manufacturing', "Advanced Manufacturing"],
    ['/capabilities/research-development-excellence', "Research & Development Excellence"],
    ['/capabilities/quality-assurance-compliance', "Quality Assurance & Compliance"],
    ['/capabilities/technical-application-support', "Technical & Application Support"],
    ['/capabilities/global-export-logistics', "Global Export & Logistics"],
    ['/capabilities/sustainability-integration', "Sustainability Integration"],
    ]
  },
  '/rnd': {
    about: "The laboratories, instruments and synthesis work behind every grade we ship.",
    links: [
    ['/rnd/product-innovation-development', "Product Innovation & Development"],
    ['/rnd/advanced-analytical-testing', "Advanced Analytical & Testing"],
    ['/rnd/application-specific-research', "Application-Specific Research"],
    ['/rnd/sustainable-green-chemistry', "Sustainable & Green Chemistry"],
    ['/rnd/collaboration-knowledge-sharing', "Collaboration & Knowledge Sharing"],
    ['/rnd/integrated-r-d-excellence', "Integrated R&D Excellence"],
    ]
  },
  '/innovation': {
    about: "Where the next products come from — in the flask, on the plant floor, and with customers.",
    links: [
    ['/innovation/product-innovation', "Product Innovation"],
    ['/innovation/process-manufacturing-innovation', "Process & Manufacturing Innovation"],
    ['/innovation/application-industry-specific-innovation', "Application & Industry-Specific Innovation"],
    ['/innovation/sustainable-green-innovation', "Sustainable & Green Innovation"],
    ['/innovation/collaboration-knowledge-innovation', "Collaboration & Knowledge Innovation"],
    ['/innovation/integrated-innovation-advantage', "Integrated Innovation Advantage"],
    ]
  },
  '/sustainability': {
    about: "How the plant, the portfolio and the people are being held to a lower footprint.",
    links: [
    ['/sustainability/environmental-stewardship', "Environmental Stewardship"],
    ['/sustainability/sustainable-product-innovation', "Sustainable Product Innovation"],
    ['/sustainability/energy-resource-optimisation', "Energy & Resource Optimisation"],
    ['/sustainability/health-safety-community', "Health, Safety & Community"],
    ['/sustainability/circular-economy-waste', "Circular Economy & Waste"],
    ['/sustainability/integrated-sustainability-excellence', "Integrated Sustainability Excellence"],
    ]
  },
};
