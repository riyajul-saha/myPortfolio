import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhatIDo } from "@/components/site/WhatIDo";
import { Skills } from "@/components/site/Skills";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

import { SEO_CONFIG } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_CONFIG.title },
      { name: "description", content: SEO_CONFIG.description },
      { property: "og:title", content: SEO_CONFIG.title },
      { property: "og:description", content: SEO_CONFIG.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SEO_CONFIG.url },
      { property: "og:image", content: SEO_CONFIG.ogImage.url },
      { property: "og:image:width", content: String(SEO_CONFIG.ogImage.width) },
      { property: "og:image:height", content: String(SEO_CONFIG.ogImage.height) },
      { property: "og:image:alt", content: SEO_CONFIG.ogImage.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO_CONFIG.title },
      { name: "twitter:description", content: SEO_CONFIG.description },
      { name: "twitter:image", content: SEO_CONFIG.ogImage.url },
      { name: "twitter:image:alt", content: SEO_CONFIG.ogImage.alt },
    ],
    links: [{ rel: "canonical", href: SEO_CONFIG.url }],
  }),

  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-clip w-full max-w-full relative">
      <Navbar />
      <main className="overflow-x-clip w-full max-w-full relative">
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
