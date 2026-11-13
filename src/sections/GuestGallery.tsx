import { useCallback, useEffect, useState } from "react";
import { SECTION_IDS } from "@/config/site";
import { usePrefs } from "@/hooks/usePrefs";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

// TODO: your Telegram bot link, for example "https://t.me/NatiAndBatiBot"
const BOT_URL = "https://t.me/YOUR_BOT_USERNAME";

const API_BASE = "https://apibase.inviteyours.com/api";
const WEDDING_SLUG = "natiandbati";
const PHOTOS_API = `${API_BASE}/${WEDDING_SLUG}/photos`;

interface GuestPhoto {
  id: string;
  url: string;
  sender: string;
}

/** Accepts an array or { photos | data | images: [...] }. Each item needs an image link. */
function normalizePhotos(payload: unknown): GuestPhoto[] {
  const source = payload as any;
  const list: unknown[] = Array.isArray(payload)
    ? payload
    : Array.isArray(source?.photos)
      ? source.photos
      : Array.isArray(source?.data)
        ? source.data
        : Array.isArray(source?.images)
          ? source.images
          : [];

  return list
    .map((item, index) => {
      const entry = item as any;
      const url =
        typeof item === "string"
          ? item
          : (entry?.image_url ?? entry?.url ?? entry?.secure_url ?? entry?.photo_url ?? entry?.src ?? "");
      return {
        id: String(entry?.id ?? index),
        url: String(url),
        sender: String(entry?.sender ?? "").trim(),
      };
    })
    .filter((photo) => photo.url);
}

async function downloadPhoto(url: string, index: number) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Download failed");
    const blob = await response.blob();
    const extension = blob.type.split("/")[1]?.replace("jpeg", "jpg") || "jpg";
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = `wedding-photo-${index + 1}.${extension}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  } catch {
    // If the image host blocks the download, open the picture in a new tab instead.
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

/** Guests send photos to our Telegram bot; this section links to the bot and shows every photo sent. */
export function GuestGallery() {
  const { t } = usePrefs();
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<GuestPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  // Load the photos each time the viewer is opened, so the list is always fresh.
  useEffect(() => {
    if (!open) return;
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(PHOTOS_API, { signal: controller.signal, cache: "no-store" });
        if (!response.ok) throw new Error("Request failed");
        setPhotos(normalizePhotos(await response.json()));
      } catch (err) {
        if ((err as Error).name !== "AbortError") setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [open]);

  return (
    <Section id={SECTION_IDS.guestGallery}>
      <SectionHeading
        eyebrow="Share the joy"
        title="Guest Gallery"
        subtitle="Captured a moment you love? Send your photos to our Telegram bot and they will appear here."
      />

      <Reveal className="mx-auto max-w-xl rounded-2xl border border-accent/40 bg-secondary/30 px-5 py-8 text-center sm:rounded-3xl sm:px-10 sm:py-10">
        <p className="text-base font-medium text-primary sm:text-lg">{t("Share your photos")}</p>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground sm:text-base">
          {t("Tap the button, open our Telegram bot and send your photos. Then come back to see everyone's.")}
        </p>

        <div className="mt-5 flex flex-col items-center gap-2.5 sm:mt-6 sm:flex-row sm:justify-center sm:gap-3">
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-wider text-primary-foreground shadow-soft transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
          >
            {t("Send photos on Telegram")}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex w-fit items-center justify-center rounded-full border border-accent bg-accent/10 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-accent/20 sm:px-6 sm:py-3 sm:text-sm"
          >
            {t("View all photos")}
          </button>
        </div>
      </Reveal>

      {open && (
        <Modal label={t("Guest photos")} onClose={close} overlayClassName="bg-black/85">
          <div className="max-h-[88svh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-background p-3 sm:p-6">
            <h3 className="mb-4 pr-8 font-display text-xl font-medium text-primary sm:text-2xl">
              {t("Guest photos")}
              {photos.length > 0 ? ` (${photos.length})` : ""}
            </h3>

            {loading && <p className="py-12 text-center text-sm text-muted-foreground">{t("Loading photos...")}</p>}

            {error && !loading && (
              <p className="py-12 text-center text-sm text-muted-foreground">
                {t("Could not load the photos. Please try again later.")}
              </p>
            )}

            {!loading && !error && photos.length === 0 && (
              <p className="py-12 text-center text-sm text-muted-foreground">
                {t("No photos have been shared yet. Be the first!")}
              </p>
            )}

            <div className="flex flex-col gap-6 sm:gap-8">
              {photos.map((photo, index) => (
                <figure key={`${photo.id}-${index}`} className="flex flex-col gap-2 sm:gap-3">
                  <img
                    src={photo.url}
                    alt={photo.sender ? `${t("Photo shared by")} ${photo.sender}` : `${t("Guest photo")} ${index + 1}`}
                    loading="lazy"
                    className="h-auto w-full rounded-xl bg-secondary/30 object-contain"
                  />
                  <figcaption className="flex items-center justify-between gap-3">
                    <p className="min-w-0 truncate text-xs text-muted-foreground sm:text-sm">
                      {photo.sender ? (
                        <>
                          {t("Shared by")} <span className="font-medium text-foreground">{photo.sender}</span>
                        </>
                      ) : null}
                    </p>
                    <button
                      type="button"
                      onClick={() => downloadPhoto(photo.url, index)}
                      className="shrink-0 rounded-full border border-accent px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-accent/15 sm:text-sm"
                    >
                      {t("Download")}
                    </button>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
}