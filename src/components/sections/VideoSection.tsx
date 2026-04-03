"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <Section bg="gray">
      <SectionHead
        badge="See It In Action"
        badgeVariant="blue"
        title="90 seconds to understand the unfair advantage"
        description="Watch how LeadHunterIQ detects a GCC expansion signal, scores it with proprietary AI, verifies through multiple layers, and delivers a dossier-grade lead to your WhatsApp."
      />
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-navy-900 aspect-video group cursor-pointer"
        >
          {/* Placeholder — shows play button until a real video is embedded */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute inset-0 bg-grid-pattern opacity-50" />
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-heading font-semibold text-lg">
                Watch the product walkthrough
              </p>
              <p className="text-gray-400 font-body text-sm">
                1:30 min — No signup required
              </p>
            </div>
          </div>

          {/* Corner badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs text-white font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              Coming Soon
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
