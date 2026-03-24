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
  badgeVariant?: "blue" | "emerald" | "gold" | "white" | "navy" | "red";
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`mb-16 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`font-heading text-3xl font-extrabold tracking-heading sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-gray-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            light ? "text-gray-400" : "text-gray-500 dark:text-gray-400"
          } max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
