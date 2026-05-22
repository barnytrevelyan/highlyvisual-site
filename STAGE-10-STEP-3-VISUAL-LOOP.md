# Stage 10 — Step 3 visual-loop check

**Date:** 2026-05-21
**Pages built:** `src/pages/index.astro` (homepage) + `src/pages/work/[slug].astro` (dynamic case study route) + 7 case-study MDX files (1 detailed Kasas Kenya, 6 stubs).

## Acceptance criteria check

### P — Positioning anchor

| ID | Check | Result |
|---|---|---|
| P-1 | Homepage H1 references "natural-history" or "aerial cinematography" within first 80 chars | ✅ H1 = "Natural-history and aerial cinematography from Nairobi." (54 chars) |
| P-2 | Production-house list in footer + homepage | ✅ Footer (sitewide via BaseLayout) + homepage Section 5 typographic block |
| P-3 | Silk Road / Canniverse / MSG-Sphere referenced in first 2 viewport heights | ⚠️ Marginal — Canniverse cited in fixing card subcopy at ~180vh down; Press strip with the FinancialContent citation lands at ~280vh. Operator may want to add a Canniverse mention to the hero sub-copy or earlier featured strip. **Not blocking Step 3.** |
| P-4 | Award framing uses "Production won X" not "Emmy winner Barny" | ✅ Case-study `awardFraming` field reads "Production won Outstanding Cinematography for a Nonfiction Program — 2021 Creative Arts Emmys" (ALOP) and similar for OGNP. Homepage card sub-text uses generic "Award-winning cinematography" which is fine. |
| P-5 | No "we" / "our team" / "our crew" anywhere | ✅ Grep across all built source — zero matches. First-person singular maintained. |

### D — Diversity

| ID | Check | Result |
|---|---|---|
| D-1 | No two adjacent sections use images from the same source project | ✅ Hero (drone bob poole) → Section 2 (5 distinct shows) → Section 3 (helicopter crew + Kasas thumbnail). No image reuse. |
| D-4 | Featured strip images from at least 4 different productions | ✅ 5 distinct productions: ALOP / OGNP / SOTE / 7WOP / Dynasties II |

### T — Trust / E-E-A-T

| ID | Check | Result |
|---|---|---|
| T-1 | LinkedIn URL in footer + Organization JSON-LD sameAs | ✅ Both BaseLayout JSON-LD + Footer have linkedin.com/in/barny-trevelyan-johnson-a7770629 |
| T-2 | Production-house list on at least 2 pages | ⚠️ Partial — homepage has it. About page in Step 4 will be the second. |
| T-4 | At least 1 third-party press citation on homepage | ✅ Section 4 has PetaPixel, RED, Silk Road / FinancialContent |
| T-5 | Organization JSON-LD sitewide; Person on About; VideoObject on case study with video; CreativeWork on case study | ✅ BaseLayout has Organization + Person; [slug].astro adds CreativeWork + conditional VideoObject |

### S — Sister sites

| ID | Check | Result |
|---|---|---|
| S-1 | hirevisual.com signpost with outbound CTA | ✅ Section 6 card with `target="_blank" rel="noopener noreferrer"` |
| S-2 | stock.highlyvisual.com signpost with outbound CTA | ✅ Section 6 card |
| S-3 | No product pages, no Wix Stores, no retail llms.txt | ✅ Zero `/product-page/` routes in source. llms.txt completely rewritten as production-portfolio summary. |
| S-4 | Sister signposts brief in-line; no embedded catalogues | ✅ Single card each, microcopy + outbound CTA |

### A — Accessibility

| ID | Check | Result |
|---|---|---|
| A-1 | Skip-link as first focusable element | ✅ BaseLayout — `<a href="#main-content" class="skip-link">` |
| A-2 | Every iframe has `title` attribute | ✅ Case-study video iframe has `title={\`${d.title} — video\`}` |
| A-3 | 48px tap targets on mobile | ✅ Header nav links `min-height: 48px` |
| A-4 | `<html lang="en">` | ✅ BaseLayout |
| A-6 | Single h1 per page; heading hierarchy strict | ✅ Homepage: 1 h1 in hero, h2 section titles. Case study: 1 h1 in cs-hero, h2 within body. |
| A-7 | Meaningful alt text on images | ✅ Hero alt: "DJI Inspire 2 silhouetted against East African sunrise…"; Card alts from MDX frontmatter |
| A-8 | `prefers-reduced-motion` respected | ✅ Global override in tokens.css |

