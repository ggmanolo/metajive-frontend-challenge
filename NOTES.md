# Notes

## What's built

Three blocks implemented on top of the provided Next.js 15 + TypeScript + Tailwind scaffold:

- **Text + Image (A)** — 12-col grid layout, responsive down to mobile stack, `mailto:` / `tel:` buttons, `aria-labelledby` landmark.
- **Image Slider (B)** — Swiper with centred active slide, side peeks, autoplay, custom nav, carousel ARIA roles, `disableOnInteraction` for WCAG 2.2.2.
- **Blog Posts / Load more (C)** — client-side fetch + pagination state, loading and `hasMore` guards, card stagger animation on append.

Bonus: scroll reveal on all blocks, inactive slide dim, spring-eased button hover, `prefers-reduced-motion` global override.

Tests cover the load-more logic (initial fetch, append, `hasMore: false`, loading state).

---

## Trade-offs and decisions

**SCSS modules + Tailwind coexistence** — the stub components came pre-wired with SCSS modules, which I read as the team's established pattern and continued. If starting fresh I'd go Tailwind-only for consistency; mixing both adds cognitive overhead. Worth aligning on as a team convention.

**Grid interpretation** — the Figma grid was not consistently applied across all breakpoints, so I defaulted to the 12-column / 70px gutter grid already defined in the codebase (`dev_grid.tsx`), assuming it was the source of truth. I'd want to confirm this with the designer before shipping.

**Minor spacing adjustments** — a handful of paddings and vertical rhythm values in the Figma didn't follow a consistent base-4 scale. I normalised these where the visual difference was negligible, noting the change was an improvement rather than a deviation.

**`p` global typography** — I initially scoped font sizes to the `p` tag globally, which caused specificity conflicts in components that needed smaller text. Resolved by moving sizes to component scope and keeping the global `p` as a base for `font-weight` and `margin` only. A utility-class approach (e.g. `.text-body`, `.text-sm`) would be cleaner at scale.

**`PostCard` extraction** — extracted into its own component within `three_up/` for single-responsibility. The trade-off is added test complexity (`vi.mock` for the image), which in retrospect could have been avoided by mocking `next/image` globally from the start.

---

## What I'd discuss with the team

- Figma file quality: low-res images, inconsistent grid application, and vertical rhythm gaps are the kind of thing I'd flag early in a real project to avoid assumptions downstream.
- Tailwind vs SCSS modules: pick one and document it.
- Grid spec: confirm gutters, max-width, and whether the container padding should also control `padding-block`.

---

## AI usage

Used GitHub Copilot throughout — primarily for boilerplate, SCSS values from Figma specs, and debugging the Swiper loop/navigation setup. All architectural decisions, component structure, accessibility choices, and trade-offs are my own. I reviewed and understood every line before committing.
