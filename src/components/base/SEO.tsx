import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article' | 'profile' | 'product';
  ogImage?: string;
  schema?: Record<string, unknown>;
}

const BASE_URL = 'https://mitostr.com';

function upsertMeta(nameOrProperty: string, content: string, attribute: 'name' | 'property' = 'name') {
  const selector = attribute === 'property'
    ? `meta[property="${nameOrProperty}"]`
    : `meta[name="${nameOrProperty}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, nameOrProperty);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function removeSchemaScripts() {
  document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
}

function injectSchema(schema: Record<string, unknown>) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogImage,
  schema,
}: SEOProps) {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const resolvedTitle = title;
    const resolvedDesc = description;
    const resolvedOgTitle = ogTitle || resolvedTitle;
    const resolvedOgDesc = ogDescription || resolvedDesc;
    const resolvedUrl = canonicalPath
      ? `${BASE_URL}${canonicalPath}`
      : `${BASE_URL}${location.pathname}`;

    // Update html lang
    const currentLang = i18n.language || 'en';
    document.documentElement.setAttribute('lang', currentLang);

    document.title = resolvedTitle;

    upsertMeta('description', resolvedDesc);
    if (keywords) upsertMeta('keywords', keywords);

    upsertLink('canonical', resolvedUrl);

    upsertMeta('og:title', resolvedOgTitle, 'property');
    upsertMeta('og:description', resolvedOgDesc, 'property');
    upsertMeta('og:type', ogType, 'property');
    upsertMeta('og:url', resolvedUrl, 'property');
    if (ogImage) upsertMeta('og:image', ogImage, 'property');
    else upsertMeta('og:image', `${BASE_URL}/og-default.jpg`, 'property');

    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', resolvedOgTitle);
    upsertMeta('twitter:description', resolvedOgDesc);

    removeSchemaScripts();
    if (schema) injectSchema(schema);
  }, [title, description, keywords, canonicalPath, ogTitle, ogDescription, ogType, ogImage, schema, location.pathname, i18n.language]);

  return null;
}