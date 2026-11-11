import type { SectionId } from "@/config/site";

export function scrollToSection(id: SectionId): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
