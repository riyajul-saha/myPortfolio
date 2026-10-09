import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full max-w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 sm:h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#top" className="text-base sm:text-lg font-extrabold tracking-tight shrink-0">
          {profile.initials}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
              aria-label="Get in touch"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface/60 text-foreground transition-all hover:bg-surface active:scale-95 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col divide-y divide-border/50 px-4 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get in Touch <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
