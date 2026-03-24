"use client";

import { useEffect, useState, useCallback } from "react";

type Tab = {
  id: string;
  label: string;
  badge?: string;
};

export default function StickyTabs({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  const handleScroll = useCallback(() => {
    const offset = 180; // sticky nav height + tab bar height + buffer
    for (let i = tabs.length - 1; i >= 0; i--) {
      const el = document.getElementById(tabs[i].id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          setActiveTab(tabs[i].id);
          return;
        }
      }
    }
    setActiveTab(tabs[0]?.id ?? "");
  }, [tabs]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <div className="sticky top-[72px] z-30 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav
          className="flex gap-1 overflow-x-auto py-2 scrollbar-hide"
          aria-label="Feature tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`flex-shrink-0 rounded-lg px-4 py-2.5 text-sm font-heading font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
