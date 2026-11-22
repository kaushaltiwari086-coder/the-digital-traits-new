# The Digital Traits — Homepage starter

A responsive Next.js homepage concept for The Digital Traits, using a premium light visual system, purple accents, Framer Motion reveals and CSS-based hero artwork.

## Run locally

1. Install Node.js 20.9+.
2. In this folder run `npm install`.
3. Run `npm run dev` and open `http://localhost:3000`.
4. Run `npm run build` before deployment.

## Before production / staging launch

- Connect the enquiry form in `app/page.tsx` to a real endpoint (CRM, Formspree, Resend, or your backend). The current form is explicitly a front-end interaction demo and does not transmit leads.
- Add verified business email, phone, WhatsApp number, office address, social profile URLs and real testimonials.
- Replace illustrative service claims with approved portfolio projects and verified case-study metrics. No fabricated client logos or performance figures are included.
- Configure the staging domain in hosting and update `metadataBase` in `app/layout.tsx` when the canonical production domain is final.
- Add GA4, Google Tag Manager, Search Console verification, cookie/privacy notices and final schema markup as required.

## Stack

Next.js 15, React 19, TypeScript, Framer Motion and Lucide React. The visual artwork is built with CSS and does not depend on heavy 3D assets.
