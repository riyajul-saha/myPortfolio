import { useState, type FormEvent } from "react";
import { AlertCircle, Check, Github, Linkedin, Loader2, Mail, RotateCcw, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

type Errors = { name?: string; email?: string; message?: string };
type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORM_ACCESS_KEY as string | undefined) ||
  (import.meta.env.WEB3FORM_ACCESS_KEY as string | undefined) ||
  "cd0eaa08-7267-44a4-baae-f086996860c0";

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isSubmitting = status === "submitting";

  const field =
    "mt-2 w-full rounded-xl sm:rounded-2xl border border-border bg-surface-2 px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed";

  function validate() {
    const next: Errors = {};
    if (values.name.trim().length < 2) {
      next.name = "Please enter your name (at least 2 characters).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Please provide a little more detail (at least 10 characters).";
    }
    return next;
  }

  function handleInputChange(fieldKey: "name" | "email" | "message", value: string) {
    setValues((prev) => ({ ...prev, [fieldKey]: value }));
    if (errors[fieldKey]) {
      setErrors((prev) => ({ ...prev, [fieldKey]: undefined }));
    }
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", values.name.trim());
      formData.append("email", values.email.trim());
      formData.append("message", values.message.trim());
      formData.append("subject", `New message from ${values.name.trim()} via Portfolio`);
      formData.append("from_name", "Portfolio Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setValues({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Failed to deliver message. Please try again or email directly.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection error. Please verify your connection or email me directly.",
      );
    }
  }

  function resetForm() {
    setStatus("idle");
    setErrorMessage("");
    setErrors({});
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20 overflow-x-clip"
    >
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
          >
            Let's build something together.
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">
            Have an idea, opportunity or project? Send a message and let's connect.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4 shrink-0" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4 shrink-0" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary break-all"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="break-all">{profile.email}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface p-5 sm:p-6 md:p-8">
            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="flex flex-col items-start gap-4 py-8 sm:py-10"
              >
                <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/15 text-primary">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="text-lg sm:text-xl font-semibold">Message sent successfully!</h3>
                <p className="text-sm text-muted-foreground">
                  Thanks for reaching out! Your message has been sent directly to my inbox — I'll
                  get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <RotateCcw className="h-4 w-4 text-muted-foreground" />
                  <span>Send another message</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                aria-busy={isSubmitting}
                className="space-y-4 sm:space-y-5"
              >
                {/* Honeypot for spam bot mitigation */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Server / Network Error Alert */}
                {status === "error" && errorMessage && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-xs sm:text-sm text-destructive"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium">{errorMessage}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Alternatively, feel free to reach out directly at{" "}
                        <a
                          href={`mailto:${profile.email}`}
                          className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
                        >
                          {profile.email}
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="text-xs sm:text-sm font-medium">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    disabled={isSubmitting}
                    value={values.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Your name"
                    className={field}
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    disabled={isSubmitting}
                    value={values.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="you@company.com"
                    className={field}
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="text-xs sm:text-sm font-medium">
                      Project description / Message <span className="text-destructive">*</span>
                    </label>
                    {values.message.length > 0 && (
                      <span className="text-[11px] text-muted-foreground">
                        {values.message.length} chars
                      </span>
                    )}
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    value={values.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="What are you building or looking to collaborate on?"
                    className={field}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 text-xs text-destructive">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-primary px-5 py-2.5 sm:py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/85 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
