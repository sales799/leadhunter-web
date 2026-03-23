import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tools, playbooks, and templates for Indian staffing agencies. ROI calculator, lead gen guides, email outreach templates, and BD call scripts.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
