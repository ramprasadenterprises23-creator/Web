import { ActionLink } from '../common/ActionLink';

interface LocalCtaProps {
  title?: string;
  description?: string;
}

export function LocalCta({
  title = 'Need construction materials?',
  description = 'Talk to Ramprasad Enterprises about your construction material requirements.',
}: LocalCtaProps) {
  return (
    <section className="relative bg-ink py-14 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:opacity-55 before:bg-[repeating-linear-gradient(90deg,var(--color-amber)_0_2px,transparent_2px_16px)]">
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-7">
        <div>
          <h2 className="font-display font-bold leading-tight tracking-[-0.015em] text-paper text-[clamp(1.8rem,2.9vw,2.55rem)] mb-2">
            {title}
          </h2>
          <p className="text-slate-mist">{description}</p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <ActionLink
            kind="call"
            className="inline-flex items-center justify-center gap-2.5 text-[0.92rem] font-semibold px-6 py-3.5 rounded-sm border border-transparent bg-rust text-paper shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_6px_16px_-8px_rgba(181,69,29,0.55)] transition-colors hover:bg-rust-dark"
          >
            Call Now
          </ActionLink>

          <ActionLink
            kind="whatsapp"
            className="inline-flex items-center justify-center gap-2.5 text-[0.92rem] font-semibold px-6 py-3.5 rounded-sm border border-transparent bg-rust text-paper shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_6px_16px_-8px_rgba(181,69,29,0.55)] transition-colors hover:bg-rust-dark"
          >
            WhatsApp
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
