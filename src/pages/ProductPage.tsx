import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { ActionLink } from '../components/common/ActionLink';
import { Faq } from '../components/common/Faq';
import { LocalCta } from '../components/common/LocalCta';
import { Meta } from '../components/common/Meta';
import { PageHero } from '../components/common/PageHero';
import { productDetails, productDetailsBySlug } from '../data/productDetails';
import { NotFound } from './NotFound';

const eyebrowClasses =
  "inline-flex items-center gap-2 text-rust mb-4 before:content-[''] before:w-3.5 before:h-px before:bg-rust";
const buttonBase =
  'inline-flex items-center justify-center gap-2.5 text-[0.92rem] font-semibold px-6 py-3.5 rounded-sm border border-transparent transition-[background-color,transform,box-shadow] active:translate-y-0 hover:-translate-y-px';
const buttonPrimary = `${buttonBase} bg-rust text-primary-foreground shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_6px_16px_-8px_rgba(181,69,29,0.55)] hover:bg-rust-dark btn-shine`;
const buttonDark = `${buttonBase} bg-ink text-paper shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_6px_16px_-8px_rgba(0,0,0,0.5)] hover:bg-charcoal-2 dark:bg-charcoal-2 dark:text-cream dark:border-border-dark dark:hover:border-amber dark:hover:bg-charcoal`;
const buttonOutline = `${buttonBase} bg-transparent text-cream border-border-dark shadow-none hover:border-cream hover:-translate-y-0`;

const defaultVariants = [
  { id: 'opc-43', label: 'OPC 43 Grade', hint: 'General construction' },
  { id: 'opc-53', label: 'OPC 53 Grade', hint: 'High-strength RCC work' },
  { id: 'ppc', label: 'PPC', hint: 'Plastering & durability' },
];

const defaultBagSizes = [
  { id: '25kg', label: '25 kg' },
  { id: '50kg', label: '50 kg' },
];

