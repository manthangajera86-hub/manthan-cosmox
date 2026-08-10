# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A marketing site for Cosmox Chemicals, built from RTF copy that sits in the repo root. Next.js 16
(App Router), React 19, TypeScript. One hand-written global stylesheet — **no Tailwind, no CSS
modules, no UI library** — and no test suite. **Not a git repository**, so there is no undo: check
before deleting or overwriting.

It was a hand-written static site until it was converted; `README.md` is thorough and current — read
it before making design decisions. It documents the RTF-to-route mapping, the finder's query-string
API, the radius/motion rules, the photography convention, and the list of things deliberately left
blank because the source copy lacked them.

## Commands

```bash
npm run dev        # http://localhost:3000
npm run build      # all 117 routes prerender to static HTML — this is the check that must pass
npm start          # serve the production build
npx tsc --noEmit   # types only
```

There is no test suite and no linter configured. `npm run build` is the gate: it type-checks and
prerenders every route, so a broken import, a bad prop, or a server/client boundary mistake fails
there.

To verify a change renders, drive Chrome over the DevTools Protocol rather than fighting
`--screenshot`: headless Chrome clamps the window to 500px wide, and a `--screenshot` of a URL with a
`#fragment` comes back blank. Start `chrome --headless --remote-debugging-port=9222`, open a tab via
`PUT /json/new`, then `Emulation.setDeviceMetricsOverride` for any viewport (including phone widths),
`Runtime.evaluate` to scroll or to read `getBoundingClientRect()`, and `Page.captureScreenshot`. Node
23 has a global `WebSocket`, so this needs no dependencies. That is also how to check real numbers for
any header or grid change — the nav is tuned to a specific pixel budget.

## Architecture

### One design system, one stylesheet

`app/globals.css` is the entire design system: `:root` tokens (palette, the measured type scale, the
radius scale, `--inset`/`--edge-in`, shadows), then the landing-page blocks, then a section marked
"Interior pages" holding the content components the ten copy routes use. Component files carry no
styles of their own — they emit the class names this stylesheet defines. Keep it that way; a stray
`style={{…}}` or a second stylesheet is how a hand-tuned system starts drifting.

The type scale (17 / 21.25 / 25.5 / 31.875 / 38.25 / 51 / 63.75 / 106.25px) is the literal set of
sizes measured on the three reference sites, made fluid with `clamp()` — don't introduce off-scale
sizes. The two faces are real and self-hosted: `next/font/google` loads **Inter** and **EB Garamond**
italic in `app/layout.tsx` and feeds `--font-sans`/`--font-serif` into `--sans`/`--serif`. Inter runs
~17% wider than the old machine fallback, so any hand-broken display line is measured against it —
re-measure in the browser before changing one. The radius scale (`--r-xs` … `--r-xl`) is this build's own addition: bigger surface, bigger
radius. Panels in the body of a page (the colour bands) are inset by `--inset` so their corners
show, and `--edge-in` is what keeps type inside a panel aligned with type outside it. Change one,
check the other. **The photographs are the exception**: `.hero`, `.page-hero`, the landing page's
products stack (`.pband` plus the `.fcta` finder panel directly under it, both inside `#products` so
nothing separates them) and the divisions band (`.band--full` on `#divisions`, whose `.tiles` grid
sits outside `.bleed` at `gap: 0` with square tiles, so the nine pictures are one wall) are true full
bleeds, `margin: 0` and no radius, so the picture reaches the window edges instead of reading as a
card of one. In the tile wall the outer columns carry `--edge` as their own padding, so the type
still lines up with the headings even though the pictures do not. Because they have no panel margin left to subtract,
everything inside them is positioned with `--edge`, not `--edge-in` — using `--edge-in` there would
pull the headline `--inset` left of every heading below it. Their heights read as depth in the site:
`100svh` on the home hero, `min(86svh, 760px)` on a family banner, `min(72svh, 620px)` on a topic or
grade banner (`.page-hero--topic`), `clamp(460px, 54vw, 720px)` on the products band.

