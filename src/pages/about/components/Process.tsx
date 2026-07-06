import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

export default function Process() {
  const { t } = useTranslation('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  const steps = [
    { key: 'discovery', title: t('process.steps.discovery.title'), subtitle: t('process.steps.discovery.subtitle'), description: t('process.steps.discovery.description') },
    { key: 'concept', title: t('process.steps.concept.title'), subtitle: t('process.steps.concept.subtitle'), description: t('process.steps.concept.description') },
    { key: 'design', title: t('process.steps.design.title'), subtitle: t('process.steps.design.subtitle'), description: t('process.steps.design.description') },
    { key: 'production', title: t('process.steps.production.title'), subtitle: t('process.steps.production.subtitle'), description: t('process.steps.production.description') },
    { key: 'installation', title: t('process.steps.installation.title'), subtitle: t('process.steps.installation.subtitle'), description: t('process.steps.installation.description') },
  ];

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-24 md:py-40 bg-background-50">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase mb-4">{t('process.label')}</p>
          <h2 className="font-heading italic text-foreground-50 text-3xl md:text-5xl leading-tight">
            {t('process.line1')}
            <br />
            <span className="text-primary-500">{t('process.highlight')}</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[13px] md:left-[19px] top-0 bottom-0 w-[1px] bg-background-200/70" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div key={step.key} className="relative flex gap-5 md:gap-10 items-start">
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-background-50 border border-primary-500/40 flex items-center justify-center">
                  <span className="text-primary-500 text-[10px] md:text-xs font-label">{i + 1}</span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-heading text-foreground-50 text-xl md:text-2xl italic">{step.title}</h3>
                    <span className="text-foreground-700 text-xs tracking-wide">{step.subtitle}</span>
                  </div>
                  <p className="text-foreground-500 text-sm leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}