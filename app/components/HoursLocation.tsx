"use client";

import { useLang } from "@/app/lib/LangContext";
import { clinic, telHref, mapUrl } from "@/app/lib/clinic";
import { defaultWhatsAppHref } from "@/app/lib/contact";
import { WhatsAppGlyph } from "./icons";

// Hours + location: a photo of the clinic alongside the opening-hours table,
// address, a plain map LINK (no embedded tracking iframe), tap-to-call, and a
// WhatsApp link.
export function HoursLocation() {
  const { t, lang } = useLang();
  return (
    <section className="section section-alt" aria-labelledby="hours-title">
      <div className="container">
        <p className="section-eyebrow">{t.eyebrows.visit}</p>
        <h2 id="hours-title">{t.hoursLocation.title}</h2>

        <div className="hours-layout">
          <figure className="hours-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/clinic.webp"
              alt={t.hoursLocation.photoAlt}
              width={1280}
              height={960}
              loading="lazy"
            />
          </figure>

          <div className="hours-detail">
            <table className="hours-table">
              <caption className="visually-hidden">
                {t.hoursLocation.caption}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{t.hoursLocation.colDay}</th>
                  <th scope="col">{t.hoursLocation.colTime}</th>
                </tr>
              </thead>
              <tbody>
                {t.hoursLocation.rows.map((row) => (
                  <tr key={row.day}>
                    <th scope="row">{row.day}</th>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="hours-contact">
              <h3>{t.hoursLocation.contactTitle}</h3>
              <address className="clinic-address">
                {clinic.addressLine[lang]}
              </address>
              <ul className="link-list" role="list">
                <li>
                  <a href={mapUrl(lang)} target="_blank" rel="noopener noreferrer">
                    {t.hoursLocation.mapLink}
                  </a>
                </li>
                <li>
                  <a href={telHref}>
                    {t.hoursLocation.callLabel}: {clinic.phone}
                  </a>
                </li>
                <li>
                  <a
                    className="link-whatsapp"
                    href={defaultWhatsAppHref(t)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppGlyph />
                    <span>{t.hoursLocation.whatsappLink}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
