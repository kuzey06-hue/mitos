import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import { useInView } from '@/hooks/useInView';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { projects } from '@/mocks/projects';
import { useLocalizedProjects } from '@/hooks/useLocalizedProjects';
import SEO from '@/components/base/SEO';

export default function ProjectDetail() {
  const { t } = useTranslation('projects');
  useRTL();
  const { id } = useParams();
  const localize = useLocalizedProjects();
  const rawProject = projects.find((p) => p.id === id);
  const project = rawProject ? localize(rawProject) : undefined;

  if (!project) {
    return (
      <main className="relative w-full bg-background-50 min-h-screen">
        <SEO
          title="Proje Bulunamad\u0131 \u2014 Mitos"
          description="Arad\u0131\u011f\u0131n\u0131z proje bulunamad\u0131. Mitos'un proje portfolyosuna g\u00f6z at\u0131n."
          canonicalPath="/projects"
        />
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="font-heading italic text-foreground-400 text-2xl mb-4">{t('detail.notFound')}</p>
            <Link
              to="/projects"
              className="text-foreground-300 text-xs tracking-[0.2em] uppercase hover:text-primary-400 transition-colors duration-300"
            >
              {t('detail.backToProjects')}
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const nextProject = project.nextProjectId
    ? projects.find((p) => p.id === project.nextProjectId)
    : null;
  const prevProject = project.prevProjectId
    ? projects.find((p) => p.id === project.prevProjectId)
    : null;

  const hasCover = project.coverImage && project.coverImage.trim().length > 0;

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.tagline,
    about: project.description,
    dateCreated: project.year,
    url: `https://mitostr.com/projects/${project.id}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mitostr.com/projects/${project.id}`,
    },
  };

  return (
    <main className="relative w-full bg-background-50">
      <SEO
        title={`${project.title} \u2014 Mitos | Proje Detay\u0131`}
        description={project.tagline}
        keywords={`${project.category}, project detail, Mitos, ${project.location || ''}`}
        canonicalPath={`/projects/${project.id}`}
        ogType="article"
        schema={projectSchema}
      />
      <Navbar />

      {/* Cover Hero */}
      <section className={`relative w-full overflow-hidden ${hasCover ? 'h-[70vh] md:h-[85vh]' : 'h-[50vh] md:h-[60vh] bg-secondary-100'}`}>
        {hasCover ? (
          <>
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background-50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-secondary-100 flex items-center justify-center">
            <span className="text-secondary-500 text-xs tracking-[0.2em] uppercase">
              Görsel yakında eklenecek
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-12 md:pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-primary-500 text-xs tracking-[0.2em] uppercase">
                {project.category}
              </span>
              <span className="text-foreground-600 text-xs">{project.year}</span>
            </div>
            <h1 className="font-heading italic text-foreground-50 text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
              {project.title}
            </h1>
            <p className="text-foreground-400 text-sm md:text-base mt-4 max-w-xl">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-foreground-300 text-base md:text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Sections */}
      {project.sections.map((section, i) => (
        <ProjectSection key={i} section={section} />
      ))}

      {/* Navigation */}
      <section className="border-t border-background-200/50">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-stretch">
            {prevProject && (
              <Link
                to={`/projects/${prevProject.id}`}
                className="flex-1 py-10 md:py-14 px-4 border-b sm:border-b-0 sm:border-r border-background-200/50 group transition-colors duration-300 hover:bg-background-100"
              >
                <p className="text-foreground-600 text-xs tracking-[0.2em] uppercase mb-2">
                  {t('detail.prevProject')}
                </p>
                <p className="font-heading italic text-foreground-200 text-lg md:text-xl group-hover:text-primary-400 transition-colors duration-300">
                  {prevProject.title}
                </p>
              </Link>
            )}
            {nextProject && (
              <Link
                to={`/projects/${nextProject.id}`}
                className={`flex-1 py-10 md:py-14 px-4 group transition-colors duration-300 hover:bg-background-100 ${
                  !prevProject ? 'sm:text-left' : 'sm:text-right'
                }`}
              >
                <p className="text-foreground-600 text-xs tracking-[0.2em] uppercase mb-2">
                  {t('detail.nextProject')}
                </p>
                <p className="font-heading italic text-foreground-200 text-lg md:text-xl group-hover:text-primary-400 transition-colors duration-300">
                  {nextProject.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Back to projects */}
      <section className="px-6 md:px-10 py-12 md:py-16 text-center">
        <Link
          to="/projects"
          className="inline-block text-foreground-400 text-xs tracking-[0.2em] uppercase hover:text-primary-400 transition-colors duration-300 border-b border-foreground-700 hover:border-primary-400 pb-1 whitespace-nowrap"
        >
          {t('detail.allProjects')}
        </Link>
      </section>

      <Footer />
    </main>
  );
}

function ProjectSection({
  section,
}: {
  section: {
    type: string;
    text?: string;
    subtitle?: string;
    image?: string;
    imagePosition?: string;
    specs?: { label: string; value: string }[];
  };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15, once: true });
  const hasImage = section.image && section.image.trim().length > 0;

  switch (section.type) {
    case 'hero':
      return (
        <section
          ref={ref}
          className={`px-6 md:px-10 py-16 md:py-24 text-center transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="font-heading italic text-foreground-100 text-2xl md:text-4xl lg:text-5xl leading-relaxed">
              &ldquo;{section.text}&rdquo;
            </blockquote>
          </div>
        </section>
      );

    case 'fullbleed':
      return (
        <section ref={ref} className="w-full">
          {hasImage && (
            <div className="relative w-full overflow-hidden">
              <img
                src={section.image}
                alt=""
                className={`w-full h-auto max-h-[75vh] object-contain object-center transition-all duration-1000 ${
                  isInView ? 'scale-100' : 'scale-105'
                }`}
              />
            </div>
          )}
          {!hasImage && (
            <div className="relative w-full aspect-[16/7] overflow-hidden bg-secondary-100 flex items-center justify-center">
              <span className="text-secondary-500 text-xs tracking-[0.2em] uppercase">
                Görsel yakında eklenecek
              </span>
            </div>
          )}
          {section.text && (
            <div className="px-6 md:px-10 py-12 md:py-20">
              <div className="max-w-3xl mx-auto">
                <p className="text-foreground-300 text-sm md:text-base leading-relaxed">
                  {section.text}
                </p>
              </div>
            </div>
          )}
        </section>
      );

    case 'split':
      return (
        <section
          ref={ref}
          className={`px-6 md:px-10 py-12 md:py-20 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                section.imagePosition === 'right' ? '' : ''
              }`}
            >
              <div className={section.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}>
                {hasImage && (
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={section.image}
                      alt=""
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                {!hasImage && (
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary-100 flex items-center justify-center">
                    <span className="text-secondary-500 text-xs tracking-[0.2em] uppercase">
                      Görsel yakında eklenecek
                    </span>
                  </div>
                )}
              </div>
              <div className={section.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}>
                <p className="text-foreground-300 text-sm md:text-base leading-relaxed">
                  {section.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      );

    case 'quote':
      return (
        <section
          ref={ref}
          className={`px-6 md:px-10 py-16 md:py-24 text-center transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <p className="font-heading italic text-primary-400 text-xl md:text-2xl lg:text-3xl leading-relaxed">
              &ldquo;{section.text}&rdquo;
            </p>
          </div>
        </section>
      );

    case 'specs':
      return (
        <section
          ref={ref}
          className={`px-6 md:px-10 py-12 md:py-20 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-background-200/50 pt-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {section.specs?.map((spec) => (
                  <div key={spec.label}>
                    <p className="text-foreground-600 text-xs tracking-[0.15em] uppercase mb-2">
                      {spec.label}
                    </p>
                    <p className="text-foreground-100 text-sm md:text-base">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    default:
      return null;
  }
}
