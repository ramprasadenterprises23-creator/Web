import { Link } from 'react-router-dom';
import {
  ArrowRight,
  HardHat,
  ShieldCheck,
  ShieldLock,
  Truck,
} from 'lucide-react';

import { ActionLink } from '../components/common/ActionLink';
import { Faq } from '../components/common/Faq';
import { LocalCta } from '../components/common/LocalCta';
import { Meta } from '../components/common/Meta';
import { JsonLd } from '../components/common/JsonLd';

import { productDetails } from '../data/productDetails';
import { brands } from '../data/brands';

import rod from '../assets/images__2_-removebg-preview.png';
import cement from '../assets/s1-500x500-removebg-preview.png';
import aggregates from '../assets/dustmaster_aggregate_industry-removebg-preview.png';
import essentials from '../assets/images-removebg-preview (2).png';
import rod2 from '../assets/Untitled design.png';

const eyebrowClasses =
  "inline-flex items-center gap-2 text-rust mb-4 before:content-[''] before:w-3.5 before:h-px before:bg-rust";

const buttonBase =
  'inline-flex items-center justify-center gap-2.5 text-[0.92rem] font-semibold px-6 py-3.5 rounded-sm border border-transparent transition-[background-color,transform,box-shadow] active:translate-y-0 hover:-translate-y-px';

const buttonPrimary = `${buttonBase} bg-rust text-paper shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_6px_16px_-8px_rgba(181,69,29,0.55)] hover:bg-rust-dark`;

const buttonDark = `${buttonBase} bg-ink text-paper shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_6px_16px_-8px_rgba(28,27,24,0.5)] hover:bg-charcoal-2`;

const buttonOutline = `${buttonBase} bg-transparent text-ink border-border shadow-none hover:border-ink hover:-translate-y-0`;

