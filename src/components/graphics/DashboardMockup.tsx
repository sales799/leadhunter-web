"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DASHBOARD_SIGNALS } from "@/lib/constants";

const typeColors = {
  GCC: "bg-emerald-100 text-emerald-500",
  Funding: "bg-gold-400/20 text-gold-600",
  Hiring: "bg-blue-100 text-blue-600",
};

const tierColors = {
  "ULTRA-HOT": "text-emerald-400",
  HOT: "text-gold-400",
};

const scoreColor = (s: number) =>
  s >= 90 ? "text-emerald-400" : s >= 80 ? "text-blue-400" : "text-gold-400";

const dotColor = (s: number) =>
  s >= 90 ? "bg-emerald-400" : s >= 80 ? "bg-blue-400" : "bg-gold-400";

export default function DashboardMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-xl border border-white/10 bg-navy-800 shadow-2xl overflow-hidden"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-gold-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1.5 text-xs text-gray-400 font-mono">
            leadhunteriq.in/dashboard &mdash; Signal Feed
          </div>
        </div>

        {/* Signal feed */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-gray-500 px-3 pb-2 border-b border-white/5 font-mono uppercase tracking-wider">
            <span>Company</span>
            <div className="flex gap-16">
              <span>Type</span>
              <span>Score</span>
              <span>Time</span>
            </div>
          </div>
          {DASHBOARD_SIGNALS.map((sig, i) => (
            <motion.div
              key={sig.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3.5 hover:bg-white/10 transition-colors group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${dotColor(sig.score)} animate-pulse-dot`} />
                  <span className="text-sm font-heading font-semibold text-white">
                    {sig.company}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold font-body ${typeColors[sig.type]}`}
                  >
                    {sig.type}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold ${tierColors[sig.tier]}`}
                  >
                    {sig.tier}
                  </span>
                </div>
                <p className="mt-1 ml-5 text-xs text-gray-500 font-body">
                  {sig.detail}
                </p>
              </div>
              <div className="flex items-center gap-8 flex-shrink-0">
                <span className={`font-mono text-xl font-bold ${scoreColor(sig.score)}`}>
                  {sig.score}
                </span>
                <span className="text-xs text-gray-500 font-mono w-12 text-right">
                  {sig.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
