import type { ReactNode } from 'react';

interface MarqueeProps {
  items: ReactNode[];
  /** seconds for one full loop */
  duration?: number;
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
}

/** Infinite, hover-to-pause ticker. Second copy is hidden from screen readers. */
export function Marquee({
  items,
  duration = 45,
  className = '',
  itemClassName = '',
  separator = <span className="text-rust">◆</span>,
}: MarqueeProps) {
  const track = (hidden: boolean) => (
    <ul
      className="marquee__track"
      aria-hidden={hidden || undefined}
    >
      {items.map((item, i) => (
        <li key={i} className={`flex shrink-0 items-center gap-[var(--gap)] ${itemClassName}`}>
          {item}
          <span aria-hidden="true">{separator}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee ${className}`}
      style={{ ['--dur' as string]: `${duration}s`, ['--gap' as string]: '2.25rem' }}
    >
      {track(false)}
      {track(true)}
    </div>
  );
}