export function ProductPage() {
  const { slug = 'tmt-steel' } = useParams<{ slug: string }>();

  const found = productDetailsBySlug[slug];
  const product = found ?? productDetailsBySlug['tmt-steel'];

  const description = `${product.title} from M/s Ramprasad Enterprises in Dosinga, Dhamara, Bhadrak. Ask about types, uses and current availability.`;

  const mainImage = product.image ?? '/images/products/placeholder.jpg';
  const gallery = product.gallery ?? [];

  const variants = product.variants ?? defaultVariants;
  const sizes = product.bagSizes ?? defaultBagSizes;
  const variantLabel = product.variantLabel ?? 'Choose type';
  const bagSizeLabel = product.bagSizeLabel ?? 'Bag size';

  const [selectedVariant, setSelectedVariant] = useState(variants[0]?.id);
  const [selectedSize, setSelectedSize] = useState(sizes[0]?.id);
  const [quantity, setQuantity] = useState(1);

  if (!found) return <NotFound />;

  // Encoded query string (titles contain & and spaces) read by the contact form
  const enquiryQuery = new URLSearchParams({
    product: product.title,
    type: String(selectedVariant ?? ''),
    size: String(selectedSize ?? ''),
    qty: String(quantity),
  }).toString();

  return (
    <>
      {/* SEO */}
      <Meta
        title={`${product.title} | M/s Ramprasad Enterprises, Dosinga`}
        description={description}
        image={typeof product.image === 'string' ? product.image : undefined}
      />

      {/* Hero */}
      <PageHero title={product.title} description={product.desc} />

      {/* Product Image + Details */}
      <section className="py-[72px]">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            {/* Main product image */}
            <div className="rounded-md overflow-hidden bg-panel mb-4 aspect-[16/10]">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-8">
                {gallery.map((img: string, i: number) => (
                  <div
                    key={i}
                    className="rounded-sm overflow-hidden bg-panel aspect-square"
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            <p className="text-[1.1rem] text-ink max-w-[60ch] mb-8">
              {product.desc}
            </p>

            {/* Variant selector */}
            <div className="border-t border-border pt-8 mb-8">
              <h3 className="text-[0.95rem] font-semibold text-ink mb-4">
                {variantLabel}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {variants.map((v) => {
                  const active = v.id === selectedVariant;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v.id)}
                      className={`relative text-left rounded-md border px-4 py-3.5 transition-colors ${
                        active
                          ? 'border-rust bg-rust/5'
                          : 'border-border hover:border-steel'
                      }`}
                    >
                      {active && (
                        <span className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-rust flex items-center justify-center">
                          <Check size={11} className="text-primary-foreground" />
                        </span>
                      )}
                      <span className="block text-[0.9rem] font-semibold text-ink pr-5">
                        {v.label}
                      </span>
                      {v.hint && (
                        <span className="block text-[0.78rem] text-steel mt-0.5">
                          {v.hint}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <h3 className="text-[0.95rem] font-semibold text-ink mb-4">
                {bagSizeLabel}
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {sizes.map((s) => {
                  const active = s.id === selectedSize;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSize(s.id)}
                      className={`px-5 py-2.5 rounded-full border text-[0.88rem] font-medium transition-colors ${
                        active
                          ? 'border-rust bg-rust text-primary-foreground'
                          : 'border-border text-ink hover:border-steel'
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>

              <h3 className="text-[0.95rem] font-semibold text-ink mb-4">
                Quantity
              </h3>
              <div className="inline-flex items-center border border-border rounded-full overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-panel transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-14 text-center text-[0.95rem] font-semibold text-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-panel transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="border-t border-border">
              <div className="grid grid-cols-[160px_1fr] gap-5 py-[18px] border-b border-border">
                <strong className="text-[0.88rem] text-ink">Common use</strong>
                <span className="text-[0.92rem] text-steel">{product.uses}</span>
              </div>

              <div className="grid grid-cols-[160px_1fr] gap-5 py-[18px] border-b border-border">
                <strong className="text-[0.88rem] text-ink">Quantity</strong>
                <span className="text-[0.92rem] text-steel">{product.availability}</span>
              </div>
            </div>

            <div className="mt-9">
              <Link
                to={`/contact?${enquiryQuery}`}
                className={buttonPrimary}
              >
                Ask for availability
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right column: sticky product list + enquiry sidebar */}
          <aside className="self-start lg:sticky lg:top-24 space-y-6">
            {/* All-products quick list */}
            <div className="bg-panel rounded-md border border-border p-6">
              <h3 className="text-[0.8rem] font-mono uppercase tracking-wide text-steel mb-4">
                All products
              </h3>

              <ul className="space-y-1">
                {productDetails.map((p) => {
                  const active = p.slug === product.slug;
                  return (
                    <li key={p.slug}>
                      <Link
                        to={`/products/${p.slug}`}
                        className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-sm text-[0.88rem] transition-colors ${
                          active
                            ? 'bg-rust text-primary-foreground font-semibold'
                            : 'text-ink hover:bg-border/40'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          {p.image && (
                            <img
                              src={p.image}
                              alt=""
                              className="w-7 h-7 rounded-sm object-cover flex-shrink-0"
                              loading="lazy"
                            />
                          )}
                          {p.title}
                        </span>
                        {!active && (
                          <ArrowRight
                            size={14}
                            className="text-steel flex-shrink-0"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Enquiry box */}
            <div className="bg-charcoal rounded-md p-8">
              <div className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}>
                Enquiry desk
              </div>

              <h3 className="text-cream my-2 mb-3 text-[1.2rem]">
                Let's make the next step clear.
              </h3>

              <div className="text-[0.88rem] text-slate-mist mb-5 space-y-1.5">
                <p>
                  <span className="text-cream font-medium">Selected:</span>{' '}
                  {variants.find((v) => v.id === selectedVariant)?.label}
                </p>
                <p>
                  <span className="text-cream font-medium">{bagSizeLabel}:</span>{' '}
                  {sizes.find((s) => s.id === selectedSize)?.label}
                </p>
                <p>
                  <span className="text-cream font-medium">Quantity:</span>{' '}
                  {quantity}
                </p>
              </div>

              <div className="text-[0.82rem] text-amber border border-border-dark rounded-sm px-3.5 py-3 mb-[22px]">
                Prices are not published here because availability
                changes.
              </div>

              <ActionLink kind="call" className={`${buttonDark} w-full`}>
                Call now
              </ActionLink>

              <br />

              <ActionLink
                kind="whatsapp"
                className={`${buttonOutline} w-full mt-2.5`}
              >
                WhatsApp enquiry
              </ActionLink>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Products */}
      {product.related?.length ? (
        <section className="py-12 bg-panel">
          <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
            <div className="flex flex-wrap justify-between items-end gap-6 mb-10 pb-7 border-b border-border">
              <div>
                <div className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}>
                  Explore the range
                </div>
                <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[clamp(1.8rem,2.9vw,2.55rem)]">
                  More specific
                  <br />
                  product pages.
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {product.related.map((relatedSlug: string) => {
                const relatedProduct = productDetailsBySlug[relatedSlug];
                if (!relatedProduct) return null;

                return (
                  <Link
                    key={relatedSlug}
                    to={`/products/${relatedSlug}`}
                    className="inline-flex items-center gap-3 px-[14px] py-2.5 border border-border rounded-full text-[0.88rem] font-medium text-ink transition-colors hover:border-rust hover:text-rust"
                  >
                    {relatedProduct.image && (
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="w-7 h-7 rounded-full object-cover"
                        loading="lazy"
                      />
                    )}
                    {relatedProduct.title}
                    <ArrowRight size={16} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <Faq />

      {/* Local CTA */}
      <LocalCta />
    </>
  );
}