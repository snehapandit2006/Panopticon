import { useState } from "react";
import { BookOpenCheck, Shield, Gavel, Scale, AlertCircle, FileText, ExternalLink, HelpCircle, CheckCircle2, ChevronRight } from "lucide-react";

export type FundamentalRight = {
  article: string;
  title: string;
  summary: string;
  keyPoints: string[];
  landmarkJudgments: string[];
  link: { label: string; url: string };
};

export const FUNDAMENTAL_RIGHTS: FundamentalRight[] = [
  {
    article: "Article 14",
    title: "Right to Equality Before Law",
    summary: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    keyPoints: [
      "Prohibits arbitrary state action and discrimination.",
      "Ensures equal treatment for all citizens under similar circumstances.",
      "Forms part of the Basic Structure of the Constitution."
    ],
    landmarkJudgments: ["Maneka Gandhi v. Union of India (1978)", "E.P. Royappa v. State of Tamil Nadu (1974)"],
    link: { label: "Constitution of India Part III", url: "https://legislative.gov.in/constitution-of-india" }
  },
  {
    article: "Article 19",
    title: "Right to Freedom of Speech & Expression",
    summary: "Guarantees six fundamental freedoms: speech and expression, peaceful assembly, forming associations, movement, residence, and practicing any profession.",
    keyPoints: [
      "Includes freedom of press and digital communication.",
      "Subject only to reasonable restrictions under Article 19(2) (Sovereignty, Public Order, Decency).",
      "Protects peaceful democratic dissent."
    ],
    landmarkJudgments: ["Shreya Singhal v. Union of India (2015)", "Romesh Thappar v. State of Madras (1950)"],
    link: { label: "India Code · Article 19 Text", url: "https://www.indiacode.nic.in" }
  },
  {
    article: "Article 21",
    title: "Right to Life & Personal Liberty",
    summary: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
    keyPoints: [
      "Includes Right to Privacy (Puttaswamy Judgment 2017).",
      "Includes Right to Clean Environment, Right to Speedy Trial, and Right to Dignity.",
      "Protects against custodial violence and illegal detention."
    ],
    landmarkJudgments: ["K.S. Puttaswamy v. Union of India (2017)", "Maneka Gandhi v. Union of India (1978)"],
    link: { label: "Supreme Court Judgment Archive", url: "https://main.sci.gov.in" }
  },
  {
    article: "Article 22",
    title: "Protection Against Arrest & Detention",
    summary: "Provides mandatory constitutional safeguards for any arrested person.",
    keyPoints: [
      "Right to be informed of grounds of arrest immediately.",
      "Right to consult and be defended by a legal practitioner of choice.",
      "Mandatory production before a Magistrate within 24 hours of arrest."
    ],
    landmarkJudgments: ["D.K. Basu v. State of West Bengal (1997)", "Arnesh Kumar v. State of Bihar (2014)"],
    link: { label: "NALSA Legal Aid Portal", url: "https://nalsa.gov.in" }
  },
  {
    article: "Article 32",
    title: "Right to Constitutional Remedies (Writs)",
    summary: "Empowers citizens to move the Supreme Court directly for the enforcement of Fundamental Rights via Writ Petitions.",
    keyPoints: [
      "Five Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.",
      "Habeas Corpus produces illegally detained persons before court.",
      "Dr. B.R. Ambedkar called Article 32 the 'Heart and Soul of the Constitution'."
    ],
    landmarkJudgments: ["ADM Jabalpur v. Shivkant Shukla (1976)", "Minerva Mills v. Union of India (1980)"],
    link: { label: "Supreme Court e-Filing Portal", url: "https://efiling.sci.gov.in" }
  }
];

export type ArrestProtection = {
  code: string;
  topic: string;
  description: string;
  procedure: string;
};

export const ARREST_PROTECTIONS: ArrestProtection[] = [
  {
    code: "BNSS Sec 35 / CrPC 50",
    topic: "Grounds of Arrest",
    description: "Police officers must immediately state full particulars of the offense or grounds for arrest in writing.",
    procedure: "Ask officer clearly: 'Under what specific section am I being detained, and is it cognizable / bailable?'"
  },
  {
    code: "BNSS Sec 47 / CrPC 50A",
    topic: "Right to Inform Relative/Friend",
    description: "Arrested individual has the right to have a family member or nominated friend informed immediately of their arrest and location.",
    procedure: "Police must record the name of the nominated person in the Station Diary entry."
  },
  {
    code: "BNSS Sec 48 / CrPC 41D",
    topic: "Right to Legal Practitioner",
    description: "Right to meet and consult an advocate of choice during interrogation, though not throughout the entire interrogation.",
    procedure: "Request to call your legal counsel or demand NALSA Free Legal Aid service."
  },
  {
    code: "BNSS Sec 58 / CrPC 57",
    topic: "24-Hour Remand Limit",
    description: "No person arrested without warrant can be detained in police custody for more than 24 hours excluding travel time without a magistrate's order.",
    procedure: "If 24 hours elapse, demand immediate production before the nearest Judicial Magistrate."
  },
  {
    code: "Zero FIR Rule",
    topic: "Zero FIR Mandatory Registration",
    description: "Any police station must register an FIR for a cognizable offense regardless of territorial jurisdiction, assigning it number '0'.",
    procedure: "The Zero FIR is subsequently transferred to the jurisdictional station without delaying investigation."
  }
];

