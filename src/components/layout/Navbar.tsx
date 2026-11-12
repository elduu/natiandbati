import { useState } from "react";
import { navLinks, SECTION_IDS, wedding, type SectionId } from "@/config/site";
import { usePrefs } from "@/hooks/usePrefs";
import { useScrolled } from "@/hooks/useScrolled";
import { scrollToSection } from "@/utils/scroll";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

/** Language + theme toggles. */
function PrefsControls({ onLight }: { onLight: boolean }) {
  const { lang, setLang, theme, setTheme } = usePrefs();
  const btn = cn(
    "grid h-9 min-w-9 place-items-center rounded-full border px-2 text-xs font-semibold transition-colors hover:border-accent hover:text-accent",
    onLight ? "border-cream/40 text-cream" : "border-border text-foreground",
  );

  return (
    <div className="flex items-center gap-2">
      <button type="button" className={btn} onClick={() => setLang(lang === "en" ? "am" : "en")} aria-label="Switch language">
        {lang === "en" ? "አማ" : "EN"}
      </button>
      <button
        type="button"
        className={btn}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? "☀" : "☾"}
      </button>
    </div>
  );
}

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const { t } = usePrefs();

  /** Header is "solid" once scrolled, or whenever the mobile menu is open. */
  const solid = scrolled || open;

  const goTo = (id: SectionId) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-background/95 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-8 sm:py-4" aria-label="Primary">
        <button
          type="button"
          onClick={() => goTo(SECTION_IDS.home)}
          className={cn(
            "shrink-0 font-display text-xl font-semibold tracking-wide transition-colors",
            solid ? "text-primary" : "text-cream",
          )}
          aria-label="Back to top"
        >
          {wedding.groom[0]} <span className="font-script text-accent">&amp;</span> {wedding.bride[0]}
        </button>

        {/* Desktop links */}
        <ul className="ml-auto hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => goTo(link.id)}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-accent",
                  solid ? "text-foreground" : "text-cream/90",
                )}
              >
                {t(link.label)}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button size="sm" onClick={() => goTo(SECTION_IDS.rsvp)}>
            {t("RSVP")}
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <PrefsControls onLight={!solid} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn("grid h-10 w-10 place-items-center lg:hidden", solid ? "text-primary" : "text-cream")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — animates height via grid rows */}
      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-500 lg:hidden",
          open ? "grid-rows-[1fr] border-b border-border" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="flex max-h-[calc(100dvh-4.5rem)] flex-col overflow-y-auto px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => goTo(link.id)}
                  className="w-full border-b border-border/50 py-3.5 text-left text-base font-medium text-foreground transition-colors hover:text-accent"
                >
                  {t(link.label)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
