"use client";

import { useId, useState } from "react";
import {
  buildWhatsAppHref,
  buildMailtoHref,
  composeMessage,
  composeMailSubject,
  type ContactFields,
} from "@/app/lib/contact";

// Contact / appointment request. Purely an OUTBOUND-MESSAGE COMPOSER: on submit
// it builds a prefilled wa.me link and a mailto: fallback from the field values.
// NO backend, NO database, NO storing/transmitting PII server-side, no analytics.
export function ContactForm() {
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
    const message = composeMessage(fields);
    setLinks({
      wa: buildWhatsAppHref(message),
      mail: buildMailtoHref(composeMailSubject(fields.name), message),
    });
  };

  return (
    <section className="section section-alt" aria-labelledby="contact-title">
      <div className="container narrow">
        <h2 id="contact-title">קביעת תור / השארת פרטים</h2>
        <p className="section-lead">
          ממלאים את הפרטים, והכפתור פותח הודעה מוכנה בוואטסאפ או באימייל. הפרטים
          לא נשמרים בשום מקום: הם נשלחים ישירות מהמכשיר שלכם.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor={nameId}>שם מלא</label>
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
            <label htmlFor={phoneId}>טלפון</label>
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
            <label htmlFor={reasonId}>סיבת הפנייה</label>
            <textarea
              id={reasonId}
              name="reason"
              rows={4}
              value={fields.reason}
              onChange={update("reason")}
            />
          </div>

          <button type="submit" className="btn">
            הכנת הודעה
          </button>
        </form>

        <div className="form-result" aria-live="polite">
          {links && (
            <div className="callout callout-ok">
              <p>ההודעה מוכנה. בחרו איך לשלוח אותה:</p>
              <div className="result-actions">
                <a
                  className="btn"
                  href={links.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  שליחה בוואטסאפ
                </a>
                <a className="btn btn-ghost" href={links.mail}>
                  שליחה באימייל
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
