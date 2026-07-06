import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/feature/LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation('common');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/expertise', label: t('nav.expertise') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/research', label: t('nav.research') },
    { path: '/lab', label: t('nav.lab') },
    { path: '/collections', label: t('nav.collections') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-background-50/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <Link
          to="/"
          className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src="https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/60893c24-a288-4426-b84f-19146b6ab7c8_compressed_mitos-logo.webp"
            alt="Mitos Experience Design"
            className="h-7 md:h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-xs tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 ${
                isActive(link.path)
                  ? 'text-foreground-50'
                  : 'text-foreground-500 hover:text-foreground-200'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-primary-500" />
              )}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1px] bg-foreground-50 transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1px] bg-foreground-50 transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1px] bg-foreground-50 transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-background-50/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 ${
                isActive(link.path)
                  ? 'text-primary-400'
                  : 'text-foreground-500 hover:text-foreground-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
