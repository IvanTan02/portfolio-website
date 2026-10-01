import { skillCategories } from "@/content/skills";
import { SkillGlyph, isSkillGlyphKey } from "@/components/icons/SkillGlyphs";
import { TOOLS } from "@/content/tools";
import ToolIcon from "@/components/icons/ToolIcon";

function SkillIcon({ iconKey }: { iconKey: string }) {
  const tool = TOOLS[iconKey];
  if (tool) return <ToolIcon tool={tool} />;
  if (isSkillGlyphKey(iconKey)) return <SkillGlyph glyphKey={iconKey} />;
  return null;
}

export default function SkillsPanel() {
  return (
    <section className="animate-rise">
      <h1 className="mb-8 text-balance font-fraunces text-[clamp(1.5rem,3vw,1.9rem)] font-semibold">
        Skills
      </h1>
      <div className="grid grid-cols-2 gap-[18px] max-[560px]:grid-cols-1">
        {skillCategories.map((category) => (
          <div
            className="rounded-[10px] border border-border bg-paper-raised p-5"
            key={category.title}
          >
            <h3 className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-steel">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  className="chip-bg inline-flex items-center gap-1.5 rounded-md py-1.5 pl-2 pr-3 text-[0.83rem] [&_.skill-glyph]:h-[15px] [&_.skill-glyph]:w-[15px] [&_.skill-glyph]:shrink-0 [&_.skill-glyph]:bg-steel [&_img]:h-[15px] [&_img]:w-[15px] [&_img]:shrink-0 [&_svg]:h-[15px] [&_svg]:w-[15px] [&_svg]:shrink-0 [&_svg]:text-steel"
                  key={skill.label}
                >
                  <SkillIcon iconKey={skill.icon} />
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
