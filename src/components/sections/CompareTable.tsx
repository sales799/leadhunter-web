import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import { COMPARISON } from "@/lib/constants";

function Check() {
  return (
    <svg className="h-5 w-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="h-5 w-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function CompareTable({ rows = 8 }: { rows?: number }) {
  const data = COMPARISON.slice(0, rows);

  return (
    <Section bg="white">
      <SectionHead
        badge="Compare"
        title="Why agencies choose LeadHunterIQ"
        description="See how we stack up against global tools that weren't built for India."
      />
      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-sm">
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
              <th className="px-6 py-4 text-center font-semibold text-blue-600">LeadHunterIQ</th>
              <th className="px-6 py-4 text-center font-semibold text-gray-400">Others</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row) => (
              <tr key={row.feature} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-700">{row.feature}</td>
                <td className="px-6 py-4 text-center text-sm">
                  {typeof row.leadhunter === "boolean" ? (
                    <Check />
                  ) : (
                    <span className="font-semibold text-blue-600">{row.leadhunter}</span>
                  )}
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  {typeof row.others === "boolean" ? (
                    <Cross />
                  ) : (
                    <span className="text-gray-400">{row.others}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center">
        <Button href="/compare/zoominfo" variant="secondary">
          See detailed comparisons
        </Button>
      </div>
    </Section>
  );
}
