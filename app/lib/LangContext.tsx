"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Dict, type Lang, DIR, getDict } from "./i18n";

/**
 * Language provider for the clinic page. English is the canonical/default
 * language; Hebrew is the toggle. Cooperates with the inline pre-paint script
 * (app/lib/prepaint.ts), which resolves `clinic:lang` from localStorage (default
 * "en"), sets <html lang/dir> before paint, and seeds `window.__clinicLang` so
 * React reconciles to the right language with no flash.
 */

const STORAGE_KEY = "clinic:lang";

type LangContextValue = {
  t: Dict;
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (next: Lang) => void;
};

const Ctx = createContext<LangContextValue | null>(null);

// Resolve the language the client should display: prefer the pre-paint-seeded
// value, then localStorage, then the SSR-supplied fallback (the canonical "en").
function readClientLang(fallback: Lang): Lang {
  if (typeof window === "undefined") return fallback;
  const seeded = window.__clinicLang;
  if (seeded === "en" || seeded === "he") return seeded;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "he") return stored;
  } catch {
    /* ignore */
  }
  return fallback;
}

function persist(lang: Lang): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

function applyToDocument(lang: Lang, dict: Dict): void {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = DIR[lang];
  document.title = dict.meta.title;
  const meta = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );
  if (meta) meta.content = dict.meta.description;
}

export function LangProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  // Start from the SSR canonical language so server and first client render agree,
  // then reconcile with the pre-paint-resolved client language.
  const [lang, setLang] = useState<Lang>(initialLang);
  const dict = getDict(lang);

  useEffect(() => {
    const resolved = readClientLang(initialLang);
    // The client language is seeded by the pre-paint script and read post-mount
    // (not available during SSR), so this in-effect setState is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLang((cur) => (cur === resolved ? cur : resolved));
  }, [initialLang]);

  useEffect(() => {
    applyToDocument(lang, dict);
  }, [lang, dict]);

  const setLangAndPersist = useCallback((next: Lang) => {
    setLang(next);
    persist(next);
  }, []);

  const value = useMemo<LangContextValue>(
    () => ({ t: dict, lang, dir: DIR[lang], setLang: setLangAndPersist }),
    [dict, lang, setLangAndPersist],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
