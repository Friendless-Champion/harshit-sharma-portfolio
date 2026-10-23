# Harshit Sharma — Portfolio

A lightweight static portfolio built with HTML, CSS, and vanilla JavaScript. No build step or server-side service is required.

## Pages and assets

- `index.html` — homepage, experience highlights, education, recognition, and skills.
- `experiences/index.html` — experience directory.
- `experiences/*.html` — individual experience detail pages.
- `about.html`, `contact.html`, and `resume.html` — supporting pages.
- `404.html`, `robots.txt`, and `sitemap.xml` — static hosting and crawler files.
- `assets/portfolio.css` — responsive visual system and reduced-motion styles.
- `assets/portfolio.js` — photo-frame and email-form behavior.
- `assets/machine.js` — decorative mechanical background illustration.
- `favicon.svg` and `assets/og-image.png` — site icon and social sharing artwork.

The visual system uses Oxanium for headings, DM Sans for body text, and IBM Plex Mono for technical labels. Experience text is static HTML; empty photo frames remain hidden until real image URLs are added.

## Content notes

- Experience locations, some competition organizations, and some time commitments were not provided; the pages identify unavailable details rather than inventing values.
- The resume PDF was not included. The Resume page shows selected experience highlights and offers an email link to request a copy.
- The contact form opens a prefilled email in the visitor's mail app. It does not send or store submissions on a server.

## Run locally

Open `index.html` in a browser, or serve the directory with any static file server. No dependency installation is needed.

## Deploy

This static site can be served from GitHub Pages or another static host. For GitHub Pages, open repository **Settings → Pages**, choose **Deploy from a branch**, and select the default branch with `/ (root)`. For a host that needs canonical absolute sitemap URLs, replace the site-relative entries in `sitemap.xml` after setting the public domain.

## Privacy and accessibility

The site does not include a phone number or street address. Pages include semantic landmarks, skip navigation, keyboard focus styling, image alt text, and reduced-motion support.