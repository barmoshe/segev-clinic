"use client";

import { useLang } from "@/app/lib/LangContext";
import { Icon } from "./icons";

// Services: what a private visit covers, as clean cards with a line icon each.
// Describes services; makes NO medical or outcome promises.
export function Services() {
  const { t } = useLang();
  return (
    <section
      id="services"
      className="section section-alt"
      aria-labelledby="services-title"
    >
      <div className="container">
        <h2 id="services-title">{t.services.title}</h2>
        <p className="section-lead">{t.services.lead}</p>
        <ul className="card-grid" role="list">
          {t.services.items.map((s) => (
            <li key={s.title} className="card service-card">
              <span className="service-card__icon" aria-hidden="true">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
