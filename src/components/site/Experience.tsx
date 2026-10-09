import { timeline } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20 overflow-x-clip">
      <SectionHeading
        label="Experience"
        title="Where I've worked and what I've shipped"
        subtitle="Internships, roles and build sprints from 2026."
      />

      <ol className="relative mt-10 sm:mt-12 grid gap-8 md:grid-cols-3">
        {/* Horizontal connector line — only on md+ */}
        <span
          aria-hidden
          className="absolute left-0 right-0 top-[11px] hidden h-px bg-border md:block"
        />
        {timeline.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 90} className="relative">
            <span
              aria-hidden
              className="mb-5 sm:mb-6 block h-[22px] w-[22px] rounded-full border border-border bg-background p-[6px]"
            >
              <span className="block h-full w-full rounded-full bg-primary" />
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-primary">
              {item.period}
            </span>
            <h3 className="mt-2 text-base sm:text-lg font-semibold">{item.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{item.org}</p>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
