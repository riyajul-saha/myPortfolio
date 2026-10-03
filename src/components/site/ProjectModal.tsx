import { useEffect } from "react";
import { Check, X } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectLinks } from "./ProjectLinks";

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-colors hover:bg-surface-2"
        >
          <X className="h-4 w-4" />
        </button>

        <img
          src={project.image}
          alt={`${project.name} interface preview`}
          width={1600}
          height={1008}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top"
        />

        <div className="p-6 sm:p-8">
          <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            {project.type}
          </span>
          <h3 className="mt-4 text-2xl font-bold tracking-tight">{project.name}</h3>
          <p className="text-sm text-muted-foreground">{project.category}</p>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>

          <div className="mt-7 grid gap-7 sm:grid-cols-2">
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
                Features
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

          <div className="mt-8">
            <ProjectLinks project={project} size="md" />
          </div>
        </div>
      </div>
    </div>
  );
}
