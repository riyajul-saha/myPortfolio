import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProjectBySlug } from "@/data/portfolio";
import { ProjectDetailView } from "@/components/site/ProjectDetailView";

const project = getProjectBySlug("cropheal-ai")!;
const title = "CropHeal AI — Plant Disease Vision System | Riyajul Saha";
const description =
  "Explore CropHeal AI by Riyajul Saha: an agricultural healthcare vision system using ResNet50 and multi-LLMs for real-time crop disease diagnosis and remedies.";
const url = "https://riyajulsaha.is-a.dev/projects/cropheal-ai";
const image = "https://riyajulsaha.is-a.dev/assets/CropHeal-AI-Banner.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CropHeal AI",
  description: project.description,
  url,
  image,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  author: {
    "@type": "Person",
    name: "Riyajul Saha",
    url: "https://riyajulsaha.is-a.dev/",
  },
};

export const Route = createFileRoute("/projects/cropheal-ai")({
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
      { property: "og:image:alt", content: "CropHeal AI Vision System interface preview" },
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
  component: CropHealAIPage,
});

function CropHealAIPage() {
  if (!project) throw notFound();
  return <ProjectDetailView project={project} />;
}
