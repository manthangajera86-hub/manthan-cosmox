# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A marketing site for Cosmox Chemicals, built from RTF copy that sits in the repo root. Next.js 16
(App Router), React 19, TypeScript. One hand-written global stylesheet — **no Tailwind, no CSS
modules, no UI library** — and no test suite. It **is** a git repository now: `main` is the trunk,
work lands on branches (`lenis-scroll-tuning` at the time of writing), and `git diff` / `git restore`
are the undo an earlier version of this file said did not exist. A large uncommitted working tree is
the normal state here, so read `git status` before assuming a file is safe to discard.

It was a hand-written static site until it was converted; `README.md` is thorough and current — read
it before making design decisions. It documents the RTF-to-route mapping, the finder's query-string
API, the radius/motion rules, the photography convention, and the list of things deliberately left
blank because the source copy lacked them.

## Commands

```bash
npm run dev        # http://localhost:3000
npm run build      # every route prerenders to static HTML — this is the check that must pass
npm start          # serve the production build
npx tsc --noEmit   # types only
npx next typegen   # regenerate route types without a full build
```

There is no test suite and no linter. **`npm run lint` is dead** — the script still says `next lint`,
which Next 16 removed, so it exits with the CLI's usage text rather than linting anything; there is no
ESLint config in the repo either. Delete the script or point it at `eslint` if a linter is ever
wanted, but do not read its output as a pass.

`npm run build` is the gate: it type-checks and prerenders every route, so a broken import, a bad
prop, or a server/client boundary mistake fails there. A green run ends with a route table of **190
rows** — the 188 `page.tsx` files, plus `/icon.svg` and `/_not-found`. If that count drops, a page
folder went missing; if it climbs, check the new route was intended.

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
`style={{…}}` or a second stylesheet is how a hand-tuned system starts drifting. There are no inline
styles left on the interior pages; `.center`, `.mt-lg`, `.contact-card__note` and `.pills--lg` are
what replaced the last six. **Two survive elsewhere** and are the whole remaining set —
`marginTop: "2rem"` on the divisions link in `app/page.tsx` and `maxWidth: "34ch"` on the blurb in
`components/Footer.tsx`. Both want a utility class rather than another one added beside them;
`grep -rn "style={{" app components` is the audit.

**The two halves of the stylesheet do not share components.** Nothing on `/` uses `.pintro`,
`.section-head`, `.feature`, `.figure`, `.card`, `.topic-*`, `.grade-*`, `.roster`, `.list`,
`.pills`, `.value-grid`, `.contact-*`, `.enquiry`, `.form-*`, `.results` or `.facets`; the landing
page shares only `.cta`, `.btn`, `.eyebrow`, `.sec-head`, `.link-arrow`, `.rise`, the `pad*`/`bg-*`
section furniture and the `.bg-…` photography classes. That is what makes the interior block safe to
work in — and why an interior-only treatment goes on a **modifier** (`.cta--night`) rather than on
the block, which would reach the landing page.

