# Cosmox Chemicals — website

Next.js 16 (App Router, TypeScript, React 19) built from the RTF copy in the
repo root. One global stylesheet, no CSS framework, no UI library — the design
system is hand-written and lives in `app/globals.css`.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # every route prerenders to static HTML
npm start
```

## Deploy

`npm run build` prerenders all 188 routes as static content, so this
deploys to Vercel as-is, or to any static host via `output: "export"` in
`next.config.mjs`.

## Structure

```
app/            one folder per route, each page.tsx a server component —
                app/<family>/<slug>/ for each of the 64 topics, and
                app/products/<group>/<grade>/ for each of the 112 grades
  globals.css   the whole design system
  layout.tsx    <html>, metadata, header, footer, the two client helpers
components/     Header, Footer, BrandMark, Rail, Finder, ContactForm,
                Reveal, SmoothScroll, TopicPage, TopicGrid, GradePage,
                LocaleProvider, T, HeroTitle, RegionMenu
lib/            nav.ts (links + dropdown data), topics.ts (the 64 topics),
                products.ts (the 112 grades + the industry facet)
  i18n/         locales.ts (the seventy countries), detect.ts, dict/<lang>.ts (eleven
                dictionaries — there is no en.ts, English is the source)
public/         hero.jpg and img/ — the photography
  logo/         the brand mark and lock-up, light / dark / mono (see "The logo")
```

| Route | Source RTF |
|---|---|
| `/` | new — home page (see "Landing page") |
| `/finder` | new — product search, driven by `lib/products.ts` |
| `/about` | 1 about |
| `/divisions` | 2 business |
| `/products` | 3 product; the range itself is `new products.rtf` |
| `/industries` | 4 industries |
| `/applications` | 5 application |
| `/innovation` | 6 innovations |
| `/capabilities` | 7 capabilities |
| `/rnd` | 8 r & d |
| `/sustainability` | 9 sustainability |
| `/contact` | 10 contact |

Each of those content routes also has a page per topic beneath it —
`/applications/flame-retardancy`, `/divisions/lithium-metal-additives` and 62
more — see "Topic pages" below, and a page for each of the 112 grades beneath
its product group. With the ten routes above, `/`, `/finder`, the 64 topics and
the 112 grades, the build prerenders 188.

Ten components are client components, and each for one reason:
`Header` (the dropdowns, plus a now-unread scroll state), `Finder` (filtering), `Rail`
(the arrows), `ContactForm` (the submit notice), `Reveal` (the scroll
observer), `SmoothScroll` (Lenis), and the four that make the country menu work
— `LocaleProvider` (holds the choice), `T` (swaps one string), `HeroTitle` (the
two-tone banner headline) and `RegionMenu` (the panel itself). Everything else —
all the page copy, including `TopicPage`, `TopicGrid` and `GradePage` — is a
server component and ships as HTML. `T` takes a *string*, so a server component
can render it without becoming a client component itself; that is the whole
reason the translation layer did not cost the site its static build.

The header and footer used to be duplicated across twelve files; they are now
`components/Header.tsx` and `components/Footer.tsx`, and the current link is
marked from `usePathname()` rather than by hand. Every route now opens with a
hero or a banner, so the bar is always fixed and the capsules always float —
there is no per-page special case.

## Modern surfaces

The three reference sites are all square-cornered; this build deliberately is
not. `app/globals.css` defines one radius scale (`--r-xs` … `--r-xl`) and the
rule is that the bigger the surface, the bigger the radius, so nothing reads as
a rounded thing stuck on a square one:

- **The heroes are the exception** — the true full bleeds on the site, joined
  by the landing page's products stack (`.pband` and the `.fcta` finder panel
  under it: `margin: 0`, no radius, type on `--edge`), two photographs in the
  body of a page rather than at the top of one, touching each other. The
  home hero was an inset panel like the rest, but that left a strip of paper
  above it and the floating header sat on the strip rather than on the
  photograph. It now runs `margin: 0`, no radius, `min-height: 100svh`, and its
  contents are positioned with `--edge` rather than `--edge-in`: with no panel
  margin left to subtract, `--edge-in` would pull the headline `--inset` to the
  left of every heading below it. If you ever re-inset the hero, those three
  declarations (`.hero__inner` padding, `.hero__stats` margin, `.hero__cue`
  right) go back to `--edge-in` together.
- **The interior banners were rebuilt on the same terms** — `.page-hero` is
  `margin: 0`, no radius, padded on `--edge`, so a page opens on a photograph
  that reaches all four window edges instead of a rounded band with paper
  around it. Height is what separates the three levels: `100svh` on the home
  hero, `min(86svh, 760px)` on a family banner, `min(72svh, 620px)` on a topic
  or grade banner. The type was scaled with them — `--fs-xxl` for a family
  title, `--fs-xl` for a topic's, `--fs-sm` for the lede — because a picture
  this size swallows anything smaller.
- Colour bands (`section.bg-sand`, `section.bg-night`, `section.apps`) are
  inset and rounded on the same terms — the page reads as a stack of panels.
  `section.apps` is `overflow: hidden` so the rail scrolls inside its panel
  instead of spilling past the corner. **`#divisions` is the exception**: it
  takes `.band--full`, which cancels the inset and the radius, because the band
  is nine photographs rather than a colour. That rule has to sit *after*
  `section.bg-night > .bleed` in the stylesheet — the two selectors weigh the
  same, so source order is what decides, and the other way round the "Divisions"
  heading lands on `--edge-in` (65px) instead of `--edge` (81px).
- Cards, media and detail records take `--r-md`/`--r-lg` and lift on hover with
  `--shadow-md`. Text inputs stay at `--r-xs`; buttons stay pills. The division
  tiles are square (see below) — they are a wall, not cards.
- Flat accent borders became inset bars with a radius of their own
  (`.cta::before`, `.detail::before`) — a 6px flat border wrapping a 32px
  corner reads as a mistake.

## Smooth scrolling

Two pieces, both in `app/globals.css` and `components/SmoothScroll.tsx`:

- `scroll-behavior: smooth` plus `scroll-padding-top` on `<html>` handles
  anchor jumps and keyboard paging, and keeps an anchored heading clear of the
  fixed header. It is the no-JS and reduced-motion path.
  `scroll-padding-top` is the **only** place that clearance is set. There was a
  matching `[id] { scroll-margin-top }` as well, and because scroll-padding
  insets the scrollport while scroll-margin grows the target box, the browser
  applied both and every jump landed a whole header-height (143px) too low. Of
  the two, the scrollport rule is the one to keep: it also holds a focused
  element clear of the header when tabbing, which the `[id]` rule could not do.
- Lenis smooths the wheel, and takes the anchor jumps too (it resolves a target
  through the same `scroll-margin` / `scroll-padding` the browser uses, so
  headings land exactly where the native behaviour put them).
  While it is running, `SmoothScroll` puts `.has-lenis` on `<html>` and that
  turns the native behaviour off, so the two can never both animate the same
  scroll.

**How fast the wheel is, and why that number.** Lenis takes either a `lerp` or a
`duration` + `easing`, runs one or the other, and lets `duration` win when both
are set — which is how you end up with a `lerp` that never runs. The wheel here
is on `lerp: 0.16`; the anchors keep a `duration` of their own, because a jump
from the footer to the top should not take proportionally longer than a short
one. 0.16 came out of driving 30 wheel ticks of 100px, 33ms apart, over the
DevTools Protocol and sampling `scrollY` every frame — how far behind the input
the page is when the last tick lands, and how long after it the page rests:

| setting | lag at last tick | settle |
|---|---|---|
| `duration: 1.05` + expo-out | 201px | 834ms |
| `lerp: 0.10` (Lenis default) | 224px | 1018ms |
| `lerp: 0.14` | 153px | 669ms |
| **`lerp: 0.16`** | **130px** | **567ms** |
| `lerp: 0.20` | 100px | 435ms |

Below ~0.12 the page visibly trails the hand on a long flick; above ~0.22 the
glide is gone and it may as well be the native wheel. It is the one knob —
move it and re-measure, because the 1.05s duration it replaced did not read as
slow from the source either.

Touch is left native (`syncTouch: false`): re-driving a phone's scroll from JS
costs the browser its own off-thread scrolling and reads as lag on exactly the
devices that can least afford it. `allowNestedScroll: true` lets anything that
can actually scroll in the gesture's direction — the country panel below 640px,
the rails, any overflow box — keep the wheel rather than have it stolen for the
page. `stopInertiaOnNavigate: true` drops the coast when an internal link is
clicked, so a route cannot open part-way down because the wheel was still
moving when the router did.

The stylesheet rules Lenis ships in `lenis/dist/lenis.css` are transcribed into
`globals.css` next to `.has-lenis` rather than imported: one stylesheet is the
rule here, and a second one linked out of `node_modules` would drift the moment
the package updated. `html.lenis, html.lenis body { height: auto }` is the
load-bearing one — Lenis measures the content to know its own scroll limit, and
a page pinned to `height: 100%` measures as one viewport and refuses to scroll
past it.

**Why `.has-lenis` and not Lenis's own class.** This used to hang off
`.lenis-smooth`, which Lenis only applies *while* a smooth scroll is in flight.
At rest the native `scroll-behavior: smooth` was therefore still live, and it
fought the scroll the App Router performs on navigation: the router sets
`scrollTop = 0` and then checks whether the top of the new page is inside the
scroll-padding line, but with smooth active that first scroll had not landed
yet, so the check read a stale position and the router followed it with
`scrollIntoView()`. The result was a slow crawl to ~409px — the page opening
below its own banner — on alternate navigations. A stable class fixes it at the
source: the router's scroll is instant again, and every route opens at the top.

Both stand down under `prefers-reduced-motion` — inertia scrolling is exactly
the kind of motion that setting exists to switch off. Lenis is torn down on
unmount so a route change can never leave two rAF loops running.

**Clicking the tab you are already on** is not a navigation, so the router does
not scroll and you would stay where you had read to. `Header` sends those to
the top by hand (`toTop`), on the nav links, the two utility links and the
dropdown's "Visit page" link.

## Landing page

`app/page.tsx` is the landing page, built as a deliberate mixture of three
reference sites that were scraped into the JSON files in the repo root. Its
design system is the whole site's — every route shares one header, one footer,
one palette and one type scale. See "Interior pages" below for the components
only the content routes use.

### What came from where

| Reference | Borrowed |
|---|---|
| adityabirla.com | Full-bleed hero with the headline low-left, split into a light weight and a heavy weight either side of a hairline rule; uppercase wide-tracked nav floating over the image, reverting to a solid white bar on scroll; accent-coloured section headings pinned to an 81px page inset; dark editorial tile grid; five-up media strip; the two-tone "A Force For Good" band |
| lilly.com | The pill "capsule" treatment now used throughout the header; oversized statement typography set at 106px; the three-up task row with pill CTAs; the horizontal industry card scroller with 63.75px titles |
| dupont.com | The product finder — faceted radio sidebar, search field with a clear button, "Displaying 1 - 8 of 40 Results", and the dense accent-headed result list |

