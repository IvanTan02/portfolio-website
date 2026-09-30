import { about } from "@/content/about";

export default function AboutPanel() {
  return (
    <section className="animate-rise">
      <h1 className="mb-8 font-fraunces text-[clamp(1.5rem,3vw,1.9rem)] font-semibold text-balance">
        {about.heading}
      </h1>
      <div className="flex max-w-[62ch] flex-col gap-4">
        {about.paragraphs.map((paragraph) => (
          <p className="m-0 text-[0.95rem] leading-[1.7] text-muted" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
