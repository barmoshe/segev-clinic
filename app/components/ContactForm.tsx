"use client";

import { useId, useState } from "react";
import { useLang } from "@/app/lib/LangContext";
import {
  buildWhatsAppHref,
  buildMailtoHref,
  composeMessage,
  composeMailSubject,
  type ContactFields,
} from "@/app/lib/contact";
import { WhatsAppGlyph } from "./icons";

// Contact / appointment request. Purely an OUTBOUND-MESSAGE COMPOSER: on submit
// it builds a prefilled wa.me link and a mailto: fallback from the field values.
// NO backend, NO database, NO storing/transmitting PII server-side, no analytics.
// WhatsApp is the primary send action; email is a quiet secondary fallback.
export function ContactForm() {
  const { t } = useLang();
  const nameId = useId();
  const phoneId = useId();
  const reasonId = useId();

  const [fields, setFields] = useState<ContactFields>({
    name: "",
    phone: "",
    reason: "",
  });
  const [links, setLinks] = useState<{ wa: string; mail: string } | null>(null);

  const update =
    (key: keyof ContactFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = composeMessage(t, fields);
    setLinks({
      wa: buildWhatsAppHref(message),
      mail: buildMailtoHref(composeMailSubject(t, fields.name), message),
    });
  };

  return (
    <section
      id="contact"
      className="section section-contact"
      aria-labelledby="contact-title"
    >
      <div className="container narrow">
        <h2 id="contact-title">{t.contact.title}</h2>
        <p className="section-lead">{t.contact.lead}</p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor={nameId}>{t.contact.name}</label>
            <input
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              value={fields.name}
              onChange={update("name")}
              required
            />
          </div>

          <div className="field">
            <label htmlFor={phoneId}>{t.contact.phone}</label>
            <input
              id={phoneId}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={fields.phone}
              onChange={update("phone")}
              required
            />
          </div>

          <div className="field">
            <label htmlFor={reasonId}>{t.contact.reason}</label>
            <textarea
              id={reasonId}
              name="reason"
              rows={4}
              value={fields.reason}
              onChange={update("reason")}
            />
          </div>

          <button type="submit" className="btn">
            {t.contact.submit}
          </button>
        </form>

        <div className="form-result" aria-live="polite">
          {links && (
            <div className="callout callout-ok">
              <p>{t.contact.resultLead}</p>
              <div className="result-actions">
                <a
                  className="btn btn-whatsapp"
                  href={links.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppGlyph />
                  <span>{t.contact.sendWhatsApp}</span>
                </a>
                <a className="link-email" href={links.mail}>
                  {t.contact.sendEmail}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
