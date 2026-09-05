# Dynamic Innovations — Website

One-page site for Dynamic Innovations, a manufacturer and supplier of
HDPE/PP woven fabric and bags (Ahmedabad, Gujarat). Built with React + Vite,
Tailwind CSS v4, Framer Motion, and Lenis smooth scrolling. Content, photos
and colours are taken directly from the company's brochure.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Folder structure

```
src/
  assets/brand/             # real logo + product/factory photos from the brochure
  components/
    shared/
      Logo.jsx               # brand logo (colour + white variant for dark sections)
      RevealText.jsx         # word-by-word staggered headline reveal
      RevealImage.jsx        # scale/slide-in image reveal (never fully hides content)
      AnimatedNumber.jsx     # count-up numbers (currently unused, kept for reuse)
      SmoothScroll.jsx       # Lenis smooth-scroll wrapper
    Navbar.jsx                # logo swaps colour/white on scroll, animated underline links
    Hero.jsx                  # real tagline + real product photo, scroll parallax
    About.jsx                 # real "New Machines. Old-Fashioned Reliability." copy
    VisionMissionValues.jsx   # Vision / Mission / Values, dark panel
    ManufacturingProcess.jsx  # 4-stage process (extrusion -> weaving -> lamination -> bag-making)
    ProductCategories.jsx     # the 6 real product categories with real photos
    Clients.jsx                # factory photo + real "Markets We Serve" tags
    MaterialsPrinting.jsx      # real Indicative Specifications table
    CustomManufacturing.jsx    # real "Why Dynamic Innovations" 6 reasons
    Gallery.jsx                 # real product photos, mixed grid
    EnquiryForm.jsx              # controlled form with real contact details; swap onSubmit for a backend
    Instagram.jsx
    ContactMap.jsx               # embedded Google Map + real address/contact
    Footer.jsx                    # real logo + contact info
    WhatsAppFloat.jsx             # floating WhatsApp CTA with the real number
  App.jsx
  index.css                      # Tailwind v4 theme tokens (colours sampled from the real logo)
```

## Brand details currently in the site

- **Company:** Dynamic Innovations
- **Contact person:** Rahul Agrawal — CEO
- **Phone / WhatsApp:** +91 70095 50413
- **Email:** info@dynainnovate.com
- **Address:** Ahmedabad – 382210, Gujarat, India

If any of these change, they appear in: `EnquiryForm.jsx`, `Footer.jsx`,
`ContactMap.jsx`, and `WhatsAppFloat.jsx`.

## Things you may still want to do

- **Enquiry form backend** — `EnquiryForm.jsx`'s `onSubmit` currently just
  shows a success state. Wire it to Formspree, EmailJS, Google Sheets, or
  your own API endpoint so enquiries actually reach you.
- **Instagram handle** — placeholder `@dynamicinnovations` in `Instagram.jsx`
  and `Footer.jsx` — update if the real handle differs.
- **Google Map pin** — currently centred on "Ahmedabad 382210" as a text
  search; for a precise pin, paste your exact Google Maps embed URL
  (Share → Embed a map) into `ContactMap.jsx`'s iframe `src`.
- **Higher-res photos** — the product/category photos were extracted from
  the brochure screenshots you shared; if you have the original higher-res
  source files, swap them into `src/assets/brand/` (same filenames) for
  sharper detail on large screens.

## Design tokens (src/index.css)

Colours are sampled directly from the real logo:

| Token | Hex | Use |
|---|---|---|
| `--color-forest` | `#163b0c` | Primary dark green background |
| `--color-forest-deep` | `#0f2a08` | Darkest green (Vision/Mission panel) |
| `--color-cream` | `#f7f7f1` | Light section background |
| `--color-lime` | `#9ab525` | Accent (CTAs, highlights, links) |
| `--color-charcoal` | `#232821` | Body text on light backgrounds |

Fonts: Archivo Expanded (display headlines), Archivo (headings), Inter
(body), JetBrains Mono (small technical labels), loaded via Google Fonts in
`index.html`.
