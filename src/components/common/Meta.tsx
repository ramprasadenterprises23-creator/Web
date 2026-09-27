import { useEffect } from 'react';

interface MetaProps {
  title: string;
  description: string;
  canonical?: string;
}

export function Meta({
  title,
  description,
  canonical,
}: MetaProps) {
  useEffect(() => {
    document.title = title;

    const descriptionTag =
      document.querySelector<HTMLMetaElement>(
        'meta[name="description"]',
      );

    if (descriptionTag) {
      descriptionTag.setAttribute(
        'content',
        description,
      );
    } else {
      const meta = document.createElement('meta');

      meta.name = 'description';
      meta.content = description;

      document.head.appendChild(meta);
    }

    if (canonical) {
      let canonicalTag =
        document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]',
        );

      if (!canonicalTag) {
        canonicalTag =
          document.createElement('link');

        canonicalTag.rel = 'canonical';

        document.head.appendChild(canonicalTag);
      }

      canonicalTag.href = canonical;
    }
  }, [title, description, canonical]);

  return null;
}