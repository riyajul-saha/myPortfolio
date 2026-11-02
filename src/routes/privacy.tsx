import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { SEO_CONFIG, getBreadcrumbSchema } from "@/lib/seo";

const title = "Privacy Policy — Riyajul Saha";
const description =
  "Plain-language privacy policy for Riyajul Saha's portfolio website and contact form data handling.";
const url = `${SEO_CONFIG.url}privacy`;

const breadcrumb = getBreadcrumbSchema([
  { name: "Home", url: SEO_CONFIG.url },
  { name: "Privacy Policy", url },
]);

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SEO_CONFIG.ogImage.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SEO_CONFIG.ogImage.url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumb),
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip relative">
      {/* Top ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-primary/15 blur-[150px]" />
        <div className="dot-field absolute inset-0 opacity-60" />
      </div>

      {/* Header bar */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav
          aria-label="Privacy Navigation"
          className="mx-auto flex h-14 sm:h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>
          <Link
            to="/"
            className="text-sm sm:text-base font-extrabold tracking-tight text-foreground"
          >
            {profile.initials}
          </Link>
        </nav>
      </header>

      <main
        id="main-content"
        className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 space-y-10"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Shield className="h-3.5 w-3.5" />
            <span>Privacy &amp; Data Transparency</span>
          </div>
          <h1
            id="privacy-policy-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground"
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">Effective Date: November 2, 2026</p>
        </div>

        <section aria-labelledby="overview-heading" className="space-y-3">
          <h2 id="overview-heading" className="text-lg sm:text-xl font-bold text-foreground">
            Overview
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This personal portfolio website showcases software development projects, technical
            skills, and engineering services by Riyajul Saha. I respect your privacy and believe in
            direct, transparent communication.
          </p>
        </section>

        <section aria-labelledby="form-data-heading" className="space-y-3">
          <h2 id="form-data-heading" className="text-lg sm:text-xl font-bold text-foreground">
            Contact Form Data
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            When you submit a message using the contact form on this website, the form collects:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Your Name:</strong> Used to address you properly
              when responding.
            </li>
            <li>
              <strong className="text-foreground">Your Email Address:</strong> Used strictly to send
              an email reply to your inquiry.
            </li>
            <li>
              <strong className="text-foreground">Your Message:</strong> The project details,
              proposal, question, or note you choose to send.
            </li>
          </ul>
        </section>

        <section aria-labelledby="form-delivery-heading" className="space-y-3">
          <h2 id="form-delivery-heading" className="text-lg sm:text-xl font-bold text-foreground">
            How Your Message Is Sent
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Contact form submissions are transmitted via the Web3Forms API service (
            <a
              href="https://web3forms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              web3forms.com
            </a>
            ) directly to my personal inbox. Data submitted through this form is used exclusively to
            evaluate opportunities and communicate with you. Your details are never sold, rented, or
            distributed to advertisers.
          </p>
        </section>

        <section aria-labelledby="cookies-storage-heading" className="space-y-3">
          <h2 id="cookies-storage-heading" className="text-lg sm:text-xl font-bold text-foreground">
            Cookies and Storage
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This site does not run advertising tracking networks. If interactive interface elements
            use lightweight local browser storage, it is strictly to remember client interface
            preferences (such as collapsed panels) during your visit.
          </p>
        </section>

        <section
          aria-labelledby="contact-heading"
          className="space-y-3 border-t border-border/60 pt-6"
        >
          <h2 id="contact-heading" className="text-lg sm:text-xl font-bold text-foreground">
            Contact &amp; Data Inquiries
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you have questions regarding this privacy policy or would like your previous messages
            deleted from my email records, please contact:
          </p>
          <a
            href="mailto:riyajsaha879@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-2 transition-colors"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span>riyajsaha879@gmail.com</span>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