### Server by default

Every `app/*/page.tsx` is a server component and ships as HTML — that matters, because the page copy
*is* the product. Ten client components exist, each for one reason:

| Component | Why it's a client component |
|---|---|
| `Header` | the dropdowns (and a scroll state, `IntersectionObserver` on `.hero, .page-hero`, that no CSS reads any more — see Header below) |
| `Finder` | filtering, pagination, query-string seeding |
| `Rail` | the arrow buttons and their disabled state; on the applications rail also the autoplay clock and the `is-centre` spotlight |
| `ContactForm` | the "no backend yet" submit notice |
| `Reveal` | the `.rise` scroll observer |
| `SmoothScroll` | Lenis |
| `LocaleProvider` | holds the chosen country, loads its dictionary, writes `<html lang>` — see Translation |
| `T` | swaps one English string for its translation; takes a string, so a **server** component may render it |
| `HeroTitle` | the two-tone banner headline, which collapses to one bold run when translated |
| `RegionMenu` | the country panel: click-to-open, click-away, Escape |

The landing page's business-operations tabs are still the precedent for *not* adding one: three radio
buttons and `:has()` switch the table in CSS, so all three views ship in the static HTML and the
control works before hydration and without JavaScript. Reach for a client component when state has
to outlive a click or be read by something else — not for a control CSS can hold.

Two traps that have already bitten here:

- A server component **cannot pass a function** to a client component. `Rail` takes its heading as a
  `ReactNode`, not a render callback, for exactly this reason.
- `useSearchParams()` opts the whole route out of prerendering. `Finder` reads
  `window.location.search` in an effect instead, so the facets and the first page of results ship in
  the static HTML.

### Translation

The globe capsule in the header opens `RegionMenu`: **twelve countries in two regions**, each
carrying a language. `lib/i18n/locales.ts` is the register (`id`, `lang`, ISO `code`, country,
language written in itself, region) — India appears twice, once for English and once for हिन्दी,
which is why `id` is the key and not the country.

**Dictionaries are keyed by the English string itself**, not by an invented key name:
`t("Products")` returns "Produkte", or hands back "Products" when the locale has no entry. Three
things follow, and all three are the reason it is built this way — wrapping existing markup costs
nothing and needs no key registry, no page can ever render a bare `nav.products`, and a half-finished
dictionary degrades to English string by string instead of to blank space. `lib/i18n/dict/<lang>.ts`
holds one per language; each is its own lazy chunk, so an English visitor downloads none of them.
There is no `en.ts` — English is the identity translation.

**The swap happens in the browser, and English is what builds.** A locale cookie read in a server
component would make all 117 routes dynamic, and an `app/[locale]/` segment would multiply them by
twelve; the copy *is* the product, so English stays what prerenders and what search engines see.
`LocaleProvider` reads the stored choice in an *effect*, never during render — read it during render
and the markup would not match what was prerendered. The cost is one frame of English on load for a
visitor who has chosen otherwise. Accepted deliberately.

What is translated: nav and dropdowns, header and footer, breadcrumbs, banner headlines, the 64 topic
titles and their blurbs, product-group names, the finder's facets and result line, and the shared
CTAs. What is not: **chemical names, grade names, division numbers and the Cosmox™ mark** — a buyer
searches for "Aluminium Hypophosphite" under that name in every market — the postal address, and the
long transcribed page copy. The panel says so in its own footnote rather than letting a visitor
discover it half-way down a page.

Three things to keep in mind when editing:

- **`<T>` takes a string, never JSX.** For a sentence with a `<b>` or a link inside it, put the whole
  sentence in the dictionary with `{slots}` and use `fill()` (see `Finder`) — concatenating
  "Displaying" + numbers + "of" hard-codes English word order into the markup.
