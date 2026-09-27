import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { LocalCta } from '../components/common/LocalCta';
import { PageHero } from '../components/common/PageHero';
import { Meta } from '../components/common/Meta';

import { articleData } from '../data/articles';

const eyebrowClasses =
  "inline-flex items-center gap-2 text-rust mb-4 before:content-[''] before:w-3.5 before:h-px before:bg-rust";

export function Blog() {
  return (
    <>
      <Meta
        title="Construction Knowledge | M/s Ramprasad Enterprises"
        description="Helpful construction guidance from M/s Ramprasad Enterprises: TMT bars, cement, sand, aggregates and planning a new house."
      />

      <PageHero
        title="Useful notes for the building process."
        description="Plain-language reading for home builders, contractors and anyone preparing a construction-material enquiry."
        
      />

      <section className="py-[72px]">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
          <div className="grid gap-px bg-border border border-border md:grid-cols-2">
            {articleData.map((article, index) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="bg-paper px-7 py-8 flex flex-col justify-between gap-10 min-h-[220px] transition-colors hover:bg-panel"
              >
                <div>
                  <div className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}>
                    Note {String(index + 1).padStart(2, '0')}
                  </div>

                  <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[1.3rem] my-1.5 mb-2.5">
                    {article.title}
                  </h2>

                  <p className="text-[0.92rem] text-steel leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="flex items-center gap-2 text-[0.85rem] font-semibold text-rust">
                  <span>Read the guide</span>
                  <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocalCta />
    </>
  );
}
