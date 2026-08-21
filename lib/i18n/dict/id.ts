/* Bahasa Indonesia — Indonesia. See ./types.ts: chemical names, grade names and
   division numbers stay in the original. */

import type { Dict } from "./types";

const id: Dict = {
  // --- navigation and header ------------------------------------------------
  "Home": "Beranda",
  "About us": "Tentang kami",
  "Divisions": "Divisi",
  "Products": "Produk",
  "Industries": "Industri",
  "Applications": "Aplikasi",
  "Capabilities": "Kapabilitas",
  "R&D": "Litbang",
  "Innovation": "Inovasi",
  "Sustainability": "Keberlanjutan",
  "Contact": "Kontak",
  "Product Finder": "Pencari produk",
  "Skip to content": "Lompat ke konten",
  "{n} grades": "{n} grade",
  "Search the whole range": "Cari seluruh rangkaian",
  "Visit page": "Buka halaman",
  "Sections": "Bagian",
  "On the home page": "Di halaman beranda",
  "Explore": "Selengkapnya",
  "Previous": "Sebelumnya",
  "Next": "Berikutnya",
  "Previous picture": "Gambar sebelumnya",
  "Next picture": "Gambar berikutnya",
  "Business units": "Unit bisnis",
  "Business Units": "Unit bisnis",
  "Research & Development": "Penelitian & pengembangan",

  // --- country and language menu -------------------------------------------
  "Region & language": "Wilayah & bahasa",
  "Change country and language": "Ubah negara dan bahasa",
  "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.":
    "Pilih negara tempat Anda membeli. Kami memproduksi di Surat dan mengekspor ke seluruh dunia — bahasa situs mengikuti negara yang dipilih.",
  "Navigation and product titles are translated. Detailed page copy remains in English.":
    "Navigasi dan nama produk telah diterjemahkan. Teks rinci pada halaman tetap dalam bahasa Inggris.",
  "Detected": "Otomatis",
  "Search countries": "Cari negara",
  "Search {n} countries": "Cari {n} negara",
  "Set from your device's time zone. Change it here at any time.":
    "Dipilih dari zona waktu perangkat Anda. Ubah di sini kapan saja.",
  "Set from your browser's language. Change it here at any time.":
    "Dipilih dari bahasa peramban Anda. Ubah di sini kapan saja.",
  "No country matches “{q}”. We export worldwide — write to us and we will route your enquiry.":
    "Tidak ada negara yang cocok dengan “{q}”. Kami mengekspor ke seluruh dunia — hubungi kami dan permintaan Anda akan kami teruskan.",

  // the six regions the panel groups the countries into
  "Asia Pacific": "Asia Pasifik",
  "Europe": "Eropa",
  "Americas": "Amerika",
  "Middle East": "Timur Tengah",
  "Africa": "Afrika",
  "Central Asia & Caucasus": "Asia Tengah & Kaukasus",

  /* All seventy countries in `lib/i18n/locales.ts`, in the order the panel
     lists them. A country whose name is the same in this language is still
     written out, so a name added to the register shows up here as a gap
     rather than silently reading as translated. */
  // Asia Pacific
  "India": "India",
  "China": "Tiongkok",
  "Japan": "Jepang",
  "South Korea": "Korea Selatan",
  "Taiwan": "Taiwan",
  "Vietnam": "Vietnam",
  "Indonesia": "Indonesia",
  "Malaysia": "Malaysia",
  "Singapore": "Singapura",
  "Thailand": "Thailand",
  "Philippines": "Filipina",
  "Pakistan": "Pakistan",
  "Bangladesh": "Bangladesh",
  "Nepal": "Nepal",
  "Sri Lanka": "Sri Lanka",
  "Myanmar": "Myanmar",
  "Cambodia": "Kamboja",
  "Australia": "Australia",
  "New Zealand": "Selandia Baru",
  // Europe
  "United Kingdom": "Britania Raya",
  "Ireland": "Irlandia",
  "Germany": "Jerman",
  "France": "Prancis",
  "Italy": "Italia",
  "Spain": "Spanyol",
  "Portugal": "Portugal",
  "Netherlands": "Belanda",
  "Belgium": "Belgia",
  "Switzerland": "Swiss",
  "Austria": "Austria",
  "Sweden": "Swedia",
  "Norway": "Norwegia",
  "Denmark": "Denmark",
  "Finland": "Finlandia",
  "Poland": "Polandia",
  "Czech Republic": "Republik Ceko",
  "Hungary": "Hungaria",
  "Romania": "Rumania",
  "Greece": "Yunani",
  "Russia": "Rusia",
  "Ukraine": "Ukraina",
  "Turkey": "Turki",
  // Americas
  "United States": "Amerika Serikat",
  "Canada": "Kanada",
  "Mexico": "Meksiko",
  "Brazil": "Brasil",
  "Argentina": "Argentina",
  "Chile": "Cile",
  "Colombia": "Kolombia",
  "Peru": "Peru",
  // Middle East
  "United Arab Emirates": "Uni Emirat Arab",
  "Saudi Arabia": "Arab Saudi",
  "Qatar": "Qatar",
  "Kuwait": "Kuwait",
  "Oman": "Oman",
  "Bahrain": "Bahrain",
  "Israel": "Israel",
  // Africa
  "Egypt": "Mesir",
  "Morocco": "Maroko",
  "Algeria": "Aljazair",
  "Nigeria": "Nigeria",
  "Ghana": "Ghana",
  "Kenya": "Kenya",
  "Tanzania": "Tanzania",
  "Ethiopia": "Etiopia",
  "South Africa": "Afrika Selatan",
  // Central Asia & Caucasus
  "Kazakhstan": "Kazakhstan",
  "Uzbekistan": "Uzbekistan",
  "Azerbaijan": "Azerbaijan",
  "Georgia": "Georgia",

  // --- nav dropdown introductions -------------------------------------------
  "Speciality chemistry manufactured and exported from Surat — ten divisions, 112 grades, one integrated plant.":
    "Kimia khusus yang diproduksi dan diekspor dari Surat — sepuluh divisi, 112 grade, satu pabrik terpadu.",
  "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.":
    "Siapa kami: mandat untuk memproduksi dan mengekspor bahan kimia yang membuat industri lebih aman, lebih bersih, dan lebih efisien.",
  "Ten specialised divisions under one roof, structured so scale never costs you technical attention.":
    "Sepuluh divisi khusus di bawah satu atap, ditata agar skala tidak pernah mengurangi perhatian teknis.",
  "The full range — 112 grades built for high performance, consistency and regulatory confidence.":
    "Rangkaian lengkap — 112 grade untuk kinerja tinggi, konsistensi, dan kepastian regulasi.",
  "The sectors we formulate for, and what each one asks of a speciality chemical supplier.":
    "Sektor yang kami formulasikan, dan apa yang dituntut masing-masing dari pemasok kimia khusus.",
  "What our chemistry actually does in service — the end uses each grade was developed for.":
    "Apa yang benar-benar dilakukan bahan kimia kami dalam penggunaan — aplikasi akhir yang menjadi tujuan pengembangan tiap grade.",
  "Manufacturing, laboratory, quality and export capability, described plainly.":
    "Kapabilitas produksi, laboratorium, mutu, dan ekspor, dijelaskan secara lugas.",
  "The laboratories, instruments and synthesis work behind every grade we ship.":
    "Laboratorium, instrumen, dan kerja sintesis di balik setiap grade yang kami kirim.",
  "Where the next products come from — in the flask, on the plant floor, and with customers.":
    "Dari mana produk berikutnya berasal — di labu reaksi, di lantai pabrik, dan bersama pelanggan.",
  "How the plant, the portfolio and the people are being held to a lower footprint.":
    "Bagaimana pabrik, portofolio, dan sumber daya manusia diarahkan pada jejak lingkungan yang lebih rendah.",

  // --- on-page jump links ---------------------------------------------------
  "What we make": "Apa yang kami produksi",
  "Our products": "Produk kami",
  "Find a product": "Cari produk",
  "Ten divisions": "Sepuluh divisi",
  "Industries served": "Industri yang dilayani",
  "A force for good": "Kekuatan untuk kebaikan",
  "Latest media": "Kabar terbaru",
  "Global presence": "Kehadiran global",
  "Manufacturing excellence": "Keunggulan produksi",
  "Research & development": "Penelitian & pengembangan",
  "Quality & compliance": "Mutu & kepatuhan",
  "Our vision": "Visi kami",

  // --- topic titles ---------------------------------------------------------
  "Lubrication & Grease": "Pelumasan & gemuk",
  "Flame Retardancy": "Penahan api",
  "Polymers & Engineering": "Polimer & rekayasa",
  "Electrical & Electronics": "Kelistrikan & elektronika",
  "Automotive": "Otomotif",
  "Industrial Machinery & Equipment": "Mesin & peralatan industri",
  "Coatings & Composites": "Pelapis & komposit",
  "Pharmaceutical & Agrochemical": "Farmasi & agrokimia",
  "Energy Storage & Electronics": "Penyimpanan energi & elektronika",
  "Nutraceutical, Cosmetic & Food": "Nutrasetika, kosmetik & pangan",
  "Automotive & Transportation": "Otomotif & transportasi",
  "Polymers & Engineering Plastics": "Polimer & plastik teknik",
  "Construction & Infrastructure": "Konstruksi & infrastruktur",
  "Research-Driven Specialty Industries": "Industri khusus berbasis riset",
  "Lithium & Metal Additives": "Aditif litium & logam",
  "Inorganic & Flame-Retardant Chemicals": "Bahan kimia anorganik & penahan api",
  "Organic & Pharmaceutical Intermediates": "Intermediet organik & farmasi",
  "Polymers, Resins & High-Performance Materials": "Polimer, resin & material berkinerja tinggi",
  "Surfactants, Detergents & Bio-Based Chemicals": "Surfaktan, deterjen & bahan kimia berbasis hayati",
  "Electrochemical, Battery & Electronic Chemicals": "Bahan kimia elektrokimia, baterai & elektronika",
  "Paints, Coatings & Pigments": "Cat, pelapis & pigmen",
  "Nutraceutical, Cosmetic & Food Chemicals": "Bahan kimia nutrasetika, kosmetik & pangan",
  "Water Treatment & Industrial Additives": "Pengolahan air & aditif industri",
  "Functional & High-Performance Materials": "Material fungsional & berkinerja tinggi",
  "Flame-Retardant & Inorganic Salts": "Garam penahan api & anorganik",
  "Advanced Manufacturing": "Produksi mutakhir",
  "Research & Development Excellence": "Keunggulan penelitian & pengembangan",
  "Quality Assurance & Compliance": "Penjaminan mutu & kepatuhan",
  "Technical & Application Support": "Dukungan teknis & aplikasi",
  "Global Export & Logistics": "Ekspor global & logistik",
  "Sustainability Integration": "Integrasi keberlanjutan",
  "Product Innovation": "Inovasi produk",
  "Process & Manufacturing Innovation": "Inovasi proses & produksi",
  "Application & Industry-Specific Innovation": "Inovasi spesifik aplikasi & industri",
  "Sustainable & Green Innovation": "Inovasi berkelanjutan & hijau",
  "Collaboration & Knowledge Innovation": "Inovasi kolaborasi & pengetahuan",
  "Integrated Innovation Advantage": "Keunggulan inovasi terpadu",
  "Product Innovation & Development": "Inovasi & pengembangan produk",
  "Advanced Analytical & Testing": "Analisis & pengujian mutakhir",
  "Application-Specific Research": "Riset spesifik aplikasi",
  "Sustainable & Green Chemistry": "Kimia berkelanjutan & hijau",
  "Collaboration & Knowledge Sharing": "Kolaborasi & berbagi pengetahuan",
  "Integrated R&D Excellence": "Keunggulan litbang terpadu",
  "Environmental Stewardship": "Tanggung jawab lingkungan",
  "Sustainable Product Innovation": "Inovasi produk berkelanjutan",
  "Energy & Resource Optimisation": "Optimalisasi energi & sumber daya",
  "Health, Safety & Community": "Kesehatan, keselamatan & masyarakat",
  "Circular Economy & Waste": "Ekonomi sirkular & limbah",
  "Integrated Sustainability Excellence": "Keunggulan keberlanjutan terpadu",

  // --- topic blurbs: applications -------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — untuk otomotif, alat berat, peralatan industri, polimer & plastik",
  "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials":
    "Aluminium · Calcium · Magnesium Hypophosphite — untuk plastik, elektronika, kelistrikan, pelapis, dan bahan konstruksi",
  "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics":
    "Sabun litium · Garam hipofosfit — untuk plastik, material teknik, otomotif, dan elektronika",
  "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics":
    "Aluminium Hypophosphite · Magnesium Hypophosphite — untuk elektronik konsumen, peralatan listrik, dan elektronika industri",
  "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery":
    "Sabun & gemuk litium · Garam hipofosfit · Aditif polimer — untuk komponen otomotif, kendaraan niaga, dan alat berat",
  "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment":
    "Sabun litium · Intermediet organik & farmasi — untuk alat berat, pabrik manufaktur, dan peralatan industri",
  "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing":
    "Garam hipofosfit · Intermediet organik & farmasi — untuk konstruksi, pelapis industri, dan pembuatan komposit",
  "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D":
    "1-Phenyl Oxide · Triazolo Pyridione — untuk litbang farmasi, agrokimia, dan industri",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics":
    "Lithium Carbonate · Garam elektrolit · TMAH · Pelarut grade elektronik — untuk baterai, penyimpanan energi, semikonduktor, dan elektronika",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — untuk nutrasetika, kosmetik, pangan fungsional, dan farmasi",

  // --- topic blurbs: industries ---------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Garam hipofosfit · Aditif polimer",
  "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Sabun litium · Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Lithium soaps · Organic & pharmaceutical intermediates":
    "Sabun litium · Intermediet organik & farmasi",
  "Hypophosphite salts · Organic & pharmaceutical intermediates":
    "Garam hipofosfit · Intermediet organik & farmasi",
  "1-Phenyl Oxide · Triazolo Pyridione": "1-Phenyl Oxide · Triazolo Pyridione",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents":
    "Lithium Carbonate · Garam elektrolit · TMAH · Pelarut grade elektronik",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
  "Graphene & nano additives · High-performance polymers · Functional coatings":
    "Aditif grafena & nano · Polimer berkinerja tinggi · Pelapis fungsional",

  // --- topic blurbs: business units -----------------------------------------
  "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.":
    "Produksi dan ekspor sabun logam berbasis litium serta aditif logam untuk sistem pelumasan industri.",
  "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.":
    "Produksi dan ekspor garam penahan api anorganik bebas halogen serta garam logam fungsional.",
  "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.":
    "Produksi dan ekspor intermediet organik kemurnian tinggi untuk aplikasi farmasi, agrokimia, dan kimia industri.",
  "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.":
    "Polimer, resin, perekat, sealant, dan material fungsional mutakhir untuk aplikasi industri.",
  "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.":
    "Surfaktan industri, pengemulsi, deterjen, dan solusi kimia berbasis hayati.",
  "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.":
    "Bahan kimia untuk baterai litium-ion, elektronika, dan aplikasi semikonduktor kemurnian tinggi.",
  "High-value pigments, coatings intermediates and additive solutions.":
    "Pigmen bernilai tinggi, intermediet pelapis, dan solusi aditif.",
  "Vitamins, nutraceuticals, cosmetic actives and functional food additives.":
    "Vitamin, nutrasetika, bahan aktif kosmetik, dan aditif pangan fungsional.",
  "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.":
    "Bahan kimia untuk pengolahan air industri, inhibisi korosi, antikerak, dan aditif fungsional.",
  "Niche chemicals for aerospace, automotive, electronics and industrial applications.":
    "Bahan kimia khusus untuk kedirgantaraan, otomotif, elektronika, dan aplikasi industri.",

  // --- topic blurbs: product groups -----------------------------------------
  "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.":
    "Pengental berkinerja tinggi untuk gemuk otomotif dan industri, dengan stabilitas termal, ketahanan air, dan daya tahan mekanis yang sangat baik.",
  "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.":
    "Aditif bebas halogen yang meningkatkan ketahanan api pada plastik, kabel, dan pelapis sekaligus mengurangi asap dan toksisitas.",
  "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.":
    "Senyawa kemurnian tinggi untuk farmasi, agrokimia, dan aplikasi industri — dapat ditingkatkan dari riset laboratorium ke produksi industri tanpa mengorbankan mutu.",
  "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.":
    "Polimer dan resin mutakhir untuk perekat, pelapis, dan material fungsional, termasuk grade tahan panas untuk kedirgantaraan dan otomotif.",
  "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.":
    "Surfaktan industri dan ramah lingkungan, pengemulsi dan bahan pembasah, serta intermediet dan pelarut berbasis tanaman.",
  "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.":
    "Garam baterai litium-ion, pelarut kemurnian tinggi, dan bahan kimia semikonduktor dengan kemurnian sangat tinggi dan kinerja sesuai aplikasi.",
  "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.":
    "Pigmen organik dan anorganik, aditif pelapis, dan penstabil UV yang memberikan warna, dispersi, dan kinerja yang konsisten.",
  "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.":
    "Intermediet kemurnian tinggi untuk litbang dan aplikasi komersial, dengan formulasi khusus dan dukungan sesuai aplikasi.",
  "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.":
    "Formulasi khusus untuk efisiensi operasional dan kepatuhan lingkungan pada menara pendingin, pembangkit listrik, dan industri proses.",
  "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.":
    "Solusi berbasis litbang untuk tantangan material generasi berikutnya di kedirgantaraan, otomotif, elektronika, dan industri mutakhir.",

  // --- topic and grade page chrome ------------------------------------------
  "The range": "Rangkaian produk",
  "Grades in this group": "Grade dalam kelompok ini",
  "All applications": "Semua aplikasi",
  "All industries": "Semua industri",
  "All business units": "Semua unit bisnis",
  "All products": "Semua produk",
  "All capabilities": "Semua kapabilitas",
  "All innovation": "Semua inovasi",
  "All r&d": "Semua litbang",
  "All sustainability": "Semua keberlanjutan",
  "Talk to our technical team": "Hubungi tim teknis kami",
  "Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.":
    "Data teknis, opsi kemasan, dan dokumen ekspor — sampaikan kebutuhan Anda dan tim yang tepat akan menghubungi Anda.",
  "Start a conversation": "Mulai percakapan",
  "Division": "Divisi",
  "Product group": "Kelompok produk",
  "Filtered under": "Terklasifikasi dalam",
  "Also in this group": "Juga dalam kelompok ini",
  "Request technical data": "Minta data teknis",
  "Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.":
    "Dokumen teknis dan keselamatan, opsi kemasan, dan berkas ekspor — sampaikan spesifikasi yang perlu Anda capai.",
  "Request TDS / SDS": "Minta TDS / SDS",
  "Back to the finder": "Kembali ke pencari produk",

  // --- product finder -------------------------------------------------------
  "Filter by": "Saring berdasarkan",
  "Clear filters": "Hapus filter",
  "Search…": "Cari…",
  "Search products": "Cari produk",
  "Clear search": "Hapus pencarian",
  "Displaying {range} of {total} Results": "Menampilkan {range} dari {total} hasil",
  "Displaying {total} Results": "Menampilkan {total} hasil",
  "No products match those filters. Clear a filter, or {ask}.":
    "Tidak ada produk yang cocok dengan filter tersebut. Hapus satu filter, atau {ask}.",
  "ask us about a custom grade": "tanyakan kepada kami tentang grade khusus",
  "Show more results": "Tampilkan lebih banyak hasil",
  "All divisions": "Semua divisi",
  "Automotive & transportation": "Otomotif & transportasi",
  "Polymers & engineering plastics": "Polimer & plastik teknik",
  "Electrical & electronics": "Kelistrikan & elektronika",
  "Industrial machinery": "Mesin industri",
  "Coatings & composites": "Pelapis & komposit",
  "Pharmaceutical & agrochemical": "Farmasi & agrokimia",
  "Construction & infrastructure": "Konstruksi & infrastruktur",
  "Energy storage": "Penyimpanan energi",
  "Nutraceutical, cosmetic & food": "Nutrasetika, kosmetik & pangan",
  "Water treatment": "Pengolahan air",
  "Lithium & metal additives": "Aditif litium & logam",
  "Flame retardants": "Penahan api",
  "Intermediates": "Intermediet",
  "Polymers & resins": "Polimer & resin",
  "Surfactants": "Surfaktan",
  "Battery & electronic": "Baterai & elektronika",
  "Pigments": "Pigmen",
  "Nutraceutical & cosmetic": "Nutrasetika & kosmetik",
  "Functional materials": "Material fungsional",

  // --- banner headlines ------------------------------------------------------
  // The whole two-tone headline as one key; see components/HeroTitle.tsx for why
  // the light/bold split is not translated as two fragments.
  "About Cosmox Chemicals": "Tentang Cosmox Chemicals",
  "Contact Us": "Hubungi kami",
  "Search for a Product": "Cari produk",
  "Industries We Serve": "Industri yang kami layani",

  // --- footer ---------------------------------------------------------------
  "Advanced chemical manufacturing and export — enabling industrial efficiency, safety and sustainability worldwide.":
    "Produksi dan ekspor bahan kimia mutakhir — mendukung efisiensi, keselamatan, dan keberlanjutan industri di seluruh dunia.",
  "Company": "Perusahaan",
  "Offering": "Penawaran",
  "Get in touch": "Hubungi kami",
  "Product finder": "Pencari produk",
  "All rights reserved.": "Hak cipta dilindungi undang-undang.",
  "Manufacturer & exporter of speciality chemicals":
    "Produsen & eksportir bahan kimia khusus",
};

export default id;
