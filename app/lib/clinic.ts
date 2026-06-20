// Single source of placeholder clinic constants. All values are CLEARLY FAKE.
// Swap these (name, phone, email, address) to adapt the page to a real clinic.
// No real person is implied: "Dr. Roni Segev" / "ד״ר רוני שגב" is a placeholder.
//
// Persona strings are localized { en, he }; the contact channels (phone, email,
// site URL) are language-neutral and shared across both languages.

import type { Lang } from "./i18n";

type Localized = Record<Lang, string>;

export const clinic = {
  // Placeholder persona (clearly fictional), per language.
  doctorName: { en: "Dr. Roni Segev", he: "ד״ר רוני שגב" } as Localized,
  role: {
    en: "Private family physician",
    he: "רופא משפחה פרטי",
  } as Localized,
  clinicName: {
    en: "Segev Family Clinic",
    he: "מרפאת ד״ר שגב",
  } as Localized,

  // Contact channels: placeholders, deliberately non-real, shared across langs.
  // E.164-style number; wa.me wants the international form without the leading "+".
  phone: "+972500000000",
  email: "clinic@example.com",

  // Location: placeholder address (no real practice), per language.
  addressLine: {
    en: "12 Example St, Tel Aviv",
    he: "רחוב הדוגמה 12, תל אביב",
  } as Localized,

  // Canonical site URL: the live Vercel deploy.
  siteUrl: "https://segev-clinic.vercel.app",
} as const;

// wa.me wants the international number with no "+".
export const whatsappNumber = clinic.phone.replace(/[^\d]/g, "");

// tel: href keeps the "+" for international dialing.
export const telHref = `tel:${clinic.phone}`;

// A plain maps LINK (no embedded tracking iframe), built per language.
export const mapUrl = (lang: Lang) =>
  "https://www.openstreetmap.org/search?query=" +
  encodeURIComponent(clinic.addressLine[lang]);
