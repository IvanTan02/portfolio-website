"use client";

import { useState } from "react";
import { tabs, TabKey, DEFAULT_TAB } from "@/content/nav";
import ThemeToggle from "@/components/layout/ThemeToggle";
import AboutPanel from "@/components/panels/AboutPanel";
import ExperiencePanel from "@/components/panels/ExperiencePanel";
import SkillsPanel from "@/components/panels/SkillsPanel";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import EducationPanel from "@/components/panels/EducationPanel";
import ContactPanel from "@/components/panels/ContactPanel";

const PANEL_BY_KEY: Record<TabKey, React.ComponentType> = {
  about: AboutPanel,
  experience: ExperiencePanel,
  skills: SkillsPanel,
  projects: ProjectsPanel,
  education: EducationPanel,
  contact: ContactPanel,
};

export default function MainContent() {
  const [active, setActive] = useState<TabKey>(DEFAULT_TAB);
  const ActivePanel = PANEL_BY_KEY[active];

  return (
    <main className="min-w-0 flex-1 p-8 pb-20 max-[780px]:p-6 max-[780px]:pb-16">
      <nav className="mb-10 flex items-center justify-between gap-4 border-b border-border">
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
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mb-3">
          <ThemeToggle />
        </div>
      </nav>

      <ActivePanel />
    </main>
  );
}
