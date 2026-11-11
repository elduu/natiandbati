import { useContext } from "react";
import { PrefsContext } from "@/context/PrefsContext";

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used inside <PrefsProvider>");
  return ctx;
}
