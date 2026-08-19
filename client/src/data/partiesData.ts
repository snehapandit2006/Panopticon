export type PoliticalParty = {
  code: string;
  name: string;
  leader: string;
  icon: string;
  accent: string;
  note: string;
};

export const NATIONAL_PARTIES: PoliticalParty[] = [
  { code: "ALL", name: "All Political Parties", leader: "Multi-Party Spectrum", icon: "/icons/bjp.png", accent: "#2563eb", note: "Verified Database of all National and Regional Leaders" },
  { code: "BJP", name: "Bharatiya Janata Party", leader: "Narendra Modi / Nitin Gadkari", icon: "/icons/bjp.png", accent: "#e18a37", note: "Governing Party at Centre (NDA Coalition)" },
  { code: "INC", name: "Indian National Congress", leader: "Mallikarjun Kharge / Rahul Gandhi", icon: "/icons/congress.png", accent: "#4d73b4", note: "Principal Opposition Party (INDIA Coalition)" },
  { code: "AAP", name: "Aam Aadmi Party", leader: "Arvind Kejriwal / Bhagwant Mann", icon: "/icons/aap.png", accent: "#559dc2", note: "Governing Party in Punjab; Independent Opposition" },
  { code: "TMC", name: "All India Trinamool Congress", leader: "Mamata Banerjee / Abhishek Banerjee", icon: "/icons/tmc.png", accent: "#7a9ac8", note: "Governing Party in West Bengal" },
  { code: "CPI(M)", name: "Communist Party of India (Marxist)", leader: "M. A. Baby / Pinarayi Vijayan", icon: "/icons/cpim.png", accent: "#c54149", note: "Governing LDF Coalition in Kerala" },
  { code: "BSP", name: "Bahujan Samaj Party", leader: "Mayawati / Akash Anand", icon: "/icons/bsp.png", accent: "#3b82f6", note: "National Party focused on Bahujan representation" },
  { code: "NPP", name: "National People's Party", leader: "Conrad K. Sangma", icon: "/icons/npp.png", accent: "#eab308", note: "Governing Party in Meghalaya (First NE National Party)" },
  { code: "SP", name: "Samajwadi Party", leader: "Akhilesh Yadav", icon: "/icons/bjp.png", accent: "#c05e70", note: "Major Opposition Party in Uttar Pradesh" }
];

export type RegionalPartyInfo = {
  party: string;
  leader: string;
  base: string;
  significance: string;
  alignment: "NDA" | "INDIA" | "Independent / Unaligned";
};

