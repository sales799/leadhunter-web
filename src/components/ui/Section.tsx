const bgs = {
  white: "bg-white dark:bg-gray-900",
  gray: "bg-gray-50 dark:bg-gray-800",
  "light-gray": "bg-gray-100 dark:bg-gray-800",
  navy: "gradient-navy text-white",
  "navy-radial": "gradient-navy-radial text-white",
};

export default function Section({
  children,
  bg = "white",
  className = "",
  id,
  overlay,
  gridPattern,
}: {
  children: React.ReactNode;
  bg?: keyof typeof bgs;
  className?: string;
  id?: string;
  overlay?: boolean;
  gridPattern?: boolean;
}) {
  const isDark = bg === "navy" || bg === "navy-radial";

  return (
    <section
      id={id}
      className={`relative py-24 lg:py-32 ${bgs[bg]} ${className}`}
    >
      {overlay && <div className="absolute inset-0 grid-overlay" />}
      {gridPattern && isDark && (
        <div className="absolute inset-0 bg-grid-pattern" />
      )}
      {isDark && <div className="absolute inset-0 bg-noise" />}
      <div className="container-lg relative">{children}</div>
    </section>
  );
}
