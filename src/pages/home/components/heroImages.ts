// Hero background slideshow images.
//
// 6 images rotate automatically on the homepage hero (like the reference).
// Drop the final images into `public/hero/` using these exact filenames,
// or edit the `src` paths below. Recommended: wide landscape, ~1920×1080+,
// dark/moody so the left-side text stays legible. .webp or .jpg both fine.
//
// Until a file exists the hero simply shows its dark base background — no
// broken-image icon.

export interface HeroSlide {
  src: string;
  /** Optional alt text for accessibility. */
  alt?: string;
}

export const heroSlides: HeroSlide[] = [
  { src: '/hero/hero-1.jpg', alt: '' },
  { src: '/hero/hero-2.jpg', alt: '' },
  { src: '/hero/hero-3.jpg', alt: '' },
  { src: '/hero/hero-4.jpg', alt: '' },
  { src: '/hero/hero-5.jpg', alt: '' },
  { src: '/hero/hero-6.jpg', alt: '' },
];

/** Milliseconds each slide stays before advancing. */
export const HERO_INTERVAL_MS = 9000;
