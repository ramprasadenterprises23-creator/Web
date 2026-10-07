import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

import { ActionLink } from '../common/ActionLink';
import { ThemeToggle } from '../common/ThemeToggle';
import { lockScroll } from '../../lib/smoothScroll';

import logo from '../../assets/ChatGPT_Image_Jul_3__2026__08_23_18_PM-removebg-preview.png';
import logoDark from '../../assets/Ramprasad Enterprises Dark Mode Logo.png';

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products/tmt-steel' },
  { label: 'Blog', path: '/blog' },
  { label: 'Location', path: '/location' },
  { label: 'Contact', path: '/contact' },
];

function Logomark({ scrolled }: { scrolled: boolean }) {
  return (
    <div
      className="relative shrink-0 transform-gpu transition-transform duration-300 ease-out will-change-transform"
      style={{ transform: scrolled ? 'scale(0.86)' : 'scale(1)' }}
    >
      <div className="rounded-full border border-border bg-paper p-[3px] shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_6px_16px_-10px_rgba(0,0,0,0.35)]">
  <div className="w-11 h-11 sm:w-[54px] sm:h-[54px] rounded-full overflow-hidden bg-paper flex items-center justify-center">
    <img
      src={logo}
      alt="Ramprasad Enterprises"
      className="w-full h-full object-contain dark:hidden"
    />
    <img
      src={logoDark}
      alt=""
      aria-hidden="true"
      className="w-full h-full object-contain hidden dark:block"
    />
  </div>
</div>

      <span className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-rust border-2 border-paper">
        <ShieldCheck size={9} className="text-primary-foreground" strokeWidth={3} />
      </span>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    lockScroll(open);
    return () => {
      document.body.style.overflow = '';
      lockScroll(false);
    };
  }, [open]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 120);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full overflow-x-hidden">
      {/* CHANGED: relative z-[45] keeps the bar above the mobile menu overlay,
          and when the menu is open the bar turns navy so the cross is visible */}
      <div
        className={`relative z-[45] border-b transition-[background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? 'bg-navy border-transparent lg:bg-paper/95 lg:border-border'
            : scrolled
            ? 'bg-paper/95 backdrop-blur-[14px] backdrop-saturate-[1.1] border-border shadow-[0_8px_28px_-18px_rgba(0,0,0,0.4)]'
            : 'bg-paper/90 backdrop-blur-[10px] backdrop-saturate-[1.1] border-border'
        }`}
      >
        <div
          className={`w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 flex items-center justify-between gap-2 sm:gap-6 transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[height] ${
            'h-[76px]'
          }`}
        >
          {/* LOGO */}
          {/* CHANGED: left column — equal width to the right column on desktop */}
          <div className="flex flex-1 min-w-0 lg:basis-0 lg:grow justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 sm:gap-3 min-w-0 group transition-transform duration-300 ease-out hover:-translate-y-[1px]"
          >
            <Logomark scrolled={scrolled} />

            <div className="flex flex-col justify-center leading-none min-w-0">
              {/* CHANGED: text turns cream on mobile while the menu is open */}
              <span
                className={`font-display font-extrabold uppercase tracking-tight transition-[font-size,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? 'text-cream lg:text-brand' : 'text-brand'
                } ${
                  scrolled
                    ? 'text-[0.95rem] sm:text-[1.05rem]'
                    : 'text-[1.05rem] sm:text-[1.3rem]'
                }`}
              >
                Ramprasad
              </span>

              <span
                className={`flex items-center gap-1.5 font-display font-bold uppercase tracking-[0.14em] text-rust transition-[font-size] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] mt-0.5 ${
                  scrolled ? 'text-[0.58rem] sm:text-[0.66rem]' : 'text-[0.64rem] sm:text-[0.78rem]'
                }`}
              >
                <span className="hidden sm:block w-3 h-px bg-rust/50 shrink-0" />
                Enterprises
                <span className="hidden sm:block w-3 h-px bg-rust/50 shrink-0" />
              </span>

              <span
                className={`hidden lg:block font-mono tracking-[0.06em] text-steel/70 overflow-hidden transition-[max-height,opacity,margin] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  scrolled
                    ? 'max-h-0 opacity-0 mt-0'
                    : 'max-h-4 opacity-100 mt-1 text-[0.58rem]'
                }`}
              >
                Building today, creating tomorrow
              </span>
            </div>
          </Link>
          </div>

          {/* DESKTOP NAVIGATION — now centered between the two equal columns */}
          <nav
            className="hidden lg:flex items-center gap-0.5 shrink-0"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="relative group px-4 py-2 text-[0.88rem] font-semibold"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`absolute inset-0 rounded-full bg-rust/[0.08] transform-gpu transition-[transform,opacity] duration-250 ease-out ${
                        isActive
                          ? 'scale-100 opacity-100'
                          : 'scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                      }`}
                    />
                    <span
                      className={`relative z-10 transition-colors duration-250 ${
                        isActive ? 'text-rust' : 'text-steel group-hover:text-brand'
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* HEADER ACTIONS */}
          {/* CHANGED: right column — equal width to the logo column, content pushed to the right */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-2.5 shrink-0 lg:shrink lg:basis-0 lg:grow lg:gap-3">
            <ActionLink
              kind="call"
              className="hidden lg:inline-flex items-center gap-2 text-[0.85rem] font-semibold text-brand border border-border rounded-full px-4 py-2.5 hover:border-brand hover:-translate-y-[1px] transition-[border-color,transform] duration-300"
            >
              <Phone size={14} className="text-rust" />
              Call Now
            </ActionLink>

            {/* CHANGED: turns white only while the menu is open */}
            <ThemeToggle
              className={`hidden sm:inline-flex ${
                open ? '!text-cream !border-white/30 [&_svg]:!text-cream' : ''
              }`}
            />

            {/* CHANGED: menu / cross button turns light while the menu is open */}
            <button
              type="button"
              className={`lg:hidden inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border rounded-full bg-transparent cursor-pointer transition-[border-color,transform,color] duration-300 active:scale-95 shrink-0 ${
                open
                  ? 'border-white/30 text-cream hover:border-cream'
                  : 'border-border text-brand hover:border-brand'
              }`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-x-0 top-0 bottom-0 z-[39] bg-navy overflow-hidden transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] lg:hidden ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        {/* Ambient glow */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-rust/25 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-amber/10 blur-[90px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 h-full px-6 pt-[104px] pb-10 flex flex-col justify-between gap-8 overflow-y-auto">
          <div>
            <div
              className={`font-mono text-[0.7rem] tracking-wide text-amber flex items-center gap-2 mb-6 pb-4 border-b border-white/10 transition-[opacity,transform] duration-500 ${
                open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
              }`}
            >
              <ShieldCheck size={14} />
              Authorized Tata Tiscon Dealer
            </div>

            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={{
                    transitionDelay: open ? `${index * 45 + 80}ms` : '0ms',
                  }}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-[16px] border-b border-white/10 font-display font-bold text-[1.25rem] transition-[opacity,transform,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    } ${isActive ? 'text-rust' : 'text-cream'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center gap-3">
                        <span
                          className={`font-mono text-[0.72rem] transition-colors duration-300 ${
                            isActive ? 'text-rust' : 'text-slate-mist'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </span>
                      <ArrowRight
                        size={16}
                        className={`transition-transform duration-300 ${
                          isActive ? 'text-rust translate-x-1' : 'text-slate-mist'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          <div
            className={`flex flex-col gap-3 transition-[opacity,transform] duration-500 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {/* CHANGED: force white icon/border on the navy menu background */}
            <ThemeToggle className="self-start !text-cream !border-white/30 [&_svg]:!text-cream" />

            <ActionLink
              kind="call"
              className="inline-flex items-center justify-center gap-2.5 text-[0.92rem] font-semibold px-6 py-3.5 rounded-full border border-white/20 text-cream hover:border-cream hover:-translate-y-[1px] transition-[border-color,transform] duration-300"
            >
              <Phone size={16} />
              Call Now
            </ActionLink>

            {/* WhatsApp button — unchanged icon/behavior, kept as-is */}
            <ActionLink
              kind="whatsapp"
              className="inline-flex items-center justify-center gap-2.5 text-[0.92rem] font-semibold px-6 py-3.5 rounded-full bg-rust text-primary-foreground shadow-[0_10px_28px_-14px_rgba(181,69,29,0.7)] hover:bg-rust-dark hover:-translate-y-[1px] transition-[background-color,transform] duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp Enquiry
              <ArrowRight size={16} />
            </ActionLink>

            <div className="flex items-center justify-center gap-1.5 text-[0.8rem] text-slate-mist pt-2">
              <MapPin size={13} className="text-rust" />
              Dosinga, Dhamara, Bhadrak, Odisha
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}