import { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  const first = skillCategories[0]!;
  const [active, setActive] = useState(first.category);
  const current = skillCategories.find((c) => c.category === active) ?? first;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        label="Stack"
        title="Skills & Technologies"
        subtitle="Technologies I use to design, build and deploy digital products."
      />

      <Reveal className="mt-10 flex flex-wrap gap-2">
        {skillCategories.map((c) => (
          <button
            key={c.category}
            type="button"
            onClick={() => setActive(c.category)}
            aria-pressed={active === c.category}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              active === c.category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-surface text-muted-foreground hover:text-foreground",
            )}
          >
            {c.category}
          </button>
        ))}
      </Reveal>

      <Reveal
        key={current.category}
        className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {current.skills.map((s) => (
          <div
            key={s.name}
            tabIndex={0}
            className="group relative flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-4 lift-on-hover"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-xs font-bold text-primary transition-transform duration-300 group-hover:scale-110">
              {s.name.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-sm font-medium">{s.name}</span>

            <span
              role="tooltip"
              className="pointer-events-none absolute -top-3 left-1/2 z-20 w-max max-w-[16rem] -translate-x-1/2 -translate-y-full rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs text-muted-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              Used for: {s.usedFor.join(" • ")}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
