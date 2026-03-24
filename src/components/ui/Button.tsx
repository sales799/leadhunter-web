"use client";

import Link from "next/link";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98]",
  ghost: "text-gray-500 hover:text-gray-900 hover:bg-gray-100",
  white:
    "bg-white text-navy-900 hover:bg-gray-50 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
  outline_white:
    "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-[1.02] active:scale-[0.98]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  shimmer?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  shimmer = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-heading font-semibold tracking-tight transition-all duration-200 ${variants[variant]} ${sizes[size]} ${shimmer ? "btn-shimmer" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
