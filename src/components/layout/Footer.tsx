import { Link } from 'react-router-dom';

import { ActionLink } from '../common/ActionLink';
import { ADDRESS, PHONE_DISPLAY, PHONE_E164 } from '../../lib/contact';

const products = [
  { name: 'TMT Steel & Rebar', path: '/products/tmt-steel' },
  { name: 'Cement', path: '/products/cement' },
  { name: 'Construction Sand', path: '/products/sand' },
  { name: 'Stone Chips & Aggregates', path: '/products/stone-chips-aggregates' },
  { name: 'Boulders', path: '/products/boulders' },
  { name: 'Bricks', path: '/products/bricks' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Location', path: '/location' },
  { name: 'Contact', path: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal mt-auto">
      <div data-reveal-group className="w-full max-w-[1180px] mx-auto px-6 md:px-12 grid gap-10 py-16 pb-10 text-center items-center md:text-left md:items-start md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Company */}
        <div className="flex flex-col items-center md:items-start">
          <Link
            to="/"
            className="inline-block font-display font-extrabold text-[1.05rem] text-cream mb-3.5"
          >
            Ramprasad Enterprises
          </Link>

          <p className="text-slate-mist text-[0.9rem] mb-[18px] max-w-[32ch]">
            Construction materials supplier for residential
            and other construction requirements.
          </p>

          <ActionLink
            kind="whatsapp"
            className="inline-flex items-center text-[0.85rem] font-semibold text-amber"
          >
            Enquire on WhatsApp
          </ActionLink>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-cream text-[0.85rem] mb-[18px]">Quick Links</h3>

          <ul className="list-none m-0 p-0 flex flex-col items-center md:items-start gap-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-slate-mist text-[0.9rem] transition-colors hover:text-cream"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-cream text-[0.85rem] mb-[18px]">Products</h3>

          <ul className="list-none m-0 p-0 flex flex-col items-center md:items-start gap-3">
            {products.map((product) => (
              <li key={product.path}>
                <Link
                  to={product.path}
                  className="text-slate-mist text-[0.9rem] transition-colors hover:text-cream"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-cream text-[0.85rem] mb-[18px]">Contact</h3>

          <address className="not-italic text-slate-mist text-[0.9rem] mb-[18px] leading-relaxed">
            {ADDRESS.oneLine}
            <br />
            <a href={`tel:${PHONE_E164}`} className="text-cream hover:text-amber transition-colors">
              {PHONE_DISPLAY}
            </a>
          </address>

          <div className="flex flex-col items-center md:items-start gap-2.5">
            <ActionLink kind="call" className="text-amber text-[0.85rem] font-semibold">
              Call us
            </ActionLink>

            <ActionLink kind="whatsapp" className="text-amber text-[0.85rem] font-semibold">
              WhatsApp us
            </ActionLink>
          </div>
        </div>
      </div>

      {/* oversized outlined wordmark, pure decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden px-4 text-center font-display font-extrabold uppercase leading-[0.8] tracking-[-0.03em] text-transparent text-[clamp(3.5rem,15vw,12rem)] [-webkit-text-stroke:1px_var(--color-border-dark)]"
      >
        Ramprasad
      </div>

      {/* Bottom */}
      <div className="border-t border-border-dark pt-[22px] pb-24 sm:pb-[22px]">
        <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12 text-center md:text-left">
          <p className="text-slate-mist-dim text-[0.82rem] m-0">
            © {new Date().getFullYear()} Ramprasad Enterprises.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}