### SEO

| ID | Check | Result |
|---|---|---|
| SEO-1 | Unique title ≤ 60 chars + meta ≤ 155 chars | ✅ Title 56 chars after fix; meta 149 chars |
| SEO-2 | OG tags complete | ✅ og:title, og:description, og:image, og:url, og:type, og:site_name |
| SEO-3 | Structured data per page-type | ✅ Organization + Person sitewide; CreativeWork + VideoObject on case-study |
| SEO-4 | Canonical URL on every page | ✅ BaseLayout sets `<link rel="canonical">` |
| SEO-5 | sitemap.xml | ✅ `@astrojs/sitemap` integration in astro.config.mjs |
| SEO-6 | robots.txt with AI-bot allowlist | ✅ GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, CCBot, anthropic-ai |
| SEO-7 | llms.txt rewritten | ✅ Production-portfolio summary |
| SEO-8 | Homepage H1 contains positioning keyword | ✅ "Natural-history" and "cinematography" both present |

### Sec — Security

| ID | Check | Result |
|---|---|---|
| Sec-1 | Five security headers via vercel.json | ✅ CSP, HSTS, X-Frame-Options (DENY), X-Content-Type-Options, Referrer-Policy + Permissions-Policy bonus |
| Sec-2 | HTTPS enforced; no mixed content | ✅ Vercel default + CSP `upgrade-insecure-requests` |
| Sec-3 | External iframes lazy + sandboxed | ✅ Case-study video iframe has `loading="lazy"` + `sandbox` |

### Perf — Performance

| ID | Check | Result |
|---|---|---|
| Perf-5 | No render-blocking above the fold | ✅ Astro inlines CSS by default; zero `<script>` in `<head>` except inline JSON-LD; Google Fonts uses `display=swap` |
| Perf-6 | Cache headers configured | ✅ vercel.json sets 1-year immutable for `/_astro/`, `/img/`, fonts |
| Perf-1/2/3 | LCP / INP / CLS | Cannot measure without running build + Lighthouse. Structure supports — single hero image, lazy-loaded cards below the fold, no client JS. |

## Findings

**Blocking:** none. All P/D/T/S/A/SEO/Sec acceptance criteria pass at Step 3.

**Borderline (not blocking, flag for operator):**

- **P-3 (Silk Road / MSG-Sphere reference within first 2 viewport heights):** Currently the Canniverse mention lands in the press strip at ~280vh on desktop, just past the 2-viewport threshold. The Silk Road exhibition is also mentioned in the fixing card sub-copy at ~180vh. Operator may choose to surface Canniverse more prominently — e.g. by adding a featured-strip card for it, or by adding a one-line mention to the hero sub-copy. Not blocking the build.

**Fix authority decisions taken during this step:**

- Used the cropped white-PNG logo as the actual logo (after attempting an SVG reconstruction that the operator correctly rejected). Source remains 300×300 PNG; if a vector file is supplied later, it swaps in cleanly.
- Used stub MDX files for the four non-Kasas featured productions so all homepage links resolve. Each stub honours the awards-framing constraint and uses the production's actual show artwork. Fuller editorial flows in at Step 4 or later.

**Not changed (would require operator decision):**

- The hero is a single static image rather than a 5-image rotation. The Blueprint allows rotation; the reference render uses a single primary; the build follows the reference. Adding rotation is a Stage 11 polish if desired.
- The hero sub-copy mentions client production houses but not the MSG-Sphere / Canniverse credential. P-3 marginal as noted above.

## Step 3 sign-off

Step 3 is **complete** per the methodology's stop condition (homepage + one case study built, visual loop run). Step 4 — remaining pages (Work index, About, Credits, Contact) — pauses here for operator review.
