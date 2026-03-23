const bgs = {
  white: "bg-white",
  gray: "bg-gray-50",
  "light-gray": "bg-gray-100",
  navy: "gradient-navy text-white",
  "navy-radial": "gradient-navy-radial text-white",
};

export default function Section({
  children,
  bg = "white",
  className = "",
  id,
  overlay,
}: {
  children: React.ReactNode;
  bg?: keyof typeof bgs;
  className?: string;
  id?: string;
  overlay?: boolean;
}) {
  return (
    <section id={id} className={`relative py-24 lg:py-32 ${bgs[bg]} ${className}`}>
      {overlay && <div className="absolute inset-0 grid-overlay" />}
      <div className="container-lg relative">{children}</div>
    </section>
  );
}
