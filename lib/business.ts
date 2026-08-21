/* What each of the ten business units makes, what it is used for, and what it
   can do — the three lists the landing page's business-operations table reads,
   one entry per division.

   Only the lists live here. The number, the title and the slug of every
   division are already in `lib/topics.ts` and are looked up from there, so a
   division is never named twice.

   The copy is the same transcription of `2 business.rtf` that the division's
   own page under `app/divisions/<slug>/` renders — that page shows the lists
   in full, this one joins them into a line. Two of the three divisions that
   also carry a "Global Export & R&D" list in the source keep it on their own
   page only: seven of the ten have none, and a column that is empty for seven
   rows is not a column. **If you edit a list, edit both places** until the
   division pages are pointed at this file.

   The products lists are the range in `new products.rtf`, transcribed; the
   landing page's table shows as much of a line as fits and counts the rest,
   because the intermediates division alone runs to 23 names */

export type BusinessAspect = "products" | "applications" | "capabilities";

export const BUSINESS_ASPECTS: { key: BusinessAspect; label: string }[] = [
  { key: "products", label: "Products" },
  { key: "applications", label: "Applications" },
  { key: "capabilities", label: "Capabilities" },
];

export const BUSINESS_LINES: Record<string, Record<BusinessAspect, string[]>> = {
  "lithium-metal-additives": {
    products: ["Lithium 12-Hydroxystearate", "Lithium Neodecanoate", "Lithium Ricinoleate", "Calcium 12-Hydroxystearate", "Zinc Ricinoleate", "Lithium Myristate"],
    applications: [
      "Automotive greases and industrial lubrication systems",
      "High-temperature and heavy-duty machinery greases",
      "Polymers and plastics processing additives",
      "Industrial lubrication and specialty equipment",
    ],
    capabilities: [
      "Custom formulations for industrial requirements",
      "Thermal stability optimisation",
      "Scale-up from pilot to commercial production",
      "Quality-controlled batch production",
    ],
  },
  "inorganic-flame-retardant-chemicals": {
    products: ["Aluminium Hypophosphite", "Calcium Hypophosphite", "Magnesium Hypophosphite", "Aluminium Diethyl Phosphinate", "Melamine Polyphosphate", "Zinc Hydroxystannate", "Magnesium Oxysulfate Whisker", "Expandable Graphite", "Zinc Borate", "Melamine Cyanurate", "Huntite", "Zinc Hypophosphite", "Zinc Stannate"],
    applications: [
      "Engineering plastics (PA, PBT, PET)",
      "Electrical and electronic housings",
      "Industrial coatings and composites",
      "Flame-retardant cables",
    ],
    capabilities: [
      "Halogen-free, environmentally safe production",
      "Optimised thermal and mechanical performance",
      "Uniform particle size for consistent behaviour",
      "Custom grades for industrial and regulatory needs",
    ],
  },
  "organic-pharmaceutical-intermediates": {
    products: ["N-Methyl-2-pyrrolidone", "[1,2,4]Triazolo[4,3-a]pyridin-3(2H)-one", "Diphenyl ether", "Methyl 2-[(3S)-3-[3-[(1E)-2-(7-chloro-2-quinolinyl)ethenyl]phenyl]-3-hydroxypropyl]benzoate", "N-[5-(Diphenylphosphinoylmethyl)-4-(4-fluorophenyl)-6-isopropylpyrimidin-2-yl]-N-methylmethanesulfonamide", "2,3-Dichlorobenzoyl chloride", "2-Azaspiro[4.5]decan-3-one", "(R)-(-)-3-Carbamoymethyl-5-methylhexanoic acid", "3-Carbamoymethyl-5-methylhexanoic acid", "3-(Aminomethyl)-5-methylhexanoic acid", "3-Isobutylglutaric acid", "4-Chloro-2,6-Diaminopyrimidine", "2-Chloro-3,5-difluoropyridine", "4-Chloro-2-fluoro-5-nitroaniline", "2-Chloro-4-(trifluoromethyl)pyrimidine", "4-Bromo-2,6-difluoroaniline", "2,4-Dichlorophenoxyacetic acid", "2-Aminophenol-4-sulfonic acid", "N,N-Dimethylformamide dimethyl acetal", "Ethyl 2-bromopropionate", "1-(2-Bromoethoxy)-2-ethoxybenzene", "Toluene-2,5-diamine sulfate", "Cyclopropanecarboxamide"],
    applications: [
      "Pharmaceutical synthesis and research",
      "Agrochemical intermediate production",
      "Fine chemicals and industrial formulations",
    ],
    capabilities: [
      "High-purity chemical synthesis",
      "Custom molecular and batch development",
      "Lab-to-commercial scale-up",
      "Process optimisation for reproducibility",
    ],
  },
  "polymers-resins-high-performance-materials": {
    products: ["Polyimide", "4,4′-(Hexafluoroisopropylidene)diphthalic anhydride", "4,4′-Oxydianiline", "Polybenzimidazole", "Polyether Ketone Ketone", "Polyetherimide", "Hexafluoroisopropylidene Bisphenol", "3,3′,4,4′-Biphenyltetracarboxylic dianhydride", "Pyromellitic Dianhydride", "4,4′-Diaminodiphenyl Sulfone", "3,3′-Diaminodiphenyl sulfone"],
    applications: [
      "Coatings, adhesives and composites",
      "Automotive and aerospace components",
      "Industrial and specialty materials",
    ],
    capabilities: [
      "Scalable, consistent polymer production",
      "Custom formulations for performance optimisation",
      "Lab-to-commercial batch support",
      "Application-specific material development",
    ],
  },
  "surfactants-detergents-bio-based-chemicals": {
    products: ["Monorhamnolipid R95", "Mannosylerythritol Lipid-B (MEL-B)", "Lactonic Sophorolipid", "Mannosylerythritol Lipid-A", "Sodium Methyl Cocoyl Taurate", "Sodium Cocoyl Isethionate", "Disodium Laureth Sulfosuccinate", "Cocamidopropyl Hydroxysultaine", "Cetearyl Glucoside"],
    applications: [
      "Industrial and consumer cleaning formulations",
      "Wetting and emulsification for polymers and coatings",
      "Green chemistry and sustainable products",
    ],
    capabilities: [
      "Custom surfactant blends and formulations",
      "Bio-based chemistry process development",
      "Scale-up for commercial production",
    ],
  },
  "electrochemical-battery-electronic-chemicals": {
    products: ["Lithium Bis(fluorosulfonyl)imide", "Lithium Difluoro(oxalato)borate (LIODFB)", "Tris(trimethylsilyl) Phosphate", "Lithium Bis(trifluoromethanesulfonyl)imide", "1,3,2-Dioxathiolane-2,2-dioxide", "Tris(trimethylsilyl) Borate", "Fluoroethylene Carbonate (FEC)", "Silicon-Carbon Composite", "Tetramethylammonium Hydroxide", "Lithium Hexafluorophosphate", "Carbon Nanotube"],
    applications: [
      "Energy storage systems and batteries",
      "Semiconductor manufacturing",
      "Electronics and high-tech applications",
    ],
    capabilities: [
      "Ultra-high purity synthesis",
      "Application-specific material development",
      "Global export-ready products",
    ],
  },
  "paints-coatings-pigments": {
    products: ["Pyrrole Orange", "Pigment Red 202", "Quinacridone Violet 19", "Quinacridone Magenta", "Benzimidazolone Yellow 180", "Bismuth Vanadate Yellow", "2-(2H-Benzotriazol-2-yl)-4,6-bis(1-methyl-1-phenylethyl)phenol", "HALS-944", "Pigment Violet 23", "Pigment Red 264"],
    applications: [
      "Industrial and decorative coatings",
      "Automotive and protective coatings",
      "Specialty industrial applications",
    ],
    capabilities: ["Custom colour formulations", "Optimised pigment dispersion", "Consistent quality control"],
  },
  "nutraceutical-cosmetic-food-chemicals": {
    products: ["Vitamin K2 (Menaquinone-7 / MK-7)", "Tetrahexyldecyl Ascorbate", "Astaxanthin", "Ceramide 3", "Coenzyme Q10", "Alpha-Lipoic Acid", "Glutathione", "Green Tea Extract - EGCG standardized", "Berberine HCl"],
    applications: ["Nutraceutical and functional food production", "Cosmetic formulations", "Pharmaceutical actives"],
    capabilities: [
      "High-purity, application-ready intermediates",
      "Custom formulations to client specification",
      "R&D collaboration for novel bioactive molecules",
    ],
  },
  "water-treatment-industrial-additives": {
    products: ["2-Phosphonobutane-1,2,4-tricarboxylic acid", "Diethylenetriamine Pentamethylene Phosphonic Acid", "Amino Trimethylene Phosphonic Acid", "1-Hydroxyethylidene-1,1-Diphosphonic Acid", "Carboxymethyl Inulin", "Acrylic Acid-Sulfonic Acid Copolymer", "Polymaleic Acid", "Tolyltriazole", "Oleyl Imidazoline", "2,2'-Methylenebis(4-chlorophenol)"],
    applications: [
      "Industrial water systems",
      "Power plants, cooling towers and processing industries",
      "Surface treatment and process enhancement",
    ],
    capabilities: [
      "Custom formulations for specific industrial conditions",
      "Lab-to-commercial scale support",
      "Global export-ready with compliance documentation",
    ],
  },
  "functional-high-performance-materials": {
    products: ["Perfluoropolyether", "Boron Nitride Nanotube", "Single-Walled Carbon Nanotubes", "Polybenzimidazole", "Polyetheretherketone", "Lithium Lanthanum Zirconium Oxide", "Hexagonal Boron Nitride", "Polyphenylene Sulfide", "Polyvinylidene Fluoride", "Hexamethyldisilazane"],
    applications: [
      "Advanced materials for industrial and research applications",
      "Aerospace, automotive and electronics sectors",
      "High-performance specialty applications",
    ],
    capabilities: [
      "R&D-driven innovation for next-generation materials",
      "Scalable manufacturing of advanced chemicals",
      "Tailored solutions for high-value industrial use",
    ],
  },
};