The type scale in `app/globals.css` is the literal set of sizes measured on those
three pages (17 / 21.25 / 25.5 / 31.875 / 38.25 / 51 / 63.75 / 106.25px), made
fluid with `clamp()`. **The palette is no longer theirs** — it comes from the
logo now; see "The colour" below. What the three sites still account for is the
layout, the type scale and the structure, which is what those attributions in
`globals.css` are about.

### The colour

The accent is the logo's gold. It used to be a red averaged from the three
reference sites' brand reds (`#c8141e`, with DuPont's `#e4001c` in the finder
block); the mark is gold, graphite and white, so the reds are gone and the four
tokens below are what replaced them. Nothing else about the reference sites
changed — their attributions in `globals.css` are about layout and structure.

**Gold is a material, not a UI colour, and that is the whole problem.** Every
gold in the artwork scores between 1.2:1 and 2.7:1 against white, so not one of
them can carry text on paper. Red could do every job at once; gold cannot do any
of them everywhere.

What the mark itself does is the answer. Its gradient runs bright at the top and
deep at the bottom, and its orbit ring is black on white and white on black — so
**the accent runs deep on paper and bright on night**, and the four tokens are
that one hue at the four jobs it actually has:

| Token | Value | Its job | Measured |
|---|---|---|---|
| `--gold` | `#d4a94e` | the mark's body gold. A *fill*: solid grounds, wide ornamental rules. Type on it is `--ink` | 8.0:1 for ink on it — white on it is 2.2:1, so never white |
| `--gold-lift` | `#e9cd85` | the highlight band. Gold as a *foreground*, dark grounds only | 11.9:1 on `--night` |
| `--gold-deep` | `#a2763f` | affordances and small marks that carry meaning on paper without reading as body copy: focus rings, underlines, bullets, the check glyph | 4.0 on paper · 3.6 on sand · 4.6 on night — the one value clearing 3:1 on all three |
| `--gold-text` | `#8a6330` | the only member that can be *text* on paper: headings, kickers, links, hovers | 5.4:1 on white · 4.7:1 on sand |

`--gold-lift` is the old `--dust` under a name that says what it does; every one
of its seventeen uses was already on a dark ground, which is why the rename was
a rename and not a redesign. The two dead tokens from the old palette
(`--terracotta`, `--stone` — a vibrant and a cool blue-grey, zero uses between
them) went with the reds. `--warm` / `--warm-deep` are still the media
stand-in's gradient and now run gold into graphite.

Two things got measurably better on the way through, both because red was doing
a job it was bad at:

- **Section headings on `--bg-night`** were red at 3.15:1, which fails. They are
  `--gold-lift` at 11.9:1.
- **The primary button** was white on red. It is now ink on gold, and it
  *brightens* on hover instead of darkening — a darker gold cannot hold ink type
  (4.35:1), and metal catching the light is the right gesture for it anyway.

The check was not by eye. Every element on seven representative routes whose
computed colour is one of the four tokens was measured in the browser against
its own resolved background, at its own font size and weight, against the
threshold that size and weight actually requires. All pass. Re-run that before
changing any of the four values — the numbers in the table are why they are
those values and not prettier ones.

Two places the palette lives outside `globals.css`: `viewport.themeColor` in
`app/layout.tsx` paints the phone browser's chrome `--night` so the bar above
the page matches the capsules in it (it must be the `viewport` export, not
`metadata` — in `metadata` it builds but warns on all 119 routes and is
dropped), and `--logo-ink` / `--logo-void` are the mark's own two page-borrowed
colours, described under "The logo".

### Typefaces

Two real faces, loaded by `next/font/google` in `app/layout.tsx` and **self-hosted**
— they are emitted into the build as `.woff2` under `.next/static/media/`, so no
request leaves the page at runtime and every machine renders the same page:

| Token | Face | Where it shows |
|---|---|---|
| `--font-sans` → `--sans` | **Inter** (variable, 100–900) | everything |
| `--font-serif` → `--serif` | **EB Garamond** italic (400–800) | the `em` in the statement and the task-row heading |

Ringside is Lilly's face and is not free; the stack used to name it first and
degrade to whatever geometric grotesque the machine had, which meant the page
looked different on every machine and the serif italic landed in Times as often
as in a Garamond. Inter is the face that fallback chain was already reaching
for; EB Garamond gives the italic a real italic. Both `:root` lists keep the old
fallback names behind the variable.

**Inter is about 17% wider than the old macOS fallback**, which matters when you
touch a hand-broken line — it is what turned the task-row heading's pyramid back
into a balanced block (see below). It did not cost anything in the header: the
nav holds one row wherever the fallback wrapped to two, and `--header-h` matches
what the header measures at every width — the three steps are listed under
"Header" below, and the three-row phone mismatch that used to leave anchor jumps
29px high is now carried by a step of its own.

### Hero: the cycling word

The headline is "COSMOX CHEMICALS ｜ SPECIALITY" — Aditya Birla's two-weight
split, light run and heavy run either side of a hairline rule. The heavy run
cycles, and the photograph behind it changes with it:

| word | picture |
|---|---|
| Speciality | `hero.jpg` — the hero's own, and the one that prerenders |
| Metal Soaps | `bg-div-01-lithium` |
| Flame Retardants | `bg-div-02-flame` |
| Intermediates | `bg-div-03-pharma` |

**The words are not new copy.** The hero's own lede names three things — "metal
soaps, halogen-free flame retardants and high-purity intermediates" — and those
are the three, after the "Speciality" the headline already carried. Each takes
the division photograph the rest of the page shows it under, so the hero says in
a picture what `#divisions` says in a tile. `components/HeroCycle.tsx` holds the
list; changing the set is changing that array in `app/page.tsx`.

Four things it has to get right, and each of them is why a line of it looks the
way it does:

- **"Speciality" is what prerenders.** Index 0 is the server's and the cycle
  starts in an effect. This is the site's `h1`: the first frame a visitor and a
  crawler see is the headline the page has always had, and with JavaScript off
  it is the only one they see.
- **Nothing reflows.** All four words are stacked in one grid cell
  (`.hero__words` is `inline-grid`, every `.hero__word` at `grid-area: 1 / 1`),
  so the heavy run is always as wide as the longest of them. Measured across a
  full cycle at 1440px: the run holds 590px and the lede and buttons under it do
  not move a pixel. The stack sits *inside* the `<b>` rather than replacing it
  because `b::before` draws the hairline rule, and a grid on the `<b>` itself
  would make that rule a grid item and lay it over the words.
- **The pictures load as they are needed.** A layer only carries its `.bg-*`
  class once it is the one on screen or the one after it, so the server's markup
  asks for exactly one image and the hero's first paint costs what it always
  cost. Each picture then has a whole word's turn to arrive.
- **The brightness is measured, not judged.** The hero photograph is a plant at
  night: the strip the headline sits in reads a mean luminance of 27, white type
  at 17:1, and that is the tone the header capsules and the stats rule were
  tuned against. The three division pictures are daylit interiors and came in at
  89, 40 and 90 — legible (7:1 at worst, and this is 51px type) but more than
  three times brighter, so the hero flashed pale every time the word changed.
  `.hero__media--alt` carries `saturate(.9) brightness(.55)`, which brings them
  to 53 / 26 / 53. **Re-measure if you swap a picture.**

It stands down under `prefers-reduced-motion` — the cycle is never started, so
the hero stays on "Speciality" and its own photograph — and it holds while the
tab is in the background or the hero is scrolled past, the same conditions the
rails hold on. One word every 3.6s (`DWELL` in the component).

### Three-up task row

The "Find a grade / Request a sample / Develop with us" row follows the
statement, and is headed by `.tri__head` — "A *trusted partner* for industries
that demand quality, innovation and reliability.", from the opening paragraph
of `1 about.rtf`. It takes the statement's treatment at the statement's own
size — `--fs-mega` (106.25px), light weight, `.98` leading, tight tracking, the
key phrase in the serif italic. The row ran without a heading until then.

Two 106px blocks that close together is a deliberate call, and the spacing is
what keeps it from reading as a second statement: the section is `.pad-xs`
rather than `.pad-sm` and the heading's own bottom margin is short, so it sits
on the cards it heads instead of floating between the two.

It is the one centred block on the landing page, set with `text-wrap: balance`.

It was a **pyramid** — four hard-broken `<span>`s running long, shorter,
shorter, shortest — while the page rendered in whatever grotesque the machine
had. Inter is wider, and the pyramid's first line ("A trusted partner for
industries") now measures **1314px against a 1280px measure** at 1440. Nothing
recovers it at 106px: breaking earlier makes the *second* line the widest,
because "trusted partner" is set in the serif italic and runs narrower than the
sans around it, and closing the 34px with tracking takes `-.055em`, which lands
2px inside the measure — one copy edit from wrapping.

So the shape went and the size stayed. The two ways back to a pyramid, if it
ever matters more than the size or the sentence does, both measured in Inter at
1440:

- `--fs-xxl` instead of `--fs-mega`, keeping the four breaks — 788 / 568 / 410 / 259.
- a shorter sentence at the same 106px: "Industries that demand / *quality*,
  innovation / and reliability." — 1072 / 817 / 634.

### Applications rail

The `#applications-strip` section, which follows Industries, shows one
application at a time on a horizontal snap rail (`.apps__rail` / `.aslide`), caption and CTA
sitting on the image. Scrolling is native — CSS `scroll-snap-type: x mandatory`
plus `scroll-padding-inline: var(--edge)` — so it swipes on touch and works
with JavaScript off. The ten slides and their copy come from `/applications`,
and each CTA deep-links to the matching section there.

Its head is the one on the site that centres rather than pinning left, because
the rail below it is centred on its middle slide: a gold triangle and the
`APPLICATIONS` eyebrow, then the section's statement in ink with the serif
italic accent `.tri__head` uses, then a sub-line, then the arrows — all on the
same axis. Both lines are transcribed from the "Applications Overview" opening
of `5 application.rtf`. `.apps__title` carries a width of its own (900px) for a
reason worth keeping: the head is a centred flex column, so without one the
block is shrink-to-fit and the sub-line's 62ch measure would decide where the
statement above it wraps. The centre slide is `min(64vw - --inset, 980px)`, so
the neighbours show as slivers rather than halves.

`components/Rail.tsx` adds four things on top of that native scrolling, each
behind its own prop. Both rails on the page now take `loop` and `autoplay`; only
the applications strip takes `spotlight` and `focusable`:

- **`loop`** repeats the set and wraps the scroll position, so the rail never
  reaches an end.
- **`align`** is what the loop's resting position means, and it has to match the
  rail's own `scroll-snap-align`. `centre` (the default) puts the second set's
  first slide in the middle of the rail, which is what the applications strip
  wants; `start` puts it where the first set's first card sits at `scrollLeft`
  0 — the rail's own left padding — which is what the industry scroller wants,
  so its first card still lines up with the heading above it on `--edge`.
  Measured at 390 / 768 / 1440 / 1920: the card rests on 22 / 43 / 81 / 81px,
  which is `--edge` at each of them.
