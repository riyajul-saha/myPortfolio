import { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  const first = skillCategories[0]!;
  const [active, setActive] = useState(first.category);
  const current = skillCategories.find((c) => c.category === active) ?? first;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20 overflow-x-clip">
      <SectionHeading
        label="Stack"
        title="Skills & Technologies"
        subtitle="Technologies I use to design, build and deploy digital products."
      />

      {/* Category filter tabs — scrollable on very narrow screens */}
      <Reveal className="mt-8 sm:mt-10">
        <div className="flex flex-wrap gap-2">
          {skillCategories.map((c) => (
            <button
              key={c.category}
              type="button"
              onClick={() => setActive(c.category)}
              aria-pressed={active === c.category}
              className={cn(
                "rounded-full border px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm transition-colors",
                active === c.category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground",
              )}
            >
              {c.category}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal
        key={current.category}
        className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-3 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      >
        {current.skills.map((s) => (
          <div
            key={s.name}
            tabIndex={0}
            className="group relative flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-border bg-surface px-3 py-3 sm:px-4 sm:py-4 lift-on-hover"
          >
            <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-border bg-surface-2 text-[10px] sm:text-xs font-bold text-primary transition-transform duration-300 group-hover:scale-110">
              {s.name.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-xs sm:text-sm font-medium truncate">{s.name}</span>

            {/* Tooltip — invisible until hovered to prevent mobile layout shifts */}
            <span
              role="tooltip"
              className="pointer-events-none absolute -top-2 left-1/2 z-20 w-max max-w-[14rem] sm:max-w-[16rem] -translate-x-1/2 -translate-y-full rounded-xl border border-border bg-surface-2 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs text-muted-foreground opacity-0 invisible shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible"
            >
              Used for: {s.usedFor.join(" • ")}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
