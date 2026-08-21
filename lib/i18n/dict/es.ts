/* Español — Spain. See ./types.ts: chemical names, grade names and division
   numbers stay in the original. */

import type { Dict } from "./types";

const es: Dict = {
  // --- navigation and header ------------------------------------------------
  "Home": "Inicio",
  "About us": "Sobre nosotros",
  "Divisions": "Divisiones",
  "Products": "Productos",
  "Industries": "Sectores",
  "Applications": "Aplicaciones",
  "Capabilities": "Capacidades",
  "R&D": "I+D",
  "Innovation": "Innovación",
  "Sustainability": "Sostenibilidad",
  "Contact": "Contacto",
  "Product Finder": "Buscador de productos",
  "Skip to content": "Ir al contenido",
  "Search the whole range": "Buscar en toda la gama",
  "Visit page": "Ver página",
  "Sections": "Secciones",
  "On the home page": "En la página de inicio",
  "Explore": "Explorar",
  "Previous": "Anterior",
  "Next": "Siguiente",
  "Previous picture": "Imagen anterior",
  "Next picture": "Imagen siguiente",
  "Business units": "Unidades de negocio",
  "Business Units": "Unidades de negocio",
  "Research & Development": "Investigación y desarrollo",

  // --- country and language menu -------------------------------------------
  "Region & language": "Región e idioma",
  "Change country and language": "Cambiar país e idioma",
  "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.":
    "Elija desde dónde compra. Fabricamos en Surat y exportamos a todo el mundo: el idioma del sitio cambia con el país.",
  "Navigation and product titles are translated. Detailed page copy remains in English.":
    "La navegación y los nombres de producto están traducidos. El texto detallado de las páginas permanece en inglés.",
  "Detected": "Detectado",
  "Search countries": "Buscar país",
  "Search {n} countries": "Buscar entre {n} países",
  "Set from your device's time zone. Change it here at any time.":
    "Elegido según la zona horaria de su dispositivo. Puede cambiarlo aquí cuando quiera.",
  "Set from your browser's language. Change it here at any time.":
    "Elegido según el idioma de su navegador. Puede cambiarlo aquí cuando quiera.",
  "No country matches “{q}”. We export worldwide — write to us and we will route your enquiry.":
    "Ningún país coincide con «{q}». Exportamos a todo el mundo: escríbanos y dirigiremos su consulta.",

  // the six regions the panel groups the countries into
  "Asia Pacific": "Asia-Pacífico",
  "Europe": "Europa",
  "Americas": "América",
  "Middle East": "Oriente Medio",
  "Africa": "África",
  "Central Asia & Caucasus": "Asia Central y Cáucaso",

  /* All seventy countries in `lib/i18n/locales.ts`, in the order the panel
     lists them. A country whose name is the same in this language is still
     written out, so a name added to the register shows up here as a gap
     rather than silently reading as translated. */
  // Asia Pacific
  "India": "India",
  "China": "China",
  "Japan": "Japón",
  "South Korea": "Corea del Sur",
  "Taiwan": "Taiwán",
  "Vietnam": "Vietnam",
  "Indonesia": "Indonesia",
  "Malaysia": "Malasia",
  "Singapore": "Singapur",
  "Thailand": "Tailandia",
  "Philippines": "Filipinas",
  "Pakistan": "Pakistán",
  "Bangladesh": "Bangladés",
  "Nepal": "Nepal",
  "Sri Lanka": "Sri Lanka",
  "Myanmar": "Myanmar",
  "Cambodia": "Camboya",
  "Australia": "Australia",
  "New Zealand": "Nueva Zelanda",
  // Europe
  "United Kingdom": "Reino Unido",
  "Ireland": "Irlanda",
  "Germany": "Alemania",
  "France": "Francia",
  "Italy": "Italia",
  "Spain": "España",
  "Portugal": "Portugal",
  "Netherlands": "Países Bajos",
  "Belgium": "Bélgica",
  "Switzerland": "Suiza",
  "Austria": "Austria",
  "Sweden": "Suecia",
  "Norway": "Noruega",
  "Denmark": "Dinamarca",
  "Finland": "Finlandia",
  "Poland": "Polonia",
  "Czech Republic": "República Checa",
  "Hungary": "Hungría",
  "Romania": "Rumanía",
  "Greece": "Grecia",
  "Russia": "Rusia",
  "Ukraine": "Ucrania",
  "Turkey": "Turquía",
  // Americas
  "United States": "Estados Unidos",
  "Canada": "Canadá",
  "Mexico": "México",
  "Brazil": "Brasil",
  "Argentina": "Argentina",
  "Chile": "Chile",
  "Colombia": "Colombia",
  "Peru": "Perú",
  // Middle East
  "United Arab Emirates": "Emiratos Árabes Unidos",
  "Saudi Arabia": "Arabia Saudí",
  "Qatar": "Catar",
  "Kuwait": "Kuwait",
  "Oman": "Omán",
  "Bahrain": "Baréin",
  "Israel": "Israel",
  // Africa
  "Egypt": "Egipto",
  "Morocco": "Marruecos",
  "Algeria": "Argelia",
  "Nigeria": "Nigeria",
  "Ghana": "Ghana",
  "Kenya": "Kenia",
  "Tanzania": "Tanzania",
  "Ethiopia": "Etiopía",
  "South Africa": "Sudáfrica",
  // Central Asia & Caucasus
  "Kazakhstan": "Kazajistán",
  "Uzbekistan": "Uzbekistán",
  "Azerbaijan": "Azerbaiyán",
  "Georgia": "Georgia",

  // --- nav dropdown introductions -------------------------------------------
  "Speciality chemistry manufactured and exported from Surat — ten divisions, 112 grades, one integrated plant.":
    "Química de especialidad fabricada y exportada desde Surat: diez divisiones, 112 calidades, una planta integrada.",
  "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.":
    "Quiénes somos: el encargo de fabricar y exportar química que hace la industria más segura, más limpia y más eficiente.",
  "Ten specialised divisions under one roof, structured so scale never costs you technical attention.":
    "Diez divisiones especializadas bajo un mismo techo, organizadas para que el tamaño nunca cueste atención técnica.",
  "The full range — 112 grades built for high performance, consistency and regulatory confidence.":
    "La gama completa: 112 calidades creadas para el alto rendimiento, la constancia y la confianza regulatoria.",
  "The sectors we formulate for, and what each one asks of a speciality chemical supplier.":
    "Los sectores para los que formulamos y lo que cada uno exige a un proveedor de química de especialidad.",
  "What our chemistry actually does in service — the end uses each grade was developed for.":
    "Lo que nuestra química hace realmente en servicio: los usos finales para los que se desarrolló cada calidad.",
  "Manufacturing, laboratory, quality and export capability, described plainly.":
    "Producción, laboratorio, calidad y capacidad de exportación, explicados con claridad.",
  "The laboratories, instruments and synthesis work behind every grade we ship.":
    "Los laboratorios, los equipos y el trabajo de síntesis detrás de cada calidad que enviamos.",
  "Where the next products come from — in the flask, on the plant floor, and with customers.":
    "De dónde salen los próximos productos: en el matraz, en la planta y junto al cliente.",
  "How the plant, the portfolio and the people are being held to a lower footprint.":
    "Cómo la planta, la cartera y las personas se ajustan a una huella menor.",

  // --- on-page jump links ---------------------------------------------------
  "What we make": "Lo que fabricamos",
  "Our products": "Nuestros productos",
  "Find a product": "Buscar un producto",
  "Ten divisions": "Diez divisiones",
  "Industries served": "Sectores atendidos",
  "A force for good": "Una fuerza para el bien",
  "Latest media": "Actualidad",
  "Global presence": "Presencia global",
  "Manufacturing excellence": "Excelencia industrial",
  "Research & development": "Investigación y desarrollo",
  "Quality & compliance": "Calidad y cumplimiento",
  "Our vision": "Nuestra visión",

  // --- topic titles ---------------------------------------------------------
  "Lubrication & Grease": "Lubricación y grasas",
  "Flame Retardancy": "Retardo de llama",
  "Polymers & Engineering": "Polímeros e ingeniería",
  "Electrical & Electronics": "Eléctrica y electrónica",
  "Automotive": "Automoción",
  "Industrial Machinery & Equipment": "Maquinaria y equipos industriales",
  "Coatings & Composites": "Recubrimientos y composites",
  "Pharmaceutical & Agrochemical": "Farmacéutica y agroquímica",
  "Energy Storage & Electronics": "Almacenamiento de energía y electrónica",
  "Nutraceutical, Cosmetic & Food": "Nutracéutica, cosmética y alimentación",
  "Automotive & Transportation": "Automoción y transporte",
  "Polymers & Engineering Plastics": "Polímeros y plásticos técnicos",
  "Construction & Infrastructure": "Construcción e infraestructuras",
  "Research-Driven Specialty Industries": "Sectores de especialidad impulsados por la investigación",
  "Lithium & Metal Additives": "Aditivos de litio y metálicos",
  "Inorganic & Flame-Retardant Chemicals": "Químicos inorgánicos e ignifugantes",
  "Organic & Pharmaceutical Intermediates": "Intermedios orgánicos y farmacéuticos",
  "Polymers, Resins & High-Performance Materials": "Polímeros, resinas y materiales de alto rendimiento",
  "Surfactants, Detergents & Bio-Based Chemicals": "Tensioactivos, detergentes y químicos de base biológica",
  "Electrochemical, Battery & Electronic Chemicals": "Químicos electroquímicos, de batería y electrónicos",
  "Paints, Coatings & Pigments": "Pinturas, recubrimientos y pigmentos",
  "Nutraceutical, Cosmetic & Food Chemicals": "Químicos nutracéuticos, cosméticos y alimentarios",
  "Water Treatment & Industrial Additives": "Tratamiento de aguas y aditivos industriales",
  "Functional & High-Performance Materials": "Materiales funcionales y de alto rendimiento",
  "Flame-Retardant & Inorganic Salts": "Sales ignifugantes e inorgánicas",
  "Advanced Manufacturing": "Fabricación avanzada",
  "Research & Development Excellence": "Excelencia en investigación y desarrollo",
  "Quality Assurance & Compliance": "Aseguramiento de la calidad y cumplimiento",
  "Technical & Application Support": "Soporte técnico y de aplicación",
  "Global Export & Logistics": "Exportación global y logística",
  "Sustainability Integration": "Integración de la sostenibilidad",
  "Product Innovation": "Innovación de producto",
  "Process & Manufacturing Innovation": "Innovación de procesos y fabricación",
  "Application & Industry-Specific Innovation": "Innovación por aplicación y sector",
  "Sustainable & Green Innovation": "Innovación sostenible y verde",
  "Collaboration & Knowledge Innovation": "Innovación colaborativa y del conocimiento",
  "Integrated Innovation Advantage": "Ventaja de innovación integrada",
  "Product Innovation & Development": "Innovación y desarrollo de producto",
  "Advanced Analytical & Testing": "Análisis y ensayos avanzados",
  "Application-Specific Research": "Investigación por aplicación",
  "Sustainable & Green Chemistry": "Química sostenible y verde",
  "Collaboration & Knowledge Sharing": "Colaboración e intercambio de conocimiento",
  "Integrated R&D Excellence": "Excelencia integrada en I+D",
  "Environmental Stewardship": "Responsabilidad ambiental",
  "Sustainable Product Innovation": "Innovación de producto sostenible",
  "Energy & Resource Optimisation": "Optimización de energía y recursos",
  "Health, Safety & Community": "Salud, seguridad y comunidad",
  "Circular Economy & Waste": "Economía circular y residuos",
  "Integrated Sustainability Excellence": "Excelencia integrada en sostenibilidad",

  // --- topic blurbs: applications -------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — para automoción, maquinaria pesada, equipos industriales, polímeros y plásticos",
  "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials":
    "Aluminium · Calcium · Magnesium Hypophosphite — para plásticos, electrónica, sector eléctrico, recubrimientos y materiales de construcción",
  "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics":
    "Jabones de litio · Sales de hipofosfito — para plásticos, materiales técnicos, automoción y electrónica",
  "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics":
    "Aluminium Hypophosphite · Magnesium Hypophosphite — para electrónica de consumo, electrodomésticos y electrónica industrial",
  "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery":
    "Jabones y grasas de litio · Sales de hipofosfito · Aditivos poliméricos — para componentes de automoción, vehículos comerciales y maquinaria pesada",
  "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment":
    "Jabones de litio · Intermedios orgánicos y farmacéuticos — para maquinaria pesada, plantas de producción y equipos industriales",
  "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing":
    "Sales de hipofosfito · Intermedios orgánicos y farmacéuticos — para construcción, recubrimientos industriales y fabricación de composites",
  "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D":
    "1-Phenyl Oxide · Triazolo Pyridione — para I+D farmacéutica, agroquímica e industrial",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics":
    "Lithium Carbonate · Sales de electrolito · TMAH · Disolventes de grado electrónico — para baterías, almacenamiento de energía, semiconductores y electrónica",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — para nutracéuticos, cosmética, alimentos funcionales y productos farmacéuticos",

  // --- topic blurbs: industries ---------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Sales de hipofosfito · Aditivos poliméricos",
  "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Jabones de litio · Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Lithium soaps · Organic & pharmaceutical intermediates":
    "Jabones de litio · Intermedios orgánicos y farmacéuticos",
  "Hypophosphite salts · Organic & pharmaceutical intermediates":
    "Sales de hipofosfito · Intermedios orgánicos y farmacéuticos",
  "1-Phenyl Oxide · Triazolo Pyridione": "1-Phenyl Oxide · Triazolo Pyridione",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents":
    "Lithium Carbonate · Sales de electrolito · TMAH · Disolventes de grado electrónico",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
  "Graphene & nano additives · High-performance polymers · Functional coatings":
    "Aditivos de grafeno y nano · Polímeros de alto rendimiento · Recubrimientos funcionales",

  // --- topic blurbs: business units -----------------------------------------
  "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.":
    "Fabricación y exportación de jabones metálicos a base de litio y aditivos metálicos para sistemas de lubricación industrial.",
  "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.":
    "Producción y exportación de sales ignifugantes inorgánicas libres de halógenos y sales metálicas funcionales.",
  "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.":
    "Fabricación y exportación de intermedios orgánicos de alta pureza para aplicaciones farmacéuticas, agroquímicas y químicas industriales.",
  "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.":
    "Polímeros, resinas, adhesivos, selladores y materiales funcionales avanzados para aplicaciones industriales.",
  "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.":
    "Tensioactivos industriales, emulsionantes, detergentes y soluciones químicas de base biológica.",
  "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.":
    "Productos químicos para baterías de ion-litio, electrónica y aplicaciones de semiconductores de alta pureza.",
  "High-value pigments, coatings intermediates and additive solutions.":
    "Pigmentos de alto valor, intermedios para recubrimientos y soluciones de aditivos.",
  "Vitamins, nutraceuticals, cosmetic actives and functional food additives.":
    "Vitaminas, nutracéuticos, activos cosméticos y aditivos alimentarios funcionales.",
  "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.":
    "Productos químicos para tratamiento industrial de aguas, inhibición de la corrosión, antiincrustantes y aditivos funcionales.",
  "Niche chemicals for aerospace, automotive, electronics and industrial applications.":
    "Productos químicos de nicho para aeroespacial, automoción, electrónica y aplicaciones industriales.",

  // --- topic blurbs: product groups -----------------------------------------
  "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.":
    "Espesantes de alto rendimiento para grasas de automoción e industriales, con excelente estabilidad térmica, resistencia al agua y durabilidad mecánica.",
  "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.":
    "Aditivos libres de halógenos que mejoran la resistencia al fuego en plásticos, cables y recubrimientos, reduciendo el humo y la toxicidad.",
  "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.":
    "Compuestos de alta pureza para farmacia, agroquímica e industria: escalables desde la investigación de laboratorio hasta la producción industrial sin comprometer la calidad.",
  "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.":
    "Polímeros y resinas avanzados para adhesivos, recubrimientos y materiales funcionales, incluidas calidades resistentes al calor para uso aeroespacial y de automoción.",
  "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.":
    "Tensioactivos industriales y ecológicos, emulsionantes y humectantes, además de intermedios y disolventes de origen vegetal respetuosos con el medio ambiente.",
  "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.":
    "Sales para baterías de ion-litio, disolventes de alta pureza y productos para semiconductores, con pureza ultraelevada y rendimiento específico por aplicación.",
  "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.":
    "Pigmentos orgánicos e inorgánicos, aditivos para recubrimientos y estabilizadores UV que ofrecen color, dispersión y rendimiento constantes.",
  "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.":
    "Intermedios de alta pureza para I+D y aplicaciones comerciales, con formulaciones a medida y soporte específico por aplicación.",
  "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.":
    "Formulaciones a medida para la eficiencia operativa y el cumplimiento ambiental en torres de refrigeración, centrales eléctricas e industrias de proceso.",
  "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.":
    "Soluciones impulsadas por la I+D para los retos de materiales de nueva generación en aeroespacial, automoción, electrónica e industria avanzada.",

  // --- topic and grade page chrome ------------------------------------------
  "The range": "La gama",
  "Grades in this group": "Calidades de este grupo",
  "All applications": "Todas las aplicaciones",
  "All industries": "Todos los sectores",
  "All business units": "Todas las unidades de negocio",
  "All products": "Todos los productos",
  "All capabilities": "Todas las capacidades",
  "All innovation": "Toda la innovación",
  "All r&d": "Toda la I+D",
  "All sustainability": "Toda la sostenibilidad",
  "Talk to our technical team": "Hable con nuestro equipo técnico",
  "Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.":
    "Datos técnicos, opciones de envasado y documentación de exportación: díganos qué necesita y el equipo adecuado le responderá.",
  "Start a conversation": "Iniciar una conversación",
  "Division": "División",
  "Product group": "Grupo de producto",
  "Filtered under": "Clasificado en",
  "Also in this group": "También en este grupo",
  "Request technical data": "Solicitar datos técnicos",
  "Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.":
    "Documentación técnica y de seguridad, opciones de envasado y trámites de exportación: indíquenos la especificación que debe cumplir.",
  "Request TDS / SDS": "Solicitar TDS / SDS",
  "Back to the finder": "Volver al buscador",

  // --- product finder -------------------------------------------------------
  "Filter by": "Filtrar por",
  "Clear filters": "Borrar filtros",
  "Search…": "Buscar…",
  "Search products": "Buscar productos",
  "Clear search": "Borrar la búsqueda",
  "Displaying {range} of {total} Results": "Mostrando {range} de {total} resultados",
  "Displaying {total} Results": "Mostrando {total} resultados",
  "No products match those filters. Clear a filter, or {ask}.":
    "Ningún producto coincide con esos filtros. Quite un filtro, o {ask}.",
  "ask us about a custom grade": "consúltenos sobre una calidad a medida",
  "Show more results": "Mostrar más resultados",
  "All divisions": "Todas las divisiones",
  "Automotive & transportation": "Automoción y transporte",
  "Polymers & engineering plastics": "Polímeros y plásticos técnicos",
  "Electrical & electronics": "Eléctrica y electrónica",
  "Industrial machinery": "Maquinaria industrial",
  "Coatings & composites": "Recubrimientos y composites",
  "Pharmaceutical & agrochemical": "Farmacéutica y agroquímica",
  "Construction & infrastructure": "Construcción e infraestructuras",
  "Energy storage": "Almacenamiento de energía",
  "Nutraceutical, cosmetic & food": "Nutracéutica, cosmética y alimentación",
  "Water treatment": "Tratamiento de aguas",
  "Lithium & metal additives": "Aditivos de litio y metálicos",
  "Flame retardants": "Ignifugantes",
  "Intermediates": "Intermedios",
  "Polymers & resins": "Polímeros y resinas",
  "Surfactants": "Tensioactivos",
  "Battery & electronic": "Batería y electrónica",
  "Pigments": "Pigmentos",
  "Nutraceutical & cosmetic": "Nutracéutica y cosmética",
  "Functional materials": "Materiales funcionales",

  // --- banner headlines ------------------------------------------------------
  // The whole two-tone headline as one key; see components/HeroTitle.tsx for why
  // the light/bold split is not translated as two fragments.
  "About Cosmox Chemicals": "Acerca de Cosmox Chemicals",
  "Contact Us": "Contáctenos",
  "Search for a Product": "Buscar un producto",
  "Industries We Serve": "Sectores a los que servimos",

  // --- footer ---------------------------------------------------------------
  "Advanced chemical manufacturing and export — enabling industrial efficiency, safety and sustainability worldwide.":
    "Fabricación química avanzada y exportación: al servicio de la eficiencia, la seguridad y la sostenibilidad industriales en todo el mundo.",
  "Company": "Empresa",
  "Offering": "Oferta",
  "Get in touch": "Contacte con nosotros",
  "Product finder": "Buscador de productos",
  "All rights reserved.": "Todos los derechos reservados.",
  "Manufacturer & exporter of speciality chemicals":
    "Fabricante y exportador de productos químicos de especialidad",
};

export default es;
