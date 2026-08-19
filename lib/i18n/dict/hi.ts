/* हिन्दी — India. See ./types.ts: chemical names, grade names and division
   numbers stay in Latin script — that is what appears on the drum, the TDS and
   the customs paperwork, and transliterating them would make a grade
   unsearchable. */

import type { Dict } from "./types";

const hi: Dict = {
  // --- navigation and header ------------------------------------------------
  "Home": "होम",
  "About us": "हमारे बारे में",
  "Divisions": "प्रभाग",
  "Products": "उत्पाद",
  "Industries": "उद्योग",
  "Applications": "अनुप्रयोग",
  "Capabilities": "क्षमताएँ",
  "R&D": "अनुसंधान एवं विकास",
  "Innovation": "नवाचार",
  "Sustainability": "स्थिरता",
  "Contact": "संपर्क",
  "Product Finder": "उत्पाद खोज",
  "Skip to content": "सामग्री पर जाएँ",
  "Visit page": "पेज देखें",
  "Sections": "अनुभाग",
  "On the home page": "होम पेज पर",
  "Explore": "देखें",
  "Previous": "पिछला",
  "Next": "अगला",
  "Business units": "व्यावसायिक इकाइयाँ",
  "Business Units": "व्यावसायिक इकाइयाँ",
  "Research & Development": "अनुसंधान एवं विकास",

  // --- country and language menu -------------------------------------------
  "Region & language": "क्षेत्र एवं भाषा",
  "Change country and language": "देश और भाषा बदलें",
  "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.":
    "चुनें कि आप कहाँ से खरीद रहे हैं। हम सूरत में निर्माण करते हैं और दुनिया भर में निर्यात करते हैं — देश के साथ साइट की भाषा भी बदल जाती है।",
  "Navigation and product titles are translated. Detailed page copy remains in English.":
    "नेविगेशन और उत्पाद नाम अनूदित हैं। पृष्ठों की विस्तृत सामग्री अंग्रेज़ी में ही रहती है।",
  "Asia Pacific": "एशिया प्रशांत",
  "Europe": "यूरोप",
  "India": "भारत",
  "China": "चीन",
  "Japan": "जापान",
  "South Korea": "दक्षिण कोरिया",
  "Vietnam": "वियतनाम",
  "Indonesia": "इंडोनेशिया",
  "Germany": "जर्मनी",
  "France": "फ़्रांस",
  "Spain": "स्पेन",
  "Italy": "इटली",
  "Netherlands": "नीदरलैंड",

  // --- nav dropdown introductions -------------------------------------------
  "Speciality chemistry manufactured and exported from Surat — ten divisions, forty grades, one integrated plant.":
    "सूरत से निर्मित और निर्यातित विशेष रसायन — दस प्रभाग, चालीस ग्रेड, एक एकीकृत संयंत्र।",
  "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.":
    "हम कौन हैं: ऐसे रसायन बनाने और निर्यात करने का दायित्व जो उद्योग को अधिक सुरक्षित, स्वच्छ और कुशल बनाएँ।",
  "Ten specialised divisions under one roof, structured so scale never costs you technical attention.":
    "एक ही छत के नीचे दस विशेषीकृत प्रभाग, इस तरह गठित कि आकार कभी तकनीकी ध्यान की क़ीमत पर न आए।",
  "The full range — forty grades built for high performance, consistency and regulatory confidence.":
    "पूरी श्रृंखला — उच्च प्रदर्शन, एकरूपता और नियामक भरोसे के लिए बनाए गए चालीस ग्रेड।",
  "The sectors we formulate for, and what each one asks of a speciality chemical supplier.":
    "वे क्षेत्र जिनके लिए हम फ़ॉर्मूलेशन करते हैं, और हर क्षेत्र विशेष रसायन आपूर्तिकर्ता से क्या अपेक्षा रखता है।",
  "What our chemistry actually does in service — the end uses each grade was developed for.":
    "हमारा रसायन व्यवहार में वास्तव में क्या करता है — वे अंतिम उपयोग जिनके लिए हर ग्रेड विकसित हुआ।",
  "Manufacturing, laboratory, quality and export capability, described plainly.":
    "निर्माण, प्रयोगशाला, गुणवत्ता और निर्यात क्षमता, सरल शब्दों में।",
  "The laboratories, instruments and synthesis work behind every grade we ship.":
    "हर ग्रेड के पीछे की प्रयोगशालाएँ, उपकरण और संश्लेषण कार्य जो हम भेजते हैं।",
  "Where the next products come from — in the flask, on the plant floor, and with customers.":
    "अगले उत्पाद कहाँ से आते हैं — फ़्लास्क में, संयंत्र में, और ग्राहकों के साथ।",
  "How the plant, the portfolio and the people are being held to a lower footprint.":
    "संयंत्र, उत्पाद-श्रेणी और लोग किस तरह कम पर्यावरणीय प्रभाव के लिए जवाबदेह बनाए जा रहे हैं।",

  // --- on-page jump links ---------------------------------------------------
  "What we make": "हम क्या बनाते हैं",
  "Our products": "हमारे उत्पाद",
  "Find a product": "उत्पाद खोजें",
  "Ten divisions": "दस प्रभाग",
  "Industries served": "सेवित उद्योग",
  "A force for good": "भलाई की एक शक्ति",
  "Latest media": "नवीनतम समाचार",
  "Global presence": "वैश्विक उपस्थिति",
  "Manufacturing excellence": "निर्माण उत्कृष्टता",
  "Research & development": "अनुसंधान एवं विकास",
  "Quality & compliance": "गुणवत्ता एवं अनुपालन",
  "Our vision": "हमारा दृष्टिकोण",

  // --- topic titles ---------------------------------------------------------
  "Lubrication & Grease": "स्नेहन एवं ग्रीस",
  "Flame Retardancy": "अग्निरोधन",
  "Polymers & Engineering": "पॉलिमर एवं इंजीनियरिंग",
  "Electrical & Electronics": "विद्युत एवं इलेक्ट्रॉनिक्स",
  "Automotive": "ऑटोमोटिव",
  "Industrial Machinery & Equipment": "औद्योगिक मशीनरी एवं उपकरण",
  "Coatings & Composites": "कोटिंग्स एवं कंपोज़िट",
  "Pharmaceutical & Agrochemical": "फ़ार्मास्युटिकल एवं कृषि-रसायन",
  "Energy Storage & Electronics": "ऊर्जा भंडारण एवं इलेक्ट्रॉनिक्स",
  "Nutraceutical, Cosmetic & Food": "न्यूट्रास्युटिकल, कॉस्मेटिक एवं खाद्य",
  "Automotive & Transportation": "ऑटोमोटिव एवं परिवहन",
  "Polymers & Engineering Plastics": "पॉलिमर एवं इंजीनियरिंग प्लास्टिक",
  "Construction & Infrastructure": "निर्माण एवं अवसंरचना",
  "Research-Driven Specialty Industries": "अनुसंधान-आधारित विशेष उद्योग",
  "Lithium & Metal Additives": "लिथियम एवं धातु एडिटिव",
  "Inorganic & Flame-Retardant Chemicals": "अकार्बनिक एवं अग्निरोधी रसायन",
  "Organic & Pharmaceutical Intermediates": "कार्बनिक एवं फ़ार्मास्युटिकल इंटरमीडिएट",
  "Polymers, Resins & High-Performance Materials": "पॉलिमर, रेज़िन एवं उच्च-प्रदर्शन सामग्री",
  "Surfactants, Detergents & Bio-Based Chemicals": "सर्फ़ैक्टेंट, डिटर्जेंट एवं जैव-आधारित रसायन",
  "Electrochemical, Battery & Electronic Chemicals": "विद्युत-रासायनिक, बैटरी एवं इलेक्ट्रॉनिक रसायन",
  "Paints, Coatings & Pigments": "पेंट, कोटिंग्स एवं पिगमेंट",
  "Nutraceutical, Cosmetic & Food Chemicals": "न्यूट्रास्युटिकल, कॉस्मेटिक एवं खाद्य रसायन",
  "Water Treatment & Industrial Additives": "जल उपचार एवं औद्योगिक एडिटिव",
  "Functional & High-Performance Materials": "कार्यात्मक एवं उच्च-प्रदर्शन सामग्री",
  "Flame-Retardant & Inorganic Salts": "अग्निरोधी एवं अकार्बनिक लवण",
  "Advanced Manufacturing": "उन्नत निर्माण",
  "Research & Development Excellence": "अनुसंधान एवं विकास उत्कृष्टता",
  "Quality Assurance & Compliance": "गुणवत्ता आश्वासन एवं अनुपालन",
  "Technical & Application Support": "तकनीकी एवं अनुप्रयोग सहायता",
  "Global Export & Logistics": "वैश्विक निर्यात एवं लॉजिस्टिक्स",
  "Sustainability Integration": "स्थिरता का एकीकरण",
  "Product Innovation": "उत्पाद नवाचार",
  "Process & Manufacturing Innovation": "प्रक्रिया एवं निर्माण नवाचार",
  "Application & Industry-Specific Innovation": "अनुप्रयोग एवं उद्योग-विशिष्ट नवाचार",
  "Sustainable & Green Innovation": "संधारणीय एवं हरित नवाचार",
  "Collaboration & Knowledge Innovation": "सहयोग एवं ज्ञान नवाचार",
  "Integrated Innovation Advantage": "एकीकृत नवाचार लाभ",
  "Product Innovation & Development": "उत्पाद नवाचार एवं विकास",
  "Advanced Analytical & Testing": "उन्नत विश्लेषण एवं परीक्षण",
  "Application-Specific Research": "अनुप्रयोग-विशिष्ट अनुसंधान",
  "Sustainable & Green Chemistry": "संधारणीय एवं हरित रसायन",
  "Collaboration & Knowledge Sharing": "सहयोग एवं ज्ञान साझाकरण",
  "Integrated R&D Excellence": "एकीकृत अनुसंधान एवं विकास उत्कृष्टता",
  "Environmental Stewardship": "पर्यावरणीय उत्तरदायित्व",
  "Sustainable Product Innovation": "संधारणीय उत्पाद नवाचार",
  "Energy & Resource Optimisation": "ऊर्जा एवं संसाधन अनुकूलन",
  "Health, Safety & Community": "स्वास्थ्य, सुरक्षा एवं समुदाय",
  "Circular Economy & Waste": "चक्रीय अर्थव्यवस्था एवं अपशिष्ट",
  "Integrated Sustainability Excellence": "एकीकृत स्थिरता उत्कृष्टता",

  // --- topic blurbs: applications -------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — ऑटोमोटिव, भारी मशीनरी, औद्योगिक उपकरण, पॉलिमर एवं प्लास्टिक के लिए",
  "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials":
    "Aluminium · Calcium · Magnesium Hypophosphite — प्लास्टिक, इलेक्ट्रॉनिक्स, विद्युत, कोटिंग्स और निर्माण सामग्री के लिए",
  "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics":
    "लिथियम साबुन · हाइपोफ़ॉस्फ़ाइट लवण — प्लास्टिक, इंजीनियरिंग सामग्री, ऑटोमोटिव और इलेक्ट्रॉनिक्स के लिए",
  "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics":
    "Aluminium Hypophosphite · Magnesium Hypophosphite — उपभोक्ता इलेक्ट्रॉनिक्स, विद्युत उपकरण और औद्योगिक इलेक्ट्रॉनिक्स के लिए",
  "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery":
    "लिथियम साबुन एवं ग्रीस · हाइपोफ़ॉस्फ़ाइट लवण · पॉलिमर एडिटिव — ऑटोमोटिव पुर्ज़ों, वाणिज्यिक वाहनों और भारी मशीनरी के लिए",
  "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment":
    "लिथियम साबुन · कार्बनिक एवं फ़ार्मास्युटिकल इंटरमीडिएट — भारी मशीनरी, विनिर्माण संयंत्रों और औद्योगिक उपकरणों के लिए",
  "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing":
    "हाइपोफ़ॉस्फ़ाइट लवण · कार्बनिक एवं फ़ार्मास्युटिकल इंटरमीडिएट — निर्माण, औद्योगिक कोटिंग्स और कंपोज़िट विनिर्माण के लिए",
  "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D":
    "1-Phenyl Oxide · Triazolo Pyridione — फ़ार्मास्युटिकल, कृषि-रासायनिक और औद्योगिक अनुसंधान एवं विकास के लिए",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics":
    "Lithium Carbonate · इलेक्ट्रोलाइट लवण · TMAH · इलेक्ट्रॉनिक-ग्रेड विलायक — बैटरी, ऊर्जा भंडारण, सेमीकंडक्टर और इलेक्ट्रॉनिक्स के लिए",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — न्यूट्रास्युटिकल, कॉस्मेटिक, कार्यात्मक खाद्य और फ़ार्मास्युटिकल के लिए",

  // --- topic blurbs: industries ---------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · हाइपोफ़ॉस्फ़ाइट लवण · पॉलिमर एडिटिव",
  "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite":
    "लिथियम साबुन · Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Lithium soaps · Organic & pharmaceutical intermediates":
    "लिथियम साबुन · कार्बनिक एवं फ़ार्मास्युटिकल इंटरमीडिएट",
  "Hypophosphite salts · Organic & pharmaceutical intermediates":
    "हाइपोफ़ॉस्फ़ाइट लवण · कार्बनिक एवं फ़ार्मास्युटिकल इंटरमीडिएट",
  "1-Phenyl Oxide · Triazolo Pyridione": "1-Phenyl Oxide · Triazolo Pyridione",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents":
    "Lithium Carbonate · इलेक्ट्रोलाइट लवण · TMAH · इलेक्ट्रॉनिक-ग्रेड विलायक",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
  "Graphene & nano additives · High-performance polymers · Functional coatings":
    "ग्राफ़ीन एवं नैनो एडिटिव · उच्च-प्रदर्शन पॉलिमर · कार्यात्मक कोटिंग्स",

  // --- topic blurbs: business units -----------------------------------------
  "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.":
    "औद्योगिक स्नेहन प्रणालियों के लिए लिथियम-आधारित धातु साबुन और धातु एडिटिव का निर्माण एवं निर्यात।",
  "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.":
    "हैलोजन-मुक्त अकार्बनिक अग्निरोधी लवण और कार्यात्मक धातु लवणों का उत्पादन एवं निर्यात।",
  "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.":
    "फ़ार्मास्युटिकल, कृषि-रासायनिक और औद्योगिक रासायनिक अनुप्रयोगों के लिए उच्च-शुद्धता कार्बनिक इंटरमीडिएट का निर्माण एवं निर्यात।",
  "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.":
    "औद्योगिक अनुप्रयोगों के लिए उन्नत पॉलिमर, रेज़िन, चिपकने वाले पदार्थ, सीलेंट और कार्यात्मक सामग्री।",
  "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.":
    "औद्योगिक सर्फ़ैक्टेंट, इमल्सीफ़ायर, डिटर्जेंट और जैव-आधारित रासायनिक समाधान।",
  "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.":
    "लिथियम-आयन बैटरी, इलेक्ट्रॉनिक्स और उच्च-शुद्धता सेमीकंडक्टर अनुप्रयोगों के लिए रसायन।",
  "High-value pigments, coatings intermediates and additive solutions.":
    "उच्च-मूल्य पिगमेंट, कोटिंग इंटरमीडिएट और एडिटिव समाधान।",
  "Vitamins, nutraceuticals, cosmetic actives and functional food additives.":
    "विटामिन, न्यूट्रास्युटिकल, कॉस्मेटिक सक्रिय तत्व और कार्यात्मक खाद्य एडिटिव।",
  "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.":
    "औद्योगिक जल उपचार, संक्षारण निरोध, स्केलिंग-रोधी और कार्यात्मक एडिटिव के लिए रसायन।",
  "Niche chemicals for aerospace, automotive, electronics and industrial applications.":
    "एयरोस्पेस, ऑटोमोटिव, इलेक्ट्रॉनिक्स और औद्योगिक अनुप्रयोगों के लिए विशिष्ट रसायन।",

  // --- topic blurbs: product groups -----------------------------------------
  "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.":
    "ऑटोमोटिव और औद्योगिक ग्रीस के लिए उच्च-प्रदर्शन थिकनर, उत्कृष्ट तापीय स्थिरता, जल प्रतिरोध और यांत्रिक टिकाऊपन के साथ।",
  "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.":
    "हैलोजन-मुक्त एडिटिव जो प्लास्टिक, केबल और कोटिंग्स में अग्नि प्रतिरोध बढ़ाते हैं और साथ ही धुआँ तथा विषाक्तता घटाते हैं।",
  "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.":
    "फ़ार्मास्युटिकल, कृषि-रसायन और औद्योगिक अनुप्रयोगों के लिए उच्च-शुद्धता यौगिक — गुणवत्ता से समझौता किए बिना प्रयोगशाला अनुसंधान से औद्योगिक उत्पादन तक स्केलेबल।",
  "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.":
    "चिपकने वाले पदार्थों, कोटिंग्स और कार्यात्मक सामग्री के लिए उन्नत पॉलिमर और रेज़िन, जिनमें एयरोस्पेस तथा ऑटोमोटिव उपयोग हेतु ताप-प्रतिरोधी ग्रेड शामिल हैं।",
  "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.":
    "औद्योगिक और हरित सर्फ़ैक्टेंट, इमल्सीफ़ायर तथा वेटिंग एजेंट, साथ ही पर्यावरण-अनुकूल पादप-आधारित इंटरमीडिएट और विलायक।",
  "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.":
    "लिथियम-आयन बैटरी लवण, उच्च-शुद्धता विलायक और सेमीकंडक्टर रसायन, अति-उच्च शुद्धता तथा अनुप्रयोग-विशिष्ट प्रदर्शन के साथ।",
  "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.":
    "कार्बनिक और अकार्बनिक पिगमेंट, कोटिंग एडिटिव तथा UV स्टेबलाइज़र जो एकरूप रंग, परिक्षेपण और प्रदर्शन देते हैं।",
  "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.":
    "अनुसंधान एवं विकास तथा वाणिज्यिक अनुप्रयोगों के लिए उच्च-शुद्धता इंटरमीडिएट, कस्टम फ़ॉर्मूलेशन और अनुप्रयोग-विशिष्ट सहायता के साथ।",
  "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.":
    "कूलिंग टावर, बिजली संयंत्रों और प्रक्रिया उद्योगों में परिचालन दक्षता तथा पर्यावरणीय अनुपालन के लिए अनुकूलित फ़ॉर्मूलेशन।",
  "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.":
    "एयरोस्पेस, ऑटोमोटिव, इलेक्ट्रॉनिक्स और उन्नत उद्योग में अगली पीढ़ी की सामग्री चुनौतियों के लिए अनुसंधान-आधारित समाधान।",

  // --- topic and grade page chrome ------------------------------------------
  "The range": "श्रृंखला",
  "Grades in this group": "इस समूह के ग्रेड",
  "All applications": "सभी अनुप्रयोग",
  "All industries": "सभी उद्योग",
  "All business units": "सभी व्यावसायिक इकाइयाँ",
  "All products": "सभी उत्पाद",
  "All capabilities": "सभी क्षमताएँ",
  "All innovation": "सभी नवाचार",
  "All r&d": "सभी अनुसंधान एवं विकास",
  "All sustainability": "सभी स्थिरता विषय",
  "Talk to our technical team": "हमारी तकनीकी टीम से बात करें",
  "Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.":
    "तकनीकी डेटा, पैकेजिंग विकल्प और निर्यात दस्तावेज़ — बताइए आपको क्या चाहिए, और सही टीम आपसे संपर्क करेगी।",
  "Start a conversation": "बातचीत शुरू करें",
  "Division": "प्रभाग",
  "Product group": "उत्पाद समूह",
  "Filtered under": "इस श्रेणी में",
  "Also in this group": "इसी समूह में अन्य",
  "Request technical data": "तकनीकी डेटा माँगें",
  "Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.":
    "तकनीकी एवं सुरक्षा दस्तावेज़, पैकेजिंग विकल्प और निर्यात काग़ज़ात — हमें वह विशिष्टि बताइए जो आपको पूरी करनी है।",
  "Request TDS / SDS": "TDS / SDS माँगें",
  "Back to the finder": "उत्पाद खोज पर वापस",

  // --- product finder -------------------------------------------------------
  "Filter by": "इससे छाँटें",
  "Clear filters": "फ़िल्टर हटाएँ",
  "Search…": "खोजें…",
  "Search products": "उत्पाद खोजें",
  "Clear search": "खोज मिटाएँ",
  "Displaying {range} of {total} Results": "{total} परिणामों में से {range} दिखाए जा रहे हैं",
  "Displaying {total} Results": "{total} परिणाम दिखाए जा रहे हैं",
  "No products match those filters. Clear a filter, or {ask}.":
    "इन फ़िल्टरों से कोई उत्पाद मेल नहीं खाता। कोई फ़िल्टर हटाएँ, या {ask}।",
  "ask us about a custom grade": "कस्टम ग्रेड के बारे में हमसे पूछें",
  "Show more results": "और परिणाम दिखाएँ",
  "All divisions": "सभी प्रभाग",
  "Automotive & transportation": "ऑटोमोटिव एवं परिवहन",
  "Polymers & engineering plastics": "पॉलिमर एवं इंजीनियरिंग प्लास्टिक",
  "Electrical & electronics": "विद्युत एवं इलेक्ट्रॉनिक्स",
  "Industrial machinery": "औद्योगिक मशीनरी",
  "Coatings & composites": "कोटिंग्स एवं कंपोज़िट",
  "Pharmaceutical & agrochemical": "फ़ार्मास्युटिकल एवं कृषि-रसायन",
  "Construction & infrastructure": "निर्माण एवं अवसंरचना",
  "Energy storage": "ऊर्जा भंडारण",
  "Nutraceutical, cosmetic & food": "न्यूट्रास्युटिकल, कॉस्मेटिक एवं खाद्य",
  "Water treatment": "जल उपचार",
  "Lithium & metal additives": "लिथियम एवं धातु एडिटिव",
  "Flame retardants": "अग्निरोधी",
  "Intermediates": "इंटरमीडिएट",
  "Polymers & resins": "पॉलिमर एवं रेज़िन",
  "Surfactants": "सर्फ़ैक्टेंट",
  "Battery & electronic": "बैटरी एवं इलेक्ट्रॉनिक",
  "Pigments": "पिगमेंट",
  "Nutraceutical & cosmetic": "न्यूट्रास्युटिकल एवं कॉस्मेटिक",
  "Functional materials": "कार्यात्मक सामग्री",

  // --- banner headlines ------------------------------------------------------
  // The whole two-tone headline as one key; see components/HeroTitle.tsx for why
  // the light/bold split is not translated as two fragments.
  "About Cosmox Chemicals": "Cosmox Chemicals के बारे में",
  "Contact Us": "हमसे संपर्क करें",
  "Search for a Product": "उत्पाद खोजें",
  "Industries We Serve": "जिन उद्योगों की हम सेवा करते हैं",

  // --- footer ---------------------------------------------------------------
  "Advanced chemical manufacturing and export — enabling industrial efficiency, safety and sustainability worldwide.":
    "उन्नत रासायनिक निर्माण एवं निर्यात — दुनिया भर में औद्योगिक दक्षता, सुरक्षा और स्थिरता को सक्षम बनाते हुए।",
  "Company": "कंपनी",
  "Offering": "हमारी पेशकश",
  "Get in touch": "संपर्क करें",
  "Product finder": "उत्पाद खोज",
  "All rights reserved.": "सर्वाधिकार सुरक्षित।",
  "Manufacturer & exporter of speciality chemicals":
    "विशेष रसायनों के निर्माता एवं निर्यातक",
};

export default hi;
