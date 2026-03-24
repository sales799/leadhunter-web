"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/theme/ThemeToggle";

function MegaDropdown({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-full pt-2 z-50"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xl min-w-[520px]">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Inline SVG icons for mega menu */
function IconGCC() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-emerald-500">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-blue-500">
      <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 16c-1 2-1 3-.5 5M15 16c1 2 1 3 .5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconIndia() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gold-600">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <rect x="6" y="14" width="3" height="5" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="10.5" y="11" width="3" height="8" rx="0.5" fill="currentColor" opacity="0.8" />
      <rect x="15" y="13" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-blue-500">
      <path d="M12 2l8 4v6c0 5-8 9-8 9s-8-4-8-9V6l8-4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const capabilityIcons: Record<string, React.ReactNode> = {
  "/solutions/gcc-tracking": <IconGCC />,
  "/solutions/lead-scoring": <IconBrain />,
  "/solutions/india-data": <IconIndia />,
  "/solutions/compliance": <IconShield />,
};

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
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container-lg flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#2563EB" />
              <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
              <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
              <circle cx="16" cy="16" r="2.5" fill="white" />
              {/* Radar sweep line */}
              <line
                x1="16" y1="16" x2="16" y2="6"
                stroke="white" strokeWidth="1.5" strokeOpacity="0.6"
                className="origin-center group-hover:animate-sweep"
              />
            </svg>
          </div>
          <span
            className={`text-lg font-heading font-extrabold tracking-tight ${
              scrolled ? "text-gray-900 dark:text-white" : "text-white"
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
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium font-body transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Solutions
              <svg
                className={`h-4 w-4 opacity-50 transition-transform ${
                  activeDropdown === "solutions" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <MegaDropdown open={activeDropdown === "solutions"}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400 font-body">
                    By Capability
                  </p>
                  {NAV_LINKS.solutions.capability.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-50 transition-colors"
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        {capabilityIcons[item.href]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600 font-heading">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400 font-body">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400 font-body">
                    By Role
                  </p>
                  {NAV_LINKS.solutions.role.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg p-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-body transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="mb-3 mt-4 text-xs font-bold uppercase tracking-widest text-gray-400 font-body">
                    Compare
                  </p>
                  {NAV_LINKS.solutions.compare.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg p-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-body transition-colors"
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
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium font-body transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Product
              <svg
                className={`h-4 w-4 opacity-50 transition-transform ${
                  activeDropdown === "product" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <MegaDropdown open={activeDropdown === "product"}>
              {NAV_LINKS.product.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg p-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-body transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </MegaDropdown>
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className={`rounded-lg px-4 py-2 text-sm font-medium font-body transition-colors ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white/80 hover:text-white"
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
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium font-body transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Resources
              <svg
                className={`h-4 w-4 opacity-50 transition-transform ${
                  activeDropdown === "resources" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <MegaDropdown open={activeDropdown === "resources"}>
              {NAV_LINKS.resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg p-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-body transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </MegaDropdown>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/demo"
            className={`text-sm font-medium font-body ${
              scrolled ? "text-gray-500 dark:text-gray-400" : "text-white/70"
            } hover:underline`}
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
          className={`lg:hidden p-2 ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 bg-white z-40 overflow-y-auto lg:hidden"
          >
            <div className="p-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-body">
                Solutions
              </p>
              {NAV_LINKS.solutions.capability.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 font-medium font-body"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-gray-200" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-body">
                Product
              </p>
              {NAV_LINKS.product.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 font-medium font-body"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/pricing"
                className="block py-2 text-gray-700 font-medium font-body"
              >
                Pricing
              </Link>
              <hr className="border-gray-200" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-body">
                Resources
              </p>
              {NAV_LINKS.resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 font-medium font-body"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-gray-200" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-body">
                Compare
              </p>
              {NAV_LINKS.solutions.compare.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 font-medium font-body"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-gray-200" />
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-body">
                For
              </p>
              {NAV_LINKS.solutions.role.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 font-medium font-body"
                >
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
