import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ProjectsHero from './components/ProjectsHero';
import ProjectFilters from './components/ProjectFilters';
import ProjectsGrid from './components/ProjectsGrid';
import { projects } from '@/mocks/projects';
import SEO from '@/components/base/SEO';

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Projects — Mitos',
  description: "Mitos'un seçilmiş proje portfolyosu. Müze, sergi, iç mekan ve kültürel miras projeleri.",
  hasPart: projects.map((p) => ({
    '@type': 'CreativeWork',
    name: p.title,
    description: p.tagline,
    url: `https://mitostr.com/projects/${p.id}`,
  })),
};

export default function Projects() {
  const { t } = useTranslation('projects');
  useRTL();
  const [activeFilter, setActiveFilter] = useState(t('filters.all'));

  const filteredProjects =
    activeFilter === t('filters.all')
      ? projects
      : projects.filter((p) => {
          const filterMap: Record<string, string> = {
            [t('filters.museum')]: 'Museum',
            [t('filters.exhibition')]: 'Exhibition',
            [t('filters.interior')]: 'Interior',
            [t('filters.cultural')]: 'Cultural',
            [t('filters.competition')]: 'Competition',
            [t('filters.research')]: 'Research',
            [t('filters.international')]: 'International',
          };
          return p.category === (filterMap[activeFilter] || activeFilter);
        });

  return (
    <main className="relative w-full bg-background-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonicalPath="/projects"
        schema={projectsSchema}
      />
      <Navbar />
      <ProjectsHero />
      <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ProjectsGrid projects={filteredProjects} />
      <Footer />
    </main>
  );
}