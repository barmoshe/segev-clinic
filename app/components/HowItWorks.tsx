"use client";

import { useLang } from "@/app/lib/LangContext";

// How a visit works: a 4-step flow rendered as a connected timeline to reduce
// friction. The numbers carry the sequence; the connector is decorative.
export function HowItWorks() {
  const { t } = useLang();
  return (
    <section className="section" aria-labelledby="how-title">
      <div className="container">
        <p className="section-eyebrow">{t.eyebrows.steps}</p>
        <h2 id="how-title">{t.steps.title}</h2>
        <ol className="steps" role="list">
          {t.steps.items.map((step) => (
            <li key={step.n} className="step-card">
              <span className="step-num" aria-hidden="true">
                {step.n}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
