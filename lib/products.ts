/* The full range, mirroring the divisions on /products. Every grade has a page
   of its own at /products/<group>/<grade>, generated from this list. Three
   coupling constraints: `ind` values must match the industry radio values in
   components/Finder.tsx, `cs` must be the slug of a product group in
   lib/topics.ts, and `s` must be the folder name under it — a grade whose
   folder is missing is a 404 the build will not catch. */

export type Product = {
  /** name */          n: string;
  /** slug */          s: string;
  /** category slug */ cs: string;
  /** division no */   d: string;
  /** category */      c: string;
  /** industries */    ind: string[];
  /** teaser */        t: string;
};

/** Where a grade's own page lives — under the product group it belongs to. */
export const gradeHref = (p: Product) => `/products/${p.cs}/${p.s}`;

export const findGrade = (categorySlug: string, slug: string) =>
  PRODUCTS.find((p) => p.cs === categorySlug && p.s === slug) ?? null;

/** The other grades in the same group, for the walk at the foot of a page. */
export const gradesIn = (categorySlug: string) =>
  PRODUCTS.filter((p) => p.cs === categorySlug);

/* The industry facet: the values are what a grade's `ind` list holds and what
   `/finder?industry=` accepts, so the finder's radios, the grade pages and the
   query-string API all read one list. */
export const INDUSTRIES: [value: string, label: string][] = [
  ["", "All industries"],
  ["automotive", "Automotive & transportation"],
  ["polymers", "Polymers & engineering plastics"],
  ["electronics", "Electrical & electronics"],
  ["machinery", "Industrial machinery"],
  ["coatings", "Coatings & composites"],
  ["pharma", "Pharmaceutical & agrochemical"],
  ["construction", "Construction & infrastructure"],
  ["energy", "Energy storage"],
  ["nutra", "Nutraceutical, cosmetic & food"],
  ["water", "Water treatment"],
];

export const industryLabel = (value: string) =>
  INDUSTRIES.find(([v]) => v === value)?.[1] ?? value;

