"use client";

import { useLang } from "@/app/lib/LangContext";

// FAQ: accessible accordion using native <details>/<summary> (keyboard- and
// screen-reader-friendly without custom JS).
export function Faq() {
  const { t } = useLang();
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container narrow">
        <h2 id="faq-title">{t.faq.title}</h2>
        <div className="faq-list">
          {t.faq.items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
