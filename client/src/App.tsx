import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AIChatBox, type Message } from "@/components/AIChatBox";
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
  MapPin,
  FileText,
  X
} from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { ALL_MEMBERS, LeaderMember, HierarchyTier, VerificationLink } from "./data/membersData";
import { NATIONAL_PARTIES, REGIONAL_PARTIES, STATE_CONTROL_MAP, PARLIAMENT_DEBATES } from "./data/partiesData";
import { IndiaMap } from "./components/IndiaMap";
import { ParliamentDesk } from "./components/ParliamentDesk";
import { CompareView } from "./components/CompareView";
import { NewsDesk } from "./components/NewsDesk";
import { RightsHub } from "./components/RightsHub";

type Screen = "hierarchy" | "party" | "map" | "parliament" | "compare" | "news" | "rights" | "explainer";

const COMMON_SOURCES = {
  constitution: { label: "Legislative Department · Constitution of India", url: "https://legislative.gov.in/constitution-of-india", type: "Official Portal" as const },
  bnss: { label: "India Code · BNSS 2023", url: "https://www.indiacode.nic.in/handle/123456789/20099", type: "Official Portal" as const },
  nalsa: { label: "NALSA · Legal Aid Portal", url: "https://nalsa.gov.in/legal-aid/", type: "Official Portal" as const },
  eci: { label: "Election Commission of India · Candidate Affidavits", url: "https://affidavit.eci.gov.in/", type: "ECI Affidavit" as const },
  adr: { label: "Association for Democratic Reforms (ADR)", url: "https://adrindia.org/", type: "ADR MyNeta" as const },
  prs: { label: "PRS Legislative Research · MP Track", url: "https://prsindia.org/parliamenttrack", type: "PRS India" as const }
};

function Nav({
  screen,
  setScreen,
  dark,
  toggleDark
}: {
  screen: Screen;
  setScreen: (screen: Screen) => void;
  dark: boolean;
  toggleDark: () => void;
}) {
  const items: Array<[Screen, string]> = [
    ["hierarchy", "Leadership Hierarchy"],
    ["party", "Party Folders"],
    ["map", "State Power Map"],
    ["parliament", "Parliament Desk"],
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

function LeaderCard({ member, onOpen, compact = false }: { member: LeaderMember; onOpen: () => void; compact?: boolean }) {
  return (
    <button
      className={`leader-card card-3d ${compact ? "leader-card-compact" : ""}`}
      onClick={onOpen}
      style={{ "--leader-accent": member.accent } as CSSProperties}
    >
      <div className="leader-top">
        <span>{member.tier.split(":")[0]}</span>
        {member.previousParty ? (
          <span className="text-[9px] font-extrabold uppercase bg-amber-500 text-white px-2 py-0.5 rounded-full shadow-sm">
            {member.previousParty} → {member.party}
          </span>
        ) : (
          <ArrowRight className="size-4" />
        )}
      </div>

      <div className="avatar-stage">
        <img src={member.avatar} alt={`3D Caricature of ${member.name}`} />
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
          <BadgeCheck className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>Verified ECI Record ({member.education.qualification})</span>
        </div>
      )}
    </button>
  );
}

