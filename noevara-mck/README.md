# Noevara Consulting — Multi-Page Site

A real multi-page site (35 separate HTML pages, proper navigation,
mega-menus) — not a single scrolling page. Structured like a large
advisory firm's site: Capabilities, Industries, and Tools each have a
landing page plus one dedicated detail page per item.

## Running it

The pages now use real relative paths (`../capabilities/index.html`,
etc.), so double-clicking `index.html` and clicking around works
correctly — no server required.

That said, a local server is still nice for development (auto-reload,
closer to how it'll behave once deployed):
Easiest in VS Code: install the **Live Server** extension, right-click
`index.html` → "Open with Live Server". Or in a terminal:
`python3 -m http.server 5500` then open `http://localhost:5500`.

## Structure

```
build.py                  THE SOURCE OF TRUTH — all content lives here
index.html                 Homepage (generated — do not hand-edit)
capabilities/index.html    Capabilities landing page (generated)
capabilities/*.html        13 individual capability pages (generated)
industries/index.html      Industries landing page (generated)
industries/*.html          6 individual industry pages (generated)
tools/index.html           Tools landing page (generated)
tools/*.html               9 individual tool pages (generated)
insights/index.html        Newsletter & whitepapers (generated)
about/index.html           About page (generated)
contact/index.html         Contact page (generated)
css/styles.css             All styling
js/common.js                Mega-menus, mobile nav, forms
```

## Editing content — DO THIS, NOT hand-editing the .html files

Every generated `.html` file is produced by `build.py`. If you edit an
`.html` file directly, your changes will be **overwritten** the next
time the site is rebuilt. Instead:

1. Open `build.py`.
2. Edit the `CAPABILITIES`, `INDUSTRIES`, `TOOLS`, or `INSIGHTS` lists
   near the top — add, remove, or change entries.
3. Run:
   ```
   python3 build.py
   ```
4. All 35 pages (navigation, landing pages, detail pages) regenerate
   automatically and stay in sync with each other — add a capability
   and it instantly appears in the mega-menu, the capabilities landing
   page, and any industry page that references it.

Requires Python 3 (no other dependencies).

## Navigation

- **Capabilities**, **Industries**, and **Tools** in the header each
  open a mega-menu (click, not hover — works on both desktop and
  touch) listing every item, with a "View all" link to that section's
  landing page.
- Every detail page has a breadcrumb, an overview, relevant detail
  (dimensions scored / focus areas / before-after outcome), a
  "Related" tile grid to similar pages, and a call-to-action band.

## Photography

Four background photos are live, hotlinked from Unsplash (Unsplash
License — free for commercial use). See the credits and instructions
for self-hosting them for production in the site's history — or swap
the URLs directly in `build.py`'s `PHOTOS` dictionary and rebuild.

## Forms

The contact form and newsletter subscribe form currently show a
confirmation message only (see `js/common.js`). Wire them to
Formspree, Netlify Forms, or your own backend to go live.
