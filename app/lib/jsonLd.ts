// Server-side JSON-LD so a name search resolves the clinic. Emits a Person
// (the placeholder physician) and a MedicalBusiness/Physician for the clinic.
// English is the canonical language; the Hebrew name is carried as alternateName.
// All data is placeholder; the URL is the live demo canonical.

import { clinic } from "./clinic";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: clinic.doctorName.en,
  alternateName: clinic.doctorName.he,
  jobTitle: clinic.role.en,
  url: clinic.siteUrl,
  telephone: clinic.phone,
  email: clinic.email,
  worksFor: {
    "@type": "MedicalBusiness",
    name: clinic.clinicName.en,
  },
};

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physician"],
  name: clinic.clinicName.en,
  alternateName: clinic.clinicName.he,
  medicalSpecialty: "https://schema.org/PrimaryCare",
  url: clinic.siteUrl,
  telephone: clinic.phone,
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.addressLine.en,
    addressCountry: "IL",
  },
  founder: {
    "@type": "Person",
    name: clinic.doctorName.en,
    jobTitle: clinic.role.en,
  },
};
