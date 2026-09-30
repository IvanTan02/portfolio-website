import { education } from "@/content/education";
import { EntityLogo } from "@/components/icons/EntityLogo";

export default function EducationPanel() {
  return (
    <section className="animate-rise">
      <h1 className="mb-8 font-fraunces text-[clamp(1.5rem,3vw,1.9rem)] font-semibold text-balance">
        Education
      </h1>
      <div className="flex flex-col gap-5">
        {education.map((entry) => (
          <div
            className="flex flex-wrap justify-between gap-4 border-b border-border pb-[18px] last:border-0 last:pb-0"
            key={entry.school}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] border border-border-strong bg-paper-raised [&_img]:h-5 [&_img]:w-5">
                <EntityLogo dir="education" logo={entry.logo} name={entry.school} />
              </span>
              <div>
                <p className="mb-1 text-[0.98rem] font-semibold">{entry.school}</p>
                <p className="m-0 text-[0.88rem] text-muted">{entry.detail}</p>
              </div>
            </div>
            <span className="whitespace-nowrap font-mono text-[0.75rem] text-muted">
              {entry.dateRange}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
