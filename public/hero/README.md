# Hero slideshow images

The homepage hero rotates through **6 full-screen background images**.

Put the final images in this folder using these exact filenames:

- `hero-1.jpg`
- `hero-2.jpg`
- `hero-3.jpg`
- `hero-4.jpg`
- `hero-5.jpg`
- `hero-6.jpg`

Notes:
- `.jpg` or `.webp` both work — if you use `.webp`, update the paths in
  `src/pages/home/components/heroImages.ts`.
- Recommended: wide landscape, at least **1920×1080**, dark/moody tone so the
  left-side headline stays readable.
- Until a file exists, the hero shows its dark base background (no broken-image
  icon), so it is safe to add them one at a time.

Timing and order can be tuned in
`src/pages/home/components/heroImages.ts` (`HERO_INTERVAL_MS`, slide order).
