import { SECTION_IDS } from "@/config/site";
import { people } from "@/data/content";
import { usePrefs } from "@/hooks/usePrefs";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { t } = usePrefs();

  return (
    <Section id={SECTION_IDS.about}>
      <SectionHeading
        eyebrow="Get to know us"
        title="About the Couple"
        subtitle="Two different worlds that found a perfect rhythm together."
      />

      <div className="space-y-14 md:space-y-24">
        {people.map((person, i) => {
          const flipped = i % 2 === 1;
          return (
            <Reveal key={person.name} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={cn("relative", flipped && "md:order-2")}>
                <div className="absolute -inset-3 -z-10 rounded-3xl bg-linear-to-br from-accent/30 to-tan/20 blur-xl" aria-hidden="true" />
                <img
                  src={person.img}
                  alt={`${t(person.name)}, ${t(person.role)}`}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="mx-auto aspect-4/5 w-full max-w-md rounded-3xl object-cover shadow-elegant md:max-w-none"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="font-script text-3xl text-accent">{t(person.role)}</p>
                <h3 className="mt-1 text-4xl font-medium text-primary sm:text-5xl">{t(person.name)}</h3>
                <div className="mx-auto my-5 h-px w-16 bg-accent/50 md:mx-0" aria-hidden="true" />
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{t(person.bio)}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}