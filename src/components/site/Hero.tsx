import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const portrait = "/assets/profile.webp";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* Background ambient lighting and grid pattern */}
      <div className="dot-field pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-80 w-80 sm:h-[28rem] sm:w-[28rem] rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Mobile portrait — centered above text on mobile, hidden on lg+ */}
        <Reveal delay={120} className="flex justify-center mb-8 lg:hidden">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 to-violet-500/15 blur-2xl"
            />
            <figure className="relative w-[210px] xs:w-[250px] sm:w-[290px] overflow-hidden rounded-3xl border border-border/80 bg-surface/90 p-1.5 sm:p-2 backdrop-blur-md shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={portrait}
                  alt={`Portrait of ${profile.name}, Computer Science student and software developer`}
                  width={800}
                  height={1000}
                  fetchPriority="high"
                  decoding="async"
                  className="h-[250px] xs:h-[300px] sm:h-[350px] w-full object-cover object-top"
                />
                <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-md border border-border/80 px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm">
                  <Sparkles className="h-2.5 w-2.5 text-primary" /> Full Stack
                </div>
              </div>
              <figcaption className="flex items-center justify-between px-2.5 py-2.5 sm:px-3">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-foreground block">
                    {profile.name}
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    Software Developer
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                  CS Student
                </span>
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* Desktop: side-by-side layout */}
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            {/* Status badge pill */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>{profile.status}</span>
                <span className="text-primary/40">•</span>
                <span className="text-muted-foreground font-normal">West Bengal, India</span>
              </div>
            </Reveal>

            {/* Single H1 on page containing name & role, with stunning typography */}
            <Reveal delay={80}>
              <h1
                id="hero-title"
                className="mt-5 text-3xl xs:text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.14] tracking-tight text-foreground"
              >
                <span className="block text-sm sm:text-base lg:text-lg font-semibold text-primary mb-2.5 tracking-normal">
                  Hi, I'm {profile.name} —{" "}
                  <span className="text-foreground/90 font-medium">{profile.role}</span>
                </span>
                I build modern web &amp; mobile applications with{" "}
                <span className="accent-gradient-text">clean UI</span> and scalable systems.
              </h1>
            </Reveal>

            {/* Bio paragraph */}
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                {profile.bio}
              </p>
            </Reveal>

            {/* Quick Core Tech Pills */}
            <Reveal delay={180}>
              <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2 text-[11px] text-muted-foreground">
                {["React", "React Native", "Expo", "Node.js", "Flask", "Applied ML"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border/80 bg-surface-2/60 px-2.5 py-1 font-medium transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/85 hover:shadow-primary/30 active:scale-[0.98]"
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-all hover:bg-surface-2 hover:border-primary/30 active:scale-[0.98]"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>

            {/* Socials & Location strip */}
            <Reveal delay={260}>
              <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5 pt-5 border-t border-border/50">
                <div className="flex items-center gap-2.5">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/80 text-muted-foreground transition-all hover:border-primary/50 hover:bg-surface hover:text-primary active:scale-95"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/80 text-muted-foreground transition-all hover:border-primary/50 hover:bg-surface hover:text-primary active:scale-95"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Send Email"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/80 text-muted-foreground transition-all hover:border-primary/50 hover:bg-surface hover:text-primary active:scale-95"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
                <span className="h-4 w-px bg-border" />
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>West Bengal, India</span>
                </span>
              </div>
            </Reveal>
          </div>

          {/* Desktop Portrait Card — shown only on lg+ */}
          <Reveal delay={160} className="hidden lg:block justify-self-center">
            <div className="relative group">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.8rem] bg-gradient-to-tr from-primary/30 to-violet-500/20 blur-3xl transition-opacity group-hover:opacity-100"
              />
              <figure className="relative w-[290px] xl:w-[350px] overflow-hidden rounded-3xl border border-border/90 bg-surface/90 p-2 sm:p-2.5 backdrop-blur-xl shadow-2xl transition-all duration-300 group-hover:border-primary/40">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={portrait}
                    alt={`Portrait of ${profile.name}, Computer Science student and software developer`}
                    width={800}
                    height={1000}
                    fetchPriority="high"
                    decoding="async"
                    className="h-[350px] xl:h-[430px] w-full rounded-2xl object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 backdrop-blur-md border border-border/80 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-md">
                    <Sparkles className="h-3 w-3 text-primary" /> Full Stack &amp; AI
                  </div>
                </div>
                <figcaption className="flex items-center justify-between px-3.5 py-3 border-t border-border/60 bg-surface-2/40 mt-1 rounded-b-xl">
                  <div>
                    <span className="text-sm font-bold text-foreground block">{profile.name}</span>
                    <span className="text-xs text-muted-foreground">Computer Science Student</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                    Developer
                  </span>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
