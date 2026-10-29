# Felixa Vistas Landing Page

Single-page real estate landing page for Felixa Vistas, a plotted development in Padappai, Chennai.
Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`, `npm run format` (Prettier).

## Structure

- `src/app/page.tsx` - the page, sections in PDF order
- `src/components/` - Navbar, Hero, AmenityCard, Connectivity, Faq, EnquiryForm, Footer, SafeImage
- `src/data/content.ts` - all static content (arrays rendered with `map()`) and image URLs

## Notes

- Images are Unsplash URLs in `src/data/content.ts`. If one fails to load, a green placeholder shows instead. Swap in your own URLs or local files as needed.
- The form validates on the client only and shows a success message. Nothing is sent anywhere.
- Placeholders are used where the PDF had none: plot sizes, infrastructure details, connectivity names and distances, phone, email, RERA number.
- The font (Outfit) loads from Google Fonts and falls back to the system font offline.
