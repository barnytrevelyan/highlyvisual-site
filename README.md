# Highly Visual — site

Astro + Vercel rebuild for highlyvisual.com.

**Confirmed positioning anchor:** Natural-history and aerial cinematography from Nairobi. Drone operator and cinematographer for BBC NHU, Silverback Films, Plimsoll Productions, Offspring Films, Nat Geo and Disney+. CAA-licensed since 2017. 14+ countries. Sister sites at hirevisual.com (rental) and stock.highlyvisual.com (4K+ stock archive).

## Stage 10 — Orient (Step 1)

Per the methodology, this README confirms the operator's understanding of what's being built before any pages are committed.

**The site is:** a six-page portfolio. Home · Work (index + per-project case studies) · About · Credits · Contact. No shop. No standalone hire / stock pages on this domain — both link out to dedicated sister sites.

**The site is NOT:** a service marketplace, an e-commerce store, a stock-licensing UI, or a generalist production-house facade. Those are different jobs done by different properties.

**The site's job:** confirm warm referrals (intake Q10: "mostly word of mouth"). A first-time visitor referred to Barny sees, within the first viewport, evidence that he's a real working blue-chip-credentialed drone operator. The work occupies the screen; the site gets out of its way.

**Sources of truth referenced during the build:**

- `../../blueprint/structural.md` — IA, navigation, page-by-page section skeleton, acceptance criteria (P / D / T / S / A / SEO / Sec / Perf families)
- `../../blueprint/visual-direction.md` — palette, typography, photography style, motion register
- `../../blueprint/motion-brief.md` — the seven allowed motion behaviours; no chrome motion
- `../../blueprint/asset-spec.md` — per-page asset placements
- `../../research/audit-synthesis.md` — confirmed positioning sentence
- `../../decisions.md` — the locked operator decisions
- `../reference/index.html` — Stage 9 reference render v4 (the visual anchor)

**Fix authority during the build:** I may change *which* asset is used per the asset spec, and *which* component renders per the IA. I may NOT change the asset spec, the IA, or the Blueprint acceptance criteria. If a fix requires any of those, halt and report.

## Stack

- Astro 4.x (latest stable) — static-first, MDX content collections
- Inter via Google Fonts (variable weight 400/500/600/700/800)
- Vercel hosting; security headers + caching configured via `vercel.json`
- No client-side JavaScript by default (per motion-brief.md)
- Image optimization via Astro's built-in `<Image />` (sharp under the hood)

## Local development

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static build to ./dist/
npm run preview  # serve the built site locally
```

## Deployment

Push to Git. Vercel auto-deploys on push to `main`. Preview URLs on PRs. Custom domain `highlyvisual.com` configured in Vercel project settings.
