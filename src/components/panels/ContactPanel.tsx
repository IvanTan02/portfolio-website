import { contact } from "@/content/contact";
import { profile } from "@/content/profile";

const btnBase =
  "inline-block rounded-lg border border-border-strong px-[18px] py-2.5 font-mono text-[0.83rem] text-ink transition-all";

export default function ContactPanel() {
  return (
    <section className="animate-rise">
      <h1 className="mb-8 font-fraunces text-[clamp(1.5rem,3vw,1.9rem)] font-semibold text-balance">
        {contact.heading}
      </h1>
      <p className="mb-[30px] max-w-[52ch] text-[1.02rem] leading-[1.6] text-muted">
        {contact.lede}
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          className={`${btnBase} border-ink bg-ink text-paper hover:border-signal hover:bg-signal`}
          href={`mailto:${profile.email}`}
        >
          Email me
        </a>
        <a
          className={`${btnBase} hover:border-steel hover:text-steel`}
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
        <a
          className={`${btnBase} hover:border-steel hover:text-steel`}
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className={`${btnBase} hover:border-steel hover:text-steel`}
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
