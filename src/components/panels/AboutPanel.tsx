import { about } from "@/content/about";

export default function AboutPanel() {
  return (
    <section className="animate-rise">
      <h1 className="mb-8 text-balance font-fraunces text-[clamp(1.7rem,3vw,2.2rem)] font-semibold">
        {about.headingPrefix}
        <span className="text-signal">{about.name}</span>
        {about.headingSuffix}
      </h1>
      <div className="flex max-w-[62ch] flex-col items-center justify-center gap-10">
        {about.sections.map((section) => (
          <div className="flex flex-col gap-4" key={section.heading}>
            <h2 className="text-bold m-0 font-mono text-[1.6rem] font-semibold tracking-[0.08em]">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                className="m-0 mb-1 text-justify text-[1rem] leading-[1.7] text-muted"
                key={paragraph}
              >
                {renderBold(paragraph)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong className="font-semibold text-ink" key={i}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}
