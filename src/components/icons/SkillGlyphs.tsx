// Generic line-icon glyphs used for Skills tab chips (non-brand categories like "REST APIs", "Microservices")
// and other one-off icon needs (e.g. the sidebar's resume download button).
// SVG source files live in public/assets/icons/generic/ — add a new glyph key here and
// reference it from a skill's `icon` field in src/content/skills.ts.

import { MaskIcon } from "@/components/icons/MaskIcon";

const GLYPH_DIR = "/assets/icons/generic";

export const SKILL_GLYPH_KEYS = [
  "code",
  "api",
  "grid",
  "layers",
  "sync",
  "queue",
  "bolt",
  "db",
  "cloud",
  "box",
  "container",
  "document",
  "sun",
  "moon",
] as const;

export type SkillGlyphKey = (typeof SKILL_GLYPH_KEYS)[number];

export function isSkillGlyphKey(key: string): key is SkillGlyphKey {
  return (SKILL_GLYPH_KEYS as readonly string[]).includes(key);
}

export function SkillGlyph({ glyphKey }: { glyphKey: SkillGlyphKey }) {
  return <MaskIcon src={`${GLYPH_DIR}/${glyphKey}.svg`} className="skill-glyph" />;
}
