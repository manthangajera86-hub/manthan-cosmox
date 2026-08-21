/* The full range, mirroring the divisions on /products. Every grade has a page
   of its own at /products/<group>/<grade>, generated from this list. Three
   coupling constraints: `ind` values must match the industry radio values in
   components/Finder.tsx, `cs` must be the slug of a product group in
   lib/topics.ts, and `s` must be the folder name under it — a grade whose
   folder is missing is a 404 the build will not catch.

   The names are transcribed from `new products.rtf`, which numbers its ten
   sections in a different order to the site's own divisions; they are mapped by
   name, not by number, so `d` is the division number this site has always used.
   The one-line teasers are not in that source — they are written here, and are
   the one thing on a grade page that has not come from a client document. */

import { FAMILY } from "./topics";

export type Product = {
  /** name */          n: string;
  /** slug */          s: string;
  /** category slug */ cs: string;
  /** division no */   d: string;
  /** category */      c: string;
  /** industries */    ind: string[];
  /** applications */  app: string[];
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

/* The applications facet. The values are the slugs of the ten pages under
   `app/applications/`, so `/finder?application=flame-retardancy` and
   `/applications/flame-retardancy` name the same thing, and the labels are
   those topics' own titles so they hit the dictionaries already written for
   them. Kept as a literal rather than read from `lib/topics.ts`: `Finder` is a
   client component, and importing the register there would ship all 64 topics
   and their blurbs to the browser to render ten radio labels.

   A grade's `app` list is judgement applied to its chemistry, the same way its
   `ind` list is — neither is transcribed from the source RTF, which tags the
   range by division only. */
export const APPLICATIONS: [value: string, label: string][] = [
  ["", "All applications"],
  ["lubrication-grease", "Lubrication & Grease"],
  ["flame-retardancy", "Flame Retardancy"],
  ["polymers-engineering", "Polymers & Engineering"],
  ["electrical-electronics", "Electrical & Electronics"],
  ["automotive", "Automotive"],
  ["industrial-machinery-equipment", "Industrial Machinery & Equipment"],
  ["coatings-composites", "Coatings & Composites"],
  ["pharmaceutical-agrochemical", "Pharmaceutical & Agrochemical"],
  ["energy-storage-electronics", "Energy Storage & Electronics"],
  ["nutraceutical-cosmetic-food", "Nutraceutical, Cosmetic & Food"],
];

export const applicationLabel = (value: string) =>
  APPLICATIONS.find(([v]) => v === value)?.[1] ?? value;

export const PRODUCTS: Product[] = [
    // 01 · Lithium & Metal Additives
    { n: 'Lithium 12-Hydroxystearate', s: 'lithium-12-hydroxystearate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['automotive', 'machinery'], app: ['lubrication-grease', 'automotive', 'industrial-machinery-equipment'],
      t: 'The standard lithium soap thickener for multipurpose greases, holding structure and drop point under sustained load and heat.' },
    { n: 'Lithium Neodecanoate', s: 'lithium-neodecanoate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['coatings', 'machinery'], app: ['lubrication-grease', 'coatings-composites'],
      t: 'Oil-soluble branched-chain lithium carboxylate for grease formulation and as a metal-carboxylate catalyst in coatings.' },
    { n: 'Lithium Ricinoleate', s: 'lithium-ricinoleate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['machinery', 'polymers'], app: ['lubrication-grease', 'polymers-engineering'],
      t: 'Castor-derived lithium soap used as a lubricant and internal release additive in greases and polymer processing.' },
    { n: 'Calcium 12-Hydroxystearate', s: 'calcium-12-hydroxystearate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['machinery', 'polymers'], app: ['lubrication-grease', 'polymers-engineering'],
      t: 'Calcium soap thickener for water-resistant greases, and a lubricant and acid scavenger in plastics processing.' },
    { n: 'Zinc Ricinoleate', s: 'zinc-ricinoleate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['nutra', 'polymers'], app: ['nutraceutical-cosmetic-food', 'polymers-engineering'],
      t: 'Zinc soap of ricinoleic acid, used as an odour-absorbing active in personal care and as a processing additive.' },
    { n: 'Lithium Myristate', s: 'lithium-myristate', cs: 'lithium-metal-additives', d: '01', c: 'Lithium & Metal Additives', ind: ['automotive', 'machinery'], app: ['lubrication-grease', 'automotive', 'industrial-machinery-equipment'],
      t: 'High-purity lithium soap thickener for industrial and automotive lubricants, with excellent thermal stability and water resistance.' },

    // 02 · Flame-Retardant & Inorganic Salts
    { n: 'Aluminium Hypophosphite', s: 'aluminium-hypophosphite', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics', 'construction'], app: ['flame-retardancy', 'polymers-engineering', 'electrical-electronics'],
      t: 'Halogen-free flame retardant for engineering plastics (PA, PBT, PET), with uniform particle size for predictable dispersion.' },
    { n: 'Calcium Hypophosphite', s: 'calcium-hypophosphite', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics'], app: ['flame-retardancy', 'electrical-electronics', 'coatings-composites'],
      t: 'Halogen-free additive raising fire resistance in cables and coatings while reducing smoke and toxicity.' },
    { n: 'Magnesium Hypophosphite', s: 'magnesium-hypophosphite', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics'], app: ['flame-retardancy', 'polymers-engineering', 'electrical-electronics'],
      t: 'Thermally stable hypophosphite for flame-retardant polymer compounds and electrical components.' },
    { n: 'Aluminium Diethyl Phosphinate', s: 'aluminium-diethyl-phosphinate', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics'], app: ['flame-retardancy', 'polymers-engineering', 'electrical-electronics'],
      t: 'Halogen-free phosphinate flame retardant for glass-filled PA, PBT and PET, effective at low loadings.' },
    { n: 'Melamine Polyphosphate', s: 'melamine-polyphosphate', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics', 'construction'], app: ['flame-retardancy', 'polymers-engineering', 'coatings-composites'],
      t: 'Nitrogen-phosphorus synergist for intumescent systems and engineering-plastic flame-retardant packages.' },
    { n: 'Zinc Hydroxystannate', s: 'zinc-hydroxystannate', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'construction'], app: ['flame-retardancy', 'polymers-engineering'],
      t: 'Smoke suppressant and flame-retardant synergist for PVC and other halogenated polymer systems.' },
    { n: 'Magnesium Oxysulfate Whisker', s: 'magnesium-oxysulfate-whisker', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'construction'], app: ['flame-retardancy', 'polymers-engineering', 'coatings-composites'],
      t: 'Needle-form reinforcing filler adding stiffness and fire performance to boards and compounds.' },
    { n: 'Expandable Graphite', s: 'expandable-graphite', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'construction'], app: ['flame-retardancy', 'coatings-composites'],
      t: 'Intercalated graphite that expands into an insulating char, for intumescent seals, foams and coatings.' },
    { n: 'Zinc Borate', s: 'zinc-borate', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'coatings', 'construction'], app: ['flame-retardancy', 'coatings-composites', 'polymers-engineering'],
      t: 'Multi-functional flame retardant, smoke suppressant and anti-tracking additive for polymers and coatings.' },
    { n: 'Melamine Cyanurate', s: 'melamine-cyanurate', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics'], app: ['flame-retardancy', 'polymers-engineering', 'lubrication-grease'],
      t: 'Nitrogen-based flame retardant for unfilled polyamides, also serving as a solid lubricant.' },
    { n: 'Huntite', s: 'huntite', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'construction'], app: ['flame-retardancy', 'polymers-engineering', 'electrical-electronics'],
      t: 'Natural magnesium-calcium carbonate mineral releasing carbon dioxide on heating, for halogen-free compounds and cables.' },
    { n: 'Zinc Hypophosphite', s: 'zinc-hypophosphite', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'electronics'], app: ['flame-retardancy', 'polymers-engineering'],
      t: 'Hypophosphite salt combining flame retardancy with heat-stabilising action in polyamide and polyester compounds.' },
    { n: 'Zinc Stannate', s: 'zinc-stannate', cs: 'flame-retardant-inorganic-salts', d: '02', c: 'Flame-Retardant & Inorganic Salts', ind: ['polymers', 'construction'], app: ['flame-retardancy', 'electrical-electronics', 'polymers-engineering'],
      t: 'Halogen-free smoke suppressant and char promoter for demanding cable and construction compounds.' },

    // 03 · Organic & Pharmaceutical Intermediates
    { n: 'N-Methyl-2-pyrrolidone', s: 'n-methyl-2-pyrrolidone', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma', 'electronics'], app: ['pharmaceutical-agrochemical', 'electrical-electronics', 'polymers-engineering'],
      t: 'High-boiling polar aprotic solvent for pharmaceutical synthesis, electronics cleaning and polymer processing.' },
    { n: '[1,2,4]Triazolo[4,3-a]pyridin-3(2H)-one', s: 'triazolo-4-3-a-pyridin-3-2h-one', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Fused heterocyclic building block for pharmaceutical synthesis, supplied at controlled purity.' },
    { n: 'Diphenyl ether', s: 'diphenyl-ether', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma', 'polymers'], app: ['pharmaceutical-agrochemical', 'industrial-machinery-equipment', 'polymers-engineering'],
      t: 'Thermally stable aromatic ether used as a heat-transfer fluid and as an intermediate in fine-chemical synthesis.' },
    { n: 'Methyl 2-[(3S)-3-[3-[(1E)-2-(7-chloro-2-quinolinyl)ethenyl]phenyl]-3-hydroxypropyl]benzoate', s: 'methyl-3s-3-hydroxypropyl-quinolinyl-benzoate', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Chiral quinoline benzoate ester intermediate for API synthesis, supplied with defined stereochemistry.' },
    { n: 'N-[5-(Diphenylphosphinoylmethyl)-4-(4-fluorophenyl)-6-isopropylpyrimidin-2-yl]-N-methylmethanesulfonamide', s: 'diphenylphosphinoylmethyl-fluorophenyl-pyrimidinyl-methanesulfonamide', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Fluorophenyl-pyrimidine phosphine oxide intermediate for API manufacture, controlled for purity and isomer content.' },
    { n: '2,3-Dichlorobenzoyl chloride', s: '2-3-dichlorobenzoyl-chloride', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Reactive acyl chloride for amide and ester formation in pharmaceutical and agrochemical routes.' },
    { n: '2-Azaspiro[4.5]decan-3-one', s: '2-azaspiro-4-5-decan-3-one', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Spirocyclic lactam building block for pharmaceutical synthesis, supplied at controlled purity.' },
    { n: '(R)-(-)-3-Carbamoymethyl-5-methylhexanoic acid', s: 'r-3-carbamoymethyl-5-methylhexanoic-acid', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Single-enantiomer carbamoyl acid intermediate supplied to a defined optical purity for chiral API routes.' },
    { n: '3-Carbamoymethyl-5-methylhexanoic acid', s: '3-carbamoymethyl-5-methylhexanoic-acid', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Racemic carbamoyl acid intermediate for chiral resolution in pharmaceutical synthesis.' },
    { n: '3-(Aminomethyl)-5-methylhexanoic acid', s: '3-aminomethyl-5-methylhexanoic-acid', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Branched-chain amino acid intermediate for pharmaceutical manufacture.' },
    { n: '3-Isobutylglutaric acid', s: '3-isobutylglutaric-acid', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Branched diacid starting material for amino-acid API routes.' },
    { n: '4-Chloro-2,6-Diaminopyrimidine', s: '4-chloro-2-6-diaminopyrimidine', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Chlorinated diaminopyrimidine for nucleoside and heterocyclic drug synthesis.' },
    { n: '2-Chloro-3,5-difluoropyridine', s: '2-chloro-3-5-difluoropyridine', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Halogenated pyridine for cross-coupling and nucleophilic substitution in pharma and agrochemical routes.' },
    { n: '4-Chloro-2-fluoro-5-nitroaniline', s: '4-chloro-2-fluoro-5-nitroaniline', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Substituted nitroaniline intermediate for heterocyclic, dye and crop-protection chemistry.' },
    { n: '2-Chloro-4-(trifluoromethyl)pyrimidine', s: '2-chloro-4-trifluoromethyl-pyrimidine', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Trifluoromethylated pyrimidine for crop-protection and pharmaceutical synthesis.' },
    { n: '4-Bromo-2,6-difluoroaniline', s: '4-bromo-2-6-difluoroaniline', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Halogenated aniline for coupling chemistry in agrochemical and pharmaceutical manufacture.' },
    { n: '2,4-Dichlorophenoxyacetic acid', s: '2-4-dichlorophenoxyacetic-acid', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Phenoxy acid herbicide active and intermediate, supplied to agrochemical specification.' },
    { n: '2-Aminophenol-4-sulfonic acid', s: '2-aminophenol-4-sulfonic-acid', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma', 'coatings'], app: ['pharmaceutical-agrochemical', 'coatings-composites'],
      t: 'Amino-phenol sulfonic acid for dye, pigment and speciality intermediate synthesis.' },
    { n: 'N,N-Dimethylformamide dimethyl acetal', s: 'n-n-dimethylformamide-dimethyl-acetal', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Formylating and cyclisation reagent for heterocyclic synthesis.' },
    { n: 'Ethyl 2-bromopropionate', s: 'ethyl-2-bromopropionate', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Alkylating ester used to introduce the propionate unit in pharmaceutical and agrochemical routes.' },
    { n: '1-(2-Bromoethoxy)-2-ethoxybenzene', s: '1-2-bromoethoxy-2-ethoxybenzene', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Bromoalkyl aryl ether intermediate for alkylation steps in API synthesis.' },
    { n: 'Toluene-2,5-diamine sulfate', s: 'toluene-2-5-diamine-sulfate', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma', 'coatings'], app: ['pharmaceutical-agrochemical', 'nutraceutical-cosmetic-food'],
      t: 'Aromatic diamine sulfate for oxidative hair-colour and dye intermediate manufacture.' },
    { n: 'Cyclopropanecarboxamide', s: 'cyclopropanecarboxamide', cs: 'organic-pharmaceutical-intermediates', d: '03', c: 'Organic & Pharmaceutical Intermediates', ind: ['pharma'], app: ['pharmaceutical-agrochemical'],
      t: 'Strained-ring amide building block for pharmaceutical and agrochemical synthesis.' },

    // 04 · Polymers, Resins & High-Performance Materials
    { n: 'Polyimide', s: 'polyimide', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['electronics', 'machinery'], app: ['polymers-engineering', 'electrical-electronics', 'industrial-machinery-equipment'],
      t: 'High-temperature polymer for flexible circuits, films and parts in continuous thermal service.' },
    { n: '4,4′-(Hexafluoroisopropylidene)diphthalic anhydride', s: '4-4-hexafluoroisopropylidene-diphthalic-anhydride', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['electronics', 'polymers'], app: ['polymers-engineering', 'electrical-electronics'],
      t: '6FDA: fluorinated dianhydride for soluble, low-dielectric polyimides and gas-separation membranes.' },
    { n: '4,4′-Oxydianiline', s: '4-4-oxydianiline', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['electronics', 'polymers'], app: ['polymers-engineering', 'electrical-electronics'],
      t: 'ODA: aromatic diamine paired with dianhydrides in classical polyimide synthesis.' },
    { n: 'Polybenzimidazole', s: 'polybenzimidazole', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['machinery', 'electronics'], app: ['polymers-engineering', 'industrial-machinery-equipment', 'electrical-electronics'],
      t: 'PBI resin for compression-moulded parts and high-temperature membranes and fibres.' },
    { n: 'Polyether Ketone Ketone', s: 'polyether-ketone-ketone', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['machinery', 'automotive'], app: ['polymers-engineering', 'automotive', 'industrial-machinery-equipment'],
      t: 'PEKK: high-temperature PAEK with a tunable melt window for composites and additive manufacture.' },
    { n: 'Polyetherimide', s: 'polyetherimide', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['electronics', 'automotive'], app: ['polymers-engineering', 'electrical-electronics', 'automotive'],
      t: 'PEI: amorphous high-heat thermoplastic with inherent flame retardance and dimensional stability.' },
    { n: 'Hexafluoroisopropylidene Bisphenol', s: 'hexafluoroisopropylidene-bisphenol', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['polymers', 'electronics'], app: ['polymers-engineering', 'electrical-electronics'],
      t: 'Bisphenol AF: fluorinated monomer for fluoroelastomer cure systems and high-performance polymers.' },
    { n: '3,3′,4,4′-Biphenyltetracarboxylic dianhydride', s: '3-3-4-4-biphenyltetracarboxylic-dianhydride', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['electronics', 'polymers'], app: ['polymers-engineering', 'electrical-electronics'],
      t: 'BPDA: rigid dianhydride for low-expansion polyimide films and coatings.' },
    { n: 'Pyromellitic Dianhydride', s: 'pyromellitic-dianhydride', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['electronics', 'polymers'], app: ['polymers-engineering', 'electrical-electronics'],
      t: 'PMDA: the classical dianhydride for thermally stable polyimides, epoxies and curing agents.' },
    { n: '4,4′-Diaminodiphenyl Sulfone', s: '4-4-diaminodiphenyl-sulfone', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['coatings', 'polymers'], app: ['polymers-engineering', 'coatings-composites'],
      t: 'DDS: high-temperature epoxy curing agent for aerospace prepregs and structural composites.' },
    { n: '3,3′-Diaminodiphenyl sulfone', s: '3-3-diaminodiphenyl-sulfone', cs: 'polymers-resins-high-performance-materials', d: '04', c: 'Polymers, Resins & High-Performance Materials', ind: ['coatings', 'polymers'], app: ['polymers-engineering', 'coatings-composites'],
      t: 'Meta-isomer curing agent giving epoxy systems a longer pot life and greater toughness.' },

    // 05 · Surfactants, Detergents & Bio-Based Chemicals
    { n: 'Monorhamnolipid R95', s: 'monorhamnolipid-r95', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra', 'water'], app: ['nutraceutical-cosmetic-food', 'industrial-machinery-equipment'],
      t: 'Fermentation-derived biosurfactant at 95% monorhamnolipid, readily biodegradable and mild in use.' },
    { n: 'Mannosylerythritol Lipid-B (MEL-B)', s: 'mannosylerythritol-lipid-b-mel-b', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Glycolipid biosurfactant with strong moisturising and emulsifying performance in personal care.' },
    { n: 'Lactonic Sophorolipid', s: 'lactonic-sophorolipid', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra', 'water'], app: ['nutraceutical-cosmetic-food', 'industrial-machinery-equipment'],
      t: 'Yeast-fermented biosurfactant used for cleaning, emulsification and antimicrobial support.' },
    { n: 'Mannosylerythritol Lipid-A', s: 'mannosylerythritol-lipid-a', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Glycolipid biosurfactant forming stable vesicles for cosmetic and formulation work.' },
    { n: 'Sodium Methyl Cocoyl Taurate', s: 'sodium-methyl-cocoyl-taurate', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Mild anionic surfactant giving a dense, creamy lather in facial and body cleansers.' },
    { n: 'Sodium Cocoyl Isethionate', s: 'sodium-cocoyl-isethionate', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Sulfate-free surfactant for syndet bars and gentle cleansers, stable in hard water.' },
    { n: 'Disodium Laureth Sulfosuccinate', s: 'disodium-laureth-sulfosuccinate', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Low-irritation secondary surfactant that softens the profile of anionic cleansing systems.' },
    { n: 'Cocamidopropyl Hydroxysultaine', s: 'cocamidopropyl-hydroxysultaine', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Amphoteric surfactant boosting foam and viscosity, and tolerant of high electrolyte loads.' },
    { n: 'Cetearyl Glucoside', s: 'cetearyl-glucoside', cs: 'surfactants-detergents-bio-based-chemicals', d: '05', c: 'Surfactants, Detergents & Bio-Based Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Sugar-based non-ionic emulsifier for stable oil-in-water creams and lotions.' },

    // 06 · Electrochemical, Battery & Electronic Chemicals
    { n: 'Lithium Bis(fluorosulfonyl)imide', s: 'lithium-bis-fluorosulfonyl-imide', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy'], app: ['energy-storage-electronics', 'automotive'],
      t: 'LiFSI: conductive lithium salt raising cycle life and low-temperature performance in lithium-ion electrolytes.' },
    { n: 'Lithium Difluoro(oxalato)borate (LIODFB)', s: 'lithium-difluoro-oxalato-borate-liodfb', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy'], app: ['energy-storage-electronics'],
      t: 'Film-forming electrolyte salt improving interface stability and high-temperature cycling.' },
    { n: 'Tris(trimethylsilyl) Phosphate', s: 'tris-trimethylsilyl-phosphate', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy', 'electronics'], app: ['energy-storage-electronics', 'electrical-electronics'],
      t: 'Electrolyte additive scavenging acidic species and stabilising the cathode interface in high-voltage cells.' },
    { n: 'Lithium Bis(trifluoromethanesulfonyl)imide', s: 'lithium-bis-trifluoromethanesulfonyl-imide', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy', 'electronics'], app: ['energy-storage-electronics', 'electrical-electronics'],
      t: 'LiTFSI: thermally stable imide salt for electrolytes, ionic liquids and antistatic formulations.' },
    { n: '1,3,2-Dioxathiolane-2,2-dioxide', s: '1-3-2-dioxathiolane-2-2-dioxide', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy'], app: ['energy-storage-electronics'],
      t: 'Cyclic sulfate additive forming a stable interface film and lowering cell impedance.' },
    { n: 'Tris(trimethylsilyl) Borate', s: 'tris-trimethylsilyl-borate', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy'], app: ['energy-storage-electronics'],
      t: 'Electrolyte additive trapping fluoride species and protecting high-nickel cathodes.' },
    { n: 'Fluoroethylene Carbonate (FEC)', s: 'fluoroethylene-carbonate-fec', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy'], app: ['energy-storage-electronics'],
      t: 'Film-forming solvent additive central to silicon-anode cycling stability.' },
    { n: 'Silicon-Carbon Composite', s: 'silicon-carbon-composite', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy'], app: ['energy-storage-electronics', 'automotive'],
      t: 'High-capacity anode material pairing silicon\'s capacity with a carbon matrix that buffers expansion.' },
    { n: 'Tetramethylammonium Hydroxide', s: 'tetramethylammonium-hydroxide', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['electronics'], app: ['electrical-electronics'],
      t: 'Semiconductor-grade developer and etchant for photolithography, supplied to trace-metal specification.' },
    { n: 'Lithium Hexafluorophosphate', s: 'lithium-hexafluorophosphate', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy'], app: ['energy-storage-electronics', 'automotive'],
      t: 'LiPF6: the standard lithium-ion conducting salt, moisture-controlled throughout packing.' },
    { n: 'Carbon Nanotube', s: 'carbon-nanotube', cs: 'electrochemical-battery-electronic-chemicals', d: '06', c: 'Electrochemical, Battery & Electronic Chemicals', ind: ['energy', 'electronics'], app: ['energy-storage-electronics', 'electrical-electronics', 'polymers-engineering'],
      t: 'Conductive additive raising electrode conductivity at a fraction of carbon-black loading.' },

    // 07 · Paints, Coatings & Pigments
    { n: 'Pyrrole Orange', s: 'pyrrole-orange', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'automotive'], app: ['coatings-composites', 'automotive'],
      t: 'Diketopyrrolopyrrole orange with high opacity and weatherfastness for automotive and industrial finishes.' },
    { n: 'Pigment Red 202', s: 'pigment-red-202', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'automotive'], app: ['coatings-composites', 'automotive'],
      t: 'Quinacridone magenta-red with high lightfastness for automotive topcoats, inks and plastics.' },
    { n: 'Quinacridone Violet 19', s: 'quinacridone-violet-19', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'polymers'], app: ['coatings-composites', 'polymers-engineering'],
      t: 'Quinacridone violet offering clean transparent shades and outstanding weather resistance.' },
    { n: 'Quinacridone Magenta', s: 'quinacridone-magenta', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'polymers'], app: ['coatings-composites', 'polymers-engineering'],
      t: 'Blue-shade quinacridone for high-chroma magentas in coatings, inks and masterbatch.' },
    { n: 'Benzimidazolone Yellow 180', s: 'benzimidazolone-yellow-180', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'polymers'], app: ['coatings-composites', 'polymers-engineering'],
      t: 'High-performance organic yellow with the heat stability plastics and industrial coatings demand.' },
    { n: 'Bismuth Vanadate Yellow', s: 'bismuth-vanadate-yellow', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'automotive'], app: ['coatings-composites', 'automotive'],
      t: 'Bright, opaque inorganic yellow replacing lead and cadmium pigments in durable coatings.' },
    { n: '2-(2H-Benzotriazol-2-yl)-4,6-bis(1-methyl-1-phenylethyl)phenol', s: 'benzotriazol-2-yl-bis-methyl-phenylethyl-phenol', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'polymers'], app: ['coatings-composites', 'polymers-engineering'],
      t: 'Benzotriazole UV absorber protecting coatings and polymers from photo-degradation and colour shift.' },
    { n: 'HALS-944', s: 'hals-944', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['polymers', 'coatings'], app: ['polymers-engineering', 'coatings-composites'],
      t: 'High-molecular-weight hindered amine light stabiliser for polyolefins in long-term outdoor service.' },
    { n: 'Pigment Violet 23', s: 'pigment-violet-23', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'polymers'], app: ['coatings-composites', 'polymers-engineering'],
      t: 'Dioxazine violet with very high tinting strength for inks, coatings and plastics colouration.' },
    { n: 'Pigment Red 264', s: 'pigment-red-264', cs: 'paints-coatings-pigments', d: '07', c: 'Paints, Coatings & Pigments', ind: ['coatings', 'automotive'], app: ['coatings-composites', 'automotive'],
      t: 'Diketopyrrolopyrrole red delivering deep blue-shade reds with high weather and heat stability.' },

    // 08 · Nutraceutical, Cosmetic & Food Chemicals
    { n: 'Vitamin K2 (Menaquinone-7 / MK-7)', s: 'vitamin-k2-menaquinone-7-mk-7', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra', 'pharma'], app: ['nutraceutical-cosmetic-food', 'pharmaceutical-agrochemical'],
      t: 'Fermentation-derived MK-7 for bone and cardiovascular supplement formulation.' },
    { n: 'Tetrahexyldecyl Ascorbate', s: 'tetrahexyldecyl-ascorbate', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Oil-soluble, stable vitamin C ester for brightening and antioxidant skincare.' },
    { n: 'Astaxanthin', s: 'astaxanthin', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Carotenoid antioxidant for supplements, functional foods and cosmetic formulation.' },
    { n: 'Ceramide 3', s: 'ceramide-3', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Skin-identical lipid restoring barrier function in moisturisers and treatment products.' },
    { n: 'Coenzyme Q10', s: 'coenzyme-q10', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra', 'pharma'], app: ['nutraceutical-cosmetic-food', 'pharmaceutical-agrochemical'],
      t: 'Ubiquinone active for energy-support supplements and anti-ageing cosmetics.' },
    { n: 'Alpha-Lipoic Acid', s: 'alpha-lipoic-acid', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra', 'pharma'], app: ['nutraceutical-cosmetic-food', 'pharmaceutical-agrochemical'],
      t: 'Amphiphilic antioxidant used in metabolic-support supplements and topical formulations.' },
    { n: 'Glutathione', s: 'glutathione', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra', 'pharma'], app: ['nutraceutical-cosmetic-food', 'pharmaceutical-agrochemical'],
      t: 'Tripeptide antioxidant for supplements, functional foods and skin-brightening formulations.' },
    { n: 'Green Tea Extract - EGCG standardized', s: 'green-tea-extract-egcg-standardized', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra'], app: ['nutraceutical-cosmetic-food'],
      t: 'Camellia sinensis extract standardised to EGCG content for supplements and cosmetics.' },
    { n: 'Berberine HCl', s: 'berberine-hcl', cs: 'nutraceutical-cosmetic-food-chemicals', d: '08', c: 'Nutraceutical, Cosmetic & Food Chemicals', ind: ['nutra', 'pharma'], app: ['nutraceutical-cosmetic-food', 'pharmaceutical-agrochemical'],
      t: 'Plant alkaloid supplied as the hydrochloride for metabolic-health supplement formulation.' },

    // 09 · Water Treatment & Industrial Additives
    { n: '2-Phosphonobutane-1,2,4-tricarboxylic acid', s: '2-phosphonobutane-1-2-4-tricarboxylic-acid', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water', 'energy'], app: ['industrial-machinery-equipment'],
      t: 'PBTC: scale and corrosion inhibitor holding up under chlorine and high-temperature duty.' },
    { n: 'Diethylenetriamine Pentamethylene Phosphonic Acid', s: 'diethylenetriamine-pentamethylene-phosphonic-acid', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water'], app: ['industrial-machinery-equipment'],
      t: 'DTPMP: high-efficiency chelant and threshold inhibitor for hard, high-alkalinity waters.' },
    { n: 'Amino Trimethylene Phosphonic Acid', s: 'amino-trimethylene-phosphonic-acid', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water', 'machinery'], app: ['industrial-machinery-equipment'],
      t: 'ATMP: carbonate scale inhibitor and metal-ion chelant for cooling and boiler systems.' },
    { n: '1-Hydroxyethylidene-1,1-Diphosphonic Acid', s: '1-hydroxyethylidene-1-1-diphosphonic-acid', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water', 'machinery'], app: ['industrial-machinery-equipment'],
      t: 'HEDP: scale and corrosion inhibitor stable against chlorine and oxidising biocides.' },
    { n: 'Carboxymethyl Inulin', s: 'carboxymethyl-inulin', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water'], app: ['industrial-machinery-equipment'],
      t: 'Biodegradable, plant-derived antiscalant for phosphorus-restricted treatment programmes.' },
    { n: 'Acrylic Acid-Sulfonic Acid Copolymer', s: 'acrylic-acid-sulfonic-acid-copolymer', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water', 'energy'], app: ['industrial-machinery-equipment'],
      t: 'Dispersant copolymer keeping iron, silt and phosphate scales suspended in cooling loops.' },
    { n: 'Polymaleic Acid', s: 'polymaleic-acid', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water', 'energy'], app: ['industrial-machinery-equipment'],
      t: 'High-temperature antiscalant for boilers, evaporators and desalination service.' },
    { n: 'Tolyltriazole', s: 'tolyltriazole', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water', 'machinery'], app: ['industrial-machinery-equipment'],
      t: 'Yellow-metal corrosion inhibitor forming a passivating film on copper and brass.' },
    { n: 'Oleyl Imidazoline', s: 'oleyl-imidazoline', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water', 'energy'], app: ['industrial-machinery-equipment'],
      t: 'Filming amine corrosion inhibitor for carbon steel in oilfield and process water.' },
    { n: '2,2\'-Methylenebis(4-chlorophenol)', s: '2-2-methylenebis-4-chlorophenol', cs: 'water-treatment-industrial-additives', d: '09', c: 'Water Treatment & Industrial Additives', ind: ['water'], app: ['industrial-machinery-equipment'],
      t: 'Bisphenolic biocide controlling microbial fouling in industrial water systems.' },

    // 10 · Functional & High-Performance Materials
    { n: 'Perfluoropolyether', s: 'perfluoropolyether', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['machinery', 'electronics'], app: ['lubrication-grease', 'industrial-machinery-equipment', 'electrical-electronics'],
      t: 'Chemically inert PFPE fluid for vacuum, oxygen-service and extreme-temperature lubrication.' },
    { n: 'Boron Nitride Nanotube', s: 'boron-nitride-nanotube', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['electronics', 'polymers'], app: ['polymers-engineering', 'electrical-electronics'],
      t: 'Thermally conductive, electrically insulating nanotube for advanced composites and thermal management.' },
    { n: 'Single-Walled Carbon Nanotubes', s: 'single-walled-carbon-nanotubes', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['electronics', 'energy'], app: ['energy-storage-electronics', 'electrical-electronics'],
      t: 'Conductive nanomaterial for transparent electrodes, sensors and battery electrodes.' },
    { n: 'Polybenzimidazole', s: 'polybenzimidazole', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['machinery', 'electronics'], app: ['polymers-engineering', 'industrial-machinery-equipment', 'electrical-electronics'],
      t: 'PBI: the highest-temperature engineering polymer, holding mechanical strength where other thermoplastics soften.' },
    { n: 'Polyetheretherketone', s: 'polyetheretherketone', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['machinery', 'automotive'], app: ['polymers-engineering', 'automotive', 'industrial-machinery-equipment'],
      t: 'PEEK: semi-crystalline thermoplastic for metal-replacement parts under load, heat and chemical attack.' },
    { n: 'Lithium Lanthanum Zirconium Oxide', s: 'lithium-lanthanum-zirconium-oxide', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['energy'], app: ['energy-storage-electronics'],
      t: 'LLZO garnet solid electrolyte for solid-state lithium battery development.' },
    { n: 'Hexagonal Boron Nitride', s: 'hexagonal-boron-nitride', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['electronics', 'machinery'], app: ['electrical-electronics', 'polymers-engineering', 'lubrication-grease'],
      t: 'Lubricious, thermally conductive ceramic powder for thermal management and release coatings.' },
    { n: 'Polyphenylene Sulfide', s: 'polyphenylene-sulfide', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['automotive', 'electronics'], app: ['polymers-engineering', 'automotive', 'electrical-electronics'],
      t: 'PPS: dimensionally stable engineering thermoplastic for under-bonnet and electrical parts.' },
    { n: 'Polyvinylidene Fluoride', s: 'polyvinylidene-fluoride', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['energy', 'coatings'], app: ['energy-storage-electronics', 'coatings-composites'],
      t: 'PVDF: binder and membrane resin with chemical resistance and piezoelectric behaviour.' },
    { n: 'Hexamethyldisilazane', s: 'hexamethyldisilazane', cs: 'functional-high-performance-materials', d: '10', c: 'Functional & High-Performance Materials', ind: ['electronics', 'pharma'], app: ['electrical-electronics', 'pharmaceutical-agrochemical'],
      t: 'HMDS: silylating agent and photoresist adhesion promoter for semiconductor processing.' }
  ];

/* The product-group facet, read off the range itself rather than written out
   again: the value is a grade's `cs`, the label its `c`, in the order the ten
   groups appear above. Nothing to keep in step, and the facet cannot offer a
   group no grade belongs to. */
export const GROUPS: [value: string, label: string][] = [
  ["", "All products"],
  ...[...new Map(PRODUCTS.map((p): [string, string] => [p.cs, p.c]))],
];

/* A division and a product group are the same ten things under two names — the
   unit, and what that unit makes — so `d` and `cs` are one-to-one across the
   whole range. The finder shows both facets and keeps them in step from these,
   which is why picking one can never strand the other on an empty result. */
export const GROUP_OF_DIVISION: Record<string, string> =
  Object.fromEntries(PRODUCTS.map((p) => [p.d, p.cs]));

export const DIVISION_OF_GROUP: Record<string, string> =
  Object.fromEntries(PRODUCTS.map((p) => [p.cs, p.d]));

/* The product facet: the range itself, one row per grade under the group that
   makes it, read off PRODUCTS for the same reason GROUPS is — the facet cannot
   offer a grade the range does not hold, and adding a grade to the list above
   puts it in the sidebar with nothing else to edit.

   A grade's value is its group slug and its own slug together, which is the
   pair that identifies it: `s` alone would name two rows, since one chemistry
   can sit in two divisions (Polybenzimidazole is in both 04 and 10). It is also
   what `gradeHref` builds a path out of, so `/finder?product=<cs>/<s>` and
   `/products/<cs>/<s>` name the same grade. */
export const gradeKey = (p: Product) => `${p.cs}/${p.s}`;

/** The group half of a grade key — what the group and division facets follow. */
export const groupOfGrade = (key: string) => key.split("/")[0] ?? "";

export const GRADES_BY_GROUP: [
  group: string,
  label: string,
  grades: [value: string, name: string][],
][] = GROUPS.slice(1).map(([cs, c]) => [
  cs,
  c,
  gradesIn(cs).map((p): [string, string] => [gradeKey(p), p.n]),
]);

/* ---------------------------------------------------------------------------
   The Products dropdown.

   Divisions and Products name the same ten things — the units, and what those
   units make — so a second column of those ten names told a reader nothing the
   first had not. This panel is the range itself: every grade, under the group
   that makes it, straight from the list above. Names are never translated (a
   buyer searches for "Aluminium Hypophosphite" in every market), so only the
   group headings go through the dictionary.

   `Header` is a client component, so anything it imports ships to the browser
   on every route. This is built on the server in `app/layout.tsx` and handed
   down as props instead, which puts a name and an href on the wire per grade
   and leaves the teasers, industry tags and division numbers of all 112 records
   behind. `Header` imports only the type, which compiles away.

   The groups, their numbers and their titles come from `lib/topics.ts`, so the
   panel cannot name a group the register disagrees with.
   --------------------------------------------------------------------------- */
export type ProductGroupLink = {
  href: string;
  num: string;
  label: string;
  grades: [href: string, name: string][];
};

export const productMenu = (): ProductGroupLink[] =>
  FAMILY.products.topics.map((topic) => ({
    href: `/products/${topic.slug}`,
    num: topic.num,
    label: topic.title,
    grades: gradesIn(topic.slug).map((p): [string, string] => [gradeHref(p), p.n]),
  }));
