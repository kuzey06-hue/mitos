import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';

const pieceData = {
  furniture: [
    {
      name: 'Kiyi Bench',
      materials: 'Solid Oak, Blackened Steel',
      dimensions: '180 × 45 × 42 cm',
      year: '2024',
      image:
        'https://readdy.ai/api/search-image?query=Minimalist%20solid%20oak%20wooden%20bench%20with%20blackened%20steel%20legs%20in%20a%20bright%20contemporary%20gallery%20space%2C%20warm%20natural%20wood%20grain%20texture%2C%20clean%20architectural%20lines%2C%20soft%20diffused%20daylight%20from%20large%20windows%2C%20Scandinavian%20Japanese%20fusion%20design%20aesthetic%2C%20editorial%20product%20photography%2C%20neutral%20background&width=800&height=800&seq=mitos-coll-furn-01&orientation=squarish',
    },
    {
      name: 'Miro Table',
      materials: 'Travertine, Brushed Brass',
      dimensions: '240 × 100 × 74 cm',
      year: '2023',
      image:
        'https://readdy.ai/api/search-image?query=Large%20travertine%20stone%20dining%20table%20with%20brushed%20brass%20base%20details%20in%20a%20minimalist%20interior%20space%2C%20natural%20stone%20texture%20with%20subtle%20veining%2C%20warm%20ambient%20lighting%2C%20luxurious%20contemporary%20design%2C%20elegant%20simplicity%2C%20editorial%20furniture%20photography%2C%20clean%20neutral%20background&width=800&height=800&seq=mitos-coll-furn-02&orientation=squarish',
    },
    {
      name: 'Tene Shelf System',
      materials: 'Powder-Coated Aluminum, Walnut',
      dimensions: 'Modular, 90 × 30 cm per unit',
      year: '2025',
      image:
        'https://readdy.ai/api/search-image?query=Modular%20wall%20mounted%20shelving%20system%20in%20dark%20walnut%20wood%20and%20matte%20black%20aluminum%2C%20geometric%20composition%20with%20books%20and%20ceramic%20objects%2C%20minimalist%20interior%20design%2C%20warm%20lighting%2C%20contemporary%20storage%20design%2C%20editorial%20photography%2C%20clean%20aesthetic&width=800&height=800&seq=mitos-coll-furn-03&orientation=squarish',
    },
    {
      name: 'Yanko Chair',
      materials: 'Steam-Bent Ash, Wool Upholstery',
      dimensions: '54 × 52 × 78 cm',
      year: '2024',
      image:
        'https://readdy.ai/api/search-image?query=Steam%20bent%20ash%20wood%20dining%20chair%20with%20light%20grey%20wool%20upholstered%20seat%2C%20sculptural%20organic%20form%2C%20elegant%20curved%20backrest%2C%20placed%20in%20a%20bright%20minimalist%20room%2C%20warm%20natural%20light%2C%20Nordic%20design%20influence%2C%20editorial%20product%20photography%2C%20neutral%20background&width=800&height=800&seq=mitos-coll-furn-04&orientation=squarish',
    },
  ],
  lighting: [
    {
      name: 'Duru Pendant',
      materials: 'Hand-Blown Glass, Satin Brass',
      dimensions: 'ø 35 × 42 cm',
      year: '2024',
      image:
        'https://readdy.ai/api/search-image?query=Hand%20blown%20glass%20pendant%20light%20with%20satin%20brass%20hardware%2C%20warm%20soft%20glow%2C%20organic%20spherical%20shape%20with%20subtle%20texture%2C%20hanging%20in%20a%20dark%20minimalist%20interior%2C%20elegant%20ambient%20lighting%2C%20contemporary%20design%2C%20editorial%20product%20photography%2C%20moody%20atmosphere&width=800&height=800&seq=mitos-coll-light-01&orientation=squarish',
    },
    {
      name: 'Iz Wall Light',
      materials: 'Cast Aluminum, Micro-Prism Diffuser',
      dimensions: '28 × 12 × 8 cm',
      year: '2025',
      image:
        'https://readdy.ai/api/search-image?query=Sleek%20cast%20aluminum%20wall%20mounted%20light%20fixture%20with%20micro%20prism%20diffuser%20casting%20geometric%20light%20pattern%20on%20wall%2C%20minimalist%20architectural%20lighting%20design%2C%20warm%20amber%20glow%2C%20contemporary%20interior%2C%20clean%20lines%2C%20editorial%20photography%2C%20dark%20moody%20background&width=800&height=800&seq=mitos-coll-light-02&orientation=squarish',
    },
    {
      name: 'Solak Floor Lamp',
      materials: 'Patina Brass, Linen Shade',
      dimensions: 'ø 40 × 165 cm',
      year: '2023',
      image:
        'https://readdy.ai/api/search-image?query=Tall%20elegant%20floor%20lamp%20with%20patinated%20brass%20stem%20and%20natural%20linen%20cylindrical%20shade%2C%20warm%20diffused%20light%2C%20placed%20beside%20a%20reading%20chair%20in%20a%20sophisticated%20interior%2C%20soft%20shadows%2C%20timeless%20design%2C%20editorial%20product%20photography%2C%20refined%20atmosphere&width=800&height=800&seq=mitos-coll-light-03&orientation=squarish',
    },
    {
      name: 'Nokta Table Lamp',
      materials: 'Ceramic, Frosted Glass Globe',
      dimensions: 'ø 18 × 32 cm',
      year: '2024',
      image:
        'https://readdy.ai/api/search-image?query=Small%20ceramic%20table%20lamp%20with%20frosted%20glass%20globe%20shade%2C%20warm%20intimate%20light%2C%20organic%20handcrafted%20texture%2C%20placed%20on%20a%20wooden%20side%20table%2C%20cozy%20sophisticated%20interior%2C%20contemporary%20minimalist%20design%2C%20editorial%20photography%2C%20soft%20focus%20background&width=800&height=800&seq=mitos-coll-light-04&orientation=squarish',
    },
  ],
  exhibition: [
    {
      name: 'Seyir Vitrine',
      materials: 'Museum Glass, Micro-Climate Steel Frame',
      dimensions: '120 × 60 × 180 cm',
      year: '2023',
      image:
        'https://readdy.ai/api/search-image?query=Museum%20quality%20glass%20display%20vitrine%20with%20ultra%20thin%20steel%20frame%20in%20a%20contemporary%20gallery%20space%2C%20anti%20reflective%20glass%2C%20minimalist%20museum%20display%20case%2C%20internal%20LED%20lighting%2C%20dark%20gallery%20environment%2C%20professional%20museum%20photography%2C%20clean%20sophisticated%20design&width=800&height=800&seq=mitos-coll-exh-01&orientation=squarish',
    },
    {
      name: 'Modus Wall System',
      materials: 'Perforated Metal, Acoustic Panel Core',
      dimensions: 'Modular, 120 × 240 cm per panel',
      year: '2025',
      image:
        'https://readdy.ai/api/search-image?query=Modular%20exhibition%20wall%20panel%20system%20with%20subtle%20perforated%20metal%20surface%20and%20integrated%20lighting%2C%20contemporary%20gallery%20installation%2C%20flexible%20museum%20display%20architecture%2C%20warm%20grey%20tones%2C%20clean%20geometric%20lines%2C%20professional%20exhibition%20design%20photography%2C%20minimalist%20aesthetic&width=800&height=800&seq=mitos-coll-exh-02&orientation=squarish',
    },
    {
      name: 'Kule Pedestal',
      materials: 'Solid Carrara Marble, Stainless Steel',
      dimensions: '40 × 40 × 110 cm',
      year: '2024',
      image:
        'https://readdy.ai/api/search-image?query=Elegant%20solid%20white%20Carrara%20marble%20sculpture%20pedestal%20with%20subtle%20stainless%20steel%20base%20detail%20in%20a%20museum%20gallery%2C%20displaying%20a%20small%20artifact%2C%20dramatic%20spotlight%2C%20classical%20contemporary%20museum%20display%20design%2C%20refined%20minimalism%2C%20editorial%20photography%2C%20dark%20background&width=800&height=800&seq=mitos-coll-exh-03&orientation=squarish',
    },
    {
      name: 'Akil System',
      materials: 'Anodized Aluminum, Integrated Fiber Optics',
      dimensions: 'Fully modular grid, 60 × 60 cm units',
      year: '2024',
      image:
        'https://readdy.ai/api/search-image?query=Modular%20anodized%20aluminum%20display%20grid%20system%20with%20integrated%20fiber%20optic%20lighting%20points%2C%20contemporary%20museum%20exhibition%20technology%2C%20flexible%20artifact%20mounting%20system%2C%20dark%20gallery%20space%2C%20warm%20pinpoint%20illumination%2C%20professional%20museum%20design%20photography%2C%20clean%20technical%20aesthetic&width=800&height=800&seq=mitos-coll-exh-04&orientation=squarish',
    },
  ],
};

