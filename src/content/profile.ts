// Identity block shown in the sidebar, plus link/social row and the condensed career timeline.
// Icon SVGs live in public/assets/icons/ — hyperlinks/ for social platforms, generic/ for
// one-off icons like the resume download. Timeline icons are defined in CompanyIcons.tsx.

import { SocialIconKey } from "@/components/icons/SocialIcon";
import { SkillGlyphKey } from "@/components/icons/SkillGlyphs";

export const profile = {
  name: "Ivan Tan Yen Wen",
  initials: "IT",
  role: "Software Engineer @ PayNet",
  location: "Telok Panglima Garang, Selangor",
  email: "ivantanyenwen02@gmail.com",
  phone: "+6016 668-3670",
  github: "https://github.com/IvanTan02",
  linkedin: "https://www.linkedin.com/in/ivantan02/",
  instagram: "https://www.instagram.com/ivantan02/",
  resumeUrl: "/files/ivantan_resume_20260926.pdf",
  photo: "/images/profile-picture.jpg",
};

export type SocialLink = {
  // A platform icon (public/assets/icons/hyperlinks/) or a generic glyph
  // (public/assets/icons/generic/) — both render identically via CSS mask.
  icon: { kind: "social"; key: SocialIconKey } | { kind: "glyph"; key: SkillGlyphKey };
  label: string;
  href: string;
};

// The sidebar's icon-button row. Add a new platform with kind: "social" (plus an SVG in
// hyperlinks/), or a one-off link like the resume with kind: "glyph" (plus an SVG in generic/).
export const socialLinks: SocialLink[] = [
  { icon: { kind: "social", key: "github" }, label: "GitHub", href: profile.github },
  { icon: { kind: "social", key: "linkedin" }, label: "LinkedIn", href: profile.linkedin },
  { icon: { kind: "social", key: "instagram" }, label: "Instagram", href: profile.instagram },
  { icon: { kind: "social", key: "email" }, label: "Email", href: `mailto:${profile.email}` },
  { icon: { kind: "glyph", key: "document" }, label: "Download Resume", href: profile.resumeUrl },
];

export type TimelineEntry = {
  company: string;
  years: string;
  current?: boolean;
  // Filename (without extension) in public/assets/icons/experience/.
  logo: string;
};

// Add a role by adding an entry here and a matching logo SVG in
// public/assets/icons/experience/.
export const careerTimeline: TimelineEntry[] = [
  { company: "PayNet", years: "2025 — Current", current: true, logo: "paynet" },
  { company: "Continental AG", years: "2024", logo: "continental" },
];
