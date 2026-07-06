import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type {
  articles,
  essays,
  materials,
  heritageStudies,
  publications,
} from '@/mocks/research';
import { researchContent } from '@/i18n/content/researchContent';

type Article = (typeof articles)[number];
type Essay = (typeof essays)[number];
type Material = (typeof materials)[number];
type Heritage = (typeof heritageStudies)[number];
type Publication = (typeof publications)[number];

/**
 * Returns localizer functions for each research content type. Any field
 * missing a translation for the active language falls back to the English
 * source in src/mocks/research.ts.
 */
export function useLocalizedResearch() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const pack = researchContent[lang];

  return useMemo(() => {
    const merge = <T extends { id: string }>(item: T, group?: Record<string, Partial<T>>): T => {
      const o = group?.[item.id];
      return o ? { ...item, ...o } : item;
    };
    return {
      article: (a: Article) => merge(a, pack?.articles),
      essay: (e: Essay) => merge(e, pack?.essays),
      material: (m: Material) => merge(m, pack?.materials),
      heritage: (h: Heritage) => merge(h, pack?.heritage),
      publication: (p: Publication) => merge(p, pack?.publications),
    };
  }, [pack]);
}
