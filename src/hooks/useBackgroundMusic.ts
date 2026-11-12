import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Plays the wedding song stored in the project's `public` folder.
 * The file must be at: public/m.mp3
 * (In the code the address has no "public" in it: Vite serves that folder from the site's root.)
 */
const MUSIC_SRC = `${import.meta.env.BASE_URL}music.m4a`;

export function useBackgroundMusic(src: string = MUSIC_SRC) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // The audio element is created on the first start, so the file is not downloaded before it is needed.
  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(src);
      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0.8; // 0 = silent, 1 = full volume
      // Keep `playing` in step with the real state (also when the phone's media controls pause it).
      audio.addEventListener("play", () => setPlaying(true));
      audio.addEventListener("pause", () => setPlaying(false));
      audio.addEventListener("error", () => {
        console.error("[music] The file could not be loaded:", src, audio.error);
        setPlaying(false);
      });
      audioRef.current = audio;
    }
    return audioRef.current;
  }, [src]);

  /** Must be called straight from a tap/click handler, or the browser will block the sound. */
  const start = useCallback(() => {
    getAudio()
      .play()
      .catch((error) => {
        console.error("[music] play() was blocked or failed:", error);
        setPlaying(false);
      });
  }, [getAudio]);

  const stop = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (audio && !audio.paused) stop();
    else start();
  }, [start, stop]);

  // Stop the music when the app unmounts.
  useEffect(
    () => () => {
      audioRef.current?.pause();
      audioRef.current = null;
    },
    [],
  );

  return { playing, start, stop, toggle };
}

export type BackgroundMusic = ReturnType<typeof useBackgroundMusic>;