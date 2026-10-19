import { createFileRoute, notFound } from "@tanstack/react-router";
import { getServiceBySlug } from "@/data/services";
import { ServiceDetailView } from "@/components/site/ServiceDetailView";

const service = getServiceBySlug("software-developer")!;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: service.title,
  description: service.seo.metaDescription,
  url: service.seo.canonicalUrl,
  image: service.seo.ogImage,
  address: {
    "@type": "PostalAddress",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  provider: {
    "@type": "Person",
    name: "Riyajul Saha",
    url: "https://riyajulsaha.is-a.dev/",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "AdministrativeArea", name: "West Bengal" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Global" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: service.title,
    itemListElement: service.servicesIOffer.services.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item.title,
        description: item.summary,
      },
    })),
  },
};

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

export const Route = createFileRoute("/services/software-developer")({
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
    ],
  }),
  component: SoftwareDeveloperPage,
});

function SoftwareDeveloperPage() {
  if (!service) throw notFound();
  return <ServiceDetailView service={service} />;
}
