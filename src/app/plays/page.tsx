"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

interface Play {
  id: number;
  title: string;
  description: string;
  category: "staffing" | "saas" | "consulting" | "it-services";
  industries: string[];
  available: boolean;
  signals: string;
  avgScore: string;
}

const PLAYS: Play[] = [
  { id: 1, title: "GCC Expansion Hunter", description: "Detect new Global Capability Centers before they start hiring. Track MCA filings, STPI registrations, and commercial real estate signals to identify multinationals setting up India operations.", category: "staffing", industries: ["Staffing"], available: true, signals: "MCA, STPI, Real Estate", avgScore: "92" },
  { id: 2, title: "Funding Round Tracker", description: "Companies that just raised capital need to scale teams fast. Monitor funding announcements across Series A-D and map to headcount growth patterns within 90 days of close.", category: "staffing", industries: ["Staffing", "SaaS"], available: true, signals: "Crunchbase, VCCEdge, Press", avgScore: "87" },
  { id: 3, title: "Mass Hiring Wave Detector", description: "Identify companies posting 50+ roles simultaneously across job boards. Early indicator of major expansion, new project wins, or vendor consolidation opportunities.", category: "staffing", industries: ["Staffing"], available: true, signals: "Job Boards, LinkedIn, EPFO", avgScore: "85" },
  { id: 4, title: "Compliance Signal Monitor", description: "Track EPFO, PF, PT, ESIC registration changes that indicate new entity setup or team expansion. Companies adding 100+ employees trigger staffing demand signals.", category: "staffing", industries: ["Staffing"], available: true, signals: "EPFO, ESIC, MCA", avgScore: "81" },
  { id: 5, title: "Leadership Change Alert", description: "New CTO/CIO/VP Engineering appointments trigger technology and team restructuring. Track C-suite changes across 10,000+ Indian companies for first-mover advantage.", category: "staffing", industries: ["Staffing"], available: true, signals: "LinkedIn, Press, MCA", avgScore: "79" },
  { id: 6, title: "Competitor Displacement", description: "Find companies using your competitor who are showing signs of dissatisfaction. Track negative G2 reviews, support complaint patterns, and contract renewal windows to time your outreach perfectly.", category: "saas", industries: ["SaaS"], available: true, signals: "G2, Capterra, Social", avgScore: "88" },
  { id: 7, title: "Tech Stack Adoption", description: "Track companies adopting complementary technologies that indicate readiness for your solution. If they just bought Salesforce, they need integrations. If they hired a data team, they need analytics tools.", category: "saas", industries: ["SaaS"], available: true, signals: "BuiltWith, Job Posts, GitHub", avgScore: "84" },
  { id: 8, title: "Series B Scale-Up", description: "Post-Series B companies need to professionalize their tech stack. Target the 90-day window after funding when they have budget, urgency, and a mandate to scale.", category: "saas", industries: ["SaaS"], available: true, signals: "Crunchbase, VCCEdge, Press", avgScore: "91" },
  { id: 9, title: "Compliance Deadline", description: "Companies facing DPDPA, SOC 2, or ISO 27001 deadlines need solutions fast. Time-sensitive, high-intent buyers who will pay a premium for speed and expertise.", category: "saas", industries: ["SaaS", "Consulting"], available: true, signals: "Regulatory, MCA, Press", avgScore: "90" },
  { id: 10, title: "Product Hunt Momentum", description: "Companies launching on Product Hunt are in growth mode and actively evaluating tools. Track launches, upvote momentum, and hiring patterns to identify SaaS buyers in discovery phase.", category: "saas", industries: ["SaaS"], available: true, signals: "Product Hunt, Twitter, LinkedIn", avgScore: "76" },
  { id: 11, title: "Digital Transformation Signal", description: "Companies posting for CDO/CTO roles or cloud migration engineers are starting transformation projects worth crores. Detect the earliest hiring signals that precede RFPs by 3-6 months.", category: "consulting", industries: ["Consulting"], available: true, signals: "Job Boards, LinkedIn, Press", avgScore: "86" },
  { id: 12, title: "M&A Integration", description: "Post-acquisition companies need consulting for systems integration, culture alignment, and process standardization. Track MCA filings and press announcements for merger activity across India.", category: "consulting", industries: ["Consulting"], available: true, signals: "MCA, Press, SEBI", avgScore: "89" },
  { id: 13, title: "Expansion Market Entry", description: "Companies opening new offices or entering new Indian cities need local consulting support. Track STPI registrations, GST filings, and commercial lease signals across tier-1 and tier-2 cities.", category: "consulting", industries: ["Consulting", "Staffing"], available: true, signals: "STPI, GST, Real Estate", avgScore: "83" },
  { id: 14, title: "Board Restructuring", description: "New board appointments and governance changes often trigger strategic consulting engagements. Independent director additions signal compliance pressure and audit readiness.", category: "consulting", industries: ["Consulting"], available: true, signals: "MCA, SEBI, Press", avgScore: "77" },
  { id: 15, title: "ESG Compliance Push", description: "Companies publishing first ESG reports or hiring sustainability officers need ESG consulting. Track BRSR filings, sustainability hires, and board-level ESG committee formations.", category: "consulting", industries: ["Consulting"], available: true, signals: "SEBI, LinkedIn, Annual Reports", avgScore: "82" },
  { id: 16, title: "Cloud Migration Wave", description: "Track companies posting cloud architect roles, announcing cloud-first initiatives, or renewing legacy contracts. Cloud migration projects worth 50L-5Cr need implementation partners.", category: "it-services", industries: ["IT Services"], available: true, signals: "Job Boards, AWS/Azure, Press", avgScore: "88" },
  { id: 17, title: "Cybersecurity Incident Response", description: "Companies in the news for data breaches urgently need security services. Track CERT-In advisories, breach disclosures, and security hiring surges for time-critical opportunities.", category: "it-services", industries: ["IT Services"], available: true, signals: "CERT-In, Press, Dark Web", avgScore: "94" },
  { id: 18, title: "Legacy Modernization", description: "Companies posting for mainframe-to-cloud or COBOL migration roles need modernization partners. Detect legacy tech hiring patterns that signal multi-year transformation projects.", category: "it-services", industries: ["IT Services"], available: true, signals: "Job Boards, LinkedIn, Press", avgScore: "80" },
  { id: 19, title: "AI/ML Adoption", description: "Companies hiring their first ML engineers or data scientists need AI implementation partners. Track AI hiring signals, GPU procurement patterns, and R&D team expansions.", category: "it-services", industries: ["IT Services", "Consulting"], available: true, signals: "Job Boards, GitHub, Patents", avgScore: "87" },
  { id: 20, title: "Infrastructure Scale-Out", description: "Companies signing large office leases or expanding headcount rapidly need IT infrastructure. Track real estate signals, EPFO additions, and network equipment procurement for infra deals.", category: "it-services", industries: ["IT Services"], available: true, signals: "Real Estate, EPFO, Procurement", avgScore: "81" },
];

