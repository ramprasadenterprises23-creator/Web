import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// import { ActionLink } from '../components/common/ActionLink';
import { PageHero } from '../components/common/PageHero';
import { Meta } from '../components/common/Meta';

const eyebrowClasses =
  "inline-flex items-center gap-2 text-teal-700 mb-4 before:content-[''] before:w-3.5 before:h-px before:bg-teal-700";

export function Location() {
  return (
    <>
      <Meta
        title="Location | M/s Ramprasad Enterprises in Dosinga, Dhamara"
        description="Find M/s Ramprasad Enterprises in Dosinga, Dhamara, Bhadrak, Odisha."
      />

      <PageHero
        // eyebrow="Location / Dosinga"
        title="Find the business in Dosinga."
        description="M/s Ramprasad Enterprises is located in Dosinga, Dhamara, Bhadrak, Odisha, India."
        // crumbs={[
        //   {
        //     href: '/location',
        //     label: 'Location',
        //   },
        // ]}
      />

      <section className="py-24">
        <div className="w-full max-w-1180px mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-slate-200 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">

            {/* Address panel */}
            <div className="relative bg-slate-950 px-8 py-12 md:py-14 min-h-320px overflow-hidden">
              {/* radiating rings behind the pin */}
              <div className="pointer-events-none absolute -left-10 -bottom-10 w-56 h-56">
                <span className="absolute inset-0 rounded-full border border-teal-400/20" />
                <span className="absolute inset-6 rounded-full border border-teal-400/20" />
                <span className="absolute inset-12 rounded-full border border-teal-400/25 animate-ping [animation-duration:3s]" />
              </div>

              <div className="relative flex flex-col h-full">
                <div className="font-mono text-[0.78rem] tracking-wide text-teal-300">
                  The local address
                </div>

                <h2 className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-white text-[clamp(2.2rem,4.2vw,3.1rem)] mt-3 mb-5">
                  Dosinga
                </h2>

                <p className="text-slate-300 leading-relaxed text-[1.05rem]">
                  Dhamara, Bhadrak
                  <br />
                  Odisha, India
                </p>

                <div className="mt-auto pt-12 flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-teal-400/10 border border-teal-400/30">
                    <MapPin size={18} className="text-teal-300" />
                  </span>
                  <span className="text-slate-400 text-sm">
                    Serving Dosinga &amp; the surrounding Dhamara area
                  </span>
                </div>
              </div>
            </div>

            {/* Directions panel */}
            <div className="relative bg-white px-8 py-12 md:py-14 min-h-320px flex flex-col">
              <div className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}>
                Getting there
              </div>

              <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-slate-900 text-[1.5rem] mb-3">
                A map profile is on its way.
              </h2>

              <p className="text-slate-500 leading-relaxed max-w-[38ch]">
                We'll drop in an interactive map here as soon as the
                Google Business Profile is verified — for now, the
                address above is the fastest way to plan a visit.
              </p>

              {/* map placeholder texture */}
              <div
                className="mt-8 flex-1 min-h-140px rounded-xl border border-dashed border-slate-300 bg-radial-gradient(circle,_#cbd5e1_1px,_transparent_1px) background-size:16px_16px flex items-center justify-center"
              >
                <span className="inline-flex items-center gap-2 text-slate-400 text-sm bg-white px-3 py-1.5 rounded-full border border-slate-200">
                  <MapPin size={14} />
                  Map preview coming soon
                </span>
              </div>

              {/* <ActionLink
                kind="directions"
                className="button button-dark mt-6"
              >
                Open directions
                <ArrowUpRight size={15} />
              </ActionLink> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="w-full max-w-1180px mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-10 pb-8 border-b border-slate-200">
            <div>
              <div className={`font-mono text-[0.78rem] tracking-wide ${eyebrowClasses}`}>
                Local relevance
              </div>

              <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-slate-900 text-[clamp(1.9rem,3.2vw,2.6rem)]">
                Rooted in Dosinga,
                <br />
                built for Bhadrak.
              </h2>
            </div>

            <div className="max-w-38ch pt-1">
              <p className="text-slate-500 leading-relaxed mb-4">
                M/s Ramprasad Enterprises serves customers in and
                around Dosinga and Dhamara.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Dosinga', 'Dhamara', 'Bhadrak district'].map((place) => (
                  <span
                    key={place}
                    className="text-[0.82rem] text-teal-800 bg-teal-50 border border-teal-200 rounded-full px-3 py-1"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2.5 text-[0.95rem] font-semibold px-7 py-4 rounded-full border border-transparent bg-teal-600 text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_14px_28px_-14px_rgba(13,148,136,0.65)] transition-colors hover:bg-teal-700"
          >
            Ask about your requirement
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}