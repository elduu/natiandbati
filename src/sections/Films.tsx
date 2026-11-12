import { useCallback, useState } from "react";
import hero from "@/assets/image_4.webp";
import { SECTION_IDS } from "@/config/site";
import { Modal } from "@/components/ui/Modal";
import { PlayIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

// TODO: paste the Cloudinary VIDEO link here, for example:
// "https://res.cloudinary.com/dabc123/video/upload/v1700000000/weddings/engagement.mp4"
const VIDEO_URL = "https://res.cloudinary.com/dkfawrhqz/video/upload/v1794478519/Img_1751_1_gml9on.mp4";

// Cloudinary delivers the film in the best format and quality for each guest.
const PLAY_URL = VIDEO_URL.replace("/video/upload/", "/video/upload/f_auto,q_auto/");

// The cover is an image. To use a Cloudinary image instead, put its link here as a string.
const POSTER_URL: string = hero;

const video = {
  title: "Engagement",
  label: "Our engagement film",
};

export function Films() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <Section id={SECTION_IDS.films} tone="dark" width="5xl">
      <SectionHeading
        eyebrow="In motion"
        title="Our Films"
        subtitle="Some moments are best remembered in motion. Press play and relive them with us."
        light
      />

      <Reveal className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full overflow-hidden rounded-3xl shadow-elegant"
          aria-label={`Play ${video.title}`}
        >
          <img
            src={POSTER_URL}
            alt=""
            loading="lazy"
            className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-primary/40 transition-colors group-hover:bg-primary/25" aria-hidden="true" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 sm:gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-cream/90 text-primary shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
              <PlayIcon size={24} />
            </span>
            <span className="font-display text-xl font-medium text-cream sm:text-2xl">{video.title}</span>
            <span className="text-sm text-cream/70">{video.label}</span>
          </span>
        </button>
      </Reveal>

      {open && (
        <Modal label="Video player" onClose={close} overlayClassName="bg-black/85">
          <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-elegant">
            <video
              className="h-full w-full"
              src={PLAY_URL}
              poster={POSTER_URL}
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              Your browser does not support video playback.
            </video>
          </div>
        </Modal>
      )}
    </Section>
  );
}