- **Adding a translated string means adding it to all eleven dictionaries**, or that locale quietly
  falls back to English for it. A missing key is not an error, which is the point, but it is also
  how a page ends up half-translated without anything failing.
- Inter and EB Garamond load the `latin` subset only, so CJK and Devanagari fall through to the
  system face. That is why `.regionmenu__lang` is set a shade larger than the Latin rows beside it.

### Data, not markup

`lib/nav.ts` holds the ten nav links and `NAV_MENU`, the dropdown content. A `NAV_MENU` link is a
whole href: the eight topic families list their topic pages, while `/` and `/about` still jump to
`id` attributes on their own headings. `lib/products.ts` holds all 40 grades **and** the industry facet the finder
renders — the two used to be coupled by hand across two files. Each grade carries `s` (its own slug)
and `cs` (its product group's), which together are its page: `/products/<group>/<grade>`.

`lib/business.ts` holds the products / applications / capabilities lists of the ten business units,
which the landing page's `#business-operations` table reads three ways. It holds *only* the lists —
each division's number, title and slug are looked up from `lib/topics.ts`, so a division is never
named twice. **The same lists are also written out in full on each `app/divisions/<slug>/page.tsx`**,
transcribed from the same RTF; until those pages are pointed at this file, editing a list means
editing both.

### Topic pages

Eight families — applications, industries, divisions, products, capabilities, innovation, rnd,
sustainability — and **each of their 64 topics has its own page** at `app/<family>/<slug>/page.tsx`.
That page holds only the transcribed copy for that topic; the frame around it is
`components/TopicPage.tsx` (banner, the topic's picture beside its description, the body, the
previous/next walk). The family's index page opens on `components/TopicGrid.tsx`, a showcase of
picture + number + title + one line, each linking through.

`lib/topics.ts` is the register: slug, number, title, blurb and picture for all 64, grouped by
family. The showcase grid, the nav dropdowns and the previous/next walk all read it, so they cannot
disagree. **Adding a topic means a folder under `app/<family>/` and an entry in `lib/topics.ts`** —
and the folder name must equal the slug, or the page 404s through `findTopic`.

Below the ten product groups sit the **40 grades**, each with a page of its own at
`/products/<group>/<grade>`, framed by `components/GradePage.tsx` and generated from
`lib/products.ts`. A grade page claims only what that record holds — name, group, division,
industries, one line — because the numbers a buyer needs come on the TDS/SDS. The finder's results
link straight to them, and each group page lists its own.

Everything is still prerendered: 117 static routes — 13, plus 64 topics, plus 40 grades.

### Header

**Three capsules and nothing else.** `.hdr` itself paints nothing — no bar, no shadow, in any scroll
position — so the brand, the utility group and the nav capsule float over whatever the page is
showing. All three are opaque `--night` with white type, with no border and no backdrop blur, and
they do not change on scroll: one capsule, one colour, everywhere. Two consequences to keep in mind
before touching this. The brand is a capsule *because* the bar went away — it is the one element with
no ground of its own, and the page has near-black bands (`.bg-night`, `.force`) as well as white
sections, so no single text colour worked. And page content now scrolls directly under the capsules
with nothing hiding it.

`Header` still sets `.is-solid` from its `IntersectionObserver` and **no CSS reads it any more**. It
is kept as the hook to re-hang a scrolled treatment on; if the bar is never coming back, that state
and the observer can come out of `components/Header.tsx` together.

The utility capsule's third button is the country menu (`RegionMenu`, see Translation). It shares the
one `open` slot with the nav dropdowns, so only one panel is ever down and moving the pointer onto a
nav link puts the country list away — but it opens on **click**, not hover, because it commits to a
choice. Its panel borrows `.navmenu` wholesale and drops from the right, the mirror of
`.navmenu--brand` under the logo.

**Every route still has a `.hero` or `.page-hero`** — `/finder` got a `.page-hero` too — so there is
no per-page special case; a new page without one would start underneath the bar. **There is no
hamburger anywhere, by design** — below 940px the nav links wrap inside their capsule and the
dropdowns switch off. The country menu is the exception and stays available at every width: picking
your market is not a desktop-only thing to want, so below 640px it stacks to one column, follows the
header's own 1rem padding instead of `--edge`, and scrolls inside itself. `--header-h` in `globals.css` is the measured height of the whole header and
feeds every banner's top padding plus `scroll-padding-top`; re-measure it if you add a row or change
anything that alters a capsule's box — padding, border, or glyph size. Currently 128px, and 158px
under the 900px query; row 1 is now the taller row, set by the brand capsule.

### Motion

Lenis smooths the wheel **and the anchor jumps** (`anchors: true`), and `SmoothScroll` puts
`.has-lenis` on `<html>` for as long as it lives, which switches the native `scroll-behavior: smooth`
off. Do not go back to Lenis's own `.lenis-smooth` for that: it is only present *during* a smooth
scroll, so at rest the native behaviour stayed live and fought the router's scroll on navigation —
which is what made a route land part-way down the page instead of at the top. `.rise` reveals on
scroll, and the division tiles hang their own motion off it: `.tile::before` is a 3-D plane that
starts almost edge-on at `rotateY(89.5deg)` — about 4px of picture, read as one vertical line down
the card's centre — and opens like a door to 0° when its own row scrolls in (`.rise` is on each
`.tile`, not on `.tiles`, and `.tile.rise` cancels the fade so the closed line is visible while it
waits), then turns `-7deg` on hover. The tiles also carry `.rise--repeat`, the one opt-in `Reveal`
honours: it keeps those elements under the observer and strips `is-in` again when they leave, so the
door shuts off screen and the flip replays on every pass. That is only ever for motion on a
decorative layer — put it on copy and text vanishes behind the reader.
Its `perspective()` lives in the transform (a parent `perspective` would make `.tile` a stacking
context, and the picture sits at `z-index: -1`), and the closed state runs `brightness(1.45)` because
a 4px sliver of a dark photograph over `--night` is otherwise invisible.
The applications rail advances itself every 2.8s, holding whenever the pointer or focus is on
it or its arrows, the section is off screen, or the tab is in the background. All of it stands down
under `prefers-reduced-motion` — including the autoplay, which never starts — and `Reveal` marks every
element `is-in` up front if the observer is missing: content must never be left hidden by a failed
observer. The rail's `is-centre` spotlight is not motion and stays on either way.

