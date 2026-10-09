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

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SEO_CONFIG.url}#person`,
      name: SEO_CONFIG.name,
      jobTitle: "Software Developer",
      description:
        "Computer Science student and software developer specializing in web development, cross-platform mobile apps, backend APIs, and applied machine learning.",
      url: SEO_CONFIG.url,
      image: SEO_CONFIG.personImage,
      sameAs: SEO_CONFIG.socialLinks,
      address: {
        "@type": "PostalAddress",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "[College/University Name - Update with your institution]",
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
    },
    {
      "@type": "WebSite",
      "@id": `${SEO_CONFIG.url}#website`,
      url: SEO_CONFIG.url,
      name: SEO_CONFIG.siteName,
      description: SEO_CONFIG.description,
      publisher: {
        "@id": `${SEO_CONFIG.url}#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SEO_CONFIG.url}#farmy`,
      name: "Farmy",
      description:
        "A fruit-focused e-commerce platform designed to simplify online fruit shopping with modern mobile browsing, offers, and order management.",
      url: "https://farmyy-sigma.vercel.app/",
      applicationCategory: "ShoppingApplication",
      operatingSystem: "Android, Web",
      author: {
        "@id": `${SEO_CONFIG.url}#person`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SEO_CONFIG.url}#farmyos`,
      name: "FarmyOS",
      description:
        "A centralized administration and operations platform for the Farmy fruit e-commerce ecosystem, coordinating products, orders, deliveries, staff, and promotions.",
      url: "https://farmyy-os.vercel.app/",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, Web",
      author: {
        "@id": `${SEO_CONFIG.url}#person`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SEO_CONFIG.url}#cropheal-ai`,
      name: "CropHeal AI",
      description:
        "An intelligent agricultural healthcare application diagnosing plant leaf diseases from photos and providing real-time AI treatment guidance.",
      url: "https://huggingface.co/spaces/trio-rds-tensors/CropHeal-AI",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      author: {
        "@id": `${SEO_CONFIG.url}#person`,
      },
    },
    {
      "@type": "CreativeWork",
      "@id": `${SEO_CONFIG.url}#gram-tarakki`,
      name: "Gram Tarakki Foundation Web Platform",
      description:
        "A comprehensive digital platform for a non-profit foundation featuring social welfare initiatives, volunteer registration, credential verification, and donation workflows.",
      url: "https://gramtarakkifoundation.org/",
      author: {
        "@id": `${SEO_CONFIG.url}#person`,
      },
    },
  ],
};
