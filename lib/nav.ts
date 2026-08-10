/* Primary navigation, and the dropdown panel each link opens.
   The eight topic families list their topics — those hrefs must match a folder
   under `app/<family>/`, and `lib/topics.ts` is the list they come from, so add
   a topic in both places. `/` and `/about` still list headings on their own
   page, and those slugs must match the `id` attributes there — but they carry
   the page in front of the fragment, because the panels open from every route,
   not only from the page they describe. */

export type NavLink = { href: string; label: string };

export const NAV: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/divisions", label: "Divisions" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/applications", label: "Applications" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/rnd", label: "R&D" },
  { href: "/innovation", label: "Innovation" },
  { href: "/sustainability", label: "Sustainability" },
];

/* A dropdown link is a whole href, never a bare fragment: most point at a
   topic's own page under its family's folder, while `/` and `/about` jump to a
   heading on the page itself. A bare `#slug` would resolve against whatever
   route the panel was opened from — the home menu used to hold six of them, so
   from `/about` "What we make" went to `/about#statement`, which is nothing. */
export type NavMenu = { about: string; links: [href: string, label: string][] };

export const NAV_MENU: Record<string, NavMenu> = {
  '/': {
    about: "Speciality chemistry manufactured and exported from Surat — ten divisions, forty grades, one integrated plant.",
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
    about: "The full range — forty grades built for high performance, consistency and regulatory confidence.",
    links: [
    ['/products/lithium-metal-additives', "Lithium & Metal Additives"],
    ['/products/flame-retardant-inorganic-salts', "Flame-Retardant & Inorganic Salts"],
    ['/products/organic-pharmaceutical-intermediates', "Organic & Pharmaceutical Intermediates"],
    ['/products/polymers-resins-high-performance-materials', "Polymers, Resins & High-Performance Materials"],
    ['/products/surfactants-detergents-bio-based-chemicals', "Surfactants, Detergents & Bio-Based Chemicals"],
    ['/products/electrochemical-battery-electronic-chemicals', "Electrochemical, Battery & Electronic Chemicals"],
    ['/products/paints-coatings-pigments', "Paints, Coatings & Pigments"],
    ['/products/nutraceutical-cosmetic-food-chemicals', "Nutraceutical, Cosmetic & Food Chemicals"],
    ['/products/water-treatment-industrial-additives', "Water Treatment & Industrial Additives"],
    ['/products/functional-high-performance-materials', "Functional & High-Performance Materials"],
    ]
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
