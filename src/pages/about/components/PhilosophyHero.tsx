import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

export default function PhilosophyHero() {
  const { t } = useTranslation('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: true });

  return (
    <section ref={ref} className="relative w-full min-h-[70vh] flex items-center justify-center px-6 md:px-10 py-24 md:py-32 bg-background-50">
      <div className={`max-w-4xl text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase mb-8">{t('hero.label')}</p>
        <h1 className="font-heading italic text-foreground-50 text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
          {t('hero.line1')}
          <br />
          <span className="text-primary-500">{t('hero.highlight')}</span>
        </h1>
        <div className="mt-12 w-16 h-[1px] bg-primary-500 mx-auto" />
      </div>
    </section>
  );
}