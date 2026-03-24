"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const cities = [
  { name: "Delhi NCR", x: 245, y: 155, sources: 47, signals: "BFSI, IT Services, GCC", tier: "Tier 1" },
  { name: "Mumbai", x: 155, y: 310, sources: 51, signals: "BFSI, Pharma, Enterprise", tier: "Tier 1" },
  { name: "Bengaluru", x: 190, y: 420, sources: 51, signals: "GCC, IT, Startups", tier: "Tier 1" },
  { name: "Hyderabad", x: 210, y: 360, sources: 49, signals: "GCC, Pharma, IT", tier: "Tier 1" },
  { name: "Chennai", x: 225, y: 440, sources: 48, signals: "Auto, IT, Manufacturing", tier: "Tier 1" },
  { name: "Pune", x: 165, y: 330, sources: 49, signals: "IT, Auto, GCC", tier: "Tier 1" },
  { name: "Kolkata", x: 325, y: 245, sources: 42, signals: "BFSI, IT Services", tier: "Tier 1" },
  { name: "Ahmedabad", x: 130, y: 255, sources: 38, signals: "Pharma, Chemical, IT", tier: "Tier 2" },
  { name: "Kochi", x: 195, y: 465, sources: 35, signals: "IT, Tourism Tech", tier: "Tier 2" },
  { name: "Jaipur", x: 195, y: 195, sources: 33, signals: "IT, BPO", tier: "Tier 2" },
];

const dotColor = (tier: string) =>
  tier === "Tier 1" ? "fill-emerald-400" : "fill-blue-400";
const glowColor = (tier: string) =>
  tier === "Tier 1" ? "rgba(16,185,129,0.4)" : "rgba(59,130,246,0.3)";

export default function IndiaCoverageMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const hoveredCity = cities.find((c) => c.name === hovered);

  return (
    <div ref={ref} className="relative max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg viewBox="60 80 340 440" className="w-full h-auto" aria-label="India coverage map showing 10 cities">
          {/* Simplified India outline */}
          <path
            d="M200 100 L260 100 L280 120 L310 130 L340 160 L360 180 L370 220 L360 260 L340 280 L350 310 L340 340 L320 360 L300 380 L280 400 L260 420 L240 450 L220 480 L200 500 L190 490 L180 470 L170 450 L160 430 L150 400 L140 370 L130 340 L120 310 L110 280 L105 250 L110 220 L120 190 L140 160 L160 130 L180 110 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-200 dark:text-gray-700"
            opacity="0.5"
          />

          {/* Coverage fill — subtle */}
          <path
            d="M200 100 L260 100 L280 120 L310 130 L340 160 L360 180 L370 220 L360 260 L340 280 L350 310 L340 340 L320 360 L300 380 L280 400 L260 420 L240 450 L220 480 L200 500 L190 490 L180 470 L170 450 L160 430 L150 400 L140 370 L130 340 L120 310 L110 280 L105 250 L110 220 L120 190 L140 160 L160 130 L180 110 Z"
            fill="url(#indiaGradient)"
            opacity="0.15"
          />

          <defs>
            <radialGradient id="indiaGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* City dots with pulse */}
          {cities.map((city, i) => (
            <g
              key={city.name}
              onMouseEnter={() => setHovered(city.name)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer"
            >
              {/* Pulse ring */}
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={inView ? 12 : 0}
                fill="none"
                stroke={glowColor(city.tier)}
                strokeWidth="1"
                initial={{ r: 0, opacity: 0 }}
                animate={inView ? {
                  r: [6, 14, 6],
                  opacity: [0.6, 0, 0.6],
                } : {}}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
              {/* Core dot */}
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={hovered === city.name ? 6 : 4}
                className={dotColor(city.tier)}
                initial={{ r: 0, opacity: 0 }}
                animate={inView ? { r: hovered === city.name ? 6 : 4, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              />
              {/* City label */}
              <motion.text
                x={city.x + 10}
                y={city.y + 4}
                className="fill-gray-500 dark:fill-gray-400 text-[10px] font-body pointer-events-none"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {city.name}
              </motion.text>
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Tooltip card */}
      {hoveredCity && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 w-56 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-xl z-20"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className={`h-2 w-2 rounded-full ${hoveredCity.tier === "Tier 1" ? "bg-emerald-400" : "bg-blue-400"}`} />
            <span className="font-heading font-bold text-gray-900 dark:text-white text-sm">
              {hoveredCity.name}
            </span>
            <span className="text-[10px] font-mono text-gray-400 ml-auto">
              {hoveredCity.tier}
            </span>
          </div>
          <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400 font-body">
            <p>
              <span className="font-mono text-emerald-500 font-bold">{hoveredCity.sources}</span> sources active
            </p>
            <p>{hoveredCity.signals}</p>
          </div>
        </motion.div>
      )}

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="text-xs text-gray-500 dark:text-gray-400 font-body">Tier 1 (51 sources)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
          <span className="text-xs text-gray-500 dark:text-gray-400 font-body">Tier 2 (33-42 sources)</span>
        </div>
      </div>
    </div>
  );
}