- **`spotlight`** puts `is-centre` on whichever slide is nearest the middle of
  the rail, re-read once per animation frame while scrolling. The class is the
  only thing the component decides; the stylesheet does the rest, holding the
  centre slide at `scale(1)` and sitting the others back to `.84` and 62%
  opacity. The others scale *down* rather than the centre scaling up, because
  `section.apps` is `overflow: hidden` and would clip anything larger. Since a
  scroll-snap area is the transformed border box and the scale is about each
  slide's own middle, the snap positions do not move.
- **`autoplay={ms}`** steps the rail itself. It holds while the pointer is over
  the rail *or* the arrows, while focus is inside either, while the section is
  off screen, and while the tab is in the background — and it never starts at
  all under `prefers-reduced-motion`. The wait is measured from the last
  movement rather than a fixed interval, so pressing an arrow resets the cadence
  instead of being followed a moment later by a step nobody asked for. The
  applications strip runs at 2.8s, the industry scroller at 4s — a card rail
  with a title to read wants longer than a slide that is mostly picture. The two
  never move at once: each holds while its own section is off screen.

**An autoplaying rail has to loop.** The industry scroller is seven cards with
about three in view, which is four steps before it is hard against its end; an
autoplay that runs to a stop has spent the section's whole attention getting
stuck there. `loop` is what makes it endless — and it is also the one visible
change to the section at rest, because the repeated set now shows a sliver of
the previous card in the left gutter where there used to be clean paper. That
sliver is honest (there *is* something to the left now), and from the first step
onwards the rail would show one anyway.

One trap worth knowing if you touch `move()`: it measures a step from
`offsetLeft`/`offsetWidth`, not `getBoundingClientRect()`. Under `spotlight` the
slides carry a `scale()`, and a rect reports the *scaled* width — measuring that
way makes the arrows step short by the scale factor.

Backgrounds are gradient stand-ins like everything else on the page: replace a
slide's inline `--a-bg` with `url("photo.jpg") center / cover no-repeat` and
delete nothing else. The scrim (`.aslide::after`) is what keeps the caption
legible, so keep it when photographs arrive.

### Capabilities index

`#capabilities-strip` follows the applications rail and runs to the "A Force
For Good" band. It opens on a **full-bleed picture band carrying the section's
own copy** — `.pband--caps`, which is the products band's block with the
kicker, the headline, the lede and the button on the photograph. The photograph
is `media-capabilities.jpg`, the one `/capabilities` itself banners with, and
the band lives inside the section rather than taking one of its own, the way the
products band and the finder panel do, so there is no page padding to cancel
between the picture and the rows it heads.

That copy used to be `.caps__intro`, a sticky title column standing beside the
rows — DuPont's index shape. It **moved** rather than being repeated: a headline
on the picture and the same headline in a column under it would only say it
twice. Three consequences worth knowing:

- `.caps__grid`, `.caps__intro`, `.caps__title` and `.caps__lede` are gone,
  along with the `@media (max-width: 1080px)` block that unstuck the column.
  **The sticky heading went with them** — it no longer follows the six rows
  down, because it is now above them on the picture.
- The band needs no geometry of its own beyond the gap to the rows. It briefly
  carried a kicker and nothing else, and then it did: with no copy, the two
  Responsive rules that lower `.pband`'s minimum as the window narrows and zero
  it on a phone collapsed it to a **118px letterbox strip** at 390px, and it
  needed a doubled-class floor to survive them. Copy on the picture is what made
  that special case unnecessary — the band now holds its own height for exactly
  the reason the products band does. Measured: 720px at 1440, 499px at 390.
- The headline keeps the **light weight** it had in the column (`font-weight:
  400`, against the products band title's inherited 700) and takes a 26ch
  measure rather than 20ch. It is half again as long as the products band's, and
  the serif italic in the middle of it was set to sit in a 400 line — at 700 the
  italic reads as a different typeface dropped into a bold sentence rather than
  an emphasis inside it.

White type on the photograph, measured with the type hidden and the strip
sampled: the headline's ground is mean luminance 59 (white at 11.2:1, worst
pixel 3.07:1 against a 3:1 threshold for type this size) and the lede's is 45
(13.8:1, worst pixel 7.8:1). The scrim carries it; unlike the hero's cycling
layers, no brightness hold-back was needed.

Below the band, the six numbered rows (`.caps__list` / `.crow`) now run the
whole measure, one row per capability, each linking to `/capabilities/<slug>`.
Above 1100px `.crow__text` splits into two columns — the capability's name in a
24ch column, its sentence keeping a readable 56ch beside it — because a row
1280px wide with its type stopping at 560 is a row with a hole in it. Below that
they stack, which is the shape they always had. The heading and its line
are the "Capabilities Overview" opening of `7 capabilities.rtf`; each row's
sentence is the lead of that numbered section in the same file. The six rows,
their numbers and their pictures match `lib/topics.ts`, which is what
`/capabilities` itself lists — change one and change the other.

Two things set it apart from the blocks either side:

- **It is type only at rest.** The rail above it is six photographs deep and
  the band below is near-black, so this is where the page draws breath: white
  ground, hairline rules, nothing else. The picture is the *hover* state —
  each row carries its own `.bg-*` class and `.crow::before` opens that
  `--im-bg` behind the copy on a left-weighted scrim, which is why the type in
  this block is written to turn white (`#fff` heading, 74% white body, `--gold-lift`
  numeral). The hairline above the row and the one below it both fade to
  transparent with it (`.caps__list li:has(.crow:hover) + li .crow`), so no
  rule crosses the picture's rounded corners.
- **The title column holds its place** — `position: sticky` at
  `--header-h + 1.5rem`, so it stays with the rows as they pass under the
  floating capsules.

The column is fluid, `clamp(21rem, 34vw, 30rem)`: at a flat 30rem everything
between the stacking point and a desktop left the rows about 280px of measure.
Measured at 1440 the column is 480px and a row 727px; at 1120, 381px and 558px.
**It stacks at 1080px** (in the existing `@media (max-width: 1080px)` block),
where the heading goes static and takes a 24ch measure, and the arrow buttons
come out at 640px — a phone has no hover to afford, and the row's measure needs
the 44px more than the reader does.

### Research & Innovation pair

`#research-innovation` sits between the capabilities index and the "A Force For
Good" band, and holds **both families in one section**: R&D and Innovation
answer the same question from either end, so they are a pair of panels
(`.duo` / `.dpan`) rather than a section each. Each panel names its own six
themes as capsule links straight to `/rnd/<slug>` and `/innovation/<slug>`.
The kicker lines and ledes are the overview openings of `8 r & d.rtf` and
`6 innovations.rtf`; the themes and their order are `lib/topics.ts`.

- **A panel is an `<article>`, not a link.** It holds seven of them — six
  themes and the CTA at its foot — and an anchor cannot contain an anchor. The
  themes are capsules in the products band's language for the same reason
  given there: a border-less text link on a photograph disappears into it.
- **It is the landing page's one `bg-sand` section**, and the sand is doing a
  job: the panels are dark pictures and the band below them is near-black, so
  the inset sand ground is what keeps the two apart. The panel is also what
  keeps the pair from reading as two more of the hairline rows above it.
- **The copy is bottom-aligned** (`.dpan__body` is a flex column with
  `justify-content: flex-end`), so the two CTAs land on the same line however
  differently the two headings break, and the top of each frame is the only
  place its photograph is shown clear.
- **The scrim is held light** — `.34` at the top against the rail's `.5`.
  `media-innovation.jpg` is a dark picture and goes to murk under much more
  than that; the R&D panel is the one to check when tuning it, since its
  picture is the bright one and its lede sits over the middle of the frame.

Measured at 1440: a panel is 627 × 622px and the section 1033px tall. **It
stacks at 900px**, with `min-height: 0` — side by side much below that, each
set of capsules wraps to five or six rows and the copy runs out of measure.

### Business operations table

`#business-operations` sits between the three-up task row and the products
band: the ten business units as **one table read three ways** — what each
division makes, what it is used for, what it can do. A row is the division
(number, name, linked to `/divisions/<slug>`) and that view's list joined into
a line; the tab bar switches which list the second column holds.

**The tabs are CSS, not JavaScript.** Three radio buttons named `bizview` carry
the state and `.btabs:has(#biz-<view>:checked)` shows the matching panel and
fills the matching pill. That buys three things a client component would have
cost: all three tables are in the static HTML, the control works before
hydration and with JavaScript off, and the site still has six client
components rather than seven. Behaviour is a radio group's, which is what a
tab bar wants anyway — Tab moves into the group, the arrow keys move along it
and switch the table as they go. The radio itself is the focus target (1px,
transparent, inside its pill) and `.btab-pill:has(input:focus-visible)` draws
the ring for it, so the keyboard ring lands on the thing you can see.

Two details worth keeping:

- **The division column is `width: 34%`**, so switching a view never moves the
  table — measured at 1440 the columns are 435px and 844px in all three views,
  with the second column starting at x=515 either side of a switch.
- **The name cell hangs its numeral** (`padding-left: 2.1rem` against
  `text-indent: -2.1rem`) rather than using flex: `display: flex` on a `<th>`
  takes the cell out of the table's layout — the browser wraps it in an
  anonymous cell and the columns stop lining up. Half the division names wrap
  to two lines, and the indent is what puts the second line under the first.
  The 640px block undoes both together; leave one behind and the numeral hangs
  off the panel's edge and loses its nought.

Below 640px the table stops being a table — `thead` goes, each row becomes a
block of division-then-line — because the tab pill above already names what
the second cell is.

The lists come from `lib/business.ts` and the numbers, titles and slugs from
`lib/topics.ts`. Note the standing duplication: each `app/divisions/<slug>/`
page writes the same lists out in full (as columns, not as a line), so a copy
edit belongs in both places until those pages are pointed at the lib. Only
divisions 01–03 have the source's "Global Export & R&D" list, which is why
that is not a fourth tab — a column empty for seven rows is not a column.

### Products band

The `#products` section sits between the three-up task row and the finder, and
is the one place on the landing page where the product portfolio is named
rather than searched. It is a full-bleed picture panel (`.pband`) at hero
scale: the photograph fills the whole panel, the copy sits on it behind the
same two-layer scrim the hero uses, and the ten product groups are a real
`<nav>` of capsules linking straight to `/products/<group>`, closed by an "All
products" button.

Two things keep it consistent with everything else:

- It is a **true full bleed**, on the same terms as the two heroes rather than
  as the inset colour bands: `margin: 0`, `border-radius: 0`, so the photograph
  runs window edge to window edge and reads as a picture rather than as a card
  of one. With no panel margin left to subtract, its type is pinned on `--edge`
  and not `--edge-in` — `--edge-in` here would pull the headline `--inset` left
  of every heading in the sections above and below. Checked at 1440px: the
  panel starts at 0 and spans 1440, the headline sits on 81px like every other
  heading; at 390px, 0 and 22px.
- The picture is a `.bg-*` class on the panel like everywhere else
  (`.bg-products-band`), and `.pband__media` reads the generic `--im-bg` — so
  any picture in the photography block can be dropped in by swapping that one
  class.

Its copy is the Products Overview and Product Philosophy paragraphs from
`3 product.rtf`, condensed the way the division tiles are; the group labels
match the "Browse by category" pills on `/products`. `NAV_MENU['/']` lists the
section as "Our products", so the home dropdown reaches it from any route.

