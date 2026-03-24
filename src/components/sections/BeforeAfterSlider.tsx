"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";

const beforeItems = [
  { icon: "clock", text: "4+ hours daily on manual research", color: "text-red-500" },
  { icon: "x", text: "Stale contact lists, 60%+ bounce rate", color: "text-red-500" },
  { icon: "x", text: "Hear about GCC expansions from news (3 months late)", color: "text-red-500" },
  { icon: "x", text: "No scoring — gut-feel qualification", color: "text-red-500" },
  { icon: "x", text: "Generic outreach, low reply rates", color: "text-red-500" },
];

const afterItems = [
  { icon: "check", text: "Signals delivered to WhatsApp by 8 AM", color: "text-emerald-500" },
  { icon: "check", text: "7-gate verified contacts, <2% bounce", color: "text-emerald-500" },
  { icon: "check", text: "Detect GCC expansions 90 days before news", color: "text-emerald-500" },
  { icon: "check", text: "49-signal TALPRO-IQ scoring (0-100)", color: "text-emerald-500" },
  { icon: "check", text: "AI outreach: 5 stages, 6 persona variants", color: "text-emerald-500" },
];

function CheckIcon({ className }: { className: string }) {
  return (
    <svg className={`h-5 w-5 flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon({ className }: { className: string }) {
  return (
    <svg className={`h-5 w-5 flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ClockIcon({ className }: { className: string }) {
  return (
    <svg className={`h-5 w-5 flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <Section bg="white">
      <SectionHead
        badge="The Difference"
        badgeVariant="gold"
        title="Before vs. After LeadHunterIQ"
        description="Drag the slider to see the transformation."
      />

      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Before side */}
            <div
              className="p-8 bg-red-50 dark:bg-red-950/20 transition-opacity"
              style={{ opacity: position <= 50 ? 1 : 0.4 + (100 - position) / 100 * 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <XIcon className="text-red-500 h-4 w-4" />
                </div>
                <h3 className="font-heading font-bold text-red-700 dark:text-red-400">Without LeadHunterIQ</h3>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    {item.icon === "clock" ? (
                      <ClockIcon className={item.color} />
                    ) : (
                      <XIcon className={item.color} />
                    )}
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-body">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After side */}
            <div
              className="p-8 bg-emerald-50 dark:bg-emerald-950/20 transition-opacity"
              style={{ opacity: position >= 50 ? 1 : 0.4 + position / 100 * 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <CheckIcon className="text-emerald-500 h-4 w-4" />
                </div>
                <h3 className="font-heading font-bold text-emerald-700 dark:text-emerald-400">With LeadHunterIQ</h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <CheckIcon className={item.color} />
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-body">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Slider control */}
          <div className="px-8 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              className="w-full h-2 bg-gradient-to-r from-red-300 via-gray-300 to-emerald-300 rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
              aria-label="Compare before and after"
            />
            <div className="flex justify-between mt-1">
              <span className="text-[10px] font-mono text-red-400">BEFORE</span>
              <span className="text-[10px] font-mono text-emerald-400">AFTER</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
