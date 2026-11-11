import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/utils/cn";

type RevealProps<T extends ElementType> = {
  /** Element to render. Defaults to `div`. */
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/** Fades + slides its content in the first time it scrolls into view. */
export function Reveal<T extends ElementType = "div">({ as, className, children, ...rest }: RevealProps<T>) {
  const Tag: ElementType = as ?? "div";
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag ref={ref} className={cn("reveal", inView && "is-visible", className)} {...rest}>
      {children}
    </Tag>
  );
}
