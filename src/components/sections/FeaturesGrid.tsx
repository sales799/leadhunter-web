import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FeatureIcon from "@/components/graphics/FeatureIcons";
import { FEATURES } from "@/lib/constants";

export default function FeaturesGrid() {
  return (
    <Section bg="gray">
      <SectionHead
        badge="The Platform"
        badgeVariant="emerald"
        title="Six engines. One unfair advantage."
        description="Every feature engineered for the way Indian staffing agencies actually work."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.1}>
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/30 h-full">
              <FeatureIcon icon={f.icon} />
              <div className="flex items-center gap-2 mt-1">
                <h3 className="text-lg font-heading font-bold text-gray-900">
                  {f.title}
                </h3>
                {f.tag && f.tagColor && (
                  <Badge variant={f.tagColor}>{f.tag}</Badge>
                )}
              </div>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed font-body">
                {f.description}
              </p>
              <p className="mt-4 text-sm font-medium text-blue-600 font-body group-hover:underline">
                Learn more
                <svg
                  className="inline-block ml-1 h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/features" variant="secondary">
          Explore all features
        </Button>
      </div>
    </Section>
  );
}
