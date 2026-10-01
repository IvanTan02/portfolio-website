import { experience } from "@/content/experience";
import { EntityLogo } from "@/components/icons/EntityLogo";

export default function ExperiencePanel() {
  return (
    <section className="animate-rise">
      <h1 className="mb-8 text-balance font-fraunces text-[clamp(1.5rem,3vw,1.9rem)] font-semibold">
        Experience
      </h1>
      <div className="flex flex-col gap-11">
        {experience.map((entry) => (
          <div
            className="grid grid-cols-[130px_1fr] gap-6 max-[640px]:grid-cols-1 max-[640px]:gap-2"
            key={entry.org}
          >
            <div className="pt-0.5 font-mono text-[0.76rem] text-muted">{entry.dateRange}</div>
            <div className="timeline-dot relative border-l-2 border-border-strong pl-[22px]">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-border-strong bg-paper-raised [&_img]:h-5 [&_img]:w-5">
                  <EntityLogo dir="experience" logo={entry.logo} name={entry.org} />
                </span>
                <div>
                  <p className="mb-0.5 text-[1.06rem] font-semibold">{entry.role}</p>
                  <p className="m-0 text-[0.93rem] font-medium text-steel">{entry.org}</p>
                </div>
              </div>
              <ul className="mb-3.5 list-disc pl-[18px] text-[0.92rem] leading-[1.62] marker:text-muted">
                {entry.bullets.map((bullet) => (
                  <li className="mb-1.5" key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[0.7rem] ${
                      tag.accent ? "tag-accent" : "border-border-strong text-muted"
                    }`}
                    key={tag.label}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
