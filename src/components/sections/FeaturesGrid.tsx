import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FeatureIcon from "@/components/graphics/FeatureIcons";
import { FEATURES } from "@/lib/constants";

export default function FeaturesGrid() {
  return (
    <Section bg="gray">
      <SectionHead
        badge="Platform"
        title="Six engines. One unfair advantage."
        description="Every feature engineered for the way Indian staffing agencies actually work."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.1}>
            <Card>
              <FeatureIcon icon={f.icon} />
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                {f.tag && (
                  <Badge variant={f.tagColor || "blue"}>{f.tag}</Badge>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </Card>
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
