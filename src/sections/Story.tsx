import { SECTION_IDS } from "@/config/site";
import { milestones } from "@/data/content";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Story() {
  return (
    <Section id={SECTION_IDS.story} tone="muted" width="5xl">
      <SectionHeading
        eyebrow="How it began"
        title="Our Love Story"
        subtitle="Every great love has a beginning. Here's a glimpse of ours."
      />

      <div className="relative">
        {/* Timeline spine: left on phones, centred from `md` up */}
        <div className="absolute left-4 top-0 h-full w-px bg-accent/40 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

        <div className="space-y-9 sm:space-y-12">
          {milestones.map((m, i) => (
            <Reveal key={m.title} className="relative grid gap-4 pl-10 sm:gap-5 sm:pl-12 md:grid-cols-2 md:gap-12 md:pl-0">
              <span
                className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-accent shadow sm:h-4 sm:w-4 md:left-1/2"
                aria-hidden="true"
              />
              <img
                src={m.img}
                alt={`${m.title} — ${m.year}`}
                loading="lazy"
                className={cn("aspect-3/2 w-full rounded-xl object-cover shadow-soft sm:rounded-2xl", i % 2 === 1 && "md:order-2")}
              />
              <div className="flex flex-col justify-center">
                <span className="font-script text-lg leading-snug text-accent sm:text-3xl">{m.year}</span>
                <h3 className="mt-1 text-xl font-medium text-primary sm:text-3xl">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}