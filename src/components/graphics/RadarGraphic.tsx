"use client";

const signals = [
  { cx: 75, cy: 30, color: "#10B981", label: "GCC Signal", delay: "0s" },
  { cx: 130, cy: 55, color: "#FCD34D", label: "Funding", delay: "0.5s" },
  { cx: 45, cy: 110, color: "#3B82F6", label: "Hiring Intent", delay: "1s" },
  { cx: 150, cy: 120, color: "#10B981", label: "GCC Signal", delay: "1.5s" },
  { cx: 60, cy: 60, color: "#FCD34D", label: "Funding", delay: "2s" },
  { cx: 135, cy: 145, color: "#3B82F6", label: "Hiring Intent", delay: "2.5s" },
];

export default function RadarGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md aspect-square">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Radial glow */}
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="url(#radarGlow)" />

        {/* Concentric circles */}
        {[80, 60, 40, 20].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="#2563EB"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
        ))}

        {/* Cross lines */}
        <line x1="100" y1="10" x2="100" y2="190" stroke="#2563EB" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="#2563EB" strokeOpacity="0.1" strokeWidth="1" />

        {/* Rotating sweep */}
        <g className="origin-center animate-sweep">
          <line x1="100" y1="100" x2="100" y2="20" stroke="#2563EB" strokeOpacity="0.6" strokeWidth="2" />
          <defs>
            <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M100,100 L100,20 A80,80 0 0,1 157,50 Z" fill="url(#sweepGrad)" />
        </g>

        {/* Signal dots */}
        {signals.map((s, i) => (
          <g key={i}>
            <circle cx={s.cx} cy={s.cy} r="4" fill={s.color} opacity="0.8">
              <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin={s.delay} />
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin={s.delay} />
            </circle>
            <text x={s.cx} y={s.cy - 10} fill={s.color} fontSize="6" fontWeight="600" textAnchor="middle" opacity="0.7">
              {s.label}
            </text>
          </g>
        ))}

        {/* Center point */}
        <circle cx="100" cy="100" r="6" fill="#2563EB" />
        <circle cx="100" cy="100" r="3" fill="white" />
      </svg>
    </div>
  );
}
