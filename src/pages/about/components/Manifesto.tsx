import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

export default function Manifesto() {
  const { t } = useTranslation('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-24 md:py-40 bg-background-50">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left label */}
          <div className="lg:col-span-3">
            <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase lg:sticky lg:top-32">{t('manifesto.label')}</p>
          </div>

          {/* Right content */}
          <div className="lg:col-span-9">
            <blockquote className="font-heading italic text-foreground-100 text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              &ldquo;{t('manifesto.quote')}&rdquo;
            </blockquote>

            <div className="mt-12 space-y-6 text-foreground-400 text-sm md:text-base leading-relaxed max-w-2xl">
              <p>{t('manifesto.p1')}</p>
              <p>{t('manifesto.p2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}