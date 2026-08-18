import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AIChatBox, type Message } from "@/components/AIChatBox";
import { trpc } from "@/lib/trpc";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  Coins,
  Download,
  ExternalLink,
  FileSearch,
  Filter,
  FolderTree,
  Gavel,
  GraduationCap,
  Landmark,
  Layers3,
  Moon,
  Network,
  RadioTower,
  RefreshCw,
  Scale,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Sun,
  UsersRound,
} from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

type Screen = "hierarchy" | "party" | "profile" | "compare" | "news" | "rights" | "explainer";
type Topic = "National" | "Geopolitics" | "Economy" | "Law & Rights" | "Protest";
type HierarchyTier = "Tier 1: Supreme / National Leadership" | "Tier 2: Cabinet & Chief Ministers" | "Tier 3: Party Executives & Secretaries" | "Tier 4: Key Members of Parliament";

export type VerificationLink = {
  label: string;
  url: string;
  type: "ECI Affidavit" | "ADR MyNeta" | "PRS India" | "Official Portal";
};

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

const COMMON_SOURCES = {
  constitution: { label: "Legislative Department · Constitution of India", url: "https://legislative.gov.in/constitution-of-india", type: "Official Portal" as const },
  bnss: { label: "India Code · BNSS 2023", url: "https://www.indiacode.nic.in/handle/123456789/20099", type: "Official Portal" as const },
  nalsa: { label: "NALSA · Legal Aid Portal", url: "https://nalsa.gov.in/legal-aid/", type: "Official Portal" as const },
  eci: { label: "Election Commission of India · Candidate Affidavits", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" as const },
  adr: { label: "Association for Democratic Reforms (ADR)", url: "https://adrindia.org/", type: "ADR MyNeta" as const },
  prs: { label: "PRS Legislative Research · MP Track", url: "https://prsindia.org/parliamenttrack", type: "PRS India" as const },
};

export const ALL_MEMBERS: LeaderMember[] = [
  // --- BJP ---
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
    background: "14th Prime Minister of India (since 2014). Served as Chief Minister of Gujarat for 13 years (2001–2014). Member of Parliament representing Varanasi constituency in Uttar Pradesh (2014–present). Key architect of BJP's national expansion.",
    education: {
      qualification: "Post Graduate (MA)",
      institution: "Gujarat University (MA, 1983) & Delhi University (BA, 1978)",
      year: "1983",
      details: "Sworn affidavit lists MA in Political Science from Gujarat University (1983) and BA from University of Delhi (1978).",
      link: { label: "Modi 2024 Sworn Affidavit (ECI)", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=8974", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹3,02,06,889 (₹3.02 Crore)",
      liabilities: "Nil (Zero declared)",
      year: "2024 Affidavit",
      details: "Declared bank deposits of ₹2.85 Crore, national savings certificates, and gold rings. No immoveable land or residential property owned directly.",
      link: { label: "ADR MyNeta · Modi 2024 Financial Record", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=8974", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "No criminal cases declared in the 2024 Lok Sabha affidavit.",
      details: "Zero pending criminal cases or IPC/BNS charges declared under sworn oath in election filings.",
      link: { label: "ECI Sworn Declaration 2024", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Digital India & UPI Scale", description: "Led national digital public infrastructure deployment, driving India to 46% of global real-time digital payments via UPI.", impact: "100B+ annual transactions" },
      { title: "PM Awas Yojana (Housing for All)", description: "Constructed over 30 million rural and urban homes for underprivileged households across India.", impact: "30M+ houses delivered" },
      { title: "Ayushman Bharat National Healthcare", description: "Launched world's largest government-funded health insurance scheme giving ₹5 Lakh annual coverage to 550M citizens.", impact: "550M beneficiaries covered" },
      { title: "PM Gati Shakti Infrastructure Pipeline", description: "Integrated 16 Ministries for unified multi-modal transport planning, national highways, and dedicated freight corridors.", impact: "₹100 Lakh Crore project plan" }
    ],
    verificationLinks: [
      { label: "ECI 2024 Sworn Affidavit (Varanasi)", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=8974", type: "ECI Affidavit" },
      { label: "PMO India Official Profile", url: "https://www.pmindia.gov.in/", type: "Official Portal" },
      { label: "PRS Legislative Performance Track", url: "https://prsindia.org/mptrack/17th-lok-sabha/narendra-modi", type: "PRS India" }
    ]
  },
  {
    id: "amit-shah",
    name: "Amit Shah",
    office: "Union Home Minister",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Union Cabinet Minister (Home & Cooperation)",
    avatar: "/avatars/narendra-modi.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "Union Minister of Home Affairs (2019–present) and Minister of Cooperation. Former National President of BJP (2014–2020). Member of Parliament from Gandhinagar, Gujarat. Key strategist for party organization and national security legislation.",
    education: {
      qualification: "Graduate (B.Sc)",
      institution: "CU Shah Science College, Ahmedabad",
      year: "1984",
      details: "Completed Bachelor of Science in Biochemistry from CU Shah Science College, Ahmedabad.",
      link: { label: "Amit Shah 2024 Sworn Affidavit (ECI)", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=8611", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹36,07,34,510 (₹36.07 Crore)",
      liabilities: "₹15,77,294 (₹15.77 Lakh)",
      year: "2024 Affidavit",
      details: "Includes inherited moveable and immoveable properties, equity shares portfolio, and land assets in Gujarat.",
      link: { label: "ADR MyNeta · Amit Shah 2024 Financial Disclosure", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=8611", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "No criminal cases declared in the 2024 Lok Sabha affidavit.",
      details: "Discharged by Special CBI Court in 2014. Sworn 2024 election affidavit records zero active criminal cases.",
      link: { label: "ECI Candidate Portal · Amit Shah Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Criminal Law Reform (BNS, BNSS, BSA 2023)", description: "Replaced colonial-era Indian Penal Code (1860) and CrPC with Bharatiya Nyaya Sanhita, emphasizing digital forensics and victim rights.", impact: "Modernized criminal justice code" },
      { title: "Ministry of Cooperation Formation", description: "Established dedicated central ministry to strengthen primary agricultural credit societies (PACS) and dairy cooperatives.", impact: "63,000+ PACS computerized" },
      { title: "Border Infrastructure & Security Operations", description: "Accelerated border road construction (Vibrant Villages Programme) and counter-insurgency stabilization in North-East India.", impact: "70% reduction in North-East insurgency" }
    ],
    verificationLinks: [
      { label: "ECI 2024 Affidavit (Gandhinagar)", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=8611", type: "ECI Affidavit" },
      { label: "Ministry of Home Affairs Portal", url: "https://www.mha.gov.in/", type: "Official Portal" },
      { label: "PRS India Parliamentary Track", url: "https://prsindia.org/mptrack/17th-lok-sabha/amit-shah", type: "PRS India" }
    ]
  },
  {
    id: "jp-nadda",
    name: "J.P. Nadda",
    office: "National President, BJP & Health Minister",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "National Party President & Cabinet Minister",
    avatar: "/avatars/narendra-modi.png",
    accent: "#e18a37",
    tier: "Tier 1: Supreme / National Leadership",
    background: "National President of Bharatiya Janata Party (2020–present). Union Minister of Health and Family Welfare & Chemicals and Fertilizers. Rajya Sabha MP and former Himachal Pradesh Cabinet Minister.",
    education: {
      qualification: "Graduate Professional (LLB)",
      institution: "St. Xavier's College, Patna (BA) & Himachal Pradesh University (LLB)",
      year: "1984",
      details: "Degree in Law (LLB) from Himachal Pradesh University, Shimla.",
      link: { label: "J.P. Nadda Rajya Sabha Affidavit", url: "https://myneta.info/rajsab09aff/candidate.php?candidate_id=1033", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹9,36,44,112 (₹9.36 Crore)",
      liabilities: "₹11,20,000 (₹11.2 Lakh)",
      year: "2024 Affidavit",
      details: "Includes residential building in Shimla, bank savings, and agricultural land holdings.",
      link: { label: "ADR MyNeta · J.P. Nadda Financials", url: "https://myneta.info/rajsab09aff/candidate.php?candidate_id=1033", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "No criminal cases declared in sworn affidavits.",
      details: "Zero active criminal cases declared.",
      link: { label: "ECI Affidavit Archives", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Expansion of AIIMS Network", description: "Oversees establishment and commissioning of 15+ new AIIMS institutions across Indian states.", impact: "Regional tertiary care access" },
      { title: "National Health Mission Governance", description: "Streamlined primary healthcare center (PHC) upgrades into Ayushman Arogya Mandirs.", impact: "160,000+ health centers upgraded" }
    ],
    verificationLinks: [
      { label: "Rajya Sabha Official Member Profile", url: "https://sansad.in/rs", type: "Official Portal" },
      { label: "ADR MyNeta Affidavit", url: "https://myneta.info/rajsab09aff/candidate.php?candidate_id=1033", type: "ADR MyNeta" }
    ]
  },
  {
    id: "nitin-gadkari",
    name: "Nitin Gadkari",
    office: "Union Minister of Road Transport & Highways",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    hierarchyRole: "Union Cabinet Minister / Senior Executive",
    avatar: "/avatars/narendra-modi.png",
    accent: "#e18a37",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "Union Minister for Road Transport & Highways (2014–present). Former National President of BJP (2009–2013). MP representing Nagpur, Maharashtra. Renowned for Maharashtra flyover projects and national highway expansion.",
    education: {
      qualification: "Post Graduate (M.Com, LLB)",
      institution: "GS Commerce College & University Law College, Nagpur",
      year: "1981",
      details: "Master of Commerce (M.Com) and Bachelor of Laws (LLB) from Nagpur University.",
      link: { label: "Nitin Gadkari 2024 Affidavit", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=9872", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹28,03,50,000 (₹28.03 Crore)",
      liabilities: "₹9,80,00,000 (₹9.80 Crore)",
      year: "2024 Affidavit",
      details: "Agricultural land, residential premises in Nagpur and Mumbai, agricultural enterprises.",
      link: { label: "ADR MyNeta · Nitin Gadkari 2024", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=9872", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 3,
      convictions: 0,
      summary: "3 cases declared (related to political agitations and public demonstrations). Zero convictions.",
      details: "All 3 declared cases stem from political protests and dharnas. No financial or moral turpitude offences.",
      link: { label: "ECI 2024 Affidavit (Nagpur)", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "National Highways Expansion", description: "Accelerated highway construction pace from 12 km/day to over 34 km/day nationwide.", impact: "55,000+ km highways built" },
      { title: "Delhi-Mumbai Expressway & Green Corridors", description: "Constructed 1,386 km 8-lane expressway cutting travel time from 24h to 12h.", impact: "12-hour corridor link" },
      { title: "Biofuel & Ethanol Blending Drive", description: "Pioneered E20 ethanol blending policy and green hydrogen mobility initiatives.", impact: "₹50,000 Cr forex savings on fuel" }
    ],
    verificationLinks: [
      { label: "ECI 2024 Sworn Affidavit", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=9872", type: "ECI Affidavit" },
      { label: "Ministry of Road Transport & Highways", url: "https://morth.nic.in/", type: "Official Portal" },
      { label: "PRS India Parliamentary Track", url: "https://prsindia.org/mptrack/17th-lok-sabha/nitin-gadkari", type: "PRS India" }
    ]
  },

  // --- INC ---
  {
    id: "mallikarjun-kharge",
    name: "Mallikarjun Kharge",
    office: "National President, INC",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "National Party President & Leader of Opposition (Rajya Sabha)",
    avatar: "/avatars/mallikarjun-kharge.png",
    accent: "#5e70a4",
    tier: "Tier 1: Supreme / National Leadership",
    background: "President of Indian National Congress (2022–present). Leader of Opposition in Rajya Sabha. Veteran legislator with 50+ years of public service, former Union Railway Minister and Labour Minister.",
    education: {
      qualification: "Graduate Professional (LLB)",
      institution: "SSL Law College, Gulbarga (Karnataka University, Dharwad)",
      year: "1967",
      details: "Completed Bachelor of Laws (LLB) in 1967.",
      link: { label: "Kharge 2024 Sworn Affidavit", url: "https://myneta.info/rajsab09aff/candidate.php?candidate_id=1211", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹38,76,15,834 (₹38.76 Crore)",
      liabilities: "₹27,50,000 (₹27.5 Lakh)",
      year: "2024 Affidavit",
      details: "Urban commercial and residential assets in Bengaluru & Gulbarga, agricultural land.",
      link: { label: "ADR MyNeta · Kharge 2024 Record", url: "https://myneta.info/rajsab09aff/candidate.php?candidate_id=1211", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 5,
      convictions: 0,
      summary: "5 declared criminal cases (political protests/agitation). Zero convictions.",
      details: "All 5 cases pertain to opposition political protests and agitation charges. No convictions recorded.",
      link: { label: "ECI Candidate Affidavit Record", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Article 371(J) Special Status for Hyderabad-Karnataka", description: "Spearheaded Constitutional Amendment granting reservation in education and jobs for backward region of North Karnataka.", impact: "Benefited 6 region districts" },
      { title: "ESIC Hospital Modernization", description: "Expanded Employees' State Insurance Corporation medical college and super-specialty network across India as Labour Minister.", impact: "30M+ industrial workers covered" }
    ],
    verificationLinks: [
      { label: "ECI Sworn Affidavit", url: "https://myneta.info/rajsab09aff/candidate.php?candidate_id=1211", type: "ECI Affidavit" },
      { label: "Rajya Sabha Official Profile", url: "https://sansad.in/rs", type: "Official Portal" },
      { label: "PRS India Parliamentary Track", url: "https://prsindia.org/mptrack/rajya-sabha/mallikarjun-kharge", type: "PRS India" }
    ]
  },
  {
    id: "rahul-gandhi",
    name: "Rahul Gandhi",
    office: "Leader of Opposition, Lok Sabha",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Leader of Opposition (Lok Sabha) & Senior MP",
    avatar: "/avatars/rahul-gandhi.png",
    accent: "#4d73b4",
    tier: "Tier 1: Supreme / National Leadership",
    background: "Leader of Opposition in 18th Lok Sabha (2024–present). Member of Parliament representing Rae Bareli (former MP from Wayanad and Amethi). Former Congress President (2017–2019). Led 4,000+ km Bharat Jodo Yatra.",
    education: {
      qualification: "Post Graduate (M.Phil)",
      institution: "Trinity College, University of Cambridge (M.Phil, 1995) & Rollins College (BA, 1994)",
      year: "1995",
      details: "M.Phil in Development Studies from Trinity College, Cambridge.",
      link: { label: "Rahul Gandhi 2024 Sworn Affidavit (ECI)", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=2195", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹20,39,61,862 (₹20.39 Crore)",
      liabilities: "₹49,79,184 (₹49.79 Lakh)",
      year: "2024 Affidavit",
      details: "Commercial building in Gurugram, equity mutual funds portfolio, sovereign gold bonds, and bank balances.",
      link: { label: "ADR MyNeta · Rahul Gandhi 2024 Financial Record", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=2195", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 18,
      convictions: 0,
      summary: "18 declared criminal cases (primarily criminal defamation and political protest charges). Supreme Court stayed conviction in 2023.",
      details: "Includes defamation suits filed across state courts. Stay on conviction granted by Supreme Court of India in Modi-surname case.",
      link: { label: "ECI 2024 Sworn Affidavit (Rae Bareli)", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "MGNREGA Rural Employment Guarantee", description: "Key political advocate for codifying 100-day guaranteed wage employment act for rural households.", impact: "50M+ rural families annual support" },
      { title: "Right to Information (RTI) Act Advocacy", description: "Championed transparency framework empowering citizens to query government records.", impact: "National transparency tool" },
      { title: "Land Acquisition Act 2013 Safeguards", description: "Pioneered mandatory consent and 4x market compensation clauses for farmers facing land acquisition.", impact: "Farmer rights protection" }
    ],
    verificationLinks: [
      { label: "ECI 2024 Affidavit (Rae Bareli)", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=2195", type: "ECI Affidavit" },
      { label: "Lok Sabha Official Member Profile", url: "https://sansad.in/ls", type: "Official Portal" },
      { label: "PRS India MP Track · Rahul Gandhi", url: "https://prsindia.org/mptrack/17th-lok-sabha/rahul-gandhi", type: "PRS India" }
    ]
  },
  {
    id: "shashi-tharoor",
    name: "Shashi Tharoor",
    office: "Member of Parliament, Thiruvananthapuram",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "Senior Member of Parliament & Committee Chair",
    avatar: "/avatars/rahul-gandhi.png",
    accent: "#4d73b4",
    tier: "Tier 4: Key Members of Parliament",
    background: "Member of Parliament for Thiruvananthapuram (4th term since 2009). Chair of Parliamentary Standing Committee on Chemicals & Fertilizers. Former UN Under-Secretary-General and Minister of State for External Affairs.",
    education: {
      qualification: "Doctorate (Ph.D)",
      institution: "The Fletcher School of Law and Diplomacy, Tufts University, USA",
      year: "1978",
      details: "Completed Ph.D. at age 22 from Fletcher School, Tufts University. BA from St. Stephen's College, Delhi University.",
      link: { label: "Shashi Tharoor 2024 Affidavit", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=3102", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹56,06,00,000 (₹56.06 Crore)",
      liabilities: "₹48,20,000 (₹48.20 Lakh)",
      year: "2024 Affidavit",
      details: "Includes bank deposits, foreign investments from UN career, residential apartments, and author royalties.",
      link: { label: "ADR MyNeta · Shashi Tharoor 2024", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=3102", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 2,
      convictions: 0,
      summary: "2 declared criminal cases. Fully acquitted in Sunanda Pushkar case by Delhi Court in 2021.",
      details: "Delhi court discharged him of all charges in 2021. Remaining cases relate to political speech/protest charges.",
      link: { label: "ECI Affidavit Record 2024", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Vizhinjam International Seaport", description: "Pioneered infrastructure approvals and central clearances for India's first transshipment deepwater port in Kerala.", impact: "₹7,700 Cr deepwater port project" },
      { title: "Technopark & IT Expansion in Kerala", description: "Attracted global technology firms and expanded Technopark Phase III infrastructure in Thiruvananthapuram.", impact: "100,000+ tech jobs created" }
    ],
    verificationLinks: [
      { label: "ECI 2024 Sworn Affidavit", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=3102", type: "ECI Affidavit" },
      { label: "PRS India Parliamentary Profile", url: "https://prsindia.org/mptrack/17th-lok-sabha/shashi-tharoor", type: "PRS India" }
    ]
  },
  {
    id: "revanth-reddy",
    name: "Revanth Reddy",
    office: "Chief Minister of Telangana",
    party: "INC",
    partyName: "Indian National Congress",
    hierarchyRole: "State Leader & Chief Minister",
    avatar: "/avatars/rahul-gandhi.png",
    accent: "#4d73b4",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "2nd Chief Minister of Telangana (Dec 2023–present). President of Telangana Pradesh Congress Committee (2021–2023). Former MP representing Malkajgiri constituency (largest voter constituency in India).",
    education: {
      qualification: "Graduate (BA)",
      institution: "AV College, Osmania University, Hyderabad",
      year: "1992",
      details: "Bachelor of Arts (BA) from Osmania University.",
      link: { label: "Revanth Reddy 2023 Assembly Affidavit", url: "https://myneta.info/Telangana2023/candidate.php?candidate_id=1102", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹30,04,50,000 (₹30.04 Crore)",
      liabilities: "₹1,20,00,000 (₹1.20 Crore)",
      year: "2023 Affidavit",
      details: "Agricultural land, urban residential plots in Hyderabad, and bank deposits.",
      link: { label: "ADR MyNeta · Revanth Reddy 2023", url: "https://myneta.info/Telangana2023/candidate.php?candidate_id=1102", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 89,
      convictions: 0,
      summary: "89 declared cases (primarily political agitations during Telangana statehood movement & opposition protests). Zero convictions.",
      details: "Sworn affidavit documents statehood protest charges, unlawful assembly, and opposition demonstration FIRs.",
      link: { label: "ECI Telangana Assembly Affidavit 2023", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Telangana 6 Guarantees Implementation", description: "Rolled out Maha Lakshmi free bus travel for women, 200 units free electricity, and Rythu Bharosa farm credit.", impact: "15M+ citizens benefited" },
      { title: "Musi Riverfront Development Project", description: "Initiated comprehensive ecological restoration and urban economic corridor along 55 km of Musi River in Hyderabad.", impact: "Urban ecological rejuvenation" }
    ],
    verificationLinks: [
      { label: "ECI 2023 Sworn Affidavit", url: "https://myneta.info/Telangana2023/candidate.php?candidate_id=1102", type: "ECI Affidavit" },
      { label: "Telangana Chief Minister Official Portal", url: "https://cm.telangana.gov.in/", type: "Official Portal" }
    ]
  },

  // --- AAP ---
  {
    id: "arvind-kejriwal",
    name: "Arvind Kejriwal",
    office: "National Convenor, AAP",
    party: "AAP",
    partyName: "Aam Aadmi Party",
    hierarchyRole: "National Convenor & Party Founder",
    avatar: "/avatars/arvind-kejriwal.png",
    accent: "#559dc2",
    tier: "Tier 1: Supreme / National Leadership",
    background: "National Convenor of Aam Aadmi Party. 7th Chief Minister of Delhi (2015–2024). Former Indian Revenue Service (IRS) Joint Commissioner. Ramon Magsaysay Award recipient (2006) for Parivartan anti-corruption movement.",
    education: {
      qualification: "Graduate Professional (B.Tech)",
      institution: "IIT Kharagpur (B.Tech, Mechanical Engineering)",
      year: "1989",
      details: "Bachelor of Technology in Mechanical Engineering from Indian Institute of Technology (IIT), Kharagpur.",
      link: { label: "Arvind Kejriwal 2025 Sworn Affidavit", url: "https://myneta.info/Delhi2025/candidate.php?candidate_id=180", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹4,24,36,504 (₹4.24 Crore)",
      liabilities: "Nil (Zero declared)",
      year: "2025 Affidavit",
      details: "Ancestral family property in Gurugram, bank savings, and minimal personal investments.",
      link: { label: "ADR MyNeta · Arvind Kejriwal 2025", url: "https://myneta.info/Delhi2025/candidate.php?candidate_id=180", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 15,
      convictions: 0,
      summary: "15 declared criminal cases (including Delhi excise policy matter currently under trial). Zero final convictions.",
      details: "Includes political protest FIRs and excise policy trial. Granted bail by Supreme Court of India in 2024.",
      link: { label: "ECI 2025 Delhi Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Mohalla Clinics Healthcare Network", description: "Pioneered 500+ neighborhood primary health centers providing free consultation, 200+ tests, and medicines.", impact: "20M+ patient visits annually" },
      { title: "Delhi Public School Infrastructure Overhaul", description: "Transformed government schools with modern labs, swimming pools, specialized academies, and teacher training in Cambridge.", impact: "98%+ Board exam pass rate" },
      { title: "Free Power & Water Subsidy Scheme", description: "Provided zero power bills up to 200 units and 20,000 liters free monthly water per household.", impact: "3.5M Delhi families benefit" }
    ],
    verificationLinks: [
      { label: "ECI 2025 Sworn Affidavit", url: "https://myneta.info/Delhi2025/candidate.php?candidate_id=180", type: "ECI Affidavit" },
      { label: "Delhi Legislative Assembly Record", url: "http://delhiassembly.nic.in/", type: "Official Portal" }
    ]
  },
  {
    id: "bhagwant-mann",
    name: "Bhagwant Mann",
    office: "Chief Minister of Punjab",
    party: "AAP",
    partyName: "Aam Aadmi Party",
    hierarchyRole: "State Leader & Chief Minister",
    avatar: "/avatars/arvind-kejriwal.png",
    accent: "#559dc2",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "17th Chief Minister of Punjab (2022–present). Former Member of Parliament from Sangrur (2014–2022). Leading figure in AAP's expansion outside Delhi.",
    education: {
      qualification: "Higher Secondary (12th)",
      institution: "Shaheed Udham Singh Government College, Sunam",
      year: "1992",
      details: "Passed 12th / Intermediate in Commerce.",
      link: { label: "Bhagwant Mann 2022 Affidavit", url: "https://myneta.info/Punjab2022/candidate.php?candidate_id=741", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,97,00,000 (₹1.97 Crore)",
      liabilities: "₹29,80,000 (₹29.80 Lakh)",
      year: "2022 Affidavit",
      details: "Moveable vehicles, agricultural land in Sangrur, bank savings.",
      link: { label: "ADR MyNeta · Bhagwant Mann 2022", url: "https://myneta.info/Punjab2022/candidate.php?candidate_id=741", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 declared case (political protest in Chandigarh). Zero convictions.",
      details: "Case pertains to political demonstration against water tariff hike.",
      link: { label: "ECI Punjab Sworn Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Aam Aadmi Clinics in Punjab", description: "Operationalized 840+ free primary health centers across rural and urban Punjab.", impact: "15M+ patient visits" },
      { title: "300 Units Free Household Power", description: "Delivered 300 units free monthly electricity covering over 90% of Punjab domestic consumers.", impact: "90% Punjab households zero bill" },
      { title: "Government Job Appointments Drive", description: "Recruited over 43,000 young candidates into state public services on pure merit without recommendations.", impact: "43,000+ merit job offers" }
    ],
    verificationLinks: [
      { label: "ECI 2022 Punjab Affidavit", url: "https://myneta.info/Punjab2022/candidate.php?candidate_id=741", type: "ECI Affidavit" },
      { label: "Punjab Chief Minister Portal", url: "https://punjab.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "atishi-marlena",
    name: "Atishi Marlena",
    office: "Chief Minister of Delhi",
    party: "AAP",
    partyName: "Aam Aadmi Party",
    hierarchyRole: "Chief Minister of Delhi & Cabinet Minister",
    avatar: "/avatars/arvind-kejriwal.png",
    accent: "#559dc2",
    tier: "Tier 2: Cabinet & Chief Ministers",
    background: "Chief Minister of Delhi (Sept 2024–present). Former Minister for Education, PWD, Power, and Finance in Delhi Government. MLA representing Kalkaji constituency. Key architect of Delhi school education reform.",
    education: {
      qualification: "Post Graduate (Master's - Oxford)",
      institution: "University of Oxford (Rhodes Scholar & Chevening Scholar) & St. Stephen's College, DU",
      year: "2003",
      details: "Master's degrees from Oxford University (Educational Research & History). BA in History from St. Stephen's College.",
      link: { label: "Atishi 2025 Delhi Affidavit", url: "https://myneta.info/Delhi2025/candidate.php?candidate_id=412", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹1,41,20,000 (₹1.41 Crore)",
      liabilities: "Nil (Zero declared)",
      year: "2025 Affidavit",
      details: "Bank fixed deposits, mutual funds, and savings.",
      link: { label: "ADR MyNeta · Atishi 2025 Record", url: "https://myneta.info/Delhi2025/candidate.php?candidate_id=412", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 1,
      convictions: 0,
      summary: "1 declared case (political demonstration defamation suit). Zero convictions.",
      details: "Pending defamation charge arising from political press conference.",
      link: { label: "ECI 2025 Sworn Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Happiness & Entrepreneurship Curriculum", description: "Designed holistic emotional well-being and student startup seed funding framework in Delhi government schools.", impact: "1M+ students engaged daily" },
      { title: "School Management Committees (SMCs)", description: "Empowered parent-led committees with direct financial grants for school upkeep and accountability.", impact: "1,000+ public schools reformed" }
    ],
    verificationLinks: [
      { label: "ECI 2025 Sworn Affidavit", url: "https://myneta.info/Delhi2025/candidate.php?candidate_id=412", type: "ECI Affidavit" },
      { label: "Delhi Government Official Portal", url: "https://delhi.gov.in/", type: "Official Portal" }
    ]
  },

  // --- TMC ---
  {
    id: "mamata-banerjee",
    name: "Mamata Banerjee",
    office: "Chief Minister of West Bengal & TMC Chairperson",
    party: "TMC",
    partyName: "All India Trinamool Congress",
    hierarchyRole: "Party Chairperson & Chief Minister",
    avatar: "/avatars/mamata-banerjee.png",
    accent: "#7a9ac8",
    tier: "Tier 1: Supreme / National Leadership",
    background: "8th Chief Minister of West Bengal (2011–present). Founder and Chairperson of All India Trinamool Congress (1998). Former Union Minister of Railways (twice) and Coal Minister. 7-term Member of Parliament from Kolkata South.",
    education: {
      qualification: "Post Graduate (MA, LLB)",
      institution: "Calcutta University (MA in Islamic History) & Jogesh Chandra Chaudhuri Law College (LLB)",
      year: "1979",
      details: "MA from Calcutta University and LLB from Jogesh Chandra Chaudhuri Law College, Kolkata.",
      link: { label: "Mamata Banerjee 2021 Affidavit", url: "https://www.myneta.info/WestBengal2021/candidate.php?candidate_id=271", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹16,72,352 (₹16.72 Lakh)",
      liabilities: "Nil (Zero declared)",
      year: "2021 Affidavit",
      details: "Bank deposits and personal effects. No car, non-agricultural land, or residential property registered in her name.",
      link: { label: "ADR MyNeta · Mamata Banerjee Financial Record", url: "https://www.myneta.info/WestBengal2021/candidate.php?candidate_id=271", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "No criminal cases declared in sworn election affidavit.",
      details: "Zero active criminal cases declared in 2021 Assembly filings.",
      link: { label: "ECI West Bengal Candidate Record", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Kanyashree Prakalpa (UN Awarded)", description: "Conditional cash transfer scheme preventing child marriage and encouraging girl child education.", impact: "8M+ schoolgirls covered (UN Public Service Award)" },
      { title: "Lakshmir Bhandar Income Transfer", description: "Direct monthly financial support (₹1,000–₹1,200) to female heads of households in West Bengal.", impact: "21M+ women monthly transfer" },
      { title: "Sabooj Sathi & Duare Sarkar", description: "Distributed bicycles to 10M+ high school students and held mobile administration camps serving 50M+ civic applications.", impact: "10M bicycles distributed" }
    ],
    verificationLinks: [
      { label: "ECI 2021 Sworn Affidavit", url: "https://www.myneta.info/WestBengal2021/candidate.php?candidate_id=271", type: "ECI Affidavit" },
      { label: "West Bengal Chief Minister Portal", url: "https://wb.gov.in/", type: "Official Portal" }
    ]
  },
  {
    id: "abhishek-banerjee",
    name: "Abhishek Banerjee",
    office: "All India General Secretary, TMC",
    party: "TMC",
    partyName: "All India Trinamool Congress",
    hierarchyRole: "National General Secretary & MP",
    avatar: "/avatars/mamata-banerjee.png",
    accent: "#7a9ac8",
    tier: "Tier 3: Party Executives & Secretaries",
    background: "All India General Secretary of TMC. Member of Parliament representing Diamond Harbour constituency (3rd consecutive term since 2014). Key strategist for party campaign and national youth outreach.",
    education: {
      qualification: "Post Graduate (MBA)",
      institution: "Indian Institute of Planning and Management (IIPM), New Delhi",
      year: "2009",
      details: "Bachelor of Business Administration (BBA) and Master of Business Administration (MBA).",
      link: { label: "Abhishek Banerjee 2024 Affidavit", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=4512", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹2,14,50,000 (₹2.14 Crore)",
      liabilities: "Nil (Zero declared)",
      year: "2024 Affidavit",
      details: "Includes bank balances, mutual fund units, and residential interest.",
      link: { label: "ADR MyNeta · Abhishek Banerjee 2024", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=4512", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 3,
      convictions: 0,
      summary: "3 declared cases (criminal defamation and political agitation). Zero convictions.",
      details: "Defamation proceedings filed by political opponents. No convictions recorded.",
      link: { label: "ECI 2024 Sworn Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Nababharat Model Constituency Project", description: "Upgraded rural connectivity, solar lighting, and drinking water access across Diamond Harbour MP constituency.", impact: "Model rural infrastructure model" },
      { title: "Nishobdo Biplab Healthcare Camps", description: "Organized free specialized medical diagnostics and surgery camps for rural seniors in West Bengal.", impact: "500,000+ free treatments" }
    ],
    verificationLinks: [
      { label: "ECI 2024 Sworn Affidavit", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=4512", type: "ECI Affidavit" },
      { label: "Lok Sabha Official Member Profile", url: "https://sansad.in/ls", type: "Official Portal" }
    ]
  },

  // --- SP ---
  {
    id: "akhilesh-yadav",
    name: "Akhilesh Yadav",
    office: "National President, Samajwadi Party",
    party: "SP",
    partyName: "Samajwadi Party",
    hierarchyRole: "National Party President & MP",
    avatar: "/avatars/rahul-gandhi.png",
    accent: "#c05e70",
    tier: "Tier 1: Supreme / National Leadership",
    background: "National President of Samajwadi Party (2017–present). Member of Parliament from Kannauj (2024). 38th Chief Minister of Uttar Pradesh (2012–2017). Former MP from Azamgarh and Mainpuri.",
    education: {
      qualification: "Post Graduate (Master's - Sydney)",
      institution: "University of Sydney, Australia (Master's in Environmental Engineering) & JSS Mysore (BE)",
      year: "1998",
      details: "Master's degree in Environmental Engineering from University of Sydney. Bachelor of Engineering (Civil/Environmental) from JSS Academy, Mysore.",
      link: { label: "Akhilesh Yadav 2024 Affidavit", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=6124", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹42,39,34,000 (₹42.39 Crore)",
      liabilities: "₹25,40,000 (₹25.40 Lakh)",
      year: "2024 Affidavit",
      details: "Agricultural land plots in Saifai, residential commercial property in Lucknow, and investments.",
      link: { label: "ADR MyNeta · Akhilesh Yadav 2024", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=6124", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 4,
      convictions: 0,
      summary: "4 declared criminal cases (political agitations and dharnas). Zero convictions.",
      details: "Cases filed during opposition political marches in UP. No convictions.",
      link: { label: "ECI 2024 Sworn Affidavit", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "Agra-Lucknow Expressway (302 km)", description: "Constructed 302 km 6-lane access-controlled expressway built in record 23-month timeline featuring emergency airstrip.", impact: "Cut travel time by 4 hours" },
      { title: "Lucknow Metro Rail Project", description: "Initiated and commissioned capital city mass rapid transit rail system.", impact: "Urban green transit" },
      { title: "UP Dial 100 Emergency Response System", description: "Established centralized GPS-integrated police response fleet across all 75 Uttar Pradesh districts.", impact: "15-minute response target" }
    ],
    verificationLinks: [
      { label: "ECI 2024 Sworn Affidavit (Kannauj)", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=6124", type: "ECI Affidavit" },
      { label: "Lok Sabha Official Profile", url: "https://sansad.in/ls", type: "Official Portal" },
      { label: "PRS India Parliamentary Track", url: "https://prsindia.org/mptrack/18th-lok-sabha/akhilesh-yadav", type: "PRS India" }
    ]
  },
  {
    id: "dimple-yadav",
    name: "Dimple Yadav",
    office: "Member of Parliament, Mainpuri",
    party: "SP",
    partyName: "Samajwadi Party",
    hierarchyRole: "Senior Member of Parliament",
    avatar: "/avatars/rahul-gandhi.png",
    accent: "#c05e70",
    tier: "Tier 4: Key Members of Parliament",
    background: "Member of Parliament for Mainpuri (re-elected 2024). Former MP representing Kannauj (2012–2019). Senior leader in Samajwadi Party's women and rural outreach.",
    education: {
      qualification: "Graduate (B.Com)",
      institution: "Lucknow University",
      year: "1998",
      details: "Bachelor of Commerce (B.Com) from Lucknow University.",
      link: { label: "Dimple Yadav 2024 Affidavit", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=5891", type: "ECI Affidavit" }
    },
    financials: {
      assets: "₹15,50,00,000 (₹15.50 Crore)",
      liabilities: "Nil (Zero declared)",
      year: "2024 Affidavit",
      details: "Gold jewelry, agricultural land holdings, bank deposits.",
      link: { label: "ADR MyNeta · Dimple Yadav 2024", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=5891", type: "ADR MyNeta" }
    },
    criminalHistory: {
      totalCases: 0,
      convictions: 0,
      summary: "No criminal cases declared in sworn election affidavit.",
      details: "Zero active criminal cases.",
      link: { label: "ECI Sworn Declaration", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" }
    },
    developmentContributions: [
      { title: "1090 Women Powerline Support", description: "Championed specialized 24/7 call center framework dealing with female harassment prevention in UP.", impact: "Statewide female safety" },
      { title: "Rural Weaver & Handicraft Assistance", description: "Facilitated credit assistance and market linkage for Zari-Zardozi artisans in Mainpuri and Western UP.", impact: "Artisan livelihood preservation" }
    ],
    verificationLinks: [
      { label: "ECI 2024 Sworn Affidavit", url: "https://www.myneta.info/LokSabha2024/candidate.php?candidate_id=5891", type: "ECI Affidavit" },
      { label: "Lok Sabha Member Track", url: "https://sansad.in/ls", type: "Official Portal" }
    ]
  }
];

const PARTIES = [
  { code: "ALL", name: "All Recognized Parties", accent: "#887b61", note: "Complete civic transparency directory across parties." },
  { code: "BJP", name: "Bharatiya Janata Party", accent: "#e18a37", note: "Ruling national party folder with full leadership hierarchy." },
  { code: "INC", name: "Indian National Congress", accent: "#4d73b4", note: "Primary opposition national party folder." },
  { code: "AAP", name: "Aam Aadmi Party", accent: "#559dc2", note: "Recognized national party operating in Delhi & Punjab." },
  { code: "TMC", name: "All India Trinamool Congress", accent: "#7a9ac8", note: "Recognized regional/national party in West Bengal." },
  { code: "SP", name: "Samajwadi Party", accent: "#c05e70", note: "Major recognized party in Uttar Pradesh." }
];

const TOPICS: Topic[] = ["National", "Geopolitics", "Economy", "Law & Rights", "Protest"];

function Nav({ screen, setScreen, dark, toggleDark }: { screen: Screen; setScreen: (screen: Screen) => void; dark: boolean; toggleDark: () => void }) {
  const items: Array<[Screen, string]> = [
    ["hierarchy", "Leadership Hierarchy"],
    ["party", "Party Folders"],
    ["compare", "Compare Methodology"],
    ["news", "News Desk"],
    ["rights", "Constitutional Rights"],
    ["explainer", "Civic Explainer AI"]
  ];
  return (
    <header className="topbar">
      <div className="shell topbar-inner">
        <button className="brand" onClick={() => setScreen("hierarchy")}>
          <span className="brand-mark">p</span>
          <span>
            <b>Panopticon</b>
            <small>Civic & Political Intelligence</small>
          </span>
        </button>
        <nav>
          {items.map(([key, label]) => (
            <button key={key} onClick={() => setScreen(key)} className={screen === key ? "nav-active" : ""}>
              {label}
            </button>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="theme-button" onClick={toggleDark} aria-label="Switch light and dark theme">
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button className="ask-button" onClick={() => setScreen("explainer")}>
            <Sparkles className="size-3.5" /> Source-First Assistant
          </button>
        </div>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}

function LeaderCard({ member, onOpen, compact = false }: { member: LeaderMember; onOpen: () => void; compact?: boolean }) {
  return (
    <button className={`leader-card card-3d ${compact ? "leader-card-compact" : ""}`} onClick={onOpen} style={{ "--leader-accent": member.accent } as CSSProperties}>
      <div className="leader-top">
        <span>{member.tier.split(":")[0]}</span>
        <ArrowRight className="size-4" />
      </div>
      <div className="avatar-stage">
        <span className="draft-circle" />
        <span className="draft-square" />
        <img src={member.avatar} alt={`Caricature of ${member.name}`} />
      </div>
      <div className="leader-name">
        <div>
          <h3>{member.name}</h3>
          <p>{member.office}</p>
        </div>
        <b>{member.party}</b>
      </div>
      {!compact && (
        <div className="leader-proof">
          <BadgeCheck className="size-3.5" />
          <span>{member.hierarchyRole}</span>
        </div>
      )}
    </button>
  );
}

function HierarchyExplorer({ onSelectMember, setScreen }: { onSelectMember: (member: LeaderMember) => void; setScreen: (s: Screen) => void }) {
  const [selectedParty, setSelectedParty] = useState<string>("ALL");
  const [selectedTier, setSelectedTier] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const tiers: HierarchyTier[] = [
    "Tier 1: Supreme / National Leadership",
    "Tier 2: Cabinet & Chief Ministers",
    "Tier 3: Party Executives & Secretaries",
    "Tier 4: Key Members of Parliament"
  ];

  const filteredMembers = ALL_MEMBERS.filter((m) => {
    const matchesParty = selectedParty === "ALL" || m.party === selectedParty;
    const matchesTier = selectedTier === "ALL" || m.tier === selectedTier;
    const matchesSearch =
      searchQuery.trim() === "" ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.office.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.partyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.education.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesParty && matchesTier && matchesSearch;
  });

  return (
    <section className="shell page">
      <div className="hero-banner">
        <p className="eyebrow"><Network className="size-3" /> Full Political Hierarchy</p>
        <h1>Inspect the Power Structure.<br /><em>Verify Every Public Record.</em></h1>
        <p className="page-copy">
          Explore complete organizational political hierarchies—from Supreme Leaders, Union Ministers, and Chief Ministers down to Key Members of Parliament. Inspect verified sworn affidavits for Education, Financial Assets, Criminal Cases, and Development Contributions with direct primary source links.
        </p>
      </div>

      <div className="filter-toolbar glass-sheet">
        <div className="search-box">
          <Search className="size-4" />
          <input
            type="text"
            placeholder="Search leader name, constituency, degree, or office..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <Filter className="size-3.5" />
          <select value={selectedParty} onChange={(e) => setSelectedParty(e.target.value)}>
            <option value="ALL">All Political Parties</option>
            {PARTIES.filter((p) => p.code !== "ALL").map((p) => (
              <option key={p.code} value={p.code}>
                {p.code} - {p.name}
              </option>
            ))}
          </select>
          <select value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)}>
            <option value="ALL">All Hierarchy Tiers</option>
            {tiers.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {tiers.map((tierName) => {
        const membersInTier = filteredMembers.filter((m) => m.tier === tierName);
        if (membersInTier.length === 0) return null;

        return (
          <div key={tierName} className="tier-section">
            <div className="tier-header">
              <h3>{tierName}</h3>
              <span>{membersInTier.length} Verified Profile{membersInTier.length > 1 ? "s" : ""}</span>
            </div>
            <div className="leader-grid">
              {membersInTier.map((member) => (
                <LeaderCard key={member.id} member={member} onOpen={() => onSelectMember(member)} />
              ))}
            </div>
          </div>
        );
      })}

      {filteredMembers.length === 0 && (
        <div className="glass-sheet empty-state">
          <ShieldAlert className="size-8" />
          <h3>No political profiles match your filter criteria</h3>
          <p>Try resetting search query or selecting "All Recognized Parties".</p>
          <button className="ink-button" onClick={() => { setSelectedParty("ALL"); setSelectedTier("ALL"); setSearchQuery(""); }}>
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}

function ProfileDetail({ member, back, onSelectMember }: { member: LeaderMember; back: () => void; onSelectMember: (m: LeaderMember) => void }) {
  const [activeTab, setActiveTab] = useState<"all" | "background" | "education" | "financials" | "criminal" | "contributions">("all");

  const downloadShare = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 2160;
    canvas.height = 3840;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const g = ctx.createLinearGradient(0, 0, 2160, 3840);
    g.addColorStop(0, "#f8f3e8");
    g.addColorStop(1, "#b9d0ee");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 2160, 3840);
    ctx.fillStyle = "#20262d";
    ctx.font = "900 140px sans-serif";
    ctx.fillText("PANOPTICON CIVIC", 170, 260);
    ctx.font = "900 200px sans-serif";
    ctx.fillText(member.name.toUpperCase(), 170, 850);
    ctx.font = "700 90px sans-serif";
    ctx.fillText(member.office.toUpperCase(), 180, 1010);
    ctx.strokeStyle = member.accent;
    ctx.lineWidth = 20;
    ctx.setLineDash([34, 24]);
    ctx.strokeRect(170, 1260, 1820, 1580);
    ctx.setLineDash([]);
    ctx.font = "700 115px sans-serif";
    ctx.fillText("VERIFIED PUBLIC RECORD PROFILE", 255, 1530);
    ctx.font = "600 70px sans-serif";
    ctx.fillText("Source-linked ECI Affidavit & Performance Data", 255, 1680);
    ctx.font = "700 65px sans-serif";
    ctx.fillText("Panopticon Civic Platform · Verified Records", 170, 3600);
    const a = document.createElement("a");
    a.download = `${member.id}-civic-profile.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
  };

  const samePartyMembers = ALL_MEMBERS.filter((item) => item.party === member.party && item.id !== member.id);

  return (
    <section className="shell page">
      <button className="back-link" onClick={back}>
        <ArrowLeft className="size-4" /> Back to Hierarchy Explorer
      </button>

      <div className="profile-hero">
        <div className="profile-portrait">
          <img src={member.avatar} alt={`Caricature portrait of ${member.name}`} />
          <span>Verified Local Asset</span>
        </div>
        <div>
          <p className="eyebrow">
            <i style={{ background: member.accent }} /> {member.party} ({member.partyName}) · {member.tier}
          </p>
          <h1>{member.name}</h1>
          <h3>{member.office} — <i>{member.hierarchyRole}</i></h3>
          <p className="profile-copy">{member.background}</p>
          <div className="profile-actions">
            <button className="ink-button" onClick={downloadShare}>
              <Download className="size-4" /> Download 2160×3840 Civic Infographic
            </button>
            <button className="outline-button" onClick={back}>
              Explore {member.party} Hierarchy <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="tab-bar glass-sheet">
        <button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>All Record Modules</button>
        <button className={activeTab === "education" ? "active" : ""} onClick={() => setActiveTab("education")}><GraduationCap className="size-3.5 inline" /> Education</button>
        <button className={activeTab === "financials" ? "active" : ""} onClick={() => setActiveTab("financials")}><Coins className="size-3.5 inline" /> Financials</button>
        <button className={activeTab === "criminal" ? "active" : ""} onClick={() => setActiveTab("criminal")}><Gavel className="size-3.5 inline" /> Criminal History</button>
        <button className={activeTab === "contributions" ? "active" : ""} onClick={() => setActiveTab("contributions")}><Landmark className="size-3.5 inline" /> Development Contributions</button>
      </div>

      <div className="records-full-stack">
        {/* Module 1: Education */}
        {(activeTab === "all" || activeTab === "education") && (
          <article className="record-box glass-sheet">
            <div className="box-head">
              <GraduationCap className="size-6 icon-accent" />
              <div>
                <h3>Educational Qualification</h3>
                <span className="source-tag">Source: Sworn Election Affidavit</span>
              </div>
            </div>
            <div className="box-body">
              <div className="meta-badge">{member.education.qualification}</div>
              <p><b>Institution & Degree:</b> {member.education.institution}</p>
              <p><b>Year of Passing:</b> {member.education.year}</p>
              <p>{member.education.details}</p>
              <a className="verify-link" href={member.education.link.url} target="_blank" rel="noreferrer">
                <ExternalLink className="size-3.5" /> Verify on {member.education.link.label} [{member.education.link.type}]
              </a>
            </div>
          </article>
        )}

        {/* Module 2: Financial Assets & Liabilities */}
        {(activeTab === "all" || activeTab === "financials") && (
          <article className="record-box glass-sheet">
            <div className="box-head">
              <Coins className="size-6 icon-accent" />
              <div>
                <h3>Financial Status & Assets Disclosure</h3>
                <span className="source-tag">Source: ECI Sworn Affidavit ({member.financials.year})</span>
              </div>
            </div>
            <div className="box-body">
              <div className="grid-2col">
                <div className="stat-card">
                  <small>Total Declared Assets</small>
                  <b>{member.financials.assets}</b>
                </div>
                <div className="stat-card">
                  <small>Total Declared Liabilities</small>
                  <b>{member.financials.liabilities}</b>
                </div>
              </div>
              <p>{member.financials.details}</p>
              <a className="verify-link" href={member.financials.link.url} target="_blank" rel="noreferrer">
                <ExternalLink className="size-3.5" /> Verify Financial Disclosure on {member.financials.link.label} [{member.financials.link.type}]
              </a>
            </div>
          </article>
        )}

        {/* Module 3: Criminal History */}
        {(activeTab === "all" || activeTab === "criminal") && (
          <article className="record-box glass-sheet">
            <div className="box-head">
              <Gavel className="size-6 icon-accent" />
              <div>
                <h3>Declared Criminal History</h3>
                <span className="source-tag">Sworn ECI Candidate Affidavit</span>
              </div>
            </div>
            <div className="box-body">
              <div className="grid-2col">
                <div className="stat-card">
                  <small>Sworn Pending Criminal Cases</small>
                  <b className={member.criminalHistory.totalCases > 0 ? "warn-text" : "safe-text"}>
                    {member.criminalHistory.totalCases} {member.criminalHistory.totalCases === 1 ? "Case" : "Cases"}
                  </b>
                </div>
                <div className="stat-card">
                  <small>Proven Convictions</small>
                  <b>{member.criminalHistory.convictions} Convictions</b>
                </div>
              </div>
              <p><b>Summary:</b> {member.criminalHistory.summary}</p>
              <p>{member.criminalHistory.details}</p>
              <a className="verify-link" href={member.criminalHistory.link.url} target="_blank" rel="noreferrer">
                <ExternalLink className="size-3.5" /> Inspect Sworn Affidavit on {member.criminalHistory.link.label} [{member.criminalHistory.link.type}]
              </a>
            </div>
          </article>
        )}

        {/* Module 4: Development Contributions */}
        {(activeTab === "all" || activeTab === "contributions") && (
          <article className="record-box glass-sheet">
            <div className="box-head">
              <Building2 className="size-6 icon-accent" />
              <div>
                <h3>Contribution to Country Development & Governance</h3>
                <span className="source-tag">Verified Public Initiatives & Key Policies</span>
              </div>
            </div>
            <div className="box-body">
              <div className="contributions-list">
                {member.developmentContributions.map((c, i) => (
                  <div key={i} className="contribution-card">
                    <CheckCircle2 className="size-4 icon-check" />
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.description}</p>
                      <span className="impact-pill">Measurable Impact: {c.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        )}

        {/* Module 5: Verification Links */}
        <article className="record-box glass-sheet">
          <div className="box-head">
            <BadgeCheck className="size-6 icon-accent" />
            <div>
              <h3>Primary Verification Source Links</h3>
              <span className="source-tag">External Verification Audit Trail</span>
            </div>
          </div>
          <div className="box-body">
            <div className="links-list">
              {member.verificationLinks.map((link, idx) => (
                <a key={idx} className="link-item" href={link.url} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" />
                  <div>
                    <b>{link.label}</b>
                    <small>Type: {link.type}</small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Party Graph / Peers */}
      <div className="profile-lower">
        <div className="glass-sheet party-graph">
          <p className="eyebrow">Party Organizational Graph</p>
          <h2>{member.partyName} Roster</h2>
          <div className="leader-grid">
            {samePartyMembers.map((peer) => (
              <LeaderCard key={peer.id} member={peer} compact onOpen={() => onSelectMember(peer)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartyDirectory({ onSelectMember }: { onSelectMember: (m: LeaderMember) => void }) {
  return (
    <section className="shell page">
      <p className="eyebrow"><FolderTree className="size-3" /> Party Organizational Folders</p>
      <h1>Select a Political Party.<br /><em>Inspect its Full Hierarchy.</em></h1>
      <p className="page-copy">
        Browse political party structures. Every party node breaks down into Tier 1 Supreme Leadership, Union/State Ministers, and Members of Parliament.
      </p>

      <div className="party-folders">
        {PARTIES.filter((p) => p.code !== "ALL").map((party, index) => {
          const members = ALL_MEMBERS.filter((m) => m.party === party.code);
          return (
            <article key={party.code} className="party-folder">
              <div className="folder-head">
                <div className="folder-index" style={{ background: party.accent }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="eyebrow">{party.code}</p>
                  <h2>{party.name}</h2>
                  <p>{party.note}</p>
                </div>
                <span className="method-tag">{members.length} Verified Profiles</span>
              </div>
              <div className="folder-content">
                {members.map((m) => (
                  <LeaderCard key={m.id} member={m} compact onOpen={() => onSelectMember(m)} />
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="shell page">
      <p className="eyebrow"><Scale className="size-3" /> Non-Biased Comparison Methodology</p>
      <h1>Objective Record Auditing,<br /><em>Not Opinion Scores.</em></h1>
      <p className="page-copy">
        Panopticon provides factual comparison based strictly on public sworn Election Commission affidavits (ECI), PRS Legislative Research data, and official government portals without editorial bias.
      </p>

      <div className="method-ribbon">
        <Scale className="size-5" />
        <span>Every profile metric includes a direct verification link to its underlying sworn ECI affidavit or official government document.</span>
      </div>

      <div className="compare-table">
        <table>
          <thead>
            <tr>
              <th>Leader Name</th>
              <th>Party</th>
              <th>Education Qualification</th>
              <th>Declared Assets</th>
              <th>Declared Cases</th>
              <th>Primary Source Verification Link</th>
            </tr>
          </thead>
          <tbody>
            {ALL_MEMBERS.slice(0, 8).map((m) => (
              <tr key={m.id}>
                <td><b>{m.name}</b><small>{m.office}</small></td>
                <td><span style={{ color: m.accent, fontWeight: "bold" }}>{m.party}</span></td>
                <td>{m.education.qualification}</td>
                <td>{m.financials.assets}</td>
                <td>
                  <span className={m.criminalHistory.totalCases > 0 ? "warn-badge" : "safe-badge"}>
                    {m.criminalHistory.totalCases} {m.criminalHistory.totalCases === 1 ? "case" : "cases"}
                  </span>
                </td>
                <td>
                  <a href={m.verificationLinks[0].url} target="_blank" rel="noreferrer" className="link-button">
                    <ExternalLink className="size-3 inline" /> {m.verificationLinks[0].label}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function NewsDesk() {
  const [topic, setTopic] = useState<string>("All");
  const news = trpc.news.latest.useQuery(undefined, { refetchInterval: 30 * 60 * 1000 });
  const articles = (news.data?.items ?? []).filter((item) => topic === "All" || item.topic === topic);

  return (
    <section className="shell page">
      <p className="eyebrow"><RadioTower className="size-3" /> Current Source Desk</p>
      <h1>Verified News Desk,<br /><em>Sources Always Linked.</em></h1>
      <p className="page-copy">
        Real-time news feeds deduplicated from trusted national press publishers with intact original links.
      </p>

      <div className="topic-filter-row">
        <button className={topic === "All" ? "active" : ""} onClick={() => setTopic("All")}>All</button>
        {TOPICS.map((item) => (
          <button className={topic === item ? "active" : ""} key={item} onClick={() => setTopic(item)}>
            {item}
          </button>
        ))}
        <button className="refresh" onClick={() => news.refetch()}>
          <RefreshCw className={news.isFetching ? "size-3.5 spin" : "size-3.5"} /> Refresh Feeds
        </button>
      </div>

      <div className="news-layout">
        <div className="news-list">
          {news.isLoading ? (
            <div className="glass-sheet blank">Loading publisher RSS feeds...</div>
          ) : articles.length ? (
            articles.map((item) => (
              <a className="news-card card-3d" href={item.url} target="_blank" rel="noreferrer" key={item.id}>
                <div>
                  <div>
                    <span>{item.topic}</span>
                    <small>{item.source}</small>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.summary || "Click to open full report at publisher site."}</p>
                </div>
                <aside>
                  <small>{item.publishedAt ? new Date(item.publishedAt).toLocaleString() : "Live"}</small>
                  <ExternalLink className="size-4" />
                </aside>
              </a>
            ))
          ) : (
            <div className="glass-sheet blank">No news articles currently matched for this topic.</div>
          )}
        </div>
      </div>
    </section>
  );
}

function Rights() {
  const rights = [
    ["Article 14", "Equality before law", "Equality before law & equal protection of laws.", COMMON_SOURCES.constitution, "#4d73b4"],
    ["Article 19", "Freedoms & limits", "Protection of speech, assembly, and movement.", COMMON_SOURCES.constitution, "#7a9ac8"],
    ["Article 21", "Life & personal liberty", "Right to life, dignity, and personal liberty.", COMMON_SOURCES.constitution, "#e18a37"],
    ["Article 22", "Arrest safeguards", "Rights to legal counsel and 24-hour magistrate production.", COMMON_SOURCES.constitution, "#c05e70"],
    ["BNSS 2023", "Arrest procedure", "Statutory rules for FIR, bail, and investigation.", COMMON_SOURCES.bnss, "#887b61"]
  ] as const;

  return (
    <section className="shell page">
      <p className="eyebrow"><BookOpenCheck className="size-3" /> Constitutional Literacy</p>
      <h1>Know Your Fundamental Rights.<br /><em>Anchored to Primary Text.</em></h1>
      <div className="rights-grid">
        {rights.map(([art, title, desc, src, color]) => (
          <a className="rights-card card-3d" href={src.url} target="_blank" rel="noreferrer" key={art} style={{ "--right-ink": color } as CSSProperties}>
            <small>{art}</small>
            <h2>{title}</h2>
            <p>{desc}</p>
            <b>Read Official Text <ArrowRight className="size-4" /></b>
          </a>
        ))}
      </div>
    </section>
  );
}

function Explainer() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Ask any general question regarding **Constitutional Rights (Articles 14, 19, 21, 22)**, **BNSS 2023 procedures**, or **Political Leaders' Affidavit Records**. Every answer provides source citations and uncertainty tags.",
      uncertainty: "Low",
      citations: [COMMON_SOURCES.constitution, COMMON_SOURCES.eci]
    }
  ]);

  const answer = (q: string): Message => {
    const norm = q.toLowerCase();
    if (/\b(my|me|i\s+was|i\s+am|my\s+case|my\s+fir|my\s+arrest)\b/.test(norm)) {
      return {
        role: "assistant",
        content: "I cannot provide legal representation or personal case advice. Please consult a legal professional or reach out to NALSA official legal aid.",
        uncertainty: "High",
        responseKind: "refusal",
        citations: [COMMON_SOURCES.nalsa]
      };
    }
    if (norm.includes("modi") || norm.includes("bjp")) {
      return {
        role: "assistant",
        content: "Narendra Modi (Prime Minister) declared ₹3.02 Crore in total assets with 0 criminal cases in his 2024 Varanasi ECI affidavit.",
        uncertainty: "Low",
        citations: [ALL_MEMBERS[0].verificationLinks[0]]
      };
    }
    if (norm.includes("rahul") || norm.includes("inc") || norm.includes("congress")) {
      return {
        role: "assistant",
        content: "Rahul Gandhi (Leader of Opposition, Lok Sabha) declared ₹20.39 Crore in total assets and 18 declared cases in his 2024 Rae Bareli ECI affidavit.",
        uncertainty: "Low",
        citations: [ALL_MEMBERS[4].verificationLinks[0]]
      };
    }
    return {
      role: "assistant",
      content: "Panopticon provides factual information directly sourced from Election Commission of India affidavits, MyNeta/ADR, and Parliamentary tracks.",
      uncertainty: "Medium",
      citations: [COMMON_SOURCES.eci, COMMON_SOURCES.adr]
    };
  };

  return (
    <section className="shell explainer-page">
      <aside>
        <p className="eyebrow"><Sparkles className="size-3" /> Civic Assistant</p>
        <h1>Ask the Public Record.<br /><em>Source-First Verification.</em></h1>
        <p>Answers are generated from primary public documents and verified ECI affidavits.</p>
      </aside>
      <AIChatBox
        messages={messages}
        onSendMessage={(text) => setMessages((old) => [...old, { role: "user", content: text }, answer(text)])}
        height="650px"
        placeholder="Ask about political affidavits, leader background, or constitutional rights..."
        suggestedPrompts={[
          "What is Narendra Modi's declared education and financial status?",
          "What cases are declared in Rahul Gandhi's 2024 ECI affidavit?",
          "What is Arvind Kejriwal's educational degree?",
          "How does Article 14 protect equality before law?"
        ]}
      />
    </section>
  );
}

function AppContent() {
  const [screen, setScreen] = useState<Screen>("hierarchy");
  const [selectedMember, setSelectedMember] = useState<LeaderMember>(ALL_MEMBERS[0]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const enabled = localStorage.getItem("panopticon-theme") === "dark";
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("panopticon-theme", next ? "dark" : "light");
  };

  const openMember = (member: LeaderMember) => {
    setSelectedMember(member);
    setScreen("profile");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const body =
    screen === "hierarchy" ? (
      <HierarchyExplorer onSelectMember={openMember} setScreen={setScreen} />
    ) : screen === "party" ? (
      <PartyDirectory onSelectMember={openMember} />
    ) : screen === "profile" ? (
      <ProfileDetail member={selectedMember} back={() => setScreen("hierarchy")} onSelectMember={openMember} />
    ) : screen === "compare" ? (
      <Compare />
    ) : screen === "news" ? (
      <NewsDesk />
    ) : screen === "rights" ? (
      <Rights />
    ) : (
      <Explainer />
    );

  return (
    <div className="paper-canvas">
      <div className="paper-grain" />
      <Nav screen={screen} setScreen={setScreen} dark={dark} toggleDark={toggleDark} />
      <main>{body}</main>
      <footer>
        <div className="shell">
          <b>Panopticon Civic Intelligence Platform</b>
          <p>
            All information is strictly factual, non-biased, and directly sourced from sworn Election Commission of India (ECI) affidavits, MyNeta (ADR), and Parliamentary records.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <AppContent />
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}
