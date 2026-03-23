"use client";

const variants = {
  blue: "bg-blue-100 text-blue-600",
  emerald: "bg-emerald-100 text-emerald-500",
  gold: "bg-gold-400/20 text-gold-600",
  red: "bg-red-100 text-red-600",
  white: "bg-white/10 text-white",
  navy: "bg-navy-700 text-blue-200",
};

export default function Badge({
  children,
  variant = "blue",
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
