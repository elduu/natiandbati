import { useCallback, useEffect, useRef } from "react";
import type { Photo } from "@/data/content";
import { Modal } from "./Modal";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface LightboxProps {
  photos: Photo[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_THRESHOLD_PX = 50;

/** Fullscreen photo viewer with keyboard, button and touch-swipe navigation. */
export function Lightbox({ photos, index, onIndexChange, onClose }: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const count = photos.length;

  const prev = useCallback(() => onIndexChange((index + count - 1) % count), [index, count, onIndexChange]);
  const next = useCallback(() => onIndexChange((index + 1) % count), [index, count, onIndexChange]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prev, next]);

  const photo = photos[index];
  const arrow =
    "grid h-12 w-12 place-items-center rounded-full text-cream/80 transition-colors hover:bg-white/10 hover:text-cream";

  return (
    <Modal label="Image viewer" onClose={onClose}>
      {/* Side arrows: tablet and up */}
      <button type="button" onClick={prev} className={`${arrow} absolute left-4 top-1/2 hidden -translate-y-1/2 sm:grid lg:left-8`} aria-label="Previous photo">
        <ChevronLeftIcon size={40} />
      </button>
      <button type="button" onClick={next} className={`${arrow} absolute right-4 top-1/2 hidden -translate-y-1/2 sm:grid lg:right-8`} aria-label="Next photo">
        <ChevronRightIcon size={40} />
      </button>

      <img
        src={photo.src}
        alt={photo.alt}
        className="max-h-[78dvh] max-w-full rounded-xl object-contain shadow-elegant sm:max-w-[80vw]"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(dx) > SWIPE_THRESHOLD_PX) (dx > 0 ? prev : next)();
        }}
      />

      {/* Bottom bar: counter + arrows on phones */}
      <div className="mt-4 flex items-center gap-4 text-cream/80">
        <button type="button" onClick={prev} className={`${arrow} sm:hidden`} aria-label="Previous photo">
          <ChevronLeftIcon size={32} />
        </button>
        <span className="min-w-12 text-center text-sm tabular-nums" aria-live="polite">
          {index + 1} / {count}
        </span>
        <button type="button" onClick={next} className={`${arrow} sm:hidden`} aria-label="Next photo">
          <ChevronRightIcon size={32} />
        </button>
      </div>
    </Modal>
  );
}