export const REGIONAL_PARTIES: RegionalPartyInfo[] = [
  { party: "TDP (Telugu Desam Party)", leader: "N. Chandrababu Naidu", base: "Andhra Pradesh", significance: "Major NDA Ally; Naidu is Andhra Pradesh CM", alignment: "NDA" },
  { party: "JD(U) (Janata Dal United)", leader: "Nitish Kumar", base: "Bihar", significance: "Major NDA Ally; Nitish Kumar is Bihar CM", alignment: "NDA" },
  { party: "RJD (Rashtriya Janata Dal)", leader: "Tejashwi Yadav", base: "Bihar", significance: "Major Opposition Force in Bihar (INDIA bloc)", alignment: "INDIA" },
  { party: "DMK (Dravida Munnetra Kazhagam)", leader: "M. K. Stalin", base: "Tamil Nadu", significance: "Tamil Nadu Government (INDIA bloc)", alignment: "INDIA" },
  { party: "AIADMK", leader: "Edappadi K. Palaniswami", base: "Tamil Nadu", significance: "Major Opposition Party in Tamil Nadu", alignment: "Independent / Unaligned" },
  { party: "BJD (Biju Janata Dal)", leader: "Naveen Patnaik", base: "Odisha", significance: "Major Opposition Party in Odisha", alignment: "Independent / Unaligned" },
  { party: "BRS (Bharat Rashtra Samithi)", leader: "K. Chandrashekar Rao", base: "Telangana", significance: "Major Regional Opposition in Telangana", alignment: "Independent / Unaligned" },
  { party: "YSRCP", leader: "Y. S. Jagan Mohan Reddy", base: "Andhra Pradesh", significance: "Major Opposition Party in Andhra Pradesh", alignment: "Independent / Unaligned" },
  { party: "Shiv Sena (UBT)", leader: "Uddhav Thackeray", base: "Maharashtra", significance: "Opposition / INDIA-aligned in Maharashtra", alignment: "INDIA" },
  { party: "Shiv Sena (Shinde)", leader: "Eknath Shinde", base: "Maharashtra", significance: "NDA Ally in Mahayuti Alliance", alignment: "NDA" },
  { party: "NCP (Sharadchandra Pawar)", leader: "Sharad Pawar", base: "Maharashtra", significance: "Opposition / INDIA-aligned", alignment: "INDIA" },
  { party: "NCP (Ajit Pawar)", leader: "Ajit Pawar", base: "Maharashtra", significance: "NDA / Mahayuti Aligned", alignment: "NDA" },
  { party: "JMM (Jharkhand Mukti Morcha)", leader: "Hemant Soren", base: "Jharkhand", significance: "Jharkhand Government (INDIA bloc)", alignment: "INDIA" },
  { party: "SP (Samajwadi Party)", leader: "Akhilesh Yadav", base: "Uttar Pradesh", significance: "Major Opposition Party in UP (INDIA bloc)", alignment: "INDIA" },
  { party: "RLD (Rashtriya Lok Dal)", leader: "Jayant Chaudhary", base: "Western UP", significance: "NDA Ally", alignment: "NDA" },
  { party: "JKNC (Jammu & Kashmir National Conference)", leader: "Omar Abdullah", base: "Jammu & Kashmir", significance: "J&K Government (INDIA bloc)", alignment: "INDIA" },
  { party: "PDP (Peoples Democratic Party)", leader: "Mehbooba Mufti", base: "Jammu & Kashmir", significance: "Regional Opposition in J&K", alignment: "Independent / Unaligned" },
  { party: "SAD (Shiromani Akali Dal)", leader: "Sukhbir Singh Badal", base: "Punjab", significance: "Major Regional Party in Punjab", alignment: "Independent / Unaligned" },
  { party: "CPI (Communist Party of India)", leader: "D. Raja", base: "Multiple States", significance: "Left Front Ally (INDIA bloc)", alignment: "INDIA" },
  { party: "AIMIM", leader: "Asaduddin Owaisi", base: "Telangana / National", significance: "Minority-focused Regional/National presence", alignment: "Independent / Unaligned" },
  { party: "VCK", leader: "Thol. Thirumavalavan", base: "Tamil Nadu", significance: "Dalit-focused Tamil Nadu Party (INDIA bloc)", alignment: "INDIA" },
  { party: "CPI(ML) Liberation", leader: "Dipankar Bhattacharya", base: "Bihar / WB", significance: "Left Opposition Force (INDIA bloc)", alignment: "INDIA" }
];

export type StateControl = {
  id: string;
  name: string;
  rulingParty: string;
  partyCode: string;
  alliance: "NDA" | "INDIA" | "AAP" | "LDF" | "TMC" | "Independent";
  chiefMinister: string;
  icon: string;
  accent: string;
  x: number; // Percent coordinates on SVG map
  y: number;
};

