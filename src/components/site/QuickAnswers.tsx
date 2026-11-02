import { homepageFaqs } from "@/data/portfolio";
import { slugify } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function QuickAnswers() {
  return (
    <section
      id="quick-answers"
      aria-labelledby="quick-answers-heading"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20 overflow-hidden"
    >
      <SectionHeading
        id="quick-answers-heading"
        label="Direct Answers"
        title="Frequently asked questions"
        subtitle="Concise, verified facts about my software engineering background, core technical stack, and commercial availability."
      />

      <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2">
        {homepageFaqs.map((faq, index) => {
          const headingId = slugify(faq.question);
          return (
            <Reveal
              key={faq.question}
              delay={index * 40}
              className="flex flex-col justify-start rounded-2xl border border-border bg-surface/70 p-5 sm:p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <h3
                id={headingId}
                className="text-base sm:text-lg font-bold text-foreground leading-snug"
              >
                {faq.question}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
