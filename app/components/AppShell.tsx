"use client";

import { LangProvider, useLang } from "@/app/lib/LangContext";
import { DEFAULT_LANG } from "@/app/lib/i18n";
import { SiteHeader } from "./SiteHeader";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { HowItWorks } from "./HowItWorks";
import { HoursLocation } from "./HoursLocation";
import { Faq } from "./Faq";
import { ContactForm } from "./ContactForm";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFab } from "./WhatsAppFab";

// Client shell: holds the language provider so every section can read the active
// dictionary and the page can flip between English (LTR) and Hebrew (RTL). The
// skip-link lives here (under the provider) so its label is translated too.
function Shell() {
  const { t } = useLang();
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>

      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <HoursLocation />
        <Faq />
        <ContactForm />
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}

export function AppShell() {
  return (
    <LangProvider initialLang={DEFAULT_LANG}>
      <Shell />
    </LangProvider>
  );
}
