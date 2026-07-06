import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import LabHero from './components/LabHero';
import LabShowcase from './components/LabShowcase';
import SEO from '@/components/base/SEO';

export default function Lab() {
  const { t } = useTranslation('lab');
  useRTL();

  return (
    <main className="relative w-full bg-background-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonicalPath="/lab"
      />
      <Navbar />
      <LabHero />
      <LabShowcase />
      <Footer />
    </main>
  );
}