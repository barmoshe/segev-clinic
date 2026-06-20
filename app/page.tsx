import { SiteHeader } from "@/app/components/SiteHeader";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Services } from "@/app/components/Services";
import { HowItWorks } from "@/app/components/HowItWorks";
import { HoursLocation } from "@/app/components/HoursLocation";
import { Faq } from "@/app/components/Faq";
import { ContactForm } from "@/app/components/ContactForm";
import { SiteFooter } from "@/app/components/SiteFooter";
import { personJsonLd, businessJsonLd } from "@/app/lib/jsonLd";

export default function Page() {
  return (
    <>
      {/* JSON-LD emitted server-side so a name search resolves the clinic. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />

      {/* First focusable element: skip-link to <main>. */}
      <a className="skip-link" href="#main">
        דילוג לתוכן
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
    </>
  );
}
