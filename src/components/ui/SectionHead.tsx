import Badge from "./Badge";

export default function SectionHead({
  badge,
  badgeVariant = "blue",
  title,
  description,
  align = "center",
  light = false,
}: {
  badge?: string;
  badgeVariant?: "blue" | "emerald" | "gold" | "white" | "navy";
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`mb-16 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-heading sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-gray-400" : "text-gray-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
