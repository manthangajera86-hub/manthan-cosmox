/* 日本語 — Japan. See ./types.ts: chemical names, grade names and division
   numbers stay in the Latin original. */

import type { Dict } from "./types";

const ja: Dict = {
  // --- navigation and header ------------------------------------------------
  "Home": "ホーム",
  "About us": "会社概要",
  "Divisions": "事業部",
  "Products": "製品",
  "Industries": "産業分野",
  "Applications": "用途",
  "Capabilities": "技術・設備",
  "R&D": "研究開発",
  "Innovation": "イノベーション",
  "Sustainability": "サステナビリティ",
  "Contact": "お問い合わせ",
  "Product Finder": "製品検索",
  "Skip to content": "本文へスキップ",
  "Search the whole range": "全製品を検索",
  "Visit page": "ページを見る",
  "Sections": "セクション",
  "On the home page": "ホームページの内容",
  "Explore": "詳しく見る",
  "Previous": "前へ",
  "Next": "次へ",
  "Previous picture": "前の画像",
  "Next picture": "次の画像",
  "Business units": "事業ユニット",
  "Business Units": "事業ユニット",
  "Research & Development": "研究開発",

  // --- country and language menu -------------------------------------------
  "Region & language": "地域と言語",
  "Change country and language": "国と言語を変更",
  "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.":
    "ご購入いただく国・地域をお選びください。当社はスーラトで製造し、世界各国へ輸出しています。国の選択に合わせてサイトの言語が切り替わります。",
  "Navigation and product titles are translated. Detailed page copy remains in English.":
    "ナビゲーションと製品名は翻訳されています。ページ本文の詳細は英語のままです。",
  "Detected": "自動判定",
  "Search countries": "国を検索",
  "Search {n} countries": "{n} か国を検索",
  "Set from your device's time zone. Change it here at any time.":
    "お使いの端末のタイムゾーンから選択しました。こちらでいつでも変更できます。",
  "Set from your browser's language. Change it here at any time.":
    "お使いのブラウザーの言語から選択しました。こちらでいつでも変更できます。",
  "No country matches “{q}”. We export worldwide — write to us and we will route your enquiry.":
    "「{q}」に一致する国はありません。当社は世界各国へ輸出しています。お問い合わせいただければ担当部門へお繋ぎします。",

  // the six regions the panel groups the countries into
  "Asia Pacific": "アジア太平洋",
  "Europe": "ヨーロッパ",
  "Americas": "南北アメリカ",
  "Middle East": "中東",
  "Africa": "アフリカ",
  "Central Asia & Caucasus": "中央アジア・コーカサス",

  /* All seventy countries in `lib/i18n/locales.ts`, in the order the panel
     lists them. A country whose name is the same in this language is still
     written out, so a name added to the register shows up here as a gap
     rather than silently reading as translated. */
  // Asia Pacific
  "India": "インド",
  "China": "中国",
  "Japan": "日本",
  "South Korea": "韓国",
  "Taiwan": "台湾",
  "Vietnam": "ベトナム",
  "Indonesia": "インドネシア",
  "Malaysia": "マレーシア",
  "Singapore": "シンガポール",
  "Thailand": "タイ",
  "Philippines": "フィリピン",
  "Pakistan": "パキスタン",
  "Bangladesh": "バングラデシュ",
  "Nepal": "ネパール",
  "Sri Lanka": "スリランカ",
  "Myanmar": "ミャンマー",
  "Cambodia": "カンボジア",
  "Australia": "オーストラリア",
  "New Zealand": "ニュージーランド",
  // Europe
  "United Kingdom": "イギリス",
  "Ireland": "アイルランド",
  "Germany": "ドイツ",
  "France": "フランス",
  "Italy": "イタリア",
  "Spain": "スペイン",
  "Portugal": "ポルトガル",
  "Netherlands": "オランダ",
  "Belgium": "ベルギー",
  "Switzerland": "スイス",
  "Austria": "オーストリア",
  "Sweden": "スウェーデン",
  "Norway": "ノルウェー",
  "Denmark": "デンマーク",
  "Finland": "フィンランド",
  "Poland": "ポーランド",
  "Czech Republic": "チェコ",
  "Hungary": "ハンガリー",
  "Romania": "ルーマニア",
  "Greece": "ギリシャ",
  "Russia": "ロシア",
  "Ukraine": "ウクライナ",
  "Turkey": "トルコ",
  // Americas
  "United States": "アメリカ合衆国",
  "Canada": "カナダ",
  "Mexico": "メキシコ",
  "Brazil": "ブラジル",
  "Argentina": "アルゼンチン",
  "Chile": "チリ",
  "Colombia": "コロンビア",
  "Peru": "ペルー",
  // Middle East
  "United Arab Emirates": "アラブ首長国連邦",
  "Saudi Arabia": "サウジアラビア",
  "Qatar": "カタール",
  "Kuwait": "クウェート",
  "Oman": "オマーン",
  "Bahrain": "バーレーン",
  "Israel": "イスラエル",
  // Africa
  "Egypt": "エジプト",
  "Morocco": "モロッコ",
  "Algeria": "アルジェリア",
  "Nigeria": "ナイジェリア",
  "Ghana": "ガーナ",
  "Kenya": "ケニア",
  "Tanzania": "タンザニア",
  "Ethiopia": "エチオピア",
  "South Africa": "南アフリカ",
  // Central Asia & Caucasus
  "Kazakhstan": "カザフスタン",
  "Uzbekistan": "ウズベキスタン",
  "Azerbaijan": "アゼルバイジャン",
  "Georgia": "ジョージア",

  // --- nav dropdown introductions -------------------------------------------
  "Speciality chemistry manufactured and exported from Surat — ten divisions, 112 grades, one integrated plant.":
    "スーラトで製造・輸出するスペシャリティケミカル。10の事業部、112のグレード、1つの統合プラント。",
  "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.":
    "私たちについて。産業をより安全に、よりクリーンに、より効率的にする化学品を製造・輸出するという使命。",
  "Ten specialised divisions under one roof, structured so scale never costs you technical attention.":
    "10の専門事業部を一つ屋根の下に。規模が技術対応の質を損なわない体制を築いています。",
  "The full range — 112 grades built for high performance, consistency and regulatory confidence.":
    "全製品ラインナップ。高性能・品質の安定・法規制対応の安心を実現する112グレード。",
  "The sectors we formulate for, and what each one asks of a speciality chemical supplier.":
    "当社が処方を手がける産業分野と、各分野がスペシャリティケミカル供給者に求めるもの。",
  "What our chemistry actually does in service — the end uses each grade was developed for.":
    "実際の使用現場で当社の化学品が果たす役割。各グレードが開発された最終用途。",
  "Manufacturing, laboratory, quality and export capability, described plainly.":
    "製造、試験、品質、輸出の各能力を分かりやすくご説明します。",
  "The laboratories, instruments and synthesis work behind every grade we ship.":
    "出荷するすべてのグレードを支える研究室、分析機器、そして合成の仕事。",
  "Where the next products come from — in the flask, on the plant floor, and with customers.":
    "次の製品が生まれる場所。フラスコの中、製造現場、そしてお客様とともに。",
  "How the plant, the portfolio and the people are being held to a lower footprint.":
    "工場、製品群、そして人が、より小さな環境負荷へと向かう取り組み。",

  // --- on-page jump links ---------------------------------------------------
  "What we make": "私たちがつくるもの",
  "Our products": "製品一覧",
  "Find a product": "製品を探す",
  "Ten divisions": "10の事業部",
  "Industries served": "対応産業",
  "A force for good": "社会に資する力",
  "Latest media": "最新情報",
  "Global presence": "グローバル拠点",
  "Manufacturing excellence": "製造力",
  "Research & development": "研究開発",
  "Quality & compliance": "品質とコンプライアンス",
  "Our vision": "ビジョン",

  // --- topic titles ---------------------------------------------------------
  "Lubrication & Grease": "潤滑・グリース",
  "Flame Retardancy": "難燃",
  "Polymers & Engineering": "ポリマー・エンジニアリング",
  "Electrical & Electronics": "電気・電子",
  "Automotive": "自動車",
  "Industrial Machinery & Equipment": "産業機械・設備",
  "Coatings & Composites": "コーティング・複合材料",
  "Pharmaceutical & Agrochemical": "医薬・農薬",
  "Energy Storage & Electronics": "エネルギー貯蔵・電子",
  "Nutraceutical, Cosmetic & Food": "ニュートラシューティカル・化粧品・食品",
  "Automotive & Transportation": "自動車・輸送",
  "Polymers & Engineering Plastics": "ポリマー・エンジニアリングプラスチック",
  "Construction & Infrastructure": "建設・インフラ",
  "Research-Driven Specialty Industries": "研究主導型スペシャリティ産業",
  "Lithium & Metal Additives": "リチウム・金属添加剤",
  "Inorganic & Flame-Retardant Chemicals": "無機・難燃化学品",
  "Organic & Pharmaceutical Intermediates": "有機・医薬中間体",
  "Polymers, Resins & High-Performance Materials": "ポリマー・樹脂・高機能材料",
  "Surfactants, Detergents & Bio-Based Chemicals": "界面活性剤・洗剤・バイオベース化学品",
  "Electrochemical, Battery & Electronic Chemicals": "電気化学・電池・電子材料",
  "Paints, Coatings & Pigments": "塗料・コーティング・顔料",
  "Nutraceutical, Cosmetic & Food Chemicals": "ニュートラシューティカル・化粧品・食品用化学品",
  "Water Treatment & Industrial Additives": "水処理・工業用添加剤",
  "Functional & High-Performance Materials": "機能性・高性能材料",
  "Flame-Retardant & Inorganic Salts": "難燃剤・無機塩",
  "Advanced Manufacturing": "先進製造",
  "Research & Development Excellence": "研究開発の卓越性",
  "Quality Assurance & Compliance": "品質保証とコンプライアンス",
  "Technical & Application Support": "技術・アプリケーションサポート",
  "Global Export & Logistics": "グローバル輸出・物流",
  "Sustainability Integration": "サステナビリティの統合",
  "Product Innovation": "製品イノベーション",
  "Process & Manufacturing Innovation": "プロセス・製造イノベーション",
  "Application & Industry-Specific Innovation": "用途・産業別イノベーション",
  "Sustainable & Green Innovation": "サステナブル・グリーンイノベーション",
  "Collaboration & Knowledge Innovation": "協働・知識イノベーション",
  "Integrated Innovation Advantage": "統合イノベーションの強み",
  "Product Innovation & Development": "製品イノベーションと開発",
  "Advanced Analytical & Testing": "先進分析・試験",
  "Application-Specific Research": "用途別研究",
  "Sustainable & Green Chemistry": "サステナブル・グリーンケミストリー",
  "Collaboration & Knowledge Sharing": "協働と知識の共有",
  "Integrated R&D Excellence": "統合研究開発の卓越性",
  "Environmental Stewardship": "環境への責任",
  "Sustainable Product Innovation": "サステナブルな製品イノベーション",
  "Energy & Resource Optimisation": "エネルギー・資源の最適化",
  "Health, Safety & Community": "健康・安全・地域社会",
  "Circular Economy & Waste": "循環経済と廃棄物",
  "Integrated Sustainability Excellence": "統合サステナビリティの卓越性",

  // --- topic blurbs: applications -------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — 自動車、重機、産業設備、ポリマー・プラスチック向け",
  "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials":
    "Aluminium · Calcium · Magnesium Hypophosphite — プラスチック、電子、電気、コーティング、建設資材向け",
  "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics":
    "リチウム石けん · 次亜リン酸塩 — プラスチック、エンジニアリング材料、自動車、電子向け",
  "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics":
    "Aluminium Hypophosphite · Magnesium Hypophosphite — 民生用電子機器、電気製品、産業用エレクトロニクス向け",
  "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery":
    "リチウム石けん・グリース · 次亜リン酸塩 · ポリマー添加剤 — 自動車部品、商用車、重機向け",
  "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment":
    "リチウム石けん · 有機・医薬中間体 — 重機、製造プラント、産業設備向け",
  "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing":
    "次亜リン酸塩 · 有機・医薬中間体 — 建設、工業用コーティング、複合材料製造向け",
  "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D":
    "1-Phenyl Oxide · Triazolo Pyridione — 医薬・農薬・工業分野の研究開発向け",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics":
    "Lithium Carbonate · 電解質塩 · TMAH · 電子グレード溶剤 — 電池、エネルギー貯蔵、半導体、電子向け",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — ニュートラシューティカル、化粧品、機能性食品、医薬品向け",

  // --- topic blurbs: industries ---------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · 次亜リン酸塩 · ポリマー添加剤",
  "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite":
    "リチウム石けん · Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Lithium soaps · Organic & pharmaceutical intermediates":
    "リチウム石けん · 有機・医薬中間体",
  "Hypophosphite salts · Organic & pharmaceutical intermediates":
    "次亜リン酸塩 · 有機・医薬中間体",
  "1-Phenyl Oxide · Triazolo Pyridione": "1-Phenyl Oxide · Triazolo Pyridione",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents":
    "Lithium Carbonate · 電解質塩 · TMAH · 電子グレード溶剤",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
  "Graphene & nano additives · High-performance polymers · Functional coatings":
    "グラフェン・ナノ添加剤 · 高性能ポリマー · 機能性コーティング",

  // --- topic blurbs: business units -----------------------------------------
  "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.":
    "産業用潤滑システム向けのリチウム系金属石けんおよび金属添加剤の製造・輸出。",
  "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.":
    "ハロゲンフリーの無機難燃塩および機能性金属塩の製造・輸出。",
  "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.":
    "医薬、農薬、工業化学用途向けの高純度有機中間体の製造・輸出。",
  "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.":
    "産業用途向けの先進ポリマー、樹脂、接着剤、シーラント、機能性材料。",
  "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.":
    "工業用界面活性剤、乳化剤、洗剤、バイオベース化学ソリューション。",
  "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.":
    "リチウムイオン電池、電子機器、高純度半導体用途向けの化学品。",
  "High-value pigments, coatings intermediates and additive solutions.":
    "高付加価値顔料、塗料中間体、添加剤ソリューション。",
  "Vitamins, nutraceuticals, cosmetic actives and functional food additives.":
    "ビタミン、ニュートラシューティカル、化粧品有効成分、機能性食品添加物。",
  "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.":
    "工業用水処理、腐食抑制、スケール防止のための化学品と機能性添加剤。",
  "Niche chemicals for aerospace, automotive, electronics and industrial applications.":
    "航空宇宙、自動車、電子、産業用途向けのニッチ化学品。",

  // --- topic blurbs: product groups -----------------------------------------
  "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.":
    "自動車用・産業用グリース向けの高性能増ちょう剤。優れた熱安定性、耐水性、機械的耐久性を備えます。",
  "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.":
    "プラスチック、ケーブル、コーティングの難燃性を高めつつ、発煙と毒性を低減するハロゲンフリー添加剤。",
  "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.":
    "医薬、農薬、工業用途向けの高純度化合物。品質を損なうことなく、ラボ研究から工業生産までスケールアップできます。",
  "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.":
    "接着剤、コーティング、機能性材料向けの先進ポリマーと樹脂。航空宇宙・自動車用の耐熱グレードを含みます。",
  "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.":
    "工業用およびグリーンな界面活性剤、乳化剤、湿潤剤に加え、環境に配慮した植物由来の中間体と溶剤。",
  "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.":
    "リチウムイオン電池用塩、高純度溶剤、半導体用化学品。超高純度と用途別の性能を実現します。",
  "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.":
    "有機・無機顔料、塗料添加剤、UV安定剤。安定した色調、分散性、性能を提供します。",
  "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.":
    "研究開発および商業用途向けの高純度中間体。カスタム処方と用途別サポートを提供します。",
  "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.":
    "冷却塔、発電所、プロセス産業における運転効率と環境法規制対応のためのカスタム処方。",
  "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.":
    "航空宇宙、自動車、電子、先進産業における次世代材料の課題に応える研究開発主導のソリューション。",

  // --- topic and grade page chrome ------------------------------------------
  "The range": "製品ラインナップ",
  "Grades in this group": "このグループのグレード",
  "All applications": "用途一覧",
  "All industries": "産業分野一覧",
  "All business units": "事業ユニット一覧",
  "All products": "製品一覧",
  "All capabilities": "技術・設備一覧",
  "All innovation": "イノベーション一覧",
  "All r&d": "研究開発一覧",
  "All sustainability": "サステナビリティ一覧",
  "Talk to our technical team": "技術チームにご相談ください",
  "Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.":
    "技術データ、包装形態、輸出書類について。ご要望をお知らせいただければ、担当チームよりご連絡します。",
  "Start a conversation": "問い合わせる",
  "Division": "事業部",
  "Product group": "製品グループ",
  "Filtered under": "該当カテゴリー",
  "Also in this group": "同じグループの製品",
  "Request technical data": "技術資料を請求する",
  "Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.":
    "技術・安全データシート、包装形態、輸出書類について。必要とされる仕様をお知らせください。",
  "Request TDS / SDS": "TDS / SDS を請求する",
  "Back to the finder": "製品検索に戻る",

  // --- product finder -------------------------------------------------------
  "Filter by": "絞り込み",
  "Clear filters": "条件をクリア",
  "Search…": "検索…",
  "Search products": "製品を検索",
  "Clear search": "検索をクリア",
  "Displaying {range} of {total} Results": "{total} 件中 {range} 件を表示",
  "Displaying {total} Results": "{total} 件を表示",
  "No products match those filters. Clear a filter, or {ask}.":
    "条件に一致する製品がありません。条件を解除するか、{ask}。",
  "ask us about a custom grade": "カスタムグレードについてお問い合わせください",
  "Show more results": "さらに表示",
  "All divisions": "全事業部",
  "Automotive & transportation": "自動車・輸送",
  "Polymers & engineering plastics": "ポリマー・エンジニアリングプラスチック",
  "Electrical & electronics": "電気・電子",
  "Industrial machinery": "産業機械",
  "Coatings & composites": "コーティング・複合材料",
  "Pharmaceutical & agrochemical": "医薬・農薬",
  "Construction & infrastructure": "建設・インフラ",
  "Energy storage": "エネルギー貯蔵",
  "Nutraceutical, cosmetic & food": "ニュートラシューティカル・化粧品・食品",
  "Water treatment": "水処理",
  "Lithium & metal additives": "リチウム・金属添加剤",
  "Flame retardants": "難燃剤",
  "Intermediates": "中間体",
  "Polymers & resins": "ポリマー・樹脂",
  "Surfactants": "界面活性剤",
  "Battery & electronic": "電池・電子",
  "Pigments": "顔料",
  "Nutraceutical & cosmetic": "ニュートラシューティカル・化粧品",
  "Functional materials": "機能性材料",

  // --- banner headlines ------------------------------------------------------
  // The whole two-tone headline as one key; see components/HeroTitle.tsx for why
  // the light/bold split is not translated as two fragments.
  "About Cosmox Chemicals": "Cosmox Chemicals について",
  "Contact Us": "お問い合わせ",
  "Search for a Product": "製品を探す",
  "Industries We Serve": "対応する産業分野",

  // --- footer ---------------------------------------------------------------
  "Advanced chemical manufacturing and export — enabling industrial efficiency, safety and sustainability worldwide.":
    "先進的な化学品の製造と輸出により、世界の産業の効率、安全、そして持続可能性を支えます。",
  "Company": "会社情報",
  "Offering": "事業・製品",
  "Get in touch": "お問い合わせ",
  "Product finder": "製品検索",
  "All rights reserved.": "All rights reserved.",
  "Manufacturer & exporter of speciality chemicals":
    "スペシャリティケミカルの製造・輸出",
};

export default ja;
