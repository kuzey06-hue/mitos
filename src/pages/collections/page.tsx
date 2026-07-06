import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import CollectionsHero from './components/CollectionsHero';
import CollectionsShowcase from './components/CollectionsShowcase';
import SEO from '@/components/base/SEO';

export default function Collections() {
  const { t } = useTranslation('collections');
  useRTL();

  return (
    <main className="relative w-full bg-background-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonicalPath="/collections"
      />
      <Navbar />
      <CollectionsHero />
      <CollectionsShowcase />
      <Footer />
    </main>
  );
}