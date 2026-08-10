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

   `LiPF₆` / `LiBF₄` are written with Unicode subscripts rather than `<sub>`,
   because these are data and not markup. */

export type BusinessAspect = "products" | "applications" | "capabilities";

export const BUSINESS_ASPECTS: { key: BusinessAspect; label: string }[] = [
  { key: "products", label: "Products" },
  { key: "applications", label: "Applications" },
  { key: "capabilities", label: "Capabilities" },
];

export const BUSINESS_LINES: Record<string, Record<BusinessAspect, string[]>> = {
  "lithium-metal-additives": {
    products: ["Lithium Myristate", "12-Hydroxy Lithium Stearate", "Calcium Stearate", "Aluminum Stearate"],
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
    products: ["Aluminium Hypophosphite", "Calcium Hypophosphite", "Magnesium Hypophosphite"],
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
    products: ["1-Phenyl Oxide", "Triazolo Pyridione", "Benzimidazole derivatives", "2-Aminopyridine", "Indole derivatives"],
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
    products: [
      "Epoxy and phenolic resins",
      "Polyurethane and polyamide intermediates",
      "PTFE and fluoropolymer intermediates",
      "Heat-resistant and high-performance polymers",
    ],
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
    products: ["Sodium Lauryl Sulfate (SLS)", "Tween 80, Span 60", "Plant-derived surfactants", "Bio-based solvents and intermediates"],
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
    products: [
      "Lithium Carbonate, Lithium Hydroxide",
      "Electrolyte salts (LiPF₆, LiBF₄)",
      "TMAH (Tetramethylammonium Hydroxide)",
      "Electronic-grade solvents",
    ],
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
    products: [
      "Organic pigments (Quinacridone, Phthalocyanine Blue)",
      "Inorganic pigments (Iron Oxides, Titanium Dioxide)",
      "Coating additives (UV stabilisers, dispersants)",
    ],
    applications: [
      "Industrial and decorative coatings",
      "Automotive and protective coatings",
      "Specialty industrial applications",
    ],
    capabilities: ["Custom colour formulations", "Optimised pigment dispersion", "Consistent quality control"],
  },
  "nutraceutical-cosmetic-food-chemicals": {
    products: [
      "Ascorbic Acid and derivatives",
      "Niacinamide and other vitamin intermediates",
      "Hyaluronic acid derivatives",
      "PABA and cosmetic actives",
    ],
    applications: ["Nutraceutical and functional food production", "Cosmetic formulations", "Pharmaceutical actives"],
    capabilities: [
      "High-purity, application-ready intermediates",
      "Custom formulations to client specification",
      "R&D collaboration for novel bioactive molecules",
    ],
  },
  "water-treatment-industrial-additives": {
    products: ["Phosphonates and polyphosphates", "Anti-scalants", "Corrosion inhibitors", "Specialty industrial additives"],
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
    products: ["Specialty coatings and films", "Graphene and nano additives", "Fluorosilicone fluids", "High-performance polymers"],
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
