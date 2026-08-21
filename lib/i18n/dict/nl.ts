/* Nederlands — Netherlands. See ./types.ts: chemical names, grade names and
   division numbers stay in the original. */

import type { Dict } from "./types";

const nl: Dict = {
  // --- navigation and header ------------------------------------------------
  "Home": "Home",
  "About us": "Over ons",
  "Divisions": "Divisies",
  "Products": "Producten",
  "Industries": "Sectoren",
  "Applications": "Toepassingen",
  "Capabilities": "Capaciteiten",
  "R&D": "R&D",
  "Innovation": "Innovatie",
  "Sustainability": "Duurzaamheid",
  "Contact": "Contact",
  "Product Finder": "Productzoeker",
  "Skip to content": "Naar de inhoud",
  "Search the whole range": "Doorzoek het hele assortiment",
  "Visit page": "Bekijk pagina",
  "Sections": "Secties",
  "On the home page": "Op de homepage",
  "Explore": "Ontdek",
  "Previous": "Vorige",
  "Next": "Volgende",
  "Previous picture": "Vorige afbeelding",
  "Next picture": "Volgende afbeelding",
  "Business units": "Business units",
  "Business Units": "Business units",
  "Research & Development": "Onderzoek & ontwikkeling",

  // --- country and language menu -------------------------------------------
  "Region & language": "Regio & taal",
  "Change country and language": "Land en taal wijzigen",
  "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.":
    "Kies vanwaar u inkoopt. Wij produceren in Surat en exporteren wereldwijd — de taal van de site volgt het land.",
  "Navigation and product titles are translated. Detailed page copy remains in English.":
    "Navigatie en productnamen zijn vertaald. Uitgebreide paginateksten blijven in het Engels.",
  "Detected": "Herkend",
  "Search countries": "Land zoeken",
  "Search {n} countries": "Zoek in {n} landen",
  "Set from your device's time zone. Change it here at any time.":
    "Gekozen op basis van de tijdzone van uw apparaat. U kunt dit hier altijd wijzigen.",
  "Set from your browser's language. Change it here at any time.":
    "Gekozen op basis van de taal van uw browser. U kunt dit hier altijd wijzigen.",
  "No country matches “{q}”. We export worldwide — write to us and we will route your enquiry.":
    "Geen land komt overeen met “{q}”. Wij exporteren wereldwijd — neem contact op en wij leiden uw aanvraag door.",

  // the six regions the panel groups the countries into
  "Asia Pacific": "Azië-Pacific",
  "Europe": "Europa",
  "Americas": "Amerika",
  "Middle East": "Midden-Oosten",
  "Africa": "Afrika",
  "Central Asia & Caucasus": "Centraal-Azië & Kaukasus",

  /* All seventy countries in `lib/i18n/locales.ts`, in the order the panel
     lists them. A country whose name is the same in this language is still
     written out, so a name added to the register shows up here as a gap
     rather than silently reading as translated. */
  // Asia Pacific
  "India": "India",
  "China": "China",
  "Japan": "Japan",
  "South Korea": "Zuid-Korea",
  "Taiwan": "Taiwan",
  "Vietnam": "Vietnam",
  "Indonesia": "Indonesië",
  "Malaysia": "Maleisië",
  "Singapore": "Singapore",
  "Thailand": "Thailand",
  "Philippines": "Filipijnen",
  "Pakistan": "Pakistan",
  "Bangladesh": "Bangladesh",
  "Nepal": "Nepal",
  "Sri Lanka": "Sri Lanka",
  "Myanmar": "Myanmar",
  "Cambodia": "Cambodja",
  "Australia": "Australië",
  "New Zealand": "Nieuw-Zeeland",
  // Europe
  "United Kingdom": "Verenigd Koninkrijk",
  "Ireland": "Ierland",
  "Germany": "Duitsland",
  "France": "Frankrijk",
  "Italy": "Italië",
  "Spain": "Spanje",
  "Portugal": "Portugal",
  "Netherlands": "Nederland",
  "Belgium": "België",
  "Switzerland": "Zwitserland",
  "Austria": "Oostenrijk",
  "Sweden": "Zweden",
  "Norway": "Noorwegen",
  "Denmark": "Denemarken",
  "Finland": "Finland",
  "Poland": "Polen",
  "Czech Republic": "Tsjechië",
  "Hungary": "Hongarije",
  "Romania": "Roemenië",
  "Greece": "Griekenland",
  "Russia": "Rusland",
  "Ukraine": "Oekraïne",
  "Turkey": "Turkije",
  // Americas
  "United States": "Verenigde Staten",
  "Canada": "Canada",
  "Mexico": "Mexico",
  "Brazil": "Brazilië",
  "Argentina": "Argentinië",
  "Chile": "Chili",
  "Colombia": "Colombia",
  "Peru": "Peru",
  // Middle East
  "United Arab Emirates": "Verenigde Arabische Emiraten",
  "Saudi Arabia": "Saoedi-Arabië",
  "Qatar": "Qatar",
  "Kuwait": "Koeweit",
  "Oman": "Oman",
  "Bahrain": "Bahrein",
  "Israel": "Israël",
  // Africa
  "Egypt": "Egypte",
  "Morocco": "Marokko",
  "Algeria": "Algerije",
  "Nigeria": "Nigeria",
  "Ghana": "Ghana",
  "Kenya": "Kenia",
  "Tanzania": "Tanzania",
  "Ethiopia": "Ethiopië",
  "South Africa": "Zuid-Afrika",
  // Central Asia & Caucasus
  "Kazakhstan": "Kazachstan",
  "Uzbekistan": "Oezbekistan",
  "Azerbaijan": "Azerbeidzjan",
  "Georgia": "Georgië",

  // --- nav dropdown introductions -------------------------------------------
  "Speciality chemistry manufactured and exported from Surat — ten divisions, 112 grades, one integrated plant.":
    "Specialiteitenchemie, geproduceerd en geëxporteerd vanuit Surat — tien divisies, 112 kwaliteiten, één geïntegreerde fabriek.",
  "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.":
    "Wie wij zijn: de opdracht om chemie te maken en te exporteren die de industrie veiliger, schoner en efficiënter maakt.",
  "Ten specialised divisions under one roof, structured so scale never costs you technical attention.":
    "Tien gespecialiseerde divisies onder één dak, zo ingericht dat schaal nooit ten koste gaat van technische aandacht.",
  "The full range — 112 grades built for high performance, consistency and regulatory confidence.":
    "Het volledige assortiment — 112 kwaliteiten gebouwd op prestatie, constantheid en regelgevingszekerheid.",
  "The sectors we formulate for, and what each one asks of a speciality chemical supplier.":
    "De sectoren waarvoor wij formuleren, en wat elk daarvan vraagt van een leverancier van specialiteitenchemie.",
  "What our chemistry actually does in service — the end uses each grade was developed for.":
    "Wat onze chemie in de praktijk werkelijk doet — de eindtoepassingen waarvoor elke kwaliteit is ontwikkeld.",
  "Manufacturing, laboratory, quality and export capability, described plainly.":
    "Productie, laboratorium, kwaliteit en exportcapaciteit, eenvoudig beschreven.",
  "The laboratories, instruments and synthesis work behind every grade we ship.":
    "De laboratoria, apparatuur en synthese achter elke kwaliteit die wij verschepen.",
  "Where the next products come from — in the flask, on the plant floor, and with customers.":
    "Waar de volgende producten vandaan komen — in de kolf, in de fabriek en bij de klant.",
  "How the plant, the portfolio and the people are being held to a lower footprint.":
    "Hoe fabriek, portfolio en mensen aan een kleinere voetafdruk worden gehouden.",

  // --- on-page jump links ---------------------------------------------------
  "What we make": "Wat wij maken",
  "Our products": "Onze producten",
  "Find a product": "Zoek een product",
  "Ten divisions": "Tien divisies",
  "Industries served": "Bediende sectoren",
  "A force for good": "Een kracht ten goede",
  "Latest media": "Actueel",
  "Global presence": "Wereldwijde aanwezigheid",
  "Manufacturing excellence": "Productie-excellentie",
  "Research & development": "Onderzoek & ontwikkeling",
  "Quality & compliance": "Kwaliteit & compliance",
  "Our vision": "Onze visie",

  // --- topic titles ---------------------------------------------------------
  "Lubrication & Grease": "Smering & vetten",
  "Flame Retardancy": "Brandvertraging",
  "Polymers & Engineering": "Polymeren & techniek",
  "Electrical & Electronics": "Elektrotechniek & elektronica",
  "Automotive": "Automotive",
  "Industrial Machinery & Equipment": "Industriële machines & apparatuur",
  "Coatings & Composites": "Coatings & composieten",
  "Pharmaceutical & Agrochemical": "Farmacie & agrochemie",
  "Energy Storage & Electronics": "Energieopslag & elektronica",
  "Nutraceutical, Cosmetic & Food": "Nutraceutica, cosmetica & voeding",
  "Automotive & Transportation": "Automotive & transport",
  "Polymers & Engineering Plastics": "Polymeren & technische kunststoffen",
  "Construction & Infrastructure": "Bouw & infrastructuur",
  "Research-Driven Specialty Industries": "Onderzoeksgedreven specialiteitensectoren",
  "Lithium & Metal Additives": "Lithium- & metaaladditieven",
  "Inorganic & Flame-Retardant Chemicals": "Anorganische & brandvertragende chemicaliën",
  "Organic & Pharmaceutical Intermediates": "Organische & farmaceutische intermediairen",
  "Polymers, Resins & High-Performance Materials": "Polymeren, harsen & hoogwaardige materialen",
  "Surfactants, Detergents & Bio-Based Chemicals": "Oppervlakteactieve stoffen, detergenten & biobased chemicaliën",
  "Electrochemical, Battery & Electronic Chemicals": "Elektrochemische, batterij- & elektronicachemicaliën",
  "Paints, Coatings & Pigments": "Verven, coatings & pigmenten",
  "Nutraceutical, Cosmetic & Food Chemicals": "Nutraceutische, cosmetische & voedingschemicaliën",
  "Water Treatment & Industrial Additives": "Waterbehandeling & industriële additieven",
  "Functional & High-Performance Materials": "Functionele & hoogwaardige materialen",
  "Flame-Retardant & Inorganic Salts": "Brandvertragende & anorganische zouten",
  "Advanced Manufacturing": "Geavanceerde productie",
  "Research & Development Excellence": "Excellentie in onderzoek & ontwikkeling",
  "Quality Assurance & Compliance": "Kwaliteitsborging & compliance",
  "Technical & Application Support": "Technische & applicatieondersteuning",
  "Global Export & Logistics": "Wereldwijde export & logistiek",
  "Sustainability Integration": "Integratie van duurzaamheid",
  "Product Innovation": "Productinnovatie",
  "Process & Manufacturing Innovation": "Proces- & productie-innovatie",
  "Application & Industry-Specific Innovation": "Applicatie- & sectorspecifieke innovatie",
  "Sustainable & Green Innovation": "Duurzame & groene innovatie",
  "Collaboration & Knowledge Innovation": "Samenwerkings- & kennisinnovatie",
  "Integrated Innovation Advantage": "Geïntegreerd innovatievoordeel",
  "Product Innovation & Development": "Productinnovatie & -ontwikkeling",
  "Advanced Analytical & Testing": "Geavanceerde analyse & testen",
  "Application-Specific Research": "Applicatiespecifiek onderzoek",
  "Sustainable & Green Chemistry": "Duurzame & groene chemie",
  "Collaboration & Knowledge Sharing": "Samenwerking & kennisdeling",
  "Integrated R&D Excellence": "Geïntegreerde R&D-excellentie",
  "Environmental Stewardship": "Milieuverantwoordelijkheid",
  "Sustainable Product Innovation": "Duurzame productinnovatie",
  "Energy & Resource Optimisation": "Energie- & grondstoffenoptimalisatie",
  "Health, Safety & Community": "Gezondheid, veiligheid & gemeenschap",
  "Circular Economy & Waste": "Circulaire economie & afval",
  "Integrated Sustainability Excellence": "Geïntegreerde duurzaamheidsexcellentie",

  // --- topic blurbs: applications -------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — voor automotive, zware machines, industriële apparatuur, polymeren & kunststoffen",
  "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials":
    "Aluminium · Calcium · Magnesium Hypophosphite — voor kunststoffen, elektronica, elektrotechniek, coatings en bouwmaterialen",
  "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics":
    "Lithiumzepen · Hypofosfietzouten — voor kunststoffen, technische materialen, automotive en elektronica",
  "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics":
    "Aluminium Hypophosphite · Magnesium Hypophosphite — voor consumentenelektronica, elektrische apparaten en industriële elektronica",
  "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery":
    "Lithiumzepen & -vetten · Hypofosfietzouten · Polymeeradditieven — voor automotive-componenten, bedrijfsvoertuigen en zware machines",
  "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment":
    "Lithiumzepen · Organische & farmaceutische intermediairen — voor zware machines, productiefabrieken en industriële apparatuur",
  "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing":
    "Hypofosfietzouten · Organische & farmaceutische intermediairen — voor de bouw, industriële coatings en composietproductie",
  "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D":
    "1-Phenyl Oxide · Triazolo Pyridione — voor farmaceutische, agrochemische en industriële R&D",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics":
    "Lithium Carbonate · Elektrolytzouten · TMAH · Oplosmiddelen van elektronicakwaliteit — voor batterijen, energieopslag, halfgeleiders en elektronica",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — voor nutraceutica, cosmetica, functionele voeding en farmaceutica",

  // --- topic blurbs: industries ---------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypofosfietzouten · Polymeeradditieven",
  "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Lithiumzepen · Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Lithium soaps · Organic & pharmaceutical intermediates":
    "Lithiumzepen · Organische & farmaceutische intermediairen",
  "Hypophosphite salts · Organic & pharmaceutical intermediates":
    "Hypofosfietzouten · Organische & farmaceutische intermediairen",
  "1-Phenyl Oxide · Triazolo Pyridione": "1-Phenyl Oxide · Triazolo Pyridione",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents":
    "Lithium Carbonate · Elektrolytzouten · TMAH · Oplosmiddelen van elektronicakwaliteit",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
  "Graphene & nano additives · High-performance polymers · Functional coatings":
    "Grafeen- & nano-additieven · Hoogwaardige polymeren · Functionele coatings",

  // --- topic blurbs: business units -----------------------------------------
  "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.":
    "Productie en export van lithiumgebaseerde metaalzepen en metaaladditieven voor industriële smeersystemen.",
  "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.":
    "Productie en export van halogeenvrije anorganische brandvertragende zouten en functionele metaalzouten.",
  "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.":
    "Productie en export van zeer zuivere organische intermediairen voor farmaceutische, agrochemische en industrieel-chemische toepassingen.",
  "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.":
    "Geavanceerde polymeren, harsen, lijmen, kitten en functionele materialen voor industriële toepassingen.",
  "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.":
    "Industriële oppervlakteactieve stoffen, emulgatoren, detergenten en biobased chemische oplossingen.",
  "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.":
    "Chemicaliën voor lithium-ionbatterijen, elektronica en zeer zuivere halfgeleidertoepassingen.",
  "High-value pigments, coatings intermediates and additive solutions.":
    "Hoogwaardige pigmenten, coatingintermediairen en additiefoplossingen.",
  "Vitamins, nutraceuticals, cosmetic actives and functional food additives.":
    "Vitaminen, nutraceutica, cosmetische actieven en functionele voedingsadditieven.",
  "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.":
    "Chemicaliën voor industriële waterbehandeling, corrosieremming, antiaanslag en functionele additieven.",
  "Niche chemicals for aerospace, automotive, electronics and industrial applications.":
    "Nichechemicaliën voor lucht- en ruimtevaart, automotive, elektronica en industriële toepassingen.",

  // --- topic blurbs: product groups -----------------------------------------
  "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.":
    "Hoogwaardige verdikkingsmiddelen voor automotive- en industriële vetten, met uitstekende thermische stabiliteit, waterbestendigheid en mechanische duurzaamheid.",
  "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.":
    "Halogeenvrije additieven die de brandwerendheid van kunststoffen, kabels en coatings verhogen en tegelijk rook en toxiciteit verminderen.",
  "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.":
    "Zeer zuivere verbindingen voor farmacie, agrochemie en industrie — opschaalbaar van laboratoriumonderzoek naar industriële productie zonder kwaliteitsverlies.",
  "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.":
    "Geavanceerde polymeren en harsen voor lijmen, coatings en functionele materialen, inclusief hittebestendige kwaliteiten voor lucht- en ruimtevaart en automotive.",
  "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.":
    "Industriële en groene oppervlakteactieve stoffen, emulgatoren en bevochtigers, plus milieuvriendelijke plantaardige intermediairen en oplosmiddelen.",
  "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.":
    "Zouten voor lithium-ionbatterijen, zeer zuivere oplosmiddelen en halfgeleiderchemicaliën met ultrahoge zuiverheid en applicatiespecifieke prestaties.",
  "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.":
    "Organische en anorganische pigmenten, coatingadditieven en UV-stabilisatoren voor constante kleur, dispersie en prestatie.",
  "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.":
    "Zeer zuivere intermediairen voor R&D en commerciële toepassingen, met formuleringen op maat en applicatiespecifieke ondersteuning.",
  "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.":
    "Formuleringen op maat voor operationele efficiëntie en milieuconformiteit in koeltorens, energiecentrales en procesindustrieën.",
  "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.":
    "R&D-gedreven oplossingen voor materiaalvraagstukken van de volgende generatie in lucht- en ruimtevaart, automotive, elektronica en geavanceerde industrie.",

  // --- topic and grade page chrome ------------------------------------------
  "The range": "Het assortiment",
  "Grades in this group": "Kwaliteiten in deze groep",
  "All applications": "Alle toepassingen",
  "All industries": "Alle sectoren",
  "All business units": "Alle business units",
  "All products": "Alle producten",
  "All capabilities": "Alle capaciteiten",
  "All innovation": "Alle innovatie",
  "All r&d": "Alle R&D",
  "All sustainability": "Alle duurzaamheid",
  "Talk to our technical team": "Spreek met ons technische team",
  "Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.":
    "Technische gegevens, verpakkingsopties en exportdocumentatie — laat ons weten wat u nodig heeft en het juiste team neemt contact op.",
  "Start a conversation": "Begin een gesprek",
  "Division": "Divisie",
  "Product group": "Productgroep",
  "Filtered under": "Gefilterd onder",
  "Also in this group": "Ook in deze groep",
  "Request technical data": "Technische gegevens aanvragen",
  "Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.":
    "Technische en veiligheidsdocumentatie, verpakkingsopties en exportpapieren — laat ons weten welke specificatie u moet halen.",
  "Request TDS / SDS": "TDS / SDS aanvragen",
  "Back to the finder": "Terug naar de productzoeker",

  // --- product finder -------------------------------------------------------
  "Filter by": "Filteren op",
  "Clear filters": "Filters wissen",
  "Search…": "Zoeken…",
  "Search products": "Producten zoeken",
  "Clear search": "Zoekopdracht wissen",
  "Displaying {range} of {total} Results": "{range} van {total} resultaten",
  "Displaying {total} Results": "{total} resultaten",
  "No products match those filters. Clear a filter, or {ask}.":
    "Geen producten voldoen aan deze filters. Wis een filter, of {ask}.",
  "ask us about a custom grade": "vraag ons naar een kwaliteit op maat",
  "Show more results": "Meer resultaten tonen",
  "All divisions": "Alle divisies",
  "Automotive & transportation": "Automotive & transport",
  "Polymers & engineering plastics": "Polymeren & technische kunststoffen",
  "Electrical & electronics": "Elektrotechniek & elektronica",
  "Industrial machinery": "Industriële machines",
  "Coatings & composites": "Coatings & composieten",
  "Pharmaceutical & agrochemical": "Farmacie & agrochemie",
  "Construction & infrastructure": "Bouw & infrastructuur",
  "Energy storage": "Energieopslag",
  "Nutraceutical, cosmetic & food": "Nutraceutica, cosmetica & voeding",
  "Water treatment": "Waterbehandeling",
  "Lithium & metal additives": "Lithium- & metaaladditieven",
  "Flame retardants": "Brandvertragers",
  "Intermediates": "Intermediairen",
  "Polymers & resins": "Polymeren & harsen",
  "Surfactants": "Oppervlakteactieve stoffen",
  "Battery & electronic": "Batterij & elektronica",
  "Pigments": "Pigmenten",
  "Nutraceutical & cosmetic": "Nutraceutica & cosmetica",
  "Functional materials": "Functionele materialen",

  // --- banner headlines ------------------------------------------------------
  // The whole two-tone headline as one key; see components/HeroTitle.tsx for why
  // the light/bold split is not translated as two fragments.
  "About Cosmox Chemicals": "Over Cosmox Chemicals",
  "Contact Us": "Neem contact met ons op",
  "Search for a Product": "Zoek een product",
  "Industries We Serve": "Sectoren die wij bedienen",

  // --- footer ---------------------------------------------------------------
  "Advanced chemical manufacturing and export — enabling industrial efficiency, safety and sustainability worldwide.":
    "Geavanceerde chemische productie en export — voor industriële efficiëntie, veiligheid en duurzaamheid wereldwijd.",
  "Company": "Bedrijf",
  "Offering": "Aanbod",
  "Get in touch": "Neem contact op",
  "Product finder": "Productzoeker",
  "All rights reserved.": "Alle rechten voorbehouden.",
  "Manufacturer & exporter of speciality chemicals":
    "Producent & exporteur van specialiteitenchemicaliën",
};

export default nl;
