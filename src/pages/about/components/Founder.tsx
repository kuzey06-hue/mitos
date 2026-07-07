import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

export default function Founder() {
  const { t } = useTranslation('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-24 md:py-40 bg-background-100">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-background-200">
            <img
              src="/founder.png"
              alt="Hakan Aktaş — Mitos"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-100/40 via-transparent to-transparent" />
          </div>

          {/* Text */}
          <div>
            <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase mb-6">{t('founder.label')}</p>
            <h2 className="font-heading italic text-foreground-50 text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              {t('founder.line1')}
              <br />
              <span className="text-primary-500">{t('founder.line2')}</span>
              <br />
              {t('founder.line3')}
            </h2>

            <div className="w-12 h-[1px] bg-primary-500 mb-8" />

            <div className="space-y-4 text-foreground-400 text-sm leading-relaxed">
              <p>{t('founder.p1')}</p>
              <p>{t('founder.p2')}</p>
              <p>{t('founder.p3')}</p>
            </div>

            <p className="mt-8 text-primary-500 font-heading italic text-lg">
              {t('founder.signature')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
