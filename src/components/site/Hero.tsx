import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const portrait = "/assets/profile.webp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div className="dot-field pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {profile.role}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              I build modern web & mobile applications with{" "}
              <span className="accent-gradient-text">clean UI</span> and scalable systems.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.bio}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex items-center gap-5">
              <div className="flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <span className="h-4 w-px bg-border" />
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {profile.status}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="justify-self-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.2rem] bg-primary/25 blur-3xl"
            />
            <figure className="relative w-[280px] overflow-hidden rounded-3xl border border-border bg-surface p-2 sm:w-[340px]">
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width={912}
                height={1120}
                className="h-[340px] w-full rounded-2xl object-cover object-top sm:h-[420px]"
              />
              <figcaption className="flex items-center justify-between px-3 py-3">
                <span className="text-sm font-semibold">{profile.name}</span>
                <span className="text-xs text-muted-foreground">Software Engineer</span>
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
