import { Link } from 'react-router-dom';
import {
  ArrowRight,
  HardHat,
  Layers,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from 'lucide-react';

import { ActionLink } from '../components/common/ActionLink';
import { Faq } from '../components/common/Faq';
import { LocalCta } from '../components/common/LocalCta';
import { Meta } from '../components/common/Meta';
import { JsonLd } from '../components/common/JsonLd';
import { Aurora } from '../components/motion/Aurora';
import { GlowCard } from '../components/motion/GlowCard';
import { Marquee } from '../components/motion/Marquee';
import { Process } from '../components/sections/Process';
import { TrustStrip } from '../components/sections/TrustStrip';

import { CoverIntro } from '../components/layout/CoverIntro';
import logo from '../assets/ChatGPT_Image_Jul_3__2026__08_23_18_PM-removebg-preview.png';
import logoDark from '../assets/Ramprasad Enterprises Dark Mode Logo.png';
import coverPhoto from '../assets/e1902c4e-7c55-4934-9e22-3cf02bdb61e4.png';


import { ImageSlider } from '..//components/common/ImageSlider';

import tiscon from '../assets/tata-tiscon.webp';
import photo2 from '../assets/your-second-photo.webp';
import photo3 from '../assets/your-third-photo.webp';

const heroSlides = [
  { src: tiscon, alt: 'Tata Tiscon TMT steel bars' },
  { src: photo2, alt: 'Describe photo 2' },
  { src: photo3, alt: 'Describe photo 3' },
];


import { productDetails } from '../data/productDetails';
import {
  ADDRESS,
  BUSINESS_NAME,
  GEO,
  MAPS_URL,
  PHONE_E164,
} from '../lib/contact';
import { brands } from '../data/brands';

import rod from '../assets/images__2_-removebg-preview.webp';
import cement from '../assets/s1-500x500-removebg-preview.webp';
import aggregates from '../assets/dustmaster_aggregate_industry-removebg-preview.webp';
import essentials from '../assets/images-removebg-preview (2).webp';
import rod2 from '../assets/Untitled design.webp';

const eyebrowClasses =
  "inline-flex items-center gap-2 text-rust mb-4 before:content-[''] before:w-3.5 before:h-px before:bg-rust";

const buttonBase =
  'inline-flex items-center justify-center gap-2.5 text-[0.92rem] font-semibold px-6 py-3.5 rounded-sm border border-transparent transition-[background-color,transform,box-shadow] active:translate-y-0 hover:-translate-y-px';

const buttonPrimary = `${buttonBase} bg-rust text-primary-foreground shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_6px_16px_-8px_rgba(181,69,29,0.55)] hover:bg-rust-dark btn-shine`;

const buttonDark = `${buttonBase} bg-ink text-paper shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_6px_16px_-8px_rgba(0,0,0,0.5)] hover:bg-charcoal-2 dark:bg-charcoal-2 dark:text-cream dark:border-border-dark dark:hover:border-amber dark:hover:bg-charcoal`;

const buttonOutline = `${buttonBase} bg-transparent text-ink border-border shadow-none hover:border-ink hover:-translate-y-0`;

type DifferenceCard = {
  index: string;
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
  to: string;
};

const differenceCards: DifferenceCard[] = [
  {
    index: '01',
    title: 'Multiple TMT & Steel Options',
    text: 'Compare bar sizes and grades for your slab, column or foundation work.',
    icon: HardHat,
    image: rod2,
    to: '/products/tmt-steel',
  },
  {
    index: '02',
    title: 'Multiple Cement Brands',
    text: 'Ask for the brands currently in stock and pick what suits your build.',
    icon: Layers,
    image: cement,
    to: '/products/cement',
  },
  {
    index: '03',
    title: 'Construction Aggregates',
    text: 'Sand, stone chips and aggregates, planned around your delivery schedule.',
    icon: Truck,
    image: aggregates,
    to: '/products/stone-chips-aggregates',
  },
];

export function Home() {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HardwareStore',
    '@id': `${origin}/#business`,
    name: BUSINESS_NAME,
    description:
      'Authorized Tata Tiscon dealer and construction-material supplier: TMT steel, cement, sand, aggregates, bricks and more.',
    url: origin,
    telephone: PHONE_E164,
    image: `${origin}${new URL(coverPhoto, 'http://x').pathname}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: 'Dhamara',
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    hasMap: MAPS_URL,
    areaServed: ['Dosinga', 'Dhamara', 'Bhadrak'],
    // TODO: add openingHoursSpecification once the real timings are confirmed
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

      {/* Blue landing screen (first view). Everything below slides up over it.
          offset must equal the header height (h-[76px] in Header.tsx). */}
      <CoverIntro photo={coverPhoto} logo={logo} logoDark={logoDark} offset={76}>
        {/* Hero */}
        <section className="relative py-16 pb-[92px] border-b border-border overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] before:bg-[length:44px_44px] before:[mask-image:radial-gradient(ellipse_70%_60%_at_78%_30%,black_0%,transparent_72%)] before:opacity-70 before:pointer-events-none">
          <Aurora />
          <div className="relative z-[1] w-full max-w-[1180px] mx-auto px-6 md:px-12 grid gap-14 items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div data-reveal-group>
              <div
                className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}
              >
                01 / Build with Trust
              </div>

              {/* h2 (not h1): the cover screen already holds the page's h1 */}
              <h2 className="mt-1 mb-[22px] font-display font-extrabold leading-[1.06] tracking-[-0.02em] text-ink text-[clamp(2.5rem,4.6vw,3.9rem)]">
                Materials for{' '}
                <em className="not-italic font-extrabold text-shimmer">
                  what comes next.
                </em>
              </h2>

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
                  kind="directions"
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
              data-reveal="scale"
              data-reveal-delay="180"
              className="relative"
              aria-label="Illustration of construction materials"
            >

              


              <div className="relative bg-charcoal rounded-md p-7 text-cream shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_30px_60px_-25px_rgba(0,0,0,0.5)] before:content-[''] before:absolute before:w-5 before:h-5 before:border-2 before:border-rust before:top-3 before:left-3 before:border-r-0 before:border-b-0 after:content-[''] after:absolute after:w-5 after:h-5 after:border-2 after:border-rust after:bottom-3 after:right-3 after:border-l-0 after:border-t-0">
                <ImageSlider slides={heroSlides} />

                <span className="relative z-[1] flex items-center gap-2 font-mono text-[0.78rem] text-amber mb-[22px] mt-[22px] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber before:shadow-[0_0_0_3px_rgba(214,163,57,0.25)]">
                  A considered supply
                </span>

                <div className="grid grid-cols-2 gap-px bg-border-dark border border-border-dark">
                  <div className="group bg-charcoal px-[18px] py-[26px] font-display font-bold text-[1.05rem] leading-[1.25] min-h-[104px] flex items-end transition-colors hover:bg-rust hover:text-cream">
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

                  <div className="group bg-charcoal px-[18px] py-[26px] font-display font-bold text-[1.05rem] leading-[1.25] min-h-[104px] flex items-end transition-colors hover:bg-rust hover:text-cream">
                    <div className="flex justify-between items-end h-full w-full">
                      <span>Cement</span>

                      <img
                        src={cement}
                        alt="Cement"
                        className="w-[55px] h-[55px] object-contain pointer-events-none transition-transform group-hover:scale-[1.08]"
                      />
                    </div>
                  </div>

                  <div className="group bg-charcoal px-[18px] py-[26px] font-display font-bold text-[1.05rem] leading-[1.25] min-h-[104px] flex items-end transition-colors hover:bg-rust hover:text-cream">
                    <div className="flex justify-between items-end h-full w-full">
                      <span>Aggregates</span>

                      <img
                        src={aggregates}
                        alt="Aggregates"
                        className="w-[55px] h-[55px] object-contain pointer-events-none transition-transform group-hover:scale-[1.08]"
                      />
                    </div>
                  </div>

                  <div className="group bg-charcoal px-[18px] py-[26px] font-display font-bold text-[1.05rem] leading-[1.25] min-h-[104px] flex items-end transition-colors hover:bg-rust hover:text-cream">
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

        <TrustStrip />

        {/* Difference */}
        <section className="py-12">
          <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
            <div data-reveal className="flex flex-wrap justify-between items-end gap-6 mb-10 pb-7 border-b border-border">
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

            <div data-reveal-group className="grid gap-5 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
              {/* Featured card */}
              <div className="relative overflow-hidden rounded-xl bg-charcoal text-cream p-8 flex flex-col justify-between min-h-[460px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]">
                {/* decorative rebar, kept subtle so text stays readable */}
                <img
                  src={rod}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -bottom-6 w-[85%] opacity-[0.16] -rotate-12 select-none"
                />
                <div className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(90deg,var(--color-rust)_0_2px,transparent_2px_14px)] opacity-70" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border-dark px-3 py-1.5 font-mono text-[0.72rem] text-amber">
                    <ShieldCheck size={14} />
                    Authorized dealer
                  </span>

                  <h3 className="mt-6 mb-4 font-display font-bold text-[1.7rem] leading-tight tracking-[-0.01em] text-cream">
                    Tata Tiscon,
                    <br />
                    straight from a
                    <br />
                    trusted dealer.
                  </h3>

                  <p className="text-[0.92rem] leading-relaxed text-slate-mist max-w-[32ch]">
                    Ask about Tata Tiscon TMT bars and binding wire
                    alongside your other construction requirements.
                  </p>

                  <ul className="mt-6 space-y-2 text-[0.88rem] text-cream/90">
                    {['TMT bars', 'Binding wire'].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rust" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/products/tmt-steel"
                  className={`${buttonPrimary} relative self-start mt-8`}
                >
                  Explore Tata Tiscon
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Three matching cards */}
              {differenceCards.map(
                ({ index, title, text, icon: Icon, image, to }) => (
                  <GlowCard
                    as="article"
                    key={title}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-paper transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.35)]"
                  >
                    {/* fixed-height image well = every card lines up */}
                    <div className="flex h-44 items-center justify-center border-b border-border bg-[#fbf9f4] p-5 dark:bg-[#e9e4d6]">
                      <img
                        src={image}
                        alt={title}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="font-mono text-[0.72rem] text-rust">
                          {index}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rust/10 text-rust transition-colors group-hover:bg-rust group-hover:text-primary-foreground">
                          <Icon size={17} />
                        </span>
                      </div>

                      <h3 className="mb-2 min-h-[3.1rem] font-display font-bold text-[1.08rem] leading-snug text-ink">
                        {title}
                      </h3>

                      <p className="text-[0.9rem] leading-relaxed text-steel">
                        {text}
                      </p>

                      <Link
                        to={to}
                        className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.86rem] font-semibold text-ink transition-colors group-hover:text-rust"
                      >
                        Enquire
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </GlowCard>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="relative bg-charcoal py-20 border-t border-border-dark before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:opacity-55 before:bg-[repeating-linear-gradient(90deg,var(--color-rust)_0_2px,transparent_2px_16px)]">
          <div className="relative w-full max-w-[1180px] mx-auto px-6 md:px-12">
            <div data-reveal className="flex flex-wrap justify-between items-end gap-6 mb-10 pb-7 border-b border-border-dark">
              <div>
                <div className="font-mono text-[0.78rem] text-amber">
                  03 / Materials catalogue
                </div>

                <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-cream text-[clamp(1.8rem,2.9vw,2.55rem)]">
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

            <div data-reveal-group className="border-t border-border-dark">
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
                      <h3 className="text-cream text-[1.1rem] mb-1.5">
                        {product.title}
                      </h3>

                      <p className="text-slate-mist text-[0.9rem]">
                        {product.short}
                      </p>
                    </div>

                    <span className="text-cream opacity-40 transition-[opacity,transform] group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-amber">
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Materials + brands ticker */}
        <section
          aria-label="Materials and brands we supply"
          className="relative overflow-hidden border-y border-border bg-panel py-5"
        >
          <Marquee
            duration={60}
            className="font-display text-[1.05rem] font-bold uppercase tracking-[0.08em] text-ink/80"
            items={[...productDetails.map((p: { title: string }) => p.title), ...brands]}
          />
        </section>

        {/* Brands */}
        <section className="py-[72px]">
          <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
            <div data-reveal className="flex flex-wrap justify-between items-end gap-6 mb-10 pb-7 border-b border-border">
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

            <div data-reveal-group className="flex flex-wrap gap-2.5">
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

        <Process />

        <LocalCta />

        <Faq />
      </CoverIntro>
    </>
  );
}