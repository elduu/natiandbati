import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type Variant = "gold" | "outline" | "outlineLight" | "solid";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  gold: "bg-linear-to-r from-accent to-tan text-accent-foreground shadow-soft hover:scale-105",
  outline: "border border-accent text-primary hover:bg-accent/10",
  outlineLight: "border border-cream/60 text-cream backdrop-blur-sm hover:bg-cream/10",
  solid: "bg-primary text-primary-foreground hover:bg-primary/90",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-sm",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = "gold", size = "md", className, type = "button", ...rest }: ButtonProps) {
  return <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...rest} />;
}
