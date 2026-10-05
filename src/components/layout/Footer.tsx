import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUp,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';

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

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="flex items-center gap-2.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-amber mb-6">
      <span className="block w-5 h-px bg-rust" aria-hidden="true" />
      {children}
    </h3>
  );
}

function FooterLink({ to, children }: { to: string; children: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-0 text-slate-mist text-[0.92rem] transition-[color,gap] duration-300 hover:text-cream hover:gap-2"
    >
      <ArrowRight
        size={13}
        className="hidden md:block w-0 opacity-0 text-rust transition-[width,opacity] duration-300 group-hover:w-[13px] group-hover:opacity-100"
        aria-hidden="true"
      />
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-charcoal mt-auto overflow-hidden">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-rust/15 blur-[120px]"
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-10 xl:px-14">
        {/* ===== CTA BAND ===== */}
        <div
          data-reveal-group
          className="mt-10 md:mt-16 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-6 py-8 sm:px-10 sm:py-10 flex flex-col items-center justify-center gap-6 text-center"
        >
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-amber mb-2">
              Planning a construction project?
            </p>
            <h2 className="font-display font-extrabold text-cream text-[1.5rem] sm:text-[1.9rem] leading-tight">
              Get TMT steel, cement &amp; materials
              <span className="text-rust"> at the right price.</span>
            </h2>
          </div>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div
          data-reveal-group
          className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 text-left md:gap-12 md:py-16 md:items-start md:grid-cols-[1.5fr_1fr_1.1fr_1.3fr]"
        >
          {/* Company */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center md:text-left md:items-start">
            <Link
              to="/"
              className="inline-block font-display font-extrabold uppercase tracking-tight text-cream text-[1.35rem] leading-none"
            >
              Ramprasad
              <span className="block mt-1 text-[0.72rem] font-bold tracking-[0.2em] text-rust">
                Enterprises
              </span>
            </Link>

            <p className="text-slate-mist text-[0.92rem] leading-relaxed mt-5 mb-6 max-w-[34ch]">
              Construction materials supplier for residential and other
              construction requirements.
            </p>

            <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-[0.68rem] tracking-wide text-amber">
              <ShieldCheck size={13} />
              Authorized Tata Tiscon Dealer
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <FooterHeading>Quick Links</FooterHeading>

            <ul className="list-none m-0 p-0 flex flex-col items-start gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col items-start">
            <FooterHeading>Products</FooterHeading>

            <ul className="list-none m-0 p-0 flex flex-col items-start gap-3.5">
              {products.map((product) => (
                <li key={product.path}>
                  <FooterLink to={product.path}>{product.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start">
            <FooterHeading>Contact</FooterHeading>

            <address className="not-italic flex flex-col items-start gap-4 text-slate-mist text-[0.92rem] leading-relaxed">
              <div className="flex flex-row items-start gap-3">
                <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-white/10 bg-white/[0.04]">
                  <MapPin size={15} className="text-rust" />
                </span>
                <span className="max-w-[32ch] pt-1.5">{ADDRESS.oneLine}</span>
              </div>

              <a
                href={`tel:${PHONE_E164}`}
                className="group flex flex-row items-center gap-3 text-cream transition-colors hover:text-amber"
              >
                <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-white/10 bg-white/[0.04] transition-colors group-hover:border-amber/50">
                  <Phone size={15} className="text-rust" />
                </span>
                {PHONE_DISPLAY}
              </a>
            </address>

            <div className="flex flex-col items-start gap-2.5 mt-6">
              <ActionLink
                kind="whatsapp"
                className="inline-flex items-center gap-2 text-amber text-[0.88rem] font-semibold transition-colors hover:text-cream"
              >
                <MessageCircle size={15} />
                WhatsApp us
              </ActionLink>
            </div>
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

      {/* ===== BOTTOM BAR ===== */}
      <div className="relative border-t border-border-dark pt-[22px] pb-24 sm:pb-[22px]">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 xl:px-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-mist-dim text-[0.82rem] m-0">
            © {new Date().getFullYear()} Ramprasad Enterprises. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[0.78rem] font-semibold text-slate-mist transition-[color,border-color] duration-300 hover:text-cream hover:border-cream"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}