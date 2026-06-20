import type { Metadata, Viewport } from "next";
import { Frank_Ruhl_Libre } from "next/font/google";
import { PREPAINT_SCRIPT } from "@/app/lib/prepaint";
import { clinic } from "@/app/lib/clinic";
// House design system: tokens -> base -> components, then page styles.
import "@/app/styles/tokens.css";
import "@/app/styles/base.css";
import "@/app/styles/components.css";
import "@/app/styles/page.css";

// Brand font (Hebrew + Latin): Frank Ruhl Libre, an editorial serif that reads
// calm and clinical. Restrained weight ladder rather than a second family.
const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "700"],
  variable: "--font-app",
  display: "swap",
});

const title = `${clinic.doctorName} | ${clinic.role}`;
const description =
  "מרפאה פרטית של רופא משפחה: ביקורי בית, ייעוץ רפואי, מעקב מחלות כרוניות, מרשמים והפניות. קל ליצור קשר בוואטסאפ או באימייל, בלי להמתין על הקו.";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: `מרפאת ${clinic.doctorName}`,
    title,
    description,
    url: clinic.siteUrl,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(0.99 0.004 195)" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.17 0.015 195)" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={frankRuhl.variable}
      suppressHydrationWarning
    >
      <head>
        {/* No-FOUC pre-paint: runs before the stylesheets, sets theme + a11y. */}
        <script dangerouslySetInnerHTML={{ __html: PREPAINT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
