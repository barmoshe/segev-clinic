"use client";

import { useLang } from "@/app/lib/LangContext";
import { clinic } from "@/app/lib/clinic";
import { LangToggle } from "./LangToggle";

// Sticky header: clinic wordmark + language toggle + a neutral booking CTA that
// scrolls to the contact section (where WhatsApp is the primary channel).
export function SiteHeader() {
  const { t, lang } = useLang();
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="brand" href="#main" aria-label={clinic.clinicName[lang]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand__logo"
            src="/logo-mark.png"
            alt=""
            width={36}
            height={36}
          />
          <span className="wordmark">{clinic.clinicName[lang]}</span>
        </a>
        <div className="header-actions">
          <LangToggle />
          <a className="btn btn-sm" href="#contact">
            {t.header.book}
          </a>
        </div>
      </div>
    </header>
  );
}
