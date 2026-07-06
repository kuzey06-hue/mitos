import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background-50 border-t border-background-200/50">
      <div className="px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src="https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/60893c24-a288-4426-b84f-19146b6ab7c8_compressed_mitos-logo.webp"
            alt="Mitos Experience Design"
            className="h-5 w-auto"
          />
        </Link>

        <p className="text-foreground-600 text-xs tracking-wider whitespace-nowrap">
          &copy; {year} {t('footer.copyright')}
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-foreground-500 text-xs tracking-wider uppercase whitespace-nowrap hover:text-foreground-200 transition-colors duration-300"
          >
            {t('footer.instagram')}
          </a>
          <a
            href="#"
            className="text-foreground-500 text-xs tracking-wider uppercase whitespace-nowrap hover:text-foreground-200 transition-colors duration-300"
          >
            {t('footer.linkedin')}
          </a>
        </div>
      </div>
    </footer>
  );
}