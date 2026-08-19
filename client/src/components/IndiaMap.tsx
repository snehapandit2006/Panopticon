import { useState } from "react";
import { STATE_CONTROL_MAP, StateControl } from "../data/partiesData";
import { ShieldCheck, MapPin, Building2, User, Sparkles } from "lucide-react";

export function IndiaMap({ onSelectParty }: { onSelectParty: (partyCode: string) => void }) {
  const [selectedState, setSelectedState] = useState<StateControl>(STATE_CONTROL_MAP[0]);
  const [hoveredState, setHoveredState] = useState<StateControl | null>(null);

  const active = hoveredState || selectedState;

  // Geographic coordinates (0-100% overlay) calibrated to the India map outline image
  const stateCoordinates: Record<string, { x: number; y: number }> = {
    JK: { x: 34, y: 12 },
    HP: { x: 38, y: 20 },
    PB: { x: 32, y: 23 },
    HR: { x: 35, y: 30 },
    DL: { x: 38, y: 32 },
    UK: { x: 44, y: 25 },
    RJ: { x: 25, y: 38 },
    UP: { x: 48, y: 38 },
    BR: { x: 62, y: 41 },
    SK: { x: 72, y: 35 },
    AS: { x: 84, y: 38 },
    ML: { x: 80, y: 44 },
    GJ: { x: 16, y: 50 },
    MP: { x: 40, y: 52 },
    CG: { x: 53, y: 56 },
    JH: { x: 63, y: 49 },
    WB: { x: 70, y: 51 },
    OD: { x: 60, y: 62 },
    MH: { x: 32, y: 64 },
    GA: { x: 26, y: 76 },
    TG: { x: 46, y: 68 },
    AP: { x: 46, y: 78 },
    KA: { x: 32, y: 79 },
    TN: { x: 42, y: 88 },
    KL: { x: 35, y: 90 }
  };

  return (
    <div className="india-map-container my-8 p-6 border border-[var(--glass-border)] rounded-3xl bg-[var(--glass)] backdrop-blur-md shadow-2xl">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
        <div>
          <p className="eyebrow"><MapPin className="size-3" /> State Power Architecture · 2026 Interactive Map</p>
          <h2 className="text-3xl font-bold font-serif mt-2 text-slate-900 dark:text-white">National Political Power Map</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            Real-time political control across India's 28 States & UTs. Hover over any state node on the custom map outline to inspect party control and leadership.
          </p>
        </div>

        {/* Selected State 3D Card */}
        <div className="state-info-card card-3d p-5 rounded-2xl border border-[var(--glass-border)] bg-white/95 dark:bg-slate-900/95 min-w-[300px] shadow-xl">
          <div className="flex items-center gap-3">
            <div className="size-14 rounded-2xl bg-slate-100 dark:bg-slate-800 p-1.5 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-md transform-gpu hover:scale-110 transition-transform">
              <img src={active.icon} alt={active.rulingParty} className="size-10 object-contain drop-shadow-md" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full text-white shadow-sm" style={{ background: active.accent }}>
                {active.alliance} Alliance
              </span>
              <h3 className="text-2xl font-extrabold mt-1 text-slate-900 dark:text-white">{active.name}</h3>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-800 pb-1.5">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1"><Building2 className="size-3.5" /> Ruling Party:</span>
              <span className="font-extrabold text-sm text-slate-900 dark:text-white">{active.rulingParty}</span>
            </div>
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-800 pb-1.5">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1"><User className="size-3.5" /> Chief Minister:</span>
              <span className="font-extrabold text-sm text-slate-900 dark:text-white">{active.chiefMinister}</span>
            </div>
          </div>

          <button
            onClick={() => onSelectParty(active.partyCode)}
            className="w-full mt-4 py-2.5 px-3 text-xs font-bold rounded-xl text-white shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            style={{ background: active.accent }}
          >
            <ShieldCheck className="size-4" /> View {active.partyCode} Leaders in {active.name}
          </button>
        </div>
      </div>

      {/* Custom Outline Map Container */}
      <div className="relative w-full min-h-[580px] bg-slate-50 dark:bg-slate-950/70 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center p-6 shadow-inner">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        {/* Outline Map Display Container */}
        <div className="relative w-full max-w-[620px] h-[540px]">
          {/* User's Exact Custom Indian Map Outline Image */}
          <img
            src="/india-outline-custom.png"
            alt="Custom Outline of India"
            className="w-full h-full object-contain filter mix-blend-multiply dark:mix-blend-normal dark:invert dark:opacity-85 opacity-90 transition-all drop-shadow-xl"
          />

          {/* Watermark Label */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-600 pointer-events-none">
            REPUBLIC OF INDIA · STATE POWER MAP
          </span>

          {/* State 3D Badge Nodes placed geographically over silhouette */}
          {STATE_CONTROL_MAP.map((st) => {
            const coords = stateCoordinates[st.id] || { x: st.x, y: st.y };
            const isHovered = hoveredState?.id === st.id;
            const isSelected = selectedState.id === st.id;

            return (
              <div
                key={st.id}
                style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
                onClick={() => setSelectedState(st)}
                onMouseEnter={() => setHoveredState(st)}
                onMouseLeave={() => setHoveredState(null)}
              >
                {/* 3D Popping Icon Badge */}
                <div
                  className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-2xl border transition-all duration-300 transform-gpu ${
                    isHovered || isSelected
                      ? "scale-125 -translate-y-2 shadow-2xl z-30 ring-2 ring-amber-400 border-white bg-slate-900 text-white"
                      : "scale-100 shadow-lg border-slate-300 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 hover:scale-110 text-slate-900 dark:text-white"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="size-5 rounded-md bg-slate-100 dark:bg-slate-800 p-0.5 flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0">
                    <img
                      src={st.icon}
                      alt={st.rulingParty}
                      className="size-3.5 object-contain transition-transform duration-300 group-hover:scale-125 drop-shadow"
                    />
                  </div>
                  <span className="text-[11px] font-black tracking-tight">{st.id}</span>

                  {/* Pulsing ring for selected state */}
                  {isSelected && (
                    <span className="absolute -inset-1 rounded-2xl bg-amber-400/40 animate-ping pointer-events-none" />
                  )}
                </div>

                {/* Hover Tooltip Popup */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-2xl whitespace-nowrap z-40 border border-slate-700 flex items-center gap-1.5">
                  <Sparkles className="size-3 text-amber-400" />
                  <span>{st.name}: {st.chiefMinister} ({st.rulingParty})</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid Quick Selector below map */}
      <div className="mt-6">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Interactive State Filter Grid:</p>
        <div className="flex flex-wrap gap-2">
          {STATE_CONTROL_MAP.map((st) => (
            <button
              key={st.id}
              onClick={() => {
                setSelectedState(st);
                onSelectParty(st.partyCode);
              }}
              className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                selectedState.id === st.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-md dark:bg-amber-400 dark:text-slate-950 dark:border-amber-400"
                  : "bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-500"
              }`}
            >
              <img src={st.icon} className="size-3.5 object-contain" alt="" />
              <span>{st.name}</span>
              <span className="text-[10px] opacity-75 font-mono">({st.partyCode})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
