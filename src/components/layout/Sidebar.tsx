import Image from "next/image";
import { careerTimeline, profile, socialLinks } from "@/content/profile";
import { EntityLogo } from "@/components/icons/EntityLogo";
import { TOOLS, toolsMarquee } from "@/content/tools";
import ToolIcon from "@/components/icons/ToolIcon";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { SkillGlyph } from "@/components/icons/SkillGlyphs";
import Tooltip from "@/components/ui/Tooltip";

function ToolsMarquee() {
  return (
    <div className="max-[780px]:hidden">
      <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">
        Tools &amp; platforms
      </p>
      <div className="marquee-fade flex flex-col gap-3 overflow-hidden">
        <div className="flex w-max gap-2 animate-scroll-right hover:[animation-play-state:paused]">
          {[...toolsMarquee.top, ...toolsMarquee.top].map((id, i) => (
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-border-strong bg-paper-raised shadow-[0_3px_10px_-6px_rgba(11,18,32,0.25)] [&>span]:h-full [&>span]:w-full [&_img]:h-[17px] [&_img]:w-[17px] [&_svg]:h-[17px] [&_svg]:w-[17px]"
              key={`${id}-${i}`}
            >
              <ToolIcon tool={TOOLS[id]} />
            </span>
          ))}
        </div>
        <div className="flex w-max gap-2 animate-scroll-left hover:[animation-play-state:paused]">
          {[...toolsMarquee.bottom, ...toolsMarquee.bottom].map((id, i) => (
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-border-strong bg-paper-raised shadow-[0_3px_10px_-6px_rgba(11,18,32,0.25)] [&>span]:h-full [&>span]:w-full [&_img]:h-[17px] [&_img]:w-[17px] [&_svg]:h-[17px] [&_svg]:w-[17px]"
              key={`${id}-${i}`}
            >
              <ToolIcon tool={TOOLS[id]} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="sticky top-[env(safe-area-inset-top,0px)] flex h-dvh w-[300px] shrink-0 flex-col gap-8 self-start overflow-y-auto border-r border-border p-7 max-[780px]:static max-[780px]:h-auto max-[780px]:w-full max-[780px]:flex-row max-[780px]:flex-wrap max-[780px]:items-center max-[780px]:gap-5 max-[780px]:border-b max-[780px]:border-r-0 max-[780px]:border-border max-[780px]:p-5">
      <div className="max-[780px]:min-w-[200px] max-[780px]:flex-1">
        <Image
          className="mb-4 h-16 w-16 rounded-full border border-border-strong object-cover"
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={64}
          height={64}
        />
        <p className="mb-1.5 font-fraunces text-[1.35rem] font-semibold tracking-[-0.01em]">
          {profile.name}
        </p>
        <p className="mb-3.5 text-[0.92rem] leading-snug text-muted">{profile.role}</p>
        <p className="mb-4 flex items-center gap-1.5 font-mono text-[0.74rem] text-muted">
          📍 {profile.location}
        </p>
        <div className="mb-3.5 flex gap-2">
          {socialLinks.map((social) => {
            const isMailto = social.href.startsWith("mailto:");
            return (
              <Tooltip label={social.label} key={`${social.icon.kind}-${social.icon.key}`}>
                <a
                  href={social.href}
                  target={isMailto ? undefined : "_blank"}
                  rel={isMailto ? undefined : "noreferrer"}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-border-strong bg-paper-raised transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-steel focus-visible:-translate-y-px focus-visible:border-steel [&_.skill-glyph]:h-[15px] [&_.skill-glyph]:w-[15px] [&_.skill-glyph]:shrink-0 [&_.skill-glyph]:bg-steel [&_.social-icon]:h-[15px] [&_.social-icon]:w-[15px] [&_.social-icon]:shrink-0 [&_.social-icon]:bg-steel"
                >
                  {social.icon.kind === "social" ? (
                    <SocialIcon iconKey={social.icon.key} />
                  ) : (
                    <SkillGlyph glyphKey={social.icon.key} />
                  )}
                </a>
              </Tooltip>
            );
          })}
        </div>
      </div>

      <div className="max-[780px]:hidden">
        <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">
          Career so far
        </p>
        <div className="flex flex-col">
          {careerTimeline.map((entry) => (
            <div
              className="relative ml-4 border-l-2 border-border-strong pb-6 pl-11 last:border-transparent last:pb-0"
              key={entry.company}
            >
              <span
                className={`absolute -left-4 -top-0.5 flex h-8 w-8 items-center justify-center rounded-[9px] border bg-paper-raised [&_img]:h-[18px] [&_img]:w-[18px] [&_svg]:h-[18px] [&_svg]:w-[18px] ${
                  entry.current ? "border-steel text-steel" : "border-border-strong text-steel"
                }`}
                aria-hidden="true"
              >
                <EntityLogo dir="experience" logo={entry.logo} name={entry.company} />
              </span>
              <p className="mb-0.5 text-[0.88rem] font-semibold">{entry.company}</p>
              <p className="m-0 font-mono text-[0.72rem] text-muted">{entry.years}</p>
            </div>
          ))}
        </div>
      </div>

      <ToolsMarquee />

      <div className="mt-auto font-mono text-[0.7rem] text-muted max-[780px]:hidden">
        © {new Date().getFullYear()} {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}
      </div>
    </aside>
  );
}
