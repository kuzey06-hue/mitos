import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';
import { heritageStudies } from '@/mocks/research';

export default function HeritageStudies() {
  const { t } = useTranslation('research');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-16 md:py-24 bg-background-100">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary-500/40 font-label text-sm">{t('heritage.number')}</span>
            <h2 className="font-heading italic text-foreground-50 text-3xl md:text-4xl">{t('heritage.title')}</h2>
          </div>
          <p className="text-foreground-400 text-sm max-w-xl leading-relaxed">
            {t('heritage.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heritageStudies.map((study, i) => (
            <HeritageCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeritageCard({
  study,
  index,
}: {
  study: (typeof heritageStudies)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });

  return (
    <div
      ref={ref}
      className="group cursor-pointer transition-all duration-700"
      style={{ transitionDelay: `${index * 100}ms`, opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(12px)' }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-background-200 mb-5">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className={`inline-block text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 ${
            study.status === 'Ongoing'
              ? 'bg-primary-500/20 text-primary-400'
              : 'bg-background-50/80 backdrop-blur-sm text-foreground-400'
          }`}>
            {study.status}
          </span>
        </div>
      </div>

      <h4 className="font-heading italic text-foreground-50 text-lg leading-snug mb-2 group-hover:text-primary-500 transition-colors duration-300">
        {study.title}
      </h4>
      <p className="text-primary-400 text-[11px] tracking-[0.08em] mb-3">{study.subtitle}</p>
      <p className="text-foreground-400 text-xs leading-relaxed line-clamp-3 mb-4">{study.abstract}</p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-foreground-500 tracking-[0.05em]">
        <span className="flex items-center gap-1.5">
          <i className="ri-map-pin-line text-primary-500/60" style={{ width: '12px', height: '12px' }}></i>
          {study.region}
        </span>
        <span className="flex items-center gap-1.5">
          <i className="ri-calendar-line text-primary-500/60" style={{ width: '12px', height: '12px' }}></i>
          {study.period}
        </span>
      </div>
    </div>
  );
}