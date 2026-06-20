// Outbound-message composer. Mirrors site/src/marketing/contact.ts:
// the contact form NEVER stores or transmits PII server-side. It only builds
// a prefilled WhatsApp (wa.me) link and a mailto: fallback from the field
// values, both opened by the visitor's own client.

import { clinic, whatsappNumber } from "./clinic";

const DEFAULT_MAIL_SUBJECT = `פנייה לקביעת תור: ${clinic.doctorName}`;
const DEFAULT_WHATSAPP_TEXT =
  `שלום, אשמח לקבוע תור / לקבל פרטים אצל ${clinic.doctorName}.`;

export const mailRecipient = clinic.email;

export const buildMailtoHref = (
  subject: string = DEFAULT_MAIL_SUBJECT,
  body: string = "",
) =>
  `mailto:${mailRecipient}?subject=${encodeURIComponent(subject)}` +
  (body ? `&body=${encodeURIComponent(body)}` : "");

export const mailtoHref = buildMailtoHref();

export const buildWhatsAppHref = (text: string = DEFAULT_WHATSAPP_TEXT) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export const whatsappHref = buildWhatsAppHref();

// Compose the human-readable message from the three form fields. Used for both
// the WhatsApp text and the mailto body, so the doctor receives the same note
// whichever channel the visitor picks.
export type ContactFields = {
  name: string;
  phone: string;
  reason: string;
};

export const composeMessage = ({ name, phone, reason }: ContactFields) =>
  [
    `שם: ${name || "לא צוין"}`,
    `טלפון: ${phone || "לא צוין"}`,
    `סיבת הפנייה: ${reason || "לא צוינה"}`,
  ].join("\n");

export const composeMailSubject = (name: string) =>
  `פנייה לקביעת תור: ${name || ""}`.trim();
