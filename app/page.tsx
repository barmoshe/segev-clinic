import { AppShell } from "@/app/components/AppShell";
import { personJsonLd, businessJsonLd } from "@/app/lib/jsonLd";

// Server component: emits canonical JSON-LD (English) so a name search resolves
// the clinic, then hands off to the client AppShell which owns the bilingual UI.
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <AppShell />
    </>
  );
}
