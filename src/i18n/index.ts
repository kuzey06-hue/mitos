import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages from './local/index';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // No hard-coded `lng` — the LanguageDetector picks from the saved
    // preference (localStorage) → browser language → <html lang>, falling
    // back to Turkish. This lets the chosen language persist across reloads.
    fallbackLng: 'tr',
    supportedLngs: ['en', 'tr', 'de', 'it', 'ar'],
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'expertise', 'projects', 'research', 'lab', 'collections', 'notFound'],
    debug: false,
    resources: messages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'mitos-lang',
    },
  });

export default i18n;
