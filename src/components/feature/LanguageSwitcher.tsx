import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'tr', label: 'TR', native: 'Türkçe' },
  { code: 'de', label: 'DE', native: 'Deutsch' },
  { code: 'it', label: 'IT', native: 'Italiano' },
  { code: 'ar', label: 'AR', native: 'العربية' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    // Update html dir for RTL
    if (code === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', code);
    }
  };

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1.5 text-foreground-500 text-xs tracking-[0.15em] uppercase hover:text-foreground-200 transition-colors duration-300 cursor-pointer whitespace-nowrap"
        aria-label="Change language"
      >
        <i className="ri-global-line" style={{ width: '14px', height: '14px' }} />
        <span>{currentLang.label}</span>
        <i
          className="ri-arrow-down-s-line text-[10px] transition-transform duration-300 group-hover:rotate-180"
          style={{ width: '10px', height: '10px' }}
        />
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-2 py-2 min-w-[140px] bg-background-100 border border-background-200/70 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`w-full text-left px-4 py-2 text-xs transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center justify-between gap-2 ${
              i18n.language === lang.code
                ? 'text-primary-400 bg-primary-500/10'
                : 'text-foreground-400 hover:text-foreground-100 hover:bg-background-200'
            }`}
          >
            <span>{lang.native}</span>
            <span className="text-foreground-600 text-[10px]">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}