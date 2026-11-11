import type { CSSProperties } from "react";
import { marqueePhotos } from "@/data/content";

export function GalleryMarquee() {
  // Duplicated so the -50% translate loops seamlessly.
  const items = [...marqueePhotos, ...marqueePhotos];

  return (
    <section className="marquee-paused overflow-hidden bg-secondary/40 py-8 sm:py-10" aria-label="Photo marquee">
      <div className="flex w-max animate-marquee gap-3 sm:gap-4" style={{ "--marquee-duration": "45s" } as CSSProperties}>
        {items.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            aria-hidden={i >= marqueePhotos.length}
            className="h-40 w-60 shrink-0 rounded-2xl object-cover shadow-soft sm:h-64 sm:w-96"
          />
        ))}
      </div>
    </section>
  );
}
