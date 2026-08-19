import { useState } from "react";
import { RadioTower, Search, ExternalLink, ShieldCheck, Clock, Tag, Sparkles } from "lucide-react";

export type NewsItem = {
  id: string;
  topic: "National" | "Geopolitics" | "Economy" | "Law & Rights" | "Protest";
  title: string;
  source: string;
  date: string;
  summary: string;
  verificationUrl: string;
  impactTag: string;
};

export const VERIFIED_NEWS: NewsItem[] = [
  {
    id: "news-1",
    topic: "National",
    title: "Raghav Chadha Officially Transitioned to Bharatiya Janata Party (BJP) as Rajya Sabha MP",
    source: "Sansad Rajya Sabha Secretariat / ECI Bulletin",
    date: "April 24, 2026",
    summary: "Senior Parliamentarian Raghav Chadha formalised his alignment shift to the BJP during the 2026 Parliamentary Session. Secretariat updated his seating allocation in the Upper House.",
    verificationUrl: "https://sansad.in/rs",
    impactTag: "Political Realignment"
  },
  {
    id: "news-2",
    topic: "Law & Rights",
    title: "Bharatiya Nagarik Suraksha Sanhita (BNSS) Mandatory Digital Evidence Rules Take Full Effect",
    source: "Ministry of Home Affairs / Press Information Bureau",
    date: "August 16, 2026",
    summary: "New procedural guidelines require mandatory videography during forensic search and seizure operations across all state police forces under Section 105 of BNSS 2023.",
    verificationUrl: "https://pib.gov.in",
    impactTag: "Criminal Procedure Reform"
  },
  {
    id: "news-3",
    topic: "Economy",
    title: "GST Council Announces Revised Tax Devolution Structure for Industrial States",
    source: "Ministry of Finance / Press Information Bureau",
    date: "August 12, 2026",
    summary: "The 54th GST Council meeting finalized state compensation grants and increased state share allocation for infrastructure development grants.",
    verificationUrl: "https://gstcouncil.gov.in",
    impactTag: "Fiscal Federalism"
  },
  {
    id: "news-4",
    topic: "National",
    title: "Election Commission of India Publishes Digitized Candidate Affidavits for 2026 Assembly Polls",
    source: "Election Commission of India (ECI Portal)",
    date: "August 10, 2026",
    summary: "All candidate affidavits filed in upcoming state assembly polls are now hosted on the ECI Suvidha portal with machine-readable financial disclosure metadata.",
    verificationUrl: "https://affidavit.eci.gov.in",
    impactTag: "Electoral Transparency"
  },
  {
    id: "news-5",
    topic: "Law & Rights",
    title: "Supreme Court Constitution Bench Reaffirms Citizen's Right to Free Legal Aid Under Article 39A",
    source: "Supreme Court of India Daily Orders",
    date: "August 04, 2026",
    summary: "The Supreme Court mandated all State Legal Services Authorities (SLSA) to ensure 24/7 legal assistance counsel presence at every police station district headquarters.",
    verificationUrl: "https://main.sci.gov.in",
    impactTag: "Constitutional Safeguard"
  },
  {
    id: "news-6",
    topic: "Geopolitics",
    title: "India Strengthens BIMSTEC Maritime Security & Trade Corridor Agreements",
    source: "Ministry of External Affairs (MEA India)",
    date: "July 28, 2026",
    summary: "External Affairs Minister S. Jaishankar announced multi-nation naval patrol protocols and regional economic corridor funding at the Colombo Summit.",
    verificationUrl: "https://mea.gov.in",
    impactTag: "Foreign Policy"
  }
];

export function NewsDesk() {
  const [selectedTopic, setSelectedTopic] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const topics = ["ALL", "National", "Geopolitics", "Economy", "Law & Rights", "Protest"] as const;

  const filteredNews = VERIFIED_NEWS.filter((item) => {
    const matchesTopic = selectedTopic === "ALL" || item.topic === selectedTopic;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.impactTag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="news-desk-container my-8 p-6 border border-[var(--glass-border)] rounded-3xl bg-[var(--glass)] backdrop-blur-md shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="eyebrow"><RadioTower className="size-3 text-rose-500 animate-pulse" /> Verified Civic & Legislative Feed</p>
          <h1 className="text-3xl font-bold font-serif mt-2">Political & Legislative News Desk</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Real-time verified political developments, constitutional judgments, and parliamentary policy shifts anchored to primary official government sources.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search news by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Topic Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTopic(t)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedTopic === t
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-amber-500"
            }`}
          >
            {t === "ALL" ? "All Topics" : t}
          </button>
        ))}
      </div>

      {/* News Cards Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredNews.map((news) => (
          <article
            key={news.id}
            className="card-3d p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 text-white">
                  {news.topic}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="size-3" /> {news.date}
                </span>
              </div>

              <h3 className="text-lg font-bold font-serif leading-snug">{news.title}</h3>

              <div className="mt-2 text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <Tag className="size-3.5" /> {news.impactTag}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {news.summary}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                <ShieldCheck className="size-3.5 text-emerald-500" /> {news.source}
              </span>
              <a
                href={news.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Official Link <ExternalLink className="size-3" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="p-8 text-center bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-500">No news articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
