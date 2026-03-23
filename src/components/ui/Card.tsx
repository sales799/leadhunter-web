"use client";

const variants = {
  light: "bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1",
  dark: "glass-card hover:bg-white/10",
  flat: "bg-gray-50 border border-gray-200",
};

export default function Card({
  children,
  variant = "light",
  className = "",
  padding = "p-6 lg:p-8",
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  padding?: string;
}) {
  return (
    <div
      className={`rounded-2xl transition-all duration-300 ${variants[variant]} ${padding} ${className}`}
    >
      {children}
    </div>
  );
}
