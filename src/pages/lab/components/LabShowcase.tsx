import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

const labAreaKeys = ['ai', 'videoMapping', 'interactive', 'digitalHeritage', 'xr', 'projection', 'experimental'] as const;

const labAreaImages: Record<string, string> = {
  ai: 'https://readdy.ai/api/search-image?query=Abstract%20digital%20neural%20network%20visualization%20with%20flowing%20data%20streams%20and%20geometric%20patterns%2C%20dark%20background%20with%20warm%20golden%20and%20copper%20light%20particles%2C%20futuristic%20AI%20technology%20concept%20art%2C%20minimalist%20aesthetic%2C%20clean%20lines%2C%20sophisticated%20computational%20design%20atmosphere%2C%20high%20detail%20rendering&width=1400&height=900&seq=mitos-lab-ai-01&orientation=landscape',
  videoMapping: 'https://readdy.ai/api/search-image?query=Dramatic%20architectural%20projection%20mapping%20on%20historic%20building%20facade%20at%20night%2C%20colorful%20geometric%20light%20patterns%20and%20abstract%20shapes%20illuminating%20stone%20surface%2C%20immersive%20light%20installation%2C%20dark%20atmosphere%20with%20vibrant%20projected%20visuals%2C%20contemporary%20media%20art%2C%20professional%20wide%20angle%20photography&width=1400&height=900&seq=mitos-lab-vm-02&orientation=landscape',
  interactive: 'https://readdy.ai/api/search-image?query=Interactive%20digital%20installation%20in%20dark%20gallery%20space%2C%20people%20touching%20glowing%20responsive%20surfaces%20with%20light%20trails%2C%20immersive%20technology%20art%20exhibition%2C%20warm%20amber%20and%20soft%20blue%20light%20effects%2C%20contemporary%20media%20art%20atmosphere%2C%20editorial%20photography%2C%20human%20interaction%20with%20technology&width=1400&height=900&seq=mitos-lab-int-03&orientation=landscape',
  digitalHeritage: 'https://readdy.ai/api/search-image?query=Ancient%20archaeological%20site%20digitally%20reconstructed%20with%20holographic%20wireframe%20overlay%2C%20photogrammetry%20point%20cloud%20visualization%2C%20warm%20stone%20textures%20mixed%20with%20digital%20scanning%20data%2C%20heritage%20preservation%20technology%20concept%2C%20atmospheric%20lighting%2C%20sophisticated%20documentary%20style&width=1400&height=900&seq=mitos-lab-dh-04&orientation=landscape',
  xr: 'https://readdy.ai/api/search-image?query=Person%20wearing%20sleek%20augmented%20reality%20glasses%20in%20minimalist%20gallery%20space%2C%20holographic%20digital%20art%20floating%20in%20mid%20air%2C%20futuristic%20museum%20experience%2C%20warm%20ambient%20lighting%2C%20clean%20modern%20aesthetic%2C%20technology%20and%20art%20fusion%2C%20professional%20editorial%20photography&width=1400&height=900&seq=mitos-lab-xr-05&orientation=landscape',
  projection: 'https://readdy.ai/api/search-image?query=Volumetric%20light%20beams%20creating%20sculptural%20forms%20in%20dark%20minimalist%20space%2C%20laser%20and%20projection%20art%20installation%2C%20ethereal%20light%20sculpture%2C%20dramatic%20atmospheric%20haze%2C%20contemporary%20light%20art%2C%20warm%20golden%20and%20soft%20white%20beams%2C%20museum%20quality%20fine%20art%20photography&width=1400&height=900&seq=mitos-lab-proj-06&orientation=landscape',
  experimental: 'https://readdy.ai/api/search-image?query=Experimental%20design%20studio%20workspace%20with%20prototypes%20and%20material%20samples%20scattered%20on%20tables%2C%20warm%20ambient%20lighting%2C%20creative%20chaos%20aesthetic%2C%20artistic%20research%20laboratory%2C%20textures%20and%20tools%20visible%2C%20sophisticated%20workshop%20atmosphere%2C%20editorial%20photography%2C%20dark%20moody%20background&width=1400&height=900&seq=mitos-lab-exp-07&orientation=landscape',
};

export default function LabShowcase() {
  const { t } = useTranslation('lab');

  const labAreas = labAreaKeys.map((key) => ({
    id: key,
    number: t(`areas.${key}.number`),
    title: t(`areas.${key}.title`),
    tagline: t(`areas.${key}.tagline`),
    description: t(`areas.${key}.description`),
    keywords: t(`areas.${key}.keywords`, { returnObjects: true }) as unknown as string[],
    image: labAreaImages[key],
  }));

  return (
    <div className="w-full">
      {labAreas.map((area, i) => (
        <LabSection key={area.id} area={area} index={i} />
      ))}

      <LabClosing />
    </div>
  );
}

function LabSection({ area, index }: { area: { id: string; number: string; title: string; tagline: string; description: string; keywords: string[]; image: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });
  const isEven = index % 2 === 0;
  const bg = index % 2 === 0 ? 'bg-background-50' : 'bg-background-100';
  const { t } = useTranslation('lab');

  return (
    <section ref={ref} className={`relative w-full ${bg} overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className={`flex flex-col ${isEven ? 'md:flex-row md:items-end md:justify-between' : 'md:flex-row-reverse md:items-end md:justify-between'} gap-6 mb-12`}>
            <div>
              <span className="text-primary-500/30 font-label text-7xl md:text-8xl lg:text-9xl italic leading-none select-none">
                {area.number}
              </span>
            </div>
            <div className={`${isEven ? 'md:text-right' : 'md:text-left'}`}>
              <h2 className="font-heading italic text-foreground-50 text-2xl md:text-3xl lg:text-4xl leading-tight">
                {area.title}
              </h2>
              <p className="text-primary-400 text-xs tracking-[0.25em] uppercase mt-2">{area.tagline}</p>
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden bg-background-200 mb-10">
            <img
              src={area.image}
              alt={area.title}
              className="w-full h-full object-cover object-top transition-transform duration-1000 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-50/40 via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <p className="text-foreground-400 text-sm md:text-base leading-relaxed">{area.description}</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-foreground-600 text-[10px] tracking-[0.3em] uppercase">{t('researchAreas')}</p>
              <div className="flex flex-wrap gap-2">
                {area.keywords.map((kw: string) => (
                  <span
                    key={kw}
                    className="inline-block px-3 py-1.5 text-[11px] text-foreground-500 bg-background-200/70 border border-background-300/60 whitespace-nowrap"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LabClosing() {
  const { t } = useTranslation('lab');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: true });

  return (
    <section ref={ref} className="relative w-full bg-background-50 py-24 md:py-32">
      <div className={`max-w-3xl mx-auto px-6 md:px-10 text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-3 h-3 rounded-full bg-primary-500 animate-pulse" />
          <span className="text-foreground-600 text-[10px] tracking-[0.3em] uppercase">{t('closing.joinLabel')}</span>
        </div>

        <p className="font-heading italic text-foreground-200 text-xl md:text-2xl lg:text-3xl leading-relaxed">
          {t('closing.text')}
        </p>

        <div className="mt-10">
          <a
            href="mailto:lab@mitostr.com"
            className="inline-flex items-center gap-3 group cursor-pointer"
          >
            <span className="text-primary-500 text-sm whitespace-nowrap group-hover:text-primary-400 transition-colors duration-300">
              lab@mitostr.com
            </span>
            <i className="ri-arrow-right-up-line text-primary-500 group-hover:text-primary-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}