export const STATE_CONTROL_MAP: StateControl[] = [
  { id: "UP", name: "Uttar Pradesh", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "Yogi Adityanath", icon: "/icons/bjp.png", accent: "#e18a37", x: 45, y: 35 },
  { id: "MH", name: "Maharashtra", rulingParty: "BJP (Mahayuti)", partyCode: "BJP", alliance: "NDA", chiefMinister: "Devendra Fadnavis", icon: "/icons/bjp.png", accent: "#e18a37", x: 35, y: 55 },
  { id: "MP", name: "Madhya Pradesh", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "Mohan Yadav", icon: "/icons/bjp.png", accent: "#e18a37", x: 40, y: 48 },
  { id: "RJ", name: "Rajasthan", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "Bhajan Lal Sharma", icon: "/icons/bjp.png", accent: "#e18a37", x: 28, y: 36 },
  { id: "GJ", name: "Gujarat", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "Bhupendra Patel", icon: "/icons/bjp.png", accent: "#e18a37", x: 20, y: 48 },
  { id: "CG", name: "Chhattisgarh", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "Vishnu Deo Sai", icon: "/icons/bjp.png", accent: "#e18a37", x: 50, y: 52 },
  { id: "OD", name: "Odisha", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "Mohan Charan Majhi", icon: "/icons/bjp.png", accent: "#e18a37", x: 58, y: 54 },
  { id: "AS", name: "Assam", rulingParty: "BJP (NEDA)", partyCode: "BJP", alliance: "NDA", chiefMinister: "Himanta Biswa Sarma", icon: "/icons/bjp.png", accent: "#e18a37", x: 80, y: 35 },
  { id: "HR", name: "Haryana", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "Nayab Singh Saini", icon: "/icons/bjp.png", accent: "#e18a37", x: 34, y: 28 },
  { id: "UK", name: "Uttarakhand", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "Pushkar Singh Dhami", icon: "/icons/bjp.png", accent: "#e18a37", x: 40, y: 24 },
  { id: "GA", name: "Goa", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "Pramod Sawant", icon: "/icons/bjp.png", accent: "#e18a37", x: 28, y: 68 },
  { id: "DL", name: "Delhi (UT)", rulingParty: "BJP", partyCode: "BJP", alliance: "NDA", chiefMinister: "LG / BJP Administration", icon: "/icons/bjp.png", accent: "#e18a37", x: 36, y: 30 },
  { id: "PB", name: "Punjab", rulingParty: "AAP", partyCode: "AAP", alliance: "AAP", chiefMinister: "Bhagwant Mann", icon: "/icons/aap.png", accent: "#559dc2", x: 30, y: 24 },
  { id: "WB", name: "West Bengal", rulingParty: "TMC", partyCode: "TMC", alliance: "TMC", chiefMinister: "Mamata Banerjee", icon: "/icons/tmc.png", accent: "#7a9ac8", x: 68, y: 46 },
  { id: "TN", name: "Tamil Nadu", rulingParty: "DMK (SPA)", partyCode: "INC", alliance: "INDIA", chiefMinister: "M. K. Stalin", icon: "/icons/congress.png", accent: "#4d73b4", x: 40, y: 80 },
  { id: "KA", name: "Karnataka", rulingParty: "INC", partyCode: "INC", alliance: "INDIA", chiefMinister: "Siddaramaiah", icon: "/icons/congress.png", accent: "#4d73b4", x: 34, y: 68 },
  { id: "TG", name: "Telangana", rulingParty: "INC", partyCode: "INC", alliance: "INDIA", chiefMinister: "Revanth Reddy", icon: "/icons/congress.png", accent: "#4d73b4", x: 42, y: 60 },
  { id: "HP", name: "Himachal Pradesh", rulingParty: "INC", partyCode: "INC", alliance: "INDIA", chiefMinister: "Sukhvinder Singh Sukhu", icon: "/icons/congress.png", accent: "#4d73b4", x: 34, y: 18 },
  { id: "JH", name: "Jharkhand", rulingParty: "JMM-Congress", partyCode: "INC", alliance: "INDIA", chiefMinister: "Hemant Soren", icon: "/icons/congress.png", accent: "#4d73b4", x: 60, y: 44 },
  { id: "KL", name: "Kerala", rulingParty: "CPI(M) (LDF)", partyCode: "CPI(M)", alliance: "LDF", chiefMinister: "Pinarayi Vijayan", icon: "/icons/cpim.png", accent: "#c54149", x: 35, y: 84 },
  { id: "AP", name: "Andhra Pradesh", rulingParty: "TDP (NDA)", partyCode: "BJP", alliance: "NDA", chiefMinister: "N. Chandrababu Naidu", icon: "/icons/bjp.png", accent: "#e18a37", x: 44, y: 68 },
  { id: "BR", name: "Bihar", rulingParty: "JD(U)-BJP (NDA)", partyCode: "BJP", alliance: "NDA", chiefMinister: "Nitish Kumar", icon: "/icons/bjp.png", accent: "#e18a37", x: 58, y: 38 },
  { id: "JK", name: "Jammu & Kashmir", rulingParty: "JKNC-Congress", partyCode: "INC", alliance: "INDIA", chiefMinister: "Omar Abdullah", icon: "/icons/congress.png", accent: "#4d73b4", x: 28, y: 12 },
  { id: "ML", name: "Meghalaya", rulingParty: "NPP (NDA)", partyCode: "NPP", alliance: "NDA", chiefMinister: "Conrad K. Sangma", icon: "/icons/npp.png", accent: "#eab308", x: 78, y: 38 }
];

