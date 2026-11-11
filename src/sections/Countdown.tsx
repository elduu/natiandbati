import { SECTION_IDS, wedding } from "@/config/site";
import { useCountdown } from "@/hooks/useCountdown";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(wedding.date);

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <Section
      id={SECTION_IDS.countdown}
      tone="dark"
      width="4xl"
      decoration={
        <>
          <span className="pointer-events-none absolute -left-10 top-6 text-[10rem] leading-none text-cream/5" aria-hidden="true">
            ❦
          </span>
          <span className="pointer-events-none absolute -right-10 bottom-0 text-[10rem] leading-none text-cream/5" aria-hidden="true">
            ❦
          </span>
        </>
      }
    >
      <div className="text-center">
        <Reveal as="p" className="font-script text-3xl text-tan sm:text-4xl">
          Counting down to
        </Reveal>
        <Reveal as="h2" className="mt-2 text-4xl font-medium text-cream sm:text-5xl">
          Our Wedding Day
        </Reveal>

        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-6">
          {units.map((unit) => (
            <div key={unit.label} className="rounded-2xl border border-cream/15 bg-cream/5 py-6 backdrop-blur-sm sm:py-7">
              <div className="font-display text-5xl font-semibold tabular-nums text-tan sm:text-6xl">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-cream/70">{unit.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
