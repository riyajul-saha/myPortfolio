import { Brain, Globe, Server, Smartphone } from "lucide-react";
import { capabilities } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const icons = {
  web: Globe,
  mobile: Smartphone,
  ai: Brain,
  backend: Server,
};

export function WhatIDo() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20 overflow-x-clip"
    >
      <SectionHeading
        id="capabilities-heading"
        label="What I Do"
        title="Capabilities"
        subtitle="Four areas I work across, from interface to infrastructure."
      />

      <ul className="mt-10 sm:mt-12 grid gap-px overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-border grid-cols-1 xs:grid-cols-2 sm:grid-cols-2">
        {capabilities.map((c, i) => {
          const Icon = icons[c.icon];
          return (
            <Reveal as="li" key={c.index} delay={i * 70}>
              <div className="group h-full bg-background p-5 sm:p-6 md:p-7 transition-colors hover:bg-surface">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-border bg-surface text-primary transition-transform group-hover:scale-105">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-muted-foreground">
                    {c.index}
                  </span>
                </div>
                <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold">{c.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
