import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useRTL from '@/hooks/useRTL';
import SEO from '@/components/base/SEO';

export default function NotFound() {
  const { t } = useTranslation('notFound');
  useRTL();
  const location = useLocation();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-6 bg-background-50">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        canonicalPath={location.pathname}
      />
      <span className="font-heading text-[6rem] md:text-[14rem] leading-none text-foreground-900/10 select-none pointer-events-none">
        404
      </span>
      <div className="-mt-8 relative z-10">
        <p className="text-foreground-400 font-heading text-xl md:text-2xl italic">
          {t('title')}
        </p>
        <p className="mt-2 text-foreground-600 text-sm font-mono">{location.pathname}</p>
        <Link
          to="/"
          className="inline-block mt-8 text-xs tracking-[0.2em] uppercase text-foreground-300 hover:text-primary-400 transition-colors duration-300 border-b border-foreground-700 hover:border-primary-400 pb-1 whitespace-nowrap"
        >
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}