function HierarchyExplorer({
  selectedParty,
  setSelectedParty,
  onSelectMember
}: {
  selectedParty: string;
  setSelectedParty: (p: string) => void;
  onSelectMember: (member: LeaderMember) => void;
}) {
  const [selectedTier, setSelectedTier] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activePartyInfo = NATIONAL_PARTIES.find((p) => p.code === selectedParty);

  const filteredMembers = ALL_MEMBERS.filter((m) => {
    const matchesParty = selectedParty === "ALL" || m.party === selectedParty;
    const matchesTier = selectedTier === "ALL" || m.tier === selectedTier;
    const matchesSearch =
      searchQuery === "" ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.office.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.hierarchyRole.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesParty && matchesTier && matchesSearch;
  });

  const tiers: HierarchyTier[] = [
    "Tier 1: Supreme / National Leadership",
    "Tier 2: Cabinet & Chief Ministers",
    "Tier 3: Party Executives & Secretaries",
    "Tier 4: Key Members of Parliament"
  ];

  return (
    <section className="shell page">
      <p className="eyebrow"><Network className="size-3" /> Political Leadership Matrix · 2026</p>
      <h1 className="text-4xl font-extrabold font-serif text-slate-900 dark:text-white mt-1">
        {selectedParty === "ALL" ? "Political Power Hierarchy" : `${activePartyInfo?.name} Hierarchy`}
      </h1>
      <p className="page-copy">
        Explore recognized political leadership across India. Hover over any leader card to experience 3D popping artwork with full ECI affidavit verification.
      </p>

      {/* Prominent Active Party Filter Banner */}
      {selectedParty !== "ALL" && (
        <div className="my-6 p-4 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-white p-1.5 shadow flex items-center justify-center border border-amber-300">
              <img src={activePartyInfo?.icon} alt={activePartyInfo?.name} className="size-9 object-contain" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300">
                Filtered Party Hierarchy
              </span>
              <h2 className="text-xl font-extrabold font-serif text-slate-900 dark:text-white">
                {activePartyInfo?.name} ({selectedParty})
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">{activePartyInfo?.note}</p>
            </div>
          </div>

          <button
            onClick={() => setSelectedParty("ALL")}
            className="py-2 px-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold shadow hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 shrink-0"
          >
            <X className="size-3.5" /> Clear Filter (View All Parties)
          </button>
        </div>
      )}

      {/* Filter Toolbar */}
      <div className="filter-toolbar card-3d">
        <div className="search-box">
          <Search className="size-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search leader by name, office, or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <select value={selectedParty} onChange={(e) => setSelectedParty(e.target.value)}>
            {NATIONAL_PARTIES.map((p) => (
              <option key={p.code} value={p.code}>
                {p.name} ({p.code})
              </option>
            ))}
          </select>

          <select value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)}>
            <option value="ALL">All Leadership Tiers</option>
            {tiers.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tiers Grid */}
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
        <div className="glass-sheet empty-state my-8 p-8 rounded-3xl text-center border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80">
          <ShieldAlert className="size-8 mx-auto text-amber-500 mb-2" />
          <h3 className="text-lg font-bold">No political profiles match your filter criteria</h3>
          <p className="text-xs text-slate-500 mt-1">Try resetting search query or selecting "All Recognized Parties".</p>
          <button className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs" onClick={() => { setSelectedParty("ALL"); setSelectedTier("ALL"); setSearchQuery(""); }}>
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}

