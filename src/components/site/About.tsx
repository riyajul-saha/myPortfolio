import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Code2,
  Globe,
  GraduationCap,
  HeartHandshake,
  Layers,
  Mail,
  Server,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { aboutData, profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const domainIcons = {
  web: Globe,
  mobile: Smartphone,
  backend: Server,
  ai: Brain,
};

const highlightIcons = {
  ecommerce: ShoppingBag,
  operations: Smartphone,
  ai: Brain,
  ngo: HeartHandshake,
};

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20 overflow-hidden"
    >
      {/* Decorative ambient background glows contained so they do not cause horizontal overflow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-primary/15 blur-[130px]" />
        <div className="absolute -right-20 bottom-12 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <SectionHeading
        id="about-heading"
        label={aboutData.heading}
        title="Building practical digital products from idea to production"
        subtitle="Computer Science student & developer bridging intuitive user interfaces with robust backend architectures."
      />

      <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-start">
        {/* Main Narrative Card - 7 columns on lg */}
        <Reveal className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-5 sm:p-7 md:p-9 backdrop-blur-md">
            {/* Top decorative badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-primary">
                <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Computer Science Student &amp; Developer
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {profile.status}
              </span>
            </div>

            {/* Narrative Paragraph 1 */}
            <div className="mt-5 sm:mt-6">
              <p className="text-base sm:text-lg md:text-xl font-medium leading-snug text-foreground">
                I'm <span className="accent-gradient-text font-bold">{profile.name}</span>, a
                Computer Science student and software developer focused on building practical
                digital products.
              </p>
            </div>

            {/* Narrative Paragraph 2 */}
            <p className="mt-4 sm:mt-5 text-sm leading-relaxed text-muted-foreground">
              {aboutData.paragraphs[1]}
            </p>

            {/* Domain Badges */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
              {aboutData.domains.map((d) => {
                const Icon = domainIcons[d.icon];
                return (
                  <div
                    key={d.label}
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-border bg-surface-2 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-surface hover:text-primary"
                  >
                    <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                    <span>{d.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Narrative Paragraph 3 */}
            <p className="mt-4 sm:mt-6 text-sm leading-relaxed text-muted-foreground">
              {aboutData.paragraphs[2]}
            </p>

            {/* Highlight Philosophy Box */}
            <div className="mt-5 sm:mt-7 rounded-xl sm:rounded-2xl border border-primary/20 bg-primary/[0.05] p-4 sm:p-5 backdrop-blur-sm">
              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                    Concept ➔ Architecture ➔ Integration ➔ Polish
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Connecting responsive user interfaces with resilient backend APIs, databases,
                    and intelligent models through continuous, hands-on iteration.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 pt-5 sm:pt-6 border-t border-border">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/85"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-border bg-surface-2 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                <span>Get in Touch</span>
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-border/60 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Tech Stack</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Column - Project Highlights & Core Pillars */}
        <div className="space-y-4 sm:space-y-6 lg:col-span-5">
          {/* Projects Referenced in Story */}
          <Reveal delay={120}>
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-4 sm:p-6 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-border pb-3 sm:pb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Referenced in My Story
                  </span>
                </div>
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                  4 Products
                </span>
              </div>

              <div className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
                {aboutData.highlights.map((h) => {
                  const Icon = highlightIcons[h.icon];
                  return (
                    <a
                      key={h.id}
                      href="#projects"
                      className="group block rounded-xl sm:rounded-2xl border border-border/70 bg-surface-2/60 p-3 sm:p-3.5 transition-all duration-300 hover:border-primary/50 hover:bg-surface hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2 sm:gap-3">
                        <div className="flex items-start gap-2.5 sm:gap-3">
                          <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-border bg-surface text-primary transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                {h.title}
                              </h3>
                            </div>
                            <p className="text-[10px] sm:text-[11px] font-medium text-primary/90 mt-0.5">
                              {h.project} • {h.type}
                            </p>
                            <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                              {h.description}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-muted-foreground/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary mt-1" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Core Pillars / Mindset */}
          <Reveal delay={200}>
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/80 p-4 sm:p-6 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Core Principles
              </h3>
              <ul className="mt-3 sm:mt-4 space-y-3 sm:space-y-3.5">
                {aboutData.pillars.map((p) => (
                  <li key={p.num} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-[10px] font-bold mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{p.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <Reveal delay={240}>
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-3.5 sm:grid-cols-4">
          {aboutData.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl sm:rounded-2xl border border-border bg-surface/60 p-3.5 sm:p-4 md:p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-surface"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight accent-gradient-text">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-foreground">{s.label}</div>
              <div className="mt-0.5 text-[10px] sm:text-[11px] text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
