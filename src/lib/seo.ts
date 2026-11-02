import { projects, homepageFaqs } from "@/data/portfolio";

export const LAST_UPDATED = "2026-11-02";

export const SEO_CONFIG = {
  name: "Riyajul Saha",
  title: "Riyajul Saha — Software Developer",
  description:
    "Riyajul Saha is a software developer in West Bengal, India, building modern web and mobile apps using React, React Native, Node.js, Python, and applied ML.",
  url: "https://riyajulsaha.is-a.dev/",
  siteName: "Riyajul Saha Portfolio",
  locale: "en_US",
  themeColor: "#09090b",
  ogImage: {
    url: "https://riyajulsaha.is-a.dev/assets/open-graph-social-share-banner.webp",
    width: 1200,
    height: 630,
    alt: "Riyajul Saha — Software Developer Portfolio",
  },
  personImage: "https://riyajulsaha.is-a.dev/assets/profile.webp",
  socialLinks: [
    "https://github.com/riyajul-saha/",
    "https://www.linkedin.com/in/riyajul-saha-linkdin/",
  ],
};

const farmyProject = projects.find((p) => p.id === "farmy")!;
const farmyOsProject = projects.find((p) => p.id === "farmyy-os")!;
const cropHealProject = projects.find((p) => p.id === "cropheal-ai")!;
const gramTarakkiProject = projects.find((p) => p.id === "gram-tarakki")!;

export function getPersonSchema() {
  return {
    "@type": "Person" as const,
    "@id": `${SEO_CONFIG.url}#person`,
    name: SEO_CONFIG.name,
    jobTitle: "Software Developer",
    description:
      "Computer Science student and software developer specializing in web development, cross-platform mobile apps, backend APIs, and applied machine learning.",
    url: SEO_CONFIG.url,
    image: SEO_CONFIG.personImage,
    sameAs: SEO_CONFIG.socialLinks,
    address: {
      "@type": "PostalAddress" as const,
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog" as const,
      name: "Development & Engineering Services",
      itemListElement: [
        {
          "@type": "Offer" as const,
          itemOffered: {
            "@type": "Service" as const,
            name: "Software & App Development",
            description:
              "Custom software engineering, cross-platform mobile apps (React Native & Expo), and backend architecture.",
            url: `${SEO_CONFIG.url}services/software-developer`,
          },
        },
        {
          "@type": "Offer" as const,
          itemOffered: {
            "@type": "Service" as const,
            name: "Web & SaaS Development",
            description:
              "Full-stack web applications, Python Flask and Node.js backends, responsive business portals, and SaaS development.",
            url: `${SEO_CONFIG.url}services/web-developer`,
          },
        },
        {
          "@type": "Offer" as const,
          itemOffered: {
            "@type": "Service" as const,
            name: "AI Agent Builder & Machine Learning",
            description:
              "Autonomous AI agents, custom LLM reasoning workflows, computer vision models, and intelligent business process automation.",
            url: `${SEO_CONFIG.url}services/ai-agent-builder`,
          },
        },
      ],
    },
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "Machine Learning",
      "Computer Vision",
      "Supabase",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite" as const,
    "@id": `${SEO_CONFIG.url}#website`,
    url: SEO_CONFIG.url,
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.description,
    publisher: {
      "@id": `${SEO_CONFIG.url}#person`,
    },
    inLanguage: "en-US",
  };
}

export function getRootStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [getPersonSchema(), getWebSiteSchema()],
  };
}

/** Legacy export maintained for compatibility */
export const structuredData = getRootStructuredData();

export function getWebPageSchema() {
  return {
    "@type": "WebPage" as const,
    "@id": `${SEO_CONFIG.url}#webpage`,
    url: SEO_CONFIG.url,
    name: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    isPartOf: {
      "@id": `${SEO_CONFIG.url}#website`,
    },
    about: {
      "@id": `${SEO_CONFIG.url}#person`,
    },
    dateModified: LAST_UPDATED,
    speakable: {
      "@type": "SpeakableSpecification" as const,
      cssSelector: ["#hero-title", "#quick-answers"],
    },
  };
}

export function getFarmySchema() {
  return {
    "@type": "SoftwareApplication" as const,
    "@id": `${SEO_CONFIG.url}#farmy`,
    name: "Farmy",
    description: farmyProject.description,
    url: "https://farmyy-sigma.vercel.app/",
    applicationCategory: "ShoppingApplication",
    operatingSystem: "Android, Web",
    author: {
      "@id": `${SEO_CONFIG.url}#person`,
    },
    screenshot: `${SEO_CONFIG.url}assets/farmy-poster.webp`,
    featureList: farmyProject.features,
    offers: {
      "@type": "Offer" as const,
      price: "0",
      priceCurrency: "INR",
    },
  };
}

export function getFarmyOsSchema() {
  return {
    "@type": "SoftwareApplication" as const,
    "@id": `${SEO_CONFIG.url}#farmyos`,
    name: "FarmyOS",
    description: farmyOsProject.description,
    url: "https://farmyy-os.vercel.app/",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, Web",
    author: {
      "@id": `${SEO_CONFIG.url}#person`,
    },
    screenshot: `${SEO_CONFIG.url}assets/FarmyOS-Poster.webp`,
    featureList: farmyOsProject.features,
  };
}

