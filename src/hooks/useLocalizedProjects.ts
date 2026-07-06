import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { Project } from '@/mocks/projects';
import { projectContent } from '@/i18n/content/projectContent';

/**
 * Returns a function that localizes a project's display text (category,
 * tagline, description, section texts, spec labels/values) based on the
 * active language. Any field missing a translation falls back to the
 * English source in the mock data.
 */
export function useLocalizedProjects() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const pack = projectContent[lang];

  return useCallback(
    (p: Project): Project => {
      if (!pack) return p;
      const item = pack.items?.[p.id];
      const category = pack.categories?.[p.category] ?? p.category;
      const sections = p.sections.map((s, i) => {
        if (s.type === 'specs') {
          return {
            ...s,
            specs: s.specs?.map((sp, j) => ({
              label: pack.specLabels?.[sp.label] ?? sp.label,
              value: item?.specs?.[j] ?? sp.value,
            })),
          };
        }
        const txt = item?.sections?.[i];
        return { ...s, text: txt ?? s.text };
      });
      return {
        ...p,
        category,
        tagline: item?.tagline ?? p.tagline,
        description: item?.description ?? p.description,
        sections,
      };
    },
    [pack]
  );
}

/** Localize a single category label (for badges/filters display). */
export function useLocalizeCategory() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const pack = projectContent[lang];
  return useCallback((cat: string) => pack?.categories?.[cat] ?? cat, [pack]);
}