export const PRODUCTS: Product[] = [
    // 01 · Lithium & metal additives
    { n: 'Lithium Myristate', s: 'lithium-myristate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['automotive', 'machinery'],
      t: 'High-purity lithium soap thickener for industrial and automotive lubricants, with excellent thermal stability and water resistance.' },
    { n: '12-Hydroxy Lithium Stearate', s: '12-hydroxy-lithium-stearate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['automotive', 'machinery'],
      t: 'Lithium soap for high-temperature, heavy-duty greases running under sustained mechanical load.' },
    { n: 'Calcium Stearate', s: 'calcium-stearate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['polymers', 'coatings'],
      t: 'Metal stearate acting as a lubricant, release agent and acid scavenger in plastics processing.' },
    { n: 'Aluminum Stearate', s: 'aluminum-stearate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['coatings', 'polymers'],
      t: 'Gelling and water-repellent additive for paints, inks and industrial coatings.' },

    // 02 · Flame retardants
    { n: 'Aluminium Hypophosphite', s: 'aluminium-hypophosphite', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics', 'construction'],
      t: 'Halogen-free flame retardant for engineering plastics (PA, PBT, PET), with uniform particle size for predictable dispersion.' },
    { n: 'Calcium Hypophosphite', s: 'calcium-hypophosphite', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics'],
      t: 'Halogen-free additive raising fire resistance in cables and coatings while reducing smoke and toxicity.' },
    { n: 'Magnesium Hypophosphite', s: 'magnesium-hypophosphite', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics'],
      t: 'Thermally stable hypophosphite for flame-retardant polymer compounds and electrical components.' },

    // 03 · Intermediates
    { n: '1-Phenyl Oxide', s: '1-phenyl-oxide', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'],
      t: 'Intermediate for pharmaceutical, agrochemical and industrial applications, supplied at controlled purity.' },
    { n: 'Triazolo Pyridione', s: 'triazolo-pyridione', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'],
      t: 'Heterocyclic compound for R&D and industrial synthesis, reproducible batch to batch.' },
    { n: 'Benzimidazole Derivatives', s: 'benzimidazole-derivatives', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'],
      t: 'Building blocks for active pharmaceutical ingredients and crop-protection chemistry.' },
    { n: '2-Aminopyridine', s: '2-aminopyridine', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'],
      t: 'Versatile intermediate for drug synthesis and fine-chemical manufacture.' },
    { n: 'Indole Derivatives', s: 'indole-derivatives', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'],
      t: 'High-purity heterocyclics for pharmaceutical research and commercial-scale production.' },

    // 04 · Polymers & resins
    { n: 'Epoxy & Phenolic Resins', s: 'epoxy-phenolic-resins', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['coatings', 'construction'],
      t: 'Structural resins for adhesives, composites and protective coatings.' },
    { n: 'Polyurethane & Polyamide Intermediates', s: 'polyurethane-polyamide-intermediates', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['coatings', 'automotive'],
      t: 'Intermediates for flexible and rigid systems across coatings, adhesives and mouldings.' },
    { n: 'PTFE & Fluoropolymer Intermediates', s: 'ptfe-fluoropolymer-intermediates', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['machinery', 'electronics'],
      t: 'Low-friction, chemically inert materials for demanding industrial environments.' },
    { n: 'Heat-Resistant Functional Polymers', s: 'heat-resistant-functional-polymers', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['automotive', 'machinery'],
      t: 'Grades engineered to hold mechanical properties at elevated service temperatures.' },

    // 05 · Surfactants
    { n: 'Sodium Lauryl Sulfate (SLS)', s: 'sodium-lauryl-sulfate-sls', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra', 'machinery'],
      t: 'Anionic surfactant for industrial cleaning and formulation work.' },
    { n: 'Tween 80 / Span 60', s: 'tween-80-span-60', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra', 'pharma'],
      t: 'Non-ionic emulsifiers for stable oil-in-water and water-in-oil systems.' },
    { n: 'Plant-Derived Surfactants', s: 'plant-derived-surfactants', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra', 'coatings'],
      t: 'Bio-based wetting agents for greener cleaning and coating formulations.' },
    { n: 'Bio-Based Solvents', s: 'bio-based-solvents', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['coatings', 'pharma'],
      t: 'Renewable-feedstock solvents replacing petrochemical equivalents in process chemistry.' },

    // 06 · Battery & electronic
    { n: 'Lithium Carbonate', s: 'lithium-carbonate', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy'],
      t: 'Battery-grade lithium salt for cathode and electrolyte manufacture.' },
    { n: 'Lithium Hydroxide', s: 'lithium-hydroxide', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy'],
      t: 'High-purity precursor for nickel-rich cathode chemistries.' },
    { n: 'Electrolyte Salts (LiPF₆, LiBF₄)', s: 'electrolyte-salts-lipf-libf', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy', 'electronics'],
      t: 'Conductive salts for lithium-ion cell electrolytes, moisture-controlled throughout packing.' },
    { n: 'TMAH (Tetramethylammonium Hydroxide)', s: 'tmah-tetramethylammonium-hydroxide', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['electronics'],
      t: 'Semiconductor-grade developer and etchant for photolithography.' },
    { n: 'Electronic-Grade Solvents', s: 'electronic-grade-solvents', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['electronics', 'energy'],
      t: 'Ultra-high-purity solvents with trace-metal specifications for device manufacture.' },

    // 07 · Pigments
    { n: 'Quinacridone Pigments', s: 'quinacridone-pigments', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'automotive'],
      t: 'Organic pigment with high lightfastness for automotive and industrial finishes.' },
    { n: 'Phthalocyanine Blue', s: 'phthalocyanine-blue', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings'],
      t: 'Strong, stable organic blue for coatings, inks and plastics.' },
    { n: 'Iron Oxide Pigments', s: 'iron-oxide-pigments', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'construction'],
      t: 'Inorganic pigments for durable colour in construction and protective coatings.' },
    { n: 'Titanium Dioxide', s: 'titanium-dioxide', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'polymers'],
      t: 'Opacifying white pigment with controlled dispersion behaviour.' },
    { n: 'UV Stabilisers & Dispersants', s: 'uv-stabilisers-dispersants', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'polymers'],
      t: 'Coating additives extending service life and keeping pigment loads stable.' },

    // 08 · Nutraceutical & cosmetic
    { n: 'Ascorbic Acid & Derivatives', s: 'ascorbic-acid-derivatives', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra', 'pharma'],
      t: 'Vitamin C actives for functional foods, supplements and topical formulations.' },
    { n: 'Niacinamide', s: 'niacinamide', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra'],
      t: 'Vitamin B3 intermediate widely used in cosmetic and nutraceutical products.' },
    { n: 'Hyaluronic Acid Derivatives', s: 'hyaluronic-acid-derivatives', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra', 'pharma'],
      t: 'Humectant actives supplied across molecular-weight grades.' },
    { n: 'PABA', s: 'paba', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra', 'pharma'],
      t: 'Para-aminobenzoic acid for pharmaceutical and personal-care formulation.' },

    // 09 · Water treatment
    { n: 'Phosphonates & Polyphosphates', s: 'phosphonates-polyphosphates', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water', 'energy'],
      t: 'Scale control for cooling towers, boilers and process water systems.' },
    { n: 'Anti-Scalants', s: 'anti-scalants', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water'],
      t: 'Threshold inhibitors keeping heat-transfer surfaces clean under hard-water duty.' },
    { n: 'Corrosion Inhibitors', s: 'corrosion-inhibitors', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water', 'machinery'],
      t: 'Filming and passivating chemistries protecting carbon steel and mixed-metallurgy loops.' },

    // 10 · Functional materials
    { n: 'Specialty Coatings & Films', s: 'specialty-coatings-films', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['electronics', 'coatings'],
      t: 'Thin-film chemistries for barrier, release and functional surface properties.' },
    { n: 'Graphene & Nano Additives', s: 'graphene-nano-additives', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['electronics', 'polymers'],
      t: 'Conductive and reinforcing additives for next-generation composites.' },
    { n: 'Fluorosilicone Fluids', s: 'fluorosilicone-fluids', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['automotive', 'machinery'],
      t: 'Fuel- and solvent-resistant fluids for sealing and lubrication in aggressive service.' }
  ];