export type ParliamentDebate = {
  id: string;
  house: "Lok Sabha" | "Rajya Sabha";
  title: string;
  date: string;
  speakers: string[];
  billTopic: string;
  summary: string;
  status: "Passed" | "Under Discussion" | "Referred to Committee";
  officialRecordUrl: string;
};

export const PARLIAMENT_DEBATES: ParliamentDebate[] = [
  {
    id: "deb-1",
    house: "Lok Sabha",
    title: "Discussion on Bharatiya Nyaya Sanhita Implementation & Cyber Security",
    date: "August 14, 2026",
    speakers: ["Amit Shah (BJP)", "Rahul Gandhi (INC)", "Mahua Moitra (TMC)", "Akhilesh Yadav (SP)"],
    billTopic: "Criminal Law Modernization & Digital Fraud",
    summary: "Home Minister presented operational metrics of BNSS 2023. LOP raised concerns regarding digital privacy safeguard mechanisms in forensic evidence collection.",
    status: "Passed",
    officialRecordUrl: "https://sansad.in/ls"
  },
  {
    id: "deb-2",
    house: "Rajya Sabha",
    title: "Debate on Federal Revenue Sharing & GST Compensation Grants",
    date: "August 12, 2026",
    speakers: ["Nirmala Sitharaman (BJP)", "Raghav Chadha (BJP)", "Mallikarjun Kharge (INC)", "Derek O'Brien (TMC)"],
    billTopic: "Finance & Union-State Fiscal Distribution",
    summary: "Raghav Chadha (sitting as BJP MP) intervened on tax devolution formulae to industrial states. Opposition members questioned cess allocations to non-NDA states.",
    status: "Under Discussion",
    officialRecordUrl: "https://sansad.in/rs"
  },
  {
    id: "deb-3",
    house: "Lok Sabha",
    title: "Question Hour: MSP Guarantee & Agricultural Technology Mission",
    date: "August 08, 2026",
    speakers: ["Narendra Modi (BJP)", "Priyanka Gandhi Vadra (INC)", "Saugata Roy (TMC)"],
    billTopic: "Agriculture & Farmer Welfare",
    summary: "Members questioned the government on MSP calculations based on Swaminathan Commission recommendations and drip irrigation subsidies.",
    status: "Under Discussion",
    officialRecordUrl: "https://sansad.in/ls"
  },
  {
    id: "deb-4",
    house: "Rajya Sabha",
    title: "Special Motion: Climate Resilience & Himalayan Infrastructure Safety",
    date: "August 05, 2026",
    speakers: ["J. P. Nadda (BJP)", "Sanjay Singh (AAP)", "Prakash Karat (CPI-M)"],
    billTopic: "Environment & Disaster Management",
    summary: "Discussion on ecological impact assessments in fragile hill states including Himachal Pradesh, Uttarakhand, and Meghalaya.",
    status: "Referred to Committee",
    officialRecordUrl: "https://sansad.in/rs"
  }
];
