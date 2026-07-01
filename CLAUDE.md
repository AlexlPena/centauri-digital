# CLAUDE.md

Guidance for Claude Code working in this repository.

## Project

Centauri Digital Solutions — marketing website for an AI automation consultancy. Single-page homepage (hero, capabilities, selected work, process, founder, CTA) plus supporting pages as they're added.

**Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS, Three.js (hero 3D scene), GSAP + ScrollTrigger (scroll motion). Deployed on Vercel.

## Source of truth

**`DESIGN_SYSTEM.md` is canonical.** Read it before touching any visual, content, or motion decision. It defines the full token system (color, type, spacing, radius/cut geometry), section-by-section content and copy, the corner-geometry signature motif, the content voice rule, and the motion system.

If a change conflicts with `DESIGN_SYSTEM.md`, stop and flag the conflict rather than resolving it silently — don't guess at intent.

If `DESIGN_SYSTEM.md` doesn't cover something (a new page, a new component type), propose an addition to it before or alongside implementing, so the doc stays authoritative rather than drifting out of sync with the codebase.

## Non-negotiable rules (frequently violated if not repeated)

- **Voice:** company voice ("we" / Centauri) everywhere except the Founder section, which is the only place first-person "I" is allowed. Never name Alex outside the Founder section.
- **Corner geometry:** the clipped-top-right-corner + copper star motif is rare and intentional. Do not apply it to every card. Check `DESIGN_SYSTEM.md` Section 10 before adding it anywhere new.
- **Orange/copper is rare.** Never a full section, background, or every icon. If a component uses copper more than once, that's a signal to reconsider, not a style choice.
- **Capabilities section is not a grid.** It's a connected chassis on a shared rail with exactly one graphite anchor chapter. Don't "simplify" it into a 4-card grid.
- **No screenshots as production assets.** Reference frames in `design/concepts/` are visual references only — rebuild responsively in code.
- **Tokens only, no hardcoded values.** Every color, spacing, radius, and font size should trace back to a token defined from `DESIGN_SYSTEM.md`, not a one-off Tailwind arbitrary value.

## Architecture conventions

- Content data (projects, capabilities, process steps) lives in typed data modules under `lib/content/`, separate from presentation components. This is intentional — it's the seam where Supabase will later replace mock data without touching the UI. Don't inline copy into components.
- Design tokens are defined once (CSS variables + Tailwind theme mapping) and consumed everywhere — don't redefine a color or spacing value locally in a component.
- Shared primitives (`Button`, `Eyebrow`, `SectionHeading`, `Container`, the clipped-corner utility) live in `components/ui/` and should be reused, not reimplemented per-section.
- Three.js hero scene should be its own isolated client component, lazy-loaded, with a static fallback for mobile and `prefers-reduced-motion`. Never load it on the mobile fallback path.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — lint
- `npm run typecheck` — TypeScript check

## Before declaring any section "done"

Check it against `DESIGN_SYSTEM.md` Section 27 (Review Checklist) and Section 28 (Non-Negotiable Avoid List). Specifically verify: WCAG AA contrast, semantic heading order, visible keyboard focus, body text ≥16px, reduced-motion fallback present, mobile is redesigned (not scaled), and orange usage is still rare after the change.

## Notes / running log

<!-- Claude Code: append short notes here as you discover repo-specific gotchas, decisions made without an explicit doc answer, or conventions worth remembering next session. Keep entries terse. -->

