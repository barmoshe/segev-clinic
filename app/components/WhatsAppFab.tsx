"use client";

import { useLang } from "@/app/lib/LangContext";
import { defaultWhatsAppHref } from "@/app/lib/contact";
import { WhatsAppGlyph } from "./icons";

// Floating WhatsApp button: the always-available primary contact channel.
// Pinned to the bottom corner using logical positioning, so it sits bottom-right
// in LTR (English) and bottom-left in RTL (Hebrew) automatically. The label is
// shown on wider screens and collapses to the glyph on small phones (CSS).
export function WhatsAppFab() {
  const { t } = useLang();
  return (
    <a
      className="wa-fab"
      href={defaultWhatsAppHref(t)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.fabLabel}
    >
      <WhatsAppGlyph className="wa-fab__glyph" />
      <span className="wa-fab__label">{t.whatsapp.fabLabel}</span>
    </a>
  );
}
