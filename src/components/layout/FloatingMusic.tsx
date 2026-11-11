import type { BackgroundMusic } from "@/hooks/useBackgroundMusic";
import { usePrefs } from "@/hooks/usePrefs";
import { cn } from "@/utils/cn";
import { MusicIcon } from "@/components/ui/icons";

export function FloatingMusic({ music }: { music: Pick<BackgroundMusic, "playing" | "toggle"> }) {
  const { t } = usePrefs();
  const label = music.playing ? t("Pause music") : t("Play music");

  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 sm:bottom-8 sm:right-8">
      <button
        type="button"
        onClick={music.toggle}
        aria-pressed={music.playing}
        aria-label={label}
        title={label}
        className={cn(
          "group relative grid h-14 w-14 place-items-center rounded-full border shadow-elegant backdrop-blur-md transition-all duration-300 hover:scale-105 motion-reduce:transition-none",
          music.playing
            ? "border-transparent bg-linear-to-br from-accent to-tan text-accent-foreground"
            : "border-border bg-background/85 text-foreground hover:border-accent hover:text-accent",
        )}
      >
        {music.playing && (
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/25 motion-reduce:animate-none" aria-hidden="true" />
        )}

        {music.playing ? (
          <span className="relative flex h-5 items-end gap-[3px]" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="animate-eq h-full w-[3px] rounded-full bg-current" style={{ animationDelay: `${i * 0.16}s` }} />
            ))}
          </span>
        ) : (
          <MusicIcon size={22} />
        )}

        {/* Tooltip — only meaningful where hover exists */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-medium text-foreground opacity-0 shadow-soft backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
          {label}
        </span>
      </button>
    </div>
  );
}