const collectionKeys = ['furniture', 'lighting', 'exhibition'] as const;

export default function CollectionsShowcase() {
  const { t } = useTranslation('collections');

  const collections = collectionKeys.map((key) => ({
    id: key,
    number: t(`collections.${key}.number`),
    title: t(`collections.${key}.title`),
    tagline: t(`collections.${key}.tagline`),
    description: t(`collections.${key}.description`),
    pieces: pieceData[key],
  }));

  return (
    <div className="w-full">
      {collections.map((collection, i) => (
        <CollectionSection key={collection.id} collection={collection} index={i} />
      ))}

      <CollectionClosing />
    </div>
  );
}

function CollectionSection({
  collection,
  index,
}: {
  collection: { id: string; number: string; title: string; tagline: string; description: string; pieces: { name: string; materials: string; dimensions: string; year: string; image: string }[] };
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });
  const bg = index % 2 === 0 ? 'bg-background-50' : 'bg-background-100';

  return (
    <section ref={ref} className={`relative w-full ${bg}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="mb-16">
            <div className="flex items-baseline gap-6 mb-4">
              <span className="text-primary-500/30 font-label text-5xl md:text-6xl italic leading-none select-none">
                {collection.number}
              </span>
              <div>
                <h2 className="font-heading italic text-foreground-50 text-2xl md:text-3xl lg:text-4xl">
                  {collection.title}
                </h2>
                <p className="text-primary-400 text-xs tracking-[0.25em] uppercase mt-1">{collection.tagline}</p>
              </div>
            </div>
            <p className="text-foreground-400 text-sm leading-relaxed max-w-2xl">{collection.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {collection.pieces.map((piece) => (
              <PieceCard key={piece.name} piece={piece} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PieceCard({
  piece,
}: {
  piece: {
    name: string;
    materials: string;
    dimensions: string;
    year: string;
    image: string;
  };
}) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square w-full overflow-hidden bg-background-200 mb-4">
        <img
          src={piece.image}
          alt={piece.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background-50/0 group-hover:bg-background-50/10 transition-colors duration-500" />
        <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] text-foreground-500 bg-background-50/80 backdrop-blur-sm">
          {piece.year}
        </span>
      </div>

      <h3 className="font-heading text-foreground-200 text-sm group-hover:text-primary-500 transition-colors duration-300">
        {piece.name}
      </h3>
      <p className="text-foreground-500 text-[11px] leading-relaxed mt-1">{piece.materials}</p>
      <p className="text-foreground-600 text-[10px] mt-0.5">{piece.dimensions}</p>
    </div>
  );
}

function CollectionClosing() {
  const { t } = useTranslation('collections');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: true });

  return (
    <section ref={ref} className="relative w-full bg-background-50 py-24 md:py-32">
      <div
        className={`max-w-3xl mx-auto px-6 md:px-10 text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-12 h-[1px] bg-primary-500 mx-auto mb-8" />

        <p className="font-heading italic text-foreground-200 text-xl md:text-2xl lg:text-3xl leading-relaxed">
          {t('closing.line1')}
          <br />
          {t('closing.line2')}
        </p>

        <div className="mt-10">
          <a
            href="mailto:collections@mitostr.com"
            className="inline-flex items-center gap-3 group cursor-pointer"
          >
            <span className="text-primary-500 text-sm whitespace-nowrap group-hover:text-primary-400 transition-colors duration-300">
              collections@mitostr.com
            </span>
            <i className="ri-arrow-right-up-line text-primary-500 group-hover:text-primary-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}