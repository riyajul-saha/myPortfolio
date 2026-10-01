import { useState } from "react";
import { projectFilters, projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectModal } from "./ProjectModal";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  const [filter, setFilter] =
    useState<(typeof projectFilters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible =
    filter === "All" ? rest : rest.filter((p) => p.type === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        label="Proof"
        title="Selected Projects"
        subtitle="A collection of products, experiments and applications I've built."
      />

      {featured ? (
        <Reveal className="mt-12">
          <article className="overflow-hidden rounded-3xl border border-border bg-surface">
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

              <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Featured
                  </span>
                  <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {featured.type}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {featured.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {featured.category}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <ProjectLinks project={featured} />
                  <button
                    type="button"
                    onClick={() => setSelected(featured)}
                    className="rounded-xl px-3 py-2.5 text-xs font-semibold text-primary transition-colors hover:text-foreground"
                  >
                    Case details
                  </button>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      ) : null}

      <Reveal className="mt-12 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-surface text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface lift-on-hover">
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

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {p.category}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {p.type}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-3">
                  <ProjectLinks project={p} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      ) : null}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
