import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="h-4 w-4 text-gold-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCards({ count = 3 }: { count?: number }) {
  const items = TESTIMONIALS.slice(0, count);

  return (
    <Section bg="white">
      <SectionHead
        badge="Customers"
        badgeVariant="emerald"
        title="What agency owners are saying"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <div className="flex flex-col justify-between h-full rounded-2xl border border-gray-200 bg-white p-8 lg:p-10 transition-all duration-300 hover:shadow-lg">
              <div>
                <svg
                  className="h-8 w-8 text-emerald-400 mb-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.943-1.28.943-2.108v-.256zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.131-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.943-1.28.943-2.108v-.256z" />
                </svg>
                <p className="text-gray-700 leading-relaxed font-body italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <StarRating />
                <p className="mt-2 font-heading font-semibold text-gray-900">
                  {t.name}
                </p>
                <p className="text-sm text-gray-400 font-body">
                  {t.title}, {t.company}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      {count <= 3 && (
        <div className="mt-12 text-center">
          <Button href="/customers" variant="secondary">
            Read all stories
            <svg
              className="ml-2 h-4 w-4"
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
          </Button>
        </div>
      )}
    </Section>
  );
}
