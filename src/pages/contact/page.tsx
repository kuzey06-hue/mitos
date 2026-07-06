import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import SEO from '@/components/base/SEO';

export default function Contact() {
  const { t } = useTranslation('contact');
  useRTL();

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact — Mitos',
    about: {
      '@type': 'Organization',
      name: 'Mitos',
      email: 'studio@mitostr.com',
    },
  };

  return (
    <main className="relative w-full bg-background-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonicalPath="/contact"
        schema={contactSchema}
      />
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
