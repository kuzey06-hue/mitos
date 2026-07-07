import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PhilosophyHero from './components/PhilosophyHero';
import Manifesto from './components/Manifesto';
import Approach from './components/Approach';
import Process from './components/Process';
import Founder from './components/Founder';
import SEO from '@/components/base/SEO';

export default function About() {
  const { t } = useTranslation('about');
  useRTL();

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Our Philosophy — Mitos',
    description: "Mitos'un tasarım felsefesi, manifestosu, yaklaşımı ve kurucusu Hakan Aktaş'ın vizyonu.",
    about: {
      '@type': 'Organization',
      name: 'Mitos',
      founder: {
        '@type': 'Person',
        name: 'Hakan Aktaş',
        jobTitle: 'Kurucu & Kreatif Direktör',
      },
    },
  };

  return (
    <main className="relative w-full bg-background-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonicalPath="/about"
        ogType="profile"
        schema={aboutSchema}
      />
      <Navbar />
      <PhilosophyHero />
      <Manifesto />
      <Approach />
      <Process />
      <Founder />
      <Footer />
    </main>
  );
}