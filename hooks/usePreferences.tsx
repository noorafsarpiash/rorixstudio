"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "midnight" | "silver" | "pearl";
type Language = "en" | "ar";
type Currency = "AED" | "USD" | "EUR" | "GBP";

interface PreferencesContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  lang: Language;
  setLang: (l: Language) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("midnight");
  const [lang, setLang] = useState<Language>("en");
  const [currency, setCurrency] = useState<Currency>("AED");

  // Load from local storage
  useEffect(() => {
    const t = localStorage.getItem("rorix_theme") as Theme;
    const l = localStorage.getItem("rorix_lang") as Language;
    const c = localStorage.getItem("rorix_currency") as Currency;
    if (t) setTheme(t);
    if (l) setLang(l);
    if (c) setCurrency(c);
  }, []);

  // Update DOM / local storage on change
  useEffect(() => {
    localStorage.setItem("rorix_theme", theme);
    document.documentElement.removeAttribute("data-theme");
    if (theme !== "midnight") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("rorix_lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("rorix_currency", currency);
  }, [currency]);

  return (
    <PreferencesContext.Provider value={{ theme, setTheme, lang, setLang, currency, setCurrency }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
}
