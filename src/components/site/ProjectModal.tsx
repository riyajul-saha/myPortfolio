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
      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground whitespace-pre-line break-words [overflow-wrap:anywhere] min-w-0">
        {text}
      </p>
    );
  }

  return (
    <div className="mt-3 space-y-2 sm:space-y-2.5 min-w-0 w-full">
      {introLines.length > 0 ? (
        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground break-words [overflow-wrap:anywhere] min-w-0">
          {introLines.join(" ")}
        </p>
      ) : null}
      <ul className="space-y-1.5 sm:space-y-2 min-w-0 w-full">
        {bulletLines.map((bullet, idx) => {
          const colonIdx = bullet.indexOf(":");
          const hasLabel = colonIdx !== -1 && colonIdx < 50;
          return (
            <li
              key={idx}
              className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground min-w-0 w-full"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <div className="min-w-0 flex-1 break-words [overflow-wrap:anywhere]">
                {hasLabel ? (
                  <>
                    <strong className="font-semibold text-foreground">
                      {bullet.slice(0, colonIdx + 1)}
                    </strong>{" "}
                    <span>{bullet.slice(colonIdx + 1).trim()}</span>
                  </>
                ) : (
                  bullet
                )}
              </div>
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
    statusBadge = (badge ?? "").trim();
    statusDescription = rest.join("—").trim();
  } else if (isProduction) {
    statusBadge = "Production";
    statusDescription = statusRaw.trim();
  } else if (statusRaw) {
    statusBadge = statusRaw.startsWith("Active Development") ? "Active Development" : statusRaw;
    statusDescription = statusRaw;
  }

  return (
    /* Backdrop */
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
      className="fixed inset-0 z-[60] flex flex-col justify-end sm:justify-center sm:items-center bg-background/80 backdrop-blur-md overflow-hidden p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={[
          "relative flex flex-col",
          // Mobile: bottom sheet with safe max-height and smooth scroll
          "w-full max-h-[92dvh] rounded-t-3xl",
          // SM+: centred dialog with rounded corners all around
          "sm:w-[calc(100%-2rem)] sm:max-w-2xl sm:max-h-[88vh] sm:rounded-3xl sm:mx-auto sm:mb-0",
          // MD+: wider
          "md:max-w-3xl lg:max-w-4xl",
          "border-t sm:border border-border bg-surface shadow-2xl overflow-hidden min-w-0",
        ].join(" ")}
      >
        {/* Mobile drag handle */}
        <div
          className="flex justify-center pt-2.5 pb-1 sm:hidden bg-surface shrink-0 cursor-pointer"
          onClick={onClose}
          aria-label="Tap to close"
        >
          <span className="h-1.5 w-12 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/50 transition-colors" />
        </div>

        {/* Sticky header with title context and large close touch target */}
        <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between gap-3 border-b border-border bg-surface/95 px-4 py-3 sm:px-6 sm:py-3.5 backdrop-blur-md w-full min-w-0">
          <div className="min-w-0 flex-1 mr-2">
            <h3 className="text-sm sm:text-base font-bold text-foreground truncate leading-tight">
              {project.name}
            </h3>
            <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
              <span className="rounded-full border border-border bg-surface-2 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-primary shrink-0">
                {project.type}
              </span>
              {statusBadge ? (
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium shrink-0 ${
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
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 text-foreground transition-all hover:bg-surface hover:text-primary active:scale-95"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 w-full min-w-0 max-w-full pb-8 [-webkit-overflow-scrolling:touch]">
          {/* Hero image + title */}
          <div className="w-full min-w-0">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-background w-full">
              <img
                src={project.image}
                alt={`${project.name} detailed project preview`}
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                className="w-full max-w-full object-cover object-top block aspect-[16/9] sm:aspect-[16/8] max-h-[220px] sm:max-h-[320px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
              />
            </div>

            <div className="mt-4 sm:mt-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between min-w-0 w-full">
              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground leading-tight break-words [overflow-wrap:anywhere]">
                  {project.name}
                </h2>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-primary break-words [overflow-wrap:anywhere]">
                  {project.category}
                </p>
              </div>
              <div className="w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
                <ProjectLinks project={project} size="md" className="w-full sm:w-auto" />
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="rounded-xl sm:rounded-2xl border border-primary/20 bg-primary/[0.04] p-3.5 sm:p-5 md:p-6 backdrop-blur-sm w-full min-w-0 overflow-hidden">
            <div className="flex items-center gap-2 text-primary font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span>Overview</span>
            </div>
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-foreground/90 break-words [overflow-wrap:anywhere] min-w-0">
              {project.overview || project.longDescription}
            </p>
          </div>

          {/* Rich case study fields */}
          {hasCaseStudy ? (
            <>
              {/* Problem & Contribution */}
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 w-full min-w-0">
                {project.problem ? (
                  <div className="rounded-xl sm:rounded-2xl border border-border bg-surface-2/60 p-3.5 sm:p-5 w-full min-w-0 overflow-hidden">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
                      <AlertCircle className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span>The Problem</span>
                    </div>
                    <FormattedText text={project.problem} />
                  </div>
                ) : null}

                {project.contribution ? (
                  <div className="rounded-xl sm:rounded-2xl border border-border bg-surface-2/60 p-3.5 sm:p-5 w-full min-w-0 overflow-hidden">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
                      <UserCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>My Contribution</span>
                    </div>
                    <FormattedText text={project.contribution} />
                  </div>
                ) : null}
              </div>

              {/* Technical Implementation */}
              {project.technicalImplementation ? (
                <div className="rounded-xl sm:rounded-2xl border border-border bg-surface-2/60 p-3.5 sm:p-5 w-full min-w-0 overflow-hidden">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
                    <Cpu className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Technical Implementation</span>
                  </div>
                  <FormattedText text={project.technicalImplementation} />

                  <div className="mt-4 pt-3 border-t border-border/80 min-w-0 w-full">
                    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Technologies &amp; Tools
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-1.5 sm:gap-2 min-w-0 w-full">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-lg border border-border bg-surface px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium text-foreground shrink-0"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}

              {/* Key Features */}
              <div className="w-full min-w-0">
                <div className="flex items-center gap-2 text-foreground font-semibold text-[11px] sm:text-xs uppercase tracking-wider mb-2.5 sm:mb-3">
                  <Layers className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Key Features</span>
                </div>
                <ul className="grid gap-1.5 sm:gap-2 grid-cols-1 sm:grid-cols-2 w-full min-w-0">
                  {project.features.map((f) => {
                    const colonIndex = f.indexOf(":");
                    const hasPrefix = colonIndex !== -1 && colonIndex < 40;
                    const label = hasPrefix ? f.slice(0, colonIndex + 1) : "";
                    const rest = hasPrefix ? f.slice(colonIndex + 1) : f;
                    return (
                      <li
                        key={f}
                        className="flex items-start gap-2 sm:gap-2.5 rounded-xl border border-border/70 bg-surface-2/50 p-2.5 sm:p-3 w-full min-w-0 overflow-hidden"
                      >
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary mt-0.5">
                          <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                        </span>
                        <div className="text-xs sm:text-sm leading-relaxed text-foreground/90 min-w-0 flex-1 break-words [overflow-wrap:anywhere]">
                          {hasPrefix ? (
                            <>
                              <strong className="font-semibold text-foreground">{label}</strong>{" "}
                              <span className="text-muted-foreground">{rest.trim()}</span>
                            </>
                          ) : (
                            f
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              {project.challengesAndSolutions ? (
                <div className="rounded-xl sm:rounded-2xl border border-border bg-surface-2/60 p-3.5 sm:p-5 w-full min-w-0 overflow-hidden">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
                    <Wrench className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>Challenges &amp; Solutions</span>
                  </div>
                  <FormattedText text={project.challengesAndSolutions} />
                </div>
              ) : null}

              {/* Current Status */}
              {project.currentStatus ? (
                <div
                  className={`rounded-xl sm:rounded-2xl border p-3.5 sm:p-5 w-full min-w-0 overflow-hidden ${
                    isProduction
                      ? "border-emerald-500/25 bg-emerald-500/[0.05]"
                      : "border-sky-500/25 bg-sky-500/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap min-w-0">
                    <div
                      className={`flex items-center gap-1.5 sm:gap-2 font-semibold text-[11px] sm:text-xs uppercase tracking-wider ${
                        isProduction ? "text-emerald-400" : "text-sky-400"
                      }`}
                    >
                      <Activity className="h-3.5 w-3.5 shrink-0" />
                      <span>Current Status</span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold shrink-0 ${
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

                  <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground break-words [overflow-wrap:anywhere] min-w-0">
                    {statusDescription || statusRaw}
                  </p>
                </div>
              ) : null}
            </>
          ) : (
            /* Fallback: standard project without full case study */
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 w-full min-w-0">
              <div className="min-w-0">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Technologies
                </h3>
                <ul className="mt-2 sm:mt-2.5 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-surface-2 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Key Features
                </h3>
                <ul className="mt-2 sm:mt-2.5 space-y-1.5 sm:space-y-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs sm:text-sm break-words [overflow-wrap:anywhere] min-w-0"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="text-muted-foreground min-w-0 flex-1">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Bottom actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 border-t border-border w-full min-w-0">
            <ProjectLinks project={project} size="md" className="w-full sm:w-auto" />
            <button
              type="button"
              onClick={onClose}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-border bg-surface-2 px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-muted-foreground transition-all hover:bg-surface hover:text-foreground active:scale-[0.98]"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
