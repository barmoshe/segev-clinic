// Single source of placeholder clinic constants. All values are CLEARLY FAKE.
// Swap these (phone, email, address) to adapt the page to a real clinic.
// No real person is implied: "ד״ר רוני שגב" is a placeholder persona.

export const clinic = {
  // Placeholder persona (clearly fictional).
  doctorName: "ד״ר רוני שגב",
  role: "רופא משפחה פרטי",

  // Contact details: placeholders, deliberately non-real.
  // E.164-style number; wa.me wants the international form without the leading "+".
  phone: "+972500000000",
  email: "clinic@example.com",

  // Location: placeholder address (no real practice).
  addressLine: "רחוב הדוגמה 12, תל אביב",
  // A plain maps LINK (no embedded tracking iframe).
  mapUrl: "https://www.openstreetmap.org/search?query=" +
    encodeURIComponent("רחוב הדוגמה 12, תל אביב"),

  // Canonical site URL: clearly-placeholder, swap on real deploy.
  siteUrl: "https://segev-clinic.example.com",
} as const;

// wa.me wants the international number with no "+".
export const whatsappNumber = clinic.phone.replace(/[^\d]/g, "");

// tel: href keeps the "+" for international dialing.
export const telHref = `tel:${clinic.phone}`;
