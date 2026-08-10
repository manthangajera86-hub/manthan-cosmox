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

`npm run build` prerenders all 117 routes as static content, so this
deploys to Vercel as-is, or to any static host via `output: "export"` in
`next.config.mjs`.

## Structure

```
app/            one folder per route, each page.tsx a server component —
                app/<family>/<slug>/ for each of the 64 topics, and
                app/products/<group>/<grade>/ for each of the 40 grades
  globals.css   the whole design system
  layout.tsx    <html>, metadata, header, footer, the two client helpers
components/     Header, Footer, BrandMark, Rail, Finder, ContactForm,
                Reveal, SmoothScroll, TopicPage, TopicGrid, GradePage,
                LocaleProvider, T, HeroTitle, RegionMenu
lib/            nav.ts (links + dropdown data), topics.ts (the 64 topics),
                products.ts (the 40 grades + the industry facet)
  i18n/         locales.ts (the twelve countries), dict/<lang>.ts (eleven
                dictionaries — there is no en.ts, English is the source)
public/         hero.jpg and img/ — the photography
```

| Route | Source RTF |
|---|---|
| `/` | new — home page (see "Landing page") |
| `/finder` | new — product search, driven by `lib/products.ts` |
| `/about` | 1 about |
| `/divisions` | 2 business |
| `/products` | 3 product |
| `/industries` | 4 industries |
| `/applications` | 5 application |
| `/innovation` | 6 innovations |
| `/capabilities` | 7 capabilities |
| `/rnd` | 8 r & d |
| `/sustainability` | 9 sustainability |
| `/contact` | 10 contact |

Each of those content routes also has a page per topic beneath it —
`/applications/flame-retardancy`, `/divisions/lithium-metal-additives` and 62
more — see "Topic pages" below, and a page for each of the 40 grades beneath
its product group. With the ten routes above, `/`, `/finder`, the 64 topics and
the 40 grades, the build prerenders 117.

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
- Lenis smooths the wheel, and takes the anchor jumps too (`anchors: true` —
  it resolves a target through the same `scroll-margin` / `scroll-padding` the
  browser uses, so headings land exactly where the native behaviour put them).
  While it is running, `SmoothScroll` puts `.has-lenis` on `<html>` and that
  turns the native behaviour off, so the two can never both animate the same
  scroll.

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
| adityabirla.com | Full-bleed hero with the headline low-left, split into a light weight and a heavy weight either side of a hairline rule; uppercase wide-tracked nav floating over the image, reverting to a solid white bar on scroll; red section headings pinned to an 81px page inset; dark editorial tile grid; five-up media strip; the two-tone "A Force For Good" band |
| lilly.com | The pill "capsule" treatment now used throughout the header; oversized statement typography set at 106px; the three-up task row with pill CTAs; the horizontal industry card scroller with 63.75px titles |
| dupont.com | The product finder — faceted radio sidebar, search field with a clear button, "Displaying 1 - 8 of 40 Results", and the dense red-headed result list |

The type scale in `app/globals.css` is the literal set of sizes measured on those
three pages (17 / 21.25 / 25.5 / 31.875 / 38.25 / 51 / 63.75 / 106.25px), made
fluid with `clamp()`. The palette blends Lilly's near-black `#191919`, the warm
neutrals extracted from the Aditya Birla page (`#8a7e71`, `#593731`, `#e3aa7a`)
and a red averaged from all three brand reds (`#c8141e`), with DuPont's
`#e4001c` kept for the finder block.

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
into a balanced block (see below). It did not cost anything in the header: at
940px the nav now holds one row where the fallback wrapped to two, and
`--header-h` (128px, 158px under the 900px query) still matches what the header
measures. One pre-existing mismatch, unchanged by the swap and present in both
faces: below ~640px the nav wraps to a third row and the header measures 187px
against the token's 158px, so anchor jumps on a phone land about 29px high.

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
the rail below it is centred on its middle slide: a red triangle and the
`APPLICATIONS` eyebrow, then the section's statement in ink with the serif
italic accent `.tri__head` uses, then a sub-line, then the arrows — all on the
same axis. Both lines are transcribed from the "Applications Overview" opening
of `5 application.rtf`. `.apps__title` carries a width of its own (900px) for a
reason worth keeping: the head is a centred flex column, so without one the
block is shrink-to-fit and the sub-line's 62ch measure would decide where the
statement above it wraps. The centre slide is `min(64vw - --inset, 980px)`, so
the neighbours show as slivers rather than halves.

`components/Rail.tsx` adds three things on top of that native scrolling, each
behind its own prop so the industries scroller (which takes none of them) is
unaffected:

