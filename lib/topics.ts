/* Every topic on the site that has a page of its own: the ten applications,
   ten industries, ten business units and ten product groups, plus the six
   capabilities, innovations, research themes and sustainability programmes.

   This holds only what a listing needs — number, title, the one-line
   description and the picture. The copy itself lives on each topic's own page
   under `app/<family>/<slug>/`, transcribed from the source RTF like the rest.
   `img` is a class from the photography block in `app/globals.css`; `banner` is
   the family's own, which every topic in it shares. Adding a topic means a page
   under the family's folder and an entry here — the listing grid, the nav
   dropdown and the previous/next links all read from this. */

export type Topic = {
  slug: string;
  num: string;
  title: string;
  blurb: string;
  img: string;
};

export type Family = {
  key: string;
  label: string;
  href: string;
  banner: string;
  titleSegment: string;
  topics: Topic[];
};

export const FAMILIES: Family[] = [
  {
    key: "applications",
    label: "Applications",
    href: "/applications",
    banner: "bg-page-applications",
    titleSegment: "Applications",
    topics: [
      { slug: "lubrication-grease", num: "01", title: "Lubrication & Grease", blurb: "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics", img: "bg-app-01-lubrication" },
      { slug: "flame-retardancy", num: "02", title: "Flame Retardancy", blurb: "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials", img: "bg-app-02-flame" },
      { slug: "polymers-engineering", num: "03", title: "Polymers & Engineering", blurb: "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics", img: "bg-app-03-polymers" },
      { slug: "electrical-electronics", num: "04", title: "Electrical & Electronics", blurb: "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics", img: "bg-app-04-electronics" },
      { slug: "automotive", num: "05", title: "Automotive", blurb: "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery", img: "bg-app-05-automotive" },
      { slug: "industrial-machinery-equipment", num: "06", title: "Industrial Machinery & Equipment", blurb: "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment", img: "bg-app-06-machinery" },
      { slug: "coatings-composites", num: "07", title: "Coatings & Composites", blurb: "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing", img: "bg-app-07-coatings" },
      { slug: "pharmaceutical-agrochemical", num: "08", title: "Pharmaceutical & Agrochemical", blurb: "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D", img: "bg-app-08-pharma" },
      { slug: "energy-storage-electronics", num: "09", title: "Energy Storage & Electronics", blurb: "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics", img: "bg-app-09-energy" },
      { slug: "nutraceutical-cosmetic-food", num: "10", title: "Nutraceutical, Cosmetic & Food", blurb: "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals", img: "bg-app-10-nutra" },
    ],
  },
  {
    key: "industries",
    label: "Industries",
    href: "/industries",
    banner: "bg-page-industries",
    titleSegment: "Industries",
    topics: [
      { slug: "automotive-transportation", num: "01", title: "Automotive & Transportation", blurb: "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives", img: "bg-ind-automotive" },
      { slug: "polymers-engineering-plastics", num: "02", title: "Polymers & Engineering Plastics", blurb: "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite", img: "bg-ind-polymers" },
      { slug: "electrical-electronics", num: "03", title: "Electrical & Electronics", blurb: "Aluminium Hypophosphite · Magnesium Hypophosphite", img: "bg-ind-electronics" },
      { slug: "industrial-machinery-equipment", num: "04", title: "Industrial Machinery & Equipment", blurb: "Lithium soaps · Organic & pharmaceutical intermediates", img: "bg-app-06-machinery" },
      { slug: "coatings-composites", num: "05", title: "Coatings & Composites", blurb: "Hypophosphite salts · Organic & pharmaceutical intermediates", img: "bg-ind-coatings" },
      { slug: "pharmaceutical-agrochemical", num: "06", title: "Pharmaceutical & Agrochemical", blurb: "1-Phenyl Oxide · Triazolo Pyridione", img: "bg-ind-pharma" },
      { slug: "construction-infrastructure", num: "07", title: "Construction & Infrastructure", blurb: "Hypophosphite salts · Organic & pharmaceutical intermediates", img: "bg-ind-construction" },
      { slug: "energy-storage-electronics", num: "08", title: "Energy Storage & Electronics", blurb: "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents", img: "bg-ind-energy" },
      { slug: "nutraceutical-cosmetic-food", num: "09", title: "Nutraceutical, Cosmetic & Food", blurb: "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA", img: "bg-app-10-nutra" },
      { slug: "research-driven-specialty-industries", num: "10", title: "Research-Driven Specialty Industries", blurb: "Graphene & nano additives · High-performance polymers · Functional coatings", img: "bg-media-innovation" },
    ],
  },
  {
    key: "divisions",
    label: "Business units",
    href: "/divisions",
    banner: "bg-page-divisions",
    titleSegment: "Business Units",
    topics: [
      { slug: "lithium-metal-additives", num: "01", title: "Lithium & Metal Additives", blurb: "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.", img: "bg-div-01-lithium" },
      { slug: "inorganic-flame-retardant-chemicals", num: "02", title: "Inorganic & Flame-Retardant Chemicals", blurb: "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.", img: "bg-div-02-flame" },
      { slug: "organic-pharmaceutical-intermediates", num: "03", title: "Organic & Pharmaceutical Intermediates", blurb: "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.", img: "bg-div-03-pharma" },
      { slug: "polymers-resins-high-performance-materials", num: "04", title: "Polymers, Resins & High-Performance Materials", blurb: "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.", img: "bg-div-04-polymers" },
      { slug: "surfactants-detergents-bio-based-chemicals", num: "05", title: "Surfactants, Detergents & Bio-Based Chemicals", blurb: "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.", img: "bg-div-05-surfactants" },
      { slug: "electrochemical-battery-electronic-chemicals", num: "06", title: "Electrochemical, Battery & Electronic Chemicals", blurb: "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.", img: "bg-div-06-battery" },
      { slug: "paints-coatings-pigments", num: "07", title: "Paints, Coatings & Pigments", blurb: "High-value pigments, coatings intermediates and additive solutions.", img: "bg-div-07-pigments" },
      { slug: "nutraceutical-cosmetic-food-chemicals", num: "08", title: "Nutraceutical, Cosmetic & Food Chemicals", blurb: "Vitamins, nutraceuticals, cosmetic actives and functional food additives.", img: "bg-div-08-nutra" },
      { slug: "water-treatment-industrial-additives", num: "09", title: "Water Treatment & Industrial Additives", blurb: "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.", img: "bg-div-09-water" },
      { slug: "functional-high-performance-materials", num: "10", title: "Functional & High-Performance Materials", blurb: "Niche chemicals for aerospace, automotive, electronics and industrial applications.", img: "bg-media-innovation" },
    ],
  },
  {
    key: "products",
    label: "Products",
    href: "/products",
    banner: "bg-page-products",
    titleSegment: "Products",
    topics: [
      { slug: "lithium-metal-additives", num: "01", title: "Lithium & Metal Additives", blurb: "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.", img: "bg-div-01-lithium" },
      { slug: "flame-retardant-inorganic-salts", num: "02", title: "Flame-Retardant & Inorganic Salts", blurb: "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.", img: "bg-div-02-flame" },
      { slug: "organic-pharmaceutical-intermediates", num: "03", title: "Organic & Pharmaceutical Intermediates", blurb: "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.", img: "bg-div-03-pharma" },
      { slug: "polymers-resins-high-performance-materials", num: "04", title: "Polymers, Resins & High-Performance Materials", blurb: "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.", img: "bg-div-04-polymers" },
      { slug: "surfactants-detergents-bio-based-chemicals", num: "05", title: "Surfactants, Detergents & Bio-Based Chemicals", blurb: "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.", img: "bg-div-05-surfactants" },
      { slug: "electrochemical-battery-electronic-chemicals", num: "06", title: "Electrochemical, Battery & Electronic Chemicals", blurb: "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.", img: "bg-div-06-battery" },
      { slug: "paints-coatings-pigments", num: "07", title: "Paints, Coatings & Pigments", blurb: "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.", img: "bg-div-07-pigments" },
      { slug: "nutraceutical-cosmetic-food-chemicals", num: "08", title: "Nutraceutical, Cosmetic & Food Chemicals", blurb: "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.", img: "bg-div-08-nutra" },
      { slug: "water-treatment-industrial-additives", num: "09", title: "Water Treatment & Industrial Additives", blurb: "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.", img: "bg-div-09-water" },
      { slug: "functional-high-performance-materials", num: "10", title: "Functional & High-Performance Materials", blurb: "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.", img: "bg-media-innovation" },
    ],
  },
  {
    key: "capabilities",
    label: "Capabilities",
    href: "/capabilities",
    banner: "bg-page-capabilities",
    titleSegment: "Capabilities",
    topics: [
      { slug: "advanced-manufacturing", num: "01", title: "Advanced Manufacturing", blurb: "Modern plants with automated systems, advanced reactors and precision instrumentation.", img: "bg-proof-manufacturing" },
      { slug: "research-development-excellence", num: "02", title: "Research & Development Excellence", blurb: "Application-focused development, innovation laboratories and collaborative formulation work.", img: "bg-media-rnd" },
      { slug: "quality-assurance-compliance", num: "03", title: "Quality Assurance & Compliance", blurb: "Multi-stage testing, global standards and full documentation traceability.", img: "bg-proof-qc" },
      { slug: "technical-application-support", num: "04", title: "Technical & Application Support", blurb: "Application engineering, performance evaluation and knowledge transfer.", img: "bg-media-capabilities" },
      { slug: "global-export-logistics", num: "05", title: "Global Export & Logistics", blurb: "Compliant packaging, documentation and a reliable worldwide shipping network.", img: "bg-media-industries" },
      { slug: "sustainability-integration", num: "06", title: "Sustainability Integration", blurb: "Environmental responsibility built into how we produce, not bolted on afterwards.", img: "bg-media-sustain" },
    ],
  },
  {
    key: "innovation",
    label: "Innovation",
    href: "/innovation",
    banner: "bg-page-innovation",
    titleSegment: "Innovation",
    topics: [
      { slug: "product-innovation", num: "01", title: "Product Innovation", blurb: "", img: "bg-media-innovation" },
      { slug: "process-manufacturing-innovation", num: "02", title: "Process & Manufacturing Innovation", blurb: "", img: "bg-proof-manufacturing" },
      { slug: "application-industry-specific-innovation", num: "03", title: "Application & Industry-Specific Innovation", blurb: "", img: "bg-media-industries" },
      { slug: "sustainable-green-innovation", num: "04", title: "Sustainable & Green Innovation", blurb: "", img: "bg-media-sustain" },
      { slug: "collaboration-knowledge-innovation", num: "05", title: "Collaboration & Knowledge Innovation", blurb: "", img: "bg-media-rnd" },
      { slug: "integrated-innovation-advantage", num: "06", title: "Integrated Innovation Advantage", blurb: "", img: "bg-proof-qc" },
    ],
  },
  {
    key: "rnd",
    label: "R&D",
    href: "/rnd",
    banner: "bg-page-rnd",
    titleSegment: "Research & Development",
    topics: [
      { slug: "product-innovation-development", num: "01", title: "Product Innovation & Development", blurb: "", img: "bg-media-innovation" },
      { slug: "advanced-analytical-testing", num: "02", title: "Advanced Analytical & Testing", blurb: "", img: "bg-proof-qc" },
      { slug: "application-specific-research", num: "03", title: "Application-Specific Research", blurb: "", img: "bg-media-industries" },
      { slug: "sustainable-green-chemistry", num: "04", title: "Sustainable & Green Chemistry", blurb: "", img: "bg-media-sustain" },
      { slug: "collaboration-knowledge-sharing", num: "05", title: "Collaboration & Knowledge Sharing", blurb: "", img: "bg-media-capabilities" },
      { slug: "integrated-r-d-excellence", num: "06", title: "Integrated R&D Excellence", blurb: "", img: "bg-proof-manufacturing" },
    ],
  },
  {
    key: "sustainability",
    label: "Sustainability",
    href: "/sustainability",
    banner: "bg-page-sustainability",
    titleSegment: "Sustainability",
    topics: [
      { slug: "environmental-stewardship", num: "01", title: "Environmental Stewardship", blurb: "", img: "bg-media-sustain" },
      { slug: "sustainable-product-innovation", num: "02", title: "Sustainable Product Innovation", blurb: "", img: "bg-media-innovation" },
      { slug: "energy-resource-optimisation", num: "03", title: "Energy & Resource Optimisation", blurb: "", img: "bg-ind-energy" },
      { slug: "health-safety-community", num: "04", title: "Health, Safety & Community", blurb: "", img: "bg-proof-manufacturing" },
      { slug: "circular-economy-waste", num: "05", title: "Circular Economy & Waste", blurb: "", img: "bg-div-09-water" },
      { slug: "integrated-sustainability-excellence", num: "06", title: "Integrated Sustainability Excellence", blurb: "", img: "bg-proof-qc" },
    ],
  },
];

export const FAMILY: Record<string, Family> = Object.fromEntries(
  FAMILIES.map((f) => [f.key, f]),
);

/* A topic, its family, and the two either side of it — the topic pages walk
   the family in order, and the last one wraps to the first. */
export function findTopic(familyKey: string, slug: string) {
  const family = FAMILY[familyKey];
  if (!family) return null;
  const i = family.topics.findIndex((t) => t.slug === slug);
  if (i === -1) return null;
  const { topics } = family;
  return {
    family,
    topic: topics[i],
    prev: topics[(i - 1 + topics.length) % topics.length],
    next: topics[(i + 1) % topics.length],
  };
}

/* The frames a family's index banner cycles through: its own topics, in the
   order the grid further down the page shows them.

   This exists so the *page* does the mapping on the server and the client
   component is handed four short strings per frame. `BannerCycle` importing
   `FAMILY` itself would pull all 64 blurbs into the browser bundle for the
   sake of ten titles. */
export function bannerFrames(familyKey: string) {
  const family = FAMILY[familyKey];
  if (!family) return [];
  return family.topics.map((t) => ({
    num: t.num,
    title: t.title,
    img: t.img,
    href: `${family.href}/${t.slug}`,
  }));
}
