import { useState } from "react";
import { STATE_CONTROL_MAP, StateControl } from "../data/partiesData";
import { ShieldCheck, MapPin, Building2, User } from "lucide-react";

export function IndiaMap({ onSelectParty }: { onSelectParty: (partyCode: string) => void }) {
  const [selectedState, setSelectedState] = useState<StateControl>(STATE_CONTROL_MAP[0]);
  const [hoveredState, setHoveredState] = useState<StateControl | null>(null);

  const active = hoveredState || selectedState;

  return (
    <div className="india-map-container my-8 p-6 border border-[var(--glass-border)] rounded-3xl bg-[var(--glass)] backdrop-blur-md shadow-xl">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
        <div>
          <p className="eyebrow"><MapPin className="size-3" /> State Power Architecture · 2026 Interactive Map</p>
          <h2 className="text-3xl font-bold font-serif mt-2">Who Controls Which Major State?</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            Interactive map displaying ruling parties and Chief Ministers across all 28 States and Union Territories with 3D party badges.
          </p>
        </div>

        {/* Selected State 3D Card */}
        <div className="state-info-card card-3d p-4 rounded-2xl border border-[var(--glass-border)] bg-white/80 dark:bg-slate-900/80 min-w-[280px]">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-slate-100 dark:bg-slate-800 p-1 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-md transform-gpu hover:scale-110 transition-transform">
              <img src={active.icon} alt={active.rulingParty} className="size-9 object-contain drop-shadow-md" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full text-white" style={{ background: active.accent }}>
                {active.alliance}
              </span>
              <h3 className="text-xl font-extrabold mt-0.5">{active.name}</h3>
            </div>
          </div>

          <div className="mt-3 space-y-1.5 text-xs">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-800 pb-1">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1"><Building2 className="size-3.5" /> Ruling Party:</span>
              <span className="font-bold">{active.rulingParty}</span>
            </div>
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-800 pb-1">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1"><User className="size-3.5" /> Chief Minister:</span>
              <span className="font-bold">{active.chiefMinister}</span>
            </div>
          </div>

          <button
            onClick={() => onSelectParty(active.partyCode)}
            className="w-full mt-3 py-2 px-3 text-xs font-bold rounded-xl text-white shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
            style={{ background: active.accent }}
          >
            <ShieldCheck className="size-3.5" /> Explore {active.partyCode} Leaders in {active.name}
          </button>
        </div>
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full h-[480px] bg-slate-50/50 dark:bg-slate-950/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 overflow-hidden flex items-center justify-center p-4">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        {/* State 3D Badge Nodes */}
        <div className="relative w-full max-w-[700px] h-[440px] border-0">
          {STATE_CONTROL_MAP.map((st) => {
            const isHovered = hoveredState?.id === st.id;
            const isSelected = selectedState.id === st.id;

            return (
              <div
                key={st.id}
                style={{ left: `${st.x}%`, top: `${st.y}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
                onClick={() => setSelectedState(st)}
                onMouseEnter={() => setHoveredState(st)}
                onMouseLeave={() => setHoveredState(null)}
              >
                {/* 3D Popping Icon Badge */}
                <div
                  className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all duration-300 transform-gpu ${
                    isHovered || isSelected
                      ? "scale-125 -translate-y-2 shadow-2xl z-30 ring-2 ring-amber-400 border-white bg-white dark:bg-slate-900"
                      : "scale-100 shadow-lg border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 hover:scale-110"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={st.icon}
                    alt={st.rulingParty}
                    className="size-5 object-contain transition-transform duration-300 group-hover:scale-125 drop-shadow"
                  />
                  <span className="text-[11px] font-black tracking-tight">{st.id}</span>

                  {/* Ripple pulse ring for selected state */}
                  {isSelected && (
                    <span className="absolute -inset-1 rounded-xl bg-amber-400/30 animate-ping pointer-events-none" />
                  )}
                </div>

                {/* Micro Hover Tag */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-40">
                  {st.name}: {st.chiefMinister}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid Quick Selector below map */}
      <div className="mt-6">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Quick State Filter Grid:</p>
        <div className="flex flex-wrap gap-2">
          {STATE_CONTROL_MAP.map((st) => (
            <button
              key={st.id}
              onClick={() => {
                setSelectedState(st);
                onSelectParty(st.partyCode);
              }}
              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                selectedState.id === st.id
                  ? "bg-slate-900 text-white border-slate-900 shadow"
                  : "bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-amber-500"
              }`}
            >
              <img src={st.icon} className="size-3.5 object-contain" alt="" />
              <span>{st.name}</span>
              <span className="text-[9px] opacity-75 font-mono">({st.partyCode})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