Below 900px the reserved height comes down, and below 640px it drops entirely
(`min-height: 0`) — the headline and ten wrapped capsules already make the
panel tall on a phone, and a minimum on top of that only adds empty picture.

### Product finder

The finder lives on its own page, `/finder`, mirroring the DuPont page that
was scraped (which is itself a dedicated `solution-finder/results.html`). The
home page no longer carries a search field of its own — `#finder` there is a
single image panel (`.fcta`) with a line of copy and one "Explore the finder"
button. The whole panel is the link.

That panel is the **second half of the products stack**: it lives inside the
`#products` section rather than a section of its own, directly under the band,
so there is no page padding between the two photographs to cancel — they touch
(measured gap 0 once `.rise` has revealed; before that the 28px you can measure
is the reveal's own transform, not a gap). It is built on the band's terms too:
full bleed, `margin: 0`, no radius, type on `--edge`, so both headlines sit on
the same 81px line and the two pictures read as one stack rather than as two
cards. Its scrim gained a second, top-down layer when it went full width — the
copy now reaches into the thin end of the across gradient on a narrow window,
and the down layer is what keeps the last line legible there. It is kept
shorter than the band (`clamp(400px, 40vw, 560px)` against
`clamp(460px, 54vw, 720px)`): the band is the picture, this is the door.

It runs entirely client-side off a `PRODUCTS` array at the top of
`lib/products.ts` — 112 grades taken from `new products.rtf`, each tagged with a
division number, one or more industry keys and one or more application keys.
Both sets of keys have to match the radio `value`s in `/finder`, which is why
`INDUSTRIES` and `APPLICATIONS` sit in that same file: the facet and the tag it
filters on are one list. Filters, free-text search and the "Show more results"
pagination all work, and a result title links to that grade's own page.

**Four facets, one per axis of the site.** Industries and Applications are what
a grade is for; Product group and Division are two names for where it comes
from. That last pair is the same ten things — the business unit, and what that
unit makes — so `d` and `cs` are one-to-one across the whole range, and the two
facets **move together**: picking either sets the other from `GROUP_OF_DIVISION`
/ `DIVISION_OF_GROUP`. Left independent they would be a trap, since every
mismatched pair of the two is an empty result with nothing on screen to explain
it. They are rendered adjacent so that the pairing reads as one control in two
skins rather than as a glitch.

`GROUPS` is read off `PRODUCTS` itself — the unique `cs`/`c` pairs, in range
order — so it cannot offer a group no grade belongs to. `APPLICATIONS` is a
literal list whose values are the slugs under `app/applications/` and whose
labels are those topics' own titles, which is what makes the whole sidebar
translate with no new dictionary entries. It is not read from `lib/topics.ts`
for the reason the products dropdown is not either: `Finder` is a client
component, and importing the register would ship all 64 topics and their blurbs
to the browser to render ten radio labels.

A grade's `app` list, like its `ind` list, is judgement applied to its
chemistry — the source RTF tags the range by division only. Both are the same
kind of stand-in as the written teasers, and both are worth a chemist's eye
before launch.

**Four facets of ten options is a 1,800px column.** On the sticky sidebar that
scrolls inside itself and costs nothing. Below 900px the sidebar stacks *above*
the results instead, so there they start closed — except any facet the query
string has already set, which has to show what it did. That runs in the same
mount effect as the seeding, because the prerendered HTML has all four open and
the two have to match; it lands before the reader has scrolled past the
banner.

**Routing.** `/finder` seeds itself from the query string, so anything can
link into a pre-filtered result set:

```
/finder?q=stearate
/finder?industry=energy
/finder?industry=pharma&q=indole
/finder?application=flame-retardancy
/finder?group=paints-coatings-pigments
/finder?division=02
```

An unrecognised parameter value is ignored rather than throwing. `group` and
`division` are the two halves of one filter, so either seeds both; `group` wins
if a link carries both and they disagree. Nothing on
the home page uses these parameters any more — the old GET form and industry
chips were replaced by the image panel, and their `.quick-search` / `.chips`
styles were deleted — but the routing is still the way to link into a
pre-filtered result set from anywhere else.

`/finder` used to be the one route with no hero — its header shipped
`hdr--static is-solid` and sat in normal flow. It now opens with the same
`.page-hero` banner as the copy routes (`bg-page-finder`, its title and lede
where `.finder__title` / `.finder__intro` used to be), so the capsules float
over it like everywhere else, and `hdr--static` is gone. The tool
itself is untouched: same facets, same result list, same query-string API.
Below it the closing panel takes `cta--media`, which puts a picture in the
second column and moves the buttons under the copy.

### Division tiles

The section is a **full bleed** (`.band--full` on the section, no inset, no
radius) and the grid is **one gapless wall**: `.tiles` sits outside the
section's `.bleed` and runs `gap: 0`, the tiles are square, so the nine
photographs meet edge to edge and reach both window edges. Only the head and
the closing "All ten divisions" link keep the `--edge` inset.

The type does not run to the window with the pictures. The outer columns carry
the page's `--edge` inset themselves (`:nth-child(3n + 1)` gets it on the left,
`:nth-child(3n)` on the right), so the copy in the first and last tiles sits on
the same line as the heading above it. That column maths is restated at each
breakpoint — two columns below 900px, one below 640px — and measured, heading
left against first-tile type left: 81/81 at 1440, 56/56 at 1000, 50/50 at 900,
36/36 at 640, 22/22 at 390.

Inside that wall, the nine tiles **open their pictures like a door on the
tile's own vertical centre line**. Each `.tile::before` (the picture layer) is a 3-D
plane held almost edge-on at `rotateY(89.5deg)`: a 429px-wide tile projects it
to about 4px, so a closed card shows one bright vertical line down its middle —
the photograph seen along its own edge, not a rule drawn over it. Revealing
swings the plane to 0° over 1.1s and the line opens out into the full picture.
Under the pointer or keyboard focus it turns `-7deg`, in place of the flat
scale it used to do. Four things make it behave:

- **`perspective()` is written into the transform**, not set on `.tile`.
  `perspective` on the parent would make it a stacking context, and this layer
  sits at `z-index: -1` behind the type — the shorthand keeps the 3-D local to
  the layer that moves.
- **Only the picture rotates.** The tile's box, its scrim (`.tile::after`) and
  its type stay square, so nothing reflows and the copy never rides the turn.
- **The closed state is brighter** (`brightness(1.45)` against `.8` at rest).
  A 4px sliver of a dark photograph over `--night` would be invisible; the
  extra brightness is what makes the line read, and it settles back as the
  plane opens.
- **`.rise` is on each tile, not on the grid** — `.tile.rise:not(.is-in)` is
  the *closed* state — so a card opens when its own row scrolls in rather than
  all nine going at once off the grid's top edge. It is still the one reveal
  mechanism on the page and one failure mode: `Reveal` marks `is-in` up front
  when the observer is missing, and the reduced-motion block pins every plane
  open at 0°, no flip and no hover turn. A picture is never left shut.
- **The tiles replay** — they are the only `.rise--repeat` elements on the
  site. `Reveal` keeps them under the observer instead of letting them go after
  the first reveal, and takes `is-in` back off when one leaves, so the door
  shuts again off screen and the flip plays every time the wall is scrolled
  through. The close uses the same 1.1s transition and the same column
  stagger, and it fires at the same viewport edge the open did, so a row that
  slides off the bottom swings shut as it goes. Copy never repeats: only
  `::before` moves, and no text element carries the class.
- **A tile overrides `.rise`'s own fade-and-lift** (`.tile.rise { opacity: 1;
  transform: none }`). The card, its number and its type are there from the
  start, so the closed line is something you can see waiting rather than
  something that fades in already opening. Only `::before` moves.

The columns are staggered 0.12s apart (`:nth-child(3n + 2)`, `(3n + 3)`), so a
row opens left to right rather than as one flip. Sampled at 1440px, as px of
picture showing across a 429px tile: **4 / 4 / 4** closed, **407 / 330 / 40** at
260ms into the reveal, 429 across by ~560ms.

Scrolling the grid past a 900px viewport in 300px steps, the rows open one at a
time, each as it arrives — a row's tiles go from 4px to 429px when their top
edge reaches about 790px (the viewport bottom less `Reveal`'s `-12%`
`rootMargin`), and the rows below stay closed until their turn:

```
scrollY 4079 | row tops  955 1276 1580 | [  4   4   4] [  4   4   4] [  4   4   4]
scrollY 4379 | row tops  655  976 1280 | [429 429 429] [  4   4   4] [  4   4   4]
scrollY 4679 | row tops  355  676  980 | [429 429 429] [429 429 429] [  4   4   4]
scrollY 4979 | row tops   55  376  680 | [429 429 429] [429 429 429] [429 429 429]
```

Scrolling back the other way runs it in reverse: each row shuts as it clears
that same edge, so returning to the wall from either direction finds it closed
and plays the flip again. Measured at 1440px on a 480px tile — 494px of picture
open, 4px shut — a row reads `[494 494 494]` in view, `[4 4 4]` once scrolled
well past, and on scrolling back `[484 445 273]` early in the reveal before
settling at `[494 494 494]`: the stagger replays too.

If you script this to check it, note that `Reveal`'s IntersectionObserver
callback is async: stripping `is-in` in the same block that scrolls the grid
into view gets overwritten a tick later, and you end up filming the opening
instead of the closed state.

### Header

Built to the spec in `../layout.md`, minus its dividers. Two rows float over
the hero image with nothing ruled between or beneath them — `layout.md` asks
for a full-bleed hairline above and below the nav; both were removed, and the
`.hdr__rule` styles went with them.

- **Row 1** (`.hdr__top`) — logo left; Contact, Product Finder and Country
  right, grouped inside one capsule. The finder item is the magnifier icon and
  the words "Product Finder": the icon says *search*, the words say what it
  searches, and it is the only route into `/finder` from the bar. Its
  `aria-label` repeats the visible text rather than paraphrasing it, because
  below 640px the label is `display: none` and the icon would otherwise leave
  the link with no accessible name.
- **Row 2** (`.hdr__nav`) — the nine links, `About us` through `Sustainability`,
  inside a second capsule, centred, words only. There is no Home tab: the logo is
  the link home, which is what a logo is taken to be. The section glyphs were
  briefly on these links and are not any more — see the logo's panel below.

There are three capsules: the brand, the utility group and the nav. The latter
two use the same shell (`.cap`) and the same item inside it (`.cap-btn`) — a
bare control with only a hover fill, so the capsule reads as one object. The
brand carries its own copy of the treatment on `.brand` rather than `.cap`,
because it is a single link, not a group. `layout.md` asks for independent
capsules per control; grouping them was a later call and is the deliberate
deviation from that spec.

Each of the nine nav links opens a dropdown (`.navmenu`) built by
`components/` from the `NAV_MENU` map: a short note on what that page is about,
a "Visit page" link, and the page's own `<h3>` headings as jump links. Those
headings carry `id` slugs added for this purpose — `NAV_MENU` and the slugs
must stay in step, and `scroll-padding-top` on `<html>` in `app/globals.css`
keeps an anchored heading clear of the fixed header. Every entry is a whole
href, never a bare `#slug`: a panel opens from any route, so a bare fragment
would resolve against wherever you happened to be rather than the page it
describes. The menus are built from data
rather than markup so no two pages can drift apart, and they are pure
enhancement: the nine links themselves are in the HTML and work without
JavaScript. They are suppressed below 940px — the nav itself now wraps lower,
at 860px, but a panel that wide is most of a tablet screen and would cover the
page it describes.

