// Inline line-icon set. Stroke-based, inherit `currentColor`, decorative by
// default (aria-hidden). Tiny and dependency-free: each icon is a single SVG
// path family sized to 1em so it scales with surrounding text. Used by service
// cards and the WhatsApp glyph. No external icon library (house "vanilla only").

import type { SVGProps } from "react";

export type IconName =
  | "house"
  | "consult"
  | "pulse"
  | "prescription"
  | "referral"
  | "spark";

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
  ...props,
});

const PATHS: Record<IconName, React.ReactNode> = {
  // House call: a simple home with a heart, "care at home".
  house: (
    <>
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6 10.5V19h12v-8.5" />
      <path d="M12 16.2c-1.4-1-2.4-1.9-2.4-3a1.4 1.4 0 0 1 2.4-1 1.4 1.4 0 0 1 2.4 1c0 1.1-1 2-2.4 3Z" />
    </>
  ),
  // Consultation: speech bubble with a plus, "talk it through".
  consult: (
    <>
      <path d="M4 5h16v10H9l-4 4v-4H4z" />
      <path d="M12 7.5v5M9.5 10h5" />
    </>
  ),
  // Chronic-care follow-up: a heartbeat line.
  pulse: (
    <>
      <path d="M3 12h3l2-5 4 10 2.5-7 1.5 2H21" />
    </>
  ),
  // Prescriptions: a pill / capsule.
  prescription: (
    <>
      <rect x="3.5" y="9" width="17" height="6" rx="3" />
      <path d="M12 9v6" />
    </>
  ),
  // Referrals & tests: a clipboard with a check.
  referral: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5h6V7H9z" />
      <path d="M8.5 13.5l2 2 4-4.5" />
    </>
  ),
  // Personal availability: a spark / quick reply.
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M6.5 6.5 9 9M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />
    </>
  ),
};

export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return <svg {...base(props)}>{PATHS[name]}</svg>;
}

// WhatsApp brand glyph (filled). Separate because it is a recognizable mark,
// not a line icon; defaults to currentColor so the button controls its color.
export function WhatsAppGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden={true}
      focusable={false}
      {...props}
    >
      <path d="M16.01 3.2c-7.1 0-12.86 5.76-12.86 12.86 0 2.27.6 4.49 1.73 6.45L3.2 28.8l6.45-1.69a12.8 12.8 0 0 0 6.36 1.66h.01c7.1 0 12.86-5.76 12.86-12.86S23.11 3.2 16.01 3.2Zm0 23.16h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.04 1.06 1.08-3.94-.26-.4a10.66 10.66 0 0 1-1.63-5.68c0-5.9 4.8-10.7 10.7-10.7 2.86 0 5.54 1.11 7.56 3.14a10.62 10.62 0 0 1 3.13 7.57c0 5.9-4.8 10.7-10.7 10.7Zm5.86-8.01c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.58-1.6-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.45 4.81.76.33 1.36.52 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}
