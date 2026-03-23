import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { STEPS } from "@/lib/constants";

const stepColors = {
  blue: "bg-blue-600",
  emerald: "bg-emerald-500",
  gold: "bg-gold-400",
};

export default function HowItWorksSteps() {
  return (
    <Section bg="white">
      <SectionHead
        badge="How it works"
        title="From signal to revenue in three steps"
        description="Set up in 5 minutes. Start catching signals on day one."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.15}>
            <div className="relative">
              <div className={`h-1 w-16 rounded-full ${stepColors[step.color]} mb-6`} />
              <span className="font-mono text-5xl font-bold text-gray-100">{step.number}</span>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/how-it-works" variant="secondary">
          See the full journey
        </Button>
      </div>
    </Section>
  );
}
