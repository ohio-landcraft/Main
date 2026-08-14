# Ohio Landcraft Website — V4

V4 keeps the V3 customer-outcome messaging and adds two major website features:

1. **Vimeo background hero video support**
2. **Homepage FAQ + dedicated FAQ page**

## Pages

- `index.html` — updated homepage with video hero and FAQ section
- `driveways.html`
- `drainage.html`
- `land-clearing.html`
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
3. Connect/replace `evaluation.html` with the planned Survey123 intake.
4. Add final phone/email/contact information.
5. Add real project case studies.
6. Define any formal warranty or Landcraft Assurance terms before publishing warranty claims.
7. Add analytics/Search Console.

## GitHub Pages

The package is static and can be uploaded directly to a GitHub Pages repository.
