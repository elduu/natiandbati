import { usePrefs } from "@/hooks/usePrefs";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Use on dark backgrounds. */
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, light = false }: SectionHeadingProps) {
  const { t } = usePrefs();
  const rule = light ? "bg-tan/60" : "bg-accent/50";
  const accent = light ? "text-tan" : "text-accent";

  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      {eyebrow && <p className={cn("font-script text-3xl sm:text-4xl", accent)}>{t(eyebrow)}</p>}
      <h2
        className={cn(
          "mt-2 text-balance text-4xl font-medium tracking-tight sm:text-5xl",
          light ? "text-cream" : "text-primary",
        )}
      >
        {t(title)}
      </h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-3" aria-hidden="true">
        <span className={cn("h-px w-12", rule)} />
        <span className={cn("text-lg", accent)}>❧</span>
        <span className={cn("h-px w-12", rule)} />
      </div>
      {subtitle && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-cream/80" : "text-muted-foreground")}>
          {t(subtitle)}
        </p>
      )}
    </Reveal>
  );
}
