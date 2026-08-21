/* 中文（简体）— China. See ./types.ts: chemical names, grade names and division
   numbers stay in the Latin original — that is what appears on the drum, the
   TDS and the customs paperwork. */

import type { Dict } from "./types";

const zh: Dict = {
  // --- navigation and header ------------------------------------------------
  "Home": "首页",
  "About us": "关于我们",
  "Divisions": "事业部",
  "Products": "产品",
  "Industries": "行业",
  "Applications": "应用",
  "Capabilities": "能力",
  "R&D": "研发",
  "Innovation": "创新",
  "Sustainability": "可持续发展",
  "Contact": "联系我们",
  "Product Finder": "产品查询",
  "Skip to content": "跳至正文",
  "Search the whole range": "搜索全部产品",
  "Visit page": "访问页面",
  "Sections": "版块",
  "On the home page": "首页内容",
  "Explore": "了解详情",
  "Previous": "上一个",
  "Next": "下一个",
  "Previous picture": "上一张图片",
  "Next picture": "下一张图片",
  "Business units": "业务单元",
  "Business Units": "业务单元",
  "Research & Development": "研究与开发",

  // --- country and language menu -------------------------------------------
  "Region & language": "地区与语言",
  "Change country and language": "更改国家和语言",
  "Choose where you are buying from. We manufacture in Surat and export worldwide — the site switches language with the country.":
    "请选择您的采购所在地。我们在苏拉特生产并出口至全球——网站语言随国家切换。",
  "Navigation and product titles are translated. Detailed page copy remains in English.":
    "导航与产品名称已翻译，页面详细内容仍为英文。",
  "Detected": "自动识别",
  "Search countries": "搜索国家/地区",
  "Search {n} countries": "搜索 {n} 个国家/地区",
  "Set from your device's time zone. Change it here at any time.": "已根据您设备的时区选择，可随时在此更改。",
  "Set from your browser's language. Change it here at any time.": "已根据您浏览器的语言选择，可随时在此更改。",
  "No country matches “{q}”. We export worldwide — write to us and we will route your enquiry.":
    "没有与“{q}”匹配的国家/地区。我们出口至全球——请与我们联系，我们会将您的询价转交相应团队。",

  // the six regions the panel groups the countries into
  "Asia Pacific": "亚太地区",
  "Europe": "欧洲",
  "Americas": "美洲",
  "Middle East": "中东",
  "Africa": "非洲",
  "Central Asia & Caucasus": "中亚与高加索",

  /* All seventy countries in `lib/i18n/locales.ts`, in the order the panel
     lists them. A country whose name is the same in this language is still
     written out, so a name added to the register shows up here as a gap
     rather than silently reading as translated. */
  // Asia Pacific
  "India": "印度",
  "China": "中国",
  "Japan": "日本",
  "South Korea": "韩国",
  "Taiwan": "台湾",
  "Vietnam": "越南",
  "Indonesia": "印度尼西亚",
  "Malaysia": "马来西亚",
  "Singapore": "新加坡",
  "Thailand": "泰国",
  "Philippines": "菲律宾",
  "Pakistan": "巴基斯坦",
  "Bangladesh": "孟加拉国",
  "Nepal": "尼泊尔",
  "Sri Lanka": "斯里兰卡",
  "Myanmar": "缅甸",
  "Cambodia": "柬埔寨",
  "Australia": "澳大利亚",
  "New Zealand": "新西兰",
  // Europe
  "United Kingdom": "英国",
  "Ireland": "爱尔兰",
  "Germany": "德国",
  "France": "法国",
  "Italy": "意大利",
  "Spain": "西班牙",
  "Portugal": "葡萄牙",
  "Netherlands": "荷兰",
  "Belgium": "比利时",
  "Switzerland": "瑞士",
  "Austria": "奥地利",
  "Sweden": "瑞典",
  "Norway": "挪威",
  "Denmark": "丹麦",
  "Finland": "芬兰",
  "Poland": "波兰",
  "Czech Republic": "捷克",
  "Hungary": "匈牙利",
  "Romania": "罗马尼亚",
  "Greece": "希腊",
  "Russia": "俄罗斯",
  "Ukraine": "乌克兰",
  "Turkey": "土耳其",
  // Americas
  "United States": "美国",
  "Canada": "加拿大",
  "Mexico": "墨西哥",
  "Brazil": "巴西",
  "Argentina": "阿根廷",
  "Chile": "智利",
  "Colombia": "哥伦比亚",
  "Peru": "秘鲁",
  // Middle East
  "United Arab Emirates": "阿联酋",
  "Saudi Arabia": "沙特阿拉伯",
  "Qatar": "卡塔尔",
  "Kuwait": "科威特",
  "Oman": "阿曼",
  "Bahrain": "巴林",
  "Israel": "以色列",
  // Africa
  "Egypt": "埃及",
  "Morocco": "摩洛哥",
  "Algeria": "阿尔及利亚",
  "Nigeria": "尼日利亚",
  "Ghana": "加纳",
  "Kenya": "肯尼亚",
  "Tanzania": "坦桑尼亚",
  "Ethiopia": "埃塞俄比亚",
  "South Africa": "南非",
  // Central Asia & Caucasus
  "Kazakhstan": "哈萨克斯坦",
  "Uzbekistan": "乌兹别克斯坦",
  "Azerbaijan": "阿塞拜疆",
  "Georgia": "格鲁吉亚",

  // --- nav dropdown introductions -------------------------------------------
  "Speciality chemistry manufactured and exported from Surat — ten divisions, 112 grades, one integrated plant.":
    "在苏拉特生产并出口的特种化学品——十个事业部、112个牌号、一座一体化工厂。",
  "Who we are: the mandate to manufacture and export chemistry that makes industry safer, cleaner and more efficient.":
    "我们是谁：以生产和出口化学品为使命，让工业更安全、更清洁、更高效。",
  "Ten specialised divisions under one roof, structured so scale never costs you technical attention.":
    "十个专业事业部同处一体，其架构确保规模从不以牺牲技术支持为代价。",
  "The full range — 112 grades built for high performance, consistency and regulatory confidence.":
    "完整产品线——112个牌号，为高性能、一致性与合规信心而生。",
  "The sectors we formulate for, and what each one asks of a speciality chemical supplier.":
    "我们所服务的行业，以及各行业对特种化学品供应商的要求。",
  "What our chemistry actually does in service — the end uses each grade was developed for.":
    "我们的化学品在实际使用中的作用——每个牌号所针对的最终用途。",
  "Manufacturing, laboratory, quality and export capability, described plainly.":
    "生产、实验室、质量与出口能力，直白呈现。",
  "The laboratories, instruments and synthesis work behind every grade we ship.":
    "每一个出货牌号背后的实验室、仪器与合成工作。",
  "Where the next products come from — in the flask, on the plant floor, and with customers.":
    "下一代产品从何而来——在烧瓶中、在车间里、在客户身边。",
  "How the plant, the portfolio and the people are being held to a lower footprint.":
    "工厂、产品组合与团队如何被要求实现更低的环境足迹。",

  // --- on-page jump links ---------------------------------------------------
  "What we make": "我们生产什么",
  "Our products": "我们的产品",
  "Find a product": "查找产品",
  "Ten divisions": "十个事业部",
  "Industries served": "服务行业",
  "A force for good": "向善的力量",
  "Latest media": "最新动态",
  "Global presence": "全球布局",
  "Manufacturing excellence": "卓越制造",
  "Research & development": "研究与开发",
  "Quality & compliance": "质量与合规",
  "Our vision": "我们的愿景",

  // --- topic titles ---------------------------------------------------------
  "Lubrication & Grease": "润滑与润滑脂",
  "Flame Retardancy": "阻燃",
  "Polymers & Engineering": "聚合物与工程",
  "Electrical & Electronics": "电气与电子",
  "Automotive": "汽车",
  "Industrial Machinery & Equipment": "工业机械与设备",
  "Coatings & Composites": "涂料与复合材料",
  "Pharmaceutical & Agrochemical": "医药与农化",
  "Energy Storage & Electronics": "储能与电子",
  "Nutraceutical, Cosmetic & Food": "营养保健、化妆品与食品",
  "Automotive & Transportation": "汽车与交通运输",
  "Polymers & Engineering Plastics": "聚合物与工程塑料",
  "Construction & Infrastructure": "建筑与基础设施",
  "Research-Driven Specialty Industries": "研发驱动的特种行业",
  "Lithium & Metal Additives": "锂与金属添加剂",
  "Inorganic & Flame-Retardant Chemicals": "无机与阻燃化学品",
  "Organic & Pharmaceutical Intermediates": "有机与医药中间体",
  "Polymers, Resins & High-Performance Materials": "聚合物、树脂与高性能材料",
  "Surfactants, Detergents & Bio-Based Chemicals": "表面活性剂、洗涤剂与生物基化学品",
  "Electrochemical, Battery & Electronic Chemicals": "电化学、电池与电子化学品",
  "Paints, Coatings & Pigments": "涂料、涂层与颜料",
  "Nutraceutical, Cosmetic & Food Chemicals": "营养保健、化妆品与食品化学品",
  "Water Treatment & Industrial Additives": "水处理与工业添加剂",
  "Functional & High-Performance Materials": "功能性与高性能材料",
  "Flame-Retardant & Inorganic Salts": "阻燃与无机盐",
  "Advanced Manufacturing": "先进制造",
  "Research & Development Excellence": "卓越研发",
  "Quality Assurance & Compliance": "质量保证与合规",
  "Technical & Application Support": "技术与应用支持",
  "Global Export & Logistics": "全球出口与物流",
  "Sustainability Integration": "可持续发展整合",
  "Product Innovation": "产品创新",
  "Process & Manufacturing Innovation": "工艺与制造创新",
  "Application & Industry-Specific Innovation": "应用与行业专项创新",
  "Sustainable & Green Innovation": "可持续与绿色创新",
  "Collaboration & Knowledge Innovation": "协作与知识创新",
  "Integrated Innovation Advantage": "一体化创新优势",
  "Product Innovation & Development": "产品创新与开发",
  "Advanced Analytical & Testing": "先进分析与检测",
  "Application-Specific Research": "应用专项研究",
  "Sustainable & Green Chemistry": "可持续与绿色化学",
  "Collaboration & Knowledge Sharing": "协作与知识共享",
  "Integrated R&D Excellence": "一体化卓越研发",
  "Environmental Stewardship": "环境责任",
  "Sustainable Product Innovation": "可持续产品创新",
  "Energy & Resource Optimisation": "能源与资源优化",
  "Health, Safety & Community": "健康、安全与社区",
  "Circular Economy & Waste": "循环经济与废弃物",
  "Integrated Sustainability Excellence": "一体化可持续卓越",

  // --- topic blurbs: applications -------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — for automotive, heavy machinery, industrial equipment, polymers & plastics":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · Calcium Stearate — 适用于汽车、重型机械、工业设备、聚合物与塑料",
  "Aluminium · Calcium · Magnesium Hypophosphite — for plastics, electronics, electrical, coatings and construction materials":
    "Aluminium · Calcium · Magnesium Hypophosphite — 适用于塑料、电子、电气、涂料与建筑材料",
  "Lithium soaps · Hypophosphite salts — for plastics, engineering materials, automotive and electronics":
    "锂皂 · 次磷酸盐 — 适用于塑料、工程材料、汽车与电子",
  "Aluminium Hypophosphite · Magnesium Hypophosphite — for consumer electronics, electrical appliances and industrial electronics":
    "Aluminium Hypophosphite · Magnesium Hypophosphite — 适用于消费电子、电器与工业电子",
  "Lithium soaps & greases · Hypophosphite salts · Polymer additives — for automotive components, commercial vehicles and heavy machinery":
    "锂皂与润滑脂 · 次磷酸盐 · 聚合物添加剂 — 适用于汽车零部件、商用车与重型机械",
  "Lithium soaps · Organic & pharmaceutical intermediates — for heavy machinery, manufacturing plants and industrial equipment":
    "锂皂 · 有机与医药中间体 — 适用于重型机械、生产工厂与工业设备",
  "Hypophosphite salts · Organic & pharmaceutical intermediates — for construction, industrial coatings and composites manufacturing":
    "次磷酸盐 · 有机与医药中间体 — 适用于建筑、工业涂料与复合材料制造",
  "1-Phenyl Oxide · Triazolo Pyridione — for pharmaceutical, agrochemical and industrial R&D":
    "1-Phenyl Oxide · Triazolo Pyridione — 适用于医药、农化与工业研发",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents — for batteries, energy storage, semiconductors and electronics":
    "Lithium Carbonate · 电解质盐 · TMAH · 电子级溶剂 — 适用于电池、储能、半导体与电子",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — for nutraceuticals, cosmetics, functional foods and pharmaceuticals":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA — 适用于营养保健品、化妆品、功能性食品与药品",

  // --- topic blurbs: industries ---------------------------------------------
  "Lithium Myristate · 12-Hydroxy Lithium Stearate · Hypophosphite salts · Polymer additives":
    "Lithium Myristate · 12-Hydroxy Lithium Stearate · 次磷酸盐 · 聚合物添加剂",
  "Lithium soaps · Aluminium Hypophosphite · Magnesium Hypophosphite":
    "锂皂 · Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Aluminium Hypophosphite · Magnesium Hypophosphite":
    "Aluminium Hypophosphite · Magnesium Hypophosphite",
  "Lithium soaps · Organic & pharmaceutical intermediates":
    "锂皂 · 有机与医药中间体",
  "Hypophosphite salts · Organic & pharmaceutical intermediates":
    "次磷酸盐 · 有机与医药中间体",
  "1-Phenyl Oxide · Triazolo Pyridione": "1-Phenyl Oxide · Triazolo Pyridione",
  "Lithium Carbonate · Electrolyte salts · TMAH · Electronic-grade solvents":
    "Lithium Carbonate · 电解质盐 · TMAH · 电子级溶剂",
  "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA":
    "Ascorbic Acid · Niacinamide · Hyaluronic Acid · PABA",
  "Graphene & nano additives · High-performance polymers · Functional coatings":
    "石墨烯与纳米添加剂 · 高性能聚合物 · 功能性涂层",

  // --- topic blurbs: business units -----------------------------------------
  "Manufacturing and export of lithium-based metal soaps and metal additives for industrial lubrication systems.":
    "生产并出口用于工业润滑系统的锂基金属皂与金属添加剂。",
  "Production and export of halogen-free inorganic flame-retardant salts and functional metal salts.":
    "生产并出口无卤无机阻燃盐与功能性金属盐。",
  "Manufacture and export of high-purity organic intermediates for pharmaceutical, agrochemical and industrial chemical applications.":
    "生产并出口用于医药、农化及工业化学应用的高纯度有机中间体。",
  "Advanced polymers, resins, adhesives, sealants and functional materials for industrial applications.":
    "面向工业应用的先进聚合物、树脂、胶粘剂、密封剂与功能材料。",
  "Industrial surfactants, emulsifiers, detergents and bio-based chemical solutions.":
    "工业表面活性剂、乳化剂、洗涤剂与生物基化学解决方案。",
  "Chemicals for lithium-ion batteries, electronics and high-purity semiconductor applications.":
    "用于锂离子电池、电子及高纯度半导体应用的化学品。",
  "High-value pigments, coatings intermediates and additive solutions.":
    "高价值颜料、涂料中间体与添加剂解决方案。",
  "Vitamins, nutraceuticals, cosmetic actives and functional food additives.":
    "维生素、营养保健品、化妆品活性成分与功能性食品添加剂。",
  "Chemicals for industrial water treatment, corrosion inhibition, anti-scaling and functional additives.":
    "用于工业水处理、缓蚀、阻垢的化学品与功能性添加剂。",
  "Niche chemicals for aerospace, automotive, electronics and industrial applications.":
    "面向航空航天、汽车、电子与工业应用的细分化学品。",

  // --- topic blurbs: product groups -----------------------------------------
  "High-performance thickeners for automotive and industrial greases, with excellent thermal stability, water resistance and mechanical durability.":
    "用于汽车与工业润滑脂的高性能增稠剂，具有优异的热稳定性、抗水性与机械耐久性。",
  "Halogen-free additives that enhance fire resistance in plastics, cables and coatings while reducing smoke and toxicity.":
    "无卤添加剂，可提升塑料、电缆与涂层的阻燃性，同时降低烟雾与毒性。",
  "High-purity compounds for pharmaceuticals, agrochemicals and industrial applications — scalable from lab research to industrial production without compromising quality.":
    "用于医药、农化与工业应用的高纯度化合物——可从实验室研究放大至工业化生产，品质始终如一。",
  "Advanced polymers and resins for adhesives, coatings and functional materials, including heat-resistant grades for aerospace and automotive use.":
    "用于胶粘剂、涂料与功能材料的先进聚合物与树脂，包括适用于航空航天与汽车的耐热牌号。",
  "Industrial and green surfactants, emulsifiers and wetting agents, plus eco-friendly plant-based intermediates and solvents.":
    "工业与绿色表面活性剂、乳化剂与润湿剂，以及环保型植物基中间体与溶剂。",
  "Lithium-ion battery salts, high-purity solvents and semiconductor chemicals with ultra-high purity and application-specific performance.":
    "锂离子电池盐、高纯度溶剂与半导体化学品，具备超高纯度与针对特定应用的性能。",
  "Organic and inorganic pigments, coating additives and UV stabilisers delivering consistent colour, dispersion and performance.":
    "有机与无机颜料、涂料助剂与紫外线稳定剂，提供稳定的色彩、分散性与性能。",
  "High-purity intermediates for R&D and commercial applications, with custom formulations and application-specific support.":
    "用于研发与商业应用的高纯度中间体，提供定制配方与针对应用的技术支持。",
  "Customised formulations for operational efficiency and environmental compliance in cooling towers, power plants and process industries.":
    "为冷却塔、电厂与流程工业量身定制的配方，兼顾运行效率与环保合规。",
  "R&D-driven solutions for next-generation material challenges across aerospace, automotive, electronics and advanced industry.":
    "以研发驱动的解决方案，应对航空航天、汽车、电子与先进工业的新一代材料挑战。",

  // --- topic and grade page chrome ------------------------------------------
  "The range": "产品线",
  "Grades in this group": "本组牌号",
  "All applications": "全部应用",
  "All industries": "全部行业",
  "All business units": "全部业务单元",
  "All products": "全部产品",
  "All capabilities": "全部能力",
  "All innovation": "全部创新",
  "All r&d": "全部研发",
  "All sustainability": "全部可持续发展",
  "Talk to our technical team": "联系我们的技术团队",
  "Technical data, packaging options and export documentation — tell us what you need and the right team will come back to you.":
    "技术数据、包装选项与出口文件——请告诉我们您的需求，相关团队将与您联系。",
  "Start a conversation": "开始洽谈",
  "Division": "事业部",
  "Product group": "产品组",
  "Product name": "产品名称",
  "All product names": "所有产品名称",
  "Filtered under": "所属筛选类别",
  "Also in this group": "本组其他产品",
  "Request technical data": "索取技术资料",
  "Technical and safety documentation, packaging options and export paperwork — tell us the specification you need to hit.":
    "技术与安全文件、包装选项与出口单证——请告知您需要达到的规格。",
  "Request TDS / SDS": "索取 TDS / SDS",
  "Back to the finder": "返回产品查询",

  // --- product finder -------------------------------------------------------
  "Filter by": "筛选条件",
  "Clear filters": "清除筛选",
  "Search…": "搜索…",
  "Search products": "搜索产品",
  "Clear search": "清除搜索",
  "Displaying {range} of {total} Results": "显示第 {range} 条，共 {total} 条结果",
  "Displaying {total} Results": "显示 {total} 条结果",
  "No products match those filters. Clear a filter, or {ask}.":
    "没有产品符合这些筛选条件。请清除某个筛选条件，或{ask}。",
  "ask us about a custom grade": "向我们咨询定制牌号",
  "Show more results": "显示更多结果",
  "All divisions": "全部事业部",
  "Automotive & transportation": "汽车与交通运输",
  "Polymers & engineering plastics": "聚合物与工程塑料",
  "Electrical & electronics": "电气与电子",
  "Industrial machinery": "工业机械",
  "Coatings & composites": "涂料与复合材料",
  "Pharmaceutical & agrochemical": "医药与农化",
  "Construction & infrastructure": "建筑与基础设施",
  "Energy storage": "储能",
  "Nutraceutical, cosmetic & food": "营养保健、化妆品与食品",
  "Water treatment": "水处理",
  "Lithium & metal additives": "锂与金属添加剂",
  "Flame retardants": "阻燃剂",
  "Intermediates": "中间体",
  "Polymers & resins": "聚合物与树脂",
  "Surfactants": "表面活性剂",
  "Battery & electronic": "电池与电子",
  "Pigments": "颜料",
  "Nutraceutical & cosmetic": "营养保健与化妆品",
  "Functional materials": "功能材料",

  // --- banner headlines ------------------------------------------------------
  // The whole two-tone headline as one key; see components/HeroTitle.tsx for why
  // the light/bold split is not translated as two fragments.
  "About Cosmox Chemicals": "关于 Cosmox Chemicals",
  "Contact Us": "联系我们",
  "Search for a Product": "查找产品",
  "Industries We Serve": "我们服务的行业",

  // --- footer ---------------------------------------------------------------
  "Advanced chemical manufacturing and export — enabling industrial efficiency, safety and sustainability worldwide.":
    "先进化学品制造与出口——助力全球工业实现效率、安全与可持续发展。",
  "Company": "公司",
  "Offering": "业务与产品",
  "Get in touch": "联系我们",
  "Product finder": "产品查询",
  "All rights reserved.": "版权所有。",
  "Manufacturer & exporter of speciality chemicals": "特种化学品制造商与出口商",
};

export default zh;
