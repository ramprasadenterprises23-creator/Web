import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

import { ActionLink } from '../components/common/ActionLink';
import { JsonLd } from '../components/common/JsonLd';
import { LocalCta } from '../components/common/LocalCta';
import { PageHero } from '../components/common/PageHero';
import { Meta } from '../components/common/Meta';
import { ContactForm } from '../components/forms/ContactFoam';

import {
  ADDRESS,
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_E164,
} from '../lib/contact';

const eyebrowClasses =
  "inline-flex items-center gap-2 text-rust mb-4 before:content-[''] before:w-3.5 before:h-px before:bg-rust";
const buttonBase =
  'inline-flex items-center justify-center gap-2.5 text-[0.92rem] font-semibold px-6 py-3.5 rounded-sm border border-transparent transition-[background-color,transform,box-shadow] active:translate-y-0 hover:-translate-y-px';
const buttonPrimary = `${buttonBase} bg-rust text-primary-foreground shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_6px_16px_-8px_rgba(181,69,29,0.55)] hover:bg-rust-dark btn-shine`;
const buttonOutline = `${buttonBase} bg-transparent text-ink border-border shadow-none hover:border-ink hover:-translate-y-0`;

const contactPoints = [
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Send a message any time. We reply as soon as we can.',
  },
  {
    icon: MapPin,
    label: 'Business location',
    value: ADDRESS.oneLine,
  },
  {
    icon: Clock,
    label: 'Opening hours',
    // TODO: replace with real hours, then add them to the JSON-LD in Home.tsx
    value: 'Please call or WhatsApp to confirm today’s timings.',
  },
];

export function Contact() {
  return (
    <>
      <Meta
        title={`Contact ${BUSINESS_NAME} | Construction Materials Dosinga`}
        description="Contact M/s Ramprasad Enterprises for TMT steel, cement, sand, aggregates, bricks, boulders and construction accessories in Dosinga, Dhamara, Bhadrak."
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: `Contact ${BUSINESS_NAME}`,
          url: typeof window !== 'undefined' ? window.location.href : undefined,
        }}
      />

      <PageHero
        title="Start with the material you need."
        description="Call, WhatsApp or send a requirement through the enquiry form."
      />

      <section className="py-16 md:py-24">
        <div data-reveal-group className="w-full max-w-[1180px] mx-auto px-6 md:px-12 grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}>
              Direct contact
            </div>

            <h2 className="font-display font-bold leading-tight tracking-[-0.02em] text-ink text-[clamp(1.9rem,3vw,2.6rem)] mt-2 mb-4">
              Make the first move simple.
            </h2>

            <p className="text-steel leading-relaxed max-w-[62ch] mb-8">
              Tell {BUSINESS_NAME} what you are looking for and where your
              requirement is located.
            </p>

            <div className="flex flex-col gap-6 mb-8 p-7 bg-panel border border-border rounded-xl shadow-[0_20px_45px_-30px_rgba(0,0,0,0.35)]">
              {contactPoints.map(({ icon: Icon, label, value, href }, index) => (
                <div
                  key={label}
                  className={`flex items-start gap-4 ${
                    index !== contactPoints.length - 1 ? 'pb-6 border-b border-border' : ''
                  }`}
                >
                  <span className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-rust/10 border border-rust/30 text-rust">
                    <Icon size={17} aria-hidden="true" />
                  </span>

                  <div className="flex flex-col gap-0.5 pt-1">
                    <strong className="text-ink text-[0.88rem] font-semibold">{label}</strong>
                    {href ? (
                      <a href={href} className="text-steel text-[0.88rem] hover:text-rust transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-steel text-[0.88rem]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <ActionLink kind="call" className={buttonPrimary}>
                Call now
              </ActionLink>

              <ActionLink kind="directions" className={buttonOutline}>
                Get directions
              </ActionLink>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <LocalCta />
    </>
  );
}
