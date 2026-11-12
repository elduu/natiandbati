import { navLinks, socials, wedding } from "@/config/site";
import { usePrefs } from "@/hooks/usePrefs";
import { scrollToSection } from "@/utils/scroll";

export function Footer() {
  const { t } = usePrefs();

  return (
    <footer className="relative overflow-hidden bg-primary px-5 py-14 text-cream sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-script text-4xl text-tan">
          {wedding.groom} &amp; {wedding.bride}
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-cream/70">{wedding.dateLabel}</p>
        <p className="mt-1 text-sm text-cream/60">{wedding.hashtag}</p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-1" aria-label="Footer">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="py-2 text-sm text-cream/80 transition-colors hover:text-tan"
            >
              {t(link.label)}
            </button>
          ))}
        </nav>

        <div className="mt-6 flex items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-tan hover:text-tan"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-1 text-sm text-cream/70 sm:flex-row sm:justify-center sm:gap-3">
          <a href={`mailto:${wedding.contact.email}`} className="break-all hover:text-tan">
            {wedding.contact.email}
          </a>
          <span className="hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <a href={`tel:${wedding.contact.phone}`} className="hover:text-tan">
            {wedding.contact.phone}
          </a>
        </div>

        <div className="mt-10 border-t border-cream/15 pt-6 text-xs text-cream/50">
          © {new Date().getFullYear()} {wedding.bride} &amp; {wedding.groom}. {t("Made with love.")}
        </div>
      </div>
    </footer>
  );
}
