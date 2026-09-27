import { Link, useParams } from 'react-router-dom';

import { JsonLd } from '../components/common/JsonLd';
import { LocalCta } from '../components/common/LocalCta';
import { Meta } from '../components/common/Meta';
import { articleData } from '../data/articles';

export function Article() {
  const { slug = '' } = useParams();

  const article = articleData.find(
    (item) => item.slug === slug,
  );

  if (!article) {
    return (
      <section className="py-12">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
          <h1 className="font-display font-extrabold leading-[1.06] tracking-[-0.02em] text-ink text-[clamp(2.5rem,4.6vw,3.9rem)]">
            Article not found
          </h1>

          <Link to="/blog" className="text-rust font-semibold">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const canonicalUrl =
    `https://www.ramprasadenterprises.com/blog/${article.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,

    author: {
      '@type': 'Organization',
      name: 'Ramprasad Enterprises',
    },

    publisher: {
      '@type': 'Organization',
      name: 'Ramprasad Enterprises',
    },

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  return (
    <>
      <Meta
        title={`${article.title} | Ramprasad Enterprises`}
        description={article.excerpt}
        canonical={canonicalUrl}
      />

      <JsonLd data={jsonLd} />

      <article className="py-16">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
          <header className="max-w-[70ch] mb-11 pb-9 border-b border-border">
            <p className="font-mono text-[0.78rem] text-rust mb-3.5">
              Construction Guide
            </p>

            <h1 className="font-display font-extrabold leading-[1.06] tracking-[-0.02em] text-ink text-[clamp(2.5rem,4.6vw,3.9rem)] mb-4">
              {article.title}
            </h1>

            <p className="text-[1.05rem] text-steel leading-relaxed max-w-[62ch]">
              {article.excerpt}
            </p>
          </header>

          <div className="max-w-[68ch] flex flex-col gap-5">
            <p className="text-steel leading-relaxed max-w-[62ch]">
              This guide provides a practical introduction to{' '}
              {article.title.toLowerCase()}.
            </p>

            <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[1.4rem] mt-3">
              What you should know
            </h2>

            <p className="text-steel leading-relaxed max-w-[62ch]">
              Construction material requirements can vary
              depending on the project, structural design,
              site conditions and recommendations from your
              engineer or contractor.
            </p>

            <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[1.4rem] mt-3">
              Talk to your site team
            </h2>

            <p className="text-steel leading-relaxed max-w-[62ch]">
              Before purchasing materials, confirm the required
              specification, quantity and availability for your
              project.
            </p>
          </div>
        </div>
      </article>

      <LocalCta />
    </>
  );
}
