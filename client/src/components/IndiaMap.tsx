import { useState } from "react";
import { STATE_CONTROL_MAP, StateControl } from "../data/partiesData";
import { ShieldCheck, MapPin, Building2, User, Sparkles } from "lucide-react";

export function IndiaMap({ onSelectParty }: { onSelectParty: (partyCode: string) => void }) {
  const [selectedState, setSelectedState] = useState<StateControl>(STATE_CONTROL_MAP[0]);
  const [hoveredState, setHoveredState] = useState<StateControl | null>(null);

  const active = hoveredState || selectedState;

  // Geographic SVG positions (0-100% overlay) tailored to India SVG Map silhouette
  const stateCoordinates: Record<string, { x: number; y: number }> = {
    JK: { x: 38, y: 12 },
    HP: { x: 44, y: 20 },
    PB: { x: 38, y: 24 },
    HR: { x: 42, y: 30 },
    DL: { x: 45, y: 32 },
    UK: { x: 49, y: 25 },
    RJ: { x: 28, y: 38 },
    UP: { x: 53, y: 36 },
    BR: { x: 67, y: 40 },
    SK: { x: 74, y: 33 },
    AS: { x: 86, y: 36 },
    ML: { x: 83, y: 40 },
    GJ: { x: 18, y: 49 },
    MP: { x: 44, y: 50 },
    CG: { x: 56, y: 54 },
    JH: { x: 68, y: 48 },
    WB: { x: 74, y: 50 },
    OD: { x: 64, y: 60 },
    MH: { x: 36, y: 62 },
    GA: { x: 30, y: 74 },
    TG: { x: 48, y: 68 },
    AP: { x: 48, y: 77 },
    KA: { x: 36, y: 78 },
    TN: { x: 44, y: 88 },
    KL: { x: 38, y: 90 }
  };

  return (
    <div className="india-map-container my-8 p-6 border border-[var(--glass-border)] rounded-3xl bg-[var(--glass)] backdrop-blur-md shadow-2xl">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
        <div>
          <p className="eyebrow"><MapPin className="size-3" /> State Power Architecture · 2026 Interactive Map</p>
          <h2 className="text-3xl font-bold font-serif mt-2">National Political Power Map</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            Real-time political control across India's 28 States & UTs. Hover over any state on the map silhouette or badge to inspect party control and leadership.
          </p>
        </div>

        {/* Selected State 3D Card */}
        <div className="state-info-card card-3d p-5 rounded-2xl border border-[var(--glass-border)] bg-white/90 dark:bg-slate-900/90 min-w-[300px] shadow-xl">
          <div className="flex items-center gap-3">
            <div className="size-14 rounded-2xl bg-slate-100 dark:bg-slate-800 p-1.5 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-md transform-gpu hover:scale-110 transition-transform">
              <img src={active.icon} alt={active.rulingParty} className="size-10 object-contain drop-shadow-md" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full text-white shadow-sm" style={{ background: active.accent }}>
                {active.alliance} Alliance
              </span>
              <h3 className="text-2xl font-extrabold mt-1">{active.name}</h3>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-800 pb-1.5">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1"><Building2 className="size-3.5" /> Ruling Party:</span>
              <span className="font-extrabold text-sm">{active.rulingParty}</span>
            </div>
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 dark:border-slate-800 pb-1.5">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1"><User className="size-3.5" /> Chief Minister:</span>
              <span className="font-extrabold text-sm">{active.chiefMinister}</span>
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

      {/* SVG Outline Map Container */}
      <div className="relative w-full min-h-[560px] bg-slate-900/5 dark:bg-slate-950/60 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center p-6 shadow-inner">
        {/* Background Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

        {/* Vector SVG Silhouette of India Map */}
        <div className="relative w-full max-w-[640px] h-[520px]">
          <svg
            viewBox="0 0 500 550"
            className="w-full h-full drop-shadow-2xl opacity-90 transition-all"
            style={{ filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.15))" }}
          >
            <defs>
              <linearGradient id="indiaMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            {/* Stylized Detailed Silhouette Outline of India Map */}
            <path
              d="M 190 20 C 170 35, 140 45, 140 70 C 140 90, 170 100, 185 110 C 190 120, 170 130, 150 135 C 130 140, 110 160, 100 180 C 80 210, 60 250, 75 270 C 85 280, 100 290, 120 280 C 130 270, 150 250, 170 250 C 180 260, 200 270, 210 280 C 200 310, 190 340, 180 370 C 170 400, 190 430, 200 460 C 210 480, 220 510, 225 530 C 230 535, 235 530, 240 510 C 250 470, 260 430, 275 400 C 290 370, 310 350, 330 330 C 350 310, 370 290, 380 270 C 400 240, 420 230, 440 210 C 460 190, 475 190, 460 210 C 440 230, 420 250, 410 270 C 390 280, 380 250, 360 230 C 340 220, 310 230, 290 220 C 280 210, 280 190, 270 180 C 280 170, 310 170, 330 160 C 340 150, 330 140, 310 140 C 290 140, 270 150, 250 150 C 240 140, 240 120, 230 110 C 230 90, 220 70, 210 50 Z"
              fill="url(#indiaMapGrad)"
              stroke="#64748b"
              strokeWidth="2.5"
              strokeDasharray="4 2"
              className="dark:stroke-slate-500"
            />

            {/* Inner State Boundary Wireframes */}
            <g stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.4" fill="none">
              {/* North region */}
              <path d="M 140 70 Q 185 90 210 50 M 185 110 L 230 110 M 150 135 L 240 140" />
              {/* Central & West */}
              <path d="M 100 180 Q 150 200 210 280 M 75 270 Q 120 280 170 250" />
              {/* East & South */}
              <path d="M 270 180 Q 330 160 380 270 M 210 280 Q 275 400 225 530" />
            </g>

            {/* Geographic Label of India */}
            <text x="235" y="270" fill="#94a3b8" fontSize="24" fontFamily="serif" fontWeight="900" letterSpacing="4" opacity="0.3" textAnchor="middle">
              REPUBLIC OF INDIA
            </text>
          </svg>

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
                  className={`relative flex items-center gap-2 px-3 py-1.5 rounded-2xl border transition-all duration-300 transform-gpu ${
                    isHovered || isSelected
                      ? "scale-125 -translate-y-2 shadow-2xl z-30 ring-2 ring-amber-400 border-white bg-slate-900 text-white"
                      : "scale-100 shadow-xl border-slate-300 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 hover:scale-110"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="size-6 rounded-lg bg-slate-100 dark:bg-slate-800 p-0.5 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                    <img
                      src={st.icon}
                      alt={st.rulingParty}
                      className="size-4 object-contain transition-transform duration-300 group-hover:scale-125 drop-shadow"
                    />
                  </div>
                  <span className="text-xs font-black tracking-tight">{st.id}</span>

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
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-amber-500"
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
