# Shantanu Singh · Portfolio

A personal portfolio about backend engineering, distributed systems, and learning by building. The design pairs warm orange accents and editorial typography with an interactive Raft cluster sketch, project architecture visuals, and links to real open-source contributions.

**Live:** [portfolio-shady17.vercel.app](https://portfolio-shady17.vercel.app)

## Develop

Requires Node.js **20.9+** (Node.js 22 recommended) and pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Next.js. The existing Vercel integration deploys pushes to `main`.

```sh
pnpm typecheck
pnpm build
pnpm start
# With the production server running:
node scripts/smoke-test.mjs http://localhost:3000
```

GitHub Actions runs type checking, the production build, and HTTP smoke checks on pushes and pull requests. The smoke checks cover the rendered page, navigation targets, metadata, security headers, résumé, social preview, sitemap, robots file, and 404 route.

## Update content

- `src/data/portfolio.ts` — public profile, contact details, selected projects, contributions, and toolkit.
- `src/app/page.tsx` — page narrative, experience, education, and personal milestones.
- `public/resume.pdf` — downloadable résumé; replace with an updated PDF when needed.
- `public/me.png` and `public/images/niyantran.png` — original personal and project photographs.
- `src/app/globals.css` — responsive layout and both color themes.
- `src/app/opengraph-image.tsx` — generated social sharing artwork.

When changing the production domain, update `profile.url` in `src/data/portfolio.ts`, the smoke check's sitemap expectation, and the live link above. Canonical metadata, sitemap, robots, and structured data use that URL.

## Interaction & accessibility

The hero cluster is an **illustration**, not live infrastructure telemetry. Taking its leader offline shows an election, promotes a follower, and allows a reset. The real Raftra playground is linked separately. No requests are sent to the real cluster by this sketch.

Navigation and project disclosures work with a keyboard. A skip link goes directly to the main content, state changes are announced to assistive technology, and reduced-motion preferences disable decorative animation. Theme choice persists locally. Contact works through email links; there is no form backend or invented submission success state.

Fonts are bundled locally with `next/font/local`. Personal and project images use Next.js image optimization. The page and generated social preview are prerendered; no external fonts, analytics, GitHub API calls, or credentials are required at runtime.

## Content provenance

Refreshed in October 2026 using the existing portfolio and public primary sources:

- [GitHub profile README](https://github.com/shantanu-1607/shantanu-1607) — current contact details, contest milestones, education, leadership, and internship.
- [Raftra](https://github.com/shantanu-1607/Raftra) — implementation details, chaos scenarios, and [live playground](https://shantanu-1607.github.io/Raftra/).
- [Rate limiter](https://github.com/shantanu-1607/rate-limiter) — architecture and [local benchmark conditions](https://github.com/shantanu-1607/rate-limiter/blob/main/docs/benchmarks.md). Performance results are contextualized in the project disclosure rather than presented as production guarantees.
- [Niyantran](https://github.com/shantanu-1607/Niyantran) — traffic planning pipeline and road graph.
- Merged contributions: [Jaeger #9828](https://github.com/jaegertracing/jaeger/pull/9828), [OpenSRE #4700](https://github.com/Tracer-Cloud/opensre/pull/4700), [OpenSRE #4781](https://github.com/Tracer-Cloud/opensre/pull/4781).

The original template's reusable components remain available, but the active homepage uses `src/components/portfolio/` and `src/data/portfolio.ts`. The legacy `resume.tsx` data is kept compatible for those components.

## Stack & license

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Lucide · next-themes.

MIT. See [LICENSE](LICENSE) for the original attribution and terms.
