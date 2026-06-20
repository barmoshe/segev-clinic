"use client";

import { useLang } from "@/app/lib/LangContext";

// About: a short, human bio that builds trust. Placeholder copy, no real claims.
export function About() {
  const { t } = useLang();
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="container narrow">
        <p className="section-eyebrow">{t.eyebrows.about}</p>
        <h2 id="about-title">{t.about.title}</h2>
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