**The accent is the logo's gold, and it is four tokens, not one.** The palette used to be a red
averaged from the three reference sites; it comes from the mark now. Gold is a material rather than
a UI colour — every gold in the artwork is between 1.2:1 and 2.7:1 on white, so none of them can be
text on paper — so the accent does what the mark does and runs **deep on paper, bright on night**:
`--gold` (#d4a94e) is a *fill* only and takes `--ink` type, never white; `--gold-lift` (#e9cd85) is
gold as a foreground on dark grounds only; `--gold-deep` (#a2763f) is affordances and small marks on
paper (focus rings, underlines, bullets, the check glyph — the one value clearing 3:1 on paper, sand
and night alike); `--gold-text` (#8a6330) is the only one that can be text on paper. Pick by the
ground the thing sits on, not by eye, and re-measure if you change a value — the table in
"The colour" in `README.md` carries every number and how they were checked. `--gold-lift` is the old
`--dust` renamed; `--red`, `--red-deep`, `--red-dupont`, `--terracotta` and `--stone` are gone, and
`.btn--red` is `.btn--gold`.

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
nothing separates them), the capabilities band (`.pband--caps` at the head of `#capabilities-strip`,
inside that section for the same reason) and the divisions band (`.band--full` on `#divisions`, whose `.tiles` grid
sits outside `.bleed` at `gap: 0` with square tiles, so the nine pictures are one wall) are true full
bleeds, `margin: 0` and no radius, so the picture reaches the window edges instead of reading as a
card of one. In the tile wall the outer columns carry `--edge` as their own padding, so the type
still lines up with the headings even though the pictures do not. Because they have no panel margin left to subtract,
everything inside them is positioned with `--edge`, not `--edge-in` — using `--edge-in` there would
pull the headline `--inset` left of every heading below it. Their heights read as depth in the site:
`100svh` on the home hero, `min(86svh, 760px)` on a family banner, `min(72svh, 620px)` on a topic or
grade banner (`.page-hero--topic`), `clamp(460px, 54vw, 720px)` on the products band and on the
capabilities band, which is a plain `.pband` — it carries the section's own kicker, headline, lede
and button on the photograph, so it holds its height the way the products band does, including on a
phone where `.pband`'s minimum drops to nothing because the copy has taken over. `.pband--caps` adds
only the gap to the rows beneath it, a 26ch measure and `font-weight: 400` on the headline (the serif
italic in it was set to sit in a 400 line). Its copy is not a second copy: `.caps__intro`, the sticky
title column that used to stand beside the rows, **moved** onto the picture and its rules are gone —
so is the sticky heading. Below it `.crow__text` goes two-column above 1100px, since the rows now
have the whole measure. **A band carrying only a kicker needs a height floor of its own**: without
copy the Responsive rules collapse `.pband` to a 118px strip on a phone.

### Server by default

Every `app/*/page.tsx` is a server component and ships as HTML — that matters, because the page copy
*is* the product. Twelve client components exist, each for one reason (`grep -rl "use client"
components` is the check — the count in this sentence has gone stale before):

| Component | Why it's a client component |
|---|---|
| `Header` | the dropdowns (and a scroll state, `IntersectionObserver` on `.hero, .page-hero`, that no CSS reads any more — see Header below) |
| `Finder` | filtering, pagination, query-string seeding |
| `Rail` | the arrow buttons and their disabled state; the autoplay clock on both rails, and the `is-centre` spotlight on the applications one |
| `ContactForm` | the "no backend yet" submit notice |
| `Reveal` | the `.rise` scroll observer — the interior pages set `.rise` too, so it runs on every route |
| `SmoothScroll` | Lenis |
| `LocaleProvider` | holds the chosen country, loads its dictionary, writes `<html lang>` — see Translation |
| `T` | swaps one English string for its translation; takes a string, so a **server** component may render it |
| `HeroTitle` | the two-tone banner headline, which collapses to one bold run when translated |
| `HeroCycle` | the landing hero's cycling last word and the photograph behind it — a clock, and the layer that is primed next |
| `BannerCycle` | the same idea on the eight family index banners: the family's topic photographs, and the caption that names the one on screen |
| `RegionMenu` | the country panel: click-to-open, click-away, Escape, and the search filter over seventy countries |

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

The globe capsule in the header opens `RegionMenu`: **seventy countries in six regions**, each
carrying a language. `lib/i18n/locales.ts` is the register (`id`, `lang`, ISO `code`, country,
language written in itself, region) — India appears twice, once for English and once for हिन्दी,
which is why `id` is the key and not the country. The seventy come from `new countries.rtf` in the
repo root.

**A country's `language` is the language this site can show it in, not the country's own first
language.** Eleven dictionaries means Español covers five Latin American markets, Deutsch covers
Austria and Switzerland, Nederlands covers Belgium, and Français covers Morocco and Algeria — while
Brazil, Poland and Saudi Arabia are listed as **English**, which is the truth of how those desks
buy. Offering "Português" and then rendering an English page is the dishonest version. Taiwan is
English because the one Chinese dictionary is Simplified.

**The site works out the country itself** — `lib/i18n/detect.ts`. It reads the device's IANA time
zone (`Intl.DateTimeFormat().resolvedOptions().timeZone`) against a table of 253 zones covering all
seventy countries; `navigator.languages` only breaks ties (हिन्दी over English inside India) or
stands in when the zone is unknown. No permission prompt, no IP lookup, no third party, nothing that
would make the static build dynamic — the two rejected alternatives and why are in "Detecting the
country" in `README.md`. Four rules hold it up. Both spellings of a renamed zone (`Europe/Kiev` /
`Europe/Kyiv`) are in the table **and** the reported name is re-canonicalised by the engine, because
engines disagree on which direction they canonicalise in. A bare `en` browser language returns
*nothing* rather than naming an arbitrary one of the forty-odd English-speaking countries. **A guess
is never written to `localStorage`** — that key means "this visitor chose this", so a stored choice
always wins and a guess re-runs next visit. And the panel says which it was, a `DETECTED` badge on
the row plus a line in the intro, because a visitor who did not switch the site to German is owed an
explanation of what did. **Adding a country means an entry in the register *and* its zones here**,
or it can only ever be chosen, never detected.

Seventy rows earned the panel three things. A sticky **search field** — focused when the panel
opens, but only under `(pointer: fine)`, since focusing a text input on a phone raises the keyboard
over the list it was meant to help you read — matching English name, translated name, language and
ISO code, accent-folded, with Enter taking the first match. Country and language on **one line**
instead of stacked: the second line was the difference between a 1,577px list and one that fits
three columns. And `columns: 240px` on `.regionmenu__regions` — a column *width*, so the count falls
from three to two to one on its own and no breakpoint has to be kept in step with the panel's width;
240px is the measured floor set by "United Arab Emirates" beside "English". **`.regionmenu__region`
must be `display: flow-root`, never `inline-block`**: the usual trick for honouring `break-inside:
avoid` makes the block an atomic inline, which is opaque to Chrome's column balancer — it gave up
and packed six regions into two columns half again as tall.

**Dictionaries are keyed by the English string itself**, not by an invented key name:
`t("Products")` returns "Produkte", or hands back "Products" when the locale has no entry. Three
things follow, and all three are the reason it is built this way — wrapping existing markup costs
nothing and needs no key registry, no page can ever render a bare `nav.products`, and a half-finished
dictionary degrades to English string by string instead of to blank space. `lib/i18n/dict/<lang>.ts`
holds one per language; each is its own lazy chunk, so an English visitor downloads none of them.
There is no `en.ts` — English is the identity translation.

**The swap happens in the browser, and English is what builds.** A locale cookie read in a server
component would make every route dynamic, and an `app/[locale]/` segment would multiply them by
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

`lib/nav.ts` holds the nine nav links and `NAV_MENU`, the dropdown content. There is no Home
link — the brand capsule is the way home, and it opens `NAV_MENU['/']`. A `NAV_MENU` link is a
whole href: seven of the eight topic families list their topic pages, while `/` and `/about` still
jump to `id` attributes on their own headings. **`/products` is the exception and has no `links`
at all** — see Header. `lib/products.ts` holds all 112 grades **and** the industry facet the finder
renders — the two used to be coupled by hand across two files. Each grade carries `s` (its own slug)
and `cs` (its product group's), which together are its page: `/products/<group>/<grade>`.

`lib/business.ts` holds the products / applications / capabilities lists of the ten business units,
which the landing page's `#business-operations` table reads three ways. It holds *only* the lists —
each division's number, title and slug are looked up from `lib/topics.ts`, so a division is never
named twice. **The same lists are also written out in full on each `app/divisions/<slug>/page.tsx`**,
transcribed from the same RTF; until those pages are pointed at this file, editing a list means
editing both. The products lists are the real range now — 23 chemicals for the intermediates
division, some of them 100-character IUPAC names — so the landing table's cell takes names until it
has filled a 96-character measure and counts the rest (`line()` in `app/page.tsx`); the division's
own page carries the list in full.

### Topic pages

Eight families — applications, industries, divisions, products, capabilities, innovation, rnd,
sustainability — and **each of their 64 topics has its own page** at `app/<family>/<slug>/page.tsx`.
That page holds only the transcribed copy for that topic; the frame around it is
`components/TopicPage.tsx` (banner, the opening panel, the body, the previous/next walk, the closing
panel). The family's index page opens on `components/TopicGrid.tsx`, a showcase of picture + number +
title + one line, each linking through.

**Every interior page opens on `.pintro`.** It is one panel whose two cells are the copy and the
photograph, stretched to a common height, with the picture bled to the panel's edges. It replaced the
`.feature feature--center` row every page used to open on, where two or three lines of copy beside a
picture that set its own height left half the row empty. Anything that would have been a second
column of odds and ends — `/products`' ten category pills, `/divisions`' five key advantages, a
grade's group and industries — goes in `.pintro__meta`, the hairline along the foot of the copy
column. `--statement` sets the lede a step larger for one- or two-sentence openers, `--flip` mirrors
it, `--band` is the picture alone for the eighteen topics the source copy gave no description.

Two arithmetic rules keep the grids full, both of them `:has()` tests, and both worth knowing before
you add a topic: `.topic-grid:has(> :nth-child(10))` bookends a ten-topic family — first and last
cards span two columns, so ten cards fill twelve cells and four rows close exactly — and
`.topic-body:has(> :nth-child(4))` breaks a four-part body into two rows of two. **An eleventh topic
in a family would defeat the first of those**, and the grid would go back to stranding a card.

`lib/topics.ts` is the register: slug, number, title, blurb and picture for all 64, grouped by
family. The showcase grid, the nav dropdowns, the previous/next walk and the index banners'
`bannerFrames()` all read it, so they cannot disagree. **Adding a topic means a folder under `app/<family>/` and an entry in `lib/topics.ts`** —
and the folder name must equal the slug, or the page 404s through `findTopic`.

Below the ten product groups sit the **112 grades**, each with a page of its own at
`/products/<group>/<grade>`, framed by `components/GradePage.tsx` and generated from
`lib/products.ts`. The names are transcribed from `new products.rtf`, whose ten sections are
numbered in a different order to this site's divisions and are mapped by name, not by number; the
one-line teasers are written rather than transcribed, and are the only copy on a grade page that is.
A grade page claims only what that record holds — name, group, division, industries, one line —
because the numbers a buyer needs come on the TDS/SDS. The finder's results link straight to them,
and **the grade list is the group page's products column**: the hand-written one that used to stand
beside Applications and Capabilities was the same list without the links, which is a duplicate at
four grades and a wall at twenty-three.

Everything is still prerendered. The 188 `page.tsx` files are **12 + 64 + 112**: twelve top-level
pages (`/`, `/about`, `/finder`, `/contact` and the eight family indexes), the 64 topics, and the
112 grades. The build's table shows 190 rows, because `app/icon.svg` and `/_not-found` each list as a
route of their own.

### Header

**Three capsules and nothing else.** `.hdr` itself paints nothing — no bar, no shadow, in any scroll
position — so the brand, the utility group and the nav capsule float over whatever the page is
showing. All three are opaque, with no border and no backdrop blur, and none of them change on
scroll. Two consequences to keep in mind before touching this. The brand is a capsule *because* the
bar went away — it is the one element with no ground of its own, and the page has near-black bands
(`.bg-night`, `.force`) as well as white sections, so no single text colour worked. And page content
now scrolls directly under the capsules with nothing hiding it.

**The brand capsule is the one that is not `--night`.** The utility group and the nav capsule are
near-black with white type; the brand is `--paper` with `--ink` type, a `--gold-text` "CHEMICALS"
rule and `--shadow-md`. That is a legibility fact about the mark, not a preference: the planet is
graphite, which is **1.38:1 on `--night`** — on the dark capsule it dissolved into its own ground and
only the gold crescent and the ring read — and **13.4:1 on paper**, where it reads as the solid disc
the artwork draws. So the header keeps `--logo-ink`/`--logo-void` at their `:root` light cut and only
the footer's `.brand` flips them. The shadow is load-bearing: the header floats over `--paper`
sections as well as sand, night bands and photographs, and a white capsule on a white section has no
edge without it. None of this touches the capsule's box, so `--header-h` is unchanged.

`Header` still sets `.is-solid` from its `IntersectionObserver` and **no CSS reads it any more**. It
is kept as the hook to re-hang a scrolled treatment on; if the bar is never coming back, that state
and the observer can come out of `components/Header.tsx` together.

**The products dropdown is the range itself, and that is deliberate.** Divisions and Products name
the same ten things, so two columns of those ten names made the second panel a copy of the first.
The products panel (`.navmenu--products`, `.prodmenu`) opens **all 112 grades**, each under the
group that makes it, with the finder on a gold pill beside them. Five things hold it up.
`NAV_MENU['/products']` carries no `links` — `productMenu()` in `lib/products.ts` builds the groups
from `lib/topics.ts` and their grades from the range, so the panel cannot disagree with the register.
It is called in `app/layout.tsx` and passed to `Header` as props, because `Header` is a client
component and importing the records into it would ship the teasers and industry tags of the whole
range to the browser on every route — what travels is a name and an href per grade, and `Header`
imports the *type* only. **Only the ten headings go through `t`**: a chemical name is the same in
every market. The panel takes the brand panel's full bleed (`--edge` to `--edge`, left-anchored
entry), because a 100-character IUPAC name in a 210px column already wraps four times. And the wall
**scrolls inside itself** — `.prodmenu__wall` is the scroller, `.prodmenu__cols` the multi-column box
inside it, and they have to be two elements: a multicol with a height cap fragments *sideways* into
new columns instead of scrolling. `columns: 210px` is a column width, not a count, so four columns
fall to two on their own; each group is `display: flow-root` with `break-inside: avoid`, the same
trap `.regionmenu__region` documents. The fold lands mid-list, so `.prodmenu::before` fades the last
rows above the finder.

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
anything that alters a capsule's box — padding, border, or glyph size. It has three steps, all
measured: 139px one row, 169 once the nav wraps (≤860px), 199 at ≤461px where it takes a third row.
Row 1 is the taller row, set by the brand capsule, which is enlarged inside `.hdr__top` only —
`.brand` is the footer's lock-up too. The logo's dropdown is the large panel: full width between the
page edges, listing every section with its glyph from `NAV`'s `icon` (path `d` strings, not markup)
beside the home page's headings. Those glyphs were briefly on the nav links themselves, which cost
the row ~200px and pushed its wrap to 1008px — hence the tile treatment in the panel instead.

### Motion

Lenis smooths the wheel **and the anchor jumps**, and `SmoothScroll` puts
`.has-lenis` on `<html>` for as long as it lives, which switches the native `scroll-behavior: smooth`
off. Do not go back to Lenis's own `.lenis-smooth` for that: it is only present *during* a smooth
scroll, so at rest the native behaviour stayed live and fought the router's scroll on navigation —
which is what made a route land part-way down the page instead of at the top.

The wheel runs on `lerp: 0.16` and the anchors on their own `duration`/`easing` — Lenis runs one
path or the other and **`duration` wins whenever both are set**, so a `lerp` next to a `duration` is a
`lerp` that never runs. 0.16 is measured, not picked: the header comment in `SmoothScroll` carries the
lag/settle numbers for five candidates, and that is the one knob to move if the feel is wrong.
Re-measure rather than reason about it — the 1.05s duration this replaced did not read as slow from
the source either. Touch is deliberately left native (`syncTouch: false`): re-driving a phone's scroll
from JS costs the browser its own off-thread scrolling. `allowNestedScroll` lets an inner scroller
keep the wheel instead of having it stolen for the page, and `stopInertiaOnNavigate` drops the
coast when an internal link is clicked. The rest of what Lenis needs in CSS is transcribed into
`globals.css` beside `.has-lenis` rather than imported from `node_modules` — one stylesheet is
the rule, and `html.lenis { height: auto }` is the load-bearing rule of the set.

**The interior banners drift.** `.page-hero__media` is bled 2% past every edge and runs a 30s
`ph-drift` across the photograph, alternating so there is no seam at the loop, and the banner's four
lines walk in on `ph-in` 60ms apart with `both` as the fill — five on the eight family index pages,
where the caption is the last of them. The reduced-motion block at the end of
the file kills `animation-delay` as well as the duration — with `both` a delay left standing holds
each line at its first frame, which is opacity 0. The home hero takes none of this: the landing page
has motion of its own.

**The eight family index banners also cycle** (`.page-hero--cycle`, `components/BannerCycle.tsx`).
The layers are the same `.page-hero__media` — same bleed, same drift, each paused until its turn —
stacked and cross-faded, and the line under the lede names the picture on screen: the topic's number
and title, linking to its page. The frames come from `bannerFrames()` in `lib/topics.ts` and are the
family's own topics in the grid's order, so the banner cannot name a picture the register disagrees
with. Frame 0 prerenders `is-on`, all the captions live in one grid cell so nothing reflows, and a
layer takes its `.bg-*` class only when it is current or next. Pointer or focus on the **caption
row** holds the cycle — not the whole band, or a banner this tall would sit frozen for anyone
reading with the pointer on it. It holds off-screen and in a background tab too, and never starts
under `prefers-reduced-motion`, where the arrows still work.

`.rise` reveals on
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
**The landing hero's last word cycles**, and the photograph changes with it (`HeroCycle`). Three
things are load-bearing: index 0 is what prerenders, so `<h1>` still ships as "Cosmox Chemicals
Speciality" and stays that with JavaScript off; the four words are stacked in one grid cell so the
heavy run is always as wide as the longest and nothing under the headline moves; and a layer only
carries its `.bg-*` class once it is next, so the hero's first paint still asks for one image. The
alt layers take `saturate(.9) brightness(.55)` because the division pictures are daylit and the hero
photograph is a plant at night — measured means of 89/40/90 against 27, brought to 53/26/53. The
words come from the hero's own lede and nothing is invented; re-measure the brightness if a picture
is swapped.

**Both rails advance themselves** — the applications rail every 2.8s, the industry scroller every
4s — holding whenever the pointer or focus is on one or its arrows, its section is off screen, or the
tab is in the background, so the two never move at once. An autoplaying rail has to take `loop` as
well, or it runs to its end and parks there; `loop` in turn needs `align` to match the rail's own
`scroll-snap-align` (`centre` for the applications strip, `start` for the scroller, whose first card
has to keep resting on `--edge` under the heading) or the rail opens half a card out. All of it stands down
under `prefers-reduced-motion` — including the autoplay, which never starts — and `Reveal` marks every
element `is-in` up front if the observer is missing: content must never be left hidden by a failed
observer. The rail's `is-centre` spotlight is not motion and stays on either way.

## Content and design provenance

Page copy comes from the numbered RTF files in the repo root (`1 about.rtf` → `/about`, etc. — table
in `README.md`), and the product range from the unnumbered `new products.rtf`, which superseded the
generic grades `3 product.rtf` carried. **Copy is transcribed, never invented.** The conversion to Next.js was verified by
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
`/img/…` in `public/`; interior banners re-use home-page pictures via `.bg-page-*`. The contact form
has no backend. See "Photography" and "Still to fill in" in `README.md`.

**The logo is real** and is no longer one of these. `components/BrandMark.tsx` is the mark — the
planet, its α and the orbit ring — traced from `updated logo.jpeg` in the repo root, which is the
master artwork; `public/logo/` holds the full lock-up and the one-colour cuts, and `app/icon.svg` is
the favicon. **Every constant in the mark was fitted to the pixels, so re-measure rather than
nudge** — the planet is c (631.02, 464.17) r 255.31 (median rim residual 0.06px) and the orbit is
c (629.28, 463.74), 348.05 × 113.26, −24.92°, stroke 24.2, gap 44.4. The orbit is **not** concentric
with the planet, and assuming it is costs 1.7px sd; glyph outlines are corner-pinned before they are
simplified, which is worth ~7px at the sharp apexes. The α is reconstructed where the ring covers it
by testing that the glyph shows on *both* sides of the ring — **on the ring's near half only**,
because the far half runs behind the planet and straight through the top of the bowl. Deviation from
the traced contour cannot catch a mistake in the mask itself; check the glyph's area and centroid
against the source as well. "The logo" in `README.md` has the table, the
three defects that pass found, and how each number was measured. Two of its colours come from the page rather than from the logo: `--logo-ink` (the
orbit ring) and `--logo-void` (the gap holding that ring off the planet) are tokens in `globals.css`,
set to the light-background cut on `:root`, which the header capsule keeps, and flipped on the
footer's `.brand`. Flip both on any other dark panel that carries the mark — a black ring on
`--night` is an invisible ring. `BrandMark` takes an
`id` prefix because it renders twice per page and its gradient ids would otherwise collide. It is
672 × 519, not square, so `.brand__mark` sets height and leaves width `auto`; the brand capsule grew
203 → 215px and no header breakpoint moved. See "The logo" in `README.md`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
