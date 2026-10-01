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
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        label="What I Do"
        title="Capabilities"
        subtitle="Four areas I work across, from interface to infrastructure."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
        {capabilities.map((c, i) => {
          const Icon = icons[c.icon];
          return (
            <Reveal as="li" key={c.index} delay={i * 70}>
              <div className="group h-full bg-background p-7 transition-colors hover:bg-surface">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface text-primary transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                    {c.index}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
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
