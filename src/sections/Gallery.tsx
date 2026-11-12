import { useCallback, useRef, useState } from "react";
import { SECTION_IDS } from "@/config/site";
import { Lightbox } from "@/components/ui/Lightbox";
import { ZoomInIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import image1 from "@/assets/image_1.webp";
import image2 from "@/assets/image_2.webp";
import image3 from "@/assets/image_3.webp";
import image4 from "@/assets/image_4.webp";
import image5 from "@/assets/image_5.webp";
import image6 from "@/assets/image_6.webp";
import image7 from "@/assets/image_7.webp";
import image8 from "@/assets/image_8.webp";
import image9 from "@/assets/image_9.webp";
import image10 from "@/assets/image_10.webp";
import image11 from "@/assets/image_11.webp";
import image12 from "@/assets/image_12.webp";
import image13 from "@/assets/image_13.webp";
import image14 from "@/assets/image_14.webp";
import image15 from "@/assets/image_15.webp";
import image16 from "@/assets/image_16.webp";
import image17 from "@/assets/image_17.webp";
import image18 from "@/assets/image_18.webp";

/** How many photos show before "See all photos" is tapped. */
const INITIAL_COUNT = 10;

// Delete or comment out a line to remove that photo from the gallery.
const galleryPhotos = [
  { src: image1, alt: "Wedding photo 1" },
  { src: image2, alt: "Wedding photo 2" },
  { src: image3, alt: "Wedding photo 3" },
  { src: image4, alt: "Wedding photo 4" },
  { src: image5, alt: "Wedding photo 5" },
  { src: image6, alt: "Wedding photo 6" },
  { src: image7, alt: "Wedding photo 7" },
  { src: image8, alt: "Wedding photo 8" },
  { src: image9, alt: "Wedding photo 9" },
  { src: image10, alt: "Wedding photo 10" },
  { src: image11, alt: "Wedding photo 11" },
  { src: image12, alt: "Wedding photo 12" },
  { src: image13, alt: "Wedding photo 13" },
  { src: image14, alt: "Wedding photo 14" },
  { src: image15, alt: "Wedding photo 15" },
  { src: image16, alt: "Wedding photo 16" },
  { src: image17, alt: "Wedding photo 17" },
  { src: image18, alt: "Wedding photo 18" },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpenIndex(null), []);

  const visiblePhotos = showAll ? galleryPhotos : galleryPhotos.slice(0, INITIAL_COUNT);
  const hasMore = galleryPhotos.length > INITIAL_COUNT;

  function toggleShowAll() {
    setShowAll((value) => !value);
    // After collapsing, bring the top of the gallery back into view.
    if (showAll) topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Section id={SECTION_IDS.gallery}>
      <div ref={topRef} className="scroll-mt-20">
        <SectionHeading
          eyebrow="Captured moments"
          title="Our Gallery"
          subtitle="A collection of memories, frozen in time and forever cherished."
        />
      </div>

      {/* Masonry: 2 columns on phones, 3 from `md`. Photos keep their own shape, so nothing is cropped. */}
      <Reveal className="columns-2 gap-3 sm:gap-4 md:columns-3">
        {visiblePhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl bg-secondary/40 shadow-soft sm:mb-4 sm:rounded-2xl"
            aria-label={`Open image: ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
            />
            <span
              className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors group-hover:bg-primary/30"
              aria-hidden="true"
            >
              <span className="scale-0 text-cream transition-transform duration-300 group-hover:scale-100">
                <ZoomInIcon size={32} />
              </span>
            </span>
          </button>
        ))}
      </Reveal>

      {hasMore && (
        <div className="mt-6 flex justify-center sm:mt-8">
          <button
            type="button"
            onClick={toggleShowAll}
            aria-expanded={showAll}
            className="inline-flex items-center justify-center rounded-full border border-accent bg-accent/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-accent/20 sm:px-8 sm:py-3 sm:text-sm"
          >
            {showAll ? "Show less" : `See all photos (${galleryPhotos.length})`}
          </button>
        </div>
      )}

      {openIndex !== null && (
        <Lightbox photos={galleryPhotos} index={openIndex} onIndexChange={setOpenIndex} onClose={close} />
      )}
    </Section>
  );
}