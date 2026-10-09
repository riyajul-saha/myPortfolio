import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProjectBySlug } from "@/data/portfolio";
import { ProjectDetailView } from "@/components/site/ProjectDetailView";

const project = getProjectBySlug("farmyos")!;
const title = "FarmyOS — Operations & Admin Platform | Riyajul Saha";
const description =
  "Explore FarmyOS by Riyajul Saha: a centralized operations management mobile system built with React Native, Expo, Express.js, and Supabase for Farmy ecosystem.";
const url = "https://riyajulsaha.is-a.dev/projects/farmyos";
const image = "https://riyajulsaha.is-a.dev/assets/FarmyOS-Poster.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FarmyOS",
  description: project.description,
  url,
  image,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android, Web",
  author: {
    "@type": "Person",
    name: "Riyajul Saha",
    url: "https://riyajulsaha.is-a.dev/",
  },
};

export const Route = createFileRoute("/projects/farmyos")({
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
      { property: "og:image:alt", content: "FarmyOS Administration Platform interface preview" },
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
  component: FarmyOSPage,
});

function FarmyOSPage() {
  if (!project) throw notFound();
  return <ProjectDetailView project={project} />;
}
