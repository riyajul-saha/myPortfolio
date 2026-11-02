import { createFileRoute, notFound } from "@tanstack/react-router";
import { getServiceBySlug } from "@/data/services";
import { ServiceDetailView } from "@/components/site/ServiceDetailView";
import { getStandaloneServiceSchema, getBreadcrumbSchema, SEO_CONFIG } from "@/lib/seo";

const service = getServiceBySlug("web-developer")!;

const serviceSchema = getStandaloneServiceSchema("web-developer");

const breadcrumb = getBreadcrumbSchema([
  { name: "Home", url: SEO_CONFIG.url },
  { name: service.title, url: service.seo.canonicalUrl },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: service.faqs.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const Route = createFileRoute("/services/web-developer")({
  head: () => ({
    meta: [
      { title: service.seo.metaTitle },
      { name: "description", content: service.seo.metaDescription },
      { name: "keywords", content: service.seo.keywords.join(", ") },
      { property: "og:title", content: service.seo.metaTitle },
      { property: "og:description", content: service.seo.metaDescription },
      { property: "og:url", content: service.seo.canonicalUrl },
      { property: "og:type", content: "website" },
      { property: "og:image", content: service.seo.ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: service.title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: service.seo.metaTitle },
      { name: "twitter:description", content: service.seo.metaDescription },
      { name: "twitter:image", content: service.seo.ogImage },
    ],
    links: [{ rel: "canonical", href: service.seo.canonicalUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumb),
      },
    ],
  }),
  component: WebDeveloperPage,
});

function WebDeveloperPage() {
  if (!service) throw notFound();
  return <ServiceDetailView service={service} />;
}
