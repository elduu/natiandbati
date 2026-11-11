import { hero } from "@/assets/images";
import { wedding } from "@/config/site";
import { usePrefs } from "@/hooks/usePrefs";
import { Button } from "@/components/ui/Button";
import { MailOpenIcon } from "@/components/ui/icons";

/** Full-screen "envelope" shown before the guest opens the site (also unlocks audio playback). */
export function Invitation({ onOpen }: { onOpen: () => void }) {
  const { t, lang, setLang } = usePrefs();

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center bg-background px-6 py-16 text-center text-foreground">
      <button
        type="button"
        className="absolute right-4 top-4 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary sm:right-5 sm:top-5"
        onClick={() => setLang(lang === "en" ? "am" : "en")}
        aria-label="Switch language"
      >
        {lang === "en" ? "አማርኛ" : "English"}
      </button>

      <p className="mb-7 text-xs uppercase tracking-widest text-muted-foreground">{t("Together with our families")}</p>

      <div className="relative h-56 w-48 overflow-hidden rounded-t-full border border-accent/40 p-1 sm:h-64 sm:w-56">
        <img
          src={hero}
          alt={`${wedding.bride} & ${wedding.groom}`}
          className="h-full w-full rounded-t-full object-cover"
          fetchPriority="high"
        />
      </div>

      <p className="mt-7 font-script text-3xl text-primary">{t("You're invited")}</p>
      <h1 className="mt-3 flex flex-wrap items-baseline justify-center gap-x-3 font-display text-5xl leading-tight sm:text-6xl">
        <span>{wedding.bride}</span>
        <span className="font-script text-accent">&amp;</span>
        <span>{wedding.groom}</span>
      </h1>
      <div className="my-6 h-px w-16 bg-accent" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">{wedding.dateLabel}</p>
      <p className="mt-2 font-display text-xl">{wedding.venue.name}</p>

      <Button variant="solid" size="lg" onClick={onOpen} className="mt-9 max-w-full whitespace-normal">
        <MailOpenIcon size={22} />
        {t("Open invitation")}
      </Button>
    </main>
  );
}
