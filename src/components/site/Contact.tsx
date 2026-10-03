import { useState, type FormEvent } from "react";
import { Check, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const field =
    "mt-2 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  function validate() {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      next.message = "Tell me a little more about the project.";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setValues({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something together.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Have an idea, opportunity or project?
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold">Message sent</h3>
                <p className="text-sm text-muted-foreground">
                  Thanks for reaching out — I'll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-surface"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    aria-invalid={Boolean(errors.name)}
                    placeholder="Your name"
                    className={field}
                  />
                  {errors.name ? (
                    <p className="mt-2 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                    aria-invalid={Boolean(errors.email)}
                    placeholder="you@company.com"
                    className={field}
                  />
                  {errors.email ? (
                    <p className="mt-2 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Project description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    aria-invalid={Boolean(errors.message)}
                    placeholder="What are you building?"
                    className={field}
                  />
                  {errors.message ? (
                    <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
