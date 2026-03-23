"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

function MegaDropdown({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  if (!open) return null;
  return (
    <div className="absolute left-0 top-full pt-2 z-50">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xl min-w-[520px]">
        {children}
      </div>
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-lg flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#2563EB" />
            <path d="M16 6L26 16L16 26L6 16L16 6Z" fill="white" fillOpacity="0.9" />
            <circle cx="16" cy="16" r="4" fill="#2563EB" />
          </svg>
          <span
            className={`text-lg font-extrabold tracking-tight ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            LeadHunterIQ
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/80 hover:text-white"
              }`}
            >
              Solutions
              <svg className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <MegaDropdown open={activeDropdown === "solutions"}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                    By Capability
                  </p>
                  {NAV_LINKS.solutions.capability.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group block rounded-lg p-2 hover:bg-gray-50"
                    >
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                    By Role
                  </p>
                  {NAV_LINKS.solutions.role.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="mb-3 mt-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                    Compare
                  </p>
                  {NAV_LINKS.solutions.compare.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </MegaDropdown>
          </div>

          {/* Product dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("product")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/80 hover:text-white"
              }`}
            >
              Product
              <svg className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <MegaDropdown open={activeDropdown === "product"}>
              {NAV_LINKS.product.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </MegaDropdown>
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/80 hover:text-white"
            } ${pathname === "/pricing" ? "text-blue-600" : ""}`}
          >
            Pricing
          </Link>

          {/* Resources dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/80 hover:text-white"
              }`}
            >
              Resources
              <svg className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <MegaDropdown open={activeDropdown === "resources"}>
              {NAV_LINKS.resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </MegaDropdown>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/demo"
            className={`text-sm font-medium ${scrolled ? "text-gray-500" : "text-white/70"} hover:underline`}
          >
            Login
          </Link>
          <Button href="/demo" size="sm">
            Book a Demo
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-gray-900" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 overflow-y-auto lg:hidden">
          <div className="p-6 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Solutions</p>
            {NAV_LINKS.solutions.capability.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 text-gray-700 font-medium">
                {item.name}
              </Link>
            ))}
            <hr className="border-gray-200" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Product</p>
            {NAV_LINKS.product.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 text-gray-700 font-medium">
                {item.name}
              </Link>
            ))}
            <Link href="/pricing" className="block py-2 text-gray-700 font-medium">
              Pricing
            </Link>
            <hr className="border-gray-200" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Resources</p>
            {NAV_LINKS.resources.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 text-gray-700 font-medium">
                {item.name}
              </Link>
            ))}
            <hr className="border-gray-200" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Compare</p>
            {NAV_LINKS.solutions.compare.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 text-gray-700 font-medium">
                {item.name}
              </Link>
            ))}
            <hr className="border-gray-200" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">For</p>
            {NAV_LINKS.solutions.role.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2 text-gray-700 font-medium">
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button href="/demo" className="w-full">
                Book a Demo
              </Button>
              <Button href="/demo" variant="secondary" className="w-full">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
