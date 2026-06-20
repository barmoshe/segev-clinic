# מרפאת ד״ר שגב: MVP

A single-page, Hebrew/RTL website for a **fictional** private family doctor's
clinic. The persona **ד״ר רוני שגב** is a clearly-fake placeholder: this is a
lab demo, not a real practice, and nothing here implies a real practitioner.

Built as a self-contained Next.js app. One page, seven sections (hero, about,
services, how a visit works, hours + location, FAQ, contact), calm-clinical
oklch theme in light + dark.

## What it is / design notes

- **No backend, no database, no PII.** The contact form is purely an
  outbound-message composer: on submit it builds a prefilled **WhatsApp**
  (`wa.me`) link and a **`mailto:`** fallback from the field values, opened by
  the visitor's own client. Nothing is stored or transmitted server-side, and
  there is no analytics on the input. (Same pattern as
  `site/src/marketing/contact.ts`.)
- **Placeholder persona + contacts.** Phone `+972500000000`, email
  `clinic@example.com`, and the address are deliberately fake. They live in one
  constants module, `app/lib/clinic.ts`, so they are easy to swap for a real
  clinic.
- **No medical or outcome claims.** Copy describes services and logistics only.
- **House oklch design system** (`templates/web-starter`), re-skinned to a calm
  clinical palette (soft teal/blue-green, low chroma) by setting `--hue` /
  `--hue-accent` / `--chroma` in both `:root` and `html.dark` in
  `app/styles/tokens.css`.
- **Accessibility:** skip-link to `<main id="main" tabIndex={-1}>`, visible
  focus, real landmarks/headings, native `<details>` FAQ accordion, `aria-live`
  on the contact result. The `jsx-a11y` ruleset (bundled in
  `eslint-config-next`) runs as the lint gate.
- **No-FOUC pre-paint** script inlined in `<head>` (`app/lib/prepaint.ts`) sets
  theme + a11y prefs before the stylesheets. Dark mode follows the system /
  stored preference.
- **SEO:** Metadata API (title/description/canonical/openGraph) plus server-side
  JSON-LD (`Person` + `MedicalBusiness`/`Physician`). The canonical URL
  (`https://segev-clinic.example.com`) is a clearly-fake placeholder.

## Prerequisites

- Node.js 20+ (developed on Node 22)
- npm 10+

## Run / build commands

From this folder (`lab/segev-clinic/mvp/`):

```bash
npm install        # one-time, install dependencies
npm run dev        # dev server at http://localhost:3000
npm run build      # production build (type-check + compile)
npm run start      # serve the production build
npm run lint       # ESLint, including the jsx-a11y accessibility gate
```

## Deploy

The deploy target is **Vercel** (a later, separate, confirmed step). This MVP is
a normal Next.js app (not a static `export`); run `npx vercel --prod` from this
folder when deployment is approved. No `basePath`, no static export.

## Stack

Next.js 16 (App Router, Turbopack) + React 19 + TypeScript. No Tailwind: styling
is the house oklch design-token system (plain CSS custom properties).
