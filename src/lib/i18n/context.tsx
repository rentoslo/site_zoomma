"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCALE,
  Dictionary,
  Locale,
  LOCALES,
  detectLocale,
  dictionaries,
} from "./dictionaries";

const COOKIE_NAME = "zoomma_lang";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale?: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? DEFAULT_LOCALE);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fromCookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${COOKIE_NAME}=`))
      ?.split("=")[1];

    if (fromCookie && LOCALES.includes(fromCookie as Locale)) {
      setLocaleState(fromCookie as Locale);
      document.documentElement.lang = fromCookie === "pt-BR" ? "pt-BR" : fromCookie;
      return;
    }

    const url = new URL(window.location.href);
    const fromQuery = url.searchParams.get("lang");
    if (fromQuery) {
      const detected = detectLocale(fromQuery);
      setLocaleState(detected);
      document.cookie = `${COOKIE_NAME}=${detected}; path=/; max-age=${60 * 60 * 24 * 180}; SameSite=Lax`;
      document.documentElement.lang = detected === "pt-BR" ? "pt-BR" : detected;
      return;
    }

    const browser = navigator.language || (navigator.languages && navigator.languages[0]);
    const detected = detectLocale(browser);
    setLocaleState(detected);
    document.documentElement.lang = detected === "pt-BR" ? "pt-BR" : detected;
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof document !== "undefined") {
      document.cookie = `${COOKIE_NAME}=${l}; path=/; max-age=${60 * 60 * 24 * 180}; SameSite=Lax`;
      document.documentElement.lang = l === "pt-BR" ? "pt-BR" : l;
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
