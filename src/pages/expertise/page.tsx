import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ExpertiseHero from './components/ExpertiseHero';
import ExpertiseShowcase from './components/ExpertiseShowcase';
import SEO from '@/components/base/SEO';

export default function Expertise() {
  const { t } = useTranslation('expertise');
  useRTL();

  return (
    <main className="relative w-full bg-background-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonicalPath="/expertise"
      />
      <Navbar />
      <ExpertiseHero />
      <ExpertiseShowcase />
      <Footer />
    </main>
  );
}