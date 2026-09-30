"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

const SHOW_DELAY_MS = 100;

// Floating tooltip rendered via a portal at document.body, so it can escape
// any ancestor with overflow:hidden (like the marquee's clipped/masked container).
// Positioned above the trigger element, centered horizontally, computed from its
// live bounding box on hover.
export default function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  // The portal only exists once mounted on the client — document.body isn't available
  // during SSR, and checking typeof document directly in render would render the portal
  // on the client's first pass but not the server's, causing a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Flipping this only after mount (a browser-only signal, unavailable during SSR)
    // is the legitimate exception to "don't setState in an effect" — see the same
    // pattern and rationale in ThemeToggle.tsx.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  function handleEnter() {
    timeoutRef.current = setTimeout(() => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;
      setPosition({ top: rect.top - 10, left: rect.left + rect.width / 2 });
      setVisible(true);
    }, SHOW_DELAY_MS);
  }

  function handleLeave() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  }

  return (
    <span
      ref={wrapperRef}
      className="inline-flex items-center justify-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
      {mounted &&
        createPortal(
          <span
            className={`floating-tooltip pointer-events-none fixed z-[9999] whitespace-nowrap rounded-md bg-ink px-2.5 py-1.5 font-mono text-[0.7rem] text-paper${
              visible ? " visible" : ""
            }`}
            style={{ top: position.top, left: position.left }}
            role="tooltip"
          >
            {label}
          </span>,
          document.body
        )}
    </span>
  );
}
