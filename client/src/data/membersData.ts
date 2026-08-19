export type VerificationLink = {
  label: string;
  url: string;
  type: "ECI Affidavit" | "ADR MyNeta" | "PRS India" | "Official Portal";
};

export type HierarchyTier =
  | "Tier 1: Supreme / National Leadership"
  | "Tier 2: Cabinet & Chief Ministers"
  | "Tier 3: Party Executives & Secretaries"
  | "Tier 4: Key Members of Parliament";

export type LeaderMember = {
  id: string;
  name: string;
  office: string;
  party: string;
  partyName: string;
  hierarchyRole: string;
  avatar: string;
  accent: string;
  tier: HierarchyTier;
  background: string;
  previousParty?: string;
  joinedDate?: string;
  specialNotice?: string;
  education: {
    qualification: string;
    institution: string;
    year: string;
    details: string;
    link: VerificationLink;
  };
  financials: {
    assets: string;
    liabilities: string;
    year: string;
    details: string;
    link: VerificationLink;
  };
  criminalHistory: {
    totalCases: number;
    convictions: number;
    summary: string;
    details: string;
    link: VerificationLink;
  };
  developmentContributions: {
    title: string;
    description: string;
    impact: string;
  }[];
  verificationLinks: VerificationLink[];
};

export const ALL_MEMBERS: LeaderMember[] = [
  // ==================== 1. BJP (Bharatiya Janata Party) ====================
  {
    id: "narendra-modi",
    name: "Narendra Modi",
    office: "Prime Minister of India",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Supreme Leader & Prime Minister",
    avatar: "/avatars/narendra-modi.png",
    accent: "#e18a37",
    tier: "Tier 1: Supreme / National Leadership",
    background: "14th Prime Minister of India (2014–present). Served as Chief Minister of Gujarat (2001–2014). Represents Varanasi Lok Sabha constituency.",
    education: {
      qualification: "Post Graduate (MA)",
      institution: "Gujarat University (MA, 1983) & Delhi University (BA, 1978)",
      year: "1983",
      details: "Political Science degree. Sworn 2024 ECI affidavit verified.",
      link: { label: "ECI Affidavit 2024", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹3,02,06,889 (₹3.02 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Bank deposits and government savings certificates.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases declared in sworn election filings.",
      details: "No active charges under BNS/IPC.",
      link: { label: "ECI Affidavit 2024", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Digital Public Infrastructure", description: "UPI and Aadhaar stack adoption globally.", impact: "100B+ annual transactions" },
      { title: "PM Awas Yojana", description: "30 million houses constructed for low-income families.", impact: "30M+ homes" }
    ],
    verificationLinks: [
      { label: "ECI 2024 Sworn Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" },
      { label: "PMO Portal Profile", url: "https://www.pmindia.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "nitin-nabin",
    name: "Nitin Nabin",
    office: "National President, BJP",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "National Party President",
    avatar: "/avatars/nitin-nabin.png",
    accent: "#e18a37",
    tier: "Tier 1: Supreme / National Leadership",
    background: "National President of Bharatiya Janata Party. Key organizational leader and strategist driving national campaigns.",
    education: {
      qualification: "Graduate Professional (B.E / B.Tech)",
      institution: "Birla Institute of Technology",
      year: "2002",
      details: "Engineering graduate with extensive organizational record.",
      link: { label: "ECI Candidate Portal", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹4,12,00,000 (₹4.12 Cr)",
      liabilities: "₹18,50,000",
      year: "2024 Affidavit",
      details: "Movable deposits and real estate holdings.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "No criminal cases declared.",
      details: "Zero pending cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "BJP Youth & General Membership Drive", description: "Expanded active membership to 140M+ across 28 states.", impact: "140M+ cadre network" }
    ],
    verificationLinks: [
      { label: "BJP Official Portal", url: "https://www.bjp.org/", type: "Official Portal" }
    ]
  },
  {
    id: "amit-shah",
    name: "Amit Shah",
    office: "Union Home Minister",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Union Cabinet Minister (Home & Cooperation)",
    avatar: "/avatars/amit-shah.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "Union Minister of Home Affairs (2019–present) and Minister of Cooperation. Represents Gandhinagar, Gujarat in Lok Sabha.",
    education: {
      qualification: "Graduate (B.Sc)",
      institution: "CU Shah Science College, Ahmedabad",
      year: "1984",
      details: "Biochemistry graduate.",
      link: { label: "ECI Affidavit 2024", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹36,00,00,000 (₹36 Cr)",
      liabilities: "₹15,00,000",
      year: "2024 Affidavit",
      details: "Inherited property and investments.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero active criminal cases.",
      details: "Discharged by CBI Court in 2014; zero pending cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Criminal Code Modernization (BNSS 2023)", description: "Enacted Bharatiya Nyaya Sanhita, replacing IPC 1860.", impact: "National justice reform" }
    ],
    verificationLinks: [
      { label: "MHA Portal", url: "https://www.mha.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "rajnath-singh",
    name: "Rajnath Singh",
    office: "Union Defence Minister",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Union Cabinet Minister (Defence)",
    avatar: "/avatars/rajnath-singh.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "Union Minister of Defence (2019–present). Former UP Chief Minister and BJP National President. Represents Lucknow MP constituency.",
    education: {
      qualification: "Post Graduate (M.Sc Physics)",
      institution: "Gorakhpur University",
      year: "1971",
      details: "Master of Science in Physics; former physics lecturer.",
      link: { label: "ECI Affidavit 2024", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹6,15,00,000 (₹6.15 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Agricultural land in Chandauli and bank savings.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero declared cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Defence Indigenization (Make in India)", description: "Increased domestic defence manufacturing to ₹1.27 Lakh Cr.", impact: "75% local procurement" }
    ],
    verificationLinks: [
      { label: "Mod Ministry Portal", url: "https://www.mod.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "nirmala-sitharaman",
    name: "Nirmala Sitharaman",
    office: "Union Finance Minister",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Union Cabinet Minister (Finance & Corporate Affairs)",
    avatar: "/avatars/nirmala-sitharaman.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "Union Finance Minister (2019–present). Former Defence Minister. Senior Leader & Rajya Sabha MP.",
    education: {
      qualification: "Post Graduate (M.A & M.Phil Economics)",
      institution: "Jawaharlal Nehru University (JNU), New Delhi",
      year: "1984",
      details: "Master of Arts and M.Phil in Economics from JNU.",
      link: { label: "Rajya Sabha Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹2,63,00,000 (₹2.63 Cr)",
      liabilities: "₹30,40,000",
      year: "2024 Affidavit",
      details: "Residential land in Hyderabad and bank savings.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "GST & Corporate Tax Reforms", description: "Streamlined national tax regime and record monthly GST collections.", impact: "₹2.1 Lakh Cr monthly GST" }
    ],
    verificationLinks: [
      { label: "Ministry of Finance", url: "https://finmin.nic.in/", type: "Official Portal" }
    ]
  },
  {
    id: "s-jaishankar",
    name: "S. Jaishankar",
    office: "Union External Affairs Minister",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Union Cabinet Minister (External Affairs)",
    avatar: "/avatars/s-jaishankar.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "Union External Affairs Minister (2019–present). Career diplomat and former Foreign Secretary of India. Rajya Sabha MP.",
    education: {
      qualification: "Doctorate (Ph.D & M.Phil)",
      institution: "Jawaharlal Nehru University (JNU)",
      year: "1980",
      details: "Ph.D in International Relations with focus on Nuclear Diplomacy.",
      link: { label: "Rajya Sabha Record", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹15,80,00,000 (₹15.8 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Investments and urban residential properties.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "G20 Presidency & Global Outreach", description: "Engineered African Union inclusion into G20 and strategic multipolar diplomacy.", impact: "G20 Leader Consensus" }
    ],
    verificationLinks: [
      { label: "MEA Portal", url: "https://www.mea.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "jp-nadda",
    name: "J.P. Nadda",
    office: "Senior BJP Leader & Health Minister",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Senior BJP Leader / Former National President",
    avatar: "/avatars/jp-nadda.png",
    accent: "#e18a37",
    tier: "Tier 1: Supreme / National Leadership",
    background: "Union Minister of Health & Family Welfare. Former BJP National President (2020–2026). Rajya Sabha MP.",
    education: {
      qualification: "Graduate Professional (LLB)",
      institution: "Himachal Pradesh University (LLB) & St. Xavier's Patna",
      year: "1984",
      details: "Law graduate from HPU Shimla.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹9,36,44,112 (₹9.36 Cr)",
      liabilities: "₹11,20,000",
      year: "2024 Affidavit",
      details: "Agricultural land and bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero declared cases.",
      details: "No active criminal cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "AIIMS Network Expansion", description: "Spearheaded commissioning of 15 new AIIMS institutes nationwide.", impact: "15 new AIIMS operational" }
    ],
    verificationLinks: [
      { label: "MoHFW Portal", url: "https://mohfw.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "yogi-adityanath",
    name: "Yogi Adityanath",
    office: "Chief Minister, Uttar Pradesh",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Chief Minister (Uttar Pradesh)",
    avatar: "/avatars/yogi-adityanath.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "21st Chief Minister of Uttar Pradesh (2017–present). Head Priest of Gorakhnath Math. 5-term former Gorakhpur Lok Sabha MP.",
    education: {
      qualification: "Graduate (B.Sc Mathematics)",
      institution: "Hemwati Nandan Bahuguna Garhwal University",
      year: "1992",
      details: "Bachelor of Science in Mathematics.",
      link: { label: "UP Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,54,00,000 (₹1.54 Cr)",
      liabilities: "Nil",
      year: "2022 Affidavit",
      details: "Bank deposits and personal weapons; no land owned in individual name.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero active criminal cases declared in sworn election filings.",
      details: "Cases withdrawn under state executive order prior to 2019; zero pending cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Expressway & Industrial Network", description: "Built Purvanchal, Bundelkhand, and Ganga Expressways across UP.", impact: "1,200 km+ Expressways" }
    ],
    verificationLinks: [
      { label: "UP CM Official Portal", url: "https://up.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "himanta-biswa-sarma",
    name: "Himanta Biswa Sarma",
    office: "Chief Minister, Assam",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Chief Minister (Assam)",
    avatar: "/avatars/himanta-biswa-sarma.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "15th Chief Minister of Assam (2021–present). Convenor of North-East Democratic Alliance (NEDA).",
    education: {
      qualification: "Doctorate (Ph.D & LLB)",
      institution: "Gauhati University (Ph.D & MA) & Government Law College",
      year: "2006",
      details: "Doctorate in Political Science and Law degree.",
      link: { label: "ECI Assam Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹17,20,00,000 (₹17.2 Cr)",
      liabilities: "₹4,10,00,000",
      year: "2021 Affidavit",
      details: "Spouse & self assets including media company shares and land.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero active criminal cases declared.",
      details: "No active convictions or charges.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Orunodoi Cash Transfer Scheme", description: "Direct monthly transfer to 2.5 million low-income women in Assam.", impact: "2.5M women beneficiaries" }
    ],
    verificationLinks: [
      { label: "Assam Portal", url: "https://assam.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "devendra-fadnavis",
    name: "Devendra Fadnavis",
    office: "Chief Minister, Maharashtra",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Chief Minister (Maharashtra)",
    avatar: "/avatars/devendra-fadnavis.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "Chief Minister of Maharashtra (2026–present). Former CM (2014–2019) & Deputy CM (2022–2026). MLA representing Nagpur South West.",
    education: {
      qualification: "Graduate Professional (LLB & Post Graduate Diploma)",
      institution: "Nagpur University (LLB) & D.S. National Institute of Business Management",
      year: "1992",
      details: "Degree in Law and Business Management Diploma.",
      link: { label: "Maharashtra Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹5,24,00,000 (₹5.24 Cr)",
      liabilities: "₹62,00,000",
      year: "2024 Affidavit",
      details: "Agricultural land and bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 4,
      convictions: 0,
      summary: "4 declared political demonstration cases; zero convictions.",
      details: "Cases filed during public rallies and political agitations in Nagpur.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Samruddhi Mahamarg Expressway", description: "701 km Super Communication Expressway connecting Mumbai and Nagpur.", impact: "701 km Expressway" }
    ],
    verificationLinks: [
      { label: "Maharashtra Govt Portal", url: "https://www.maharashtra.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "mohan-yadav",
    name: "Mohan Yadav",
    office: "Chief Minister, Madhya Pradesh",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Chief Minister (Madhya Pradesh)",
    avatar: "/avatars/mohan-yadav.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "19th Chief Minister of Madhya Pradesh (2023–present). Former MP Higher Education Minister and MLA from Ujjain South.",
    education: {
      qualification: "Doctorate (Ph.D, MBA & LLB)",
      institution: "Vikram University, Ujjain",
      year: "2010",
      details: "Ph.D, MBA, and LLB degrees from Vikram University.",
      link: { label: "MP Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹42,00,00,000 (₹42 Cr)",
      liabilities: "₹9,00,00,000",
      year: "2023 Affidavit",
      details: "Agricultural land, commercial assets, and family business.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 political demonstration case; zero convictions.",
      details: "Case pertained to student union agitation.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Ujjain Mahakal Lok Expansion", description: "Transformed religious corridor and regional tourism infrastructure.", impact: "₹856 Cr Corridor Project" }
    ],
    verificationLinks: [
      { label: "MP Govt Portal", url: "https://mp.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "vishnu-deo-sai",
    name: "Vishnu Deo Sai",
    office: "Chief Minister, Chhattisgarh",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Chief Minister (Chhattisgarh)",
    avatar: "/avatars/vishnu-deo-sai.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "4th Chief Minister of Chhattisgarh (2023–present). Former Union Minister of State for Mines & Steel and 4-term MP.",
    education: {
      qualification: "Higher Secondary (10th)",
      institution: "Loyola Higher Secondary School, Kunkuri",
      year: "1978",
      details: "Matriculation / Higher Secondary completed.",
      link: { label: "Chhattisgarh Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹3,80,00,000 (₹3.8 Cr)",
      liabilities: "₹3,50,000",
      year: "2023 Affidavit",
      details: "Ancestral agricultural land and bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Mahtari Vandan Yojana", description: "₹1,000 monthly financial assistance to 7 million married women in Chhattisgarh.", impact: "7M women beneficiaries" }
    ],
    verificationLinks: [
      { label: "CG Portal", url: "https://cgstate.gov.in/", type: "Official Portal" }
    ]
  },

  // ==================== RAGHAV CHADHA (SPECIAL TRANSITION RECORD) ====================
  {
    id: "raghav-chadha",
    name: "Raghav Chadha",
    office: "Member of Parliament, Rajya Sabha",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Rajya Sabha MP (Joined BJP April 2026)",
    avatar: "/avatars/raghav-chadha.png",
    accent: "#e18a37",
    tier: "Tier 4: Key Members of Parliament",
    previousParty: "AAP (Aam Aadmi Party)",
    joinedDate: "April 24, 2026",
    specialNotice: "TRANSITION RECORD: Switched from AAP to BJP on April 24, 2026. Formerly Deputy Leader of AAP in Rajya Sabha before removal. Currently sits on treasury benches as a BJP MP.",
    background: "Rajya Sabha MP representing Punjab. Joined BJP on April 24, 2026. Previously served as AAP National Spokesperson, Deputy Leader in Rajya Sabha, and Delhi MLA (Rajendra Nagar). Chartered Accountant by profession.",
    education: {
      qualification: "Graduate Professional (Chartered Accountant)",
      institution: "Institute of Chartered Accountants of India (ICAI) & London School of Economics (LSE)",
      year: "2011",
      details: "Qualified Chartered Accountant (ICAI) with Executive Course at LSE.",
      link: { label: "Rajya Sabha Sworn Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹3,69,00,000 (₹3.69 Cr)",
      liabilities: "Nil",
      year: "2022 Affidavit",
      details: "Bank deposits, Maruti Swift car, and residential flat in Delhi.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 2,
      convictions: 0,
      summary: "2 declared political agitation cases; zero convictions.",
      details: "Cases pertain to peaceful political demonstrations in Delhi.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Jal Jeevan Mission Oversight & CA Audit Reforms", description: "Spearheaded financial accountability debates and urban water infrastructure reforms in Parliament.", impact: "Parliamentary Finance Debates" }
    ],
    verificationLinks: [
      { label: "Rajya Sabha Official Profile", url: "https://sansad.in/rs", type: "Official Portal" },
      { label: "PRS Legislative MP Track", url: "https://prsindia.org/", type: "PRS India" }
    ]
  },

  // ==================== 2. INC / CONGRESS ====================
  {
    id: "mallikarjun-kharge",
    name: "Mallikarjun Kharge",
    office: "Congress President & Leader of Opposition (RS)",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Congress President & Rajya Sabha LOP",
    avatar: "/avatars/mallikarjun-kharge.png",
    accent: "#4d73b4",
    tier: "Tier 1: Supreme / National Leadership",
    background: "President of Indian National Congress (2022–present). Leader of Opposition in Rajya Sabha. 50+ year veteran politician, former Union Railway and Labour Minister.",
    education: {
      qualification: "Graduate Professional (LLB)",
      institution: "Government Law College, Kalaburagi",
      year: "1966",
      details: "Degree in Law from Kalaburagi.",
      link: { label: "Rajya Sabha Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹21,00,00,000 (₹21 Cr)",
      liabilities: "Nil",
      year: "2020 Affidavit",
      details: "Agricultural land and residential assets in Karnataka.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Article 371(J) Hyderabad-Karnataka Special Status", description: "Passed constitutional amendment giving job and education reservations to backward Karnataka region.", impact: "Hyderabad-Karnataka Reservation" }
    ],
    verificationLinks: [
      { label: "INC Official Portal", url: "https://inc.in/", type: "Official Portal" }
    ]
  },
  {
    id: "rahul-gandhi",
    name: "Rahul Gandhi",
    office: "Leader of Opposition, Lok Sabha",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Leader of Opposition (Lok Sabha)",
    avatar: "/avatars/rahul-gandhi.png",
    accent: "#4d73b4",
    tier: "Tier 1: Supreme / National Leadership",
    background: "Leader of Opposition in 18th Lok Sabha (2024–present). MP from Rae Bareli (previously Wayanad & Amethi). Former Congress President (2017–2019). Led Bharat Jodo Yatra.",
    education: {
      qualification: "Post Graduate (M.Phil)",
      institution: "Trinity College, Cambridge University (M.Phil, 1995) & Rollins College (BA, 1994)",
      year: "1995",
      details: "M.Phil in Development Studies from Cambridge.",
      link: { label: "ECI 2024 Sworn Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹20,39,00,000 (₹20.39 Cr)",
      liabilities: "₹49,70,00,000",
      year: "2024 Affidavit",
      details: "Stock market investments, mutual funds, commercial building in Gurugram.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 18,
      convictions: 0,
      summary: "18 declared political defamation and protest cases; conviction stayed by Supreme Court.",
      details: "Defamation conviction in Modi surname case stayed by Supreme Court in 2023.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "MGNREGA & RTI Act Legislation Support", description: "Championed right to employment and right to information enactments.", impact: "Rights-based legal framework" }
    ],
    verificationLinks: [
      { label: "Lok Sabha Profile", url: "https://sansad.in/ls", type: "Official Portal" },
      { label: "PRS India MP Track", url: "https://prsindia.org/", type: "PRS India" }
    ]
  },
  {
    id: "sonia-gandhi",
    name: "Sonia Gandhi",
    office: "Senior Congress Leader & Rajya Sabha MP",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Senior Leadership & Parliamentary Party Chairperson",
    avatar: "/avatars/sonia-gandhi.png",
    accent: "#4d73b4",
    tier: "Tier 1: Supreme / National Leadership",
    background: "Chairperson of Congress Parliamentary Party. Longest-serving Congress President (1998–2017, 2019–2022). Rajya Sabha MP representing Rajasthan.",
    education: {
      qualification: "Diploma / Language Certificate",
      institution: "Istituto Santa Teresa, Turin & Bell Educational Trust, Cambridge",
      year: "1965",
      details: "Certificate in English Language studies.",
      link: { label: "ECI Affidavit 2024", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹12,53,00,000 (₹12.53 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Government bonds, bank deposits, and ancestral Italian property interest.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 2,
      convictions: 0,
      summary: "2 declared cases (National Herald private complaint); zero convictions.",
      details: "Pending before trial court; on bail.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "National Advisory Council (NAC) Social Rights Laws", description: "Pioneered Food Security Act, MGNREGA, and Right to Education.", impact: "Landmark welfare laws" }
    ],
    verificationLinks: [
      { label: "Rajya Sabha Profile", url: "https://sansad.in/rs", type: "Official Portal" }
    ]
  },
  {
    id: "priyanka-gandhi",
    name: "Priyanka Gandhi Vadra",
    office: "Member of Parliament, Lok Sabha",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Lok Sabha MP & General Secretary",
    avatar: "/avatars/priyanka-gandhi.png",
    accent: "#4d73b4",
    tier: "Tier 4: Key Members of Parliament",
    background: "Lok Sabha MP representing Wayanad constituency (elected 2024). All India Congress Committee General Secretary.",
    education: {
      qualification: "Post Graduate (MA Buddhist Studies)",
      institution: "University of Sunderland (BA Psychology) & University of Delhi (MA)",
      year: "2010",
      details: "MA in Buddhist Studies from Delhi University.",
      link: { label: "Wayanad 2024 Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹12,00,00,000 (₹12 Cr)",
      liabilities: "₹15,00,000",
      year: "2024 Affidavit",
      details: "Agricultural land in Shimla and mutual fund investments.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 2,
      convictions: 0,
      summary: "2 declared political agitation cases in UP; zero convictions.",
      details: "Protest cases during Hathras and Lakhimpur Kheri marches.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Ladki Hoon Lad Sakti Hoon Campaign", description: "Pioneered 40% candidate ticket allocation to women in state assembly elections.", impact: "Women empowerment model" }
    ],
    verificationLinks: [
      { label: "Lok Sabha Profile", url: "https://sansad.in/ls", type: "Official Portal" }
    ]
  },
  {
    id: "kc-venugopal",
    name: "K. C. Venugopal",
    office: "General Secretary (Organisation), INC",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "General Secretary & Lok Sabha MP",
    avatar: "/avatars/kc-venugopal.png",
    accent: "#4d73b4",
    tier: "Tier 3: Party Executives & Secretaries",
    background: "AICC General Secretary in charge of Organisation. Lok Sabha MP from Alappuzha, Kerala. Former Union Minister of State for Power.",
    education: {
      qualification: "Post Graduate (M.Sc Mathematics)",
      institution: "Payyanur College, Calicut University",
      year: "1988",
      details: "Master of Science in Mathematics.",
      link: { label: "ECI Affidavit 2024", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹3,40,00,000 (₹3.4 Cr)",
      liabilities: "₹45,00,000",
      year: "2024 Affidavit",
      details: "Residential house in Kannur and savings.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 declared political protest case; zero convictions.",
      details: "Protest in Trivandrum.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "National Campaign Management", description: "Coordinated Bharat Jodo Yatra logistics across 12 states.", impact: "4,000 km national march" }
    ],
    verificationLinks: [
      { label: "INC Portal", url: "https://inc.in/", type: "Official Portal" }
    ]
  },
  {
    id: "shashi-tharoor",
    name: "Shashi Tharoor",
    office: "Member of Parliament, Thiruvananthapuram",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Lok Sabha MP & Standing Committee Chair",
    avatar: "/avatars/shashi-tharoor.png",
    accent: "#4d73b4",
    tier: "Tier 4: Key Members of Parliament",
    background: "4-term Lok Sabha MP from Thiruvananthapuram (2009–present). Former UN Under-Secretary-General and Union Minister of State for External Affairs.",
    education: {
      qualification: "Doctorate (Ph.D)",
      institution: "Fletcher School of Law and Diplomacy, Tufts University",
      year: "1978",
      details: "Completed Ph.D at age 22 at Tufts University.",
      link: { label: "ECI 2024 Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹56,00,00,000 (₹56 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Foreign deposits, book royalty investments, and properties.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Discharged in Sunanda Pushkar case by Delhi Court in 2021; zero active criminal cases.",
      details: "Clean record; discharged of all allegations.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Parliamentary Standing Committee Reforms", description: "Chaired External Affairs and Information Technology committees.", impact: "Pioneered Privacy Data Reports" }
    ],
    verificationLinks: [
      { label: "PRS India Tharoor Track", url: "https://prsindia.org/", type: "PRS India" }
    ]
  },
  {
    id: "sachin-pilot",
    name: "Sachin Pilot",
    office: "Senior Congress Leader & General Secretary",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "AICC General Secretary & MLA",
    avatar: "/avatars/sachin-pilot.png",
    accent: "#4d73b4",
    tier: "Tier 3: Party Executives & Secretaries",
    background: "AICC General Secretary in charge of Chhattisgarh. Former Deputy Chief Minister of Rajasthan (2018–2020) and Union Minister. MLA from Tonk.",
    education: {
      qualification: "Post Graduate (MBA)",
      institution: "Wharton School, University of Pennsylvania (MBA) & St. Stephen's College (BA)",
      year: "2001",
      details: "MBA from Wharton Business School.",
      link: { label: "Rajasthan Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹6,50,00,000 (₹6.5 Cr)",
      liabilities: "Nil",
      year: "2023 Affidavit",
      details: "Bank deposits and shares.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Panchayati Raj Rural Digitalization", description: "Engineered e-Panchayat software rollout during tenure as MoS Corporate & IT.", impact: "250k Panchayats digitized" }
    ],
    verificationLinks: [
      { label: "INC Portal", url: "https://inc.in/", type: "Official Portal" }
    ]
  },
  {
    id: "ashok-gehlot",
    name: "Ashok Gehlot",
    office: "Senior Congress Leader & Former Rajasthan CM",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Senior Leader & Former Chief Minister",
    avatar: "/avatars/ashok-gehlot.png",
    accent: "#4d73b4",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "3-term Chief Minister of Rajasthan (1998–2003, 2008–2013, 2018–2023). MLA from Sardarpura, Jodhpur.",
    education: {
      qualification: "Graduate Professional (LLB & M.Sc Economics)",
      institution: "Jai Narain Vyas University, Jodhpur",
      year: "1976",
      details: "Science, Law, and Economics degrees.",
      link: { label: "Rajasthan Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹11,68,00,000 (₹11.68 Cr)",
      liabilities: "Nil",
      year: "2023 Affidavit",
      details: "Residential house in Jodhpur and bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Chiranjeevi Health Insurance Scheme", description: "Provided ₹25 Lakh free universal health insurance per family in Rajasthan.", impact: "13M Rajasthan families" }
    ],
    verificationLinks: [
      { label: "Rajasthan Assembly Record", url: "https://assembly.rajasthan.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "siddaramaiah",
    name: "Siddaramaiah",
    office: "Chief Minister, Karnataka",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Chief Minister (Karnataka)",
    avatar: "/avatars/siddaramaiah.png",
    accent: "#4d73b4",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "24th Chief Minister of Karnataka (2013–2018, 2023–present). Presented 15 state budgets as Finance Minister. MLA from Varuna.",
    education: {
      qualification: "Graduate Professional (B.Sc & LLB)",
      institution: "Yuvaraja's College & Sharada Vilas Law College, Mysuru",
      year: "1971",
      details: "Science and Law graduate.",
      link: { label: "Karnataka Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹51,00,00,000 (₹51 Cr)",
      liabilities: "₹23,00,00,000",
      year: "2023 Affidavit",
      details: "Spouse & self land assets in Mysuru and Bengaluru.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 13,
      convictions: 0,
      summary: "13 political protest cases; zero convictions.",
      details: "Cases relate to farmer marches and public agitations.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "5 Anna Guarantee Schemes", description: "Free bus travel for women (Shakti), 200 units power (Gruha Jyoti), ₹2,000 monthly (Gruha Lakshmi).", impact: "12M Karnataka households" }
    ],
    verificationLinks: [
      { label: "Karnataka CM Portal", url: "https://karnataka.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "revanth-reddy",
    name: "Revanth Reddy",
    office: "Chief Minister, Telangana",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Chief Minister (Telangana)",
    avatar: "/avatars/revanth-reddy.png",
    accent: "#4d73b4",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "2nd Chief Minister of Telangana (2023–present). TPCC President. Former MP from Malkajgiri and MLA from Kodangal.",
    education: {
      qualification: "Graduate (B.A)",
      institution: "AV College, Osmania University, Hyderabad",
      year: "1992",
      details: "Bachelor of Arts from Osmania University.",
      link: { label: "Telangana Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹30,00,00,000 (₹30 Cr)",
      liabilities: "₹3,10,00,000",
      year: "2023 Affidavit",
      details: "Urban plots and spouse assets.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 89,
      convictions: 0,
      summary: "89 declared political cases (Telangana movement & protest rallies); zero convictions.",
      details: "Pending in special MP/MLA court; on bail.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Rythu Bharosa & Crop Loan Waiver", description: "Waived ₹2 Lakh farm loans and launched Mahalakshmi scheme.", impact: "4M Telangana farmers" }
    ],
    verificationLinks: [
      { label: "Telangana Govt Portal", url: "https://telangana.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "sukhvinder-sukhu",
    name: "Sukhvinder Singh Sukhu",
    office: "Chief Minister, Himachal Pradesh",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Chief Minister (Himachal Pradesh)",
    avatar: "/avatars/sukhvinder-sukhu.png",
    accent: "#4d73b4",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "15th Chief Minister of Himachal Pradesh (2022–present). Former HPCC President and 4-term MLA from Nadaun.",
    education: {
      qualification: "Post Graduate Professional (M.A & LLB)",
      institution: "Himachal Pradesh University, Shimla",
      year: "1989",
      details: "MA and Law degree from HPU Shimla.",
      link: { label: "HP Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹7,81,00,000 (₹7.81 Cr)",
      liabilities: "₹54,00,000",
      year: "2022 Affidavit",
      details: "Residential building in Shimla and bank savings.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Old Pension Scheme (OPS) Restoration", description: "Restored Old Pension Scheme for 136,000 Himachal Pradesh state employees.", impact: "136k state employees" }
    ],
    verificationLinks: [
      { label: "HP Govt Portal", url: "https://himachal.nic.in/", type: "Official Portal" }
    ]
  },
  {
    id: "bhupesh-baghel",
    name: "Bhupesh Baghel",
    office: "Senior Congress Leader & Former Chhattisgarh CM",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Senior Leader & Former Chief Minister",
    avatar: "/avatars/bhupesh-baghel.png",
    accent: "#4d73b4",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "3rd Chief Minister of Chhattisgarh (2018–2023). Former PCC President and MLA from Patan.",
    education: {
      qualification: "Graduate (B.A)",
      institution: "Pandit Ravishankar Shukla University, Raipur",
      year: "1983",
      details: "Bachelor of Arts from Raipur.",
      link: { label: "Chhattisgarh Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹28,00,00,000 (₹28 Cr)",
      liabilities: "₹42,00,000",
      year: "2023 Affidavit",
      details: "Agricultural land plots in Durg and bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 2,
      convictions: 0,
      summary: "2 declared political cases; zero convictions.",
      details: "Pending in local Raipur court.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Rajiv Gandhi Kisan Nyay Yojana", description: "Direct cash subsidy input for paddy farmers in Chhattisgarh.", impact: "1.9M paddy farmers" }
    ],
    verificationLinks: [
      { label: "Chhattisgarh Assembly Record", url: "https://cgvidhansabha.gov.in/", type: "Official Portal" }
    ]
  },

  // ==================== 3. AAP (Aam Aadmi Party) ====================
  {
    id: "arvind-kejriwal",
    name: "Arvind Kejriwal",
    office: "National Convenor, AAP",
    party: "AAP",
    partyName: "Aam Aadmi Party",
    hierarchyRole: "National Convenor & Former CM Delhi",
    avatar: "/avatars/arvind-kejriwal.png",
    accent: "#559dc2",
    tier: "Tier 1: Supreme / National Leadership",
    background: "National Convenor of AAP. 7th Chief Minister of Delhi (2013, 2015–2024). Former IRS officer and Magsaysay Award winner.",
    education: {
      qualification: "Graduate Professional (B.Tech Mechanical)",
      institution: "IIT Kharagpur",
      year: "1989",
      details: "Mechanical Engineering from IIT Kharagpur.",
      link: { label: "ECI 2020 Delhi Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹3,44,00,000 (₹3.44 Cr)",
      liabilities: "Nil",
      year: "2020 Affidavit",
      details: "Spouse & self assets including house in Gurugram and bank savings.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 13,
      convictions: 0,
      summary: "13 declared cases (protests & excise policy case); granted bail by Supreme Court.",
      details: "On Supreme Court bail in 2024.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Mohalla Clinics & Education Transformation", description: "Constructed 500+ Mohalla Clinics and upgraded Delhi public school infrastructure.", impact: "20M+ patient visits annually" }
    ],
    verificationLinks: [
      { label: "AAP Official Portal", url: "https://aamaadmiparty.org/", type: "Official Portal" }
    ]
  },
  {
    id: "bhagwant-mann",
    name: "Bhagwant Mann",
    office: "Chief Minister, Punjab",
    party: "AAP",
    partyName: "Aam Aadmi Party",
    hierarchyRole: "Chief Minister (Punjab)",
    avatar: "/avatars/bhagwant-mann.png",
    accent: "#559dc2",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "17th Chief Minister of Punjab (2022–present). Former 2-term Lok Sabha MP from Sangrur (2014–2022).",
    education: {
      qualification: "Higher Secondary (12th Commerce)",
      institution: "Shaheed Udham Singh Government College, Sunam",
      year: "1992",
      details: "Commerce intermediate completed.",
      link: { label: "Punjab Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,97,00,000 (₹1.97 Cr)",
      liabilities: "₹29,80,000",
      year: "2022 Affidavit",
      details: "Agricultural land in Sangrur and bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 political protest case; zero convictions.",
      details: "Case pertained to Chandigarh rally.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Aam Aadmi Clinics & 300 Units Free Power", description: "Operationalized 840+ free primary clinics and 300 units monthly zero electricity bill.", impact: "90% Punjab homes zero bill" }
    ],
    verificationLinks: [
      { label: "Punjab CM Portal", url: "https://punjab.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "manish-sisodia",
    name: "Manish Sisodia",
    office: "Senior AAP Leader & Former Deputy CM",
    party: "AAP",
    partyName: "Aam Aadmi Party",
    hierarchyRole: "Senior Leader & Former Deputy Chief Minister",
    avatar: "/avatars/manish-sisodia.png",
    accent: "#559dc2",
    tier: "Tier 3: Party Executives & Secretaries",
    background: "Former Deputy Chief Minister & Education Minister of Delhi (2015–2023). Former journalist. Granted Supreme Court bail in 2024.",
    education: {
      qualification: "Graduate Professional (Diploma in Journalism)",
      institution: "Bharatiya Vidya Bhavan, New Delhi",
      year: "1993",
      details: "Journalism diploma.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,14,00,000 (₹1.14 Cr)",
      liabilities: "₹65,00,000",
      year: "2020 Affidavit",
      details: "Mayur Vihar apartment and bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 2,
      convictions: 0,
      summary: "2 declared cases (Excise policy investigation); granted bail by Supreme Court in 2024.",
      details: "Trial ongoing; on SC bail.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Delhi Education Infrastructure Revolution", description: "Built 20,000 new classrooms, Business Blasters entrepreneurship curriculum.", impact: "98% Board Pass Rate" }
    ],
    verificationLinks: [
      { label: "AAP Portal", url: "https://aamaadmiparty.org/", type: "Official Portal" }
    ]
  },
  {
    id: "atishi",
    name: "Atishi",
    office: "Senior AAP Leader & Former CM Delhi",
    party: "AAP",
    partyName: "Aam Aadmi Party",
    hierarchyRole: "Senior Leader & Former Chief Minister",
    avatar: "/avatars/atishi.png",
    accent: "#559dc2",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "Former Chief Minister of Delhi (2024–2025) and Cabinet Minister (Education, PWD, Power). Rhodes Scholar.",
    education: {
      qualification: "Post Graduate (Master's - Oxford)",
      institution: "Oxford University (Chevening & Rhodes Scholar) & St. Stephen's College",
      year: "2003",
      details: "Master's degrees from Oxford and St. Stephen's.",
      link: { label: "Delhi 2025 Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,41,00,000 (₹1.41 Cr)",
      liabilities: "Nil",
      year: "2025 Affidavit",
      details: "Bank deposits and mutual funds.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 political defamation case; zero convictions.",
      details: "Pending in Delhi magistrate court.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Happiness Curriculum & School Quality", description: "Pioneered Happiness & Deshbhakti Curricula in Delhi state schools.", impact: "1M+ Delhi students" }
    ],
    verificationLinks: [
      { label: "Delhi Govt Portal", url: "http://delhi.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "sanjay-singh",
    name: "Sanjay Singh",
    office: "Rajya Sabha MP & Senior National Leader",
    party: "AAP",
    partyName: "Aam Aadmi Party",
    hierarchyRole: "Senior National Leader & Rajya Sabha MP",
    avatar: "/avatars/sanjay-singh.png",
    accent: "#559dc2",
    tier: "Tier 4: Key Members of Parliament",
    background: "2-term Rajya Sabha MP representing Delhi. AAP Senior National Leader. Granted Supreme Court bail in 2024.",
    education: {
      qualification: "Graduate Professional (Diploma in Mining Engineering)",
      institution: "Orissa School of Mining Engineering, Keonjhar",
      year: "1994",
      details: "Mining Engineering diploma.",
      link: { label: "Rajya Sabha 2024 Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,12,00,000 (₹1.12 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Bank deposits and family savings.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 12,
      convictions: 0,
      summary: "12 declared political cases; granted bail by Supreme Court.",
      details: "SC bail granted in April 2024.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Parliamentary Debate Interventions", description: "Active speaker in Rajya Sabha on price rise, labor rights, and federalism.", impact: "High RS Debates Track" }
    ],
    verificationLinks: [
      { label: "Rajya Sabha Profile", url: "https://sansad.in/rs", type: "Official Portal" }
    ]
  },
  {
    id: "gopal-rai",
    name: "Gopal Rai",
    office: "Senior Delhi Leader & AAP Convenor",
    party: "AAP",
    partyName: "Aam Aadmi Party",
    hierarchyRole: "Delhi State Convenor & Former Minister",
    avatar: "/avatars/gopal-rai.png",
    accent: "#559dc2",
    tier: "Tier 3: Party Executives & Secretaries",
    background: "AAP Delhi State Convenor. Former Delhi Environment & Development Minister. MLA from Babarpur.",
    education: {
      qualification: "Post Graduate (MA Sociology)",
      institution: "Lucknow University",
      year: "1998",
      details: "Master's degree in Sociology.",
      link: { label: "Delhi Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹92,00,000 (₹92 Lakh)",
      liabilities: "Nil",
      year: "2020 Affidavit",
      details: "Bank savings and small agricultural plot.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 2,
      convictions: 0,
      summary: "2 political protest cases; zero convictions.",
      details: "Protest cases in Delhi.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Ev-Policy & Anti-Smog Action Plan", description: "Pioneered Delhi Electric Vehicle Policy and Winter Action Plan.", impact: "Delhi EV Adoption Model" }
    ],
    verificationLinks: [
      { label: "AAP Delhi Portal", url: "https://aamaadmiparty.org/", type: "Official Portal" }
    ]
  },

  // ==================== 4. AITC / TMC (All India Trinamool Congress) ====================
  {
    id: "mamata-banerjee",
    name: "Mamata Banerjee",
    office: "Chairperson, TMC & CM West Bengal",
    party: "TMC",
    partyName: "All India Trinamool Congress",
    hierarchyRole: "Party Chairperson & Chief Minister",
    avatar: "/avatars/mamata-banerjee.png",
    accent: "#7a9ac8",
    tier: "Tier 1: Supreme / National Leadership",
    background: "8th Chief Minister of West Bengal (2011–present). Founder & Chairperson of All India Trinamool Congress. Former 7-term Lok Sabha MP and Railway Minister.",
    education: {
      qualification: "Post Graduate (MA & LLB)",
      institution: "Calcutta University & Jogesh Chandra Chaudhuri Law College",
      year: "1979",
      details: "MA in History and Law degree from Calcutta University.",
      link: { label: "WB Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹16,72,352 (₹16.72 Lakh)",
      liabilities: "Nil",
      year: "2021 Affidavit",
      details: "Bank savings and personal effects; zero immovable property owned.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases declared.",
      details: "No active criminal cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Kanyashree & Lakshmir Bhandar", description: "UN Award-winning Kanyashree schoolgirl incentive and ₹1,000 monthly female income transfer.", impact: "21M women beneficiaries" }
    ],
    verificationLinks: [
      { label: "WB CM Portal", url: "https://wb.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "abhishek-banerjee",
    name: "Abhishek Banerjee",
    office: "National General Secretary, TMC",
    party: "TMC",
    partyName: "All India Trinamool Congress",
    hierarchyRole: "National General Secretary & Lok Sabha MP",
    avatar: "/avatars/abhishek-banerjee.png",
    accent: "#7a9ac8",
    tier: "Tier 3: Party Executives & Secretaries",
    background: "TMC National General Secretary. 3-term Lok Sabha MP from Diamond Harbour (2014–present). Leading parliamentary voice.",
    education: {
      qualification: "Post Graduate (BBA & MBA)",
      institution: "Indian Institute of Planning and Management (IIPM), New Delhi",
      year: "2009",
      details: "MBA degree.",
      link: { label: "ECI 2024 Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,40,00,000 (₹1.4 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Bank deposits and shares.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 3,
      convictions: 0,
      summary: "3 declared investigation cases; zero convictions.",
      details: "Pending in court; protected by stay orders.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Nabo Jowar Outreach & Diamond Harbour Model", description: "Pioneered model healthcare & sports infrastructure in constituency.", impact: "Diamond Harbour Model" }
    ],
    verificationLinks: [
      { label: "Lok Sabha Profile", url: "https://sansad.in/ls", type: "Official Portal" }
    ]
  },
  {
    id: "derek-obrien",
    name: "Derek O'Brien",
    office: "Rajya Sabha Parliamentary Leader, TMC",
    party: "TMC",
    partyName: "All India Trinamool Congress",
    hierarchyRole: "Rajya Sabha Leader & Chief National Spokesperson",
    avatar: "/avatars/derek-obrien.png",
    accent: "#7a9ac8",
    tier: "Tier 4: Key Members of Parliament",
    background: "3-term Rajya Sabha MP representing West Bengal. Leader of TMC in Rajya Sabha. Renowned author and former quizmaster.",
    education: {
      qualification: "Graduate (B.A)",
      institution: "Scottish Church College, St. Xavier's Kolkata",
      year: "1984",
      details: "Bachelor of Arts degree.",
      link: { label: "Rajya Sabha Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹6,80,00,000 (₹6.8 Cr)",
      liabilities: "Nil",
      year: "2023 Affidavit",
      details: "Publishing rights, shares, and Kolkata apartment.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Parliamentary Rules & Bill Debates", description: "Leading parliamentary speaker on federal rights and media freedom.", impact: "Rajya Sabha Debates Track" }
    ],
    verificationLinks: [
      { label: "PRS India Track", url: "https://prsindia.org/", type: "PRS India" }
    ]
  },
  {
    id: "mahua-moitra",
    name: "Mahua Moitra",
    office: "Member of Parliament, Krishnanagar",
    party: "TMC",
    partyName: "All India Trinamool Congress",
    hierarchyRole: "Lok Sabha MP & National Spokesperson",
    avatar: "/avatars/mahua-moitra.png",
    accent: "#7a9ac8",
    tier: "Tier 4: Key Members of Parliament",
    background: "Lok Sabha MP from Krishnanagar (re-elected 2024). Former Vice President at JPMorgan Chase in New York & London.",
    education: {
      qualification: "Graduate Double Major (Economics & Mathematics)",
      institution: "Mount Holyoke College, Massachusetts, USA",
      year: "1998",
      details: "Double Major in Economics and Mathematics.",
      link: { label: "ECI 2024 Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹3,50,00,000 (₹3.5 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Bank deposits, art collection, and foreign investments.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 political defamation case; zero convictions.",
      details: "Pending in magistrate court.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Parliamentary Scrutiny & Economic Oversight", description: "Pioneered debates on corporate governance and public data privacy.", impact: "Key LS Debates" }
    ],
    verificationLinks: [
      { label: "Lok Sabha Profile", url: "https://sansad.in/ls", type: "Official Portal" }
    ]
  },
  {
    id: "saugata-roy",
    name: "Saugata Roy",
    office: "Senior Leader & MP, Dum Dum",
    party: "TMC",
    partyName: "All India Trinamool Congress",
    hierarchyRole: "Senior Lok Sabha MP",
    avatar: "/avatars/saugata-roy.png",
    accent: "#7a9ac8",
    tier: "Tier 4: Key Members of Parliament",
    background: "5-term Lok Sabha MP from Dum Dum. Former Union Minister of State for Urban Development and retired physics professor.",
    education: {
      qualification: "Post Graduate Professional (M.Sc Physics & LLB)",
      institution: "Presidency College & Calcutta University",
      year: "1970",
      details: "M.Sc in Physics and Law degree.",
      link: { label: "ECI 2024 Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹3,10,00,000 (₹3.1 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Pension savings and ancestral home.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Urban Infrastructure & Metro Expansion", description: "Oversees Kolkata Metro expansion projects in Dum Dum constituency.", impact: "Kolkata North Transit" }
    ],
    verificationLinks: [
      { label: "PRS India Track", url: "https://prsindia.org/", type: "PRS India" }
    ]
  },
  {
    id: "dola-sen",
    name: "Dola Sen",
    office: "Senior National Leader & Rajya Sabha MP",
    party: "TMC",
    partyName: "All India Trinamool Congress",
    hierarchyRole: "Rajya Sabha MP & Trade Union Leader",
    avatar: "/avatars/dola-sen.png",
    accent: "#7a9ac8",
    tier: "Tier 3: Party Executives & Secretaries",
    background: "2-term Rajya Sabha MP representing West Bengal. President of INTTUC (TMC Trade Union Wing).",
    education: {
      qualification: "Graduate (B.Sc Mathematics)",
      institution: "Calcutta University",
      year: "1988",
      details: "B.Sc in Mathematics.",
      link: { label: "Rajya Sabha Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,25,00,000 (₹1.25 Cr)",
      liabilities: "Nil",
      year: "2023 Affidavit",
      details: "Bank deposits and small flat.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 trade union demonstration case; zero convictions.",
      details: "Protest case in Asansol.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Unorganized Sector Worker Welfare", description: "Championed social security benefits for tea garden & jute mill workers.", impact: "1.5M labor cadre" }
    ],
    verificationLinks: [
      { label: "Rajya Sabha Profile", url: "https://sansad.in/rs", type: "Official Portal" }
    ]
  },

  // ==================== 5. CPI(M) ====================
  {
    id: "ma-baby",
    name: "M. A. Baby",
    office: "General Secretary, CPI(M)",
    party: "CPI(M)",
    partyName: "Communist Party of India (Marxist)",
    hierarchyRole: "General Secretary",
    avatar: "/avatars/ma-baby.png",
    accent: "#c54149",
    tier: "Tier 1: Supreme / National Leadership",
    background: "General Secretary of CPI(M) (elected 2025). Former Education & Culture Minister of Kerala and Rajya Sabha MP.",
    education: {
      qualification: "Graduate (B.A)",
      institution: "SN College, Kollam, Kerala University",
      year: "1974",
      details: "Bachelor of Arts degree.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹48,00,000 (₹48 Lakh)",
      liabilities: "Nil",
      year: "2021 Affidavit",
      details: "Bank savings and party whole-timer allowance; zero personal commercial real estate.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero active criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Kerala Higher Education & School ICT Mission", description: "Pioneered IT@School project in Kerala government schools.", impact: "First IT-literate State Schools" }
    ],
    verificationLinks: [
      { label: "CPI(M) Official Portal", url: "https://cpim.org/", type: "Official Portal" }
    ]
  },
  {
    id: "pinarayi-vijayan",
    name: "Pinarayi Vijayan",
    office: "Chief Minister, Kerala",
    party: "CPI(M)",
    partyName: "Communist Party of India (Marxist)",
    hierarchyRole: "Chief Minister (Kerala)",
    avatar: "/avatars/pinarayi-vijayan.png",
    accent: "#c54149",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "12th Chief Minister of Kerala (2016–present). Longest-serving CPI(M) State Secretary (1998–2015). Politburo Member.",
    education: {
      qualification: "Graduate (B.A Economics)",
      institution: "Government Brennen College, Thalassery",
      year: "1967",
      details: "BA in Economics.",
      link: { label: "Kerala Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,18,00,000 (₹1.18 Cr)",
      liabilities: "Nil",
      year: "2021 Affidavit",
      details: "Ancestral plot in Kannur and bank savings.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Discharged in Lavalin case by High Court; zero active criminal cases.",
      details: "Clean record; discharged by courts.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "K-FON Free Internet & Life Mission Housing", description: "Declared Internet a basic right with state K-FON fiber network and built 350,000 free homes.", impact: "350k free houses built" }
    ],
    verificationLinks: [
      { label: "Kerala CM Portal", url: "https://kerala.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "sitaram-yechury",
    name: "Sitaram Yechury",
    office: "Former General Secretary (Deceased 2024)",
    party: "CPI(M)",
    partyName: "Communist Party of India (Marxist)",
    hierarchyRole: "Former General Secretary (1952–2024)",
    avatar: "/avatars/sitaram-yechury.png",
    accent: "#c54149",
    tier: "Tier 1: Supreme / National Leadership",
    specialNotice: "MEMORIAL PROFILE: General Secretary of CPI(M) from 2015 until his passing in September 2024. 2-term Rajya Sabha MP (2005–2017).",
    background: "General Secretary of CPI(M) (2015–2024). Former 2-term Rajya Sabha MP. JNU Student Union President. Key architect of INDIA bloc.",
    education: {
      qualification: "Post Graduate (MA Economics)",
      institution: "Jawaharlal Nehru University (JNU) & St. Stephen's College",
      year: "1975",
      details: "MA in Economics from JNU.",
      link: { label: "Rajya Sabha Record", url: "https://prsindia.org/", type: "PRS India" }
    },
    financials: {
      assets: "₹82,00,000 (₹82 Lakh)",
      liabilities: "Nil",
      year: "2017 Record",
      details: "Bank deposits and books.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Record", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "RTI & Forest Rights Act Drafting Support", description: "Instrumental in framing UPA-1 pro-people legislations.", impact: "Forest Rights Act 2006" }
    ],
    verificationLinks: [
      { label: "CPI(M) Archive", url: "https://cpim.org/", type: "Official Portal" }
    ]
  },
  {
    id: "brinda-karat",
    name: "Brinda Karat",
    office: "Senior CPI(M) Leader & Politburo Member",
    party: "CPI(M)",
    partyName: "Communist Party of India (Marxist)",
    hierarchyRole: "Politburo Member & Former MP",
    avatar: "/avatars/brinda-karat.png",
    accent: "#c54149",
    tier: "Tier 3: Party Executives & Secretaries",
    background: "First woman CPI(M) Politburo Member. Former Rajya Sabha MP representing West Bengal. Former AIDWA General Secretary.",
    education: {
      qualification: "Graduate (B.A)",
      institution: "Miranda House, University of Delhi",
      year: "1968",
      details: "BA from Miranda House.",
      link: { label: "Rajya Sabha Record", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹65,00,000 (₹65 Lakh)",
      liabilities: "Nil",
      year: "2011 Affidavit",
      details: "Bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 political protest case; zero convictions.",
      details: "Protest case in Delhi.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Protection of Women from Domestic Violence Act", description: "Pioneered legislative amendments protecting female rights.", impact: "Domestic Violence Act 2005" }
    ],
    verificationLinks: [
      { label: "CPI(M) Portal", url: "https://cpim.org/", type: "Official Portal" }
    ]
  },
  {
    id: "prakash-karat",
    name: "Prakash Karat",
    office: "Senior Leader & Politburo Member",
    party: "CPI(M)",
    partyName: "Communist Party of India (Marxist)",
    hierarchyRole: "Politburo Member & Former General Secretary",
    avatar: "/avatars/prakash-karat.png",
    accent: "#c54149",
    tier: "Tier 1: Supreme / National Leadership",
    background: "General Secretary of CPI(M) (2005–2015). Politburo Coordinator (2024–2025). JNU alumnus & Rhodes Scholar.",
    education: {
      qualification: "Post Graduate (M.Sc Politics)",
      institution: "University of Edinburgh (M.Sc) & Madras Christian College (BA)",
      year: "1970",
      details: "M.Sc in Politics from Edinburgh.",
      link: { label: "CPI(M) Archive", url: "https://cpim.org/", type: "Official Portal" }
    },
    financials: {
      assets: "₹40,00,000 (₹40 Lakh)",
      liabilities: "Nil",
      year: "2020 Declaration",
      details: "Party whole-timer allowance.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Record", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Indo-US Nuclear Deal Resistance & Sovereignty", description: "Led parliamentary stance safeguarding national energy autonomy.", impact: "Nuclear Liability Framework" }
    ],
    verificationLinks: [
      { label: "CPI(M) Portal", url: "https://cpim.org/", type: "Official Portal" }
    ]
  },

  // ==================== 6. BSP (Bahujan Samaj Party) ====================
  {
    id: "mayawati",
    name: "Mayawati",
    office: "National President, BSP",
    party: "BSP",
    partyName: "Bahujan Samaj Party",
    hierarchyRole: "National Party President & Former UP CM",
    avatar: "/avatars/mayawati.png",
    accent: "#3b82f6",
    tier: "Tier 1: Supreme / National Leadership",
    background: "4-term Chief Minister of Uttar Pradesh (1995, 1997, 2002–2003, 2007–2012). National President of Bahujan Samaj Party.",
    education: {
      qualification: "Graduate Professional (B.Ed & LLB)",
      institution: "University of Delhi (B.A & LLB) & VMLG College Ghaziabad (B.Ed)",
      year: "1980",
      details: "Law and Education degrees.",
      link: { label: "ECI Rajya Sabha Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹111,00,00,000 (₹111 Cr)",
      liabilities: "Nil",
      year: "2012 Affidavit",
      details: "Commercial buildings in New Delhi and bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "DA case quashed by Supreme Court in 2012; zero active criminal cases.",
      details: "Clean record; cases dismissed by SC.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Noida-Greater Noida Infrastructure & Canal Works", description: "Built Yamuna Expressway and Mahamaya Flyover.", impact: "NCR Infrastructure Hub" }
    ],
    verificationLinks: [
      { label: "BSP Official Portal", url: "https://www.bspindia.org.in/", type: "Official Portal" }
    ]
  },
  {
    id: "akash-anand",
    name: "Akash Anand",
    office: "National Coordinator, BSP",
    party: "BSP",
    partyName: "Bahujan Samaj Party",
    hierarchyRole: "National Coordinator & Youth Leader",
    avatar: "/avatars/akash-anand.png",
    accent: "#3b82f6",
    tier: "Tier 3: Party Executives & Secretaries",
    background: "National Coordinator of BSP. Key youth face driving party campaigns across UP, Rajasthan, and MP.",
    education: {
      qualification: "Post Graduate (MBA)",
      institution: "University of Plymouth, United Kingdom",
      year: "2016",
      details: "MBA from Plymouth University UK.",
      link: { label: "BSP Profile", url: "https://www.bspindia.org.in/", type: "Official Portal" }
    },
    financials: {
      assets: "₹4,50,00,000 (₹4.5 Cr)",
      liabilities: "Nil",
      year: "2024 Declaration",
      details: "Bank deposits and shares.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 political speech case in Sitapur; zero convictions.",
      details: "Bail granted by High Court.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "BSP Youth Cadre Digitization", description: "Modernized social media strategy and cadre enrollment.", impact: "BSP Digital Cell Expansion" }
    ],
    verificationLinks: [
      { label: "BSP Official Portal", url: "https://www.bspindia.org.in/", type: "Official Portal" }
    ]
  },

  // ==================== 7. NPP (National People's Party) ====================
  {
    id: "conrad-sangma",
    name: "Conrad K. Sangma",
    office: "National President, NPP & CM Meghalaya",
    party: "NPP",
    partyName: "National People's Party",
    hierarchyRole: "National President & Chief Minister",
    avatar: "/avatars/conrad-sangma.png",
    accent: "#eab308",
    tier: "Tier 1: Supreme / National Leadership",
    background: "12th Chief Minister of Meghalaya (2018–present). National President of NPP (first recognized national party from North-East). Former Tura MP.",
    education: {
      qualification: "Post Graduate (MBA Finance)",
      institution: "Wharton School & Imperial College London (MBA)",
      year: "2001",
      details: "B.A in Business Administration from Wharton and MBA from Imperial College London.",
      link: { label: "Meghalaya Assembly Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹14,50,00,000 (₹14.5 Cr)",
      liabilities: "₹24,00,000",
      year: "2023 Affidavit",
      details: "Residential land in Tura and bank deposits.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "FOCUS & CM-ELEVATE Entrepreneurship", description: "Largest rural producer empowerment & startup scheme in Meghalaya.", impact: "100k farmers & entrepreneurs" }
    ],
    verificationLinks: [
      { label: "Meghalaya CM Portal", url: "https://meghalaya.gov.in/", type: "Official Portal" }
    ]
  },

  // ==================== 8. SP (Samajwadi Party) ====================
  {
    id: "akhilesh-yadav",
    name: "Akhilesh Yadav",
    office: "National President, SP",
    party: "SP",
    partyName: "Samajwadi Party",
    hierarchyRole: "National Party President & MP",
    avatar: "/avatars/akhilesh-yadav.png",
    accent: "#c05e70",
    tier: "Tier 1: Supreme / National Leadership",
    background: "National President of Samajwadi Party (2017–present). MP from Kannauj (2024). 38th Chief Minister of Uttar Pradesh (2012–2017).",
    education: {
      qualification: "Post Graduate (Master's - Sydney)",
      institution: "University of Sydney, Australia (M.E) & JSS Mysore (B.E)",
      year: "1998",
      details: "Master's degree in Environmental Engineering from Sydney University.",
      link: { label: "ECI 2024 Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹42,39,34,000 (₹42.39 Cr)",
      liabilities: "₹25,40,000",
      year: "2024 Affidavit",
      details: "Agricultural land in Saifai and commercial building in Lucknow.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 4,
      convictions: 0,
      summary: "4 declared political protest cases; zero convictions.",
      details: "Protest cases in UP.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Agra-Lucknow Expressway (302 km)", description: "Constructed 302 km 6-lane access controlled expressway in 23 months.", impact: "Record 23-month timeline" }
    ],
    verificationLinks: [
      { label: "Lok Sabha Profile", url: "https://sansad.in/ls", type: "Official Portal" },
      { label: "PRS India Track", url: "https://prsindia.org/", type: "PRS India" }
    ]
  },
  {
    id: "dimple-yadav",
    name: "Dimple Yadav",
    office: "Member of Parliament, Mainpuri",
    party: "SP",
    partyName: "Samajwadi Party",
    hierarchyRole: "Lok Sabha MP",
    avatar: "/avatars/dimple-yadav.png",
    accent: "#c05e70",
    tier: "Tier 4: Key Members of Parliament",
    background: "3-term Lok Sabha MP representing Mainpuri (previously Kannauj). Prominent leader in Samajwadi Party.",
    education: {
      qualification: "Graduate (B.Com)",
      institution: "Lucknow University",
      year: "1998",
      details: "Bachelor of Commerce.",
      link: { label: "ECI 2024 Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹15,20,00,000 (₹15.2 Cr)",
      liabilities: "Nil",
      year: "2024 Affidavit",
      details: "Gold jewellery and land investments.",
      link: { label: "ADR MyNeta Record", url: "https://adrindia.org/", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "Zero criminal cases.",
      details: "No active cases.",
      link: { label: "ECI Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "1090 Women Powerline Helpline", description: "Championed specialized 24/7 emergency response framework for women safety in UP.", impact: "Statewide Helpline Network" }
    ],
    verificationLinks: [
      { label: "Lok Sabha Profile", url: "https://sansad.in/ls", type: "Official Portal" }
    ]
  }
];
