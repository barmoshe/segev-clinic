// Server-side JSON-LD so a name search resolves the clinic. Emits a Person
// (the placeholder physician) and a MedicalBusiness/Physician for the clinic.
// All data is placeholder; the URL is a clearly-fake canonical.

import { clinic } from "./clinic";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: clinic.doctorName,
  jobTitle: clinic.role,
  url: clinic.siteUrl,
  telephone: clinic.phone,
  email: clinic.email,
  worksFor: {
    "@type": "MedicalBusiness",
    name: `מרפאת ${clinic.doctorName}`,
  },
};

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physician"],
  name: `מרפאת ${clinic.doctorName}`,
  medicalSpecialty: "https://schema.org/PrimaryCare",
  url: clinic.siteUrl,
  telephone: clinic.phone,
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.addressLine,
    addressCountry: "IL",
  },
  founder: {
    "@type": "Person",
    name: clinic.doctorName,
    jobTitle: clinic.role,
  },
};