**Products is the one panel that is not a list of names — it is the names.**
Divisions and Products name the same ten things — the units, and what those
units make — so as two identical columns of links the second told a reader
nothing the first had not. Its panel (`.navmenu--products`, `.prodmenu`) opens
the range instead: all 112 grades, each under the group that makes it, in the
order `new products.rtf` gives them, with the finder on a gold pill beside them
because a wall that long wants a search as well as a scroll.

`NAV_MENU['/products']` therefore carries no `links` at all — the groups come
from `lib/topics.ts` and their grades from `lib/products.ts`, both by way of
`productMenu()`, so the panel cannot name a group or a grade the register
disagrees with, and no chemical is typed out a second time in `lib/nav.ts`. It
is built in `app/layout.tsx`, on the server, and handed to `Header` as props:
`Header` is a client component, so importing the records there would have
shipped every teaser and industry tag to the browser on every route. What
travels is a name and an href per grade. Only the ten headings are translated —
a buyer looks for "Zinc Ricinoleate" under that name in every market.

Three things about the shape of it. The panel is **full bleed**, `--edge` to
`--edge` with the brand panel's left-anchored entry, because the long
intermediates run past a hundred characters and a narrow column wraps them four
times. The wall **scrolls inside itself** (`max-height: min(58svh, 500px)`,
`overscroll-behavior: contain`), and the scroller and the multi-column box have
to be **two elements**: a multicol with a height cap fragments sideways into new
columns rather than scrolling, so `.prodmenu__wall` scrolls and
`.prodmenu__cols` lays out at its natural height inside it. And `columns: 210px`
is a column *width* like the country panel's — four columns on a 1440 screen
fall to two at 1000px with no breakpoint to keep in step. Each group is
`display: flow-root` with `break-inside: avoid`, so a heading is never stranded
from its list; that is the same trap `.regionmenu__region` documents, where
`inline-block` defeats Chrome's column balancer. The fold falls in the middle of
a list, so `.prodmenu::before` fades the last rows between the scroller and the
finder.

The logo opens one too, and it is **the large one** — the only menu here that is
about the whole site rather than one page, so it runs the full width between the
page edges (`calc(100vw - 2 * var(--edge))`) and carries three columns:

1. what the company is — kicker, lede and a "Visit page" link to `/`;
2. **Sections** — all nine of `NAV`, each with its glyph in a 34px tile that
   fills red on hover. The glyphs are `d` strings on `NAV` in `lib/nav.ts`, not
   markup, drawn on a 24×24 grid and stroked in `currentColor`; they are
   `aria-hidden`, because the word beside each one already names the page. This
   is where they belong: on the bar they were 14px of thin line beside a 12px
   word, nine in a row reading as a strip of pictograms, and they cost the nav
   ~200px — enough to push its wrap from 860px to 1008px;
3. **On the home page** — `NAV_MENU['/']`, the home page's own headings, one
   column.

Nine sections go three-up down to 1360px and two-up below it, where the panel no
longer has ~530px of middle column to give them. The nav
panels centre under the nav capsule; the logo sits hard left, so `.navmenu--brand`
drops from the left edge instead and is narrower. A logo is not normally a menu,
so `.brand__caret` is there to say that it is; it rotates on open and, like the
panel itself, is only rendered above 940px.

All three capsules are solid, with no border and no blur, and **they do not
change on scroll** — `.hdr` itself paints nothing in any state. The bar is the
capsules; there is no surface behind them. The utility group and the nav are
`--night` with white type; the brand is the exception and is paper — see "The
brand capsule is the light one" below.

That is the end point of three separate strippings, in order. They began as
Lilly's translucent glass islands, white at 14% over a
`backdrop-filter: blur(12px)`: the blur smeared the photograph behind them and
left the type sitting on whatever part of the picture happened to be underneath,
so the fill went opaque black. They were ringed by a hairline: once the fill was
opaque that only muddied the edge it was meant to define, so it went too. And
the header used to paint a white bar with a soft shadow once the banner had
scrolled past, with the capsules inverting to sand-on-white; the bar went, and
with it the inversion — an opaque black pill is legible over a photograph, over
the page's white sections and over its near-black bands alike, so there was
nothing left for a second state to fix. `--night` is also the dropdown panels'
near-black, so a panel reads as its capsule carried downward rather than as a
second surface.

The brand is a capsule for a reason worth keeping: it is the one element in the
header with no ground of its own. While the white bar existed it could be white
over a banner and ink over the bar, but with the bar gone it floats over
arbitrary content, and the page has near-black bands (`.bg-night`, the divisions
band, `.force`) as well as white sections — no single text colour is legible over
both. Giving it a capsule of its own settles it in one state everywhere.
`Header` still sets `.is-solid`, and no CSS reads it any more.

### The brand capsule is the light one

That capsule is `--paper`, not `--night`, and it is the only thing in the header
that is not near-black. The reason is the mark rather than the composition. The
planet is graphite, and graphite has nowhere to go on a near-black ground:

| the mark, on… | `--night` #17130f | `--paper` #ffffff |
|---|---|---|
| planet body #2f2f2f | **1.38:1** | **13.4:1** |
| orbit ring (`--logo-ink`) | 18.5:1 as white | 19.7:1 as #0b0b0b |
| the gold crescent, against the graphite under it | 6.1:1 | 6.1:1 |

On the dark capsule the planet dissolved into its own ground: what read was the
gold crescent and a white ring around nothing, which is a fragment of the logo
rather than the logo. On paper the planet is the solid disc the artwork draws,
the ring keeps the `:root` light cut (so only the footer's `.brand` still flips
`--logo-ink`/`--logo-void`), and the gold is unaffected either way — it takes
its contrast from the graphite it sits on, never from the page, which is the
same rule as everywhere else in "The colour".

The type follows the ground: `--ink` for the wordmark (17.6:1) and `--gold-text`
for the "CHEMICALS" rule under it (5.4:1), the one gold that can be text on
paper. And the capsule carries `--shadow-md`, which is load-bearing rather than
decorative — the header floats over `--paper` sections as well as sand, night
bands and photographs, and on a white section a white capsule has no edge at
all without it. Nothing in the treatment changes the capsule's box, so
`--header-h` and every breakpoint below are unmoved.

Two things this look costs, both by design rather than oversight: over the
darkest part of a photograph the capsule is invisible and the nav reads as bare
white type on the picture, with the white `aria-current` pill the only thing
locating the bar; and page content scrolls directly under the capsules with
nothing hiding it.

The current page is the one filled item (`aria-current="page"`). Below 860px the
nav links wrap inside their capsule, which swaps the stadium radius for a 26px
rounded rectangle; below 640px the utility capsule drops its labels and goes
icon-only, which is why each item carries an `aria-label`.

`--header-h` in `app/globals.css` is the measured height of the whole header and
feeds the hero's top padding — re-measure and update it if you add a row or
change anything that alters a capsule's box: its padding, its border, or the
glyph size inside it. It has three steps, each measured in the browser:

| Width | Header | `--header-h` | Why |
|---|---|---|---|
| ≥861px | 137–138px | **139px** | one row; the range is the fluid label size |
| 860–462px | 168px | **169px** | the nav has wrapped to two rows |
| ≤461px | 198px | **199px** | a third row |

It went 127 → 123 when the borders came off, → 128 when the brand became a
capsule and its padding made row 1 the taller of the two, and → 139 when that
capsule was enlarged: a 40px mark and a 24px wordmark, scoped to `.hdr__top` so
the footer's lock-up keeps the old size. The third step is new — the token never
carried a three-row value before, so every banner on a phone used to start 29px
too high.

One thing the token cannot know is the locale. The swap happens in the browser,
so a longer set of labels can wrap the nav at a width where English does not, and
in that band the token still reads the one-row value and a banner comes up about
30px short. Setting the token from a `ResizeObserver` on `#hdr` would close it
for good; nothing does that today.

Two widths the token does not cover, and did not before either: the nav actually
wraps at about 960px but the media query is at 900px, so between roughly 901 and
960 the real header is ~158px against a token of 128; and below about 500px it
wraps to a third row (~187px, ~216px under 320px) against a token of 158. The
banner padding adds `clamp(2rem, 4vw, 4rem)` on top, which absorbs the phone case
in practice, but an anchored heading lands slightly under the bar at those
widths. Fixing it properly means moving the breakpoint to match the wrap.

## Topic pages

Eight of the content routes are **families**, and every topic in them has a page
of its own: ten applications, ten industries, ten business units, ten product
groups, and six each of capabilities, innovations, research themes and
sustainability programmes. 64 in all.

Each was a `.detail` record on its family's index page, and the wall of ten of
them was most of what those pages were. Now:

- `app/<family>/<slug>/page.tsx` — one per topic, holding only that topic's
  transcribed copy. The copy was **moved**, not retyped: each page's body is the
  JSX sliced out of the record it used to be.
- `components/TopicPage.tsx` — the frame around it: the family's banner carrying
  the topic's own title and number, the opening panel (`.pintro`) holding the
  one-line description against the topic's own photograph, the body, then the
  walk to the topics either side of it (the last wraps to the first) and a CTA.
  The walk is two cards carrying those topics' own pictures — the same ones the
  family's grid shows them under — and the CTA shares their band rather than
  taking a `pad-sm` section of its own. The only wording on a topic page that is
  not transcribed is that CTA, which is deliberately identical on all 64.
- `components/TopicGrid.tsx` — the showcase the family's index now opens onto:
  picture, number, title, the one line, and *Explore*.
- `lib/topics.ts` — the register. Slug, number, title, blurb and picture for all
  64, grouped by family, and `findTopic` for the previous/next walk.

The grid, the nav dropdowns and the walk all read `lib/topics.ts`, so they
cannot drift apart. **Adding a topic means two things: a folder under
`app/<family>/` and an entry in `lib/topics.ts`** — and the folder name must
equal the slug, or `findTopic` returns nothing and the page 404s.

Slugs come from the titles (`Lubrication & Grease` → `lubrication-grease`), not
from the old heading anchors, several of which had been truncated mid-word. The
landing page's division tiles, industry cards and application slides, the
product pills and the nav dropdowns were all repointed at the new pages; nothing
links to an in-page record any more.

Eighteen of the 64 — every innovation, R&D and sustainability topic — had no
description in the source copy. Their cards show the picture and the title
alone, and their pages take `.pintro--band`: the photograph alone at a band's
proportions, rather than a panel with an empty half where a paragraph would go.
Nothing was invented to fill the gap.

### Grade pages

Beneath the ten product groups sit the 112 grades from `lib/products.ts`, each
with a page at `/products/<group>/<grade>` — `Lithium Myristate` lives at
`/products/lithium-metal-additives/lithium-myristate`. `components/GradePage.tsx`
is the frame; the page files are generated stubs that name the group and the
grade.

