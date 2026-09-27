import { MapPin, MessageCircle, Phone } from 'lucide-react';

import { ActionLink } from '../components/common/ActionLink';
import { LocalCta } from '../components/common/LocalCta';
import { PageHero } from '../components/common/PageHero';
import { Meta } from '../components/common/Meta';
import { ContactForm } from '../components/forms/ContactFoam';

import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from '../lib/contact';

const eyebrowClasses =
  "inline-flex items-center gap-2 text-teal-700 mb-4 before:content-[''] before:w-3.5 before:h-px before:bg-teal-700";
const buttonBase =
  'inline-flex items-center justify-center gap-2.5 text-[0.92rem] font-semibold px-7 py-3.5 rounded-full border border-transparent transition-[background-color,transform,box-shadow] active:translate-y-0 hover:-translate-y-px';
const buttonPrimary = `${buttonBase} bg-teal-600 text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_14px_28px_-14px_rgba(13,148,136,0.65)] hover:bg-teal-700`;
const buttonDark = `${buttonBase} bg-slate-950 text-white shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_14px_28px_-14px_rgba(15,23,42,0.6)] hover:bg-slate-800`;

const contactPoints = [
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE_NUMBER || 'Phone number not configured',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: WHATSAPP_NUMBER
      ? 'Available for enquiries'
      : 'WhatsApp not configured',
  },
  {
    icon: MapPin,
    label: 'Business location',
    value: 'Dosinga, Dhamara, Bhadrak, Odisha, India',
  },
];

export function Contact() {
  return (
    <>
      <Meta
        title="Contact M/s Ramprasad Enterprises | Construction Materials Dosinga"
        description="Contact M/s Ramprasad Enterprises for TMT steel, cement, sand, aggregates, bricks, boulders and construction accessories in Dosinga, Dhamara, Bhadrak."
      />

      <PageHero
        title="Start with the material you need."
        description="Call, WhatsApp or send a requirement through the enquiry form."
      />

      <section className="py-24">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12 grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}>
              Direct contact
            </div>

            <h2 className="font-display font-bold leading-tight tracking-[-0.02em] text-slate-900 text-[clamp(1.9rem,3vw,2.6rem)] mt-2 mb-4">
              Make the first move simple.
            </h2>

            <p className="text-slate-500 leading-relaxed max-w-[62ch] mb-8">
              Tell M/s Ramprasad Enterprises what you are looking
              for and where your requirement is located.
            </p>

            <div className="flex flex-col gap-6 mb-8 p-7 bg-white border border-slate-200 rounded-2xl shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)]">
              {contactPoints.map(({ icon: Icon, label, value }, index) => (
                <div
                  key={label}
                  className={`flex items-start gap-4 ${
                    index !== contactPoints.length - 1
                      ? 'pb-6 border-b border-slate-100'
                      : ''
                  }`}
                >
                  <span className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-teal-50 border border-teal-200 text-teal-700">
                    <Icon size={17} />
                  </span>

                  <div className="flex flex-col gap-0.5 pt-1">
                    <strong className="text-slate-900 text-[0.88rem] font-semibold">
                      {label}
                    </strong>
                    <span className="text-slate-500 text-[0.88rem]">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <ActionLink kind="call" className={buttonPrimary}>
                Call now
              </ActionLink>

              <ActionLink
                kind="whatsapp"
                className={buttonDark}
              >
                WhatsApp enquiry
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