const CATEGORIES = [
  { id: "all", label: "All Plays", count: 20 },
  { id: "staffing", label: "Staffing", count: 5 },
  { id: "saas", label: "SaaS", count: 5 },
  { id: "consulting", label: "Consulting", count: 5 },
  { id: "it-services", label: "IT Services", count: 5 },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; badge: 'navy' | 'blue' | 'emerald' | 'gold' | 'red' | 'white' }> = {
  staffing: { bg: "bg-emerald-500/10", text: "text-emerald-600", badge: "emerald" },
  saas: { bg: "bg-blue-500/10", text: "text-blue-600", badge: "blue" },
  consulting: { bg: "bg-gold-500/10", text: "text-gold-600", badge: "gold" },
  "it-services": { bg: "bg-purple-500/10", text: "text-purple-600", badge: "blue" },
};

export default function PlaysPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredPlays = activeCategory === "all" ? PLAYS : PLAYS.filter((play) => play.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <>
      <Section bg="navy-radial" overlay gridPattern>
        <SectionHead
          badge="GTM Strategy Library"
          badgeVariant="white"
          title="The LeadHunterIQ Playbook Library"
          description="Explore proven GTM strategies built around the signals your revenue team can act on first. Each play comes with signal sources, ICP filters, and outreach templates."
          light
        />
        <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {[
            { value: "20", label: "Plays" },
            { value: "5", label: "Industries" },
            { value: "\u221E", label: "Variations" },
          ].map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="text-center">
                <div className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{stat.value}</div>
                <p className="mt-2 text-sm text-gray-300 sm:text-base">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredPlays.map((play) => {
            const colors = CATEGORY_COLORS[play.category];
            return (
              <motion.div key={play.id} variants={itemVariants}>
                <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400">
                      Play #{String(play.id).padStart(2, "0")}
                    </div>
                    <Badge variant={colors.badge}>
                      {play.category.replace("-", " ")}
                    </Badge>
                  </div>
                  <h3 className="mb-3 font-heading text-lg font-bold text-gray-900">{play.title}</h3>
                  <p className="mb-4 text-sm text-gray-600 leading-relaxed line-clamp-3">{play.description}</p>
                  <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                    <span className="font-mono">Signals: {play.signals}</span>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {play.industries.map((industry) => (
                      <span key={industry} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                        {industry}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <Badge variant="emerald" mono>Available</Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">Avg Score:</span>
                      <span className="font-mono text-sm font-bold text-blue-600">{play.avgScore}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      <Section bg="navy-radial" overlay gridPattern>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHead
            title="Need a custom play?"
            description="Our team can build custom plays based on your ICP, target market, and competitive landscape."
            light
          />
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="white" size="lg">Request Custom Play</Button>
            <Button href="/signup" variant="outline_white" size="lg">Start Free Trial</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
