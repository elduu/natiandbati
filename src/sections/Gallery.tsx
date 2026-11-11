import { useCallback, useState } from "react";
import { SECTION_IDS } from "@/config/site";
import { galleryPhotos } from "@/data/content";
import { Lightbox } from "@/components/ui/Lightbox";
import { ZoomInIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <Section id={SECTION_IDS.gallery}>
      <SectionHeading
        eyebrow="Captured moments"
        title="Our Gallery"
        subtitle="A collection of memories, frozen in time and forever cherished."
      />

      {/* Masonry: 2 columns on phones, 3 from `md` */}
      <Reveal className="columns-2 gap-3 sm:gap-4 md:columns-3">
        {galleryPhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft sm:mb-4"
            aria-label={`Open image: ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
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

      {openIndex !== null && (
        <Lightbox photos={galleryPhotos} index={openIndex} onIndexChange={setOpenIndex} onClose={close} />
      )}
    </Section>
  );
}
