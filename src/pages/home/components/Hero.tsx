import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { heroSlides, HERO_INTERVAL_MS } from './heroImages';

export default function Hero() {
  const { t } = useTranslation('home');
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const count = heroSlides.length;

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance the slideshow. Re-runs whenever `active` changes, so manual
  // navigation via the indicators resets the timer instead of jumping early.
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, HERO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [count, active]);

  const goTo = useCallback((i: number) => setActive(i), []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background-50">
      {/* Base ambience (visible before/behind images) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(18,18,18,1)_0%,_rgba(6,6,6,1)_100%)]" />

      {/* Rotating background images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i === active ? undefined : true}
          >
            <img
              src={slide.src}
              alt={slide.alt || ''}
              className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                i === active ? 'scale-105' : 'scale-100'
              }`}
              onError={(e) => {
                // Hide broken image until the real asset is provided.
                (e.currentTarget as HTMLImageElement).style.opacity = '0';
              }}
            />
          </div>
        ))}
      </div>

      {/* Legibility overlays — darker on the left where the text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-background-50 via-background-50/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background-50/80 via-transparent to-background-50/30" />

      {/* Content */}
      <div className="relative h-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="h-full flex flex-col justify-center">
          <div
            className={`max-w-xl transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Brand label */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="text-primary-500 text-xs tracking-[0.3em] uppercase">MITOS</span>
              <span className="w-10 h-[1px] bg-primary-500/60" />
            </div>

            {/* Headline */}
            <h1 className="font-heading italic text-foreground-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              {t('hero.line1')}
              <br />
              <span className="text-primary-500">{t('hero.highlight')}</span>
              <br />
              {t('hero.line2')}
            </h1>

            {/* Description */}
            <p className="mt-6 md:mt-8 text-foreground-400 text-sm md:text-base leading-relaxed max-w-md">
              {t('hero.description')}
            </p>

            {/* CTA */}
            <Link
              to="/projects"
              className="group mt-8 md:mt-10 inline-flex items-center gap-3 text-primary-500 text-xs tracking-[0.2em] uppercase hover:text-primary-400 transition-colors duration-300 whitespace-nowrap"
            >
              <span>{t('hero.cta')}</span>
              <span className="w-8 h-[1px] bg-primary-500 transition-all duration-300 group-hover:w-12" />
              <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right-side slide indicators */}
        <div className="absolute right-6 md:right-10 lg:right-16 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-end gap-5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <span
                className={`h-[1px] transition-all duration-500 ${
                  i === active ? 'w-8 bg-primary-500' : 'w-0 bg-primary-500 group-hover:w-4'
                }`}
              />
              <span
                className={`text-xs tabular-nums tracking-[0.15em] transition-colors duration-300 ${
                  i === active
                    ? 'text-primary-500'
                    : 'text-foreground-600 group-hover:text-foreground-300'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Discipline tags — bottom left */}
      <div
        className={`absolute bottom-6 md:bottom-10 left-6 md:left-10 lg:left-16 transition-all duration-1000 delay-500 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-foreground-500 text-[10px] md:text-xs tracking-[0.2em] uppercase">
          {t('hero.disciplines')}
        </p>
      </div>

      {/* Scroll indicator — bottom center */}
      <div
        className={`absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-50' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-foreground-600 text-[10px] tracking-[0.3em] uppercase">
            {t('hero.scroll')}
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-foreground-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
