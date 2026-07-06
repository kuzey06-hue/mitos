import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';
import { projects, type Project } from '@/mocks/projects';

const featuredIds = [
  'erzurum-museum-karaz',
  'erzincan-altintepe-oren-yeri',
  'cumhurbaskanligi-15-temmuz-demokrasi-muzesi',
  'istanbul-ayasofya-muzesi',
  'istanbul-topkapi-sarayi-muzesi',
  'konya-mevlana-muzesi',
  'anadolu-medeniyetleri-muzesi',
  'troya-muzesi',
  'gobeklitepe-oren-yeri',
];

export default function FeaturedProjects() {
  const { t } = useTranslation('home');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  const featured = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean) as Project[];

  return (
    <section ref={ref} className="relative w-full px-6 md:px-10 py-24 md:py-32 bg-background-100">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase mb-3">
              {t('featured.sectionLabel')}
            </p>
            <h2 className="font-heading italic text-foreground-50 text-3xl md:text-4xl lg:text-5xl leading-tight">
              {t('featured.line1')}
              <br />
              <span className="text-primary-500">{t('featured.highlight')}</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-primary-500 text-xs tracking-[0.15em] uppercase hover:text-primary-400 transition-colors duration-300 whitespace-nowrap"
          >
            <span>{t('featured.viewAll')}</span>
            <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((project, i) =>
            project ? <ProjectCard key={project.id} project={project} index={i} /> : null
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });
  const hasImage = project.coverImage && project.coverImage.trim().length > 0;

  return (
    <Link
      ref={ref as React.RefObject<HTMLAnchorElement>}
      to={`/projects/${project.id}`}
      className="group block transition-all duration-700"
      style={{
        transitionDelay: `${(index % 2) * 100}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(12px)',
      }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary-100 mb-5">
        {hasImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-secondary-500 text-xs tracking-[0.2em] uppercase">
              Görsel yakında eklenecek
            </span>
          </div>
        )}
        {hasImage && (
          <div className="absolute inset-0 bg-gradient-to-t from-background-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-background-50/80 backdrop-blur-sm rounded-full">
          <span className="text-foreground-300 text-xs tracking-[0.15em] uppercase">
            {project.category}
          </span>
        </div>
      </div>

      {/* Text */}
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-heading text-foreground-50 text-lg md:text-xl italic group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-foreground-700 text-xs tracking-wide ml-4 flex-shrink-0">
            {project.year}
          </span>
        </div>
        <p className="text-foreground-500 text-xs tracking-wide">{project.location}</p>
        <p className="text-foreground-400 text-sm leading-relaxed mt-2 line-clamp-2">
          {project.tagline}
        </p>
      </div>
    </Link>
  );
}