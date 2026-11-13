import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { SECTION_IDS } from "@/config/site";
import { usePrefs } from "@/hooks/usePrefs";
import { Modal } from "@/components/ui/Modal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const API_BASE = "https://apibase.inviteyours.com/api";
const WEDDING_SLUG = "natiandbati";
const WISHES_API = `${API_BASE}/${WEDDING_SLUG}/rsvp`;

/** With fewer cards than this, the scrolling row would show gaps, so the list is repeated. */
const MIN_MARQUEE_CARDS = 8;

interface Wish {
  id: string;
  name: string;
  text: string;
}

/** Accepts an array or { rsvps | wishes | data | items: [...] } and keeps entries that have a wish. */
function normalizeWishes(payload: unknown): Wish[] {
  const source = payload as any;
  const list: any[] = Array.isArray(payload)
    ? payload
    : (source?.rsvps ?? source?.wishes ?? source?.data ?? source?.items ?? []);

  if (!Array.isArray(list)) return [];

  return list
    .map((item, index) => ({
      id: String(item?.id ?? index),
      name: String(item?.name ?? "").trim(),
      text: String(item?.wish ?? item?.message ?? item?.text ?? "").trim(),
    }))
    .filter((wish) => wish.name && wish.text);
}

/** Scrolling card: the wish is cut after 3 lines and ends with "…". Guest text is shown as written. */
function WishCard({ name, text }: { name: string; text: string }) {
  return (
    <figure className="flex h-52 w-64 shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-card p-5 shadow-soft sm:h-56 sm:w-80 sm:p-6">
      <span className="font-display text-4xl leading-none text-accent/50" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="-mt-3 line-clamp-3 break-words text-sm leading-relaxed text-muted-foreground">
        {text}
      </blockquote>
      <figcaption className="mt-4 truncate font-script text-2xl text-primary">{name}</figcaption>
    </figure>
  );
}

export function Wishes() {
  const { t } = usePrefs();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(WISHES_API, { signal: controller.signal, cache: "no-store" });
        if (!response.ok) throw new Error("Request failed");
        setWishes(normalizeWishes(await response.json()));
      } catch (err) {
        if ((err as Error).name !== "AbortError") setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  // Repeat a short list so the row is always long enough to scroll smoothly.
  const base =
    wishes.length > 0 && wishes.length < MIN_MARQUEE_CARDS
      ? Array.from({ length: Math.ceil(MIN_MARQUEE_CARDS / wishes.length) }, () => wishes).flat()
      : wishes;

  return (
    <Section id={SECTION_IDS.wishes} tone="muted" bleed>
      <div className="px-5 sm:px-6">
        <SectionHeading
          eyebrow="From those we love"
          title="Warm Wishes"
          subtitle="Heartfelt messages from the people who mean the most to us."
        />
      </div>

      {loading && <p className="text-center text-sm text-muted-foreground">{t("Loading wishes...")}</p>}

      {!loading && error && (
        <p className="px-5 text-center text-sm text-muted-foreground">
          {t("Could not load the wishes. Please try again later.")}
        </p>
      )}

      {!loading && !error && wishes.length === 0 && (
        <p className="px-5 text-center text-sm text-muted-foreground">
          {t("No wishes yet. Be the first to send one in the RSVP section!")}
        </p>
      )}

      {wishes.length > 0 && (
        <>
          {/* Reduced-motion users get a swipeable row instead of the auto-scroll */}
          <div className="marquee-paused overflow-hidden motion-reduce:overflow-x-auto">
            <div className="flex w-max animate-marquee" style={{ "--marquee-duration": "50s" } as CSSProperties}>
              {/* Two identical halves so the -50% translate loops seamlessly; the copy is hidden from screen readers. */}
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex gap-4 pr-4 sm:gap-5 sm:pr-5"
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {base.map((wish, i) => (
                    <WishCard key={`${wish.id}-${i}`} name={wish.name} text={wish.text} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex justify-center px-5 sm:mt-9">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-accent bg-accent/10 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-accent/20 sm:px-6 sm:py-3 sm:text-sm"
            >
              {t("View all wishes")} ({wishes.length})
            </button>
          </div>
        </>
      )}

      {open && (
        <Modal label={t("All wishes")} onClose={close} overlayClassName="bg-black/85">
          <div className="max-h-[88svh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-background p-4 sm:p-6">
            <h3 className="mb-4 pr-8 font-display text-xl font-medium text-primary sm:text-2xl">
              {t("All wishes")} ({wishes.length})
            </h3>

            <div className="divide-y divide-border">
              {wishes.map((wish, i) => (
                <article key={`${wish.id}-${i}`} className="py-4 sm:py-5">
                  <h4 className="break-words font-script text-2xl text-primary">{wish.name}</h4>
                  <p className="mt-1 whitespace-pre-line break-words text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {wish.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
}