import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import { PROBLEMS } from "@/lib/constants";

const icons = [
  <svg key="clock" viewBox="0 0 48 48" fill="none" className="h-10 w-10">
    <circle cx="24" cy="24" r="20" stroke="#EF4444" strokeWidth="1.5" opacity="0.2" />
    <circle cx="24" cy="24" r="14" stroke="#EF4444" strokeWidth="1.5" opacity="0.4" />
    <path d="M24 14v12l8 4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="globe" viewBox="0 0 48 48" fill="none" className="h-10 w-10">
    <circle cx="24" cy="24" r="20" stroke="#EF4444" strokeWidth="1.5" opacity="0.2" />
    <ellipse cx="24" cy="24" rx="10" ry="20" stroke="#EF4444" strokeWidth="1.5" opacity="0.4" />
    <line x1="4" y1="24" x2="44" y2="24" stroke="#EF4444" strokeWidth="1.5" opacity="0.4" />
    <line x1="4" y1="16" x2="44" y2="16" stroke="#EF4444" strokeWidth="1" opacity="0.2" />
    <line x1="4" y1="32" x2="44" y2="32" stroke="#EF4444" strokeWidth="1" opacity="0.2" />
  </svg>,
  <svg key="rupee" viewBox="0 0 48 48" fill="none" className="h-10 w-10">
    <circle cx="24" cy="24" r="20" stroke="#EF4444" strokeWidth="1.5" opacity="0.2" />
    <text x="24" y="32" fill="#EF4444" fontSize="24" fontWeight="700" textAnchor="middle" fontFamily="var(--font-mono)">
      ₹
    </text>
    <line x1="15" y1="12" x2="33" y2="12" stroke="#EF4444" strokeWidth="2" opacity="0.3" />
  </svg>,
];

export default function ProblemSection() {
  return (
    <Section bg="white" className="pt-32">
      <SectionHead
        badge="The Problem"
        badgeVariant="blue"
        title="The ₹50 Lakh problem nobody's solving"
        description="While your competitors chase the same outdated job board leads, real opportunities slip through the cracks."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.15}>
            <Card className="border-t-4 border-t-red-500 h-full">
              <div className="mb-5">{icons[i]}</div>
              <h3 className="text-xl font-heading font-bold text-gray-900">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed font-body">
                {p.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
