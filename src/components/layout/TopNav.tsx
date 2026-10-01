"use client";

import { tabs, TabKey } from "@/content/nav";
import ThemeToggle from "@/components/layout/ThemeToggle";

export default function TopNav({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (key: TabKey) => void;
}) {
  return (
    <nav className="sticky top-[env(safe-area-inset-top,0px)] z-10 grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-border bg-paper/80 px-8 backdrop-blur-sm max-[780px]:flex max-[780px]:h-auto max-[780px]:justify-between max-[780px]:px-5 max-[780px]:py-4">
      <div className="max-[780px]:hidden" />
      <div
        className="flex gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Sections"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className="relative whitespace-nowrap px-[18px] pb-3.5 pt-2.5 font-mono text-[0.82rem] tracking-[0.02em] text-muted transition-colors after:absolute after:-bottom-px after:left-0 after:right-0 after:h-0.5 after:rounded after:bg-transparent after:transition-colors hover:text-ink aria-selected:font-medium aria-selected:text-ink aria-selected:after:bg-signal"
            role="tab"
            aria-selected={active === tab.key}
            onClick={() => onChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="justify-self-end">
        <ThemeToggle />
      </div>
    </nav>
  );
}
