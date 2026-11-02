import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProjectBySlug } from "@/data/portfolio";
import { ProjectDetailView } from "@/components/site/ProjectDetailView";
import { getStandaloneProjectSchema, getBreadcrumbSchema, SEO_CONFIG } from "@/lib/seo";

const project = getProjectBySlug("farmy")!;
const title = "Farmy — Fruit E-Commerce Mobile Platform | Riyajul Saha";
const description =
  "Explore Farmy by Riyajul Saha: a full-stack fruit e-commerce mobile platform built with React Native, Expo, Node.js, and PostgreSQL for fresh produce shopping.";
const url = "https://riyajulsaha.is-a.dev/projects/farmy";
const image = "https://riyajulsaha.is-a.dev/assets/farmy-poster.webp";

const schema = getStandaloneProjectSchema("farmy");
const breadcrumb = getBreadcrumbSchema([
  { name: "Portfolio", url: SEO_CONFIG.url },
  { name: "Farmy", url },
]);

export const Route = createFileRoute("/projects/farmy")({
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
      { property: "og:image:alt", content: "Farmy E-Commerce Platform interface preview" },
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
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumb),
      },
    ],
  }),
  component: FarmyPage,
});

function FarmyPage() {
  if (!project) throw notFound();
  return <ProjectDetailView project={project} />;
}
