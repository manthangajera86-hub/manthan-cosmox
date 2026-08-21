/* Français — France. See ./types.ts: chemical names, grade names and division
   numbers stay in the original. */

import type { Dict } from "./types";

const fr: Dict = {
  // --- navigation and header ------------------------------------------------
  "Home": "Accueil",
  "About us": "À propos",
  "Divisions": "Divisions",
  "Products": "Produits",
  "Industries": "Secteurs",
  "Applications": "Applications",
  "Capabilities": "Moyens",
  "R&D": "R&D",
  "Innovation": "Innovation",
  "Sustainability": "Développement durable",
  "Contact": "Contact",
  "Product Finder": "Recherche produit",
  "Skip to content": "Aller au contenu",
  "Search the whole range": "Rechercher dans toute la gamme",
  "Visit page": "Voir la page",
  "Sections": "Sections",
  "On the home page": "Sur la page d'accueil",
  "Explore": "Découvrir",
  "Previous": "Précédent",
  "Next": "Suivant",
  "Previous picture": "Image précédente",
  "Next picture": "Image suivante",
  "Business units": "Unités opérationnelles",
  "Business Units": "Unités opérationnelles",
  "Research & Development": "Recherche & développement",

  // --- country and language menu -------------------------------------------
  "Region & language": "Région & langue",
  "Change country and language": "Changer de pays et de langue",
  "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.":
    "Choisissez votre pays d'achat. Nous produisons à Surat et exportons dans le monde entier — la langue du site suit le pays.",
  "Navigation and product titles are translated. Detailed page copy remains in English.":
    "La navigation et les intitulés produits sont traduits. Le contenu détaillé des pages reste en anglais.",
  "Detected": "Détecté",
  "Search countries": "Rechercher un pays",
  "Search {n} countries": "Rechercher parmi {n} pays",
  "Set from your device's time zone. Change it here at any time.":
    "Choisi d'après le fuseau horaire de votre appareil. Modifiable ici à tout moment.",
  "Set from your browser's language. Change it here at any time.":
    "Choisi d'après la langue de votre navigateur. Modifiable ici à tout moment.",
  "No country matches “{q}”. We export worldwide — write to us and we will route your enquiry.":
    "Aucun pays ne correspond à « {q} ». Nous exportons dans le monde entier — écrivez-nous et nous transmettrons votre demande.",

  // the six regions the panel groups the countries into
  "Asia Pacific": "Asie-Pacifique",
  "Europe": "Europe",
  "Americas": "Amériques",
  "Middle East": "Moyen-Orient",
  "Africa": "Afrique",
  "Central Asia & Caucasus": "Asie centrale et Caucase",

  /* All seventy countries in `lib/i18n/locales.ts`, in the order the panel
     lists them. A country whose name is the same in this language is still
     written out, so a name added to the register shows up here as a gap
     rather than silently reading as translated. */
  // Asia Pacific
  "India": "Inde",
  "China": "Chine",
  "Japan": "Japon",
  "South Korea": "Corée du Sud",
  "Taiwan": "Taïwan",
  "Vietnam": "Viêt Nam",
  "Indonesia": "Indonésie",
  "Malaysia": "Malaisie",
  "Singapore": "Singapour",
  "Thailand": "Thaïlande",
  "Philippines": "Philippines",
  "Pakistan": "Pakistan",
  "Bangladesh": "Bangladesh",
  "Nepal": "Népal",
  "Sri Lanka": "Sri Lanka",
  "Myanmar": "Birmanie",
  "Cambodia": "Cambodge",
  "Australia": "Australie",
  "New Zealand": "Nouvelle-Zélande",
  // Europe
  "United Kingdom": "Royaume-Uni",
  "Ireland": "Irlande",
  "Germany": "Allemagne",
  "France": "France",
  "Italy": "Italie",
  "Spain": "Espagne",
  "Portugal": "Portugal",
  "Netherlands": "Pays-Bas",
  "Belgium": "Belgique",
  "Switzerland": "Suisse",
  "Austria": "Autriche",
  "Sweden": "Suède",
  "Norway": "Norvège",
  "Denmark": "Danemark",
  "Finland": "Finlande",
  "Poland": "Pologne",
  "Czech Republic": "République tchèque",
  "Hungary": "Hongrie",
  "Romania": "Roumanie",
  "Greece": "Grèce",
  "Russia": "Russie",
  "Ukraine": "Ukraine",
  "Turkey": "Turquie",
  // Americas
  "United States": "États-Unis",
  "Canada": "Canada",
  "Mexico": "Mexique",
  "Brazil": "Brésil",
  "Argentina": "Argentine",
  "Chile": "Chili",
  "Colombia": "Colombie",
  "Peru": "Pérou",
  // Middle East
  "United Arab Emirates": "Émirats arabes unis",
  "Saudi Arabia": "Arabie saoudite",
  "Qatar": "Qatar",
  "Kuwait": "Koweït",
  "Oman": "Oman",
  "Bahrain": "Bahreïn",
  "Israel": "Israël",
  // Africa
  "Egypt": "Égypte",
  "Morocco": "Maroc",
  "Algeria": "Algérie",
  "Nigeria": "Nigeria",
  "Ghana": "Ghana",
  "Kenya": "Kenya",
  "Tanzania": "Tanzanie",
  "Ethiopia": "Éthiopie",
  "South Africa": "Afrique du Sud",
  // Central Asia & Caucasus
  "Kazakhstan": "Kazakhstan",
  "Uzbekistan": "Ouzbékistan",
  "Azerbaijan": "Azerbaïdjan",
  "Georgia": "Géorgie",

  // --- nav dropdown introductions -------------------------------------------
  "Speciality chemistry manufactured and exported from Surat — ten divisions, 112 grades, one integrated plant.":
    "Chimie de spécialité fabriquée et exportée depuis Surat — dix divisions, 112 qualités, un site intégré.",
  "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.":
    "Qui nous sommes : la mission de produire et d'exporter une chimie qui rend l'industrie plus sûre, plus propre et plus efficace.",
  "Ten specialised divisions under one roof, structured so scale never costs you technical attention.":
    "Dix divisions spécialisées sous un même toit, organisées pour que la taille ne se paie jamais en accompagnement technique.",
  "The full range — 112 grades built for high performance, consistency and regulatory confidence.":
    "La gamme complète — 112 qualités conçues pour la performance, la régularité et la conformité réglementaire.",
  "The sectors we formulate for, and what each one asks of a speciality chemical supplier.":
    "Les secteurs pour lesquels nous formulons, et ce que chacun attend d'un fournisseur de chimie de spécialité.",
  "What our chemistry actually does in service — the end uses each grade was developed for.":
    "Ce que notre chimie fait réellement en service — les usages finaux pour lesquels chaque qualité a été développée.",
  "Manufacturing, laboratory, quality and export capability, described plainly.":
    "Production, laboratoire, qualité et capacité d'export, décrits simplement.",
  "The laboratories, instruments and synthesis work behind every grade we ship.":
    "Les laboratoires, les instruments et le travail de synthèse derrière chaque qualité que nous expédions.",
  "Where the next products come from — in the flask, on the plant floor, and with customers.":
    "D'où viennent les prochains produits — dans le ballon, sur le site de production et chez les clients.",
  "How the plant, the portfolio and the people are being held to a lower footprint.":
    "Comment l'usine, le portefeuille et les équipes sont tenus à une empreinte plus faible.",

  // --- on-page jump links ---------------------------------------------------
  "What we make": "Ce que nous fabriquons",
  "Our products": "Nos produits",
  "Find a product": "Trouver un produit",
  "Ten divisions": "Dix divisions",
  "Industries served": "Secteurs servis",
  "A force for good": "Une force positive",
  "Latest media": "Actualités",
  "Global presence": "Présence mondiale",
  "Manufacturing excellence": "Excellence industrielle",
  "Research & development": "Recherche & développement",
  "Quality & compliance": "Qualité & conformité",
  "Our vision": "Notre vision",

  // --- topic titles ---------------------------------------------------------
  "Lubrication & Grease": "Lubrification & graisses",
  "Flame Retardancy": "Retard au feu",
  "Polymers & Engineering": "Polymères & ingénierie",
  "Electrical & Electronics": "Électrique & électronique",
  "Automotive": "Automobile",
  "Industrial Machinery & Equipment": "Machines & équipements industriels",
  "Coatings & Composites": "Revêtements & composites",
  "Pharmaceutical & Agrochemical": "Pharmacie & agrochimie",
  "Energy Storage & Electronics": "Stockage d'énergie & électronique",
  "Nutraceutical, Cosmetic & Food": "Nutraceutique, cosmétique & alimentaire",
  "Automotive & Transportation": "Automobile & transport",
  "Polymers & Engineering Plastics": "Polymères & plastiques techniques",
  "Construction & Infrastructure": "Construction & infrastructures",
  "Research-Driven Specialty Industries": "Industries de spécialité tirées par la recherche",
  "Lithium & Metal Additives": "Additifs lithium & métalliques",
  "Inorganic & Flame-Retardant Chemicals": "Produits inorganiques & ignifugeants",
  "Organic & Pharmaceutical Intermediates": "Intermédiaires organiques & pharmaceutiques",
  "Polymers, Resins & High-Performance Materials": "Polymères, résines & matériaux haute performance",
  "Surfactants, Detergents & Bio-Based Chemicals": "Tensioactifs, détergents & produits biosourcés",
  "Electrochemical, Battery & Electronic Chemicals": "Produits électrochimiques, batteries & électronique",
  "Paints, Coatings & Pigments": "Peintures, revêtements & pigments",
  "Nutraceutical, Cosmetic & Food Chemicals": "Produits nutraceutiques, cosmétiques & alimentaires",
  "Water Treatment & Industrial Additives": "Traitement de l'eau & additifs industriels",
  "Functional & High-Performance Materials": "Matériaux fonctionnels & haute performance",
  "Flame-Retardant & Inorganic Salts": "Sels ignifugeants & inorganiques",
  "Advanced Manufacturing": "Production avancée",
  "Research & Development Excellence": "Excellence en recherche & développement",
  "Quality Assurance & Compliance": "Assurance qualité & conformité",
  "Technical & Application Support": "Support technique & applicatif",
  "Global Export & Logistics": "Export mondial & logistique",
  "Sustainability Integration": "Intégration du développement durable",
  "Product Innovation": "Innovation produit",
  "Process & Manufacturing Innovation": "Innovation procédés & production",
  "Application & Industry-Specific Innovation": "Innovation par application & par secteur",
  "Sustainable & Green Innovation": "Innovation durable & verte",
  "Collaboration & Knowledge Innovation": "Innovation collaborative & partage des savoirs",
  "Integrated Innovation Advantage": "Avantage d'innovation intégrée",
  "Product Innovation & Development": "Innovation & développement produit",
  "Advanced Analytical & Testing": "Analyse & essais avancés",
  "Application-Specific Research": "Recherche par application",
  "Sustainable & Green Chemistry": "Chimie durable & verte",
  "Collaboration & Knowledge Sharing": "Collaboration & partage des connaissances",
  "Integrated R&D Excellence": "Excellence R&D intégrée",
  "Environmental Stewardship": "Responsabilité environnementale",
  "Sustainable Product Innovation": "Innovation produit durable",
  "Energy & Resource Optimisation": "Optimisation de l'énergie & des ressources",
  "Health, Safety & Community": "Santé, sécurité & communauté",
  "Circular Economy & Waste": "Économie circulaire & déchets",
  "Integrated Sustainability Excellence": "Excellence durable intégrée",

  // --- topic blurbs: applications -------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — pour l'automobile, les engins lourds, les équipements industriels, les polymères & plastiques",
  "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials":
    "Aluminium · Calcium · Magnesium Hypophosphite — pour les plastiques, l'électronique, l'électrique, les revêtements et les matériaux de construction",
  "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics":
    "Savons de lithium · Sels d'hypophosphite — pour les plastiques, les matériaux techniques, l'automobile et l'électronique",
  "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics":
    "Aluminium Hypophosphite · Magnesium Hypophosphite — pour l'électronique grand public, l'électroménager et l'électronique industrielle",
  "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery":
    "Savons & graisses de lithium · Sels d'hypophosphite · Additifs polymères — pour les composants automobiles, les véhicules utilitaires et les engins lourds",
  "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment":
    "Savons de lithium · Intermédiaires organiques & pharmaceutiques — pour les engins lourds, les usines et les équipements industriels",
  "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing":
    "Sels d'hypophosphite · Intermédiaires organiques & pharmaceutiques — pour la construction, les revêtements industriels et la fabrication de composites",
  "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D":
    "1-Phenyl Oxide · Triazolo Pyridione — pour la R&D pharmaceutique, agrochimique et industrielle",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics":
    "Lithium Carbonate · Sels d'électrolyte · TMAH · Solvants qualité électronique — pour les batteries, le stockage d'énergie, les semi-conducteurs et l'électronique",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — pour les nutraceutiques, les cosmétiques, les aliments fonctionnels et les produits pharmaceutiques",

  // --- topic blurbs: industries ---------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Sels d'hypophosphite · Additifs polymères",
  "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Savons de lithium · Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Lithium soaps · Organic & pharmaceutical intermediates":
    "Savons de lithium · Intermédiaires organiques & pharmaceutiques",
  "Hypophosphite salts · Organic & pharmaceutical intermediates":
    "Sels d'hypophosphite · Intermédiaires organiques & pharmaceutiques",
  "1-Phenyl Oxide · Triazolo Pyridione": "1-Phenyl Oxide · Triazolo Pyridione",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents":
    "Lithium Carbonate · Sels d'électrolyte · TMAH · Solvants qualité électronique",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
  "Graphene & nano additives · High-performance polymers · Functional coatings":
    "Additifs graphène & nano · Polymères haute performance · Revêtements fonctionnels",

  // --- topic blurbs: business units -----------------------------------------
  "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.":
    "Fabrication et export de savons métalliques à base de lithium et d'additifs métalliques pour les systèmes de lubrification industriels.",
  "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.":
    "Production et export de sels ignifugeants inorganiques sans halogène et de sels métalliques fonctionnels.",
  "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.":
    "Fabrication et export d'intermédiaires organiques de haute pureté pour les applications pharmaceutiques, agrochimiques et chimiques industrielles.",
  "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.":
    "Polymères, résines, adhésifs, mastics et matériaux fonctionnels avancés pour applications industrielles.",
  "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.":
    "Tensioactifs industriels, émulsifiants, détergents et solutions chimiques biosourcées.",
  "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.":
    "Produits chimiques pour batteries lithium-ion, électronique et applications semi-conducteurs de haute pureté.",
  "High-value pigments, coatings intermediates and additive solutions.":
    "Pigments à forte valeur, intermédiaires de revêtement et solutions d'additifs.",
  "Vitamins, nutraceuticals, cosmetic actives and functional food additives.":
    "Vitamines, nutraceutiques, actifs cosmétiques et additifs alimentaires fonctionnels.",
  "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.":
    "Produits chimiques pour le traitement industriel de l'eau, l'inhibition de la corrosion, l'antitartre et les additifs fonctionnels.",
  "Niche chemicals for aerospace, automotive, electronics and industrial applications.":
    "Produits chimiques de niche pour l'aérospatiale, l'automobile, l'électronique et l'industrie.",

  // --- topic blurbs: product groups -----------------------------------------
  "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.":
    "Épaississants haute performance pour graisses automobiles et industrielles, à excellente stabilité thermique, résistance à l'eau et tenue mécanique.",
  "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.":
    "Additifs sans halogène qui améliorent la résistance au feu des plastiques, câbles et revêtements tout en réduisant les fumées et la toxicité.",
  "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.":
    "Composés de haute pureté pour la pharmacie, l'agrochimie et l'industrie — transposables du laboratoire à la production industrielle sans compromis sur la qualité.",
  "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.":
    "Polymères et résines avancés pour adhésifs, revêtements et matériaux fonctionnels, dont des qualités résistantes à la chaleur pour l'aérospatiale et l'automobile.",
  "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.":
    "Tensioactifs industriels et verts, émulsifiants et agents mouillants, ainsi que des intermédiaires et solvants végétaux écologiques.",
  "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.":
    "Sels pour batteries lithium-ion, solvants de haute pureté et produits pour semi-conducteurs, d'une pureté extrême et adaptés à chaque application.",
  "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.":
    "Pigments organiques et inorganiques, additifs de revêtement et stabilisants UV offrant couleur, dispersion et performance constantes.",
  "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.":
    "Intermédiaires de haute pureté pour la R&D et les applications commerciales, avec formulations sur mesure et accompagnement applicatif.",
  "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.":
    "Formulations sur mesure pour l'efficacité opérationnelle et la conformité environnementale des tours de refroidissement, centrales et industries de procédé.",
  "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.":
    "Solutions issues de la R&D pour les défis matériaux de nouvelle génération dans l'aérospatiale, l'automobile, l'électronique et l'industrie de pointe.",

  // --- topic and grade page chrome ------------------------------------------
  "The range": "La gamme",
  "Grades in this group": "Qualités de ce groupe",
  "All applications": "Toutes les applications",
  "All industries": "Tous les secteurs",
  "All business units": "Toutes les unités opérationnelles",
  "All products": "Tous les produits",
  "All capabilities": "Tous les moyens",
  "All innovation": "Toutes les innovations",
  "All r&d": "Toute la R&D",
  "All sustainability": "Tout le développement durable",
  "Talk to our technical team": "Parlez à notre équipe technique",
  "Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.":
    "Données techniques, options de conditionnement et documents d'export — dites-nous ce qu'il vous faut et l'équipe concernée vous répondra.",
  "Start a conversation": "Engager la conversation",
  "Division": "Division",
  "Product group": "Groupe de produits",
  "Filtered under": "Classé sous",
  "Also in this group": "Également dans ce groupe",
  "Request technical data": "Demander les données techniques",
  "Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.":
    "Documentation technique et de sécurité, options de conditionnement et formalités d'export — indiquez-nous la spécification à atteindre.",
  "Request TDS / SDS": "Demander la FT / FDS",
  "Back to the finder": "Retour à la recherche produit",

  // --- product finder -------------------------------------------------------
  "Filter by": "Filtrer par",
  "Clear filters": "Effacer les filtres",
  "Search…": "Rechercher…",
  "Search products": "Rechercher des produits",
  "Clear search": "Effacer la recherche",
  "Displaying {range} of {total} Results": "Affichage de {range} sur {total} résultats",
  "Displaying {total} Results": "Affichage de {total} résultats",
  "No products match those filters. Clear a filter, or {ask}.":
    "Aucun produit ne correspond à ces filtres. Retirez un filtre, ou {ask}.",
  "ask us about a custom grade": "demandez-nous une qualité sur mesure",
  "Show more results": "Afficher plus de résultats",
  "All divisions": "Toutes les divisions",
  "Automotive & transportation": "Automobile & transport",
  "Polymers & engineering plastics": "Polymères & plastiques techniques",
  "Electrical & electronics": "Électrique & électronique",
  "Industrial machinery": "Machines industrielles",
  "Coatings & composites": "Revêtements & composites",
  "Pharmaceutical & agrochemical": "Pharmacie & agrochimie",
  "Construction & infrastructure": "Construction & infrastructures",
  "Energy storage": "Stockage d'énergie",
  "Nutraceutical, cosmetic & food": "Nutraceutique, cosmétique & alimentaire",
  "Water treatment": "Traitement de l'eau",
  "Lithium & metal additives": "Additifs lithium & métalliques",
  "Flame retardants": "Ignifugeants",
  "Intermediates": "Intermédiaires",
  "Polymers & resins": "Polymères & résines",
  "Surfactants": "Tensioactifs",
  "Battery & electronic": "Batteries & électronique",
  "Pigments": "Pigments",
  "Nutraceutical & cosmetic": "Nutraceutique & cosmétique",
  "Functional materials": "Matériaux fonctionnels",

  // --- banner headlines ------------------------------------------------------
  // The whole two-tone headline as one key; see components/HeroTitle.tsx for why
  // the light/bold split is not translated as two fragments.
  "About Cosmox Chemicals": "À propos de Cosmox Chemicals",
  "Contact Us": "Contactez-nous",
  "Search for a Product": "Rechercher un produit",
  "Industries We Serve": "Les secteurs que nous servons",

  // --- footer ---------------------------------------------------------------
  "Advanced chemical manufacturing and export — enabling industrial efficiency, safety and sustainability worldwide.":
    "Production chimique avancée et export — au service de l'efficacité, de la sécurité et de la durabilité industrielles dans le monde entier.",
  "Company": "Entreprise",
  "Offering": "Offre",
  "Get in touch": "Nous contacter",
  "Product finder": "Recherche produit",
  "All rights reserved.": "Tous droits réservés.",
  "Manufacturer & exporter of speciality chemicals":
    "Fabricant & exportateur de produits chimiques de spécialité",
};

export default fr;
