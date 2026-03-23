"use client";

import Link from "next/link";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25",
  secondary: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  ghost: "text-gray-500 hover:text-gray-900 hover:bg-gray-100",
  white: "bg-white text-navy-900 hover:bg-gray-50 shadow-lg",
  outline_white: "border-2 border-white/30 text-white hover:bg-white/10",
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
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

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
