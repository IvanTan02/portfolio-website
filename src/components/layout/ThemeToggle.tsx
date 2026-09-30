"use client";

import { useEffect, useState } from "react";
import { SkillGlyph } from "@/components/icons/SkillGlyphs";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "ivan-portfolio-theme";

function systemPrefersDark() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(mode: ThemeMode) {
  document.documentElement.setAttribute("data-theme", mode);
}

function readStoredTheme(): ThemeMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable — fall through to system preference
  }
  return systemPrefersDark() ? "dark" : "light";
}

export default function ThemeToggle() {
  // Always starts as "light" to match the server-rendered HTML — localStorage and
  // matchMedia aren't available during SSR, so reading them here would cause a
  // hydration mismatch.
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    // Syncing from localStorage/matchMedia (browser-only signals, unavailable during
    // SSR) is the legitimate exception to "don't setState in an effect" — the state
    // must start as "light" to match SSR output, then adopt the real preference
    // once mounted.
    const stored = readStoredTheme();
    if (stored !== "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode(stored);
    }
    applyTheme(stored);
  }, []);

  function toggle() {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    setMode(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }

  return (
    <button
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-paper-raised text-muted transition-colors hover:border-steel hover:text-steel [&_.skill-glyph]:h-[17px] [&_.skill-glyph]:w-[17px] [&_.skill-glyph]:bg-current"
      onClick={toggle}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      <SkillGlyph glyphKey={mode === "light" ? "sun" : "moon"} />
    </button>
  );
}
