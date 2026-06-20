// Outbound-message composer. The contact form NEVER stores or transmits PII
// server-side. It only builds a prefilled WhatsApp (wa.me) link and a mailto:
// fallback from the field values, both opened by the visitor's own client.
//
// Every default string is language-aware: it is sourced from the active dict so
// the prefilled message matches the language the visitor is reading.

import { clinic, whatsappNumber } from "./clinic";
import type { Dict } from "./i18n";

export const mailRecipient = clinic.email;

export const buildMailtoHref = (subject: string, body: string = "") =>
  `mailto:${mailRecipient}?subject=${encodeURIComponent(subject)}` +
  (body ? `&body=${encodeURIComponent(body)}` : "");

export const buildWhatsAppHref = (text: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

// The bare links (no form fields) used by the header, hero and floating button.
export const defaultWhatsAppHref = (t: Dict) =>
  buildWhatsAppHref(t.whatsapp.defaultText);

export const defaultMailtoHref = (t: Dict) =>
  buildMailtoHref(t.whatsapp.mailSubject);

export type ContactFields = {
  name: string;
  phone: string;
  reason: string;
};

// Compose the human-readable message from the three form fields, labelled in the
// active language. Used for both the WhatsApp text and the mailto body.
export const composeMessage = (t: Dict, { name, phone, reason }: ContactFields) =>
  [
    `${t.contact.fieldName}: ${name || t.contact.notProvided}`,
    `${t.contact.fieldPhone}: ${phone || t.contact.notProvided}`,
    `${t.contact.fieldReason}: ${reason || t.contact.notProvided}`,
  ].join("\n");

export const composeMailSubject = (t: Dict, name: string) =>
  `${t.whatsapp.mailSubject}${name ? ` (${name})` : ""}`;
