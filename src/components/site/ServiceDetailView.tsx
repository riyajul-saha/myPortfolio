import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  ChevronDown,
  Clock,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe,
  Layers,
  Mail,
  Network,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
  Wrench,
} from "lucide-react";
import type { ServiceData, ServiceSlug } from "@/data/services";
import { getAllServices } from "@/data/services";
import { profile } from "@/data/portfolio";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

const iconMap = {
  code: Code2,
  mobile: Smartphone,
  database: Database,
  api: Network,
  cloud: Cloud,
  bot: Bot,
  brain: Brain,
  globe: Globe,
  shield: ShieldCheck,
  workflow: Workflow,
};

export function ServiceDetailView({ service }: { service: ServiceData }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const allServices = getAllServices();
  const otherServices = allServices.filter((s) => s.slug !== service.slug);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip relative">
      {/* Top ambient glow & subtle grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[28rem] w-[42rem] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute top-[35%] right-[-10%] h-[24rem] w-[30rem] rounded-full bg-primary/10 blur-[140px]" />
        <div className="dot-field absolute inset-0 opacity-60" />
      </div>

      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav
          aria-label="Service Navigation"
          className="mx-auto flex h-14 sm:h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {service.shortTitle}
            </span>
            <Link
              to="/"
              className="text-sm sm:text-base font-extrabold tracking-tight text-foreground"
            >
              {profile.initials}
            </Link>
          </div>
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 space-y-16 sm:space-y-24">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: Real Service and Need of Client (H1) + Introduction */}
        {/* ========================================================================= */}
        <section id="service-overview" aria-labelledby="service-h1" className="space-y-8">
          <Reveal>
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                {service.badge}
              </span>
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                Verified Freelance &amp; Custom Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for New Projects
              </span>
            </div>

            {/* H1: Real Service and Need of Client */}
            <h1
              id="service-h1"
              className="mt-5 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
            >
              {service.h1}
            </h1>

            {/* H1 Subtitle */}
            <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-3xl">
              {service.h1Subtitle}
            </p>

            {/* Quick Hero Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact-cta"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2"
              >
                <span>View Case Studies</span>
              </a>
            </div>
          </Reveal>

          {/* Introduction Card: Strictly 150-200 words with targeted keywords */}
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-primary/20 bg-gradient-to-br from-surface/90 via-surface/60 to-primary/[0.04] p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3">
                <Target className="h-4 w-4" />
                <span>Executive Overview &amp; Client Solution</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/90 font-normal">
                {service.introduction}
              </p>
              <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  Independent Senior Developer | Direct 1-on-1 Collaboration
                </span>
                <span className="font-mono text-[11px] text-muted-foreground/70">
                  {service.seo.keywords.length} Target SEO Keywords Integrated
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ========================================================================= */}
        {/* 2. H2: Services I Offer */}
        {/* ========================================================================= */}
        <section
          id="services-offered"
          aria-labelledby="services-offered-heading"
          className="space-y-8"
        >
          <Reveal>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest">
              <Layers className="h-4 w-4" />
              <span>Core Capabilities</span>
            </div>
            <h2
              id="services-offered-heading"
              className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            >
              {service.servicesIOffer.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
              {service.servicesIOffer.subheading}
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {service.servicesIOffer.services.map((offering, idx) => {
              const IconComponent = iconMap[offering.icon] || Code2;
              return (
                <Reveal key={offering.title} delay={idx * 60}>
                  <div className="group flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-6 sm:p-7 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-surface hover:shadow-lg">
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-105">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                            {offering.title}
                          </h3>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="mt-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {offering.summary}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="mt-4 pt-3.5 border-t border-border/50">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2.5">
                          What You Receive
                        </p>
                        <ul className="space-y-2">
                          {offering.deliverables.map((deliv, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2.5 text-xs text-foreground/85"
                            >
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="mt-5 pt-3.5 border-t border-border/50 flex flex-wrap gap-1.5">
                      {offering.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-border/80 bg-surface-2 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. H2: Problems I Solve / Use Cases */}
        {/* ========================================================================= */}
        <section
          id="problems-solved"
          aria-labelledby="problems-solved-heading"
          className="space-y-8"
        >
          <Reveal>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest">
              <Target className="h-4 w-4" />
              <span>Real-World Business Impact</span>
            </div>
            <h2
              id="problems-solved-heading"
              className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            >
              {service.problemsISolve.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
              {service.problemsISolve.subheading}
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {service.problemsISolve.cases.map((c, idx) => (
              <Reveal key={c.problemTitle} delay={idx * 70}>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md border border-border bg-surface-2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {c.targetAudience}
                      </span>
                    </div>

                    {/* Problem Title */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {c.problemTitle}
                    </h3>

                    {/* The Pain Point */}
                    <div className="rounded-xl border border-rose-500/20 bg-rose-500/[0.04] p-3.5 text-xs sm:text-sm">
                      <span className="font-semibold text-rose-400 block mb-1">
                        Client Pain Point:
                      </span>
                      <p className="text-muted-foreground leading-relaxed">{c.clientPainPoint}</p>
                    </div>

                    {/* The Solution */}
                    <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5 text-xs sm:text-sm">
                      <span className="font-semibold text-primary block mb-1">
                        Solution Delivered:
                      </span>
                      <p className="text-foreground/90 leading-relaxed">{c.solutionProvided}</p>
                    </div>
                  </div>

                  {/* Measurable Business Outcome */}
                  <div className="mt-4 pt-3.5 border-t border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Business Outcome:
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-foreground">
                      {c.businessOutcome}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. H2: My Process & Technologies */}
        {/* ========================================================================= */}
        <section id="process-and-tech" aria-labelledby="process-heading" className="space-y-10">
          <Reveal>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest">
              <Cpu className="h-4 w-4" />
              <span>Engineering Methodology</span>
            </div>
            <h2
              id="process-heading"
              className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            >
              {service.processAndTech.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
              {service.processAndTech.subheading}
            </p>
          </Reveal>

          {/* 5-Phase Roadmap */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Phase-by-Phase Roadmap
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.processAndTech.phases.map((phase, pIdx) => (
                <Reveal key={phase.step} delay={pIdx * 50}>
                  <div className="relative h-full flex flex-col justify-between rounded-2xl border border-border bg-surface/80 p-5 backdrop-blur-md transition-all hover:border-primary/40">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-primary">
                          {phase.step}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-2 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {phase.timeline}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground">
                        {phase.phaseTitle}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/50">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                        Phase Deliverables
                      </p>
                      <ul className="space-y-1.5">
                        {phase.deliverables.map((item, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2 text-[11px] text-foreground/85"
                          >
                            <span className="text-primary font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Technologies Stack Matrix */}
          <Reveal delay={80}>
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    Technologies, Frameworks &amp; Tooling
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground">
                  Industry-standard, production-proven tools
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {service.processAndTech.techStack.map((cat) => (
                  <div key={cat.category} className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                      {cat.category}
                    </h4>
                    <div className="space-y-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-surface-2/60 px-3.5 py-2 text-xs"
                        >
                          <div>
                            <span className="font-semibold text-foreground">{skill.name}</span>
                            <span className="text-muted-foreground text-[11px] block">
                              {skill.purpose}
                            </span>
                          </div>
                          <span className="shrink-0 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ========================================================================= */}
        {/* 5. H2: Relevant Projects / Case Studies */}
        {/* ========================================================================= */}
        <section id="case-studies" aria-labelledby="case-studies-heading" className="space-y-8">
          <Reveal>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest">
              <Rocket className="h-4 w-4" />
              <span>Proven Results</span>
            </div>
            <h2
              id="case-studies-heading"
              className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            >
              {service.relevantProjects.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
              {service.relevantProjects.subheading}
            </p>
          </Reveal>

          <div className="space-y-6">
            {service.relevantProjects.caseStudies.map((study, idx) => (
              <Reveal key={study.projectSlug} delay={idx * 80}>
                <article className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface/90 p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all hover:border-primary/40">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {study.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      {study.liveUrl ? (
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                      {study.githubUrl ? (
                        <a
                          href={study.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-surface transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Code</span>
                        </a>
                      ) : null}
                      <Link
                        to={`/projects/${study.projectSlug}`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <span>Full Project Deep-Dive</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                    {study.projectName} — {study.headline}
                  </h3>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Client Context &amp; Challenge
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {study.coreChallenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Technical Solution
                        </h4>
                        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                          {study.technicalSolution}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border/80 bg-surface-2/60 p-4 sm:p-5 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                          Measurable Outcomes Shipped
                        </h4>
                        <ul className="space-y-2">
                          {study.keyOutcomes.map((outcome, oIdx) => (
                            <li
                              key={oIdx}
                              className="flex items-start gap-2.5 text-xs text-foreground/90"
                            >
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                          Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {study.technologiesUsed.map((t) => (
                            <span
                              key={t}
                              className="rounded border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. H2: Frequently Asked Questions (FAQ) */}
        {/* ========================================================================= */}
        <section id="faq" aria-labelledby="faq-heading" className="space-y-8">
          <Reveal>
            <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest">
              <Sparkles className="h-4 w-4" />
              <span>Got Questions?</span>
            </div>
            <h2
              id="faq-heading"
              className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
            >
              {service.faqs.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
              {service.faqs.subheading}
            </p>
          </Reveal>

          <div className="space-y-3">
            {service.faqs.items.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <Reveal key={faq.question} delay={idx * 40}>
                  <div className="rounded-2xl border border-border bg-surface/80 backdrop-blur-md overflow-hidden transition-colors hover:border-primary/40">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-foreground">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {isOpen ? (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                        <p className="pt-3.5">{faq.answer}</p>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. CTA: Discuss Your Project / Contact Me */}
        {/* ========================================================================= */}
        <section id="contact-cta" aria-labelledby="cta-heading">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface via-surface/90 to-primary/10 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
              />

              <div className="relative max-w-3xl space-y-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <Mail className="h-3.5 w-3.5" />
                  {service.cta.eyebrow}
                </span>

                <h2
                  id="cta-heading"
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight"
                >
                  {service.cta.heading}
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.cta.description}
                </p>

                {/* Guarantees Matrix */}
                <div className="grid gap-2.5 sm:grid-cols-2 pt-2">
                  {service.cta.guarantees.map((g, gIdx) => (
                    <div
                      key={gIdx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{g}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3.5">
                  <a
                    href={`mailto:${service.cta.contactEmail}?subject=Project%20Inquiry%20-%20${encodeURIComponent(
                      service.shortTitle,
                    )}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98]"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{service.cta.primaryButtonLabel}</span>
                  </a>

                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2"
                  >
                    <span>{service.cta.secondaryButtonLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <span className="text-xs text-muted-foreground font-mono">
                    ⚡ {service.cta.responseTime}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ========================================================================= */}
        {/* 8. Explore Other Services Grid */}
        {/* ========================================================================= */}
        <section
          aria-labelledby="other-services-heading"
          className="space-y-6 pt-6 border-t border-border/60"
        >
          <Reveal>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 id="other-services-heading" className="text-lg font-bold text-foreground">
                  Explore Other Service Offerings
                </h3>
                <p className="text-xs text-muted-foreground">
                  Tailored engineering across web, mobile, and artificial intelligence.
                </p>
              </div>
              <Link
                to="/"
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Back to All Projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {otherServices.map((other) => (
              <Reveal key={other.slug} delay={60}>
                <Link
                  to={`/services/${other.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-surface hover:shadow-md"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
                      {other.badge}
                    </span>
                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {other.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                      {other.h1Subtitle}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>View Service Breakdown</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
