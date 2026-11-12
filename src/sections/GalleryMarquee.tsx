import type { CSSProperties } from "react";

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

// Delete or comment out a line to remove that photo from the scrolling strip.
const marqueePhotos = [
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

export function GalleryMarquee() {
  return (
    <section className="marquee-paused overflow-hidden bg-secondary/40 py-8 sm:py-10" aria-label="Photo marquee">
      <div className="flex w-max animate-marquee" style={{ "--marquee-duration": "45s" } as CSSProperties}>
        {/* Two identical halves so the -50% translate loops seamlessly; the copy is hidden from screen readers. */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={copy === 1 ? true : undefined}>
            {marqueePhotos.map((photo, index) => (
              <img
                key={index}
                src={photo.src}
                alt={copy === 0 ? photo.alt : ""}
                loading="lazy"
                draggable={false}
                className="h-40 w-60 shrink-0 rounded-2xl object-cover shadow-soft sm:h-64 sm:w-96"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}