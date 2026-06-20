"use client";

import { useLang } from "@/app/lib/LangContext";
import { clinic } from "@/app/lib/clinic";

// Hero: an editorial text column + the doctor's portrait (face-forward trust).
// The page leads with the doctor; contacting (WhatsApp-first) lives in the
// contact section and the floating button, so the hero stays neutral.
export function Hero() {
  const { t, lang } = useLang();
  const name = clinic.doctorName[lang];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow__dot" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-title">
            {name}
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
            <a className="btn btn-lg" href="#contact">
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn-ghost btn-lg" href="#services">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="hero-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/doctor.webp"
              alt={t.hero.portraitAlt}
              width={760}
              height={950}
              fetchPriority="high"
            />
            <figcaption className="hero-portrait__badge">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.png" alt="" width={28} height={28} />
              <span>{clinic.clinicName[lang]}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
