"use client";

const variants = {
  light:
    "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300",
  dark: "glass-card hover:bg-white/10 transition-all duration-300",
  flat: "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
  gradient:
    "relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300 overflow-hidden",
};

export default function Card({
  children,
  variant = "light",
  className = "",
  padding = "p-8 lg:p-10",
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  padding?: string;
}) {
  return (
    <div
      className={`rounded-2xl ${variants[variant]} ${padding} ${className}`}
    >
      {children}
    </div>
  );
}
