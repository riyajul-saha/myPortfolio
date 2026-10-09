import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const portrait = "/assets/profile.webp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36">
      <div className="dot-field pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Portrait — shown above text on mobile, hidden on lg+ */}
        <Reveal delay={160} className="flex justify-center mb-8 lg:hidden">
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-[2rem] bg-primary/25 blur-3xl" />
            <figure className="relative w-[200px] xs:w-[240px] sm:w-[280px] overflow-hidden rounded-3xl border border-border bg-surface p-1.5 sm:p-2">
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width={912}
                height={1120}
                className="h-[240px] xs:h-[290px] sm:h-[340px] w-full rounded-2xl object-cover object-top"
              />
              <figcaption className="flex items-center justify-between px-2 py-2 sm:px-3">
                <span className="text-xs sm:text-sm font-semibold">{profile.name}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  Software Engineer
                </span>
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* Desktop: side-by-side layout */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {profile.role}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-2xl xs:text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.15] tracking-tight">
                I build modern web &amp; mobile applications with{" "}
                <span className="accent-gradient-text">clean UI</span> and scalable systems.
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
                <div className="flex items-center gap-3 sm:gap-4">
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

          {/* Portrait — shown only on lg+ */}
          <Reveal delay={160} className="hidden lg:block justify-self-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.2rem] bg-primary/25 blur-3xl"
              />
              <figure className="relative w-[280px] xl:w-[340px] overflow-hidden rounded-3xl border border-border bg-surface p-2">
                <img
                  src={portrait}
                  alt={`Portrait of ${profile.name}`}
                  width={912}
                  height={1120}
                  className="h-[340px] xl:h-[420px] w-full rounded-2xl object-cover object-top"
                />
                <figcaption className="flex items-center justify-between px-3 py-3">
                  <span className="text-sm font-semibold">{profile.name}</span>
                  <span className="text-xs text-muted-foreground">Software Engineer</span>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
