"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const signals = [
  {
    company: "Costco India",
    signal: "GCC Setup — Bengaluru",
    score: 94,
    tier: "ULTRA-HOT",
    type: "GCC",
    time: "2h ago",
  },
  {
    company: "Stryker",
    signal: "Engineering Hub Expansion",
    score: 87,
    tier: "HOT",
    type: "GCC",
    time: "4h ago",
  },
  {
    company: "Rapid7 India",
    signal: "Cybersecurity Hiring Surge",
    score: 78,
    tier: "HOT",
    type: "Hiring",
    time: "6h ago",
  },
];

const scoreColor = (s: number) =>
  s >= 90 ? "text-emerald-400" : s >= 80 ? "text-blue-400" : "text-gold-400";
const dotColor = (s: number) =>
  s >= 90 ? "bg-emerald-400" : s >= 80 ? "bg-blue-400" : "bg-gold-400";
const tierBg = (t: string) =>
  t === "ULTRA-HOT"
    ? "bg-emerald-500/20 text-emerald-400"
    : "bg-gold-400/20 text-gold-400";
const typeBg = (t: string) =>
  t === "GCC"
    ? "bg-emerald-500/10 text-emerald-400"
    : t === "Funding"
      ? "bg-gold-400/10 text-gold-400"
      : "bg-blue-500/10 text-blue-400";

export default function HeroDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative">
      {/* Glow behind dashboard */}
      <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-xl border border-white/10 bg-navy-800/90 backdrop-blur-sm shadow-2xl overflow-hidden"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <div className="flex gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="ml-2 flex-1 rounded bg-white/5 px-2 py-1 text-[10px] text-gray-500 font-mono">
            leadhunteriq.in/dashboard
          </div>
          {/* Live indicator */}
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
          </div>
        </div>

        {/* Signal cards */}
        <div className="p-3 space-y-2">
          {signals.map((sig, i) => (
            <motion.div
              key={sig.company}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/5 p-3 hover:bg-white/[0.06] transition-colors"
            >
              {/* Signal dot */}
              <div className="relative flex-shrink-0">
                <div className={`h-2.5 w-2.5 rounded-full ${dotColor(sig.score)}`} />
                <div className={`absolute inset-0 h-2.5 w-2.5 rounded-full ${dotColor(sig.score)} animate-ping opacity-30`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-heading font-bold text-white truncate">
                    {sig.company}
                  </span>
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${typeBg(sig.type)}`}>
                    {sig.type}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 font-body truncate mt-0.5">
                  {sig.signal}
                </p>
              </div>

              {/* Score + tier */}
              <div className="flex-shrink-0 text-right">
                <span className={`font-mono text-lg font-bold ${scoreColor(sig.score)}`}>
                  {sig.score}
                </span>
                <div className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded mt-0.5 ${tierBg(sig.tier)}`}>
                  {sig.tier}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer stats bar */}
        <div className="border-t border-white/5 px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-gray-500 font-mono">
              <span className="text-emerald-400 font-bold">12</span> new today
            </span>
            <span className="text-[10px] text-gray-500 font-mono">
              <span className="text-blue-400 font-bold">51</span> sources active
            </span>
          </div>
          <span className="text-[10px] text-gray-600 font-mono">
            TALPRO-IQ v2.0
          </span>
        </div>
      </motion.div>
    </div>
  );
}
