import { projects } from "@/content/projects";

export default function ProjectsPanel() {
  return (
    <section className="animate-rise">
      <h1 className="mb-8 font-fraunces text-[clamp(1.5rem,3vw,1.9rem)] font-semibold text-balance">
        Projects
      </h1>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            className="grid gap-3 rounded-xl border border-border bg-paper-raised p-6"
            key={project.name}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="m-0 font-fraunces text-[1.1rem] font-semibold">{project.name}</h3>
              <span className="font-mono text-[0.73rem] text-muted">{project.dateRange}</span>
            </div>
            <p className="m-0 text-[0.91rem] leading-[1.6] text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  className="rounded-full border border-border-strong px-2.5 py-1 font-mono text-[0.7rem] text-muted"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
