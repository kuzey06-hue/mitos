import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';
import { essays } from '@/mocks/research';

export default function EssaysList() {
  const { t } = useTranslation('research');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-16 md:py-24 bg-background-100">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary-500/40 font-label text-sm">{t('essays.number')}</span>
            <h2 className="font-heading italic text-foreground-50 text-3xl md:text-4xl">{t('essays.title')}</h2>
          </div>
          <p className="text-foreground-400 text-sm max-w-xl leading-relaxed">
            {t('essays.description')}
          </p>
        </div>

        <div className="space-y-20">
          {essays.map((essay, i) => (
            <EssayRow key={essay.id} essay={essay} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EssayRow({
  essay,
  index,
}: {
  essay: (typeof essays)[0];
  index: number;
}) {
  const { t } = useTranslation('research');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-center transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`relative aspect-[16/10] w-full overflow-hidden bg-background-200 lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <img
          src={essay.image}
          alt={essay.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className={`lg:col-span-3 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-foreground-500 text-[11px] tracking-[0.08em]">{essay.date}</span>
          <span className="text-foreground-700">·</span>
          <span className="text-foreground-500 text-[11px] tracking-[0.08em]">{essay.author}</span>
        </div>
        <h3 className="font-heading italic text-foreground-50 text-2xl md:text-3xl leading-snug mb-3">
          {essay.title}
        </h3>
        <p className="text-primary-400 text-[11px] tracking-[0.15em] uppercase mb-5">{essay.subtitle}</p>
        <div className="w-10 h-[1px] bg-primary-500 mb-5" />
        <p className="text-foreground-400 text-sm leading-relaxed line-clamp-6">{essay.body}</p>
        <button className="mt-6 inline-flex items-center gap-2 text-primary-500 text-xs tracking-[0.1em] uppercase group cursor-pointer whitespace-nowrap">
          <span>{t('essays.readFull')}</span>
          <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" style={{ width: '14px', height: '14px' }}></i>
        </button>
      </div>
    </div>
  );
}