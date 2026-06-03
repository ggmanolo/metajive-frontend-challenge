# Metajive — Front-End Coding Challenge 🚀

Thanks for taking the time to do this! It's a small, self-contained build that
mirrors the kind of work we do: turning a Figma design into clean, responsive,
accessible components.

You'll implement **three blocks** in a Next.js + TypeScript + Tailwind app. The
scaffolding, tooling, and a sample test are already set up — focus your time on
the components.

---

## ⏱️ Time expectation

Please **time-box this to ~3–4 hours.** We're not looking for a pixel-perfect,
production-hardened submission — we want to see how you structure components,
handle responsiveness and accessibility, and make sensible trade-offs. If you
run low on time, leave a note in `NOTES.md` about what you'd do next.

## 🤖 Use of AI tools

AI assistants (Copilot, Claude, Cursor, etc.) are **allowed and encouraged** —
they're part of how we work. We just ask that you:

- Understand and can explain every line you submit.
- Briefly note in `NOTES.md` where AI helped and any prompts/decisions worth
  calling out.

We may ask you to walk through parts of your solution in a follow-up chat, so
make sure the code reflects your own judgment.

---

## 🧰 What we're evaluating

| Area | What we look for |
| --- | --- |
| **Fidelity to the design** | Spacing, breakpoints, type, and layout match the Figma. |
| **Responsiveness** | Works cleanly across the defined breakpoints (mobile → xxl). |
| **Semantic HTML & accessibility** | Correct elements, keyboard support, alt text, `mailto:`/`tel:` semantics. |
| **Code quality** | Clear component structure, sensible typing, no dead code or anti-patterns. |
| **State & data** | The blog block handles loading, appending, and "no more results" gracefully. |
| **Git hygiene** | Small, readable commits with meaningful messages. |

Tests are welcome but not required — if you write one, the blog post load-more
logic is the highest-value target. A Vitest + Testing Library harness is already wired up.

---

## 🏁 Getting started

```bash
nvm use 22         # or just `nvm use` on macOS/Linux
corepack enable    # or: npm i -g yarn
yarn               # install dependencies
yarn dev           # http://localhost:3000
```

### Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the dev server |
| `yarn build` | Production build |
| `yarn lint` | ESLint (Next core-web-vitals + TypeScript) |
| `yarn typecheck` | `tsc --noEmit` |
| `yarn test` | Run the Vitest suite |
| `yarn format` | Prettier write |

A development column grid overlays the page in dev mode to help you match the
Figma grid (see `components/generic/dev_grid`).

---

## 🎨 The design

Figma file:
**[Coding Challenge](https://www.figma.com/file/3rcciIbeFNzC6vcTUYk67s/Coding-Challenge?node-id=247%3A0)**

All content can be hardcoded — extract any images/icons you need from Figma and
drop them in `public/`.

> **Note:** The Figma file uses SF Pro Display. We've substituted Source Sans 3
> in the codebase for licensing and web compatibility — match the design's
> sizing and weight, not the exact typeface.

---

## 💪 Tasks

Stub components live under `components/blocks/`. Each has a `.tsx`, a
`.module.scss`, and a typed props interface to build on. Wire them into the page
in [`app/page.tsx`](app/page.tsx).

### A) Text + Image — `components/blocks/text_image`

A classic split module: image on one side, content on the other. Content:

1. Headline
2. WYSIWYG body copy
3. Two buttons linking via `mailto:` and `tel:`

### B) Image Slider (Swiper) — `components/blocks/slider`

Build a slider with [Swiper](https://swiperjs.com/) (`swiper/react` is
installed). Show **one slide at a time**, **autoplaying every 5 seconds**.
Display the headline and copy above the slider. Match the design's controls.

### C) Blog Posts / "Load more" — `components/blocks/three_up`

Show **3 posts** by default. A button below loads **3 more** on each click and
appends them. Fetch from the included API route:

```
GET /api/posts?offset=0&limit=3
  -> { posts: Post[], total: number, hasMore: boolean }
```

Handle the loading state and hide/disable the button when there are no more
posts. (The route lives at [`app/api/posts/route.ts`](app/api/posts/route.ts) —
you don't need to change it, but you may.)

---

## ✨ Animation (bonus — optional)

We didn't provide a prototype or motion spec, so this part is yours to own. If
you have time and the inclination, **level up the build with animation** — it's
a great way to show your eye for polish and motion.

Some ideas (pick what fits, don't force it):

- Reveal or stagger elements as they scroll into view
- Smooth slide transitions or parallax in the Swiper block
- A subtle entrance/append animation as new posts load in Task C
- Hover/focus micro-interactions on the buttons

Use whatever you're comfortable with — CSS transitions/keyframes, the Web
Animations API, or a library such as [GSAP](https://gsap.com/),
[Motion](https://motion.dev/), or [Framer Motion](https://www.framer.com/motion/).
Add the dependency yourself and note your choice in `NOTES.md`.

> This is genuinely optional — a clean, accurate, accessible build with no
> animation beats a flashy one with broken layout. Respect the time-box, and
> keep motion accessible (honour `prefers-reduced-motion`).

---

## 📤 Submitting

1. **Fork** this repository (or push a clone to your own private repo).
2. Commit your work in small, logical steps.
3. Add a short **`NOTES.md`** covering trade-offs, anything unfinished, and your
   AI-tool usage.
4. Send us a link to your repo (add us as collaborators if it's private), or
   open a pull request if you forked.

Have fun — we're excited to see how you work! 🙌