## Content and design provenance

Page copy comes from the numbered RTF files in the repo root (`1 about.rtf` → `/about`, etc. — table
in `README.md`). **Copy is transcribed, never invented.** The conversion to Next.js was verified by
diffing the rendered text of every route against the old HTML; keep that bar. Four `TODO` markers on
`/contact` mark gaps the source left blank.

The landing page's visual language is a deliberate blend of three scraped reference sites — the
`Web Design Scraping *.json` files in the root are Aditya Birla (base name), Lilly (`(1)`) and
DuPont (`(2)`). Section comments in `globals.css` name which site each block came from ("Lilly's
floating capsules", "DuPont: facet sidebar"); keep those attributions accurate when editing, they are
the record of why a block looks the way it does.

`layout-plan.html` and `layout.md` in the root are standalone design documents, not part of the app.

## Known stand-ins

All photography is placeholder Unsplash imagery — none of it is Cosmox's own plant, lab or product,
and a visitor will read it as such. Each picture is one `.bg-*` line in `globals.css` pointing at
`/img/…` in `public/`; interior banners re-use home-page pictures via `.bg-page-*`. The header logo
is a placeholder hexagon SVG in `components/BrandMark.tsx`. The contact form has no backend. See
"Photography" and "Still to fill in" in `README.md`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
