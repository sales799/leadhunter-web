"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 51, label: "Data Sources", prefix: "", suffix: "", color: "text-emerald-500" },
  { value: 49, label: "AI Signals", prefix: "", suffix: "", color: "text-blue-500" },
  { value: 7, label: "Verification Gates", prefix: "", suffix: "", color: "text-gold-400" },
  { value: 170, label: "Cost Per Lead", prefix: "₹", suffix: "", color: "text-emerald-500" },
];

function AnimatedNumber({
  target,
  prefix,
  suffix,
  color,
  inView,
}: {
  target: number;
  prefix: string;
  suffix: string;
  color: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className={`font-mono text-3xl font-bold lg:text-5xl ${color}`}>
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative -mt-16 z-10">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card bg-navy-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <AnimatedNumber
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  color={stat.color}
                  inView={inView}
                />
                <p className="mt-2 text-sm text-gray-400 font-body">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
