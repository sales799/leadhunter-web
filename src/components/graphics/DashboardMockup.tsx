"use client";

import { DASHBOARD_SIGNALS } from "@/lib/constants";

const typeColors = {
  GCC: "bg-emerald-100 text-emerald-500",
  Funding: "bg-gold-400/20 text-gold-600",
  Hiring: "bg-blue-100 text-blue-600",
};

const scoreColor = (s: number) =>
  s >= 90 ? "text-emerald-500" : s >= 80 ? "text-blue-600" : "text-gold-600";

export default function DashboardMockup() {
  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-navy-800 shadow-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-gray-400">
          leadhunteriq.in/dashboard
        </div>
      </div>

      {/* Signal feed */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-400 px-3 pb-2 border-b border-white/5">
          <span>Company</span>
          <div className="flex gap-12">
            <span>Signal</span>
            <span>Score</span>
            <span>Time</span>
          </div>
        </div>
        {DASHBOARD_SIGNALS.map((sig) => (
          <div
            key={sig.company}
            className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-white">{sig.company}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${typeColors[sig.type]}`}
                >
                  {sig.type}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-gray-400">{sig.detail}</p>
            </div>
            <div className="flex items-center gap-8 flex-shrink-0">
              <span className={`font-mono text-lg font-bold ${scoreColor(sig.score)}`}>
                {sig.score}
              </span>
              <span className="text-xs text-gray-500 w-12 text-right">{sig.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
