// Tab bar order and labels. Add a tab by adding a key here, a matching entry in
// PANEL_BY_KEY (src/components/layout/MainContent.tsx), and its content file below.

export type TabKey = "about" | "experience" | "skills" | "projects" | "education" | "contact";

export const DEFAULT_TAB: TabKey = "about";

export const tabs: { key: TabKey; label: string }[] = [
  { key: "about", label: "About Me" },
  { key: "experience", label: "Experience" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "education", label: "Education" },
  { key: "contact", label: "Contact" },
];
