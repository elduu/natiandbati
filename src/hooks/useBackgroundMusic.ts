import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Soft romantic arpeggio synthesised in the browser with the Web Audio API,
 * so no audio file needs to be shipped.
 */
const CHORDS = [
  [261.63, 329.63, 392.0, 523.25], // C
  [220.0, 261.63, 329.63, 440.0], // Am
  [174.61, 220.0, 261.63, 349.23], // F
  [196.0, 246.94, 293.66, 392.0], // G
];
const ARPEGGIO = [0, 1, 2, 3, 2, 1, 2, 3];
const NOTE_INTERVAL_MS = 400;

export function useBackgroundMusic() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    timerRef.current = null;
    void audioRef.current?.close();
    audioRef.current = null;
    setPlaying(false);
  }, []);

  const start = useCallback(() => {
    if (audioRef.current) return;

    const audio = new AudioContext();
    audioRef.current = audio;

    const master = audio.createGain();
    master.gain.value = 0.12;
    master.connect(audio.destination);

    const playNote = (frequency: number, at: number) => {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = "sine";
      osc.frequency.value = frequency;
      gain.gain.setValueAtTime(0, at);
      gain.gain.linearRampToValueAtTime(0.5, at + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, at + 2.4);
      osc.connect(gain).connect(master);
      osc.start(at);
      osc.stop(at + 2.5);
    };

    let step = 0;
    const tick = () => {
      const chord = CHORDS[Math.floor(step / ARPEGGIO.length) % CHORDS.length];
      const at = audio.currentTime + 0.02;
      playNote(chord[ARPEGGIO[step % ARPEGGIO.length]], at);
      if (step % ARPEGGIO.length === 0) playNote(chord[0] / 2, at); // bass note on the downbeat
      step++;
    };

    tick();
    timerRef.current = window.setInterval(tick, NOTE_INTERVAL_MS);

    audio
      .resume()
      .then(() => {
        if (audioRef.current === audio) setPlaying(audio.state === "running");
      })
      .catch(stop);
  }, [stop]);

  const toggle = useCallback(() => (audioRef.current ? stop() : start()), [start, stop]);

  // Release the audio context when the app unmounts.
  useEffect(() => stop, [stop]);

  return { playing, start, stop, toggle };
}

export type BackgroundMusic = ReturnType<typeof useBackgroundMusic>;
