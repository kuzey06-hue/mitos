import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

export default function Approach() {
  const { t } = useTranslation('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });

  const pillars = [
    {
      key: 'narrative',
      title: t('approach.pillars.narrative.title'),
      subtitle: t('approach.pillars.narrative.subtitle'),
      description: t('approach.pillars.narrative.description'),
    },
    {
      key: 'human',
      title: t('approach.pillars.human.title'),
      subtitle: t('approach.pillars.human.subtitle'),
      description: t('approach.pillars.human.description'),
    },
    {
      key: 'cultural',
      title: t('approach.pillars.cultural.title'),
      subtitle: t('approach.pillars.cultural.subtitle'),
      description: t('approach.pillars.cultural.description'),
    },
    {
      key: 'tech',
      title: t('approach.pillars.tech.title'),
      subtitle: t('approach.pillars.tech.subtitle'),
      description: t('approach.pillars.tech.description'),
    },
  ];

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-24 md:py-40 bg-background-100">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase mb-4">{t('approach.label')}</p>
          <h2 className="font-heading italic text-foreground-50 text-3xl md:text-5xl leading-tight">
            {t('approach.line1')}
            <br />
            <span className="text-primary-500">{t('approach.highlight')}</span>
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.key}
              className="group border-t border-background-200/70 pt-8"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary-500/40 font-label text-sm">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-heading text-foreground-50 text-xl md:text-2xl italic group-hover:text-primary-400 transition-colors duration-400">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-primary-400 text-sm tracking-wide mb-4">{pillar.subtitle}</p>
              <p className="text-foreground-500 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}