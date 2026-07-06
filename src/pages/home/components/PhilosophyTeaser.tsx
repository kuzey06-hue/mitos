import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

export default function PhilosophyTeaser() {
  const { t } = useTranslation('home');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  return (
    <section
      ref={ref}
      className="relative w-full px-6 md:px-10 py-24 md:py-40 bg-background-50"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left label */}
          <div className="lg:col-span-4">
            <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase mb-4">
              {t('philosophy.sectionLabel')}
            </p>
            <h2 className="font-heading italic text-foreground-50 text-3xl md:text-4xl lg:text-5xl leading-tight">
              {t('philosophy.line1')}
              <br />
              <span className="text-primary-500">{t('philosophy.highlight')}</span>
            </h2>
          </div>

          {/* Right content */}
          <div className="lg:col-span-8 lg:pt-2">
            <blockquote className="font-heading italic text-foreground-100 text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8">
              &ldquo;{t('philosophy.quote')}&rdquo;
            </blockquote>

            <p className="text-foreground-400 text-sm md:text-base leading-relaxed max-w-2xl mb-10">
              {t('philosophy.paragraph')}
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-primary-500 text-sm tracking-[0.1em] uppercase hover:text-primary-400 transition-colors duration-300 whitespace-nowrap"
            >
              <span>{t('philosophy.cta')}</span>
              <i className="ri-arrow-right-line text-base transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}