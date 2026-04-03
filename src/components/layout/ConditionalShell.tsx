"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default function ConditionalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCandidate = pathname.startsWith("/candidate");

  if (isCandidate) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
