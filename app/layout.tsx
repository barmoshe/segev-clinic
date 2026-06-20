import type { Metadata, Viewport } from "next";
import { Frank_Ruhl_Libre, Assistant } from "next/font/google";
import { PREPAINT_SCRIPT } from "@/app/lib/prepaint";
import { clinic } from "@/app/lib/clinic";
import { getDict } from "@/app/lib/i18n";
// House design system: tokens -> base -> components, then page styles.
import "@/app/styles/tokens.css";
import "@/app/styles/base.css";
import "@/app/styles/components.css";
import "@/app/styles/page.css";

// Type pairing (both Hebrew + Latin): Frank Ruhl Libre, an editorial serif, for
// display headings only; Assistant, a clean modern Hebrew/Latin sans, for body
// and UI. The two are designed to sit together and read calm and contemporary.
const serif = Frank_Ruhl_Libre({
  subsets: ["latin", "hebrew"],
  weight: ["500", "700"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-base",
  display: "swap",
});

// English is the canonical/default language; the client toggle swaps to Hebrew.
const t = getDict("en");

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", he: "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    siteName: clinic.clinicName.en,
    title: t.meta.title,
    description: t.meta.description,
    url: clinic.siteUrl,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(0.99 0.006 195)" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.17 0.018 230)" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* No-FOUC pre-paint: runs before the stylesheets, sets language/dir,
            theme + a11y. */}
        <script dangerouslySetInnerHTML={{ __html: PREPAINT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
