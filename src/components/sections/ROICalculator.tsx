"use client";

import { useState, useMemo } from "react";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Card from "@/components/ui/Card";

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix = "",
  prefix = "",
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  prefix?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="font-mono text-sm font-bold text-blue-600">
          {prefix}{value.toLocaleString("en-IN")}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none bg-gray-200 accent-blue-600"
      />
    </div>
  );
}

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [avgDeal, setAvgDeal] = useState(500000);
  const [closeRate, setCloseRate] = useState(10);

  const results = useMemo(() => {
    const monthlyCost = 5999; // Growth plan
    const improvedLeads = Math.round(monthlyLeads * 1.4); // 40% more leads
    const improvedCloseRate = closeRate * 1.3; // 30% better close rate
    const monthlyRevenue = Math.round((improvedLeads * (improvedCloseRate / 100) * avgDeal));
    const currentRevenue = Math.round(monthlyLeads * (closeRate / 100) * avgDeal);
    const additionalRevenue = monthlyRevenue - currentRevenue;
    const roi = Math.round((additionalRevenue / monthlyCost) * 100);
    const paybackDays = Math.max(1, Math.round((monthlyCost / (additionalRevenue / 30))));
    const costPerLead = Math.round(monthlyCost / improvedLeads);

    return { monthlyRevenue, additionalRevenue, roi, paybackDays, costPerLead };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyLeads, avgDeal, closeRate]);

  return (
    <Section bg="gray" id="roi-calculator">
      <SectionHead
        badge="ROI Calculator"
        badgeVariant="emerald"
        title="Calculate your return"
        description="See exactly how much additional revenue LeadHunterIQ can generate for your agency."
      />
      <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <Card>
          <h3 className="text-lg font-bold text-gray-900 mb-6">Your current numbers</h3>
          <div className="space-y-6">
            <Slider label="Team size" value={teamSize} onChange={setTeamSize} min={1} max={50} />
            <Slider label="Monthly leads" value={monthlyLeads} onChange={setMonthlyLeads} min={10} max={500} />
            <Slider label="Avg deal value" value={avgDeal} onChange={setAvgDeal} min={100000} max={5000000} step={50000} prefix="₹" />
            <Slider label="Close rate" value={closeRate} onChange={setCloseRate} min={1} max={50} suffix="%" />
          </div>
        </Card>

        {/* Results */}
        <Card className="bg-navy-900 text-white" variant="dark">
          <h3 className="text-lg font-bold mb-6">With LeadHunterIQ</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400">Additional monthly revenue</p>
              <p className="font-mono text-3xl font-bold text-emerald-500">
                ₹{results.additionalRevenue.toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Cost per lead</p>
              <p className="font-mono text-2xl font-bold text-blue-500">
                ₹{results.costPerLead}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Payback period</p>
              <p className="font-mono text-2xl font-bold text-gold-400">
                {results.paybackDays} days
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Annual ROI</p>
              <p className="font-mono text-2xl font-bold text-emerald-500">
                {results.roi}%
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 border border-white/10">
              <p className="text-sm text-gray-300">
                Based on your numbers, LeadHunterIQ pays for itself in{" "}
                <span className="font-bold text-gold-400">{results.paybackDays} days</span>.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