export function getCropHealAiSchema() {
  return {
    "@type": "SoftwareApplication" as const,
    "@id": `${SEO_CONFIG.url}#cropheal-ai`,
    name: "CropHeal AI",
    description: cropHealProject.description,
    url: "https://huggingface.co/spaces/trio-rds-tensors/CropHeal-AI",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    author: {
      "@id": `${SEO_CONFIG.url}#person`,
    },
    screenshot: `${SEO_CONFIG.url}assets/CropHeal-AI-Banner.webp`,
    featureList: cropHealProject.features,
    offers: {
      "@type": "Offer" as const,
      price: "0",
      priceCurrency: "INR",
    },
  };
}

export function getGramTarakkiSchema() {
  return {
    "@type": "CreativeWork" as const,
    "@id": `${SEO_CONFIG.url}#gram-tarakki`,
    name: "Gram Tarakki Foundation Web Platform",
    description: gramTarakkiProject.description,
    url: "https://gramtarakkifoundation.org/",
    image: `${SEO_CONFIG.url}assets/GTFoundation-Banner.webp`,
    author: {
      "@id": `${SEO_CONFIG.url}#person`,
    },
  };
}

export function getSoftwareDeveloperServiceSchema() {
  return {
    "@type": "ProfessionalService" as const,
    "@id": `${SEO_CONFIG.url}services/software-developer#service`,
    name: "Software & App Developer and Freelance Developer",
    description:
      "Custom software development, mobile apps, business automation, and startup consulting by Riyajul Saha.",
    url: `${SEO_CONFIG.url}services/software-developer`,
    image: `${SEO_CONFIG.url}assets/open-graph-social-share-banner.webp`,
    provider: {
      "@id": `${SEO_CONFIG.url}#person`,
    },
    areaServed: ["India", "Global", "United States"],
    address: {
      "@type": "PostalAddress" as const,
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  };
}

export function getWebDeveloperServiceSchema() {
  return {
    "@type": "ProfessionalService" as const,
    "@id": `${SEO_CONFIG.url}services/web-developer#service`,
    name: "Web Developer and Web Application",
    description:
      "Custom web application development, SaaS platforms, Python Flask, Node.js, and responsive business portals by Riyajul Saha.",
    url: `${SEO_CONFIG.url}services/web-developer`,
    image: `${SEO_CONFIG.url}assets/open-graph-social-share-banner.webp`,
    provider: {
      "@id": `${SEO_CONFIG.url}#person`,
    },
    areaServed: ["India", "Global", "United States"],
    address: {
      "@type": "PostalAddress" as const,
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  };
}

export function getAiAgentBuilderServiceSchema() {
  return {
    "@type": "ProfessionalService" as const,
    "@id": `${SEO_CONFIG.url}services/ai-agent-builder#service`,
    name: "AI Agent Builder and AI Development",
    description:
      "Custom AI agent development, multi-LLM workflows, computer vision, and intelligent business automation by Riyajul Saha.",
    url: `${SEO_CONFIG.url}services/ai-agent-builder`,
    image: `${SEO_CONFIG.url}assets/open-graph-social-share-banner.webp`,
    provider: {
      "@id": `${SEO_CONFIG.url}#person`,
    },
    areaServed: ["India", "Global", "United States"],
    address: {
      "@type": "PostalAddress" as const,
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  };
}

export function getHomepageFaqSchema() {
  return {
    "@type": "FAQPage" as const,
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };
}

export function getHomepageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema(),
      getFarmySchema(),
      getFarmyOsSchema(),
      getCropHealAiSchema(),
      getGramTarakkiSchema(),
      getSoftwareDeveloperServiceSchema(),
      getWebDeveloperServiceSchema(),
      getAiAgentBuilderServiceSchema(),
      getHomepageFaqSchema(),
    ],
  };
}

export function getProjectSchemaBySlug(slug: string) {
  switch (slug) {
    case "farmy":
      return getFarmySchema();
    case "farmyos":
    case "farmyy-os":
      return getFarmyOsSchema();
    case "cropheal-ai":
      return getCropHealAiSchema();
    case "gram-tarakki-foundation":
    case "gram-tarakki":
      return getGramTarakkiSchema();
    default:
      throw new Error(`Unknown project slug: ${slug}`);
  }
}

export function getStandaloneProjectSchema(slug: string) {
  return {
    "@context": "https://schema.org",
    ...getProjectSchemaBySlug(slug),
  };
}

export function getServiceSchemaBySlug(slug: string) {
  switch (slug) {
    case "software-developer":
      return getSoftwareDeveloperServiceSchema();
    case "web-developer":
      return getWebDeveloperServiceSchema();
    case "ai-agent-builder":
      return getAiAgentBuilderServiceSchema();
    default:
      throw new Error(`Unknown service slug: ${slug}`);
  }
}

export function getStandaloneServiceSchema(slug: string) {
  return {
    "@context": "https://schema.org",
    ...getServiceSchemaBySlug(slug),
  };
}

export function getBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, index) => {
      const element: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
      };
      if (item.url) {
        element.item = item.url;
      }
      return element;
    }),
  };
}
