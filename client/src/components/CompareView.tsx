import { useState } from "react";
import { ALL_MEMBERS, LeaderMember } from "../data/membersData";
import { NATIONAL_PARTIES } from "../data/partiesData";
import { Scale, ArrowRightLeft, GraduationCap, Coins, Gavel, Award, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CompareView() {
  const [leaderAId, setLeaderAId] = useState<string>("narendra-modi");
  const [leaderBId, setLeaderBId] = useState<string>("rahul-gandhi");

  const leaderA = ALL_MEMBERS.find((m) => m.id === leaderAId) || ALL_MEMBERS[0];
  const leaderB = ALL_MEMBERS.find((m) => m.id === leaderBId) || ALL_MEMBERS[1];

  return (
    <div className="compare-page my-8 space-y-10">
      {/* Page Heading */}
      <div className="border border-[var(--glass-border)] p-6 rounded-3xl bg-[var(--glass)] backdrop-blur-md shadow-xl">
        <p className="eyebrow"><Scale className="size-3" /> Source-Linked Comparison Engine</p>
        <h1 className="text-4xl font-bold font-serif mt-2">Verified Leader & Party Matrix</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-3xl leading-relaxed">
          Side-by-side comparative analysis of political leaders and recognized parties based on sworn ECI candidate affidavits, financial disclosures, criminal declarations, and legislative records.
        </p>
      </div>

      {/* Leader vs Leader Selector Toolbar */}
      <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
          <ArrowRightLeft className="size-4 text-amber-500" />
          <span>Select Any Two Leaders for Side-by-Side Verification</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Leader A Selector */}
          <div>
            <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">Leader A:</label>
            <select
              value={leaderAId}
              onChange={(e) => setLeaderAId(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-sm"
            >
              {ALL_MEMBERS.map((m) => (
                <option key={m.id} value={m.id} disabled={m.id === leaderBId}>
                  {m.name} ({m.party} — {m.office})
                </option>
              ))}
            </select>
          </div>

          {/* Leader B Selector */}
          <div>
            <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">Leader B:</label>
            <select
              value={leaderBId}
              onChange={(e) => setLeaderBId(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-sm"
            >
              {ALL_MEMBERS.map((m) => (
                <option key={m.id} value={m.id} disabled={m.id === leaderAId}>
                  {m.name} ({m.party} — {m.office})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Side-by-Side Comparison Display Grid */}
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {[leaderA, leaderB].map((leader, index) => (
            <div
              key={leader.id}
              className="card-3d p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-xl flex flex-col justify-between"
              style={{ borderTop: `4px solid ${leader.accent}` }}
            >
              <div>
                {/* Hero Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar-stage size-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1">
                    <img src={leader.avatar} alt={leader.name} className="size-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full text-white" style={{ background: leader.accent }}>
                      {leader.party}
                    </span>
                    <h3 className="text-2xl font-extrabold font-serif mt-1">{leader.name}</h3>
                    <p className="text-xs font-semibold text-slate-500">{leader.office}</p>
                  </div>
                </div>

                {/* Education Metric */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    <GraduationCap className="size-4 text-blue-500" />
                    <span>Education Qualification</span>
                  </div>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">{leader.education.qualification}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{leader.education.institution} ({leader.education.year})</p>
                </div>

                {/* Financial Assets Metric */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    <Coins className="size-4 text-amber-500" />
                    <span>Financial Disclosures (2024 Sworn Affidavit)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Total Declared Assets:</span>
                    <span className="font-extrabold text-sm text-emerald-600 dark:text-emerald-400">{leader.financials.assets}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span>Liabilities:</span>
                    <span className="font-bold text-rose-500">{leader.financials.liabilities}</span>
                  </div>
                </div>

                {/* Criminal Case Metric */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    <Gavel className="size-4 text-rose-500" />
                    <span>Sworn Criminal Cases</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Declared Cases:</span>
                    <span className={`font-extrabold text-sm ${leader.criminalHistory.totalCases > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                      {leader.criminalHistory.totalCases} Case(s)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span>Convictions:</span>
                    <span className="font-bold">{leader.criminalHistory.convictions}</span>
                  </div>
                </div>

                {/* Key Development Contribution */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    <Award className="size-4 text-emerald-500" />
                    <span>Major Legislative/Policy Focus</span>
                  </div>
                  <p className="text-xs font-semibold leading-relaxed">
                    {leader.developmentContributions[0]?.title}: {leader.developmentContributions[0]?.description}
                  </p>
                </div>
              </div>

              {/* Source Verification Link */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="size-3 text-emerald-500" /> ECI Affidavit Verified
                </span>
                <a
                  href={leader.verificationLinks[0]?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  View Sworn Source <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Panopticon Data Integrity & Verification Methodology */}
      <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 shadow-lg">
        <h2 className="text-3xl font-bold font-serif mb-4">Verification Methodology & Standard</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <CheckCircle2 className="size-6 text-emerald-500 mb-2" />
            <h4 className="font-bold text-base mb-1">1. Sworn ECI Affidavits</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every educational degree, financial asset declaration, and criminal case tally is pulled directly from Form 26 sworn affidavits filed with the Election Commission of India.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <CheckCircle2 className="size-6 text-emerald-500 mb-2" />
            <h4 className="font-bold text-base mb-1">2. ADR / MyNeta Audit</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Financial valuation summaries and criminal case IPC/BNS section breakdowns are audited against Association for Democratic Reforms (ADR) candidate databases.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <CheckCircle2 className="size-6 text-emerald-500 mb-2" />
            <h4 className="font-bold text-base mb-1">3. Non-Biased Standard</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Panopticon does not publish opinion polls or subjective editorials. All text is non-partisan and anchored strictly to primary public legal records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
