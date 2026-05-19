"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

const proofCards = [
  { label: "Sources watched", value: "51", detail: "18 free + 33 paid/API feeds across India", tone: "text-emerald-400" },
  { label: "TALPRO-IQ signals", value: "49", detail: "Hiring intent, funding, GCC, tech stack, timing", tone: "text-blue-400" },
  { label: "Verification gates", value: "7", detail: "SAV checks before any lead reaches your BD team", tone: "text-gold-400" },
];

const pipeline = [
  "Discover", "Score", "Verify", "Enrich", "Write", "Dossier", "Deliver"
];

export default function SignalIntelligenceProof() {
  return (
    <Section bg="navy-radial" overlay gridPattern className="py-20 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Badge variant="emerald">Intelligence made visible</Badge>
          <h2 className="mt-5 max-w-xl font-heading text-3xl font-extrabold tracking-heading text-white sm:text-4xl">
            A live revenue radar, tuned for Indian staffing demand.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300 font-body">
            LeadHunterIQ turns noisy market activity into verified buyer timing: every signal is scored, corroborated, assembled into a dossier, and delivered with the next action your BD team should take.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {proofCards.map((card) => (
              <div key={card.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <p className={`font-mono text-4xl font-semibold ${card.tone}`}>{card.value}</p>
                <p className="mt-2 text-sm font-heading font-bold text-white">{card.label}</p>
                <p className="mt-1 text-xs leading-5 text-gray-400 font-body">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 font-body">7-layer pipeline</p>
              <p className="mt-1 font-mono text-sm text-emerald-400">GREEN · release-ready</p>
            </div>
            <div className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300">&lt;90s smoke</div>
          </div>
          <div className="space-y-3">
            {pipeline.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="grid grid-cols-[3rem_1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3"
              >
                <span className="font-mono text-xs text-gray-500">L{index + 1}</span>
                <span className="font-heading text-sm font-bold text-white">{step}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse-emerald" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
