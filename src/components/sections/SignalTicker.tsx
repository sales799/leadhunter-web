"use client";

const signals = [
  { text: "GCC registration detected — Bengaluru", type: "gcc" },
  { text: "Series B closed — $18M — Hyderabad fintech", type: "funding" },
  { text: "SAP hiring surge — 120 roles — Pune", type: "hiring" },
  { text: "STPI unit registration — Chennai", type: "gcc" },
  { text: "Cloud migration RFP — BFSI Mumbai", type: "hiring" },
  { text: "New CTO appointed — logistics startup", type: "funding" },
  { text: "EPFO registration — new entity — Gurugram", type: "gcc" },
  { text: "50K sq ft lease signed — Whitefield IT Park", type: "gcc" },
  { text: "Series A — $8M — SaaS company — Bengaluru", type: "funding" },
  { text: "DevOps hiring spree — 80 roles — Noida", type: "hiring" },
];

const dotColor: Record<string, string> = {
  gcc: "bg-emerald-400",
  funding: "bg-gold-400",
  hiring: "bg-blue-400",
};

export default function SignalTicker() {
  // Duplicate for seamless loop
  const doubled = [...signals, ...signals];

  return (
    <div className="relative overflow-hidden bg-navy-900 border-y border-white/5 py-3">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((sig, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 flex-shrink-0"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${dotColor[sig.type]}`} />
            <span className="text-xs font-mono text-gray-500">
              {sig.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
