import hero from "@/assets/image_4.webp";

import { SECTION_IDS, wedding } from "@/config/site";
import { usePrefs } from "@/hooks/usePrefs";
import { scrollToSection } from "@/utils/scroll";
import { Button } from "@/components/ui/Button";
import { ArrowDownIcon } from "@/components/ui/icons";

export function Hero() {
  const { t } = usePrefs();

  return (
    <section id={SECTION_IDS.home} className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt={`${wedding.groom} and ${wedding.bride} embracing at golden hour`}
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden="true" />

      {/* Floating decorations */}
      <span className="animate-float-slow pointer-events-none absolute left-[8%] top-[18%] text-4xl text-tan/50 sm:text-6xl" aria-hidden="true">
        ❀
      </span>
      <span
        className="animate-float-slow pointer-events-none absolute right-[10%] top-[26%] text-3xl text-cream/40 sm:text-5xl"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      >
        ✦
      </span>
      <span
        className="animate-float-slow pointer-events-none absolute bottom-[16%] left-[14%] text-3xl text-tan/40 sm:text-5xl"
        style={{ animationDelay: "3s" }}
        aria-hidden="true"
      >
        ❁
      </span>

      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-28 text-center text-cream">
        <p className="font-script text-3xl text-tan sm:text-4xl">{t("We're getting married")}</p>

        {/* Names stack on phones so long names never overflow, sit inline from `sm` up */}
        <h1 className="mt-3 flex flex-col items-center font-display text-6xl font-medium leading-none tracking-tight sm:flex-row sm:justify-center sm:text-8xl">
          <span>{wedding.groom}</span>
          <span className="my-1 font-script text-4xl text-tan sm:mx-3 sm:my-0 sm:text-6xl">&amp;</span>
          <span>{wedding.bride}</span>
        </h1>

        <div className="mx-auto mt-7 flex max-w-md items-center justify-center gap-3 sm:gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-cream/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-cream/90 sm:text-sm sm:tracking-[0.3em]">{wedding.dateLabel}</span>
          <span className="h-px flex-1 bg-cream/40" />
        </div>

   

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" onClick={() => scrollToSection(SECTION_IDS.rsvp)} className="w-full uppercase tracking-wider shadow-elegant sm:w-auto">
            {t("you are invited")}
          </Button>
          {/* <Button
            variant="outlineLight"
            size="lg"
            onClick={() => scrollToSection(SECTION_IDS.calendar)}
            className="w-full uppercase tracking-wider sm:w-auto"
          >
            {t("V")}
          </Button> */}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection(SECTION_IDS.countdown)}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/80 transition-colors hover:text-cream"
        aria-label="Scroll down"
      >
        <ArrowDownIcon size={28} className="animate-bounce" />
      </button>
    </section>
  );
}