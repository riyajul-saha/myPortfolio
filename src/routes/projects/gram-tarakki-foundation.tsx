import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProjectBySlug } from "@/data/portfolio";
import { ProjectDetailView } from "@/components/site/ProjectDetailView";

const project = getProjectBySlug("gram-tarakki-foundation")!;
const title = "Gram Tarakki Foundation Web Platform | Riyajul Saha";
const description =
  "Explore Gram Tarakki Foundation platform by Riyajul Saha: a full-stack non-profit website built with Flask and MySQL featuring donations and volunteer flows.";
const url = "https://riyajulsaha.is-a.dev/projects/gram-tarakki-foundation";
const image = "https://riyajulsaha.is-a.dev/assets/GTFoundation-Banner.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Gram Tarakki Foundation Web Platform",
  description: project.description,
  url,
  image,
  author: {
    "@type": "Person",
    name: "Riyajul Saha",
    url: "https://riyajulsaha.is-a.dev/",
  },
};

export const Route = createFileRoute("/projects/gram-tarakki-foundation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1000" },
      {
        property: "og:image:alt",
        content: "Gram Tarakki Foundation Web Platform interface preview",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  }),
  component: GramTarakkiPage,
});

function GramTarakkiPage() {
  if (!project) throw notFound();
  return <ProjectDetailView project={project} />;
}
