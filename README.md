# greekly.eu

Static landing site for **Greekly**, an AI app for learning Modern Greek (iOS app + Telegram bots).
Plain HTML and one CSS file, no build step, served by GitHub Pages.

## Structure

```
index.html                 English landing page
ru/index.html              Russian landing page
privacy/index.html         Privacy Policy (English)
terms/index.html           Terms of Use (English)
404.html                   Not-found page
assets/style.css           All styles (light + dark theme, responsive, self-hosted font)
assets/fonts/              Manrope variable font, woff2 subsets (latin, latin-ext, greek, cyrillic)
assets/screens/            App Store screenshots: sN.webp (640w), sN-sm.webp (360w), sN-phone.webp (phone card, 720x1421, rounded corners with alpha)
assets/greekly-icon.jpg    App icon, 512x512 source
assets/icon-512.png        App icon with rounded corners (brand mark, JSON-LD image)
assets/apple-touch-icon.png, favicon-32.png, favicon-64.png
assets/og-image.jpg        1200x630 social preview built from the screenshots
CNAME                      Custom domain: greekly.eu
.nojekyll                  Serve files as-is, no Jekyll processing
robots.txt                 Crawling rules + sitemap reference
sitemap.xml                URL list with hreflang pairs
```

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Root-absolute paths (`/assets/style.css`, `/privacy/`) are used throughout, so the site must be
served from the domain root, which is the case both for `python3 -m http.server` and for
GitHub Pages on a custom domain.

## Deploying

GitHub repo settings → **Pages** → Source: **Deploy from a branch**, branch: the default branch,
folder: `/ (root)`. Custom domain `greekly.eu` is set through the `CNAME` file; point the domain's
DNS at GitHub Pages (`A` records to GitHub's Pages IPs, or a `CNAME` record to the account's
`github.io` host) and enable **Enforce HTTPS**.

## App Store

The app is listed as **Greekly AI: Learn Greek**, App Store id `6810982667`:
<https://apps.apple.com/app/id6810982667>. Texts, palette (navy `#11315c`, peach `#f8d0a8`,
blue `#2850a0`, cream `#f3f1ec`), screenshots and the icon on the site come from that listing.
The first screenshot's greeting was retouched to remove a personal name; the site names only the
company, WCBO LLC, never an individual developer.

To refresh the screenshots, download the six App Store images at 1242x2688, then regenerate
`assets/screens/` (640w and 360w full frames, plus a 720w crop of the phone card at
x 115..1127, y 642..2688, trimmed to the card's bottom edge at 720x1421 with a 70px rounded
corner mask saved as WebP alpha) and `assets/og-image.jpg`.
