# Visual polish pass — 2026-06-12

Visual audit + chrome-level upgrade pass. **Zero copy/content changes.** All edits are CSS plus two small additions to the animation runtime. Build-verified 19/19 pages with `astro.config.verify.mjs`. Not deployed.

## Audit findings (rendered at 1440px + 390px from current source)

1. **Flat card surfaces** — `.card` / `.service-card` / `.reel-card` sat on `#15161A` against `#0A0A0B` with no border or shadow; they read as faintly-lighter voids, not objects.
2. **Accent starvation** — the amber (`--accent`) appeared only on award cards; the rest of the page read pure grayscale, so the one warm note felt like an inconsistency rather than a thread.
3. **Uniform section rhythm** — every section was label + h2 + lede at identical scale on identical black; no atmosphere or staging between screens.
4. **Hero arrived as one block** — single `.reveal` fade; no cascade, weak seam into the next section.
5. **Testimonials floated in a void** — italic text on flat black, small grey quote mark.
6. **Marquee, press list, CTAs** had minimal hover language.

## Changes

| Area | File | What |
|---|---|---|
| Tokens | `src/styles/tokens.css` | Added `--accent-dim`, `--accent-faint`. Selection colour → amber. |
| Headings | `tokens.css` | h1/h2 get a vertical luminance gradient via `background-clip: text` (pure light falloff, no hue; `@supports`-guarded, colour fallback). `text-wrap: balance`. |
| Section labels | `tokens.css` | `.section-title` is now flex with a 22px amber hairline tick before the label — threads the accent through every section. Centered variant (testimonials) gets a mirroring right tick (scoped in `TestimonialCarousel.astro`). |
| Card material system | `tokens.css` | `.card`: hairline border, top-light inset, hover = lift −4px + layered 44px shadow + border-strong; image brightness 0.94→1.04 + slight saturate; cinematic scrim rises over the still (`.card-img-wrap::after`); tag pill warms to `--accent-dim` border on hover. Same family applied to `.service-card` (animations.css) and `.reel-card` (index.astro). |
| Cursor spotlight | `tokens.css` + `animations.js` | Desktop-only faint pool of light follows the pointer across `.card`/`.service-card` (CSS vars `--mx`/`--my` set by a passive pointermove listener). |
| Hero entrance | `src/styles/animations.css` | Staggered cascade: eyebrow → h1 → sub → CTAs → proof arrive at 100–660ms delays. Covered by the reduced-motion exemption block in tokens.css. |
| Hero seam | `Hero.astro` | Bottom gradient stop 0.95 → 1.0 so the hero seats perfectly into the page. |
| Reveal polish | `animations.css` | Desktop-only: `.reveal-stagger` children resolve from a 7px defocus (rack-focus feel). Off on mobile (filter cost) and under reduced motion. |
| Testimonials | `animations.css` | Radial spotlight pool behind the carousel; ghost quote mark enlarged to 84px and tinted `--accent-dim`. |
| Awards | `animations.css` | Cards get surface gradient + full hairline frame; hover = lift + shadow + warm corner glow breathing from the amber edge. |
| Marquee | `animations.css` | Items dim to 0.55, hovered name comes to full light (track already pauses). |
| Press list | `pages/index.astro` | Arrow turns amber and nudges ↗ on hover. |
| Primary CTA | `tokens.css` | Sheen sweep (darker-luminance pass) + soft warm-white glow shadow on hover. |
| Sister tiles | `SiteBand.astro` | Image wash brightened 0.78 → 0.86 (was nearly invisible); hover lifts the grade further. |
| Scroll progress | `animations.css` + `animations.js` | 2px hairline along the top edge, warm-white running into amber; transform-driven (no layout), hidden under reduced motion. |
| Credit grid | `animations.css` | Hover image gets brightness 1.04 + saturate 1.05 (was flat 1.0). |

`public/scripts/animations.js` and `src/scripts/animations.js` kept in sync. Both new JS features are CSP-safe (same external file, `script-src 'self'`).

## Brand-rule notes

- The blueprint's "no chromatic accent / no gradients" rule was already superseded by tokens v0.3 (amber accent, ken-burns, reveals). This pass keeps the discipline: amber appears only at hairline/detail scale; all surface gradients and the heading gradient are pure luminance.
- All motion respects `prefers-reduced-motion` (new hero-stagger selector added to the global exemption block).

## Verify recipe (sandbox)

Same as before: `node node_modules/astro/astro.js build --config astro.config.verify.mjs` (HTML → /tmp/hvdist, CSS → .astro/_astro). Headless screenshots need `emulateMedia({reducedMotion:'reduce'})` — the infinite ken-burns animation blanks compositing in chromium-headless-shell under swiftshader (screenshot artifact only, not a site bug).
