"use client";

import { useRef, type KeyboardEvent } from "react";
import { useLang } from "@/app/lib/LangContext";
import { LANGS, type Lang } from "@/app/lib/i18n";

// Accessible segmented language switch. Each button carries its own `lang`
// attribute (its endonym per WCAG 3.1.2 Language of Parts) so assistive tech
// pronounces "עברית" correctly even when the page is English, and vice versa.
// Roving tabindex + arrow keys; the wrapper stays a non-interactive role="group".

const OTHER: Record<Lang, Lang> = { en: "he", he: "en" };

export function LangToggle() {
  const { lang, setLang, t } = useLang();
  const refs = useRef<Record<Lang, HTMLButtonElement | null>>({
    en: null,
    he: null,
  });

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next = OTHER[lang];
    setLang(next);
    requestAnimationFrame(() => refs.current[next]?.focus());
  };

  const labels: Record<Lang, string> = {
    en: t.langToggle.enLabel,
    he: t.langToggle.heLabel,
  };

  return (
    <div className="lang-toggle" role="group" aria-label={t.langToggle.groupLabel}>
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            ref={(el) => {
              refs.current[code] = el;
            }}
            type="button"
            className={"lang-toggle__btn" + (active ? " is-active" : "")}
            aria-pressed={active}
            tabIndex={active ? 0 : -1}
            lang={code}
            onClick={() => setLang(code)}
            onKeyDown={onKeyDown}
          >
            {labels[code]}
          </button>
        );
      })}
      <span className="visually-hidden" aria-live="polite">
        {t.langToggle.switchedTo}
      </span>
    </div>
  );
}
