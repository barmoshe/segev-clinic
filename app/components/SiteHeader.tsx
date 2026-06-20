"use client";

import { useLang } from "@/app/lib/LangContext";
import { clinic } from "@/app/lib/clinic";
import { defaultWhatsAppHref } from "@/app/lib/contact";
import { LangToggle } from "./LangToggle";
import { WhatsAppGlyph } from "./icons";

// Sticky header: clinic wordmark + language toggle + a WhatsApp primary CTA.
export function SiteHeader() {
  const { t, lang } = useLang();
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <span className="wordmark">{clinic.clinicName[lang]}</span>
        <div className="header-actions">
          <LangToggle />
          <a
            className="btn btn-whatsapp btn-sm"
            href={defaultWhatsAppHref(t)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppGlyph />
            <span>{t.header.whatsapp}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
