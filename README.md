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

## Before going live

- The two "Download on the App Store" buttons in `index.html` and `ru/index.html` are `href="#"`
  placeholders, marked with a TODO comment. Replace them once the App Store listing exists.
- `og:image` is not set; add an image to `assets/` and reference it if link previews matter.
