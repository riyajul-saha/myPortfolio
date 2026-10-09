import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import type { Project } from "@/data/portfolio";
import { profile } from "@/data/portfolio";
import { ProjectLinks } from "./ProjectLinks";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

function FormattedNarrative({ text }: { text?: string }) {
  if (!text) return null;
  const paragraphs = text.split("\n\n");
  return (
    <div className="space-y-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export function ProjectDetailView({ project }: { project: Project }) {
  const isProduction = project.currentStatus?.toLowerCase().includes("production") ?? false;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip relative">
      {/* Top ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-primary/20 blur-[150px]" />
        <div className="dot-field absolute inset-0 opacity-60" />
      </div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav
          aria-label="Project Navigation"
          className="mx-auto flex h-14 sm:h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>
          <Link
            to="/"
            className="text-sm sm:text-base font-extrabold tracking-tight text-foreground"
          >
            {profile.initials}
          </Link>
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section 1: Hero & Overview */}
        <section
          id="project-overview"
          aria-labelledby="project-title"
          className="space-y-6 sm:space-y-8"
        >
          <Reveal>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {project.type}
              </span>
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                {project.category}
              </span>
              {project.currentStatus ? (
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                  {isProduction ? "🟢 " : "🟡 "}
                  {project.currentStatus.split("—")[0]?.trim()}
                </span>
              ) : null}
            </div>

            <h1
              id="project-title"
              className="mt-4 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              {project.name}
            </h1>

            <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              {project.longDescription || project.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ProjectLinks project={project} size="md" />
            </div>
          </Reveal>

          {/* Screenshot / Banner */}
          <Reveal delay={100}>
            <figure className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface shadow-2xl">
              <img
                src={project.image}
                alt={`${project.name} — ${project.category} complete showcase preview`}
                width={1600}
                height={1000}
                fetchPriority="high"
                decoding="async"
                className="aspect-[16/10] w-full object-cover object-top"
              />
              <figcaption className="sr-only">
                {project.name} interface and user workflows
              </figcaption>
            </figure>
          </Reveal>
        </section>

        {/* Section 2: Problem & Solution */}
        <section
          id="problem-solution"
          aria-labelledby="problem-solution-heading"
          className="space-y-6"
        >
          <Reveal>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest">
              <Target className="h-4 w-4" />
              <span>Core Context</span>
            </div>
            <h2
              id="problem-solution-heading"
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Problem Statement &amp; Solution
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {project.problem ? (
              <Reveal delay={80}>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-5 sm:p-7 backdrop-blur-md">
                  <div className="flex items-center gap-2.5 text-foreground font-semibold text-sm sm:text-base mb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-destructive/15 text-destructive font-bold text-xs">
                      !
                    </span>
                    <h3>The Problem</h3>
                  </div>
                  <FormattedNarrative text={project.problem} />
                </div>
              </Reveal>
            ) : null}

            {project.overview || project.technicalImplementation ? (
              <Reveal delay={140}>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-primary/20 bg-primary/[0.04] p-5 sm:p-7 backdrop-blur-md">
                  <div className="flex items-center gap-2.5 text-foreground font-semibold text-sm sm:text-base mb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 text-primary font-bold text-xs">
                      ✓
                    </span>
                    <h3>The Solution</h3>
                  </div>
                  <FormattedNarrative text={project.overview || project.description} />
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>

        {/* Section 3: Technical Implementation & Architecture */}
        <section id="tech-stack" aria-labelledby="tech-stack-heading" className="space-y-6">
          <Reveal>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest">
              <Cpu className="h-4 w-4" />
              <span>Architecture</span>
            </div>
            <h2
              id="tech-stack-heading"
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Technical Implementation &amp; Technologies
            </h2>
          </Reveal>

          {/* Tech Badges */}
          <Reveal delay={80}>
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-5 sm:p-7 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Technology Stack &amp; Tools
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-xl border border-border bg-surface-2 px-3 py-1.5 text-xs sm:text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Implementation Details */}
          {project.technicalImplementation ? (
            <Reveal delay={120}>
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-5 sm:p-7 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="h-4 w-4 text-primary" />
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    Engineering Details &amp; System Architecture
                  </h3>
                </div>
                <FormattedNarrative text={project.technicalImplementation} />
              </div>
            </Reveal>
          ) : null}

          {/* Contribution & Challenges */}
          <div className="grid gap-6 md:grid-cols-2">
            {project.contribution ? (
              <Reveal delay={160}>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-5 sm:p-7 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      My Contributions
                    </h3>
                  </div>
                  <FormattedNarrative text={project.contribution} />
                </div>
              </Reveal>
            ) : null}

            {project.challengesAndSolutions ? (
              <Reveal delay={200}>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-5 sm:p-7 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="h-4 w-4 text-primary" />
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      Engineering Challenges &amp; Solutions
                    </h3>
                  </div>
                  <FormattedNarrative text={project.challengesAndSolutions} />
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>

        {/* Section 4: Key Features & Results */}
        <section
          id="features-results"
          aria-labelledby="features-results-heading"
          className="space-y-6"
        >
          <Reveal>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest">
              <Layers className="h-4 w-4" />
              <span>Deliverables</span>
            </div>
            <h2
              id="features-results-heading"
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Key Features &amp; Deliverables
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-5 sm:p-7 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Core Capabilities Shipped
              </h3>
              <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {project.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border/70 bg-surface-2/60 p-3.5 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Bottom Navigation CTA */}
        <Reveal delay={100}>
          <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Interested in this project or looking to collaborate?
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Check out other flagship projects or get in touch directly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                <span>All Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
