import { ArrowUpRight, Download, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

/**
 * Conditional buttons — only links that exist are rendered.
 */
export function ProjectLinks({ project, size = "sm" }: { project: Project; size?: "sm" | "md" }) {
  const { website, apk, github } = project.links;
  const all = Boolean(website && apk && github);

  const base = size === "md" ? "px-5 py-3 text-sm" : "px-4 py-2.5 text-xs";

  const primary = `inline-flex items-center gap-2 rounded-xl bg-primary font-semibold text-primary-foreground transition-colors hover:bg-primary/85 ${base}`;
  const ghost = `inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 font-semibold transition-colors hover:bg-surface ${base}`;

  const isDemo = project.id !== "gram-tarakki";
  const webLabel = isDemo ? "Live Demo" : "Visit Website";

  return (
    <div className="flex flex-wrap gap-2">
      {website ? (
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className={primary}
          aria-label={`${webLabel} for ${project.name}`}
        >
          {webLabel} <ArrowUpRight className="h-4 w-4" />
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
          {all ? "Download" : "Download APK"} <Download className="h-4 w-4" />
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
          {all ? "GitHub" : "View Source"} <Github className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}
