import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ResearchHero from './components/ResearchHero';
import ArticlesGrid from './components/ArticlesGrid';
import EssaysList from './components/EssaysList';
import MaterialLibrary from './components/MaterialLibrary';
import HeritageStudies from './components/HeritageStudies';
import PublicationsList from './components/PublicationsList';
import SEO from '@/components/base/SEO';

export default function Research() {
  const { t } = useTranslation('research');
  useRTL();

  return (
    <main className="relative w-full bg-background-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonicalPath="/research"
        ogType="article"
      />
      <Navbar />
      <ResearchHero />
      <ArticlesGrid />
      <EssaysList />
      <MaterialLibrary />
      <HeritageStudies />
      <PublicationsList />
      <Footer />
    </main>
  );
}