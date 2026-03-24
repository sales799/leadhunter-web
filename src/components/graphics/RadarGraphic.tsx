"use client";

const signals = [
  { cx: 75, cy: 30, color: "#10B981", label: "GCC", delay: "0s" },
  { cx: 140, cy: 50, color: "#FCD34D", label: "Funding", delay: "0.5s" },
  { cx: 45, cy: 100, color: "#3B82F6", label: "Hiring", delay: "1s" },
  { cx: 160, cy: 120, color: "#10B981", label: "GCC", delay: "1.5s" },
  { cx: 55, cy: 55, color: "#FCD34D", label: "Hot", delay: "2s" },
  { cx: 145, cy: 150, color: "#3B82F6", label: "Intent", delay: "2.5s" },
  { cx: 110, cy: 35, color: "#10B981", label: "STPI", delay: "3s" },
  { cx: 35, cy: 140, color: "#FCD34D", label: "Series B", delay: "3.5s" },
];

export default function RadarGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md aspect-square">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Radial glow */}
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#2563EB" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="url(#radarGlow)" />

        {/* Concentric circles */}
        {[85, 65, 45, 25].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="#2563EB"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        ))}

        {/* Cross lines */}
        <line x1="100" y1="5" x2="100" y2="195" stroke="#2563EB" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="5" y1="100" x2="195" y2="100" stroke="#2563EB" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="27" y1="27" x2="173" y2="173" stroke="#2563EB" strokeOpacity="0.05" strokeWidth="1" />
        <line x1="173" y1="27" x2="27" y2="173" stroke="#2563EB" strokeOpacity="0.05" strokeWidth="1" />

        {/* Rotating sweep */}
        <g className="origin-center animate-sweep" style={{ transformOrigin: '100px 100px' }}>
          <line x1="100" y1="100" x2="100" y2="15" stroke="#2563EB" strokeOpacity="0.7" strokeWidth="1.5" />
          <path d="M100,100 L100,15 A85,85 0 0,1 165,45 Z" fill="url(#sweepGrad)" />
        </g>

        {/* Signal dots */}
        {signals.map((s, i) => (
          <g key={i}>
            {/* Glow ring */}
            <circle cx={s.cx} cy={s.cy} r="8" fill={s.color} opacity="0.1">
              <animate attributeName="r" values="6;12;6" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
              <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
            </circle>
            {/* Core dot */}
            <circle cx={s.cx} cy={s.cy} r="3.5" fill={s.color} opacity="0.9">
              <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
            </circle>
            {/* Label */}
            <text
              x={s.cx}
              y={s.cy - 12}
              fill={s.color}
              fontSize="5.5"
              fontWeight="600"
              textAnchor="middle"
              opacity="0.6"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {s.label}
            </text>
          </g>
        ))}

        {/* Center point */}
        <circle cx="100" cy="100" r="8" fill="#2563EB" opacity="0.3" />
        <circle cx="100" cy="100" r="5" fill="#2563EB" />
        <circle cx="100" cy="100" r="2" fill="white" />
      </svg>
    </div>
  );
}
