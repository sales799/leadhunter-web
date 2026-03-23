"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <p className="font-mono text-3xl font-bold text-blue-600 lg:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="border-y border-gray-200 bg-white py-12">
      <div className="container-lg grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            label={stat.label}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
