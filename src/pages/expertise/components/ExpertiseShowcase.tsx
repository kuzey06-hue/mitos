import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

const areaKeys = ['museum', 'exhibition', 'interior', 'cultural', 'competition', 'research', 'international'] as const;

const areaImages = {
  museum: 'https://readdy.ai/api/search-image?query=Grand%20museum%20interior%20hall%20with%20dramatic%20lighting%2C%20marble%20floors%20and%20contemporary%20art%20exhibition%2C%20high%20ceilings%20with%20architectural%20photography%2C%20warm%20ambient%20light%2C%20minimalist%20and%20elegant%20museum%20space%20design%20with%20subtle%20gold%20accents%2C%20editorial%20quality%2C%20cinematic%20composition&width=1200&height=800&seq=mitos-museum&orientation=landscape',
  exhibition: 'https://readdy.ai/api/search-image?query=Modern%20exhibition%20space%20with%20dramatic%20lighting%20on%20artifacts%20and%20artworks%2C%20dark%20environment%20with%20focused%20spotlights%2C%20museum%20quality%20display%20cases%2C%20sleek%20minimalist%20design%2C%20editorial%20photography%20style%2C%20high%20contrast%20lighting%2C%20contemporary%20gallery%20atmosphere&width=1200&height=800&seq=mitos-exhibition&orientation=landscape',
  interior: 'https://readdy.ai/api/search-image?query=Luxury%20minimalist%20interior%20space%20with%20natural%20materials%2C%20warm%20wood%20and%20stone%20textures%2C%20soft%20diffused%20lighting%2C%20contemporary%20architectural%20interior%20design%2C%20sophisticated%20atmosphere%2C%20editorial%20photography%2C%20high%20ceiling%20with%20clean%20lines&width=1200&height=800&seq=mitos-interior&orientation=landscape',
  cultural: 'https://readdy.ai/api/search-image?query=Historic%20cultural%20building%20facade%20at%20dusk%20with%20warm%20golden%20light%20illuminating%20heritage%20architecture%2C%20dramatic%20sky%2C%20cultural%20preservation%20atmosphere%2C%20editorial%20architectural%20photography%2C%20moody%20and%20sophisticated%2C%20museum%20quality&width=1200&height=800&seq=mitos-cultural&orientation=landscape',
  competition: 'https://readdy.ai/api/search-image?query=Architectural%20model%20and%20drawings%20on%20dark%20wooden%20table%2C%20design%20competition%20presentation%2C%20blueprint%20and%20physical%20white%20model%2C%20dramatic%20studio%20lighting%2C%20professional%20photography%2C%20architect%20workspace%2C%20moody%20atmosphere&width=1200&height=800&seq=mitos-competition&orientation=landscape',
  research: 'https://readdy.ai/api/search-image?query=Dark%20library%20or%20archive%20space%20with%20rows%20of%20books%20and%20documents%2C%20warm%20desk%20lamp%20light%2C%20scholarly%20atmosphere%2C%20research%20materials%20spread%20on%20table%2C%20moody%20editorial%20photography%2C%20high%20contrast%20lighting%2C%20intellectual%20ambiance&width=1200&height=800&seq=mitos-research&orientation=landscape',
  international: 'https://readdy.ai/api/search-image?query=Aerial%20view%20of%20modern%20cultural%20landmark%20building%20in%20a%20city%2C%20iconic%20contemporary%20architecture%2C%20dramatic%20sunset%20lighting%2C%20international%20destination%2C%20architectural%20photography%2C%20clean%20lines%20and%20bold%20forms%2C%20golden%20hour%20atmosphere&width=1200&height=800&seq=mitos-international&orientation=landscape',
};

export default function ExpertiseShowcase() {
  const { t } = useTranslation('expertise');

  const areas = areaKeys.map((key) => ({
    key,
    title: t(`areas.${key}.title`),
    subtitle: t(`areas.${key}.subtitle`),
    description: t(`areas.${key}.description`),
    image: areaImages[key],
  }));

  return (
    <div className="w-full">
      {areas.map((area, i) => (
        <ExpertiseSection key={area.key} area={area} index={i} />
      ))}
    </div>
  );
}

function ExpertiseSection({
  area,
  index,
}: {
  area: { key: string; title: string; subtitle: string; description: string; image: string };
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className={`relative w-full px-6 md:px-10 py-16 md:py-24 transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
        >
          {/* Image */}
          <div className={`relative aspect-[4/3] w-full overflow-hidden bg-background-200 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <img
              src={area.image}
              alt={area.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-50/30 via-transparent to-transparent" />
          </div>

          {/* Text */}
          <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-primary-500/40 font-label text-sm">{String(index + 1).padStart(2, '0')}</span>
              <h2 className="font-heading text-foreground-50 text-2xl md:text-3xl lg:text-4xl italic">{area.title}</h2>
            </div>
            <p className="text-primary-400 text-xs tracking-[0.2em] uppercase mb-6">{area.subtitle}</p>
            <p className="text-foreground-400 text-sm leading-relaxed">{area.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}