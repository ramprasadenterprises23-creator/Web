import { ClipboardList, MessageCircle, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Tell us what you need',
    text: 'Call or WhatsApp with the material, rough quantity and where the site is.',
  },
  {
    icon: ClipboardList,
    title: 'We confirm the details',
    text: 'Current brands, grades and availability, so you know exactly what is on offer.',
  },
  {
    icon: PackageCheck,
    title: 'Plan the supply',
    text: 'Fix the order around your build schedule instead of chasing materials mid-pour.',
  },
];

export function Process() {
  return (
    <section className="relative border-t border-border py-[72px]">
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-12">
        <div data-reveal className="mb-12 max-w-[56ch]">
          <p className="mb-2.5 font-mono text-[0.78rem] tracking-wide text-rust">05 / How it works</p>
          <h2 className="font-display text-[clamp(1.8rem,2.9vw,2.55rem)] font-bold leading-tight tracking-[-0.015em] text-ink">
            From first call to
            <br />
            materials on site.
          </h2>
        </div>

        <ol data-reveal-group className="relative grid gap-5 md:grid-cols-3">
          {/* connector line (desktop) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[34px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="glow-card group relative rounded-xl border border-border bg-panel p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-rust/50"
            >
              <span className="relative z-[1] mb-6 flex items-center justify-between">
                <span className="grid h-[52px] w-[52px] place-items-center rounded-full border border-border bg-paper text-rust transition-colors group-hover:border-rust group-hover:bg-rust group-hover:text-primary-foreground">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="font-display text-[3rem] font-extrabold leading-none text-border">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </span>
              <h3 className="relative z-[1] mb-2 font-display text-[1.12rem] font-bold text-ink">{title}</h3>
              <p className="relative z-[1] text-[0.92rem] leading-relaxed text-steel">{text}</p>
              <span aria-hidden="true" className="glow-card__spot" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
