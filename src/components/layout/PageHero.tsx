import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";

type Breadcrumb = { name: string; href: string };

export default function PageHero({
  badge,
  title,
  description,
  cta1,
  cta2,
  breadcrumbs,
}: {
  badge?: string;
  title: string;
  description?: string;
  cta1?: { label: string; href: string };
  cta2?: { label: string; href: string };
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="relative overflow-hidden gradient-navy-radial pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-noise" />
      <div className="container-lg relative">
        {breadcrumbs && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400 font-body">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((bc) => (
              <span key={bc.href} className="flex items-center gap-2">
                <span className="text-gray-600">/</span>
                <Link
                  href={bc.href}
                  className="hover:text-white transition-colors"
                >
                  {bc.name}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <div className="mb-4">
            <Badge variant="white">{badge}</Badge>
          </div>
        )}
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold tracking-display text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed font-body">
            {description}
          </p>
        )}
        {(cta1 || cta2) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {cta1 && (
              <Button href={cta1.href} size="lg">
                {cta1.label}
              </Button>
            )}
            {cta2 && (
              <Button href={cta2.href} variant="outline_white" size="lg">
                {cta2.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
