import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import PhilosophyTeaser from './components/PhilosophyTeaser';
import SEO from '@/components/base/SEO';

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mitos',
  url: 'https://mitostr.com',
  description: 'Mitos, müze, sergi, iç mekan ve kültürel miras projelerinde uzmanlaşmış bir deneyim tasarımı stüdyosudur.',
  founder: {
    '@type': 'Person',
    name: 'Eren Mitoğlu',
    jobTitle: 'Kurucu & Kreatif Direktör',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'İstanbul',
    addressCountry: 'TR',
  },
};

export default function Home() {
  const { t } = useTranslation('home');
  useRTL();

  return (
    <main className="relative w-full bg-background-50">
      <SEO
        title={`Mitos — ${t('hero.studioLabel')} | Experience Design`}
        description={t('philosophy.paragraph')}
        keywords="experience design, museum design, exhibition design, interior design, Mitos"
        canonicalPath="/"
        schema={homeSchema}
      />
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <PhilosophyTeaser />
      <Footer />
    </main>
  );
}