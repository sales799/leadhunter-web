import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { STEPS } from "@/lib/constants";

const stepColors = {
  blue: { bar: "bg-blue-600", icon: "text-blue-600", ring: "ring-blue-600/20" },
  emerald: { bar: "bg-emerald-500", icon: "text-emerald-500", ring: "ring-emerald-500/20" },
  gold: { bar: "bg-gold-400", icon: "text-gold-400", ring: "ring-gold-400/20" },
};

const stepIcons = [
  /* Radar / Detect */
  <svg key="radar" viewBox="0 0 32 32" fill="none" className="h-8 w-8">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
    <line x1="16" y1="16" x2="16" y2="4" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
  </svg>,
  /* Shield / Verify */
  <svg key="shield" viewBox="0 0 32 32" fill="none" className="h-8 w-8">
    <path d="M16 3l10 5v7c0 6-10 11-10 11S6 21 6 15V8l10-5z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  /* Zap / Deliver */
  <svg key="zap" viewBox="0 0 32 32" fill="none" className="h-8 w-8">
    <path d="M18 3L8 18h7l-2 11 10-15h-7l2-11z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
];

export default function HowItWorksSteps() {
  return (
    <Section bg="white">
      <SectionHead
        badge="How it works"
        title="From signal to revenue in three steps"
        description="Set up in 5 minutes. Start catching signals on day one."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {STEPS.map((step, i) => {
          const colors = stepColors[step.color];
          return (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="relative">
                {/* Connecting line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gray-200 -translate-x-1/2 z-0" />
                )}
                <div className={`${colors.bar} h-1 w-16 rounded-full mb-6`} />
                <div className={`inline-flex items-center justify-center h-14 w-14 rounded-xl ring-4 ${colors.ring} bg-white mb-4`}>
                  <div className={colors.icon}>{stepIcons[i]}</div>
                </div>
                <span className="block font-mono text-6xl font-bold text-gray-100 -mt-2">
                  {step.number}
                </span>
                <h3 className="mt-1 text-xl font-heading font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <Button href="/how-it-works" variant="secondary">
          See the full journey
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
    </Section>
  );
}
