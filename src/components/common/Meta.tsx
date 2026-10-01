import { useEffect } from 'react';

interface MetaProps {
  title: string;
  description: string;
  /** Defaults to the current URL without query string / hash. */
  canonical?: string;
  /** Absolute or root-relative URL for social previews. */
  image?: string;
  /** Use on 404 and other pages that must not be indexed. */
  noindex?: boolean;
}

function setTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key: 'name' | 'property', name: string) => () => {
  const el = document.createElement('meta');
  el.setAttribute(key, name);
  return el;
};

export function Meta({ title, description, canonical, image, noindex }: MetaProps) {
  useEffect(() => {
    const url =
      canonical ?? `${window.location.origin}${window.location.pathname}`;
    const img = image
      ? new URL(image, window.location.origin).toString()
      : undefined;

    document.title = title;

    setTag('meta[name="description"]', meta('name', 'description'), 'content', description);
    setTag('meta[name="robots"]', meta('name', 'robots'), 'content', noindex ? 'noindex, nofollow' : 'index, follow');

    setTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url);

    setTag('meta[property="og:title"]', meta('property', 'og:title'), 'content', title);
    setTag('meta[property="og:description"]', meta('property', 'og:description'), 'content', description);
    setTag('meta[property="og:url"]', meta('property', 'og:url'), 'content', url);
    setTag('meta[property="og:type"]', meta('property', 'og:type'), 'content', 'website');
    setTag('meta[property="og:site_name"]', meta('property', 'og:site_name'), 'content', 'M/s Ramprasad Enterprises');
    setTag('meta[property="og:locale"]', meta('property', 'og:locale'), 'content', 'en_IN');

    setTag('meta[name="twitter:card"]', meta('name', 'twitter:card'), 'content', img ? 'summary_large_image' : 'summary');
    setTag('meta[name="twitter:title"]', meta('name', 'twitter:title'), 'content', title);
    setTag('meta[name="twitter:description"]', meta('name', 'twitter:description'), 'content', description);

    if (img) {
      setTag('meta[property="og:image"]', meta('property', 'og:image'), 'content', img);
      setTag('meta[name="twitter:image"]', meta('name', 'twitter:image'), 'content', img);
    }
  }, [title, description, canonical, image, noindex]);

  return null;
}