- **2026-07-01 — Voice/identity conflict resolved.** `DESIGN_SYSTEM.md` frames Centauri as Alex Pena's personal portfolio and is written in first-person "I" throughout, including the hero headline (Section 13) and the "About" section (Section 17). CLAUDE.md frames the site as *Centauri Digital Solutions*, a consultancy, with company ("we") voice everywhere except a Founder section. **Decision: company consultancy framing wins.** DESIGN_SYSTEM.md's literal first-person copy (hero headline, About section, any other "I" language) is superseded and will be rewritten to company voice when we build those sections (milestone 3), except within the Founder section, which maps to DESIGN_SYSTEM.md's Section 17 "About" content and is the one place "I" and Alex's name are used. Structure, tokens, geometry, motion, and layout rules in DESIGN_SYSTEM.md remain canonical and unaffected.
- **2026-07-01 — Reference frames added and reviewed.** All three frames now live in `design/concepts/` with the exact filenames Section 1 expects. Reviewed in detail — confirms the capability chassis interlocking-notch geometry, the single graphite anchor on capability 03, the Project 01 graphite case-study card with its intake→orchestrator→output diagram, the About/Founder headshot layout, and the copper-cross+clipped-corner motif recurring exactly where Section 10 says it should (wordmark, hero, capability chassis, case-study cards, CTA). No new conflicts found beyond the already-resolved voice issue.
- **2026-07-01 — Milestone 1 scaffold + token layer complete.** Next.js 16.2.9 (App Router, Turbopack) + React 19 + TypeScript + Tailwind v4 scaffolded at repo root (no `src/` dir, matching the literal `components/ui/` and `lib/content/` paths this doc already uses). Key implementation decisions:
  - **Tailwind v4 uses CSS-based theming, not `tailwind.config.ts`.** All tokens live in `app/globals.css`. Raw doc-named tokens (`--background`, `--accent`, `--space-1`..`--space-14`, `--cut-sm/md/lg`, etc.) sit in a plain `:root` block, matching DESIGN_SYSTEM.md's literal variable names. A `@theme inline` block maps the ones needing Tailwind's reserved namespaces but no matching prefix (`--color-*`, `--spacing-*`) to those raw vars via `var(...)` indirection. A separate static `@theme` block defines the tokens whose Tailwind namespace already matches the doc's naming 1:1 (`--text-*`, `--radius-*`, `--shadow-*`, `--ease-*`) directly, since no indirection is needed there.
  - **Spacing scale intentionally overrides Tailwind's default 1-14 numeric scale.** `p-6`, `gap-9`, etc. now resolve to exact `--space-6`/`--space-9` doc values (which diverge from Tailwind's default multiplier past step 4), not Tailwind's built-in rem values. Numbers above 14 still fall back to Tailwind's default formula (unused by the doc's spacing table anyway).
  - **Addition proposed to DESIGN_SYSTEM.md Section 7:** the doc didn't specify letter-spacing tokens, and its line-height guidance is a range ("display ~0.95-1.02", "body ~1.5-1.65") rather than a token. Added `--tracking-display: -0.01em`, `--tracking-technical: 0.08em`, `--leading-display: 1`, `--leading-body: 1.6` as standalone Tailwind utilities (`tracking-display`, `tracking-technical`, `leading-display`, `leading-body`) rather than a value per type-scale step, since the doc's rule is two categories (display vs. body), not a per-step table. Flag if Alex wants different values.
  - **Fonts are genuinely self-hosted, no Google/external CDN fetch at runtime.** Satoshi: downloaded the variable woff2 (+ italic) from Fontshare's official download API (free for commercial use per `app/fonts/satoshi/LICENSE.txt`, which is committed alongside the font files) into `app/fonts/satoshi/`, loaded via `next/font/local` in `app/fonts/index.ts`. Geist Mono: installed via the official `geist` npm package (Vercel, OFL-licensed), which ships its own `next/font/local`-based export (`geist/font/mono`) — also fully self-hosted, no Google Fonts network call.
  - **`next.config.ts` sets `turbopack.root` explicitly.** There's a stray, pre-existing `package-lock.json`/`node_modules` directly in `C:\Users\Alexp\` (unrelated to this repo) that made Turbopack misdetect the workspace root and resolve dependencies from the wrong `node_modules`, causing a "Cannot find module" error for `geist/font/mono` in dev. Pinning `turbopack.root` to the project directory fixes it — don't remove that config.
  - Verified: dev server renders the full token set correctly (colors, type scale with clamp(), 4px/8px spacing rhythm, radius/cut geometry, shadows, graphite surface + single copper accent), `npm run typecheck`, `npm run lint`, and `npm run build` all pass clean.
  - `app/page.tsx` currently holds a temporary token-preview page (not a real section) for this review. It gets replaced with the real homepage sections in milestone 3.
