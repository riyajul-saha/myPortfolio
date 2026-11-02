import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { LAST_UPDATED } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-border overflow-x-clip bg-background">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 pb-10 border-b border-border/60 text-xs sm:text-sm">
          {/* Sections Navigation */}
          <div>
            <span className="font-semibold text-foreground tracking-wide block mb-3">Sections</span>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-foreground transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Navigation */}
          <div>
            <span className="font-semibold text-foreground tracking-wide block mb-3">Services</span>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  to="/services/software-developer"
                  className="hover:text-foreground transition-colors"
                >
                  Software &amp; App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-developer"
                  className="hover:text-foreground transition-colors"
                >
                  Web &amp; SaaS Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-agent-builder"
                  className="hover:text-foreground transition-colors"
                >
                  AI Agent Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects Navigation */}
          <div>
            <span className="font-semibold text-foreground tracking-wide block mb-3">Projects</span>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/projects/farmy" className="hover:text-foreground transition-colors">
                  Farmy
                </Link>
              </li>
              <li>
                <Link to="/projects/farmyos" className="hover:text-foreground transition-colors">
                  FarmyOS
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/cropheal-ai"
                  className="hover:text-foreground transition-colors"
                >
                  CropHeal AI
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/gram-tarakki-foundation"
                  className="hover:text-foreground transition-colors"
                >
                  Gram Tarakki Foundation
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div>
            <span className="font-semibold text-foreground tracking-wide block mb-3">
              Connect &amp; Legal
            </span>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 {profile.name}. All rights reserved.</span>
          <time dateTime={LAST_UPDATED} className="text-muted-foreground/80">
            Last updated November 2, 2026
          </time>
          <span className="font-semibold text-foreground">{profile.initials}</span>
        </div>
      </div>
    </footer>
  );
}
