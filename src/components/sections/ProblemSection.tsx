import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import { PROBLEMS } from "@/lib/constants";

const icons = [
  <svg key="clock" viewBox="0 0 48 48" fill="none" className="h-8 w-8">
    <circle cx="24" cy="24" r="18" stroke="#EF4444" strokeWidth="2" />
    <path d="M24 14v12l8 4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="target" viewBox="0 0 48 48" fill="none" className="h-8 w-8">
    <circle cx="24" cy="24" r="18" stroke="#EF4444" strokeWidth="2" />
    <circle cx="24" cy="24" r="10" stroke="#EF4444" strokeWidth="2" opacity="0.5" />
    <circle cx="24" cy="24" r="3" fill="#EF4444" />
  </svg>,
  <svg key="globe" viewBox="0 0 48 48" fill="none" className="h-8 w-8">
    <circle cx="24" cy="24" r="18" stroke="#EF4444" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="10" ry="18" stroke="#EF4444" strokeWidth="1.5" opacity="0.5" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="#EF4444" strokeWidth="1.5" opacity="0.5" />
  </svg>,
];

export default function ProblemSection() {
  return (
    <Section bg="white">
      <SectionHead
        badge="The Problem"
        badgeVariant="blue"
        title="Indian staffing agencies are flying blind"
        description="While your competitors chase the same outdated job board leads, real opportunities slip through the cracks."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.15}>
            <Card className="border-t-4 border-t-red-500">
              <div className="mb-4">{icons[i]}</div>
              <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
