import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function useRTL() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRTL = i18n.language === 'ar';

    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', i18n.language);

    const handleLanguageChanged = (lng: string) => {
      document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);
}