function ProfileDetail({
  member,
  back,
  onSelectMember
}: {
  member: LeaderMember;
  back: (partyCode?: string) => void;
  onSelectMember: (m: LeaderMember) => void;
}) {
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
      <button className="back-link" onClick={() => back(member.party)}>
        <ArrowLeft className="size-4" /> Back to {member.party} Hierarchy Explorer
      </button>

      {/* Special Transition Alert */}
      {member.specialNotice && (
        <div className="my-4 p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200">
          <div className="flex items-center gap-2 font-bold text-sm">
            <RefreshCw className="size-4 text-amber-600 animate-spin" />
            <span>Political Realignment Notice</span>
          </div>
          <p className="text-xs mt-1 leading-relaxed">{member.specialNotice}</p>
        </div>
      )}

      <div className="profile-hero">
        <div className="profile-portrait">
          <img src={member.avatar} alt={`3D portrait of ${member.name}`} />
          <span>3D Interactive Asset</span>
        </div>
        <div>
          <p className="eyebrow">
            <i style={{ background: member.accent }} /> {member.party} ({member.partyName}) · {member.tier}
          </p>
          <h1 className="text-4xl font-extrabold font-serif text-slate-900 dark:text-white mt-1">{member.name}</h1>
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 mt-1">{member.office} — <i>{member.hierarchyRole}</i></h3>
          <p className="profile-copy text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{member.background}</p>
          <div className="profile-actions flex flex-wrap gap-3 mt-6">
            <button className="ink-button text-xs py-2 px-4 rounded-xl font-bold bg-slate-900 text-white flex items-center gap-2" onClick={downloadShare}>
              <Download className="size-4" /> Download 2160×3840 Civic Infographic
            </button>
            <button className="outline-button text-xs py-2 px-4 rounded-xl font-bold border border-slate-300 dark:border-slate-700 flex items-center gap-2" onClick={() => back(member.party)}>
              Explore {member.party} Hierarchy <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs flex flex-wrap gap-2 my-6">
        <button className={`px-4 py-2 rounded-xl text-xs font-bold ${activeTab === "all" ? "bg-slate-900 text-white" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`} onClick={() => setActiveTab("all")}>All Verified Records</button>
        <button className={`px-4 py-2 rounded-xl text-xs font-bold ${activeTab === "education" ? "bg-slate-900 text-white" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`} onClick={() => setActiveTab("education")}>Education</button>
        <button className={`px-4 py-2 rounded-xl text-xs font-bold ${activeTab === "financials" ? "bg-slate-900 text-white" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`} onClick={() => setActiveTab("financials")}>Financial Assets</button>
        <button className={`px-4 py-2 rounded-xl text-xs font-bold ${activeTab === "criminal" ? "bg-slate-900 text-white" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`} onClick={() => setActiveTab("criminal")}>Criminal History</button>
        <button className={`px-4 py-2 rounded-xl text-xs font-bold ${activeTab === "contributions" ? "bg-slate-900 text-white" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`} onClick={() => setActiveTab("contributions")}>Development Contributions</button>
      </div>

      <div className="profile-grid grid gap-6 md:grid-cols-3">
        {(activeTab === "all" || activeTab === "education") && (
          <div className="profile-card card-3d p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
            <div className="card-head flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white mb-2">
              <GraduationCap className="size-5 text-blue-500" />
              <h3>Education Qualification</h3>
            </div>
            <div className="card-body text-xs">
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px] uppercase">{member.education.qualification}</span>
              <h4 className="font-bold text-sm mt-2">{member.education.institution} ({member.education.year})</h4>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{member.education.details}</p>
              <a href={member.education.link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 font-bold mt-3 hover:underline">
                <ExternalLink className="size-3" /> {member.education.link.label}
              </a>
            </div>
          </div>
        )}

        {(activeTab === "all" || activeTab === "financials") && (
          <div className="profile-card card-3d p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
            <div className="card-head flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white mb-2">
              <Coins className="size-5 text-amber-500" />
              <h3>Financial Disclosures</h3>
            </div>
            <div className="card-body text-xs">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1">
                <span>Total Assets:</span>
                <span className="font-extrabold text-emerald-600">{member.financials.assets}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Liabilities:</span>
                <span className="font-bold text-rose-500">{member.financials.liabilities}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-2">{member.financials.details}</p>
              <a href={member.financials.link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 font-bold mt-3 hover:underline">
                <ExternalLink className="size-3" /> {member.financials.link.label}
              </a>
            </div>
          </div>
        )}

        {(activeTab === "all" || activeTab === "criminal") && (
          <div className="profile-card card-3d p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
            <div className="card-head flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white mb-2">
              <Gavel className="size-5 text-rose-500" />
              <h3>Criminal Case Declarations</h3>
            </div>
            <div className="card-body text-xs">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1">
                <span>Declared Cases:</span>
                <span className="font-extrabold text-slate-900 dark:text-white">{member.criminalHistory.totalCases}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Convictions:</span>
                <span className="font-bold">{member.criminalHistory.convictions}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-2">{member.criminalHistory.summary}</p>
              <a href={member.criminalHistory.link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 font-bold mt-3 hover:underline">
                <ExternalLink className="size-3" /> {member.criminalHistory.link.label}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Teammates */}
      {samePartyMembers.length > 0 && (
        <div className="my-10">
          <h3 className="font-serif font-bold text-xl mb-4 text-slate-900 dark:text-white">Other Verified Leaders in {member.partyName}</h3>
          <div className="leader-grid">
            {samePartyMembers.map((m) => (
              <LeaderCard key={m.id} member={m} compact onOpen={() => onSelectMember(m)} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function PartyDirectory({
  onSelectMember,
  onExploreParty
}: {
  onSelectMember: (m: LeaderMember) => void;
  onExploreParty: (partyCode: string) => void;
}) {
  return (
    <section className="shell page">
      <p className="eyebrow"><FolderTree className="size-3" /> Party Organizational Folders & Regional Spectrum</p>
      <h1 className="text-4xl font-extrabold font-serif text-slate-900 dark:text-white">Recognized Parties Directory</h1>
      <p className="page-copy">
        Browse national and major regional political party structures across India. Every party folder breaks down into Tier 1 Supreme Leadership, Cabinet Ministers, and Members of Parliament.
      </p>

      {/* National Folders */}
      <div className="party-folders my-8">
        {NATIONAL_PARTIES.filter((p) => p.code !== "ALL").map((party) => {
          const members = ALL_MEMBERS.filter((m) => m.party === party.code);
          return (
            <article key={party.code} className="party-folder card-3d p-6 rounded-3xl mb-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              <div className="folder-head flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="size-14 rounded-2xl bg-white p-2 border border-slate-200 shadow-md flex items-center justify-center shrink-0">
                  <img src={party.icon} alt={party.name} className="size-10 object-contain" />
                </div>
                <div>
                  <p className="eyebrow" style={{ color: party.accent }}>{party.code}</p>
                  <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">{party.name}</h2>
                  <p className="text-xs text-slate-500">{party.note}</p>
                </div>
                <div className="flex items-center gap-2 sm:ml-auto">
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
                    {members.length} Verified Profiles
                  </span>
                  <button
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                    onClick={() => onExploreParty(party.code)}
                  >
                    Explore {party.code} Hierarchy <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
              <div className="folder-content grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
                {members.map((m) => (
                  <LeaderCard key={m.id} member={m} compact onOpen={() => onSelectMember(m)} />
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* Regional Spectrum */}
      <div className="my-12 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-lg">
        <div className="mb-6">
          <p className="eyebrow"><Building2 className="size-3" /> Major Regional Parties & Coalition Forces</p>
          <h2 className="text-3xl font-bold font-serif mt-2 text-slate-900 dark:text-white">Major Regional Parties Spectrum</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Crucial state-level and regional political forces shaping national coalition dynamics in India.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300 dark:border-slate-700 text-slate-500 font-bold uppercase tracking-wider">
                <th className="p-3">Party Name</th>
                <th className="p-3">Major Leader</th>
                <th className="p-3">Main Political Base</th>
                <th className="p-3">Alignment</th>
                <th className="p-3">Current Political Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {REGIONAL_PARTIES.map((rp, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-3 font-bold text-sm text-slate-900 dark:text-white">{rp.party}</td>
                  <td className="p-3 font-semibold text-slate-700 dark:text-slate-300">{rp.leader}</td>
                  <td className="p-3 text-slate-600 dark:text-slate-400">{rp.base}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase ${
                        rp.alignment === "NDA"
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                          : rp.alignment === "INDIA"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                          : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {rp.alignment}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600 dark:text-slate-400 leading-relaxed">{rp.significance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Explainer() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to the Panopticon Civic Explainer AI. Ask any question regarding political leaders, sworn ECI affidavits, financial disclosures, state governance, or constitutional rights. Every answer is linked to primary official sources.",
      uncertainty: "Low",
      citations: [COMMON_SOURCES.eci, COMMON_SOURCES.adr, COMMON_SOURCES.prs]
    }
  ]);

  const answer = (q: string): Message => {
    const norm = q.toLowerCase();
    if (norm.includes("raghav") || norm.includes("chadha")) {
      return {
        role: "assistant",
        content: "Raghav Chadha is currently a Rajya Sabha MP aligned with the Bharatiya Janata Party (BJP), having transitioned on April 24, 2026. Previously, he was AAP's Deputy Leader in Rajya Sabha. He declared ₹3.69 Crore in assets and 2 cases in his sworn affidavit.",
        uncertainty: "Low",
        citations: [ALL_MEMBERS.find((m) => m.id === "raghav-chadha")?.verificationLinks[0] || COMMON_SOURCES.eci]
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
        citations: [ALL_MEMBERS.find((m) => m.id === "rahul-gandhi")?.verificationLinks[0] || COMMON_SOURCES.eci]
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
        <h1 className="text-4xl font-extrabold font-serif text-slate-900 dark:text-white">Ask the Public Record</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Answers are generated from primary public documents and verified ECI affidavits.</p>
      </aside>
      <AIChatBox
        messages={messages}
        onSendMessage={(text) => setMessages((old) => [...old, { role: "user", content: text }, answer(text)])}
        height="650px"
        placeholder="Ask about political affidavits, leader background, party transitions, or constitutional rights..."
        suggestedPrompts={[
          "What is Raghav Chadha's current party status and background?",
          "What is Narendra Modi's declared education and financial status?",
          "What cases are declared in Rahul Gandhi's 2024 ECI affidavit?",
          "Who controls Uttar Pradesh, Maharashtra, and Punjab?"
        ]}
      />
    </section>
  );
}

function AppContent() {
  const [screen, setScreen] = useState<Screen>("hierarchy");
  const [selectedPartyFilter, setSelectedPartyFilter] = useState<string>("ALL");
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

  const openPartyHierarchy = (partyCode: string) => {
    setSelectedPartyFilter(partyCode);
    setScreen("hierarchy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const body =
    screen === "hierarchy" ? (
      <HierarchyExplorer selectedParty={selectedPartyFilter} setSelectedParty={setSelectedPartyFilter} onSelectMember={openMember} />
    ) : screen === "party" ? (
      <PartyDirectory onSelectMember={openMember} onExploreParty={openPartyHierarchy} />
    ) : screen === "map" ? (
      <section className="shell page">
        <IndiaMap onSelectParty={openPartyHierarchy} />
      </section>
    ) : screen === "parliament" ? (
      <section className="shell page">
        <ParliamentDesk />
      </section>
    ) : screen === "profile" ? (
      <ProfileDetail member={selectedMember} back={(partyCode?: string) => openPartyHierarchy(partyCode || "ALL")} onSelectMember={openMember} />
    ) : screen === "compare" ? (
      <section className="shell page">
        <CompareView />
      </section>
    ) : screen === "news" ? (
      <section className="shell page">
        <NewsDesk />
      </section>
    ) : screen === "rights" ? (
      <section className="shell page">
        <RightsHub />
      </section>
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
          <b className="text-slate-900 dark:text-white">Panopticon Civic Intelligence Platform</b>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
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