A grade record is a name, a group, a division number, the industries it is
filtered under and one line of description — and **that is all a grade page
claims**. No specification, no CAS number, no purity figure was invented to fill
the page out; the numbers a buyer needs come on the TDS/SDS, which is what the
CTA asks for. What the page does add is the routes onwards: up to its group, out
to `/finder?industry=…` for each industry it serves, and across to the other
grades in the same group.

That is a thin record for a whole page, and the page used to read like one: a
line of copy beside a picture, then three short cards adrift in a band sized for
ten. It is arranged rather than listed now. Everything the record holds — the
group, the division, the industries as pills — sits on the hairline along the
foot of the opening panel, which is where a datasheet puts it and where a reader
is already looking; the rest of the group is the full-width `.grade-list` below,
the same list the group's own page carries. The band that held two pills is
gone.

Two things now read `lib/products.ts` that did not before. The **finder's
results link straight to the grade pages** rather than all pointing at
`/products`. And the **industry facet moved into `lib/products.ts`** — it used
to be a list inside `components/Finder.tsx` that had to be kept in step with
every grade's `ind` array by hand, and it is now one exported list that the
radios, the grade pages and the `?industry=` API all read.

## Interior pages

The ten content routes share the layout, the stylesheet and the components;
`/finder` and the 64 topic pages share the banner with them (a topic's takes
`page-hero--topic`, which drops a size and loses the caps, because a topic's
name is longer and more specific than a section's).
They open with `.page-hero` — the Aditya Birla hero at interior scale: a
full-bleed photograph, the scrim, the breadcrumb standing in for the hero's
eyebrow (same uppercase tracking, same red dash), and the two-weight headline
split by a hairline rule. Single-word titles take `page-hero__title--solo`, which drops
the rule so it has nothing to dangle off. The header's capsules float over the
banner exactly as they do over the home page hero. `Header` still observes
`.hero, .page-hero` to set `.is-solid`, though no CSS reads that class now.

Below the banner there is no default section padding, so every `<section>`
carries its own class as on the home page — `pad`, `pad-sm` or `pad-xs`,
optionally with `bg-sand` or `bg-night`.

### The eight index banners cycle

The family index pages — `/applications`, `/industries`, `/divisions`,
`/products`, `/capabilities`, `/innovation`, `/rnd`, `/sustainability` — do not
stand on one photograph. Their banner is `components/BannerCycle.tsx`: the
family's own topic pictures stacked and cross-faded, with a line under the lede
naming the one on screen — `03 · Electrical & Electronics`, the number and title
the grid further down the page prints under the same picture, linking to the
same page, with a prev/next pair at the far end of the row.

It is the landing hero's idea (see "Hero: the cycling word") in the one form a
banner can take it. The hero cycles the heavy word of its own headline; a family
banner cannot, because its `<h1>` is the page's name and the titles that would
replace it run to "Industrial Machinery & Equipment" — about 1250px of 63px
type, which wraps the headline for some words and not others. So the headline
holds still and a caption changes instead.

Nothing in the frames is invented or duplicated: `bannerFrames()` in
`lib/topics.ts` returns the family's topics in the grid's order, so adding a
topic adds a frame and the banner cannot name a picture the register disagrees
with. Four things it holds to, the first three inherited from `HeroCycle`:

- **Frame 0 prerenders.** Topic 01's picture and caption are `is-on` in the
  server's HTML, so with JavaScript off, before hydration and under
  `prefers-reduced-motion` the banner is a still of the family's first topic.
  For `/applications`, `/industries`, `/innovation` and `/sustainability` that
  is the picture the banner already had; for the other four it is the family's
  first topic in place of a generic stand-in.
- **Nothing reflows.** Every caption sits in one grid cell, so the row is as
  wide as the longest title. The off frames are `visibility: hidden`, which is
  also what keeps their links out of the tab order and the accessibility tree.
- **The pictures load as they are needed.** A layer takes its `.bg-*` class only
  once it is the current frame or the next, so first paint asks for one
  photograph rather than ten. (The grid below the fold asks for all of them
  anyway — this is about what competes with the LCP image.)
- **Reaching for it stops it.** Pointer or focus on the *caption row* holds the
  cycle, so the link never steps out from under the pointer mid-click. Hovering
  the picture does not: a banner this tall would otherwise sit frozen for anyone
  whose pointer rests on it while reading. It holds off-screen and in a
  background tab as well, and never starts under `prefers-reduced-motion`, where
  the arrows still work — a control the visitor asks for is not motion the
  visitor did not.

Each frame dwells 4.5s (the hero's 3.6 is for a word to glance at; this is a
line to read) and the clock is measured from the last move, so pressing an arrow
resets the cadence instead of being followed a moment later by a step nobody
asked for — the same clock as `Rail`'s.

**The scrim carries all ten pictures without help.** Measured on the rendered
banner — each photograph cover-fitted, both scrim gradients composited over it,
then the mean and the brightest 5% of the pixels under each line of copy:

| | worst frame, mean | worst frame, brightest 5% |
|---|---|---|
| headline, white | 5.5:1 | 3.1:1 |
| lede, 85% white | 6.6:1 | 4.1:1 |
| caption, white | 11.0:1 | 8.2:1 |

So no per-layer hold-back like the hero's `brightness(.55)` — the numbers did
not ask for one, and the still banners already carry the same range (`/rnd`'s
own picture measures 4.3:1 at the brightest 5% under the lede). The two frames
at the low end are `media-innovation.jpg` and `app-10-nutra.jpg`; re-measure if
real photography replaces the placeholders.

The content components — `.pintro` and its parts, `.section-head`, `.feature`,
`.figure`, `.card`, `.card__img`, `.card__num`, `.topic-grid` / `.tcard`,
`.topic-body`, `.grade-list`, `.topic-walk`, `.roster`, `.detail` /
`.detail__img` / `.detail__head` / `.detail__body`, `.list` / `.list--check`,
`.pills`, `.value-grid`, `.contact-card`, `.contact-line`, `.enquiry`,
`.form-grid` / `.field` — live under "Interior pages" in `app/globals.css`. Same
names, warm palette, gold accent, and the measured type scale. **Nothing on `/`
uses any of them**, which is what makes the whole block safe to work in: the
landing page shares only `.cta`, `.btn`, `.eyebrow`, `.sec-head`, `.link-arrow`,
`.rise`, the `pad*` / `bg-*` section furniture and the photography classes, so a
change to an interior component cannot reach it. `/finder` uses `.page-hero`,
`.cta` and its own DuPont block.

### The opening panel

Every interior route below the landing page used to open the same way: a
paragraph in one half of a `.feature` row and a 16/9 photograph in the other.
Two or three lines of copy beside a picture that sets its own height left the
copy column half empty on all thirteen of them, and a page that opens on a hole
reads as a page nobody finished. `.pintro` is that row rebuilt as **one panel**:

- the two columns are cells of the same box, so `align-items: stretch` makes the
  picture exactly as tall as the copy however long the copy runs — the panel is
  full by construction rather than by luck;
- the photograph is bled to the panel's own edges (the `.detail--media` trick),
  so it reads as one wall of the panel and not as a card inside a card. It takes
  any `.bg-*` class, like `.figure` and `.card__img`, and leans in 4% when the
  panel is pointed at;
- `.pintro__lede` sets the copy a step up the scale (`--fs-base`), and
  `.pintro--statement` a step above that for the one- and two-sentence openers a
  topic or a grade has;
- `.pintro__meta` is the hairline along the foot of the copy column. That is
  where the ten category pills went on `/products`, the five key advantages on
  `/divisions`, and a grade's group, division and industries — all of them
  previously a second column that agreed with the first about nothing;
- `.pintro__tag` is the gold capsule on the photograph. Gold is a fill, so it
  takes `--ink` type, never white;
- `.pintro--flip` mirrors it, `.pintro--band` is the picture on its own for the
  eighteen topics with no description. Below 880px the panel is one column with
  the photograph first, at 16/9.

### What the interior pass changed

The thirteen unique pages and the two shared frames were reworked in one pass,
against two complaints: they were plainer than the landing page they lead off,
and their layouts kept leaving holes.

- **Banners move.** `.page-hero__media` is bled 2% past every edge and drifts
  across 30s, alternating so there is no seam, and the four lines of the banner
  walk in 60ms apart. A gold hairline along the foot of the band ties a
  photograph running to all four window edges back to the page under it. The
  home hero takes none of this — it has motion of its own.
- **Ten cards now fit.** Ten topics in a three-column grid is 3 + 3 + 3 + 1, and
  that stranded card was the worst hole on the site. The first and last cards
  take two columns each, so ten cards occupy twelve cells and the grid closes on
  four full rows; a card two columns wide is a different card, with the
  photograph down its side. Families of six already divide by three and are left
  alone — `:has(> :nth-child(10))` is the test. `grid-auto-rows: 1fr` makes a row
  of cards one row.
- **The closing panel is the night cut.** `.cta--night` on every interior page,
  so they all end on the same note; `/` keeps the sand one, because it ends on a
  dark band already. `.cta--close` is the same panel sharing a band with the
  block above it, which is what removed the screen of nothing that sat between
  the last card and the last panel on a topic page.
- **Interior pages reveal on scroll.** They carried no `.rise` at all — every
  block arrived flat while the landing page's rose. The shared frames and the
  index pages set it now, and the topic grid staggers a row 70ms at a time.
- **The ten divisions on `/about` are links.** They were twenty lines of bullets
  in two columns — the one place on the site that names all ten units and the
  one place they were not doors. `.roster` is the set as rows, each carrying the
  number it has everywhere else, which is also why the order changed: the source
  copy lists them 03, 02, 01, 04… and a numbered list out of order reads as a
  mistake. The wording after each name is the source copy's, unchanged.
- **The contact form has a column beside it.** It used to be an 860px card
  centred in a full-width band with nothing either side; `.enquiry` gives its
  heading, its standing line and the numbers to call a column of their own, and
  `.form-grid` went from three tracks to two so the four short fields pair up
  instead of stranding the phone number on a row of its own.
- **The finder's facets follow the results.** The range is a dozen screens of
  list beside a column that ran out after one. A result row is a whole hit area
  now, not a line of type with a link in it.
- Six inline `style={{…}}` attributes on the interior pages became `.center`,
  `.mt-lg`, `.contact-card__note` and `.pills--lg`. A stray inline style is how a
  hand-tuned system starts drifting.

### Pictures on the content pages

The copy pages are long and dense — ten near-identical records of lists on
several of them — and set as type alone they read as a wall. Three blocks put
a photograph next to the words, and all three take a picture the same way: put
any `.bg-*` class from the photography block on the element, and it shows
(they all read `--im-bg`, which every one of those classes now sets).

- **`.pintro__media`** — the photograph in a page's opening panel, bled to the
  panel's edges and as tall as the copy beside it. This is what every page now
  opens on; see "The opening panel" above.
- **`.figure`** — the picture a `.feature` row is built around, `4 / 3` by
  default with `--wide` (16/9) and `--tall` (3/4). It used to carry the opening
  row of every page, which is where the holes were; what is left of `.feature`
  is the rows further down a page where both columns genuinely have content.
  `.feature--center` centres the short column against the tall one, and
  `.feature--flip` puts the picture first above 900px. Copy is always written
  first in the markup so the heading leads on a phone and for a screen reader.
- **`.card__img`** — a 16/9 band across the head of a `.card`, pulled out by
  the card's own padding to meet the border. `/about`'s four cards use it, in
  `.grid-pair` rather than `.grid-2`: the 320px track in `.grid-2` fits three
  columns on a desktop, which strands the fourth card on a row of its own.
- **`.detail--media` + `.detail__img`** — the record with a photograph. The
  picture takes a quarter-width column down the left, bled to the card's edges
  and running its full height, clipped by the card's radius, with the red rule
  still on top of it. Below 760px it moves to the top of the record at 16/9.
  The head and body are not wrapped in an element of their own — they are
  placed into column 2 by hand, so a plain record and a picture record differ
  by exactly one `<div>`.

Two details in there that look arbitrary and are not: the picture spans its
rows with `1 / -1`, which needs `grid-template-rows` declared, because a
negative line number only counts back through the *explicit* grid and against
implicit rows it silently collapses to nothing; and the four-part record bodies
(divisions 01–03) get `repeat(2, 1fr)` through `:has(> :nth-child(4))`, because
what is left beside the picture holds three 240px tracks but not four, so they
broke 3 + 1 and left a hole.

Two things to know when editing them:

- `--gold-text` only clears 3.4:1 against `--night`, which is fine for a 38px
  heading and not for 13px tracked caps, so `.bg-night .eyebrow` takes
  `--gold-lift` instead (11.9:1). Keep that if you add dark sections — including
  inside `.cta--night`, whose edge rule is `--gold-lift` for the same reason.
- The contact form's "not connected to a backend yet" handler moved from
  the old `main.js` into `components/ContactForm.tsx`. Wiring a real backend
  means deleting the `onSubmit` handler there.

### Photography

Every picture on the site is a real photograph, all from Unsplash under the
Unsplash Licence (free for commercial use, attribution not required). 35 files:
`public/hero.jpg` plus 34 in `public/img/`, about 4.2 MB in total.

**They are placeholders.** None of them show Cosmox's own plant, lab or
product — they are stand-ins with the right shape and mood, to be replaced by
the company's own photography. That matters more here than on a personal
site: a visitor reasonably reads these as this company's operations.

**Where the paths live.** Every image is declared in `app/globals.css` as a
one-line `.bg-*` class near the top of the file, and the element carries that
class:

```css
.bg-app-05-automotive { --im-bg: url("/img/app-05-automotive.jpg") center / cover no-repeat; --a-bg: var(--im-bg); }
```

Each line names its file once, in `--im-bg`, then aliases the variable its own
block reads — `--tile-bg` for a division tile, `--a-bg` for an application
slide, `--ph-bg` for a banner. `--im-bg` is the generic one, and it is what
makes the interior blocks (`.figure`, `.card__img`, `.detail__img`) able to
take *any* picture in the list: put the class on the element and it shows.

They are *not* inline styles, for a specific reason: a relative `url()` inside
a custom property resolves against the stylesheet that uses the `var()`, not
the document, which made the paths ambiguous under the old layout. Everything
now serves from `public/`, so they are written absolute (`/img/…`) and resolve
the same wherever they are used. Swapping a picture means replacing the file
in `public/img/`, or editing that one line.

The slots, by section: 2 `.proof` panels, 1 `.pband` products band, 1 `.fcta`
finder panel, 9 division tiles, 10 application slides, 7 industry cards, 5
media cards — the ten interior banners (`.bg-page-about` … `.bg-page-finder`),
and, since the copy pages got their pictures, 77 more slots across the content
routes: 64 record pictures (one per `.detail`), 9 `.figure`s in opening feature
rows, and 4 `.card__img` bands on `/about`. All of those re-use the 34 files
rather than adding any. Across pages they repeat deliberately, exactly as the
banners always have.

Within a page they do not, with **one exception**: the products band
(`.bg-products-band`) shows `app-03-polymers.jpg`, which is also the third
slide of the applications rail much further down the same landing page. Before
the band there was one picture per slot and the landing page used all 34 files
exactly once, so a new slot on it could only be a repeat or a 35th file. The
pellet photograph was the pick because it is the one picture of *material*
rather than of plant or laboratory, and the largest file here — this is the
biggest surface any of them has to fill. Shooting or sourcing a 35th picture
for the band, and giving the rail its own back, is the fix; it is one line in
`globals.css` when that picture exists.

**Scrims are load-bearing.** `.tile::after` and `.icard::after` were tuned for
the dark gradients these replaced; over photographs they were far too light
and the type disappeared, so both were deepened and the images themselves are
held back with `filter: saturate() brightness()`. If you swap in brighter
pictures, re-check the type before shipping.

**Avoid third-party branding.** Two candidates were rejected for exactly this:
a car with a visible manufacturer badge and a branded consumer battery. A logo
that is not yours on your own marketing page implies a relationship that does
not exist.

**Weight.** ~4.2 MB of JPEG is heavy for a static marketing site. Before
launch, convert to WebP or AVIF (typically 30–50% smaller at the same quality)
and consider `srcset` for the large slides. Nothing here is optimised beyond
sensible pixel dimensions and q=60.

## The logo

The mark is a gold-and-graphite planet with a Greek **α** across it and a black
orbit ring, over the wordmark `COSMOX` / `INTERNATIONAL`. It is vector, and it
was **traced from `updated logo.jpeg` in the repo root** — that JPEG is the only
artwork that came with the brand, so it is the master and it stays.

Nothing here was redrawn by eye. Every number below was fitted to the pixels,
and the check on all of it is one measurement: **how far the emitted curve
strays from the dense contour it came from.**

| | Measured | How |
|---|---|---|
| Planet | c (631.02, 464.17) · r 255.31 | least squares over 1371 radial edge crossings; median residual **0.06px** |
| Orbit ellipse | c (629.28, 463.74) · 348.05 × 113.26 · −24.92° | walking its own normal until its stroke sits centred on it; **0.32px** sd |
| Orbit stroke | 24.2 wide, its gap 44.4 | both across the true normal, not down a scanline |
| Glyph outlines | ≤ 0.85px max deviation | corner-pinned simplification, swept against the contour |

Three of those took a second pass to get right, and each was a real defect:

- **The orbit is not concentric with the planet.** It sits 1.74px to the
  planet's left and 0.43px above. Forcing them to share a centre — the obvious
  assumption, and the wrong one — leaves the ring 1.7px sd off its own stroke,
  which is what made its near half and its far half disagree by 2.7px. Freeing
  the centre brought that to 0.32px and made its gap come out exactly symmetric
  (±22.2) instead of needing a fudged 1.7px offset. It still crosses the
  planet's edge at exactly four points — 45.50°, 133.79°, 226.41°, 314.31° —
  but that is a property of an ellipse and a circle, not of a shared centre.
- **Corners have to be pinned before anything is simplified.** Douglas–Peucker
  keeps the *mean* deviation low and wrecks the maximum, because all the error
  lands in one place: it is free to move a vertex off a sharp apex, and the two
  edges meeting there get rounded. Finding corners on the dense contour first
  and only simplifying the runs between them took COSMOX's worst point from
  **7.92px to 0.72px** and INTERNATIONAL's from 4.02px to 0.85px.
- **The alpha had to be reconstructed under the ring, and it took three goes.**
  Morphologically closing the visible white bridges the glyph across the ring —
  but the ring's own white gap runs nearly parallel to the alpha's right stroke
  for ~200px, and a closing wide enough to bridge the ring is wide enough to
  weld the two together, so the glyph grew a spur 100px along the orbit. What
  "the alpha continues under the ring" actually means is that it shows on
  *both* sides of the ring there, so that is what is now tested, along the
  ring's own normal — and only on the ring's **near** half. The far half runs
  *behind* the planet, and at t = 270° that is straight through the top of the
  bowl; asking "does the glyph show on both sides of the ring?" about a ring
  that is not on top of anything gets no for an answer and takes a bite out of
  the **c**. That bite was the one defect visible without an overlay, and the
  only one the deviation metric could not catch: the path matched its contour
  to 0.74px the whole time, because the *contour* was wrong. Area and centroid
  against the source are the check that catches it — they now agree to 1.2% and
  0.3px.

The glyph and both wordmark lines are traced at the **0.5 iso-level of the
antialiased image** rather than off a 1× binary mask. That is what keeps
`INTERNATIONAL` straight: its strokes are ~6px wide in the source, so rounding
each edge to the nearest whole pixel is an 8% error and every stem comes out
visibly wavy. Tracing where the ink actually reaches half coverage puts the
outline between the pixels. End to end the finished SVG sits within **1.17%**
mean pixel difference of the JPEG, and its orbit tracks the artwork's to within
0.34px of centreline and 0.08px of width.

### It has to work on more than one background

Two things in the logo are not really the logo's colours — they are the page's:

| token | what it paints | light ground | on `--night` |
|---|---|---|---|
| `--logo-ink` | the orbit ring (and `INTERNATIONAL` in the lock-up) | `#0b0b0b` | `#fff` |
| `--logo-void` | the gap that holds the ring off the planet | `--paper` | `--night` |

A black ring on a near-black capsule is an invisible ring, and the gap that
separates the ring from the planet is *whatever is behind the logo* — in the
original artwork that gap is the white page. So both are CSS custom properties,
declared on `:root` in `globals.css` as the light-background cut and flipped on
`.brand`. The planet and the α do not change: gold reads on both grounds, and
the α is white inside a dark planet either way. Put the mark on any other dark
panel and flip the same two tokens there.

`components/BrandMark.tsx` is the mark alone — the header capsule and the
footer lock-up both take it from there, and it is the **only** copy in the app.
It takes an `id` prefix (`<BrandMark id="hdr" />`, `<BrandMark id="foot" />`)
because it renders twice per page and its gradient and clip ids would otherwise
collide. The mark is 672 × 519 in its own units — wider than tall, since the
ring reaches past the planet on both sides — so `.brand__mark` sets **height**
and leaves width `auto`. At the header's 40px that is a 52px-wide box; the
brand capsule went 203 → 215px and no header breakpoint moved (still 139 / 169
at ≤860px / 199 at ≤461px, all re-measured).

`app/icon.svg` is the favicon: the same mark, dark cut, on a rounded `--night`
tile — it needs a ground of its own to survive whatever the browser puts behind
a tab.

### The files in `public/logo/`

For anything outside the app — a deck, a datasheet, a supplier portal, print.
All ten are the same traced geometry; only the ink and the gap change.

| file | use it on |
|---|---|
| `cosmox-lockup-light.svg` · `cosmox-mark-light.svg` | white and light grounds |
| `cosmox-lockup-dark.svg` · `cosmox-mark-dark.svg` | near-black and dark grounds |
| `cosmox-lockup-auto.svg` · `cosmox-mark-auto.svg` | surfaces that follow the reader's light/dark setting (a GitHub README, a docs site) — **not** a page with a fixed background, since these key off the viewer's OS and not off what is behind them |
| `cosmox-lockup-mono.svg` · `cosmox-mark-mono.svg` | one colour, black — single-colour print, engraving, a stamp |
| `cosmox-lockup-mono-reverse.svg` · `cosmox-mark-mono-reverse.svg` | one colour, white — over a photograph or a solid brand colour |

The mono cuts are not the colour logo with the gradients stripped. Flattening
the planet loses the gold/graphite split that gives it its form, so in those the
split, the α and the ring's gap are all **knock-outs**: the ground shows through
them, whatever the ground is.

### Two things that are still open

- The artwork reads **COSMOX INTERNATIONAL**; the site's lock-up still reads
  **Cosmox / Chemicals**, which is what all 188 routes of copy say. That is a
  naming decision, not a logo one — see "Company name" under *Still to fill in*.
  Only `BrandMark` changed here; the words beside it did not.
- Re-tracing, if the master artwork is ever replaced: the scripts are not in the
  repo. Geometry and colour stops are all recorded above and in the comments in
  `BrandMark.tsx`, which is enough to redo it.

## Countries and languages

The globe capsule in the header used to be a dead `<button>` that said "India".
It now opens a panel of **seventy countries in six regions**, each carrying a
language, and choosing one switches the site. The site also **works out which
one you are in** and opens there — see *Detecting the country* below.

| Region | Countries |
|---|---|
| Asia Pacific | India (English and हिन्दी), China, Japan, South Korea, Taiwan, Vietnam, Indonesia, Malaysia, Singapore, Thailand, Philippines, Pakistan, Bangladesh, Nepal, Sri Lanka, Myanmar, Cambodia, Australia, New Zealand |
| Europe | United Kingdom, Ireland, Germany, France, Italy, Spain, Portugal, Netherlands, Belgium, Switzerland, Austria, Sweden, Norway, Denmark, Finland, Poland, Czech Republic, Hungary, Romania, Greece, Russia, Ukraine, Turkey |
| Americas | United States, Canada, Mexico, Brazil, Argentina, Chile, Colombia, Peru |
| Middle East | United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Israel |
| Africa | Egypt, Morocco, Algeria, Nigeria, Ghana, Kenya, Tanzania, Ethiopia, South Africa |
| Central Asia & Caucasus | Kazakhstan, Uzbekistan, Azerbaijan, Georgia |

The countries come from `new countries.rtf` in the repo root, all seventy of
them, in that file's own grouping.

**A country's language is the language this site can actually show it in, not
the country's own first language.** There are eleven dictionaries, so the panel
offers Español to five Latin American markets, Deutsch to Austria and
Switzerland, Nederlands to Belgium and Français to Morocco and Algeria — and
plain English to Brazil, Poland, Saudi Arabia and the rest. That is the honest
listing: offering "Português" and then rendering an English page is worse than
saying English, and English is how speciality chemicals are actually bought
across most of these desks. Taiwan is English rather than 中文 because the one
Chinese dictionary is Simplified. Adding Portuguese, Russian, Turkish, Polish or
Arabic is a dictionary each, and nothing else has to change — except Arabic,
which also wants `dir="rtl"` support the stylesheet does not have yet.

`lib/i18n/locales.ts` is the register. India is listed twice, which is why the
key is `id` (`in-en`, `in-hi`) and not the country. Country names are shown in
the site's current language — **all seventy are in every dictionary** —
while **language names are always written in themselves**, because someone
looking for their own language is scanning for the word they already know. There
are no flag emoji: Windows renders them as bare letter pairs, and nothing else
on this site is an emoji, so the ISO code gets a chip instead.

Seventy rows changed the panel in three ways. It has a **search field**, sticky
at the top of the list and focused when the panel opens, matching the English
name, the translated name, the language and the ISO code, accent-folded so
"espanol" finds Español; Enter takes the first match. Rows put the country and
its language on **one line** rather than stacked — the second line was the
difference between a 1,577px list and one that fits three columns. And the six
regions are laid out with `columns: 240px` rather than a column *count*, so the
browser drops from three columns to two to one on its own and no breakpoint has
to be kept in step with the panel's width. 240px is measured: "United Arab
Emirates" beside "English" is the widest row in the list.

One trap worth recording, because it cost an hour. The regions carry
`break-inside: avoid` to keep a region whole in its column, and the usual trick
for that is `display: inline-block` — which is exactly wrong here. An atomic
inline is opaque to Chrome's column balancer, which gave up and packed six
regions into **two** columns 1,577px tall. As `display: flow-root` it balances
properly: three columns, 1,109px, every region whole.

### Detecting the country

A first-time visitor does not have to find their country in a list of seventy —
`lib/i18n/detect.ts` works it out and the site opens there. It reads
`Intl.DateTimeFormat().resolvedOptions().timeZone`, the IANA zone the device is
set to, and looks it up in a table of 253 zones covering all seventy countries.
`Europe/Warsaw` is Poland; `America/Sao_Paulo` is Brazil.

The other two ways of doing this were both rejected, and for the same reason.
`navigator.geolocation` is the precise one and puts an operating-system
permission dialog on a marketing site's first paint. An IP lookup is a network
round-trip to a third party on every first visit, with every visitor's IP handed
to a host that is not ours, and it fails the day the free tier rate-limits. The
time zone costs nothing, asks nobody, and works offline, behind a VPN that has
not also moved the clock, and with the static build exactly as it is.

Three details in the implementation:

- **Zone names get renamed and both spellings stay valid** — `Europe/Kiev`
  became `Europe/Kyiv`, `Asia/Calcutta` became `Asia/Kolkata` — and which one a
  browser reports depends on its ICU vintage, not on the visitor. Both are in
  the table, *and* the reported name is run through the engine's own
  canonicaliser as a second chance. Engines disagree on which direction they
  canonicalise in, which is why both are tried.
- **`navigator.languages` only breaks ties**, it never decides the country. It
  picks हिन्दी over English for a visitor in India, and it is the fallback when
  the zone is unknown: first a region subtag (`de-AT` → Austria), then a bare
  language (`nl` → Netherlands). A bare `en` returns nothing rather than naming
  an arbitrary one of the forty-odd English-speaking countries.
- **A guess is never written to `localStorage`.** That key means "this visitor
  chose this", so a stored choice always beats detection, and a guess stays a
  guess that re-runs next visit if they have travelled. The panel says which it
  was — a `DETECTED` badge on the row and a line in the intro — because a
  visitor who did not switch the site to German is owed an explanation of what
  did, next to the control that undoes it.

An unknown zone and an unhelpful browser language mean no guess at all, and the
site stays English. That is the same outcome as before any of this existed.

**The dictionaries are keyed by the English string itself.** `t("Products")`
returns "Produkte", or hands back "Products" unchanged when that locale has no
entry for it. So wrapping existing markup costs nothing — `<T>Products</T>`
needs no key registry — no page can render a bare `nav.products`, and a
half-finished dictionary degrades to English one string at a time rather than to
blank space. Each `lib/i18n/dict/<lang>.ts` is its own lazy chunk, so an English
visitor downloads none of them.

**English is still what builds.** All 188 routes prerender exactly as before;
the swap happens after hydration. Reading a locale cookie in a server component
would make every route dynamic, and an `app/[locale]/` segment would multiply
them by seventy — and the transcribed copy *is* the product, so English is
what search engines and no-JS visitors get. The cost is one frame of English on
load for a visitor who has chosen otherwise, and `LocaleProvider` reads the
stored choice in an effect rather than during render so the prerendered markup
still hydrates cleanly. The choice persists in `localStorage` under
`cosmox.locale` and sets `<html lang>`.

Translated: navigation and its dropdowns, header and footer, breadcrumbs, banner
headlines, the 64 topic titles and their blurbs, the ten product-group names,
the finder's facets and result line, and the shared CTAs.

**Not translated, deliberately:** chemical names, grade names, division numbers
and the Cosmox™ mark — a buyer searches for "Aluminium Hypophosphite" under that
name in every market, and that is what is on the drum, the TDS and the customs
paperwork. Nor the postal address, which has to be readable by the courier. The
long transcribed page copy also stays English, and the panel says so in its own
footnote rather than letting a visitor find out half-way down a page.

Two things worth knowing before editing. `<T>` takes a string, never JSX — for a
sentence with a `<b>` or a link inside it, put the whole sentence in the
dictionary with `{slots}` and use `fill()` (see `Finder`), because concatenating
"Displaying" + numbers + "of" hard-codes English word order into the markup. And
the banner headlines are split light/bold in English (`Industries **We Serve**`)
purely for typography; `HeroTitle` keys the *whole* phrase and renders it as one
bold run when a translation exists, since those two halves do not survive
translation in the same order.

To add a **country**: an entry in `lib/i18n/locales.ts`, its IANA time zones in
the table in `lib/i18n/detect.ts`, and its name in all eleven dictionaries. A
country with no zones still works — it just cannot be detected, only chosen.

To add a **language**: a dictionary in `lib/i18n/dict/`, a line in the `LOADERS`
map in `lib/i18n/index.ts` (written out rather than built from a template
literal so the bundler can see every target), and the locales that should use it
pointed at its `lang` in the register. To add a translated **string**, add it to
**all eleven** dictionaries — a missing key is not an error, which is the point,
but it is also how a page ends up half-translated without anything failing.

Inter and EB Garamond load the `latin` subset only, so the CJK and Devanagari
rows fall through to the system face. That is expected and looks fine on macOS,
Windows and Android; it is why `.regionmenu__lang` is set slightly larger than
the Latin rows beside it.

## Still to fill in

These were missing or truncated in the source copy, so nothing was invented.
Search the HTML for `TODO` to find each spot.

- **Translation review** — the eleven dictionaries are unreviewed by native
  speakers. The terminology follows industry usage (Tenside/tensioactifs for
  surfactants, 次亜リン酸塩 for hypophosphite salts, and so on) and chemical
  names are left untranslated on purpose, but before this goes in front of
  customers each language wants an hour from someone who sells in that market.
  Everything is in `lib/i18n/dict/`, one file per language, keyed by the English.
- **Department email addresses** — `new contact us.rtf` supplied
  `info@cosmoxchemicals.com`, which is now the address on the corporate-office
  block, on all three department cards and in the footer. The source's
  `export@` and its bare `s` never got a domain, so the three desks share the
  one live inbox rather than carrying an invented `sales@` or `export@`.
- **Department phone numbers** — the source listed bare `+91-` for sales,
  technical and export. Only the three corporate numbers
  (+91 92659 43799, +91 87581 94050, +91 92650 18813 — the last from
  `new contact us.rtf`) are real and in use across the site.
- **Social media links** — LinkedIn, Twitter, Facebook and YouTube were blank in
  the source, so no social row was added anywhere.
- **Contact form backend** — the form is fully built but not wired up. Point it
  at a form service (Formspree, Basin, Netlify Forms) or your own endpoint, then
  remove the fallback handler near the bottom of `lib/products.ts`.
- **Company name** — pages use "Cosmox Chemicals"; the footer legal line and
  contact page use "Cosmox International Pvt. Ltd." per the source. Confirm
  which is the trading name.
- **Photography** — the biggest gap. The landing page is built around a
  full-bleed hero image and is currently running a CSS gradient stand-in. See
  "Dropping in a hero photograph" above. Plant, lab and product shots would also
  lift the interior pages considerably.
