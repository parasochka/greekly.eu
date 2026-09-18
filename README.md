# greekly.eu

Static landing site for **Greekly**, an AI app for learning Modern Greek (iOS app + Telegram bots).
Plain HTML and one CSS file, no build step, served by GitHub Pages.

## Structure

```
index.html          English landing page
ru/index.html       Russian landing page
privacy/index.html  Privacy Policy (English)
terms/index.html    Terms of Use (English)
404.html            Not-found page
assets/style.css    All styles (light + dark theme, responsive)
assets/favicon.svg  Favicon
CNAME               Custom domain: greekly.eu
.nojekyll           Serve files as-is, no Jekyll processing
robots.txt          Crawling rules + sitemap reference
sitemap.xml         URL list with hreflang pairs
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
DNS at GitHub Pages (`A` records to GitHub's Pages IPs, or a `CNAME` record to
`parasochka.github.io`) and enable **Enforce HTTPS**.

## App Store

The app is listed as **Greekly AI: Learn Greek**, App Store id `6810982667`:
<https://apps.apple.com/app/id6810982667>. The link is used by the download buttons on both
landing pages, by the footer links, and by the `SoftwareApplication` JSON-LD block in the page
head. `assets/greekly-icon.jpg` is the app icon, used as `og:image` and as the apple-touch-icon.
