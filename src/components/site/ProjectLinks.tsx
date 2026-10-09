import { ArrowUpRight, Download, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

import { cn } from "@/lib/utils";

/**
 * Conditional buttons — only links that exist are rendered.
 */
export function ProjectLinks({
  project,
  size = "sm",
  className,
}: {
  project: Project;
  size?: "sm" | "md";
  className?: string;
}) {
  const { website, apk, github } = project.links;
  const all = Boolean(website && apk && github);

  const base =
    size === "md"
      ? "px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm"
      : "px-3 py-1.5 sm:px-4 sm:py-2 text-xs";

  const primary = `inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-primary font-semibold text-primary-foreground transition-colors hover:bg-primary/85 active:scale-[0.98] ${base}`;
  const ghost = `inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-border bg-surface-2 font-semibold transition-colors hover:bg-surface active:scale-[0.98] ${base}`;

  const isDemo = project.id !== "gram-tarakki";
  const webLabel = isDemo ? "Live Demo" : "Visit Website";

  return (
    <div className={cn("flex flex-wrap items-center gap-2 min-w-0 max-w-full", className)}>
      {website ? (
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className={primary}
          aria-label={`${webLabel} for ${project.name}`}
        >
          {webLabel} <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
      ) : null}

      {apk ? (
        <a
          href={apk}
          target="_blank"
          rel="noreferrer"
          className={website ? ghost : primary}
          aria-label={`Download ${project.name} app`}
        >
          {all ? "Download" : "Download APK"} <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
      ) : null}

      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className={website || apk ? ghost : primary}
          aria-label={`Source code for ${project.name}`}
        >
          {all ? "GitHub" : "View Source"} <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
      ) : null}
    </div>
  );
}
