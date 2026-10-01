import { BadgeCheck, MapPin } from 'lucide-react';

import { CountUp } from '../motion/CountUp';
import { brands } from '../../data/brands';
import { productDetails } from '../../data/productDetails';

/**
 * Four-up "at a glance" strip. Numbers come straight from the site's own data,
 * so they can never drift out of sync with the catalogue.
 */
export function TrustStrip() {
  const stats = [
    {
      value: <CountUp to={productDetails.length} />,
      label: 'Material categories',
      note: 'Steel to sand, one supplier',
    },
    {
      value: <CountUp to={brands.length} />,
      label: 'Brands to choose from',
      note: 'Subject to current stock',
    },
    {
      value: <BadgeCheck className="h-9 w-9 text-amber" strokeWidth={1.75} aria-hidden="true" />,
      label: 'Authorized dealer',
      note: 'Tata Tiscon TMT bars',
    },
    {
      value: <MapPin className="h-9 w-9 text-amber" strokeWidth={1.75} aria-hidden="true" />,
      label: 'Local supply',
      note: 'Dosinga · Dhamara · Bhadrak',
    },
  ];

  return (
    <section aria-label="At a glance" className="relative border-b border-border-dark bg-charcoal">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
      <dl
        data-reveal-group
        className="mx-auto grid w-full max-w-[1180px] grid-cols-2 px-6 md:grid-cols-4 md:px-12"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-1 py-8 md:px-6 md:py-10 ${
              i % 2 === 1 ? 'pl-6' : 'pr-6'
            } ${i > 1 ? 'border-t border-border-dark md:border-t-0' : ''} ${
              i > 0 ? 'md:border-l md:border-border-dark' : ''
            } ${i === 1 ? 'border-l border-border-dark' : ''} ${i === 3 ? 'border-l border-border-dark' : ''}`}
          >
            <dt className="order-2 font-display text-[0.92rem] font-bold text-cream">{stat.label}</dt>
            <dd className="order-1 mb-1 font-display text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-none text-amber">
              {stat.value}
            </dd>
            <dd className="order-3 text-[0.82rem] text-slate-mist">{stat.note}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
