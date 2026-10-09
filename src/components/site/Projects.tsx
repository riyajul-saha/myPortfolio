import { useState } from "react";
import { projectFilters, projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectModal } from "./ProjectModal";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = filter === "All" ? rest : rest.filter((p) => p.type === filter);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20 overflow-x-clip"
    >
      <SectionHeading
        label="Proof"
        title="Selected Projects"
        subtitle="A collection of products, experiments and applications I've built."
      />

      {/* Featured project */}
      {featured ? (
        <Reveal className="mt-10 sm:mt-12">
          <article className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <button
                type="button"
                onClick={() => setSelected(featured)}
                className="group block overflow-hidden text-left"
                aria-label={`Open details for ${featured.name}`}
              >
                <img
                  src={featured.image}
                  alt={`${featured.name} interface preview`}
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </button>

              <div className="flex flex-col justify-center gap-3 sm:gap-4 p-5 sm:p-7 md:p-9">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Featured
                  </span>
                  <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {featured.type}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{featured.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {featured.category}
                  </p>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                  {featured.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-surface-2 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-1 sm:mt-2 flex flex-wrap items-center gap-2">
                  <ProjectLinks project={featured} />
                  <button
                    type="button"
                    onClick={() => setSelected(featured)}
                    className="rounded-xl px-3 py-2 sm:py-2.5 text-xs font-semibold text-primary transition-colors hover:text-foreground"
                  >
                    Case details
                  </button>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      ) : null}

      {/* Filter tabs */}
      <Reveal className="mt-8 sm:mt-12">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Project grid */}
      <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface lift-on-hover">
              <button
                type="button"
                onClick={() => setSelected(p)}
                className="group block overflow-hidden text-left"
                aria-label={`Open details for ${p.name}`}
              >
                <img
                  src={p.image}
                  alt={`${p.name} interface preview`}
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </button>

              <div className="flex flex-1 flex-col gap-2.5 sm:gap-3 p-4 sm:p-6">
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{p.name}</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">{p.category}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-surface-2 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {p.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-surface-2 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2 sm:pt-3">
                  <ProjectLinks project={p} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">No projects in this category yet.</p>
      ) : null}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
