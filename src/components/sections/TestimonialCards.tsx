import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialCards({ count = 3 }: { count?: number }) {
  const items = TESTIMONIALS.slice(0, count);

  return (
    <Section bg="gray">
      <SectionHead
        badge="Customers"
        badgeVariant="emerald"
        title="Trusted by India's growing staffing agencies"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <Card className="flex flex-col justify-between h-full">
              <div>
                <svg className="h-8 w-8 text-blue-200 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.943-1.28.943-2.108v-.256zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.131-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.943-1.28.943-2.108v-.256z" />
                </svg>
                <p className="text-gray-700 leading-relaxed">{t.quote}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-400">{t.title}, {t.company}</p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
      {count <= 3 && (
        <div className="mt-12 text-center">
          <Button href="/customers" variant="secondary">
            Read all customer stories
          </Button>
        </div>
      )}
    </Section>
  );
}
