import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { amharic, type Lang } from "@/i18n/translations";
import { readStorage, writeStorage } from "@/utils/storage";

export type Theme = "light" | "dark";

export interface Prefs {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  /** Translates an English source string into the active language. */
  t: (text: string) => string;
}

export const PrefsContext = createContext<Prefs | null>(null);

function loadLang(): Lang {
  const stored = readStorage("lang");
  return stored === "am" || stored === "en" ? stored : "en";
}

function loadTheme(): Theme {
  const stored = readStorage("theme");
  return stored === "dark" || stored === "light" ? stored : "light";
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(loadLang);
  const [theme, setThemeState] = useState<Theme>(loadTheme);

  // Reflect preferences on <html> so Tailwind's `dark` variant and `lang` attribute work.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = lang;
  }, [theme, lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    writeStorage("lang", next);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    writeStorage("theme", next);
  }, []);

  const t = useCallback((text: string) => (lang === "am" ? (amharic[text] ?? text) : text), [lang]);

  const value = useMemo(() => ({ lang, setLang, theme, setTheme, t }), [lang, setLang, theme, setTheme, t]);

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}
