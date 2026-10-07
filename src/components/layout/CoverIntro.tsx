import { useEffect, useRef, type ReactNode } from 'react';
import { scrollToY } from '../../lib/smoothScroll';
import { ChevronsDown, ShieldCheck, Layers, MapPin, type LucideIcon } from 'lucide-react';

/**
 * Blue landing screen shown first. Stays pinned while the rest of the
 * site slides up over it.  Put at: src/components/home/CoverIntro.tsx
 * `offset` = constant header height in px (Header must NOT change height).
 */
type Highlight = { icon: LucideIcon; title: string; text: string };

const highlights: Highlight[] = [
  { icon: ShieldCheck, title: 'Authorized Tata Tiscon dealer', text: 'TMT bars and binding wire' },
  { icon: Layers, title: 'One source for your build', text: 'Steel, cement, aggregates, essentials' },
  { icon: MapPin, title: 'Local supply', text: 'Dosinga, Dhamara, Bhadrak' },
];

type Props = {
  photo: string; // owner / shop / aspirational photo
  logo: string; // logo for light mode
  logoDark: string; // logo for dark mode
  offset?: number;
  children: ReactNode;
};

export function CoverIntro({ photo, logo, logoDark, offset = 76, children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const update = () => {
      const span = Math.max(window.innerHeight - offset, 1);
      const p = Math.min(Math.max(window.scrollY / span, 0), 1);
      el.style.setProperty('--p', p.toFixed(3));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [offset]);

  const goNext = () =>
    scrollToY(window.innerHeight - offset);

  return (
    <div className="relative">
      <section
        ref={ref}
        aria-label="Welcome to Ramprasad Enterprises"
        className="sticky z-0 w-full overflow-hidden bg-navy text-cream"
        style={{
          top: offset,
          height: `calc(100svh - ${offset}px)`,
          ['--p' as string]: 0,
        }}
      >
        {/* faint blueprint grid + glow, same language as your hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_70%_at_75%_40%,black,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rust/25 blur-[110px]"
        />

        <div
          className="relative mx-auto grid h-full w-full max-w-[1180px] grid-rows-[auto_minmax(0,1fr)_auto] gap-4 px-6 pb-6 pt-5 md:grid-cols-[1.05fr_0.95fr] md:grid-rows-1 md:items-center md:gap-12 md:px-12 md:py-8"
          style={{
            transform: 'translateY(calc(var(--p) * -40px))',
            opacity: 'calc(1 - var(--p) * 1.5)',
          }}
        >
          {/* ---------- brand + highlights ---------- */}
          <div className="contents md:flex md:flex-col md:justify-center">
            <div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-full border border-white/20 bg-paper p-1 shadow-xl">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-paper md:h-24 md:w-24">
                    <img
                      src={logo}
                      alt="Ramprasad Enterprises logo"
                      className="h-full w-full object-contain dark:hidden"
                    />
                    <img
                      src={logoDark}
                      alt=""
                      aria-hidden="true"
                      className="hidden h-full w-full object-contain dark:block"
                    />
                  </div>
                </div>
                <h1 className="font-display font-extrabold uppercase leading-[1.02] tracking-tight text-[clamp(1.9rem,5.4vw,4rem)]">
                  Ramprasad
                  <span className="block text-[0.42em] font-bold tracking-[0.22em] text-amber">
                    Enterprises
                  </span>
                </h1>
              </div>

              <p className="mt-4 max-w-[38ch] text-[1rem] text-white/80 md:mt-6 md:text-[1.15rem]">
                Building today, creating tomorrow.
              </p>
            </div>

            {/* photo sits here on mobile (between brand and highlights) */}
            <PhotoFrame photo={photo} className="md:hidden" />

            <div>
              <ul className="grid gap-2.5 md:mt-8 md:gap-3.5">
                {highlights.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber md:h-10 md:w-10">
                      <Icon size={17} />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block text-[0.9rem] font-semibold md:text-[0.98rem]">{title}</span>
                      <span className="hidden text-[0.82rem] text-white/65 sm:block">{text}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={goNext}
                className="mt-4 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber md:mt-8"
              >
                Scroll to explore
                <ChevronsDown size={18} className="motion-safe:animate-bounce" />
              </button>
            </div>
          </div>

          {/* ---------- photo on desktop ---------- */}
          <PhotoFrame photo={photo} className="hidden md:block" tall />
        </div>
      </section>

      {/* rest of the site slides up over the blue screen */}
      <div className="relative z-10 -mt-6 rounded-t-[28px] bg-paper shadow-[0_-24px_40px_-24px_rgba(0,0,0,0.55)]">
        {children}
      </div>
    </div>
  );
}

function PhotoFrame({ photo, className = '', tall = false }: { photo: string; className?: string; tall?: boolean }) {
  return (
    <div
      className={`relative min-h-0 ${className}`}
      style={{ transform: 'translateY(calc(var(--p) * 24px))' }}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-md shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] before:absolute before:left-3 before:top-3 before:z-[1] before:h-5 before:w-5 before:border-2 before:border-r-0 before:border-b-0 before:border-rust before:content-[''] after:absolute after:bottom-3 after:right-3 after:z-[1] after:h-5 after:w-5 after:border-2 after:border-l-0 after:border-t-0 after:border-rust after:content-[''] ${
          tall ? 'aspect-[4/5] max-h-[calc(100svh-180px)] ml-auto' : ''
        }`}
      >
        <img src={photo} alt="Ramprasad Enterprises" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}