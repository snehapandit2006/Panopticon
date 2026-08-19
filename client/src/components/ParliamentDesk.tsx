import { useState } from "react";
import { PARLIAMENT_DEBATES, ParliamentDebate } from "../data/partiesData";
import { Landmark, FileText, ExternalLink, Filter, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function ParliamentDesk() {
  const [houseFilter, setHouseFilter] = useState<"ALL" | "Lok Sabha" | "Rajya Sabha">("ALL");

  const filteredDebates = PARLIAMENT_DEBATES.filter(
    (d) => houseFilter === "ALL" || d.house === houseFilter
  );

  return (
    <section className="parliament-desk my-8 p-6 border border-[var(--glass-border)] rounded-3xl bg-[var(--glass)] backdrop-blur-md shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <p className="eyebrow"><Landmark className="size-3" /> Sansad Debates & Legislative Records</p>
          <h2 className="text-3xl font-bold font-serif mt-2">Lok Sabha & Rajya Sabha Desk</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Verified official tracks of Parliamentary proceedings, bill debates, motion interventions, and legislative standing committee reports.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
          {(["ALL", "Lok Sabha", "Rajya Sabha"] as const).map((h) => (
            <button
              key={h}
              onClick={() => setHouseFilter(h)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                houseFilter === h
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {h === "ALL" ? "All Houses" : h}
            </button>
          ))}
        </div>
      </div>

      {/* Debates List Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredDebates.map((deb) => (
          <article
            key={deb.id}
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 text-white">
                  {deb.house}
                </span>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                  <Clock className="size-3" /> {deb.date}
                </span>
              </div>

              <h3 className="text-lg font-bold font-serif leading-snug">{deb.title}</h3>

              <div className="mt-2 text-xs font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <FileText className="size-3.5" /> Topic: {deb.billTopic}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {deb.summary}
              </p>

              {/* Key Participating Speakers */}
              <div className="mt-3 pt-3 border-t border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-[10px] uppercase font-bold text-slate-400">Key Debating Speakers:</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {deb.speakers.map((spk, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {spk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
              <span
                className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                  deb.status === "Passed"
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                    : deb.status === "Under Discussion"
                    ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                    : "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                }`}
              >
                {deb.status === "Passed" ? <CheckCircle2 className="size-3" /> : <AlertCircle className="size-3" />}
                {deb.status}
              </span>

              <a
                href={deb.officialRecordUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-amber-600 flex items-center gap-1"
              >
                Sansad Record <ExternalLink className="size-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
