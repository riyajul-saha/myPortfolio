import { useEffect } from "react";
import {
  Activity,
  AlertCircle,
  Check,
  Cpu,
  Layers,
  Sparkles,
  UserCheck,
  Wrench,
  X,
} from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectLinks } from "./ProjectLinks";

function FormattedText({ text }: { text: string }) {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const introLines: string[] = [];
  const bulletLines: string[] = [];

  for (const line of lines) {
    if (line.startsWith("• ") || line.startsWith("* ") || line.startsWith("- ")) {
      bulletLines.push(line.replace(/^[•*-]\s*/, ""));
    } else {
      introLines.push(line);
    }
  }

  if (bulletLines.length === 0) {
    return (
      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
        {text}
      </p>
    );
  }

  return (
    <div className="mt-3 space-y-3">
      {introLines.length > 0 ? (
        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {introLines.join(" ")}
        </p>
      ) : null}
      <ul className="space-y-2">
        {bulletLines.map((bullet, idx) => {
          const colonIdx = bullet.indexOf(":");
          const hasLabel = colonIdx !== -1 && colonIdx < 50;
          return (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                {hasLabel ? (
                  <>
                    <strong className="font-semibold text-foreground">
                      {bullet.slice(0, colonIdx + 1)}
                    </strong>{" "}
                    {bullet.slice(colonIdx + 1).trim()}
                  </>
                ) : (
                  bullet
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasCaseStudy = Boolean(
    project.overview ||
    project.problem ||
    project.contribution ||
    project.technicalImplementation ||
    project.challengesAndSolutions ||
    project.currentStatus,
  );

  const statusRaw = project.currentStatus ?? "";
  const isProduction = statusRaw.toLowerCase().includes("production");

  let statusBadge = "";
  let statusDescription = "";

  if (statusRaw.includes("—")) {
    const [badge, ...rest] = statusRaw.split("—");
    statusBadge = badge.trim();
    statusDescription = rest.join("—").trim();
  } else if (isProduction) {
    statusBadge = "Production";
    statusDescription = statusRaw.trim();
  } else if (statusRaw) {
    statusBadge = statusRaw.startsWith("Active Development") ? "Active Development" : statusRaw;
    statusDescription = statusRaw;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-3 sm:p-5 md:p-8 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl"
      >
        {/* Modal Sticky Header Bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-border bg-surface/95 px-5 py-4 backdrop-blur-sm sm:px-7">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
              {project.type}
            </span>
            {statusBadge ? (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                  isProduction
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-sky-500/30 bg-sky-500/10 text-sky-400"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isProduction ? "bg-emerald-400" : "bg-sky-400 animate-pulse"
                  }`}
                />
                {statusBadge}
              </span>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-2 text-foreground transition-colors hover:bg-surface hover:text-primary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 md:p-9 space-y-6 sm:space-y-8">
          {/* Hero Banner & Title */}
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
              <img
                src={project.image}
                alt={`${project.name} interface preview`}
                width={1600}
                height={1008}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover object-top sm:aspect-[21/9]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary sm:text-base">
                  {project.category}
                </p>
              </div>

              <div className="shrink-0">
                <ProjectLinks project={project} size="md" />
              </div>
            </div>
          </div>

          {/* Section: Overview */}
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5 sm:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>Overview</span>
            </div>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/90">
              {project.overview || project.longDescription}
            </p>
          </div>

          {/* If rich case study fields exist */}
          {hasCaseStudy ? (
            <>
              {/* Problem & My Contribution - 2 columns on PC */}
              <div className="grid gap-5 md:grid-cols-2">
                {project.problem ? (
                  <div className="rounded-2xl border border-border bg-surface-2/60 p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider">
                      <AlertCircle className="h-4 w-4 text-amber-400" />
                      <span>The Problem</span>
                    </div>
                    <FormattedText text={project.problem} />
                  </div>
                ) : null}

                {project.contribution ? (
                  <div className="rounded-2xl border border-border bg-surface-2/60 p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider">
                      <UserCheck className="h-4 w-4 text-primary" />
                      <span>My Contribution</span>
                    </div>
                    <FormattedText text={project.contribution} />
                  </div>
                ) : null}
              </div>

              {/* Technical Implementation */}
              {project.technicalImplementation ? (
                <div className="rounded-2xl border border-border bg-surface-2/60 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    <Cpu className="h-4 w-4 text-primary" />
                    <span>Technical Implementation</span>
                  </div>
                  <FormattedText text={project.technicalImplementation} />

                  <div className="mt-5 pt-4 border-t border-border/80">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Technologies & Tools
                    </h4>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}

              {/* Key Features */}
              <div>
                <div className="flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3.5">
                  <Layers className="h-4 w-4 text-primary" />
                  <span>Key Features</span>
                </div>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {project.features.map((f) => {
                    const colonIndex = f.indexOf(":");
                    const hasPrefix = colonIndex !== -1 && colonIndex < 40;
                    const label = hasPrefix ? f.slice(0, colonIndex + 1) : "";
                    const rest = hasPrefix ? f.slice(colonIndex + 1) : f;
                    return (
                      <li
                        key={f}
                        className="flex items-start gap-3 rounded-xl border border-border/70 bg-surface-2/50 p-3 sm:p-3.5"
                      >
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-xs sm:text-sm leading-relaxed text-foreground/90">
                          {hasPrefix ? (
                            <>
                              <strong className="font-semibold text-foreground">{label}</strong>{" "}
                              <span className="text-muted-foreground">{rest.trim()}</span>
                            </>
                          ) : (
                            f
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              {project.challengesAndSolutions ? (
                <div className="rounded-2xl border border-border bg-surface-2/60 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    <Wrench className="h-4 w-4 text-primary" />
                    <span>Challenges & Solutions</span>
                  </div>
                  <FormattedText text={project.challengesAndSolutions} />
                </div>
              ) : null}

              {/* Current Status */}
              {project.currentStatus ? (
                <div
                  className={`rounded-2xl border p-5 sm:p-6 ${
                    isProduction
                      ? "border-emerald-500/25 bg-emerald-500/[0.05]"
                      : "border-sky-500/25 bg-sky-500/[0.05]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div
                      className={`flex items-center gap-2 font-semibold text-xs sm:text-sm uppercase tracking-wider ${
                        isProduction ? "text-emerald-400" : "text-sky-400"
                      }`}
                    >
                      <Activity className="h-4 w-4" />
                      <span>Current Status</span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                        isProduction
                          ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-300"
                          : "border-sky-500/30 bg-sky-500/15 text-sky-300"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isProduction ? "bg-emerald-400" : "bg-sky-400 animate-pulse"
                        }`}
                      />
                      {statusBadge}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {statusDescription || statusRaw}
                  </p>
                </div>
              ) : null}
            </>
          ) : (
            /* Fallback layout for standard projects without full case study */
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Technologies
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Key Features
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Modal Bottom Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
            <ProjectLinks project={project} size="md" />

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-border bg-surface-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
