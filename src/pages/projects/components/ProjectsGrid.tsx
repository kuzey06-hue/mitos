import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';
import { useLocalizedProjects } from '@/hooks/useLocalizedProjects';
import type { Project } from '@/mocks/projects';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const { t } = useTranslation('projects');
  const localize = useLocalizedProjects();

  return (
    <div className="w-full px-6 md:px-10 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={localize(project)} index={i} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground-600 text-lg font-heading italic">
              {t('empty')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });
  const hasImage = project.coverImage && project.coverImage.trim().length > 0;

  return (
    <Link
      ref={ref as React.RefObject<HTMLAnchorElement>}
      to={`/projects/${project.id}`}
      className={`group block transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      {/* Image or placeholder */}
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
              {t('common:imageComingSoon')}
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
          <h3 className="font-heading text-foreground-50 text-xl md:text-2xl italic group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-foreground-700 text-xs tracking-wide ml-4 flex-shrink-0">
            {project.year}
          </span>
        </div>
        <p className="text-foreground-500 text-xs tracking-wide mb-2">{project.location}</p>
        <p className="text-foreground-400 text-sm leading-relaxed line-clamp-2">
          {project.tagline}
        </p>
      </div>
    </Link>
  );
}
