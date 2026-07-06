import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

export default function LabHero() {
  const { t } = useTranslation('lab');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: true });

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center px-6 md:px-10 bg-background-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(0deg, currentColor 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      <div ref={ref} className={`relative z-10 max-w-5xl text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 mb-10">
          <span className="w-3 h-3 rounded-full bg-primary-500 animate-pulse" />
          <p className="text-foreground-500 text-[11px] tracking-[0.35em] uppercase">{t('hero.label')}</p>
        </div>

        <h1 className="font-heading italic text-foreground-50 text-3xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
          {t('hero.line1')}
          <br />
          <span className="text-primary-500">{t('hero.highlight')}</span>
        </h1>

        <p className="text-foreground-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-8">
          {t('hero.description')}
        </p>

        <div className="mt-14 flex items-center justify-center gap-3">
          <span className="w-12 h-[1px] bg-foreground-400/30" />
          <span className="text-foreground-600 text-[10px] tracking-[0.3em] uppercase">{t('hero.scrollHint')}</span>
          <span className="w-12 h-[1px] bg-foreground-400/30" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-50 to-transparent" />
    </section>
  );
}