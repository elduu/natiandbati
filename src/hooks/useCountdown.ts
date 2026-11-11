import { useEffect, useState } from "react";

/** Live countdown to `target`, ticking every second. Clamps at zero once passed. */
export function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const remaining = Math.max(target.getTime() - now, 0);
  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}
