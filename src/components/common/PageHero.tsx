import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative bg-charcoal py-[68px] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:opacity-55 before:bg-[repeating-linear-gradient(90deg,var(--color-rust)_0_2px,transparent_2px_16px)]">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12">
        <div className="relative max-w-[60ch]">
          <h1 className="font-display font-extrabold leading-[1.06] tracking-[-0.02em] text-paper text-[clamp(2rem,3.6vw,3rem)] mb-3.5">
            {title}
          </h1>

          {description && (
            <p className="text-slate-mist text-[1.02rem]">{description}</p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