export function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'M/s Ramprasad Enterprises',
    description:
      'Authorized Tata Tiscon dealer and construction-material supplier.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dosinga, Dhamara',
      addressRegion: 'Odisha',
      addressCountry: 'IN',
    },
    url:
      typeof window !== 'undefined'
        ? window.location.origin
        : '',
  };

  return (
    <>
      {/* Meta is used for SEO purposes, providing search engines with information
          about the page. JsonLd is used to include structured data in JSON-LD
          format, which helps search engines understand the content and context
          of your page better. */}

      <Meta
        title="M/s Ramprasad Enterprises | Tata Tiscon Dealer & Construction Materials in Dosinga"
        description="M/s Ramprasad Enterprises is an authorized Tata Tiscon dealer and construction-material supplier in Dosinga, Dhamara, Bhadrak."
      />

      <JsonLd data={schema} />

      {/* Hero */}
      <section className="relative py-16 pb-[92px] border-b border-border overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] before:bg-[length:44px_44px] before:[mask-image:radial-gradient(ellipse_70%_60%_at_78%_30%,black_0%,transparent_72%)] before:opacity-70 before:pointer-events-none">
        <div className="relative z-[1] w-full max-w-[1180px] mx-auto px-6 md:px-12 grid gap-14 items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <div
              className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}
            >
              01 / Build with Trust
            </div>

            <h1 className="mt-1 mb-[22px] font-display font-extrabold leading-[1.06] tracking-[-0.02em] text-ink text-[clamp(2.5rem,4.6vw,3.9rem)]">
              Materials for{' '}
              <em className="not-italic font-extrabold">
                what comes next.
              </em>
            </h1>

            <p className="text-[1.05rem] mb-8 text-steel leading-relaxed max-w-[62ch]">
              Complete construction materials for your building needs —
              from M/s Ramprasad Enterprises, an authorized Tata Tiscon
              dealer in Dosinga, Dhamara, Bhadrak, Odisha.
            </p>

            <div className="flex flex-wrap gap-3 mb-[30px]">
              <ActionLink kind="call" className={buttonPrimary}>
                Call now
              </ActionLink>

              <ActionLink
                kind="whatsapp"
                className={buttonDark}
              >
                WhatsApp enquiry
              </ActionLink>

              <ActionLink
                kind="enquiry"
                className={buttonOutline}
              >
                Get directions
              </ActionLink>
            </div>

            <div className="flex items-start gap-2.5 pt-[22px] border-t border-border text-[0.88rem] text-steel max-w-[44ch]">
              <ShieldCheck
                size={17}
                className="text-rust shrink-0 mt-0.5"
              />

              <span>
                <strong className="text-ink">One source.</strong> TMT,
                cement, aggregates and construction essentials.
              </span>
            </div>
          </div>

          <div
            className="relative"
            aria-label="Illustration of construction materials"
          >
            <div className="relative bg-charcoal rounded-md p-7 text-paper shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_30px_60px_-25px_rgba(28,27,24,0.5)] before:content-[''] before:absolute before:w-5 before:h-5 before:border-2 before:border-rust before:top-3 before:left-3 before:border-r-0 before:border-b-0 after:content-[''] after:absolute after:w-5 after:h-5 after:border-2 after:border-rust after:bottom-3 after:right-3 after:border-l-0 after:border-t-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZGyGwOQJBRCYmIN7lR3YuWgOLR19bef07eipgNkf-cQVa8NxSSrUEUk&s=10"
                alt="Illustration showing construction materials"
                className="w-full h-auto object-cover rounded"
                loading="lazy"
              />

              <span className="relative z-[1] flex items-center gap-2 font-mono text-[0.78rem] text-amber mb-[22px] mt-[22px] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber before:shadow-[0_0_0_3px_rgba(214,163,57,0.25)]">
                A considered supply
              </span>

              <div className="grid grid-cols-2 gap-px bg-border-dark border border-border-dark">
                <div className="group bg-charcoal px-[18px] py-[26px] font-display font-bold text-[1.05rem] leading-[1.25] min-h-[104px] flex items-end transition-colors hover:bg-rust hover:text-paper">
                  <div className="flex justify-between items-end h-full w-full">
                    <span>
                      Steel
                      <br />
                      & rebar
                    </span>

                    <img
                      src={rod}
                      alt="Steel & Rebar"
                      className="w-[55px] h-[55px] object-contain pointer-events-none transition-transform group-hover:scale-[1.08]"
                    />
                  </div>
                </div>

                <div className="group bg-charcoal px-[18px] py-[26px] font-display font-bold text-[1.05rem] leading-[1.25] min-h-[104px] flex items-end transition-colors hover:bg-rust hover:text-paper">
                  <div className="flex justify-between items-end h-full w-full">
                    <span>Cement</span>

                    <img
                      src={cement}
                      alt="Cement"
                      className="w-[55px] h-[55px] object-contain pointer-events-none transition-transform group-hover:scale-[1.08]"
                    />
                  </div>
                </div>

                <div className="group bg-charcoal px-[18px] py-[26px] font-display font-bold text-[1.05rem] leading-[1.25] min-h-[104px] flex items-end transition-colors hover:bg-rust hover:text-paper">
                  <div className="flex justify-between items-end h-full w-full">
                    <span>Aggregates</span>

                    <img
                      src={aggregates}
                      alt="Aggregates"
                      className="w-[55px] h-[55px] object-contain pointer-events-none transition-transform group-hover:scale-[1.08]"
                    />
                  </div>
                </div>

                <div className="group bg-charcoal px-[18px] py-[26px] font-display font-bold text-[1.05rem] leading-[1.25] min-h-[104px] flex items-end transition-colors hover:bg-rust hover:text-paper">
                  <div className="flex justify-between items-end h-full w-full">
                    <span>Essentials</span>

                    <img
                      src={essentials}
                      alt="Essentials"
                      className="w-[55px] h-[55px] object-contain pointer-events-none transition-transform group-hover:scale-[1.08]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 font-mono text-[0.76rem] text-steel text-right">
              Dosinga / Bhadrak / Odisha
            </div>
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="py-12">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-10 pb-7 border-b border-border">
            <div>
              <div
                className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}
              >
                02 / The difference
              </div>

              <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[clamp(1.8rem,2.9vw,2.55rem)]">
                Clear materials.
                <br />
                Straight answers.
              </h2>
            </div>

            <p className="max-w-[34ch] pt-1 text-steel leading-relaxed">
              For a house, a site or a larger order, start with a
              simple conversation about what you need and what is
              currently available.
            </p>
          </div>

          <div className="grid bg-border border border-bs-accent-foreground xl:grid-cols-[1.3fr_1fr_1fr_1fr] rounded-2xl">
            <div className="relative bg-paper bg-cover p-7 flex flex-col rounded-2xl justify-between transition-shadow hover:shadow-[0_24px_48px_-28px_rgba(28,27,24,0.28)] hover:z-1 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_10%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.15)_100%),url('https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTHDm9LbEb_NHnuk9PDV8EtvBTRn6KvcDr8Xaa70FxMlJmSW4_-p4u5IGsQd47At9kwOjPk1T4cNDPNZbkR7_7u13khZDNYyg')]">
              <div className="relative z-1 rounded-2xl">
                <div className="relative z-1 w-8 h-8 flex items-center justify-center rounded-full border border-border-dark text-amber ml-26 mb-6">
                  <ShieldCheck size={28} />
                </div>

                <h3 className="mt-8 mb-3.5 ">
                  Authorized Tata Tiscon Dealer
                </h3>

                <p className="relative z-1 text-sm text-paper  rounded-md px-0">
                  Ask about Tata Tiscon TMT bars and binding wire
                  alongside your other construction requirements.
                </p>
              </div>

              <Link
                to="/products/tata-tiscon-tmt"
                className={`${buttonDark} relative z-[1] self-start mt-7`}
              >
                Explore Tata Tiscon
                <ArrowRight size={15} />
              </Link>
            </div>

            {[
              [
                'Multiple TMT & Steel Options',
                HardHat,
                rod2,
              ],
              [
                'Multiple Cement Brands',
                ShieldLock,
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_LFpb71FQ8UZMcGxSjHQbYnFhOss74B_9e3Vtutzryt4Q1PkCpyh8FzpktqZLFCPVfuGeZmf4W_bXew9SEAVs42d_bEtSxz_SMQkuVj0wJuLxCiqnVweZ',
              ],
              [
                'Construction Aggregates',
                Truck,
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_LFpb71FQ8UZMcGxSjHQbYnFhOss74B_9e3Vtutzryt4Q1PkCpyh8FzpktqZLFCPVfuGeZmf4W_bXew9SEAVs42d_bEtSxz_SMQkuVj0wJuLxCiqnVweZ',
              ],
            ].map(([title, Icon, imageSrc], index) => {
              const IconComponent = Icon as typeof HardHat;

              return (
                <div
                  className="bg-paper p-7 flex flex-col justify-between relative transition-shadow hover:shadow-[0_24px_48px_-28px_rgba(28,27,24,0.28)] hover:z-[1]"
                  key={index}
                >
                  <div className="mb-5 h-40 w-full overflow-hidden rounded-lg">
                    <img
                      src={imageSrc as string}
                      alt={title as string}
                      className="w-90% h-90% object-contain"
                    />
                  </div>

                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border-dark text-rust mb-5">
                    <IconComponent size={17} />
                  </div>

                  <h3>{title as string}</h3>

                  <p>
                    Discuss your current site requirement and
                    availability.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative bg-charcoal py-20 border-t border-border-dark before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:opacity-55 before:bg-[repeating-linear-gradient(90deg,var(--color-rust)_0_2px,transparent_2px_16px)]">
        <div className="relative w-full max-w-[1180px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-10 pb-7 border-b border-border-dark">
            <div>
              <div className="font-mono text-[0.78rem] text-amber">
                03 / Materials catalogue
              </div>

              <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-paper text-[clamp(1.8rem,2.9vw,2.55rem)]">
                Everything that
                <br />
                holds a build together.
              </h2>
            </div>

            <p className="max-w-[34ch] pt-1 text-slate-mist">
              Explore the core categories supplied by M/s Ramprasad
              Enterprises.
            </p>
          </div>

          <div className="border-t border-border-dark">
            {productDetails.map(
              (product: {
                slug: string;
                icon: string;
                title: string;
                short: string;
              }) => (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  className="group flex items-center gap-6 py-6 px-1 border-b border-border-dark transition-[padding-left,background-color] hover:bg-charcoal-2 hover:pl-4"
                >
                  <span className="font-mono text-amber shrink-0 w-7">
                    {product.icon}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-paper text-[1.1rem] mb-1.5">
                      {product.title}
                    </h3>

                    <p className="text-slate-mist text-[0.9rem]">
                      {product.short}
                    </p>
                  </div>

                  <span className="text-paper opacity-40 transition-[opacity,transform] group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-amber">
                    <ArrowRight size={15} />
                  </span>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-[72px]">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-10 pb-7 border-b border-border">
            <div>
              <div
                className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}
              >
                04 / Brands & availability
              </div>

              <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[clamp(1.8rem,2.9vw,2.55rem)]">
                Known names,
                <br />
                local conversation.
              </h2>
            </div>

            <p className="max-w-[34ch] pt-1 text-steel leading-relaxed">
              Brand availability can change. Tell us what your
              project needs and ask for the current options.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {brands.map((brand: string, index: number) => (
              <div
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-full text-[0.88rem] text-ink bg-paper"
                key={brand}
              >
                <strong className="font-mono text-[0.72rem] text-rust font-medium">
                  {String(index + 1).padStart(2, '0')}
                </strong>{' '}
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocalCta />

      <Faq />
    </>
  );
}
