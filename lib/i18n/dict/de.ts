/* Deutsch — Germany. See ./types.ts for what is and is not translated:
   chemical names, grade names, division numbers and the Cosmox™ mark stay in
   the original, so a blurb that is a substance list keeps the substances and
   localises only the sentence around them. */

import type { Dict } from "./types";

const de: Dict = {
  // --- navigation and header ------------------------------------------------
  "Home": "Startseite",
  "About us": "Über uns",
  "Divisions": "Geschäftsbereiche",
  "Products": "Produkte",
  "Industries": "Branchen",
  "Applications": "Anwendungen",
  "Capabilities": "Kompetenzen",
  "R&D": "F&E",
  "Innovation": "Innovation",
  "Sustainability": "Nachhaltigkeit",
  "Contact": "Kontakt",
  "Product Finder": "Produktfinder",
  "Skip to content": "Zum Inhalt springen",
  "Search the whole range": "Das ganze Programm durchsuchen",
  "Visit page": "Seite ansehen",
  "Sections": "Bereiche",
  "On the home page": "Auf der Startseite",
  "Explore": "Entdecken",
  "Previous": "Zurück",
  "Next": "Weiter",
  "Previous picture": "Vorheriges Bild",
  "Next picture": "Nächstes Bild",
  "Business units": "Geschäftsbereiche",
  "Business Units": "Geschäftsbereiche",
  "Research & Development": "Forschung & Entwicklung",

  // --- country and language menu -------------------------------------------
  "Region & language": "Region & Sprache",
  "Change country and language": "Land und Sprache ändern",
  "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.":
    "Wählen Sie, von wo aus Sie einkaufen. Wir produzieren in Surat und exportieren weltweit — die Sprache wechselt mit dem Land.",
  "Navigation and product titles are translated. Detailed page copy remains in English.":
    "Navigation und Produktbezeichnungen sind übersetzt. Ausführliche Seiteninhalte bleiben auf Englisch.",
  "Detected": "Erkannt",
  "Search countries": "Länder suchen",
  "Search {n} countries": "{n} Länder durchsuchen",
  "Set from your device's time zone. Change it here at any time.":
    "Anhand der Zeitzone Ihres Geräts gewählt. Hier jederzeit änderbar.",
  "Set from your browser's language. Change it here at any time.":
    "Anhand der Sprache Ihres Browsers gewählt. Hier jederzeit änderbar.",
  "No country matches “{q}”. We export worldwide — write to us and we will route your enquiry.":
    "Kein Land passt zu „{q}“. Wir exportieren weltweit — schreiben Sie uns, wir leiten Ihre Anfrage weiter.",

  // the six regions the panel groups the countries into
  "Asia Pacific": "Asien-Pazifik",
  "Europe": "Europa",
  "Americas": "Amerika",
  "Middle East": "Naher Osten",
  "Africa": "Afrika",
  "Central Asia & Caucasus": "Zentralasien & Kaukasus",

  /* All seventy countries in `lib/i18n/locales.ts`, in the order the panel
     lists them. A country whose name is the same in this language is still
     written out, so a name added to the register shows up here as a gap
     rather than silently reading as translated. */
  // Asia Pacific
  "India": "Indien",
  "China": "China",
  "Japan": "Japan",
  "South Korea": "Südkorea",
  "Taiwan": "Taiwan",
  "Vietnam": "Vietnam",
  "Indonesia": "Indonesien",
  "Malaysia": "Malaysia",
  "Singapore": "Singapur",
  "Thailand": "Thailand",
  "Philippines": "Philippinen",
  "Pakistan": "Pakistan",
  "Bangladesh": "Bangladesch",
  "Nepal": "Nepal",
  "Sri Lanka": "Sri Lanka",
  "Myanmar": "Myanmar",
  "Cambodia": "Kambodscha",
  "Australia": "Australien",
  "New Zealand": "Neuseeland",
  // Europe
  "United Kingdom": "Vereinigtes Königreich",
  "Ireland": "Irland",
  "Germany": "Deutschland",
  "France": "Frankreich",
  "Italy": "Italien",
  "Spain": "Spanien",
  "Portugal": "Portugal",
  "Netherlands": "Niederlande",
  "Belgium": "Belgien",
  "Switzerland": "Schweiz",
  "Austria": "Österreich",
  "Sweden": "Schweden",
  "Norway": "Norwegen",
  "Denmark": "Dänemark",
  "Finland": "Finnland",
  "Poland": "Polen",
  "Czech Republic": "Tschechien",
  "Hungary": "Ungarn",
  "Romania": "Rumänien",
  "Greece": "Griechenland",
  "Russia": "Russland",
  "Ukraine": "Ukraine",
  "Turkey": "Türkei",
  // Americas
  "United States": "Vereinigte Staaten",
  "Canada": "Kanada",
  "Mexico": "Mexiko",
  "Brazil": "Brasilien",
  "Argentina": "Argentinien",
  "Chile": "Chile",
  "Colombia": "Kolumbien",
  "Peru": "Peru",
  // Middle East
  "United Arab Emirates": "Vereinigte Arabische Emirate",
  "Saudi Arabia": "Saudi-Arabien",
  "Qatar": "Katar",
  "Kuwait": "Kuwait",
  "Oman": "Oman",
  "Bahrain": "Bahrain",
  "Israel": "Israel",
  // Africa
  "Egypt": "Ägypten",
  "Morocco": "Marokko",
  "Algeria": "Algerien",
  "Nigeria": "Nigeria",
  "Ghana": "Ghana",
  "Kenya": "Kenia",
  "Tanzania": "Tansania",
  "Ethiopia": "Äthiopien",
  "South Africa": "Südafrika",
  // Central Asia & Caucasus
  "Kazakhstan": "Kasachstan",
  "Uzbekistan": "Usbekistan",
  "Azerbaijan": "Aserbaidschan",
  "Georgia": "Georgien",

  // --- nav dropdown introductions -------------------------------------------
  "Speciality chemistry manufactured and exported from Surat — ten divisions, 112 grades, one integrated plant.":
    "Spezialchemie, hergestellt und exportiert aus Surat — zehn Geschäftsbereiche, 112 Qualitäten, ein integriertes Werk.",
  "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.":
    "Wer wir sind: der Auftrag, Chemie herzustellen und zu exportieren, die die Industrie sicherer, sauberer und effizienter macht.",
  "Ten specialised divisions under one roof, structured so scale never costs you technical attention.":
    "Zehn spezialisierte Geschäftsbereiche unter einem Dach — so aufgestellt, dass Größe nie zu Lasten der technischen Betreuung geht.",
  "The full range — 112 grades built for high performance, consistency and regulatory confidence.":
    "Das gesamte Programm — 112 Qualitäten für hohe Leistung, Konstanz und regulatorische Sicherheit.",
  "The sectors we formulate for, and what each one asks of a speciality chemical supplier.":
    "Die Branchen, für die wir formulieren, und was jede von einem Spezialchemie-Lieferanten verlangt.",
  "What our chemistry actually does in service — the end uses each grade was developed for.":
    "Was unsere Chemie im Einsatz tatsächlich leistet — die Endanwendungen, für die jede Qualität entwickelt wurde.",
  "Manufacturing, laboratory, quality and export capability, described plainly.":
    "Produktion, Labor, Qualität und Exportabwicklung — schlicht beschrieben.",
  "The laboratories, instruments and synthesis work behind every grade we ship.":
    "Die Labore, Geräte und Synthesearbeit hinter jeder Qualität, die wir ausliefern.",
  "Where the next products come from — in the flask, on the plant floor, and with customers.":
    "Woher die nächsten Produkte kommen — im Kolben, in der Produktion und beim Kunden.",
  "How the plant, the portfolio and the people are being held to a lower footprint.":
    "Wie Werk, Portfolio und Menschen auf einen kleineren Fußabdruck verpflichtet werden.",

  // --- on-page jump links ---------------------------------------------------
  "What we make": "Was wir herstellen",
  "Our products": "Unsere Produkte",
  "Find a product": "Produkt finden",
  "Ten divisions": "Zehn Geschäftsbereiche",
  "Industries served": "Belieferte Branchen",
  "A force for good": "Eine Kraft für Gutes",
  "Latest media": "Aktuelles",
  "Global presence": "Weltweite Präsenz",
  "Manufacturing excellence": "Fertigungskompetenz",
  "Research & development": "Forschung & Entwicklung",
  "Quality & compliance": "Qualität & Compliance",
  "Our vision": "Unsere Vision",

  // --- topic titles ---------------------------------------------------------
  "Lubrication & Grease": "Schmierstoffe & Fette",
  "Flame Retardancy": "Flammschutz",
  "Polymers & Engineering": "Polymere & Technik",
  "Electrical & Electronics": "Elektrotechnik & Elektronik",
  "Automotive": "Automobil",
  "Industrial Machinery & Equipment": "Industriemaschinen & Anlagen",
  "Coatings & Composites": "Beschichtungen & Verbundwerkstoffe",
  "Pharmaceutical & Agrochemical": "Pharma & Agrochemie",
  "Energy Storage & Electronics": "Energiespeicher & Elektronik",
  "Nutraceutical, Cosmetic & Food": "Nutrazeutika, Kosmetik & Lebensmittel",
  "Automotive & Transportation": "Automobil & Transport",
  "Polymers & Engineering Plastics": "Polymere & technische Kunststoffe",
  "Construction & Infrastructure": "Bau & Infrastruktur",
  "Research-Driven Specialty Industries": "Forschungsgetriebene Spezialbranchen",
  "Lithium & Metal Additives": "Lithium- & Metalladditive",
  "Inorganic & Flame-Retardant Chemicals": "Anorganische & flammhemmende Chemikalien",
  "Organic & Pharmaceutical Intermediates": "Organische & pharmazeutische Zwischenprodukte",
  "Polymers, Resins & High-Performance Materials": "Polymere, Harze & Hochleistungswerkstoffe",
  "Surfactants, Detergents & Bio-Based Chemicals": "Tenside, Waschmittel & biobasierte Chemikalien",
  "Electrochemical, Battery & Electronic Chemicals": "Elektrochemie-, Batterie- & Elektronikchemikalien",
  "Paints, Coatings & Pigments": "Lacke, Beschichtungen & Pigmente",
  "Nutraceutical, Cosmetic & Food Chemicals": "Nutrazeutika-, Kosmetik- & Lebensmittelchemikalien",
  "Water Treatment & Industrial Additives": "Wasseraufbereitung & Industrieadditive",
  "Functional & High-Performance Materials": "Funktions- & Hochleistungswerkstoffe",
  "Flame-Retardant & Inorganic Salts": "Flammhemmende & anorganische Salze",
  "Advanced Manufacturing": "Moderne Fertigung",
  "Research & Development Excellence": "Exzellenz in Forschung & Entwicklung",
  "Quality Assurance & Compliance": "Qualitätssicherung & Compliance",
  "Technical & Application Support": "Technischer & anwendungstechnischer Support",
  "Global Export & Logistics": "Weltweiter Export & Logistik",
  "Sustainability Integration": "Integrierte Nachhaltigkeit",
  "Product Innovation": "Produktinnovation",
  "Process & Manufacturing Innovation": "Prozess- & Fertigungsinnovation",
  "Application & Industry-Specific Innovation": "Anwendungs- & branchenspezifische Innovation",
  "Sustainable & Green Innovation": "Nachhaltige & grüne Innovation",
  "Collaboration & Knowledge Innovation": "Kooperations- & Wissensinnovation",
  "Integrated Innovation Advantage": "Integrierter Innovationsvorsprung",
  "Product Innovation & Development": "Produktinnovation & -entwicklung",
  "Advanced Analytical & Testing": "Moderne Analytik & Prüfung",
  "Application-Specific Research": "Anwendungsspezifische Forschung",
  "Sustainable & Green Chemistry": "Nachhaltige & grüne Chemie",
  "Collaboration & Knowledge Sharing": "Zusammenarbeit & Wissenstransfer",
  "Integrated R&D Excellence": "Integrierte F&E-Exzellenz",
  "Environmental Stewardship": "Umweltverantwortung",
  "Sustainable Product Innovation": "Nachhaltige Produktinnovation",
  "Energy & Resource Optimisation": "Energie- & Ressourcenoptimierung",
  "Health, Safety & Community": "Gesundheit, Sicherheit & Gemeinschaft",
  "Circular Economy & Waste": "Kreislaufwirtschaft & Abfall",
  "Integrated Sustainability Excellence": "Integrierte Nachhaltigkeitsexzellenz",

  // --- topic blurbs: applications -------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — für Automobil, schwere Maschinen, Industrieanlagen, Polymere & Kunststoffe",
  "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials":
    "Aluminium · Calcium · Magnesium Hypophosphite — für Kunststoffe, Elektronik, Elektrotechnik, Beschichtungen und Baustoffe",
  "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics":
    "Lithiumseifen · Hypophosphit-Salze — für Kunststoffe, technische Werkstoffe, Automobil und Elektronik",
  "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics":
    "Aluminium Hypophosphite · Magnesium Hypophosphite — für Unterhaltungselektronik, Elektrogeräte und Industrieelektronik",
  "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery":
    "Lithiumseifen & -fette · Hypophosphit-Salze · Polymeradditive — für Automobilkomponenten, Nutzfahrzeuge und schwere Maschinen",
  "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment":
    "Lithiumseifen · Organische & pharmazeutische Zwischenprodukte — für schwere Maschinen, Produktionsanlagen und Industrieausrüstung",
  "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing":
    "Hypophosphit-Salze · Organische & pharmazeutische Zwischenprodukte — für Bau, Industriebeschichtungen und Verbundwerkstofffertigung",
  "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D":
    "1-Phenyl Oxide · Triazolo Pyridione — für pharmazeutische, agrochemische und industrielle F&E",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics":
    "Lithium Carbonate · Elektrolytsalze · TMAH · Lösungsmittel in Elektronikqualität — für Batterien, Energiespeicher, Halbleiter und Elektronik",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — für Nutrazeutika, Kosmetik, funktionelle Lebensmittel und Pharmazeutika",

  // --- topic blurbs: industries ---------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphit-Salze · Polymeradditive",
  "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Lithiumseifen · Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Lithium soaps · Organic & pharmaceutical intermediates":
    "Lithiumseifen · Organische & pharmazeutische Zwischenprodukte",
  "Hypophosphite salts · Organic & pharmaceutical intermediates":
    "Hypophosphit-Salze · Organische & pharmazeutische Zwischenprodukte",
  "1-Phenyl Oxide · Triazolo Pyridione": "1-Phenyl Oxide · Triazolo Pyridione",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents":
    "Lithium Carbonate · Elektrolytsalze · TMAH · Lösungsmittel in Elektronikqualität",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
  "Graphene & nano additives · High-performance polymers · Functional coatings":
    "Graphen- & Nanoadditive · Hochleistungspolymere · Funktionsbeschichtungen",

  // --- topic blurbs: business units -----------------------------------------
  "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.":
    "Herstellung und Export lithiumbasierter Metallseifen und Metalladditive für industrielle Schmiersysteme.",
  "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.":
    "Produktion und Export halogenfreier anorganischer Flammschutzsalze und funktioneller Metallsalze.",
  "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.":
    "Herstellung und Export hochreiner organischer Zwischenprodukte für pharmazeutische, agrochemische und industriechemische Anwendungen.",
  "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.":
    "Moderne Polymere, Harze, Klebstoffe, Dichtstoffe und Funktionswerkstoffe für industrielle Anwendungen.",
  "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.":
    "Industrielle Tenside, Emulgatoren, Waschmittel und biobasierte Chemielösungen.",
  "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.":
    "Chemikalien für Lithium-Ionen-Batterien, Elektronik und hochreine Halbleiteranwendungen.",
  "High-value pigments, coatings intermediates and additive solutions.":
    "Hochwertige Pigmente, Beschichtungszwischenprodukte und Additivlösungen.",
  "Vitamins, nutraceuticals, cosmetic actives and functional food additives.":
    "Vitamine, Nutrazeutika, kosmetische Wirkstoffe und funktionelle Lebensmittelzusätze.",
  "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.":
    "Chemikalien für industrielle Wasseraufbereitung, Korrosionsschutz, Antiscaling und Funktionsadditive.",
  "Niche chemicals for aerospace, automotive, electronics and industrial applications.":
    "Nischenchemikalien für Luft- und Raumfahrt, Automobil, Elektronik und Industrieanwendungen.",

  // --- topic blurbs: product groups -----------------------------------------
  "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.":
    "Hochleistungsverdicker für Automobil- und Industriefette, mit ausgezeichneter Thermostabilität, Wasserbeständigkeit und mechanischer Dauerfestigkeit.",
  "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.":
    "Halogenfreie Additive, die den Brandschutz in Kunststoffen, Kabeln und Beschichtungen erhöhen und zugleich Rauch und Toxizität verringern.",
  "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.":
    "Hochreine Verbindungen für Pharmazeutika, Agrochemikalien und Industrieanwendungen — skalierbar von der Laborforschung bis zur Produktion, ohne Qualitätseinbußen.",
  "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.":
    "Moderne Polymere und Harze für Klebstoffe, Beschichtungen und Funktionswerkstoffe, einschließlich hitzebeständiger Qualitäten für Luftfahrt und Automobil.",
  "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.":
    "Industrielle und grüne Tenside, Emulgatoren und Netzmittel sowie umweltfreundliche pflanzenbasierte Zwischenprodukte und Lösungsmittel.",
  "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.":
    "Lithium-Ionen-Batteriesalze, hochreine Lösungsmittel und Halbleiterchemikalien mit höchster Reinheit und anwendungsspezifischer Leistung.",
  "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.":
    "Organische und anorganische Pigmente, Beschichtungsadditive und UV-Stabilisatoren für konstante Farbe, Dispergierung und Leistung.",
  "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.":
    "Hochreine Zwischenprodukte für F&E und kommerzielle Anwendungen, mit kundenspezifischen Formulierungen und anwendungsbezogener Betreuung.",
  "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.":
    "Maßgeschneiderte Formulierungen für Betriebseffizienz und Umweltkonformität in Kühltürmen, Kraftwerken und Prozessindustrien.",
  "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.":
    "F&E-getriebene Lösungen für Werkstoffherausforderungen der nächsten Generation in Luftfahrt, Automobil, Elektronik und Hochtechnologie.",

  // --- topic and grade page chrome ------------------------------------------
  "The range": "Das Programm",
  "Grades in this group": "Qualitäten in dieser Gruppe",
  "All applications": "Alle Anwendungen",
  "All industries": "Alle Branchen",
  "All business units": "Alle Geschäftsbereiche",
  "All products": "Alle Produkte",
  "All capabilities": "Alle Kompetenzen",
  "All innovation": "Alle Innovationen",
  "All r&d": "Alle F&E-Themen",
  "All sustainability": "Alle Nachhaltigkeitsthemen",
  "Talk to our technical team": "Sprechen Sie mit unserem technischen Team",
  "Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.":
    "Technische Daten, Verpackungsoptionen und Exportdokumente — sagen Sie uns, was Sie brauchen, und das zuständige Team meldet sich bei Ihnen.",
  "Start a conversation": "Gespräch beginnen",
  "Division": "Geschäftsbereich",
  "Product group": "Produktgruppe",
  "Filtered under": "Gefiltert unter",
  "Also in this group": "Ebenfalls in dieser Gruppe",
  "Request technical data": "Technische Daten anfordern",
  "Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.":
    "Technische Daten und Sicherheitsdatenblätter, Verpackungsoptionen und Exportpapiere — nennen Sie uns die Spezifikation, die Sie erreichen müssen.",
  "Request TDS / SDS": "TDS / SDS anfordern",
  "Back to the finder": "Zurück zum Produktfinder",

  // --- product finder -------------------------------------------------------
  "Filter by": "Filtern nach",
  "Clear filters": "Filter zurücksetzen",
  "Search…": "Suchen…",
  "Search products": "Produkte durchsuchen",
  "Clear search": "Suche löschen",
  "Displaying {range} of {total} Results": "Zeige {range} von {total} Ergebnissen",
  "Displaying {total} Results": "Zeige {total} Ergebnisse",
  "No products match those filters. Clear a filter, or {ask}.":
    "Keine Produkte entsprechen diesen Filtern. Setzen Sie einen Filter zurück, oder {ask}.",
  "ask us about a custom grade": "fragen Sie uns nach einer Sonderqualität",
  "Show more results": "Weitere Ergebnisse anzeigen",
  "All divisions": "Alle Geschäftsbereiche",
  "Automotive & transportation": "Automobil & Transport",
  "Polymers & engineering plastics": "Polymere & technische Kunststoffe",
  "Electrical & electronics": "Elektrotechnik & Elektronik",
  "Industrial machinery": "Industriemaschinen",
  "Coatings & composites": "Beschichtungen & Verbundwerkstoffe",
  "Pharmaceutical & agrochemical": "Pharma & Agrochemie",
  "Construction & infrastructure": "Bau & Infrastruktur",
  "Energy storage": "Energiespeicher",
  "Nutraceutical, cosmetic & food": "Nutrazeutika, Kosmetik & Lebensmittel",
  "Water treatment": "Wasseraufbereitung",
  "Lithium & metal additives": "Lithium- & Metalladditive",
  "Flame retardants": "Flammschutzmittel",
  "Intermediates": "Zwischenprodukte",
  "Polymers & resins": "Polymere & Harze",
  "Surfactants": "Tenside",
  "Battery & electronic": "Batterie & Elektronik",
  "Pigments": "Pigmente",
  "Nutraceutical & cosmetic": "Nutrazeutika & Kosmetik",
  "Functional materials": "Funktionswerkstoffe",

  // --- banner headlines ------------------------------------------------------
  // The whole two-tone headline as one key; see components/HeroTitle.tsx for why
  // the light/bold split is not translated as two fragments.
  "About Cosmox Chemicals": "Über Cosmox Chemicals",
  "Contact Us": "Kontaktieren Sie uns",
  "Search for a Product": "Produkt suchen",
  "Industries We Serve": "Branchen, die wir beliefern",

  // --- footer ---------------------------------------------------------------
  "Advanced chemical manufacturing and export — enabling industrial efficiency, safety and sustainability worldwide.":
    "Moderne Chemieproduktion und Export — für industrielle Effizienz, Sicherheit und Nachhaltigkeit weltweit.",
  "Company": "Unternehmen",
  "Offering": "Angebot",
  "Get in touch": "Kontakt aufnehmen",
  "Product finder": "Produktfinder",
  "All rights reserved.": "Alle Rechte vorbehalten.",
  "Manufacturer & exporter of speciality chemicals":
    "Hersteller & Exporteur von Spezialchemikalien",
};

export default de;
