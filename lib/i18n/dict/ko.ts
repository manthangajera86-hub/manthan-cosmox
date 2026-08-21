/* 한국어 — South Korea. See ./types.ts: chemical names, grade names and division
   numbers stay in the Latin original. */

import type { Dict } from "./types";

const ko: Dict = {
  // --- navigation and header ------------------------------------------------
  "Home": "홈",
  "About us": "회사 소개",
  "Divisions": "사업부",
  "Products": "제품",
  "Industries": "산업 분야",
  "Applications": "응용 분야",
  "Capabilities": "역량",
  "R&D": "연구개발",
  "Innovation": "혁신",
  "Sustainability": "지속가능경영",
  "Contact": "문의",
  "Product Finder": "제품 찾기",
  "Skip to content": "본문으로 건너뛰기",
  "{n} grades": "{n}개 등급",
  "Search the whole range": "전체 제품군 검색",
  "Visit page": "페이지 보기",
  "Sections": "섹션",
  "On the home page": "홈 화면에서",
  "Explore": "자세히 보기",
  "Previous": "이전",
  "Next": "다음",
  "Previous picture": "이전 이미지",
  "Next picture": "다음 이미지",
  "Business units": "사업 부문",
  "Business Units": "사업 부문",
  "Research & Development": "연구개발",

  // --- country and language menu -------------------------------------------
  "Region & language": "지역 및 언어",
  "Change country and language": "국가 및 언어 변경",
  "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.":
    "구매하시는 국가를 선택하세요. 당사는 수라트에서 생산하여 전 세계로 수출하며, 국가에 따라 사이트 언어가 전환됩니다.",
  "Navigation and product titles are translated. Detailed page copy remains in English.":
    "내비게이션과 제품명은 번역되어 있습니다. 페이지의 상세 내용은 영문으로 유지됩니다.",
  "Detected": "자동 감지",
  "Search countries": "국가 검색",
  "Search {n} countries": "{n}개국 검색",
  "Set from your device's time zone. Change it here at any time.":
    "기기의 시간대를 기준으로 설정되었습니다. 언제든 여기서 변경할 수 있습니다.",
  "Set from your browser's language. Change it here at any time.":
    "브라우저 언어를 기준으로 설정되었습니다. 언제든 여기서 변경할 수 있습니다.",
  "No country matches “{q}”. We export worldwide — write to us and we will route your enquiry.":
    "“{q}”와 일치하는 국가가 없습니다. 당사는 전 세계로 수출합니다 — 문의해 주시면 담당 부서로 연결해 드립니다.",

  // the six regions the panel groups the countries into
  "Asia Pacific": "아시아 태평양",
  "Europe": "유럽",
  "Americas": "미주",
  "Middle East": "중동",
  "Africa": "아프리카",
  "Central Asia & Caucasus": "중앙아시아 및 캅카스",

  /* All seventy countries in `lib/i18n/locales.ts`, in the order the panel
     lists them. A country whose name is the same in this language is still
     written out, so a name added to the register shows up here as a gap
     rather than silently reading as translated. */
  // Asia Pacific
  "India": "인도",
  "China": "중국",
  "Japan": "일본",
  "South Korea": "대한민국",
  "Taiwan": "대만",
  "Vietnam": "베트남",
  "Indonesia": "인도네시아",
  "Malaysia": "말레이시아",
  "Singapore": "싱가포르",
  "Thailand": "태국",
  "Philippines": "필리핀",
  "Pakistan": "파키스탄",
  "Bangladesh": "방글라데시",
  "Nepal": "네팔",
  "Sri Lanka": "스리랑카",
  "Myanmar": "미얀마",
  "Cambodia": "캄보디아",
  "Australia": "호주",
  "New Zealand": "뉴질랜드",
  // Europe
  "United Kingdom": "영국",
  "Ireland": "아일랜드",
  "Germany": "독일",
  "France": "프랑스",
  "Italy": "이탈리아",
  "Spain": "스페인",
  "Portugal": "포르투갈",
  "Netherlands": "네덜란드",
  "Belgium": "벨기에",
  "Switzerland": "스위스",
  "Austria": "오스트리아",
  "Sweden": "스웨덴",
  "Norway": "노르웨이",
  "Denmark": "덴마크",
  "Finland": "핀란드",
  "Poland": "폴란드",
  "Czech Republic": "체코",
  "Hungary": "헝가리",
  "Romania": "루마니아",
  "Greece": "그리스",
  "Russia": "러시아",
  "Ukraine": "우크라이나",
  "Turkey": "튀르키예",
  // Americas
  "United States": "미국",
  "Canada": "캐나다",
  "Mexico": "멕시코",
  "Brazil": "브라질",
  "Argentina": "아르헨티나",
  "Chile": "칠레",
  "Colombia": "콜롬비아",
  "Peru": "페루",
  // Middle East
  "United Arab Emirates": "아랍에미리트",
  "Saudi Arabia": "사우디아라비아",
  "Qatar": "카타르",
  "Kuwait": "쿠웨이트",
  "Oman": "오만",
  "Bahrain": "바레인",
  "Israel": "이스라엘",
  // Africa
  "Egypt": "이집트",
  "Morocco": "모로코",
  "Algeria": "알제리",
  "Nigeria": "나이지리아",
  "Ghana": "가나",
  "Kenya": "케냐",
  "Tanzania": "탄자니아",
  "Ethiopia": "에티오피아",
  "South Africa": "남아프리카공화국",
  // Central Asia & Caucasus
  "Kazakhstan": "카자흐스탄",
  "Uzbekistan": "우즈베키스탄",
  "Azerbaijan": "아제르바이잔",
  "Georgia": "조지아",

  // --- nav dropdown introductions -------------------------------------------
  "Speciality chemistry manufactured and exported from Surat — ten divisions, 112 grades, one integrated plant.":
    "수라트에서 생산하여 수출하는 특수화학 — 10개 사업부, 112개 등급, 하나의 통합 공장.",
  "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.":
    "우리는 누구인가 — 산업을 더 안전하고, 더 깨끗하고, 더 효율적으로 만드는 화학을 생산하고 수출한다는 사명.",
  "Ten specialised divisions under one roof, structured so scale never costs you technical attention.":
    "한 지붕 아래 10개 전문 사업부. 규모가 결코 기술 지원의 질을 떨어뜨리지 않도록 구성했습니다.",
  "The full range — 112 grades built for high performance, consistency and regulatory confidence.":
    "전체 제품군 — 고성능, 품질 일관성, 규제 대응 신뢰를 위해 개발된 112개 등급.",
  "The sectors we formulate for, and what each one asks of a speciality chemical supplier.":
    "당사가 배합을 담당하는 산업 분야와, 각 분야가 특수화학 공급업체에 요구하는 것.",
  "What our chemistry actually does in service — the end uses each grade was developed for.":
    "실제 현장에서 당사 화학이 하는 일 — 각 등급이 개발된 최종 용도.",
  "Manufacturing, laboratory, quality and export capability, described plainly.":
    "생산, 시험, 품질, 수출 역량을 있는 그대로 설명합니다.",
  "The laboratories, instruments and synthesis work behind every grade we ship.":
    "출하하는 모든 등급 뒤에 있는 연구실, 장비, 그리고 합성 작업.",
  "Where the next products come from — in the flask, on the plant floor, and with customers.":
    "다음 제품이 태어나는 곳 — 플라스크 안에서, 생산 현장에서, 그리고 고객과 함께.",
  "How the plant, the portfolio and the people are being held to a lower footprint.":
    "공장과 제품군, 그리고 구성원이 더 낮은 환경 발자국을 향해 나아가는 방식.",

  // --- on-page jump links ---------------------------------------------------
  "What we make": "우리가 만드는 것",
  "Our products": "제품 소개",
  "Find a product": "제품 찾기",
  "Ten divisions": "10개 사업부",
  "Industries served": "공급 산업",
  "A force for good": "선한 영향력",
  "Latest media": "최신 소식",
  "Global presence": "글로벌 네트워크",
  "Manufacturing excellence": "생산 역량",
  "Research & development": "연구개발",
  "Quality & compliance": "품질 및 규제 준수",
  "Our vision": "비전",

  // --- topic titles ---------------------------------------------------------
  "Lubrication & Grease": "윤활 및 그리스",
  "Flame Retardancy": "난연",
  "Polymers & Engineering": "고분자 및 엔지니어링",
  "Electrical & Electronics": "전기 및 전자",
  "Automotive": "자동차",
  "Industrial Machinery & Equipment": "산업 기계 및 설비",
  "Coatings & Composites": "코팅 및 복합재",
  "Pharmaceutical & Agrochemical": "제약 및 농화학",
  "Energy Storage & Electronics": "에너지 저장 및 전자",
  "Nutraceutical, Cosmetic & Food": "건강기능식품, 화장품 및 식품",
  "Automotive & Transportation": "자동차 및 운송",
  "Polymers & Engineering Plastics": "고분자 및 엔지니어링 플라스틱",
  "Construction & Infrastructure": "건설 및 인프라",
  "Research-Driven Specialty Industries": "연구 주도형 특수 산업",
  "Lithium & Metal Additives": "리튬 및 금속 첨가제",
  "Inorganic & Flame-Retardant Chemicals": "무기 및 난연 화학품",
  "Organic & Pharmaceutical Intermediates": "유기 및 제약 중간체",
  "Polymers, Resins & High-Performance Materials": "고분자, 수지 및 고성능 소재",
  "Surfactants, Detergents & Bio-Based Chemicals": "계면활성제, 세제 및 바이오 기반 화학품",
  "Electrochemical, Battery & Electronic Chemicals": "전기화학, 전지 및 전자 화학품",
  "Paints, Coatings & Pigments": "도료, 코팅 및 안료",
  "Nutraceutical, Cosmetic & Food Chemicals": "건강기능식품, 화장품 및 식품 화학품",
  "Water Treatment & Industrial Additives": "수처리 및 산업용 첨가제",
  "Functional & High-Performance Materials": "기능성 및 고성능 소재",
  "Flame-Retardant & Inorganic Salts": "난연제 및 무기염",
  "Advanced Manufacturing": "첨단 생산",
  "Research & Development Excellence": "연구개발 우수성",
  "Quality Assurance & Compliance": "품질 보증 및 규제 준수",
  "Technical & Application Support": "기술 및 응용 지원",
  "Global Export & Logistics": "글로벌 수출 및 물류",
  "Sustainability Integration": "지속가능성 통합",
  "Product Innovation": "제품 혁신",
  "Process & Manufacturing Innovation": "공정 및 생산 혁신",
  "Application & Industry-Specific Innovation": "응용 및 산업별 혁신",
  "Sustainable & Green Innovation": "지속가능·친환경 혁신",
  "Collaboration & Knowledge Innovation": "협력 및 지식 혁신",
  "Integrated Innovation Advantage": "통합 혁신 경쟁력",
  "Product Innovation & Development": "제품 혁신 및 개발",
  "Advanced Analytical & Testing": "첨단 분석 및 시험",
  "Application-Specific Research": "응용별 연구",
  "Sustainable & Green Chemistry": "지속가능·친환경 화학",
  "Collaboration & Knowledge Sharing": "협력 및 지식 공유",
  "Integrated R&D Excellence": "통합 연구개발 우수성",
  "Environmental Stewardship": "환경 책임",
  "Sustainable Product Innovation": "지속가능한 제품 혁신",
  "Energy & Resource Optimisation": "에너지 및 자원 최적화",
  "Health, Safety & Community": "보건, 안전 및 지역사회",
  "Circular Economy & Waste": "순환경제 및 폐기물",
  "Integrated Sustainability Excellence": "통합 지속가능성 우수성",

  // --- topic blurbs: applications -------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — 자동차, 중장비, 산업 설비, 고분자 및 플라스틱용",
  "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials":
    "Aluminium · Calcium · Magnesium Hypophosphite — 플라스틱, 전자, 전기, 코팅 및 건축 자재용",
  "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics":
    "리튬 비누 · 차아인산염 — 플라스틱, 엔지니어링 소재, 자동차 및 전자용",
  "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics":
    "Aluminium Hypophosphite · Magnesium Hypophosphite — 소비자 가전, 전기 기기 및 산업용 전자기기용",
  "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery":
    "리튬 비누 및 그리스 · 차아인산염 · 고분자 첨가제 — 자동차 부품, 상용차 및 중장비용",
  "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment":
    "리튬 비누 · 유기 및 제약 중간체 — 중장비, 생산 공장 및 산업 설비용",
  "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing":
    "차아인산염 · 유기 및 제약 중간체 — 건설, 산업용 코팅 및 복합재 제조용",
  "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D":
    "1-Phenyl Oxide · Triazolo Pyridione — 제약, 농화학 및 산업 연구개발용",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics":
    "Lithium Carbonate · 전해질염 · TMAH · 전자급 용매 — 전지, 에너지 저장, 반도체 및 전자용",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — 건강기능식품, 화장품, 기능성 식품 및 의약품용",

  // --- topic blurbs: industries ---------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · 차아인산염 · 고분자 첨가제",
  "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite":
    "리튬 비누 · Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Lithium soaps · Organic & pharmaceutical intermediates":
    "리튬 비누 · 유기 및 제약 중간체",
  "Hypophosphite salts · Organic & pharmaceutical intermediates":
    "차아인산염 · 유기 및 제약 중간체",
  "1-Phenyl Oxide · Triazolo Pyridione": "1-Phenyl Oxide · Triazolo Pyridione",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents":
    "Lithium Carbonate · 전해질염 · TMAH · 전자급 용매",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
  "Graphene & nano additives · High-performance polymers · Functional coatings":
    "그래핀 및 나노 첨가제 · 고성능 고분자 · 기능성 코팅",

  // --- topic blurbs: business units -----------------------------------------
  "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.":
    "산업용 윤활 시스템을 위한 리튬계 금속 비누 및 금속 첨가제의 생산과 수출.",
  "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.":
    "무할로겐 무기 난연염 및 기능성 금속염의 생산과 수출.",
  "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.":
    "제약, 농화학 및 산업 화학 용도를 위한 고순도 유기 중간체의 생산과 수출.",
  "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.":
    "산업 용도를 위한 첨단 고분자, 수지, 접착제, 실런트 및 기능성 소재.",
  "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.":
    "산업용 계면활성제, 유화제, 세제 및 바이오 기반 화학 솔루션.",
  "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.":
    "리튬이온 전지, 전자 및 고순도 반도체 용도를 위한 화학품.",
  "High-value pigments, coatings intermediates and additive solutions.":
    "고부가가치 안료, 코팅 중간체 및 첨가제 솔루션.",
  "Vitamins, nutraceuticals, cosmetic actives and functional food additives.":
    "비타민, 건강기능식품, 화장품 활성 성분 및 기능성 식품 첨가물.",
  "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.":
    "산업용 수처리, 부식 억제, 스케일 방지를 위한 화학품 및 기능성 첨가제.",
  "Niche chemicals for aerospace, automotive, electronics and industrial applications.":
    "항공우주, 자동차, 전자 및 산업 용도를 위한 특수 화학품.",

  // --- topic blurbs: product groups -----------------------------------------
  "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.":
    "자동차 및 산업용 그리스를 위한 고성능 증주제로, 우수한 열 안정성과 내수성, 기계적 내구성을 갖췄습니다.",
  "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.":
    "플라스틱, 케이블, 코팅의 내화성을 높이는 동시에 연기와 독성을 줄이는 무할로겐 첨가제.",
  "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.":
    "제약, 농화학 및 산업 용도를 위한 고순도 화합물 — 품질 저하 없이 실험실 연구에서 산업 생산까지 확장 가능합니다.",
  "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.":
    "접착제, 코팅 및 기능성 소재를 위한 첨단 고분자와 수지. 항공우주 및 자동차용 내열 등급을 포함합니다.",
  "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.":
    "산업용 및 친환경 계면활성제, 유화제, 습윤제와 함께 식물 기반의 친환경 중간체 및 용매.",
  "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.":
    "리튬이온 전지용 염, 고순도 용매 및 반도체 화학품. 초고순도와 용도별 성능을 제공합니다.",
  "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.":
    "일관된 색상, 분산성, 성능을 제공하는 유기·무기 안료, 코팅 첨가제 및 UV 안정제.",
  "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.":
    "연구개발 및 상업 용도를 위한 고순도 중간체. 맞춤 배합과 용도별 지원을 제공합니다.",
  "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.":
    "냉각탑, 발전소 및 공정 산업의 운영 효율과 환경 규제 준수를 위한 맞춤 배합.",
  "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.":
    "항공우주, 자동차, 전자 및 첨단 산업의 차세대 소재 과제를 해결하는 연구개발 기반 솔루션.",

  // --- topic and grade page chrome ------------------------------------------
  "The range": "제품군",
  "Grades in this group": "이 그룹의 등급",
  "All applications": "전체 응용 분야",
  "All industries": "전체 산업 분야",
  "All business units": "전체 사업 부문",
  "All products": "전체 제품",
  "All capabilities": "전체 역량",
  "All innovation": "전체 혁신",
  "All r&d": "전체 연구개발",
  "All sustainability": "전체 지속가능경영",
  "Talk to our technical team": "기술팀에 문의하기",
  "Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.":
    "기술 데이터, 포장 옵션 및 수출 서류 — 필요하신 사항을 알려주시면 담당 팀이 연락드립니다.",
  "Start a conversation": "문의 시작하기",
  "Division": "사업부",
  "Product group": "제품 그룹",
  "Filtered under": "분류",
  "Also in this group": "같은 그룹의 다른 제품",
  "Request technical data": "기술 자료 요청",
  "Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.":
    "기술 및 안전 자료, 포장 옵션과 수출 서류 — 충족해야 하는 사양을 알려주십시오.",
  "Request TDS / SDS": "TDS / SDS 요청",
  "Back to the finder": "제품 찾기로 돌아가기",

  // --- product finder -------------------------------------------------------
  "Filter by": "필터",
  "Clear filters": "필터 초기화",
  "Search…": "검색…",
  "Search products": "제품 검색",
  "Clear search": "검색어 지우기",
  "Displaying {range} of {total} Results": "총 {total}건 중 {range}건 표시",
  "Displaying {total} Results": "{total}건 표시",
  "No products match those filters. Clear a filter, or {ask}.":
    "해당 조건에 맞는 제품이 없습니다. 필터를 해제하거나 {ask}.",
  "ask us about a custom grade": "맞춤 등급에 대해 문의해 주십시오",
  "Show more results": "결과 더 보기",
  "All divisions": "전체 사업부",
  "Automotive & transportation": "자동차 및 운송",
  "Polymers & engineering plastics": "고분자 및 엔지니어링 플라스틱",
  "Electrical & electronics": "전기 및 전자",
  "Industrial machinery": "산업 기계",
  "Coatings & composites": "코팅 및 복합재",
  "Pharmaceutical & agrochemical": "제약 및 농화학",
  "Construction & infrastructure": "건설 및 인프라",
  "Energy storage": "에너지 저장",
  "Nutraceutical, cosmetic & food": "건강기능식품, 화장품 및 식품",
  "Water treatment": "수처리",
  "Lithium & metal additives": "리튬 및 금속 첨가제",
  "Flame retardants": "난연제",
  "Intermediates": "중간체",
  "Polymers & resins": "고분자 및 수지",
  "Surfactants": "계면활성제",
  "Battery & electronic": "전지 및 전자",
  "Pigments": "안료",
  "Nutraceutical & cosmetic": "건강기능식품 및 화장품",
  "Functional materials": "기능성 소재",

  // --- banner headlines ------------------------------------------------------
  // The whole two-tone headline as one key; see components/HeroTitle.tsx for why
  // the light/bold split is not translated as two fragments.
  "About Cosmox Chemicals": "Cosmox Chemicals 소개",
  "Contact Us": "문의하기",
  "Search for a Product": "제품 찾기",
  "Industries We Serve": "당사가 공급하는 산업",

  // --- footer ---------------------------------------------------------------
  "Advanced chemical manufacturing and export — enabling industrial efficiency, safety and sustainability worldwide.":
    "첨단 화학 제조와 수출로 전 세계 산업의 효율, 안전, 지속가능성을 뒷받침합니다.",
  "Company": "회사",
  "Offering": "사업 및 제품",
  "Get in touch": "연락처",
  "Product finder": "제품 찾기",
  "All rights reserved.": "All rights reserved.",
  "Manufacturer & exporter of speciality chemicals": "특수화학 제조 및 수출 기업",
};

export default ko;
