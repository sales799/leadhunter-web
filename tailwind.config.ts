import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060F1F",
          900: "#0B1D3A",
          800: "#0F2440",
          700: "#162D50",
          600: "#1E3A5F",
        },
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
        },
        emerald: {
          100: "#D1FAE5",
          400: "#34D399",
          500: "#10B981",
        },
        gold: {
          400: "#FCD34D",
          500: "#EAB308",
          600: "#D97706",
        },
        amber: {
          500: "#F59E0B",
        },
        red: {
          500: "#EF4444",
        },
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        display: "-0.045em",
        heading: "-0.03em",
        tight: "-0.02em",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        sweep: "sweep 8s linear infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-emerald": "pulseEmerald 2s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "pulse-blue": "pulseBlue 2s ease-in-out infinite",
        "radar-sweep": "radarSweep 8s linear infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        sweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        pulseEmerald: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(16, 185, 129, 0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(252, 211, 77, 0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(252, 211, 77, 0)" },
        },
        pulseBlue: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(59, 130, 246, 0)" },
        },
        radarSweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
