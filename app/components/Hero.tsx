"use client";

import { useLang } from "@/app/lib/LangContext";
import { clinic } from "@/app/lib/clinic";
import { defaultWhatsAppHref } from "@/app/lib/contact";
import { WhatsAppGlyph } from "./icons";

// Hero: name, role, a one-line trust promise, a trust-chip row, a primary
// WhatsApp CTA and a secondary anchor to the services section.
export function Hero() {
  const { t, lang } = useLang();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="hero-eyebrow">{t.hero.eyebrow}</p>
        <h1 id="hero-title" className="hero-title">
          {clinic.doctorName[lang]}
        </h1>
        <p className="hero-promise">{t.hero.promise}</p>

        <ul className="hero-trust" role="list">
          {t.hero.trust.map((item) => (
            <li key={item} className="hero-trust__item">
              {item}
            </li>
          ))}
        </ul>

        <div className="hero-actions">
          <a
            className="btn btn-whatsapp"
            href={defaultWhatsAppHref(t)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppGlyph />
            <span>{t.hero.ctaPrimary}</span>
          </a>
          <a className="btn btn-ghost" href="#services">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
