# Vimeo Hero Video Setup

The homepage hero now uses Vimeo rather than a locally hosted MP4.

## 1. Upload the finished hero loop to Vimeo

Recommended hero video:
- 15–20 seconds
- 16:9
- no important audio; the website intentionally plays it muted
- slow, stable shots
- land/property first, equipment second
- designed to loop cleanly

See `HERO-VIDEO-BRIEF.md` for the storyboard.

## 2. Make sure Vimeo allows the video to be embedded

In the video's Vimeo settings, make sure embedding is allowed on your website.

If you restrict embedding by domain, include:
- `ohiolandcraft.com`
- `www.ohiolandcraft.com`

During testing, you may temporarily need broader embedding permission depending on where you preview the site.

## 3. Paste the Vimeo URL into `index.html`

Near the top of the homepage, find:

```html
<div
  class="hero-vimeo"
  id="hero-vimeo"
  data-vimeo-url="https://vimeo.com/REPLACE_WITH_YOUR_VIDEO_ID"
  aria-hidden="true">
</div>
```

Replace the placeholder value with the actual Vimeo URL, for example:

```html
data-vimeo-url="https://vimeo.com/123456789"
```

The JavaScript automatically extracts the video ID and creates the background player.

## 4. Fallback image

Keep:

`assets/images/home-hero.jpg`

The website uses that image when:
- a Vimeo URL has not been entered,
- Vimeo cannot load,
- JavaScript is unavailable,
- or the visitor has requested reduced motion.

## Vimeo Player Behavior

The embedded hero is configured to:
- autoplay,
- play muted,
- loop,
- hide controls,
- hide title/byline/portrait,
- ignore mouse interaction,
- stay behind the hero text.

The website uses Vimeo's player iframe rather than loading the full video file from GitHub Pages.

## Optional: exact Vimeo URL

If you send the final Vimeo link to ChatGPT, the link can be inserted directly into the package so there is nothing left to configure manually.