export function RightsHub() {
  const [activeCategory, setActiveCategory] = useState<"constitutional" | "arrest" | "scenarios">("constitutional");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="rights-hub my-8 p-6 border border-[var(--glass-border)] rounded-3xl bg-[var(--glass)] backdrop-blur-md shadow-xl space-y-8">
      {/* Header */}
      <div>
        <p className="eyebrow"><BookOpenCheck className="size-3 text-emerald-500" /> Constitutional & Legal Safeguards</p>
        <h1 className="text-3xl font-bold font-serif mt-2">Citizens' Rights & Legal Protections</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          Comprehensive guide to Fundamental Rights under the Constitution of India and mandatory procedural protections under the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => setActiveCategory("constitutional")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeCategory === "constitutional"
              ? "bg-slate-900 text-white shadow-md"
              : "bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-amber-500"
          }`}
        >
          <Shield className="size-4 text-amber-500" /> Fundamental Rights (Part III)
        </button>

        <button
          onClick={() => setActiveCategory("arrest")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeCategory === "arrest"
              ? "bg-slate-900 text-white shadow-md"
              : "bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-amber-500"
          }`}
        >
          <Gavel className="size-4 text-rose-500" /> BNSS 2023 Arrest Protections
        </button>

        <button
          onClick={() => setActiveCategory("scenarios")}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeCategory === "scenarios"
              ? "bg-slate-900 text-white shadow-md"
              : "bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-amber-500"
          }`}
        >
          <HelpCircle className="size-4 text-blue-500" /> Actionable Legal Guides
        </button>
      </div>

      {/* Section 1: Fundamental Rights */}
      {activeCategory === "constitutional" && (
        <div className="grid gap-6 md:grid-cols-2">
          {FUNDAMENTAL_RIGHTS.map((right) => (
            <div
              key={right.article}
              className="card-3d p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-white shadow-sm">
                    {right.article}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">Constitution of India</span>
                </div>

                <h3 className="text-xl font-bold font-serif leading-snug">{right.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                  {right.summary}
                </p>

                <div className="mt-4 space-y-1.5 text-xs">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Key Constitutional Guarantees:</p>
                  {right.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Landmark Supreme Court Rulings:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {right.landmarkJudgments.map((j, idx) => (
                      <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {j}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <a
                  href={right.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  {right.link.label} <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section 2: Arrest Protections */}
      {activeCategory === "arrest" && (
        <div className="space-y-4">
          {ARREST_PROTECTIONS.map((prot, idx) => (
            <div
              key={idx}
              className="card-3d p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1 max-w-2xl">
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-rose-600 text-white">
                  {prot.code}
                </span>
                <h3 className="text-lg font-bold font-serif">{prot.topic}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">{prot.description}</p>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 min-w-[280px]">
                <p className="text-[10px] font-extrabold uppercase text-amber-800 dark:text-amber-300 flex items-center gap-1">
                  <AlertCircle className="size-3" /> Recommended Legal Action:
                </p>
                <p className="text-xs text-amber-900 dark:text-amber-200 mt-1 font-semibold leading-relaxed">
                  {prot.procedure}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section 3: Legal Guides */}
      {activeCategory === "scenarios" && (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-lg">
            <h3 className="text-xl font-bold font-serif mb-2">How to Access NALSA Free Legal Aid</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Under Article 39A and Legal Services Authorities Act 1987, free legal aid is guaranteed to women, children, members of SC/ST, custody victims, and low-income individuals.
            </p>
            <a
              href="https://nalsa.gov.in/legal-aid/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-md hover:bg-slate-800"
            >
              Apply via NALSA Legal Aid Portal <ExternalLink className="size-3.5" />
            </a>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-lg">
            <h3 className="text-xl font-bold font-serif mb-2">Filing a Zero FIR Procedure</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              If a police station refuses to register your FIR citing jurisdictional limits, insist on a Zero FIR under BNSS guidelines.
            </p>
            <a
              href="https://pib.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-md hover:bg-slate-800"
            >
              Read MHA Zero FIR Circular <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
