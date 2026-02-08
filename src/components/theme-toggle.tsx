"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

type ThemePreference = "light" | "dark" | "system";

const STORAGE_KEY = "theme-preference";
const QUERY = "(prefers-color-scheme: dark)";
const THEME_EVENT = "theme-preference-change";

const isThemePreference = (value: string | null): value is ThemePreference =>
  value === "light" || value === "dark" || value === "system";

const getStoredPreference = (): ThemePreference => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return isThemePreference(saved) ? saved : "system";
};

const getServerSnapshot = (): ThemePreference => "system";

const getClientSnapshot = (): ThemePreference => getStoredPreference();

const subscribeToPreferenceChanges = (onStoreChange: () => void) => {
  const mediaQueryList = window.matchMedia(QUERY);

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleThemePreferenceEvent = () => onStoreChange();

  const handleSystemThemeChange = () => {
    if (getStoredPreference() === "system") {
      applyTheme("system");
      onStoreChange();
    }
  };

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener(THEME_EVENT, handleThemePreferenceEvent);
  mediaQueryList.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener(THEME_EVENT, handleThemePreferenceEvent);
    mediaQueryList.removeEventListener("change", handleSystemThemeChange);
  };
};

const resolveSystemTheme = () => (window.matchMedia(QUERY).matches ? "dark" : "light");

const applyTheme = (preference: ThemePreference) => {
  const resolvedTheme = preference === "system" ? resolveSystemTheme() : preference;
  document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  document.documentElement.setAttribute("data-theme", preference);
};

export function ThemeToggle() {
  const preference = useSyncExternalStore(
    subscribeToPreferenceChanges,
    getClientSnapshot,
    getServerSnapshot,
  );
  const isFirstEffectRun = useRef(true);

  useEffect(() => {
    if (isFirstEffectRun.current) {
      isFirstEffectRun.current = false;
      applyTheme(getStoredPreference());
      return;
    }
    applyTheme(preference);
  }, [preference]);

  const updatePreference = (nextPreference: ThemePreference) => {
    localStorage.setItem(STORAGE_KEY, nextPreference);
    applyTheme(nextPreference);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const options: { value: ThemePreference; label: string }[] = [
    { value: "light", label: "Claro" },
    { value: "dark", label: "Oscuro" },
    { value: "system", label: "Sistema" },
  ];

  return (
    <div
      className="border-outline bg-background inline-flex items-center gap-1 rounded-full border p-1"
      role="group"
      aria-label="Seleccion de tema"
    >
      {options.map((option) => {
        const active = option.value === preference;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => updatePreference(option.value)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted hover:bg-surface hover:text-foreground"
            }`}
            aria-pressed={active}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
