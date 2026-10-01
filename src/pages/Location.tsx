import { ArrowUpRight, MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ActionLink } from '../components/common/ActionLink';
import { PageHero } from '../components/common/PageHero';
import { Meta } from '../components/common/Meta';
import { ADDRESS, MAPS_EMBED_URL, MAPS_URL } from '../lib/contact';

const eyebrowClasses =
  "inline-flex items-center gap-2 text-rust mb-4 before:content-[''] before:w-3.5 before:h-px before:bg-rust";

export function Location() {
  return (
    <>
      <Meta
        title="Location | M/s Ramprasad Enterprises in Dosinga, Dhamara"
        description="Find M/s Ramprasad Enterprises in Dosinga, Dhamara, Bhadrak, Odisha. Get directions on Google Maps."
      />

      <PageHero
        title="Find the business in Dosinga."
        description="M/s Ramprasad Enterprises is located in Dosinga, Dhamara, Bhadrak, Odisha, India."
      />

      <section className="py-16 md:py-24">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 rounded-xl overflow-hidden border border-border-dark shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
            {/* Address panel (dark in both themes) */}
            <div className="relative bg-charcoal px-8 py-12 md:py-14 min-h-[320px] overflow-hidden">
              <div className="pointer-events-none absolute -left-10 -bottom-10 w-56 h-56" aria-hidden="true">
                <span className="absolute inset-0 rounded-full border border-amber/15" />
                <span className="absolute inset-6 rounded-full border border-amber/15" />
                <span className="absolute inset-12 rounded-full border border-amber/20 animate-ping [animation-duration:3s]" />
              </div>

              <div className="relative flex flex-col h-full">
                <div className="font-mono text-[0.78rem] tracking-wide text-amber">
                  The local address
                </div>

                <h2 className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-cream text-[clamp(2.2rem,4.2vw,3.1rem)] mt-3 mb-5">
                  Dosinga
                </h2>

                <address className="not-italic text-slate-mist leading-relaxed text-[1.05rem]">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.locality}
                  <br />
                  {ADDRESS.region} {ADDRESS.postalCode}, India
                </address>

                <div className="mt-auto pt-12 flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-amber/10 border border-amber/30">
                    <MapPin size={18} className="text-amber" aria-hidden="true" />
                  </span>
                  <span className="text-slate-mist text-sm">
                    Serving Dosinga &amp; the surrounding Dhamara area
                  </span>
                </div>
              </div>
            </div>

            {/* Live map */}
            <div data-lenis-prevent className="relative bg-panel flex flex-col min-h-[320px]">
              <iframe
                title="Map showing M/s Ramprasad Enterprises in Dosinga"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full flex-1 min-h-[280px] border-0 [color-scheme:light]"
                allowFullScreen
              />

              <div className="flex flex-wrap gap-x-5 gap-y-2 items-center justify-between px-6 py-4 border-t border-border bg-panel">
                <ActionLink
                  kind="directions"
                  className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-rust hover:text-rust-dark transition-colors"
                >
                  <Navigation size={15} aria-hidden="true" />
                  Get directions
                </ActionLink>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.85rem] text-steel hover:text-ink transition-colors"
                >
                  View on Google Maps
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-panel border-t border-border">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-10 pb-8 border-b border-border">
            <div>
              <div className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}>
                Local relevance
              </div>

              <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-[clamp(1.9rem,3.2vw,2.6rem)]">
                Rooted in Dosinga,
                <br />
                built for Bhadrak.
              </h2>
            </div>

            <div className="max-w-[38ch] pt-1">
              <p className="text-steel leading-relaxed mb-4">
                M/s Ramprasad Enterprises serves customers in and around Dosinga and Dhamara.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Dosinga', 'Dhamara', 'Bhadrak district'].map((place) => (
                  <span
                    key={place}
                    className="text-[0.82rem] text-ink bg-paper border border-border rounded-full px-3 py-1"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2.5 text-[0.95rem] font-semibold px-7 py-4 rounded-sm border border-transparent bg-rust text-primary-foreground shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_6px_16px_-8px_rgba(181,69,29,0.55)] transition-colors hover:bg-rust-dark btn-shine"
          >
            Ask about your requirement
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
