"use client";

const colors = ["#10B981", "#FCD34D", "#3B82F6"];

export default function SignalDots({
  count = 5,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 rounded-full animate-pulse-dot"
          style={{
            background: colors[i % colors.length],
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
