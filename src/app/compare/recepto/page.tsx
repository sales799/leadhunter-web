'use client';

import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/ui/FadeIn';

export default function CompareRecepto() {
  const features = [
    {
      name: 'India Regulatory Signals (MCA/EPFO/STPI)',
      leadhunter: true,
      recepto: false,
    },
    {
      name: 'GCC Expansion Tracking',
      leadhunter: true,
      recepto: false,
    },
    {
      name: 'Signal Sources',
      leadhunter: '51 verified sources',
      recepto: 'Not disclosed',
    },
    {
      name: 'AI Lead Scoring',
      leadhunter: 'TALPRO-IQ (49 signals, 100-point)',
      recepto: 'Proprietary AI model',
    },
    {
      name: 'Lead Verification',
      leadhunter: '7-Gate SAV Framework',
      recepto: 'Basic enrichment',
    },
    {
      name: 'Automated Outreach',
      leadhunter: '5-stage, 6 persona variants',
      recepto: 'Email + LinkedIn + WhatsApp',
    },
    {
      name: 'GTM Playbook Library',
      leadhunter: '20+ plays (growing)',
      recepto: '136+ plays',
    },
    {
      name: 'Free Trial',
      leadhunter: '14-day, no credit card',
      recepto: '7-day',
    },
    {
      name: 'Starting Price',
      leadhunter: '₹19,999/mo (~₹2.4L/year)',
      recepto: '$1,499/quarter (~₹5L/year)',
    },
    {
      name: 'CRM Integration',
      leadhunter: 'CSV, HubSpot, Zoho, API',
      recepto: 'Push to CRM',
    },
    {
      name: 'Indian Mobile Numbers',
      leadhunter: true,
      recepto: false,
    },
    {
      name: 'DPDPA Compliance',
      leadhunter: true,
      recepto: false,
    },
    {
      name: 'Self-Serve Signup',
      leadhunter: true,
      recepto: true,
    },
    {
      name: 'Chrome Extension',
      leadhunter: 'Coming Q2 2026',
      recepto: false,
    },
  ];

  const pricingComparison = [
    {
      tier: 'Analyst',
      leadhunter: '₹2.4L/year',
      recepto: '₹5.0L/year',
      savings: '52%',
    },
    {
      tier: 'Strategist',
      leadhunter: '₹6.0L/year',
      recepto: '₹10.0L/year',
      savings: '40%',
    },
    {
      tier: 'Command',
      leadhunter: '₹14.4L/year',
      recepto: '₹20.8L+/year',
      savings: '31%',
    },
  ];

  return (
    <>
      <Section bg="navy" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <Badge variant="blue">Honest Comparison</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-6 font-heading">
              LeadHunterIQ vs Recepto.ai
            </h1>
            <p className="text-xl text-gray-300 mt-6 leading-relaxed">
              Both platforms use AI to find high-intent buyers. Here&apos;s how they differ — and why Indian B2B teams choose LeadHunterIQ.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section bg="white" className="py-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHead
              badge="Quick Verdict"
              title="Side-by-Side Summary"
              description=""
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <FadeIn delay={0.1}>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 font-heading mb-4">LeadHunterIQ</h3>
                <ul className="space-y-3 text-blue-800 font-body">
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Built for India. 51 data sources.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>49-signal TALPRO-IQ scoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>7-gate verification framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>India regulatory signals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>From ₹19,999/mo</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">Recepto.ai</h3>
                <ul className="space-y-3 text-gray-700 font-body">
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Global platform. AI intent detection.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>136+ GTM plays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Automated multi-channel outreach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>USD billing (international)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>From $1,499/quarter</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section bg="light-gray" className="py-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHead
              badge="Feature Comparison"
              title="Detailed Feature Table"
              description=""
            />
          </FadeIn>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="px-6 py-4 text-left text-gray-900 font-bold font-heading">Feature</th>
                  <th className="px-6 py-4 text-center text-blue-900 font-bold font-heading">LeadHunterIQ</th>
                  <th className="px-6 py-4 text-center text-gray-900 font-bold font-heading">Recepto.ai</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-900 font-body">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.leadhunter === 'boolean' ? (
                        feature.leadhunter ? (
                          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-bold rounded">✅</span>
                        ) : (
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 font-bold rounded">❌</span>
                        )
                      ) : (
                        <span className="text-gray-900 font-semibold font-body">{feature.leadhunter}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.recepto === 'boolean' ? (
                        feature.recepto ? (
                          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-bold rounded">✅</span>
                        ) : (
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 font-bold rounded">❌</span>
                        )
                      ) : (
                        <span className="text-gray-900 font-semibold font-body">{feature.recepto}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section bg="white" className="py-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHead
              badge="Pricing Comparison"
              title="Annual Cost Breakdown"
              description="See how much you save with LeadHunterIQ"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {pricingComparison.map((item, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <Card className="bg-gradient-to-br from-white to-gray-50 p-8 border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">{item.tier} Plan</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 font-body mb-1">LeadHunterIQ</p>
                      <p className="text-2xl font-bold text-blue-600 font-heading">{item.leadhunter}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 font-body mb-1">Recepto.ai</p>
                      <p className="text-2xl font-bold text-gray-600 font-heading">{item.recepto}</p>
                    </div>

                    <div className="pt-4 border-t-2 border-gray-200">
                      <p className="text-sm text-gray-600 font-body mb-1">Your Savings</p>
                      <p className="text-3xl font-bold text-emerald-600 font-heading">{item.savings}</p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="light-gray" className="py-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHead
              badge="Decision Guide"
              title="When to Choose"
              description=""
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <FadeIn delay={0.1}>
              <Card className="bg-white p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">Choose LeadHunterIQ if...</h3>
                <ul className="space-y-3 text-gray-700 font-body">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>You need India-specific regulatory signals (MCA, EPFO, STPI)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>You focus on GCC expansion and growth signals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>You need verified Indian mobile numbers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>DPDPA compliance is critical for your business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>You want 52% lower pricing than competitors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>You target Indian B2B companies</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="bg-white p-8 border-l-4 border-gray-400">
                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">Choose Recepto if...</h3>
                <ul className="space-y-3 text-gray-700 font-body">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-600 font-bold">•</span>
                    <span>You need a truly global platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-600 font-bold">•</span>
                    <span>You require 136+ pre-built GTM plays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-600 font-bold">•</span>
                    <span>You target markets outside India</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-600 font-bold">•</span>
                    <span>Multi-channel automation (email + LinkedIn + WhatsApp) is essential</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-600 font-bold">•</span>
                    <span>You prefer USD billing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-600 font-bold">•</span>
                    <span>You need the largest GTM play library available</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section bg="navy" className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-8">
              See LeadHunterIQ in action
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-body">
              Experience the India-first GTM platform built for B2B buyers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/signup"
                variant="primary"
                size="lg"
              >
                Start Free Trial
              </Button>
              <Button
                href="/demo"
                variant="secondary"
                size="lg"
              >
                Book a Demo
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
