import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';
import { useLocalizedResearch } from '@/hooks/useLocalizedResearch';
import { materials } from '@/mocks/research';

export default function MaterialLibrary() {
  const { t } = useTranslation('research');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-16 md:py-24 bg-background-50">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary-500/40 font-label text-sm">{t('materials.number')}</span>
            <h2 className="font-heading italic text-foreground-50 text-3xl md:text-4xl">{t('materials.title')}</h2>
          </div>
          <p className="text-foreground-400 text-sm max-w-xl leading-relaxed">
            {t('materials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, i) => (
            <MaterialCard key={material.id} material={material} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialCard({
  material,
  index,
}: {
  material: (typeof materials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });
  const m = useLocalizedResearch().material(material);

  return (
    <div
      ref={ref}
      className="group cursor-pointer transition-all duration-700"
      style={{ transitionDelay: `${index * 100}ms`, opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(12px)' }}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-background-200 mb-4">
        <img
          src={m.image}
          alt={m.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-block bg-background-50/80 backdrop-blur-sm text-foreground-400 text-[10px] tracking-[0.15em] uppercase px-2 py-0.5">
            {m.category}
          </span>
        </div>
      </div>

      <h4 className="font-heading italic text-foreground-50 text-base mb-1 group-hover:text-primary-500 transition-colors duration-300">
        {m.name}
      </h4>
      <p className="text-foreground-500 text-[11px] tracking-[0.05em] mb-2">{m.origin}</p>
      <p className="text-foreground-400 text-xs leading-relaxed line-clamp-2">{m.characteristics}</p>
    </div>
  );
}
