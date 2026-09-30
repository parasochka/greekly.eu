# greekly.eu

Static landing site for **Greekly**, an AI app for learning Modern Greek (iOS app + Telegram bots).
Plain HTML and one CSS file, no build step, served by GitHub Pages.

## Structure

```
index.html                 English landing page
ru/index.html              Russian landing page
learn-greek/               Guide: how to learn Greek (EN), ru/learn-greek/ (RU)
learn-greek-app/           Guide: Greek learning app / how Greekly works (EN + ru/)
greek-phrases/             Guide: basic Greek phrases with pronunciation (EN + ru/)
learn-greek-cyprus/        Guide: learning Greek in Cyprus (EN + ru/)
learn-greek-a2/            Internal page: the A2 level (EN + ru/), linked from guides and footer, not from the menu
greek-a2-exam/             Internal page: the A2 exam / ellinomatheia (EN + ru/), linked from guides and footer, not from the menu
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
assets/nav.js              Closes the "Learn Greek" header dropdown on outside click / Escape
robots.txt                 Crawling rules (search engines and AI crawlers allowed) + sitemap reference
sitemap.xml                URL list with hreflang pairs (en, ru, x-default) and lastmod
llms.txt                   Plain-text site summary and page index for AI assistants
```

## Guides and SEO

The header has a "Learn Greek" dropdown (`<details class="nav-drop">`, works without JS) with the four
main guides. The A2 level and A2 exam pages are deliberately kept out of the menu: the product copy is
level-agnostic, so those pages are reached from links inside the guides, the footer and the sitemap.

Every guide page has a canonical URL, hreflang pairs to its EN/RU twin, and JSON-LD (`Article`,
`BreadcrumbList`, `FAQPage`; the app guide also has `SoftwareApplication`). The FAQ in the JSON-LD must
match the visible FAQ on the page. When a page is added or changed, update `sitemap.xml` (`lastmod`)
and `llms.txt`.

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
