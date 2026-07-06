import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation('home');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background-50">
      {/* Deep radial gradient — richer than before */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(18,18,18,1)_0%,_rgba(6,6,6,1)_100%)]" />

      {/* Subtle geometric grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(0deg, currentColor 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient horizontal light lines */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/15 to-transparent" />
      </div>

      {/* Floating accent orbs — very subtle depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500/5 blur-[100px] transition-all duration-[2000ms] ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-500/3 blur-[120px] transition-all duration-[2000ms] delay-500 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-10">
        {/* Studio label */}
        <div
          className={`text-center transition-all duration-1000 delay-100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <img
            src="https://storage.readdy-site.link/project_files/abe43ce3-969e-47f2-8e3d-62258ef0febd/60893c24-a288-4426-b84f-19146b6ab7c8_compressed_mitos-logo.webp"
            alt="Mitos Experience Design"
            className="h-6 md:h-8 w-auto mx-auto mb-6 md:mb-10 opacity-70"
          />
        </div>

        {/* Headline */}
        <div
          className={`text-center transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-heading italic text-foreground-50 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight max-w-5xl">
            {t('hero.line1')}
            <br />
            <span className="text-primary-500">{t('hero.highlight')}</span>
            <br />
            {t('hero.line2')}
          </h1>
        </div>

        {/* Horizontal divider */}
        <div
          className={`mt-8 md:mt-12 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 w-16' : 'opacity-0 w-0'
          }`}
        >
          <div className="h-[1px] bg-primary-500 mx-auto" />
        </div>

        {/* Discipline tags */}
        <div
          className={`mt-8 md:mt-10 text-center transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-foreground-400 text-[10px] md:text-xs tracking-[0.2em] uppercase">
            {t('hero.disciplines')}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-50' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-foreground-600 text-[10px] tracking-[0.3em] uppercase">
            {t('hero.scroll')}
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-foreground-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}