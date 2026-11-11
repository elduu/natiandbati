import type { ReactNode } from "react";
import type { SectionId } from "@/config/site";
import { cn } from "@/utils/cn";

const tones = {
  default: "",
  muted: "bg-secondary/40",
  dark: "relative overflow-hidden bg-primary text-cream",
} as const;

const widths = {
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
} as const;

interface SectionProps {
  id?: SectionId;
  tone?: keyof typeof tones;
  /** Max width of the centred content column. */
  width?: keyof typeof widths;
  /** Skip the inner container and horizontal padding (for full-bleed content). */
  bleed?: boolean;
  /** Decorative elements positioned against the section itself. */
  decoration?: ReactNode;
  children: ReactNode;
}

/** Page section with consistent responsive spacing: tighter on phones, roomier from `sm` up. */
export function Section({ id, tone = "default", width = "6xl", bleed = false, decoration, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", !bleed && "px-5 sm:px-6", tones[tone])}>
      {decoration}
      {bleed ? children : <div className={cn("relative mx-auto", widths[width])}>{children}</div>}
    </section>
  );
}
