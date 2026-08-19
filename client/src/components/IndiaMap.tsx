import { useState } from "react";
import { STATE_CONTROL_MAP, StateControl } from "../data/partiesData";
import { ShieldCheck, MapPin, Building2, User, Sparkles } from "lucide-react";

export function IndiaMap({ onSelectParty }: { onSelectParty: (partyCode: string) => void }) {
  const [selectedState, setSelectedState] = useState<StateControl>(STATE_CONTROL_MAP[0]);
  const [hoveredState, setHoveredState] = useState<StateControl | null>(null);

  const active = hoveredState || selectedState;

  // Geographic percentage coordinates overlay calibrated for India Map silhouette
  const stateCoordinates: Record<string, { x: number; y: number }> = {
    JK: { x: 42, y: 12 },
    HP: { x: 47, y: 19 },
    PB: { x: 38, y: 22 },
    HR: { x: 43, y: 27 },
    DL: { x: 47, y: 29 },
    UK: { x: 53, y: 24 },
    RJ: { x: 28, y: 35 },
    UP: { x: 54, y: 34 },
    BR: { x: 69, y: 37 },
    SK: { x: 77, y: 31 },
    AS: { x: 88, y: 32 },
    ML: { x: 86, y: 38 },
    GJ: { x: 18, y: 46 },
    MP: { x: 45, y: 46 },
    CG: { x: 58, y: 50 },
    JH: { x: 70, y: 44 },
    WB: { x: 76, y: 47 },
    OD: { x: 66, y: 57 },
    MH: { x: 36, y: 58 },
    GA: { x: 28, y: 70 },
    TG: { x: 50, y: 64 },
    AP: { x: 50, y: 75 },
    KA: { x: 36, y: 74 },
    TN: { x: 46, y: 86 },
    KL: { x: 38, y: 88 }
  };

  return (
    <div className="india-map-container my-8 p-6 border border-[var(--glass-border)] rounded-3xl bg-[var(--glass)] backdrop-blur-md shadow-2xl">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
        <div>
          <p className="eyebrow"><MapPin className="size-3" /> State Power Architecture · 2026 Interactive Map</p>
          <h2 className="text-3xl font-bold font-serif mt-2 text-slate-900 dark:text-white">National Political Power Map</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            Real-time political control across India's 28 States & UTs. Hover over any state node on the Indian map silhouette to inspect party control and leadership.
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

      {/* Map Display Container */}
      <div className="relative w-full min-h-[620px] bg-slate-900/5 dark:bg-slate-950/80 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center p-6 shadow-inner">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        {/* Pure Vector SVG Silhouette Map Container */}
        <div className="relative w-full max-w-[620px] h-[560px]">
          <svg
            viewBox="0 0 600 650"
            className="w-full h-full drop-shadow-2xl transition-all"
          >
            <defs>
              <linearGradient id="indiaMapGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="indiaMapGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Accurate Detailed Vector Path Silhouette of Indian Geographic Territory */}
            <g className="transition-all duration-300">
              {/* Outer Territorial Outline */}
              <path
                d="M 280,35 C 265,30 245,45 230,60 C 215,75 225,95 240,110 C 235,125 215,140 200,155 C 185,170 165,185 155,205 C 145,225 125,240 105,260 C 85,280 70,300 80,320 C 90,335 120,340 135,325 C 145,315 130,295 145,280 C 160,265 175,285 190,300 C 205,315 190,345 180,375 C 170,405 190,435 205,465 C 220,495 240,535 265,585 C 272,595 288,595 295,585 C 320,535 345,485 365,445 C 385,405 405,375 420,345 C 435,315 455,300 435,285 C 415,270 395,290 380,270 C 365,250 390,240 415,235 C 440,230 465,205 490,190 C 515,175 540,165 550,180 C 560,195 540,215 525,230 C 510,245 490,250 475,265 C 460,280 445,265 430,250 C 415,235 385,245 370,230 C 355,215 335,200 320,185 C 305,170 310,145 300,125 C 290,105 295,55 280,35 Z"
                className="fill-[url(#indiaMapGradLight)] dark:fill-[url(#indiaMapGradDark)] stroke-slate-400 dark:stroke-amber-500/60"
                strokeWidth="2.5"
                strokeLinejoin="round"
                filter="url(#glow)"
              />

              {/* State Grid Boundary Accents */}
              <path
                d="M 230,60 Q 270,100 300,125 M 240,110 L 320,185 M 200,155 L 370,230 M 155,205 Q 260,240 415,235 M 105,260 Q 230,300 435,285 M 135,325 Q 280,360 420,345 M 190,300 Q 285,420 365,445 M 205,465 Q 275,510 320,535"
                stroke="rgba(148, 163, 184, 0.3)"
                strokeWidth="1"
                strokeDasharray="4 3"
                fill="none"
              />

              {/* Official Territory Watermark */}
              <text
                x="285"
                y="310"
                fill="currentColor"
                className="text-slate-400 dark:text-slate-500 opacity-25"
                fontSize="22"
                fontFamily="serif"
                fontWeight="900"
                letterSpacing="6"
                textAnchor="middle"
              >
                REPUBLIC OF INDIA
              </text>
            </g>

            {/* State 3D Badge Nodes placed geographically over silhouette */}
            {STATE_CONTROL_MAP.map((st) => {
              const coords = stateCoordinates[st.id] || { x: st.x, y: st.y };
              const isHovered = hoveredState?.id === st.id;
              const isSelected = selectedState.id === st.id;

              return (
                <g key={st.id} transform={`translate(${(coords.x * 600) / 100}, ${(coords.y * 650) / 100})`}>
                  <foreignObject x="-40" y="-18" width="80" height="36" className="overflow-visible">
                    <div
                      className="cursor-pointer group flex items-center justify-center"
                      onClick={() => setSelectedState(st)}
                      onMouseEnter={() => setHoveredState(st)}
                      onMouseLeave={() => setHoveredState(null)}
                    >
                      {/* 3D Popping Icon Badge */}
                      <div
                        className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-2xl border transition-all duration-300 transform-gpu ${
                          isHovered || isSelected
                            ? "scale-125 -translate-y-2 shadow-2xl z-30 ring-2 ring-amber-400 border-white bg-slate-900 text-white"
                            : "scale-100 shadow-md border-slate-300 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 hover:scale-110 text-slate-900 dark:text-white"
                        }`}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <div className="size-4 rounded bg-slate-100 dark:bg-slate-800 p-0.5 flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0">
                          <img
                            src={st.icon}
                            alt={st.rulingParty}
                            className="size-3 object-contain transition-transform duration-300 group-hover:scale-125 drop-shadow"
                          />
                        </div>
                        <span className="text-[10px] font-black tracking-tight">{st.id}</span>

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
                  </foreignObject>
                </g>
              );
            })}
          </svg>
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
