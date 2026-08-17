# Ohio Landcraft Website Package — V9

V9 connects the public property-evaluation workflow to Survey123 and adds Google Analytics (GA4) tracking across every HTML page. See `CHANGELOG-V9.md` for details.

# Ohio Landcraft Website — V6

V6 keeps the customer-outcome messaging, Vimeo hero and FAQ structure, and expands the service architecture with six core service pages plus an always-available service sub-navigation on those pages.

## Pages

- `index.html` — updated homepage with video hero and FAQ section
- `driveways.html`
- `drainage.html`
- `brush-clearing.html` — Brush Clearing
- `property-reclamation.html` — Property Reclamation
- `trails-property-access.html` — Trails & Property Access
- `land-clearing.html` — legacy redirect to Brush Clearing
- `excavation-grading.html`
- `planning-3d.html`
- `projects.html`
- `about.html`
- `faq.html` — new
- `evaluation.html`

## Hero Video

The homepage now uses a Vimeo-hosted background video rather than a local MP4.

1. Upload the finished loop to Vimeo.
2. Open `index.html`.
3. Replace:

`https://vimeo.com/REPLACE_WITH_YOUR_VIDEO_ID`

with your actual Vimeo link.

The Vimeo player is loaded as a muted, autoplaying, looping, control-free background. `assets/images/home-hero.jpg` remains the fallback image.

See `VIMEO-SETUP.md` and `HERO-VIDEO-BRIEF.md`.

## FAQ

The homepage includes eight high-value customer questions in native HTML `<details>` accordions, so the content is readable, accessible and present directly in the page HTML.

The dedicated `faq.html` expands this into sections covering:
- getting started,
- budget and efficiency,
- equipment,
- material reuse,
- phasing,
- timing,
- customer DIY/maintenance,
- 3D property planning,
- service types,
- service area,
- the Ohio Landcraft approach.

## Support Files

- `IMAGE-LIST.md`
- `HERO-VIDEO-BRIEF.md`
- `MESSAGING-FRAMEWORK.md`
- `BRAND-NOTES.md`

## Before Launch

1. Upload the hero loop to Vimeo and paste its link into `index.html`, or simply launch with the `home-hero.jpg` fallback.
2. Add the photography listed in `IMAGE-LIST.md`.
3. Add final phone/email/contact information.
4. Add real project case studies.
5. Define any formal warranty or Landcraft Assurance terms before publishing warranty claims.
6. Complete Google Search Console setup and submit `sitemap.xml`.

## GitHub Pages

The package is static and can be uploaded directly to a GitHub Pages repository.


## Service Navigation

The six core service pages include a secondary navigation bar directly below the main site header:

- Driveways
- Drainage
- Brush Clearing
- Property Reclamation
- Trails & Property Access
- Site Work

The bar remains available while scrolling and becomes horizontally scrollable on smaller screens.


## V8 Audience Paths

This version adds three customer-specific pages and a compact homepage Who We Help section. See `CHANGELOG-V8.md` for details.


## V10 Survey123 integration
The property evaluation page now uses the Survey123 Web App JavaScript API and dynamically follows the survey's reported content height. See `CHANGELOG-V10.md`.
