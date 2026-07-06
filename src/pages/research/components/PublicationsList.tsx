import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';
import { publications } from '@/mocks/research';

const books = publications.filter((p) => p.type === 'Book' || p.type === 'Research Monograph');
const journalArticles = publications.filter((p) => p.type === 'Journal Article');

export default function PublicationsList() {
  const { t } = useTranslation('research');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-16 md:py-24 bg-background-50">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary-500/40 font-label text-sm">{t('publications.number')}</span>
            <h2 className="font-heading italic text-foreground-50 text-3xl md:text-4xl">{t('publications.title')}</h2>
          </div>
          <p className="text-foreground-400 text-sm max-w-xl leading-relaxed">
            {t('publications.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h3 className="text-primary-500 text-[11px] tracking-[0.2em] uppercase mb-8">{t('publications.books')}</h3>
            <div className="space-y-8">
              {books.map((pub, i) => (
                <PublicationItem key={pub.id} publication={pub} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-primary-500 text-[11px] tracking-[0.2em] uppercase mb-8">{t('publications.journal')}</h3>
            <div className="space-y-8">
              {journalArticles.map((pub, i) => (
                <PublicationItem key={pub.id} publication={pub} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PublicationItem({
  publication,
  index,
}: {
  publication: (typeof publications)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });

  return (
    <div
      ref={ref}
      className="group cursor-pointer transition-all duration-700"
      style={{ transitionDelay: `${index * 100}ms`, opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(8px)' }}
    >
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <span className="text-foreground-500 text-[11px] tracking-[0.08em]">{publication.year}</span>
        <span className="text-foreground-700 text-[10px]">·</span>
        <span className="text-foreground-500 text-[11px] tracking-[0.08em]">{publication.publisher}</span>
        {publication.language && (
          <>
            <span className="text-foreground-700 text-[10px]">·</span>
            <span className="text-foreground-600 text-[10px] tracking-[0.05em]">{publication.language}</span>
          </>
        )}
      </div>

      <h4 className="font-heading italic text-foreground-50 text-lg leading-snug mb-2 group-hover:text-primary-500 transition-colors duration-300">
        {publication.title}
      </h4>

      <p className="text-foreground-400 text-xs leading-relaxed mb-3">{publication.description}</p>

      {publication.isbn && (
        <p className="text-foreground-600 text-[10px] tracking-[0.05em] font-mono">ISBN {publication.isbn}</p>
      )}
    </div>
  );
}