- **`loop`** repeats the set and wraps the scroll position, so the rail never
  reaches an end.
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
  instead of being followed a moment later by a step nobody asked for.

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
For Good" band. It is DuPont's index shape: a title column on the left beside
six numbered rows on the right (`.caps__grid` / `.crow`), one row per
capability, each linking to `/capabilities/<slug>`. The heading and its line
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
  this block is written to turn white (`#fff` heading, 74% white body, `--dust`
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
`lib/products.ts` — 40 grades taken from `/products`, each tagged with a
division number and one or more industry keys. The industry keys have to match
the radio `value`s in `/finder`. Filters, free-text search and the
"Show more results" pagination all work; result titles currently link to
`/products` rather than to per-product pages.

**Routing.** `/finder` seeds itself from the query string, so anything can
link into a pre-filtered result set:

```
/finder?q=stearate
/finder?industry=energy
/finder?industry=pharma&q=indole
/finder?division=02
```

An unrecognised parameter value is ignored rather than throwing. Nothing on
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
- **Row 2** (`.hdr__nav`) — all ten links, `Home` through `Sustainability`,
  inside a second capsule, centred.

There are three capsules: the brand, the utility group and the nav. The latter
two use the same shell (`.cap`) and the same item inside it (`.cap-btn`) — a
bare control with only a hover fill, so the capsule reads as one object. The
brand carries its own copy of the treatment on `.brand` rather than `.cap`,
because it is a single link, not a group. `layout.md` asks for independent
capsules per control; grouping them was a later call and is the deliberate
deviation from that spec.

Each of the ten nav links opens a dropdown (`.navmenu`) built by
`components/` from the `NAV_MENU` map: a short note on what that page is about,
a "Visit page" link, and the page's own `<h3>` headings as jump links. Those
headings carry `id` slugs added for this purpose — `NAV_MENU` and the slugs
must stay in step, and `scroll-padding-top` on `<html>` in `app/globals.css`
keeps an anchored heading clear of the fixed header. Every entry is a whole
href, never a bare `#slug`: a panel opens from any route, so a bare fragment
would resolve against wherever you happened to be rather than the page it
describes. The menus are built from data
rather than markup so no two pages can drift apart, and they are pure
enhancement: the ten links themselves are in the HTML and work without
JavaScript. They are suppressed below 940px, where the nav wraps.

The logo opens one too. It is the same link as the Home tab, so it opens the
same panel (`NAV_MENU['/']`) — but under its own key, or hovering the logo would
light the Home tab up as well and put two panels on screen at once. The nav
panels centre under the nav capsule; the logo sits hard left, so `.navmenu--brand`
drops from the left edge instead and is narrower. A logo is not normally a menu,
so `.brand__caret` is there to say that it is; it rotates on open and, like the
panel itself, is only rendered above 940px.

All three capsules are solid `--night` with white type, no border, no blur, and
**they do not change on scroll** — `.hdr` itself paints nothing in any state.
The bar is the capsules; there is no surface behind them.

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
both. Giving it the same capsule as everything else settles it at white-on-black
everywhere. `Header` still sets `.is-solid`, and no CSS reads it any more.

Two things this look costs, both by design rather than oversight: over the
darkest part of a photograph the capsule is invisible and the nav reads as bare
white type on the picture, with the white `aria-current` pill the only thing
locating the bar; and page content scrolls directly under the capsules with
nothing hiding it.

The current page is the one filled item (`aria-current="page"`). Below 940px the
nav links wrap inside their capsule, which swaps the stadium radius for a 26px
rounded rectangle; below 640px the utility capsule drops its labels and goes
icon-only, which is why each item carries an `aria-label`.

`--header-h` in `app/globals.css` is the measured height of the whole header and
feeds the hero's top padding — re-measure and update it if you add a row or
change anything that alters a capsule's box: its padding, its border, or the
glyph size inside it. It is currently **128px**, and **158px** under the 900px
query where the nav wraps to two rows. It went 127 → 123 when the borders came
off, then → 128 when the brand became a capsule and its padding made row 1 the
taller of the two.

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
  the topic's own title and number, the topic's picture beside its one-line
  description, the body, then the walk to the topics either side of it (the last
  wraps to the first) and a CTA. The only wording on a topic page that is not
  transcribed is that CTA, which is deliberately identical on all 64.
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
alone, and their pages run the picture as a band rather than beside a paragraph
that does not exist. Nothing was invented to fill the gap.

### Grade pages

Beneath the ten product groups sit the 40 grades from `lib/products.ts`, each
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

The content components — `.section-head`, `.feature`, `.figure`, `.card`,
`.card__img`, `.card__num`, `.detail` / `.detail__img` / `.detail__head` /
`.detail__body`, `.list` / `.list--check`, `.pills`, `.value-grid`,
`.contact-card`, `.contact-line`, `.form-grid` /
`.field` — live under "Interior pages" in `app/globals.css`. Same names, warm palette, red accent, and
the measured type scale. Nothing on `/` uses them; `/finder` uses only
`.page-hero`, `.figure` and `.cta`.

### Pictures on the content pages

The copy pages are long and dense — ten near-identical records of lists on
several of them — and set as type alone they read as a wall. Three blocks put
a photograph next to the words, and all three take a picture the same way: put
any `.bg-*` class from the photography block on the element, and it shows
(they all read `--im-bg`, which every one of those classes now sets).

- **`.figure`** — the picture a `.feature` row is built around, `4 / 3` by
  default with `--wide` (16/9) and `--tall` (3/4). Each page's opening row is
  copy in one column and a figure in the other; `.feature--center` centres the
  short column against the tall one, and `.feature--flip` puts the picture
  first above 900px. Copy is always written first in the markup so the heading
  leads on a phone and for a screen reader.
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

- The red eyebrow only clears 3:1 against `--night`, which is fine for a 38px
  heading and not for 13px tracked caps, so `.bg-night .eyebrow` takes the
  dust instead. Keep that if you add dark sections.
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

## Countries and languages

The globe capsule in the header used to be a dead `<button>` that said "India".
It now opens a panel of **twelve countries in two regions**, each carrying a
language, and choosing one switches the site.

| Asia Pacific | | Europe | |
|---|---|---|---|
| India | English | Germany | Deutsch |
| India | हिन्दी | France | Français |
| China | 中文 | Spain | Español |
| Japan | 日本語 | Italy | Italiano |
| South Korea | 한국어 | Netherlands | Nederlands |
| Vietnam | Tiếng Việt | | |
| Indonesia | Bahasa Indonesia | | |

`lib/i18n/locales.ts` is the register. India is listed twice, which is why the
key is `id` (`in-en`, `in-hi`) and not the country. Country names are shown in
the site's current language; **language names are always written in themselves**,
because someone looking for their own language is scanning for the word they
already know. There are no flag emoji: Windows renders them as bare letter
pairs, and nothing else on this site is an emoji, so the ISO code gets a chip
instead.

**The dictionaries are keyed by the English string itself.** `t("Products")`
returns "Produkte", or hands back "Products" unchanged when that locale has no
entry for it. So wrapping existing markup costs nothing — `<T>Products</T>`
needs no key registry — no page can render a bare `nav.products`, and a
half-finished dictionary degrades to English one string at a time rather than to
blank space. Each `lib/i18n/dict/<lang>.ts` is its own lazy chunk, so an English
visitor downloads none of them.

**English is still what builds.** All 117 routes prerender exactly as before;
the swap happens after hydration. Reading a locale cookie in a server component
would make every route dynamic, and an `app/[locale]/` segment would multiply
117 routes by twelve — and the transcribed copy *is* the product, so English is
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

To add a language: an entry in `lib/i18n/locales.ts`, a dictionary in
`lib/i18n/dict/`, and a line in the `LOADERS` map in `lib/i18n/index.ts` (it is
written out rather than built from a template literal so the bundler can see
every target). To add a translated string, add it to **all eleven** dictionaries
— a missing key is not an error, which is the point, but it is also how a page
ends up half-translated without anything failing.

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
- **Email addresses** — the source had `info@`, `export@` and a bare `s` with no
  domain. All four department blocks on `/contact` say "to be confirmed".
- **Department phone numbers** — the source listed bare `+91-` for sales,
  technical and export. Only the two corporate numbers
  (+91 92659 43799, +91 87581 94050) are real and in use across the site.
- **Social media links** — LinkedIn, Twitter, Facebook and YouTube were blank in
  the source, so no social row was added anywhere.
- **Contact form backend** — the form is fully built but not wired up. Point it
  at a form service (Formspree, Basin, Netlify Forms) or your own endpoint, then
  remove the fallback handler near the bottom of `lib/products.ts`.
- **Company name** — pages use "Cosmox Chemicals"; the footer legal line and
  contact page use "Cosmox International Pvt. Ltd." per the source. Confirm
  which is the trading name.
- **Logo** — the header mark is a placeholder SVG (hexagon + molecule). Replace
  `components/BrandMark.tsx`; the header and footer both take it from there.
- **Photography** — the biggest gap. The landing page is built around a
  full-bleed hero image and is currently running a CSS gradient stand-in. See
  "Dropping in a hero photograph" above. Plant, lab and product shots would also
  lift the interior pages considerably.
