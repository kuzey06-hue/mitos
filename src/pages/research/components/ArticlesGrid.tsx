import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';
import { articles } from '@/mocks/research';

export default function ArticlesGrid() {
  const { t } = useTranslation('research');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-16 md:py-24 bg-background-50">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary-500/40 font-label text-sm">{t('articles.number')}</span>
            <h2 className="font-heading italic text-foreground-50 text-3xl md:text-4xl">{t('articles.title')}</h2>
          </div>
          <p className="text-foreground-400 text-sm max-w-xl leading-relaxed">
            {t('articles.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });

  return (
    <article
      ref={ref}
      className="group cursor-pointer transition-all duration-700"
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(8px)',
      }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-background-200 mb-5">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-background-50/80 backdrop-blur-sm text-foreground-400 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1">
            {article.category}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="text-foreground-500 text-[11px] tracking-[0.08em]">{article.date}</span>
        <span className="text-foreground-700">·</span>
        <span className="text-foreground-500 text-[11px] tracking-[0.08em]">{article.author}</span>
      </div>
      <h3 className="font-heading italic text-foreground-50 text-lg md:text-xl leading-snug mb-2 group-hover:text-primary-500 transition-colors duration-300">
        {article.title}
      </h3>
      <p className="text-foreground-500 text-[11px] tracking-[0.05em] leading-relaxed mb-3">{article.subtitle}</p>
      <p className="text-foreground-400 text-xs leading-relaxed line-clamp-3">{article.excerpt}</p>
    </article>
  );
}